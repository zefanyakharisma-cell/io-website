import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { L, Locale } from "./i18n";
import { media, type Media } from "@/content/media.generated";

export const newsCategories = ["Mobility", "Partnership", "Research", "Events", "Opportunities"] as const;
export type NewsCategory = (typeof newsCategories)[number];

export const categoryLabels: Record<NewsCategory, L> = {
  Mobility: { en: "Mobility", id: "Mobilitas" },
  Partnership: { en: "Partnership", id: "Kemitraan" },
  Research: { en: "Research", id: "Riset" },
  Events: { en: "Events", id: "Acara" },
  Opportunities: { en: "Opportunities", id: "Peluang" },
};

export const audiences = ["inbound", "outbound", "partners", "all"] as const;
export type Audience = (typeof audiences)[number];
export const audienceLabels: Record<Audience, L> = {
  inbound: { en: "International students", id: "Mahasiswa internasional" },
  outbound: { en: "Petra students", id: "Mahasiswa Petra" },
  partners: { en: "Partners", id: "Mitra" },
  all: { en: "Everyone", id: "Semua" },
};

export type NewsPost = {
  slug: string;
  date: string;
  /** True when the publish date is a placeholder that KUI still has to confirm. */
  datePending: boolean;
  /**
   * "upcoming" posts announce a KUI event (with eventDate, optional eventEnd);
   * "opportunity" posts are calls with a deadline; everything else is a past event or news.
   */
  kind: "past" | "upcoming" | "opportunity";
  eventDate?: string;
  eventEnd?: string;
  location?: L;
  deadline?: string;
  audience?: Audience;
  /** Internal path ("/outbound#iisma") or full URL. */
  applyUrl?: string;
  /** Placeholder post that KUI still has to replace with a real one. */
  sample: boolean;
  category: NewsCategory;
  cover: Media;
  title: L;
  excerpt: L;
  body: L;
};

const dir = path.join(process.cwd(), "content/news");

/** "drone.launch" -> media.drone.launch */
function resolveCover(key: string): Media {
  const [group, name] = key.split(".") as [keyof typeof media, string];
  const found = (media[group] as Record<string, Media> | undefined)?.[name];
  if (!found) throw new Error(`Unknown news cover: ${key}`);
  return found;
}

/** Each post holds both languages, split by "::en" and "::id" markers. */
function splitBody(content: string): L {
  const parts = content.split(/^::(en|id)\s*$/m);
  const out: Partial<L> = {};
  for (let i = 1; i < parts.length; i += 2) out[parts[i] as Locale] = marked.parse(parts[i + 1].trim(), { async: false });
  if (!out.en || !out.id) throw new Error("News post needs both ::en and ::id sections");
  return out as L;
}

const day = (v: unknown) => (v ? new Date(v as string).toISOString().slice(0, 10) : undefined);

/** Slugs taken by the static /news/* section pages. */
const reserved = new Set(["events", "calendar", "opportunities"]);

let cache: NewsPost[] | undefined;

export function getAllNews(): NewsPost[] {
  if (cache && process.env.NODE_ENV === "production") return cache;
  cache = readAll();
  return cache;
}

function readAll(): NewsPost[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
      return {
        slug: slugOf(file),
        date: new Date(data.date).toISOString().slice(0, 10),
        datePending: Boolean(data.datePending),
        kind: (data.kind === "upcoming" || data.kind === "opportunity" ? data.kind : "past") as NewsPost["kind"],
        eventDate: day(data.eventDate),
        eventEnd: day(data.eventEnd),
        location: data.location as L | undefined,
        deadline: day(data.deadline),
        audience: data.audience as Audience | undefined,
        applyUrl: data.applyUrl as string | undefined,
        sample: Boolean(data.sample),
        category: data.category as NewsCategory,
        cover: resolveCover(data.cover),
        title: data.title as L,
        excerpt: data.excerpt as L,
        body: splitBody(content),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

function slugOf(file: string) {
  const slug = file.replace(/\.md$/, "");
  if (reserved.has(slug)) throw new Error(`News slug "${slug}" clashes with a /news section page`);
  return slug;
}

export const todayISO = () => new Date().toISOString().slice(0, 10);

/** Upcoming events that have not ended yet, soonest first. */
export function getUpcomingEvents(today = todayISO()) {
  return getAllNews()
    .filter((p) => p.kind === "upcoming" && (p.eventEnd ?? p.eventDate ?? p.date) >= today)
    .sort((a, b) => (a.eventDate ?? a.date).localeCompare(b.eventDate ?? b.date));
}

/** Everything that is an event: upcoming announcements plus past event reports. */
export function getPastEvents(today = todayISO()) {
  const upcoming = new Set(getUpcomingEvents(today).map((p) => p.slug));
  return getAllNews().filter((p) => !upcoming.has(p.slug) && p.kind !== "opportunity" && (p.kind === "upcoming" || p.category === "Events" || p.category === "Mobility"));
}

/** Open opportunities by nearest deadline, then closed ones (most recent first). */
export function getOpportunities(today = todayISO()) {
  const all = getAllNews().filter((p) => p.kind === "opportunity");
  const open = all.filter((p) => !p.deadline || p.deadline >= today).sort((a, b) => (a.deadline ?? "9999").localeCompare(b.deadline ?? "9999"));
  const closed = all.filter((p) => p.deadline && p.deadline < today).sort((a, b) => b.deadline!.localeCompare(a.deadline!));
  return { open, closed };
}

export type CalendarEntry = { date: string; end?: string; slug: string; title: L; type: "event" | "deadline"; sample: boolean };

/** Events (by event date) and opportunity deadlines, for the calendar. */
export function getCalendarEntries(): CalendarEntry[] {
  return getAllNews()
    .flatMap((p): CalendarEntry[] => {
      if (p.kind === "upcoming" && p.eventDate) return [{ date: p.eventDate, end: p.eventEnd, slug: p.slug, title: p.title, type: "event", sample: p.sample }];
      if (p.kind === "opportunity" && p.deadline) return [{ date: p.deadline, slug: p.slug, title: p.title, type: "deadline", sample: p.sample }];
      return [];
    })
    .sort((a, b) => a.date.localeCompare(b.date));
}

/** Whole days from today until a date (negative once passed). */
export function daysUntil(date: string, today = todayISO()) {
  return Math.round((Date.parse(date) - Date.parse(today)) / 86_400_000);
}

export function getNews(slug: string) {
  return getAllNews().find((p) => p.slug === slug);
}

export function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(date));
}

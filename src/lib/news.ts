import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { L, Locale } from "./i18n";
import { media, type Media } from "@/content/media.generated";

export const newsCategories = ["Mobility", "Partnership", "Research", "Events"] as const;
export type NewsCategory = (typeof newsCategories)[number];

export const categoryLabels: Record<NewsCategory, L> = {
  Mobility: { en: "Mobility", id: "Mobilitas" },
  Partnership: { en: "Partnership", id: "Kemitraan" },
  Research: { en: "Research", id: "Riset" },
  Events: { en: "Events", id: "Acara" },
};

export type NewsPost = {
  slug: string;
  date: string;
  /** True when the publish date is a placeholder that KUI still has to confirm. */
  datePending: boolean;
  /** "upcoming" posts announce a future KUI event (with eventDate); everything else is a past event or news. */
  kind: "past" | "upcoming";
  eventDate?: string;
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

export function getAllNews(): NewsPost[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
      return {
        slug: file.replace(/\.md$/, ""),
        date: new Date(data.date).toISOString().slice(0, 10),
        datePending: Boolean(data.datePending),
        kind: (data.kind === "upcoming" ? "upcoming" : "past") as NewsPost["kind"],
        eventDate: data.eventDate ? new Date(data.eventDate).toISOString().slice(0, 10) : undefined,
        category: data.category as NewsCategory,
        cover: resolveCover(data.cover),
        title: data.title as L,
        excerpt: data.excerpt as L,
        body: splitBody(content),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNews(slug: string) {
  return getAllNews().find((p) => p.slug === slug);
}

export function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(date));
}

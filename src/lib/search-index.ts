// Built at build time in the locale layout and passed to the client search dialog.
import type { L } from "./i18n";
import { directNav, navigation } from "@/content/navigation";
import { inboundPrograms } from "@/content/inbound";
import { hostUniversities, outboundPrograms, scholarships } from "@/content/outbound";
import { consortia } from "@/content/partners";
import { faculties } from "@/content/faculties";
import { categoryLabels, getAllNews } from "./news";
import { newsTabs } from "@/components/sections/NewsTabs";

/** One searchable destination. Paths are locale-free ("/international-students#visa"); the dialog adds the locale. */
export type SearchItem = { title: L; description: L; path: string; group: L; keywords?: string };

const g = {
  pages: { en: "Pages", id: "Halaman" },
  programmes: { en: "Programmes", id: "Program" },
  faculties: { en: "Faculties", id: "Fakultas" },
  news: { en: "News & events", id: "Berita & acara" },
  opportunities: { en: "Opportunities", id: "Peluang" },
} satisfies Record<string, L>;

const same = (s: string): L => ({ en: s, id: s });

export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  for (const group of navigation) {
    items.push({ title: group.label, description: group.blurb, path: group.path, group: g.pages });
    for (const l of group.links) items.push({ title: l.label, description: l.description, path: l.path, group: group.label });
  }
  for (const d of directNav) items.push({ title: d.label, description: d.label, path: d.path, group: g.pages });
  for (const t of newsTabs.slice(1)) items.push({ title: t.label, description: { en: `News · ${t.label.en}`, id: `Berita · ${t.label.id}` }, path: t.path, group: g.pages });
  items.push({ title: { en: "Visa & immigration", id: "Visa & imigrasi" }, description: { en: "Visa types for international students", id: "Jenis visa untuk mahasiswa internasional" }, path: "/international-students#visa", group: g.pages, keywords: "kitas permit immigration" });

  for (const p of inboundPrograms) items.push({ title: p.title, description: p.summary, path: `/mobility/inbound/${p.slug}`, group: g.programmes, keywords: `inbound ${p.kind.en} ${p.kind.id}` });
  for (const p of outboundPrograms) {
    items.push({
      title: { en: `${p.title.en} (outbound)`, id: `${p.title.id} (outbound)` },
      description: p.definition,
      path: `/mobility/outbound/${p.slug}`,
      group: g.programmes,
      keywords: `abroad luar negeri ${p.slug === "student-exchange" ? hostUniversities.flatMap((h) => [h.country, ...h.universities]).join(" ") : ""}`,
    });
  }
  items.push({ title: { en: "Outbound scholarships", id: "Beasiswa outbound" }, description: { en: "Internal and external scholarships for exchange and dual degree", id: "Beasiswa internal dan eksternal untuk pertukaran dan dual degree" }, path: "/mobility/outbound/scholarships", group: g.programmes, keywords: scholarships.external.flatMap((e) => e.items).join(" ") });
  for (const c of consortia) items.push({ title: same(c.name), description: same(c.full), path: "/collaboration#consortium", group: g.pages, keywords: "consortium konsorsium" });

  for (const f of faculties) {
    items.push({
      title: f.name,
      description: same(`${f.code} · ${f.programmes.map((p) => p.name).join(", ")}`),
      path: "/about/faculties",
      group: g.faculties,
      keywords: [f.code, f.postgraduate, ...f.programmes.map((p) => `${p.name} ${p.tracks ?? ""}`)].join(" "),
    });
  }

  for (const p of getAllNews()) {
    items.push({
      title: p.title,
      description: p.excerpt,
      path: `/news/${p.slug}`,
      group: p.kind === "opportunity" ? g.opportunities : g.news,
      keywords: `${categoryLabels[p.category].en} ${categoryLabels[p.category].id} ${p.location?.en ?? ""}`,
    });
  }
  return items;
}

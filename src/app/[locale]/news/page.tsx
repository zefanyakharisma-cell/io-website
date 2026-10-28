import { media } from "@/content/media.generated";
import { getAllNews, newsCategories, categoryLabels } from "@/lib/news";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { NewsCard } from "@/components/sections/NewsCard";
import { NewsList } from "@/components/sections/NewsList";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { links } from "@/content/links";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/news", { en: "News", id: "Berita" }, { en: "Partnerships, mobility, research and events from Petra's International Office.", id: "Kemitraan, mobilitas, riset dan acara dari Kantor Urusan Internasional Petra." });
}

export default async function NewsPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const all = getAllNews();
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = all.filter((p) => p.kind === "upcoming" && (p.eventDate ?? p.date) >= today).sort((a, b) => (a.eventDate ?? a.date).localeCompare(b.eventDate ?? b.date));
  const [featured, ...rest] = all.filter((p) => !upcoming.includes(p));

  return (
    <>
      <PageHero
        image={media.mobility["international-day"]}
        eyebrow={en ? "News" : "Berita"}
        title={en ? "Events at the International Office" : "Kegiatan Kantor Urusan Internasional"}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: en ? "News" : "Berita" }]}
      />
      <Section tone="dark" orbs labelledBy="upcoming">
        <SectionHeading id="upcoming" eyebrow={en ? "Upcoming events" : "Acara mendatang"} title={en ? "Coming up at KUI" : "Segera di KUI"} />
        {upcoming.length ? (
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((p) => <li key={p.slug}><NewsCard post={p} locale={locale} /></li>)}
          </ul>
        ) : (
          <div className="glass mt-8 flex flex-col items-start justify-between gap-4 rounded-lg p-6 md:flex-row md:items-center">
            <p className="text-lg">{en ? "No upcoming events right now. Follow us for announcements." : "Belum ada acara mendatang. Ikuti kami untuk pengumuman."}</p>
            <a href={links.instagram} target="_blank" rel="noreferrer" className="btn btn-amber">@internationaloffice_pcu</a>
          </div>
        )}
      </Section>
      <Section tone="light" labelledBy="past">
        <SectionHeading id="past" tone="light" eyebrow={en ? "Past events" : "Acara sebelumnya"} title={en ? "Visits, programmes and stories" : "Kunjungan, program dan cerita"} />
        {featured && <div className="mt-10"><NewsCard post={featured} locale={locale} featured /></div>}
        <div className="mt-12">
          <NewsList
            allLabel={en ? "All" : "Semua"}
            categories={newsCategories.map((c) => ({ key: c, label: tr(categoryLabels[c], locale) }))}
            items={rest.map((p) => ({ key: p.slug, category: p.category, node: <NewsCard post={p} locale={locale} /> }))}
          />
        </div>
        <p className="mt-10 text-ink-secondary">{en ? "More photos on Instagram: " : "Foto lainnya di Instagram: "}<a className="prose-link" href={links.instagram} target="_blank" rel="noreferrer">@internationaloffice_pcu</a></p>
      </Section>
    </>
  );
}

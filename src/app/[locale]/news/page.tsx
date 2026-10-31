import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { media } from "@/content/media.generated";
import { getAllNews, getOpportunities, getUpcomingEvents, newsCategories, categoryLabels, todayISO } from "@/lib/news";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { NewsCard } from "@/components/sections/NewsCard";
import { NewsList } from "@/components/sections/NewsList";
import { NewsTabs } from "@/components/sections/NewsTabs";
import { OpportunityCard } from "@/components/sections/OpportunityCard";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { links } from "@/content/links";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/news", { en: "News", id: "Berita" }, { en: "Partnerships, mobility, research and events from Petra's International Office.", id: "Kemitraan, mobilitas, riset dan acara dari Kantor Urusan Internasional Petra." });
}

export default async function NewsPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const today = todayISO();
  const upcoming = getUpcomingEvents(today);
  const { open } = getOpportunities(today);
  // The story list holds news and event reports; calls for applications live under Opportunities.
  const upcomingSlugs = new Set(upcoming.map((p) => p.slug));
  const stories = getAllNews().filter((p) => !upcomingSlugs.has(p.slug) && p.kind !== "opportunity");
  const [featured, ...rest] = stories;
  const seeAll = (path: string, label: string) => (
    <Link href={href(locale, path)} className="btn btn-glass shrink-0">{label} <ArrowRight className="size-4" aria-hidden /></Link>
  );

  return (
    <>
      <PageHero
        image={media.mobility["international-day"]}
        eyebrow={en ? "News" : "Berita"}
        title={en ? "News, events and opportunities" : "Berita, acara dan peluang"}
        lead={en ? "What's on at the International Office, what's open for applications, and stories from our partners and students." : "Kegiatan Kantor Urusan Internasional, pendaftaran yang sedang dibuka, dan cerita dari mitra serta mahasiswa kami."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: en ? "News" : "Berita" }]}
      />
      <NewsTabs locale={locale} active="overview" />
      <Section tone="dark" cinematic bgImage={media.mobility["cultural-night"]} orbs labelledBy="upcoming">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="upcoming" eyebrow={en ? "Upcoming events" : "Acara mendatang"} title={en ? "Coming up at KUI" : "Segera di KUI"} />
          {seeAll("/news/calendar", en ? "Open calendar" : "Buka kalender")}
        </div>
        {upcoming.length ? (
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.slice(0, 3).map((p) => <li key={p.slug}><NewsCard post={p} locale={locale} /></li>)}
          </ul>
        ) : (
          <div className="glass mt-8 flex flex-col items-start justify-between gap-4 rounded-lg p-6 md:flex-row md:items-center">
            <p className="text-lg">{en ? "No upcoming events right now. Follow us for announcements." : "Belum ada acara mendatang. Ikuti kami untuk pengumuman."}</p>
            <a href={links.instagram} target="_blank" rel="noreferrer" className="btn btn-amber">@internationaloffice_pcu</a>
          </div>
        )}
      </Section>
      {open.length > 0 && (
        <Section tone="light" labelledBy="opportunities">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading id="opportunities" tone="light" eyebrow={en ? "Open now" : "Sedang dibuka"} title={en ? "Opportunities" : "Peluang"} lead={en ? "Scholarships, exchange calls and programmes you can apply for." : "Beasiswa, pertukaran dan program yang bisa Anda daftar."} />
            <Link href={href(locale, "/news/opportunities")} className="btn btn-midnight shrink-0">{en ? "All opportunities" : "Semua peluang"} <ArrowRight className="size-4" aria-hidden /></Link>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {open.slice(0, 3).map((p) => <li key={p.slug}><OpportunityCard post={p} locale={locale} today={today} /></li>)}
          </ul>
        </Section>
      )}
      <Section tone="white" labelledBy="past">
        <SectionHeading id="past" tone="light" eyebrow={en ? "Stories" : "Cerita"} title={en ? "Visits, programmes and stories" : "Kunjungan, program dan cerita"} />
        {featured && <div className="mt-10"><NewsCard post={featured} locale={locale} featured /></div>}
        <div className="mt-12">
          <NewsList
            allLabel={en ? "All" : "Semua"}
            categories={newsCategories.filter((c) => rest.some((p) => p.category === c)).map((c) => ({ key: c, label: tr(categoryLabels[c], locale) }))}
            items={rest.map((p) => ({ key: p.slug, category: p.category, node: <NewsCard post={p} locale={locale} /> }))}
          />
        </div>
        <p className="mt-10 text-ink-secondary">{en ? "More photos on Instagram: " : "Foto lainnya di Instagram: "}<a className="prose-link" href={links.instagram} target="_blank" rel="noreferrer">@internationaloffice_pcu</a></p>
      </Section>
    </>
  );
}

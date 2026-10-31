import { media } from "@/content/media.generated";
import { audienceLabels, audiences, getOpportunities, todayISO } from "@/lib/news";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { NewsTabs } from "@/components/sections/NewsTabs";
import { NewsList } from "@/components/sections/NewsList";
import { OpportunityCard } from "@/components/sections/OpportunityCard";
import { SectionHeading } from "@/components/brand/SectionHeading";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/news/opportunities", { en: "Opportunities", id: "Peluang" }, { en: "Scholarships, exchange calls and programmes open for applications at Petra.", id: "Beasiswa, pertukaran dan program yang sedang membuka pendaftaran di Petra." });
}

export default async function OpportunitiesPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const today = todayISO();
  const { open, closed } = getOpportunities(today);
  const used = audiences.filter((a) => open.some((p) => p.audience === a));

  return (
    <>
      <PageHero
        image={media.mobility["korea-university"]}
        eyebrow={en ? "Opportunities" : "Peluang"}
        title={en ? "Open for applications" : "Pendaftaran dibuka"}
        lead={en ? "Scholarships, exchange calls, summer programmes and ways to get involved — sorted by deadline." : "Beasiswa, pertukaran, program musim panas dan cara untuk terlibat — diurutkan menurut batas waktu."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: en ? "News" : "Berita", href: href(locale, "/news") }, { label: en ? "Opportunities" : "Peluang" }]}
      />
      <NewsTabs locale={locale} active="opportunities" />
      <Section tone="light" labelledBy="open">
        <SectionHeading id="open" tone="light" eyebrow={en ? "Open now" : "Sedang dibuka"} title={en ? "Closing soonest first" : "Yang segera ditutup lebih dulu"} />
        <div className="mt-10">
          {open.length ? (
            <NewsList
              allLabel={en ? "Everyone" : "Semua"}
              universal="all"
              categories={used.filter((a) => a !== "all").map((a) => ({ key: a, label: tr(audienceLabels[a], locale) }))}
              items={open.map((p) => ({ key: p.slug, category: p.audience ?? "all", node: <OpportunityCard post={p} locale={locale} today={today} /> }))}
            />
          ) : (
            <p className="rounded-lg border border-dashed border-midnight/20 p-6 text-ink-secondary">{en ? "Nothing open right now. Check back soon." : "Belum ada yang dibuka. Kunjungi lagi nanti."}</p>
          )}
        </div>
      </Section>
      {closed.length > 0 && (
        <Section tone="white" labelledBy="closed">
          <SectionHeading id="closed" tone="light" eyebrow={en ? "Closed" : "Ditutup"} title={en ? "Recently closed" : "Baru ditutup"} />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {closed.map((p) => <li key={p.slug}><OpportunityCard post={p} locale={locale} today={today} /></li>)}
          </ul>
        </Section>
      )}
    </>
  );
}

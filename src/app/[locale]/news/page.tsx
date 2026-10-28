import { media } from "@/content/media.generated";
import { getAllNews, newsCategories, categoryLabels } from "@/lib/news";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { NewsCard } from "@/components/sections/NewsCard";
import { NewsList } from "@/components/sections/NewsList";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/news", { en: "News & Updates", id: "Berita & Kabar" }, { en: "Partnerships, mobility, research and events from Petra's International Office.", id: "Kemitraan, mobilitas, riset dan acara dari Kantor Urusan Internasional Petra." });
}

export default async function NewsPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const [featured, ...rest] = getAllNews();

  return (
    <>
      <PageHero
        image={media.mobility["international-day"]}
        eyebrow={en ? "News & Updates" : "Berita & Kabar"}
        title={en ? "What's happening at Petra" : "Kabar terbaru dari Petra"}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: en ? "News & Updates" : "Berita & Kabar" }]}
      />
      <Section tone="light" labelledBy="latest">
        <h2 id="latest" className="sr-only">{en ? "Latest" : "Terbaru"}</h2>
        <NewsCard post={featured} locale={locale} featured />
        <div className="mt-12">
          <NewsList
            allLabel={en ? "All" : "Semua"}
            categories={newsCategories.map((c) => ({ key: c, label: tr(categoryLabels[c], locale) }))}
            items={rest.map((p) => ({ key: p.slug, category: p.category, node: <NewsCard post={p} locale={locale} /> }))}
          />
        </div>
      </Section>
    </>
  );
}

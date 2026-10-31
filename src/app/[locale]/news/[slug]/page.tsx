import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { categoryLabels, formatDate, getAllNews, getNews } from "@/lib/news";
import { href, isLocale, locales, tr, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { NewsCard } from "@/components/sections/NewsCard";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((locale) => getAllNews().map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const post = getNews(slug);
  if (!post || !isLocale(locale)) return {};
  return {
    title: tr(post.title, locale),
    description: tr(post.excerpt, locale),
    openGraph: { images: [post.cover.src] },
    alternates: { canonical: href(locale, `/news/${slug}`), languages: { en: href("en", `/news/${slug}`), id: href("id", `/news/${slug}`) } },
  };
}

export default async function NewsPostPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  const post = getNews(slug);
  if (!post || !isLocale(raw)) notFound();
  const locale: Locale = raw;
  const en = locale === "en";
  const more = getAllNews().filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        image={post.cover}
        eyebrow={tr(categoryLabels[post.category], locale) + (post.datePending ? "" : ` · ${formatDate(post.date, locale)}`)}
        title={tr(post.title, locale)}
        lead={tr(post.excerpt, locale)}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: en ? "News" : "Berita", href: href(locale, "/news") }, { label: tr(post.title, locale) }]}
      />
      <article className="bg-white py-16 text-midnight md:py-20">
        <div className="md-body mx-auto max-w-3xl px-4 text-lg leading-relaxed text-ink-secondary sm:px-6" dangerouslySetInnerHTML={{ __html: tr(post.body, locale) }} />
        <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6">
          <Link href={href(locale, "/news")} className="btn btn-midnight"><ArrowLeft className="size-4" aria-hidden /> {en ? "All news" : "Semua berita"}</Link>
        </div>
      </article>
      <Section tone="white" labelledBy="more">
        <h2 id="more" className="text-3xl text-midnight">{en ? "More news" : "Berita lainnya"}</h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((p) => <li key={p.slug}><NewsCard post={p} locale={locale} /></li>)}
        </ul>
      </Section>
    </>
  );
}

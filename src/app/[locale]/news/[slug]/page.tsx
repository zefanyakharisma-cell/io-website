import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { audienceLabels, categoryLabels, formatDate, getAllNews, getNews } from "@/lib/news";
import { ui } from "@/lib/dictionary";
import { AddToCalendar } from "@/components/sections/AddToCalendar";
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
  const more = getAllNews().filter((p) => p.slug !== slug && p.kind === post.kind).slice(0, 3);
  const back = post.kind === "opportunity" ? { path: "/news/opportunities", label: en ? "All opportunities" : "Semua peluang" } : post.kind === "upcoming" ? { path: "/news/events", label: en ? "All events" : "Semua acara" } : { path: "/news", label: en ? "All news" : "Semua berita" };
  const calDate = post.kind === "upcoming" ? post.eventDate : post.kind === "opportunity" ? post.deadline : undefined;
  const applyHref = post.applyUrl && (/^https?:/.test(post.applyUrl) ? post.applyUrl : href(locale, post.applyUrl));
  const dateLine = post.kind === "upcoming" && post.eventDate ? formatDate(post.eventDate, locale) + (post.eventEnd ? ` – ${formatDate(post.eventEnd, locale)}` : "") : undefined;

  return (
    <>
      <PageHero
        image={post.cover}
        size="compact"
        eyebrow={tr(categoryLabels[post.category], locale) + (post.datePending || post.kind !== "past" ? "" : ` · ${formatDate(post.date, locale)}`)}
        title={tr(post.title, locale)}
        lead={tr(post.excerpt, locale)}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: en ? "News" : "Berita", href: href(locale, "/news") }, { label: tr(post.title, locale) }]}
      >
        {(calDate || post.location || post.audience) && (
          <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-smoke">
            {dateLine && <div className="flex items-center gap-2"><dt className="sr-only">{en ? "Date" : "Tanggal"}</dt><CalendarDays className="size-4 text-amber" aria-hidden /><dd>{dateLine}</dd></div>}
            {post.deadline && <div className="flex items-center gap-2"><dt className="sr-only">{tr(ui.deadline, locale)}</dt><Clock className="size-4 text-amber" aria-hidden /><dd>{tr(ui.deadline, locale)}: {formatDate(post.deadline, locale)}</dd></div>}
            {post.location && <div className="flex items-center gap-2"><dt className="sr-only">{en ? "Location" : "Lokasi"}</dt><MapPin className="size-4 text-amber" aria-hidden /><dd>{tr(post.location, locale)}</dd></div>}
            {post.audience && <div className="flex items-center gap-2"><dt className="sr-only">{en ? "For" : "Untuk"}</dt><Users className="size-4 text-amber" aria-hidden /><dd>{tr(audienceLabels[post.audience], locale)}</dd></div>}
          </dl>
        )}
        {(applyHref || calDate) && (
          <div className="mt-5 flex flex-wrap gap-3">
            {applyHref && <a href={applyHref} className="btn btn-amber" {...(/^https?:/.test(applyHref) ? { target: "_blank", rel: "noreferrer" } : {})}>{tr(ui.applyNow, locale)} <ArrowUpRight className="size-4" aria-hidden /></a>}
            {calDate && <AddToCalendar uid={post.slug} title={tr(post.title, locale)} start={calDate} end={post.kind === "upcoming" ? post.eventEnd : undefined} location={post.location && tr(post.location, locale)} url={href(locale, `/news/${post.slug}`)} label={tr(ui.addToCalendar, locale)} />}
          </div>
        )}
        {post.sample && <p className="mt-4 text-xs uppercase tracking-wide text-amber">{tr(ui.sampleNote, locale)}</p>}
      </PageHero>
      <article className="bg-white py-16 text-midnight md:py-20">
        <div className="md-body mx-auto max-w-3xl px-4 text-lg leading-relaxed text-ink-secondary sm:px-6" dangerouslySetInnerHTML={{ __html: tr(post.body, locale) }} />
        <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6">
          <Link href={href(locale, back.path)} className="btn btn-midnight"><ArrowLeft className="size-4" aria-hidden /> {back.label}</Link>
        </div>
      </article>
      {more.length > 0 && <Section tone="white" labelledBy="more">
        <h2 id="more" className="text-3xl text-midnight">{post.kind === "opportunity" ? (en ? "More opportunities" : "Peluang lainnya") : post.kind === "upcoming" ? (en ? "More events" : "Acara lainnya") : en ? "More news" : "Berita lainnya"}</h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((p) => <li key={p.slug}><NewsCard post={p} locale={locale} /></li>)}
        </ul>
      </Section>}
    </>
  );
}

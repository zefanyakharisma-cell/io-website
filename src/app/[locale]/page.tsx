import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, GraduationCap, Plane } from "lucide-react";
import { media } from "@/content/media.generated";
import { videos } from "@/content/media";
import { badges, keyStats, rankingNote, rankings, tagline } from "@/content/profile";
import { signatureProgrammes, gallery } from "@/content/mobility";
import { byRegion, logoStrip, networkTotals } from "@/content/partners";
import { faculties } from "@/content/faculties";
import { getAllNews } from "@/lib/news";
import { href, isLocale, localeParams, tr, type Locale } from "@/lib/i18n";
import { MAP_SIZE, partnerCountryPoints, surabaya } from "@/lib/map-points";
import { VideoSlot } from "@/components/brand/VideoSlot";
import { Ring } from "@/components/brand/Ring";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Section } from "@/components/sections/Section";
import { StatGrid } from "@/components/sections/StatGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { NewsCard } from "@/components/sections/NewsCard";
import { WorldMap } from "@/components/ui/world-map";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Gallery } from "@/components/ui/gallery";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return localeParams();
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const en = locale === "en";
  const news = getAllNews().slice(0, 4);
  const homeStats = [keyStats[6], { ...networkTotals[1], note: undefined }, keyStats[3], keyStats[4]];

  const audiences = [
    {
      icon: Building2,
      title: en ? "Partner with us" : "Bermitra dengan kami",
      body: en ? "Exchange, joint degrees, research and more." : "Pertukaran, gelar bersama, riset dan lainnya.",
      path: "/partnership/connect",
    },
    {
      icon: GraduationCap,
      title: en ? "Study at Petra" : "Belajar di Petra",
      body: en ? "Semester exchange and summer programmes." : "Pertukaran semester dan program musim panas.",
      path: "/mobility/inbound",
    },
    {
      icon: Plane,
      title: en ? "Go abroad" : "Ke luar negeri",
      body: en ? "Petranesians in 10 countries." : "Petranesian di 10 negara.",
      path: "/mobility/outbound",
    },
  ];

  const mobilityTiles = [
    { path: "/mobility/inbound", image: media.mobility["cultural-night"], eyebrow: "Inbound", title: en ? "Spend a semester in Surabaya" : "Satu semester di Surabaya", body: en ? "Credits that count at home, Indonesian from zero, and a Petramate buddy." : "Kredit yang diakui di kampus asal, bahasa Indonesia dari nol, dan buddy Petramate." },
    { path: "/mobility/outbound", image: media.mobility.nsysu, eyebrow: "Outbound", title: en ? "Petranesians around the world" : "Petranesian di seluruh dunia", body: en ? "Exchange, double degrees and summer schools in 10 countries." : "Pertukaran, gelar ganda dan summer school di 10 negara." },
    { path: "/mobility/international-program", image: media.ai["study-table"], eyebrow: en ? "Regular International Program" : "Program Internasional Reguler", title: en ? "A full degree, in English" : "Gelar penuh, dalam bahasa Inggris", body: en ? "8 bachelor's programmes with a semester abroad built in." : "8 program sarjana dengan satu semester di luar negeri." },
  ];

  return (
    <>
      {/* 1 · Hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-12 pt-32 text-white md:items-center md:pb-0">
        <VideoSlot poster={media.campus.landmark} src={videos.homeHero} priority />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-midnight-deep/95 via-midnight-deep/60 to-midnight-deep/20" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-midnight-deep via-transparent to-midnight-deep/40" />
        <Ring shape="ring-u" className="-right-24 -top-10 w-[22rem] text-amber md:-right-32 md:w-[34rem]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:px-8">
          <Reveal>
            <p className="tagline mb-6 text-amber">{tagline}</p>
            <h1 className="text-[clamp(2.75rem,1.6rem+5vw,5.75rem)] leading-[0.98]">
              {en ? "Go beyond borders with Petra." : "Melampaui batas bersama Petra."}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-smoke md:text-xl">
              {en
                ? "The International Office of Petra Christian University connects Surabaya with 180+ partners in 33 countries."
                : "Kantor Urusan Internasional Universitas Kristen Petra menghubungkan Surabaya dengan 180+ mitra di 33 negara."}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {audiences.map((a) => (
                <li key={a.path}>
                  <Link href={href(locale, a.path)} className="glass group flex h-full flex-col rounded-lg p-4 transition-transform hover:-translate-y-0.5">
                    <a.icon className="size-5 text-amber" aria-hidden />
                    <span className="mt-3 flex items-center gap-1.5 font-semibold">
                      {a.title}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                    <span className="mt-1 text-sm text-smoke/85">{a.body}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15} className="hidden lg:block">
            <div className="glass rounded-lg p-6">
              <p className="eyebrow text-amber">QS World University Rankings 2026</p>
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5">
                {rankings.map((r) => (
                  <div key={r.rank}>
                    <dt className="sr-only">{tr(r.label, locale)}</dt>
                    <dd>
                      <span className="font-display text-5xl leading-none text-white">{r.rank}</span>
                      <span className="mt-1 block text-sm text-smoke/90">{tr(r.label, locale)}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
                {badges.slice(0, 3).map((b) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={b.src} src={b.src} alt={b.alt} className="h-14 w-auto" loading="lazy" />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 · Numbers */}
      <Section tone="dark" labelledBy="numbers-title" className="!py-16 md:!py-20">
        <h2 id="numbers-title" className="sr-only">{en ? "Petra in numbers" : "Petra dalam angka"}</h2>
        <StatGrid stats={homeStats} locale={locale} />
        <p className="mt-6 text-sm text-smoke/80">{tr(rankingNote, locale)}</p>
      </Section>

      {/* 3 · Mobility tiles */}
      <Section tone="light" labelledBy="mobility-title">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="mobility-title" tone="light" eyebrow={en ? "Mobility Program" : "Program Mobilitas"} title={en ? "Three ways to move" : "Tiga jalur mobilitas"} lead={en ? "Come to Surabaya, go abroad, or take a whole degree in English." : "Datang ke Surabaya, berangkat ke luar negeri, atau kuliah penuh dalam bahasa Inggris."} />
        </div>
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {mobilityTiles.map((t, i) => (
            <li key={t.path}>
              <Reveal delay={i * 0.08} className="h-full">
                <Link href={href(locale, t.path)} className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-lg text-white shadow-card md:aspect-[4/5]">
                  <Photo image={t.image} className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-105" sizes="(min-width: 768px) 33vw, 100vw" />
                  <span className="absolute inset-0 bg-gradient-to-t from-midnight-deep/95 via-midnight-deep/30 to-transparent" />
                  <span className="glass relative m-3 block rounded-md p-5">
                    <span className="eyebrow text-amber">{t.eyebrow}</span>
                    <span className="mt-2 flex items-start justify-between gap-2 text-xl font-bold leading-snug">
                      {t.title}
                      <ArrowUpRight className="mt-1 size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                    </span>
                    <span className="mt-2 block text-sm text-smoke/90">{t.body}</span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* 4 · Signature programmes */}
      <Section tone="deep" labelledBy="sig-title">
        <Ring shape="ring-u-line" className="-right-32 top-10 w-[32rem] text-teal/50" />
        <SectionHeading id="sig-title" eyebrow={en ? "Signature programmes" : "Program unggulan"} title={en ? "Short stays, lasting stories" : "Singgah sebentar, cerita selamanya"} lead={en ? "From village outreach since 1996 to a summer consortium across four countries." : "Dari pengabdian desa sejak 1996 hingga konsorsium musim panas di empat negara."} />
        <ul tabIndex={0} aria-label={en ? "Signature programmes" : "Program unggulan"} className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:thin] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {signatureProgrammes.map((p, i) => (
            <li key={p.code} className="w-[80%] shrink-0 snap-start sm:w-auto">
              <Reveal delay={i * 0.08} className="h-full">
                <Link href={href(locale, `/mobility/inbound#${p.code.toLowerCase()}`)} className="group relative flex h-[26rem] flex-col justify-end overflow-hidden rounded-lg">
                  <Photo image={p.images[0]} className="absolute inset-0 transition-transform duration-[1.2s] group-hover:scale-105" sizes="(min-width: 1024px) 25vw, 80vw" />
                  <span className="absolute inset-0 bg-gradient-to-t from-midnight-deep via-midnight-deep/40 to-transparent" />
                  <span className="relative p-5">
                    <span className="font-display text-5xl leading-none text-amber">{p.code}</span>
                    <span className="mt-1 block font-semibold">{p.name}</span>
                    <span className="mt-2 block text-sm text-smoke/85">{tr(p.kicker, locale)}</span>
                    <span className="mt-4 flex gap-4 border-t border-white/15 pt-3 text-sm">
                      {p.facts.slice(0, 2).map((f) => (
                        <span key={f.value + tr(f.label, "en")}>
                          <strong className="block text-white">{f.value}</strong>
                          <span className="text-smoke/80">{tr(f.label, locale)}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* 5 · Global network */}
      <Section tone="dark" orbs labelledBy="network-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <div>
            <SectionHeading id="network-title" eyebrow={en ? "International partnership" : "Kemitraan internasional"} kicker={en ? "Embrace the global stage." : "Rangkul panggung global."} title={en ? "Go beyond borders." : "Melampaui batas."} />
            <p className="mt-5 text-lg text-smoke/90">
              {en ? "180+ international partners from 33 countries, with Greater China and ASEAN the largest regions." : "180+ mitra internasional dari 33 negara, dengan Tiongkok Raya dan ASEAN sebagai kawasan terbesar."}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {byRegion.map((r) => (
                <li key={r.color} className="glass flex items-center gap-2 rounded-full px-3 py-1.5 text-sm">
                  <span className="size-2 rounded-full" style={{ background: r.color }} aria-hidden />
                  {tr(r.label, locale)} <strong className="tabular-nums">{Math.round(r.value)}%</strong>
                </li>
              ))}
            </ul>
            <Link href={href(locale, "/partnership/partners")} className="btn btn-amber mt-8">
              {en ? "Explore the partner list" : "Lihat daftar mitra"} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <Reveal>
            <WorldMap origin={surabaya} points={partnerCountryPoints()} size={MAP_SIZE} />
          </Reveal>
        </div>
        <div className="mt-16">
          <InfiniteSlider gap={20} duration={50} durationOnHover={120}>
            {logoStrip.map((l) => (
              <div key={l.src} className="grid h-20 w-40 shrink-0 place-items-center rounded-md bg-white px-4 py-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.src} alt={l.alt} className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </Section>

      {/* 6 · News */}
      <Section tone="light" labelledBy="news-title">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="news-title" tone="light" eyebrow={en ? "News & Updates" : "Berita & Kabar"} title={en ? "What's happening at Petra" : "Kabar terbaru dari Petra"} />
          <Link href={href(locale, "/news")} className="btn btn-midnight">
            {en ? "All news" : "Semua berita"} <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <NewsCard post={news[0]} locale={locale} featured />
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {news.slice(1, 4).map((p) => (
              <NewsCard key={p.slug} post={p} locale={locale} compact />
            ))}
          </div>
        </div>
      </Section>

      {/* 7 · Life mosaic */}
      <Section tone="deep" labelledBy="life-title">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading id="life-title" eyebrow={en ? "In pictures" : "Dalam gambar"} title={en ? "Petranesians in global perspective" : "Petranesian dalam perspektif global"} lead={en ? "Service-learning across eastern Indonesia, international programme life in Surabaya, and Petranesians on exchange worldwide." : "Service-learning di Indonesia timur, kehidupan program internasional di Surabaya, dan Petranesian yang berkuliah di seluruh dunia."} />
          </div>
          <Gallery items={gallery.map((g) => ({ ...g, caption: tr(g.caption, locale) }))} columns="columns-2 md:columns-3" openLabel={en ? "Open photo" : "Buka foto"} />
        </div>
      </Section>

      {/* 8 · Faculties strip */}
      <Section tone="light" labelledBy="fac-title">
        <SectionHeading id="fac-title" tone="light" eyebrow={en ? "Academic structure" : "Struktur akademik"} title={en ? "Seven faculties, one campus" : "Tujuh fakultas, satu kampus"} />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {faculties.map((f) => (
            <li key={f.code}>
              <Link href={href(locale, `/about/faculties#${f.code.toLowerCase()}`)} className="group relative block aspect-[3/4] overflow-hidden rounded-lg">
                <Photo image={f.image} className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 14vw, 50vw" />
                <span className="absolute inset-0 bg-gradient-to-t from-midnight-deep via-midnight-deep/30 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-3 text-white">
                  <span className="font-display text-3xl leading-none text-amber">{f.code}</span>
                  <span className="mt-1 block text-xs font-medium leading-snug">{tr(f.name, locale)}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        locale={locale}
        image={media.mobility["international-day"]}
        title={en ? "Every partnership is shaped with you." : "Setiap kemitraan dirancang bersama Anda."}
        body={en ? "From a single joint lecture to a full degree pathway, tell us what you have in mind." : "Dari satu kuliah bersama hingga jalur gelar penuh, ceritakan rencana Anda."}
      />
    </>
  );
}

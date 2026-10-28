import { ArrowUpRight, MapPin } from "lucide-react";
import { media } from "@/content/media.generated";
import { aboutNav } from "@/content/navigation";
import { surabaya } from "@/content/getToKnow";
import { links } from "@/content/links";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";
import { WorldMap } from "@/components/ui/world-map";
import { SourceNote } from "@/components/sections/SourceNote";
import { PhotoCredit } from "@/components/sections/PhotoCredit";
import { EAST_JAVA_SIZE, projectEastJava } from "@/lib/map-projection";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/about/surabaya", { en: "Beautiful Surabaya", id: "Surabaya yang Indah" }, { en: "Surabaya, gateway to East Java — near Bali, Malang and Mount Bromo.", id: "Surabaya, gerbang Jawa Timur — dekat Bali, Malang dan Gunung Bromo." });
}

export default async function SurabayaPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const origin = projectEastJava(-7.2575, 112.7521);
  const trips = surabaya.dayTrips.map((t) => ({ ...projectEastJava(t.lat, t.lng), label: t.place, side: t.side, detail: tr(t.time, locale) }));

  return (
    <>
      <PageHero
        image={media.mobility.bromo}
        eyebrow={tr(aboutNav.label, locale)}
        title={en ? "Beautiful Surabaya" : "Surabaya yang Indah"}
        lead={tr(surabaya.intro, locale)}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(aboutNav.label, locale), href: href(locale, "/about") }, { label: en ? "Beautiful Surabaya" : "Surabaya yang Indah" }]}
      />
      <Section tone="dark" orbs labelledBy="nearby">
        <SectionHeading id="nearby" eyebrow={en ? "Close to it all" : "Dekat ke mana saja"} title={en ? "Your base for exploring Indonesia" : "Titik awal menjelajah Indonesia"} />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {surabaya.nearby.map((n) => (
            <li key={n.place} className="glass rounded-lg p-5">
              <MapPin className="size-5 text-amber" aria-hidden />
              <p className="mt-3 font-display text-4xl leading-none">{n.place}</p>
              <p className="mt-1 text-smoke/90">{tr(n.detail, locale)}</p>
            </li>
          ))}
        </ul>
        <div className="glass mt-6 rounded-lg p-4 md:p-6">
          <h3 className="text-lg">{en ? "Day trips from Surabaya" : "Perjalanan sehari dari Surabaya"}</h3>
          <WorldMap className="mx-auto mt-4 max-w-3xl" origin={origin} points={trips} size={EAST_JAVA_SIZE} mapSrc="/brand/eastjava-map.svg" dotOpacity="opacity-100" fade={false} showLabels />
        </div>
        <SourceNote ids={["malangToll", "bromoTransfer", "naturalEarth"]} locale={locale} tone="dark" />
      </Section>
      <Section tone="deep" labelledBy="landmarks">
        <SectionHeading id="landmarks" eyebrow={en ? "City of Heroes" : "Kota Pahlawan"} title={en ? "Landmarks to see" : "Ikon kota yang wajib dikunjungi"} />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {surabaya.landmarks.map((l, i) => (
            <li key={l.name}>
              <Reveal delay={i * 0.05} className="h-full">
                <article className="glass flex h-full flex-col overflow-hidden rounded-lg">
                  <div className="relative aspect-[4/3]"><Photo image={l.photo} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" /></div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="font-display text-4xl leading-none text-amber">{l.stat}</p>
                    <h3 className="mt-3 text-lg">{l.name}</h3>
                    <p className="mt-1 flex-1 text-sm text-smoke/90">{tr(l.body, locale)}</p>
                    <PhotoCredit credit={l.photo.credit} locale={locale} tone="dark" className="mt-4" />
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <SourceNote ids={["surabayaLandmarks", "surabayaCultureTrip", "suramaduWiki"]} locale={locale} tone="dark" className="mt-6" />
      </Section>
      <Section tone="light" labelledBy="photos">
        <SectionHeading id="photos" tone="light" eyebrow={en ? "In pictures" : "Dalam gambar"} title={en ? "Sights around Surabaya" : "Pesona sekitar Surabaya"} lead={en ? "The city by day and night, and two favourite trips out of it." : "Kota di siang dan malam hari, serta dua tujuan favorit di luar kota."} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {surabaya.photos.map((p, i) => (
            <li key={p.image.src}>
              <Reveal delay={i * 0.05}>
                <figure className="overflow-hidden rounded-lg bg-white shadow-card">
                  <div className="relative aspect-[4/5]"><Photo image={p.image} sizes="(min-width: 1024px) 25vw, 50vw" /></div>
                  <figcaption className="p-4">
                    <p className="font-semibold text-midnight">{tr(p.caption, locale)}</p>
                    <PhotoCredit credit={p.image.credit} locale={locale} className="mt-1" />
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="deep" labelledBy="explore">
        <SectionHeading id="explore" eyebrow="Sparkling Surabaya" title={en ? "Plan your visits" : "Rencanakan kunjungan Anda"} lead={en ? "Official tourism channels of the Surabaya City Government." : "Kanal pariwisata resmi Pemerintah Kota Surabaya."} />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {links.surabaya.map((l) => (
            <li key={l.url}>
              <a href={l.url} target="_blank" rel="noreferrer" className="glass flex h-full items-start justify-between gap-3 rounded-lg p-5 font-semibold hover:bg-white/10">
                {l.label}
                <ArrowUpRight className="size-4 shrink-0 text-amber" aria-hidden />
                <span className="sr-only">{en ? "(opens in a new tab)" : "(membuka tab baru)"}</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

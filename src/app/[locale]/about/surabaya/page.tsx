import { ArrowUpRight, MapPin } from "lucide-react";
import { media } from "@/content/media.generated";
import { aboutNav } from "@/content/navigation";
import { surabaya } from "@/content/getToKnow";
import { links } from "@/content/links";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { ToConfirm } from "@/components/sections/bits";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/about/surabaya", { en: "Beautiful Surabaya", id: "Surabaya yang Indah" }, { en: "Surabaya, gateway to East Java — near Bali, Malang and Mount Bromo.", id: "Surabaya, gerbang Jawa Timur — dekat Bali, Malang dan Gunung Bromo." });
}

export default async function SurabayaPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

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
      </Section>
      <Section tone="light" labelledBy="photos">
        <SectionHeading id="photos" tone="light" eyebrow={en ? "In pictures" : "Dalam gambar"} title={en ? "Sights around Surabaya" : "Pesona sekitar Surabaya"} lead={en ? "Photos from the Surabaya City Government will be added here, each credited to its account." : "Foto dari Pemerintah Kota Surabaya akan ditambahkan di sini, lengkap dengan kredit akun pemiliknya."} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {surabaya.photos.map((p, i) => (
            <li key={p.image.src}>
              <Reveal delay={i * 0.05}>
                <figure className="overflow-hidden rounded-lg bg-white shadow-card">
                  <div className="relative aspect-[4/5]"><Photo image={p.image} sizes="(min-width: 1024px) 25vw, 50vw" /></div>
                  <figcaption className="p-4">
                    <p className="font-semibold text-midnight">{tr(p.caption, locale)}</p>
                    <p className="text-xs text-ink-secondary">{en ? "Photo: " : "Foto: "}{p.credit}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
        <ToConfirm locale={locale} className="mt-6 text-emerald" />
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

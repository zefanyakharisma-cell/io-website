import { Mail } from "lucide-react";
import { media } from "@/content/media.generated";
import { mobilityNav } from "@/content/navigation";
import { outboundPrograms } from "@/content/outbound";
import { mobilityGlance } from "@/content/mobility";
import { links, whatsapp } from "@/content/links";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { MAP_SIZE, countryPoints, surabaya } from "@/lib/map-points";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { ExternalLink, WhatsAppButton } from "@/components/sections/links";
import { CardGrid } from "@/components/sections/mobility";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { WorldMap } from "@/components/ui/world-map";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/mobility/outbound", { en: "Outbound", id: "Outbound" }, { en: "Petranesians abroad: short programs, student exchange, dual degrees, scholarships and student experiences.", id: "Petranesian ke luar negeri: program singkat, pertukaran mahasiswa, dual degree, beasiswa dan pengalaman mahasiswa." });
}

export default async function OutboundPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const cards = [
    ...outboundPrograms.map((p) => ({ path: `/mobility/outbound/${p.slug}`, title: p.title, kind: p.kind, summary: p.definition, image: p.image })),
    { path: "/mobility/outbound/scholarships", title: { en: "Scholarships", id: "Beasiswa" }, kind: { en: "Internal & external", id: "Internal & eksternal" }, summary: { en: "Petra's own mobility scholarships, plus GKS, JASSO, Orange Tulip and more.", id: "Beasiswa mobilitas dari Petra, serta GKS, JASSO, Orange Tulip dan lainnya." }, image: media.mobility.nsysu },
    { path: "/mobility/outbound/experiences", title: { en: "Experiences", id: "Pengalaman" }, kind: { en: "Photos & videos", id: "Foto & video" }, summary: { en: "Petranesians share their exchange and dual degree journeys.", id: "Petranesian berbagi kisah pertukaran dan dual degree mereka." }, image: media.mobility["exchange-group"] },
  ];

  return (
    <>
      <PageHero
        image={media.mobility["korea-university"]}
        eyebrow={`${tr(mobilityNav.label, locale)} · Outbound`}
        title={en ? "Petranesians around the world" : "Petranesian di seluruh dunia"}
        lead={en ? `In 2025–2026, Petranesians studied in ${mobilityGlance.outbound.countries} countries on ${mobilityGlance.outbound.continents} continents.` : `Pada 2025–2026, Petranesian belajar di ${mobilityGlance.outbound.countries} negara di ${mobilityGlance.outbound.continents} benua.`}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(mobilityNav.label, locale), href: href(locale, "/mobility") }, { label: "Outbound" }]}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <ExternalLink href={links.outboundRegistration} label={en ? "Register (Form 01)" : "Daftar (Form 01)"} locale={locale} />
          <ExternalLink href={links.outboundFlyer} label={en ? "Outbound Program Flyer" : "Flyer Program Outbound"} locale={locale} variant="glass" icon="download" className="text-white" />
        </div>
      </PageHero>

      <Section tone="light" labelledBy="programs-title">
        <SectionHeading id="programs-title" tone="light" eyebrow="Outbound" title={en ? "Choose your journey" : "Pilih perjalanan Anda"} />
        <div className="mt-10"><CardGrid locale={locale} items={cards} /></div>
      </Section>

      <Section tone="dark" cinematic bgImage={media.mobility["exchange-group"]} orbs labelledBy="where">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <SectionHeading id="where" eyebrow="Outbound · 2025–2026" title={en ? "Where Petranesians went" : "Tujuan Petranesian"} lead={mobilityGlance.outbound.named.join(", ")} />
          <WorldMap origin={surabaya} size={MAP_SIZE} points={countryPoints(mobilityGlance.outbound.named, "#ffbc00")} />
        </div>
      </Section>

      <Section tone="white" labelledBy="inquiries">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <SectionHeading id="inquiries" tone="light" eyebrow={en ? "Inquiries" : "Pertanyaan"} title={en ? "Questions about going abroad?" : "Ada pertanyaan tentang ke luar negeri?"} lead={en ? "Chat with us on WhatsApp (chat only, no calls) or send an email." : "Hubungi kami via WhatsApp (khusus chat, tanpa telepon) atau email."} />
          <div className="flex flex-col gap-3">
            <WhatsAppButton digits={whatsapp.outbound.digits} display={whatsapp.outbound.display} locale={locale} className="justify-center" />
            <a href="mailto:staff-mobility@petra.ac.id" className="btn justify-center border border-midnight/25 text-midnight hover:bg-midnight/5"><Mail className="size-4" aria-hidden /> staff-mobility@petra.ac.id</a>
          </div>
        </div>
      </Section>
    </>
  );
}

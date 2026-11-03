import { Mail } from "lucide-react";
import { media } from "@/content/media.generated";
import { videos } from "@/content/media";
import { mobilityNav } from "@/content/navigation";
import { inboundIntro, inboundPrograms } from "@/content/inbound";
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
  return pageMeta(await resolveLocale(params), "/mobility/inbound", { en: "Inbound", id: "Inbound" }, { en: "Study at Petra in Surabaya: the Inbound Student Exchange Program, short-term and non-degree programmes, and student experiences.", id: "Belajar di Petra, Surabaya: Program Pertukaran Mahasiswa Inbound, program jangka pendek dan non-gelar, serta pengalaman mahasiswa." });
}

export default async function InboundPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        image={media.mobility.bromo}
        video={videos.inboundHero}
        eyebrow={`${tr(mobilityNav.label, locale)} · Inbound`}
        title={en ? "Study in Surabaya" : "Belajar di Surabaya"}
        lead={en ? "A semester, a summer or a year — alongside Petranesian and international students." : "Satu semester, musim panas atau satu tahun — bersama mahasiswa Petra dan internasional."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(mobilityNav.label, locale), href: href(locale, "/mobility") }, { label: "Inbound" }]}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <ExternalLink href={links.inboundRegistration} label={en ? "Register online" : "Daftar online"} locale={locale} />
          <a href="#programs" className="btn btn-glass">{en ? "See programs" : "Lihat program"}</a>
        </div>
      </PageHero>

      <Section tone="light" labelledBy="programs-title" id="programs" className="scroll-mt-20">
        <SectionHeading id="programs-title" tone="light" eyebrow="Inbound" title={en ? "Welcome to Petra" : "Selamat datang di Petra"} lead={tr(inboundIntro, locale)} />
        <div className="mt-10">
          <CardGrid locale={locale} items={inboundPrograms.map((p) => ({ ...p, path: `/mobility/inbound/${p.slug}` }))} />
        </div>
      </Section>

      <Section tone="dark" cinematic bgImage={media.mobility["asp-group"]} orbs labelledBy="glance">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <SectionHeading id="glance" eyebrow="Inbound · 2025–2026" title={en ? `Students from ${mobilityGlance.inbound.countries} countries, ${mobilityGlance.inbound.continents} continents` : `Mahasiswa dari ${mobilityGlance.inbound.countries} negara, ${mobilityGlance.inbound.continents} benua`} lead={en ? `Including ${mobilityGlance.inbound.named.join(", ")}.` : `Termasuk ${mobilityGlance.inbound.named.join(", ")}.`} />
          <WorldMap origin={surabaya} size={MAP_SIZE} points={countryPoints(mobilityGlance.inbound.named, "#45b8bc")} dashed />
        </div>
      </Section>

      <Section tone="white" labelledBy="inquiries">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <SectionHeading id="inquiries" tone="light" eyebrow={en ? "Inquiries" : "Pertanyaan"} title={en ? "Questions about studying at Petra?" : "Ada pertanyaan tentang belajar di Petra?"} lead={en ? "Chat with us on WhatsApp (chat only, no calls) or send an email." : "Hubungi kami via WhatsApp (khusus chat, tanpa telepon) atau email."} />
          <div className="flex flex-col gap-3">
            <WhatsAppButton digits={whatsapp.inbound.digits} display={whatsapp.inbound.display} locale={locale} className="justify-center" />
            <a href="mailto:head-mobility@petra.ac.id" className="btn justify-center border border-midnight/25 text-midnight hover:bg-midnight/5"><Mail className="size-4" aria-hidden /> head-mobility@petra.ac.id</a>
          </div>
        </div>
      </Section>
    </>
  );
}

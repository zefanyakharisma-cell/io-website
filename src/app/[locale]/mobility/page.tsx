import { media } from "@/content/media.generated";
import { mobilityNav } from "@/content/navigation";
import { inboundIntro } from "@/content/inbound";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { CardGrid } from "@/components/sections/mobility";
import { SectionHeading } from "@/components/brand/SectionHeading";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/mobility", mobilityNav.label, mobilityNav.blurb);
}

export default async function MobilityPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        image={media.mobility["exchange-group"]}
        eyebrow={tr(mobilityNav.label, locale)}
        title={en ? "Go beyond borders" : "Melampaui batas"}
        lead={tr(mobilityNav.blurb, locale)}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(mobilityNav.label, locale) }]}
      />

      <Section tone="light" labelledBy="ways">
        <SectionHeading id="ways" tone="light" eyebrow={en ? "Two directions" : "Dua arah"} title={en ? "Inbound and outbound" : "Inbound dan outbound"} lead={tr(inboundIntro, locale)} />
        <div className="mt-10">
          <CardGrid
            locale={locale}
            cols={2}
            items={[
              { path: "/mobility/inbound", title: { en: "Inbound", id: "Inbound" }, kind: { en: "Come to Petra", id: "Datang ke Petra" }, summary: { en: "Student exchange, short-term and non-degree programmes in Surabaya, and the experiences of our international students.", id: "Pertukaran mahasiswa, program jangka pendek dan non-gelar di Surabaya, serta pengalaman mahasiswa internasional kami." }, image: media.mobility["cultural-night"] },
              { path: "/mobility/outbound", title: { en: "Outbound", id: "Outbound" }, kind: { en: "Petranesians abroad", id: "Petranesian ke luar negeri" }, summary: { en: "Short programs, student exchange and dual degrees abroad, with scholarships to help you go.", id: "Program singkat, pertukaran mahasiswa dan dual degree di luar negeri, dengan beasiswa untuk mendukung Anda." }, image: media.mobility.nsysu },
            ]}
          />
        </div>
      </Section>

      <CtaBand locale={locale} image={media.mobility["asp-group"]} title={en ? "Questions about mobility?" : "Ada pertanyaan tentang mobilitas?"} body={en ? "Our student mobility team answers on WhatsApp and email." : "Tim mobilitas mahasiswa kami siap menjawab melalui WhatsApp dan email."} />
    </>
  );
}

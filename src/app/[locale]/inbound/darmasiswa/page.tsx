import { Check } from "lucide-react";
import { media } from "@/content/media.generated";
import { inboundNav } from "@/content/navigation";
import { darmasiswa } from "@/content/inbound";
import { links } from "@/content/links";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { ToConfirm } from "@/components/sections/bits";
import { ExternalLink } from "@/components/sections/links";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Photo } from "@/components/brand/Photo";
import { Timeline } from "@/components/sections/Timeline";
import { SourceNote } from "@/components/sections/SourceNote";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/inbound/darmasiswa", { en: "Darmasiswa Scholarship", id: "Beasiswa Darmasiswa" }, { en: "The Indonesian government scholarship to study Indonesian language and culture at Petra.", id: "Beasiswa pemerintah Indonesia untuk belajar bahasa dan budaya Indonesia di Petra." });
}

export default async function DarmasiswaPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        image={media.mobility["cultural-night"]}
        eyebrow={en ? "Inbound · scholarship" : "Inbound · beasiswa"}
        title={en ? "Darmasiswa Scholarship" : "Beasiswa Darmasiswa"}
        lead={tr(darmasiswa.intro, locale)}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(inboundNav.label, locale), href: href(locale, "/inbound") }, { label: "Darmasiswa" }]}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <ExternalLink href={links.darmasiswaApply} label={en ? "Apply on the official portal" : "Daftar di portal resmi"} locale={locale} />
          <ExternalLink href={links.darmasiswa} label={en ? "Darmasiswa website" : "Situs Darmasiswa"} locale={locale} variant="glass" />
        </div>
      </PageHero>
      <Section tone="light" labelledBy="how">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading id="how" tone="light" eyebrow={en ? "How to join" : "Cara bergabung"} title={en ? "Study Indonesian at Petra" : "Belajar bahasa Indonesia di Petra"} />
            <ul className="mt-6 space-y-3">
              {darmasiswa.points.map((p) => (
                <li key={p.en} className="flex gap-3 text-midnight"><Check className="mt-0.5 size-5 shrink-0 text-emerald" aria-hidden />{tr(p, locale)}</li>
              ))}
            </ul>
            <ToConfirm locale={locale} className="mt-5 text-emerald" />
            <SourceNote ids={["darmasiswaGuidelines", "darmasiswaAtmaJaya"]} locale={locale} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-lg"><Photo image={media.mobility["spectra-cooking"]} /></div>
            <div className="relative aspect-square overflow-hidden rounded-lg"><Photo image={media.mobility["psp-batik"]} sizes="25vw" /></div>
            <div className="relative aspect-square overflow-hidden rounded-lg"><Photo image={media.mobility.henna} sizes="25vw" /></div>
          </div>
        </div>
      </Section>
      <Section tone="dark" cinematic bgImage={media.mobility["international-day"]} orbs labelledBy="timeline">
        <SectionHeading id="timeline" eyebrow={en ? "2026/27 cycle" : "Periode 2026/27"} title={en ? "Key dates" : "Tanggal penting"} lead={en ? "From the official 2026/27 guidelines. Dates change each year — always check the portal." : "Dari panduan resmi 2026/27. Tanggal berubah setiap tahun — selalu cek portal."} />
        <Timeline className="mt-10" items={darmasiswa.timeline.map((t) => ({ when: tr(t.when, locale), title: tr(t.title, locale), body: t.body ? tr(t.body, locale) : undefined }))} />
        <SourceNote ids={["darmasiswaGuidelines"]} locale={locale} tone="dark" className="mt-6" />
      </Section>
      <CtaBand locale={locale} image={media.mobility.bromo} title={en ? "Choosing Petra for Darmasiswa?" : "Memilih Petra untuk Darmasiswa?"} body={en ? "Contact our mobility team before you apply." : "Hubungi tim mobilitas kami sebelum mendaftar."} />
    </>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, FileText } from "lucide-react";
import { media } from "@/content/media.generated";
import { mobilityNav } from "@/content/navigation";
import { hostUniversities, outboundFees, outboundHowToApply, outboundPrograms } from "@/content/outbound";
import { links } from "@/content/links";
import { href, isLocale, locales, pageMeta, tr, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { ExternalLink } from "@/components/sections/links";
import { CheckList, JumpLinks, NumberedSteps } from "@/components/sections/mobility";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Photo } from "@/components/brand/Photo";

type Props = { params: Promise<{ locale: string; program: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((locale) => outboundPrograms.map((p) => ({ locale, program: p.slug })));
}

async function resolve(params: Props["params"]) {
  const { locale, program } = await params;
  const p = outboundPrograms.find((x) => x.slug === program);
  if (!isLocale(locale) || !p) notFound();
  return { locale: locale as Locale, p };
}

export async function generateMetadata({ params }: Props) {
  const { locale, p } = await resolve(params);
  return pageMeta(locale, `/mobility/outbound/${p.slug}`, { en: `Outbound ${p.title.en}`, id: `${p.title.id} Outbound` }, p.definition);
}

export default async function OutboundProgramPage({ params }: Props) {
  const { locale, p } = await resolve(params);
  const en = locale === "en";
  const isExchange = p.slug === "student-exchange";
  const jumps = [
    { id: "definition", label: en ? "Definition" : "Definisi" },
    ...(isExchange ? [{ id: "host", label: en ? "Host University" : "Universitas Tujuan" }] : []),
    { id: "eligibility", label: en ? "Eligibility" : "Persyaratan" },
    { id: "apply", label: en ? "How to Apply" : "Cara Mendaftar" },
    { id: "fees", label: en ? "Fees" : "Biaya" },
  ];

  return (
    <>
      <PageHero
        image={p.image}
        eyebrow={`Outbound · ${tr(p.kind, locale)}`}
        title={tr(p.title, locale)}
        lead={tr(p.definition, locale)}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(mobilityNav.label, locale), href: href(locale, "/mobility") }, { label: "Outbound", href: href(locale, "/mobility/outbound") }, { label: tr(p.title, locale) }]}
      >
        <JumpLinks items={jumps} />
      </PageHero>

      <Section tone="light" labelledBy="definition-title" id="definition" className="scroll-mt-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading id="definition-title" tone="light" eyebrow={en ? "Definition" : "Definisi"} title={tr(p.title, locale)} lead={tr(p.definition, locale)} />
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card"><Photo image={p.image} sizes="(min-width: 1024px) 50vw, 100vw" /></div>
        </div>
      </Section>

      {isExchange && (
        <Section tone="white" labelledBy="host-title" id="host" className="scroll-mt-20">
          <SectionHeading id="host-title" tone="light" eyebrow={en ? "Host university" : "Universitas tujuan"} title={en ? `${hostUniversities.reduce((n, h) => n + h.universities.length, 0)} partner universities in ${hostUniversities.length} countries` : `${hostUniversities.reduce((n, h) => n + h.universities.length, 0)} universitas mitra di ${hostUniversities.length} negara`} />
          <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {hostUniversities.map((h) => (
              <li key={h.country} className="glass-light mb-4 break-inside-avoid rounded-lg p-5">
                <p className="eyebrow text-emerald">{h.country}</p>
                <ul className="mt-3 space-y-1.5 text-midnight">
                  {h.universities.map((u) => <li key={u}>{u}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section tone="dark" cinematic bgImage={media.campus["green-walkway"]} labelledBy="eligibility-title" id="eligibility" className="scroll-mt-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="eligibility-title" eyebrow={en ? "Eligibility" : "Persyaratan"} title={en ? "Who can apply" : "Siapa yang dapat mendaftar"} />
          <div className="glass rounded-lg p-6">
            <CheckList items={p.eligibility} locale={locale} tone="dark" />
            <ExternalLink href={links.outboundFlyer} label={en ? "International Outbound Program Flyer" : "Flyer International Outbound Program"} locale={locale} variant="glass" icon="download" className="mt-6" />
          </div>
        </div>
      </Section>

      <Section tone="light" labelledBy="apply-title" id="apply" className="scroll-mt-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="apply-title" tone="light" eyebrow={en ? "How to apply" : "Cara mendaftar"} title={en ? "Ten steps to departure" : "Sepuluh langkah menuju keberangkatan"} />
          <ExternalLink href={links.outboundRegistration} label="io.petra.ac.id/outbound" locale={locale} variant="midnight" />
        </div>
        <div className="mt-10"><NumberedSteps steps={outboundHowToApply} locale={locale} /></div>
      </Section>

      <Section tone="white" labelledBy="fees-title" id="fees" className="scroll-mt-20">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <SectionHeading id="fees-title" tone="light" eyebrow={en ? "Fees" : "Biaya"} title={en ? "Study fees" : "Biaya studi"} lead={tr(outboundFees.body, locale)} />
          <ul className="flex flex-col gap-3">
            {outboundFees.files.map((f) => (
              <li key={f.label}><ExternalLink href={f.href} label={f.label} locale={locale} variant="midnight" icon="download" className="w-full justify-center" /></li>
            ))}
          </ul>
        </div>
        <Link href={href(locale, "/mobility/outbound/scholarships")} className="mt-10 flex items-center justify-between gap-4 rounded-lg bg-gradient-midnight p-6 text-white">
          <span className="flex items-center gap-3 text-lg font-semibold"><FileText className="size-5 text-amber" aria-hidden />{en ? "See the scholarships that can help" : "Lihat beasiswa yang dapat membantu"}</span>
          <ArrowRight className="size-5" aria-hidden />
        </Link>
      </Section>

      <CtaBand locale={locale} image={media.mobility.nsysu} title={en ? "Ready to go abroad?" : "Siap ke luar negeri?"} body={en ? "Talk to the student mobility team before the application deadline." : "Hubungi tim mobilitas mahasiswa sebelum batas waktu pendaftaran."} />
    </>
  );
}

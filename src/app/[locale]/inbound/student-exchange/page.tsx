import Link from "next/link";
import { Check } from "lucide-react";
import { media } from "@/content/media.generated";
import { inboundNav } from "@/content/navigation";
import { exchangePerks, exchangeSteps } from "@/content/mobility";
import { links } from "@/content/links";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { ExternalLink } from "@/components/sections/links";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/inbound/student-exchange", { en: "Student Exchange", id: "Pertukaran Mahasiswa" }, { en: "One or two semesters at Petra with credits that count at home.", id: "Satu atau dua semester di Petra dengan kredit yang diakui di kampus asal." });
}

export default async function StudentExchangePage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        image={media.campus["gazebo-study"]}
        eyebrow={en ? "Inbound · non-degree" : "Inbound · non-gelar"}
        title={en ? "Student Exchange" : "Pertukaran Mahasiswa"}
        lead={en ? "One or two semesters that count in full at home. Follows the Petra academic calendar, with classes alongside Petranesian and international students." : "Satu atau dua semester yang diakui penuh di kampus asal. Mengikuti kalender akademik Petra, bersama mahasiswa Petra dan internasional."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(inboundNav.label, locale), href: href(locale, "/inbound") }, { label: en ? "Student Exchange" : "Pertukaran Mahasiswa" }]}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <ExternalLink href={links.inboundRegistration} label={en ? "Register online" : "Daftar online"} locale={locale} />
          <ExternalLink href={links.inboundCourses} label={en ? "Courses offered in English (Excel)" : "Mata kuliah berbahasa Inggris (Excel)"} locale={locale} variant="glass" icon="download" className="text-white" />
        </div>
      </PageHero>

      <Section tone="light" labelledBy="steps">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="steps" tone="light" eyebrow={en ? "How it works" : "Alurnya"} title={en ? "Three steps to Surabaya" : "Tiga langkah ke Surabaya"} />
            <ol className="mt-8 space-y-3">
              {exchangeSteps.map((s, i) => (
                <li key={s.n}>
                  <Reveal delay={i * 0.1} className="glass-light flex items-center gap-5 rounded-lg p-5">
                    <span className="font-display text-5xl leading-none text-midnight">{s.n}</span>
                    <span>
                      <span className="block text-lg font-bold text-midnight">{tr(s.title, locale)}</span>
                      <span className="text-ink-secondary">{tr(s.body, locale)}</span>
                    </span>
                  </Reveal>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-ink-secondary">
              {en ? "Before you apply, check the " : "Sebelum mendaftar, lihat "}
              <Link className="prose-link" href={href(locale, "/inbound#registration")}>{en ? "requirements, visa and costs" : "persyaratan, visa dan biaya"}</Link>.
            </p>
          </div>
          <div className="space-y-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card"><Photo image={media.mobility["international-day"]} /></div>
            <ul className="grid gap-3 sm:grid-cols-3">
              {exchangePerks.map((p) => (
                <li key={p.title.en} className="rounded-lg bg-midnight p-5 text-white">
                  <Check className="size-5 text-amber" aria-hidden />
                  <p className="mt-2 font-bold">{tr(p.title, locale)}</p>
                  <p className="mt-1 text-sm text-smoke/90">{tr(p.body, locale)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="dark" orbs labelledBy="courses">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <SectionHeading id="courses" eyebrow={en ? "Courses offered" : "Mata kuliah"} title={en ? "Choose from courses taught in English" : "Pilih mata kuliah berbahasa Inggris"} lead={en ? "Download the list of courses offered in English this semester, then agree your study plan with your home university." : "Unduh daftar mata kuliah berbahasa Inggris semester ini, lalu sepakati rencana studi dengan universitas asal."} />
          <div className="flex flex-col gap-3">
            <ExternalLink href={links.inboundCourses} label={en ? "Download course list (Excel)" : "Unduh daftar mata kuliah (Excel)"} locale={locale} icon="download" className="justify-center" />
            <ExternalLink href={links.inboundRegistration} label={en ? "Inbound student registration" : "Pendaftaran mahasiswa inbound"} locale={locale} variant="glass" className="justify-center" />
          </div>
        </div>
      </Section>

      <CtaBand locale={locale} image={media.mobility["cultural-night"]} title={en ? "Questions about exchange?" : "Ada pertanyaan tentang pertukaran?"} body={en ? "Our mobility team answers on WhatsApp and email." : "Tim mobilitas kami siap menjawab melalui WhatsApp dan email."} />
    </>
  );
}

import Link from "next/link";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";
import { media } from "@/content/media.generated";
import { infoHubNav } from "@/content/navigation";
import { downloads, faq, hubContacts } from "@/content/infoHub";
import { academicCalendar } from "@/content/inbound";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { ExternalLink } from "@/components/sections/links";
import { JumpLinks } from "@/components/sections/mobility";
import { SectionHeading } from "@/components/brand/SectionHeading";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/information-hub", infoHubNav.label, { en: "Downloads, forms, key dates, frequently asked questions and contacts of Petra's International Office.", id: "Unduhan, formulir, tanggal penting, pertanyaan umum dan kontak Kantor Urusan Internasional Petra." });
}

export default async function InformationHubPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        size="compact"
        image={media.campus["students-gazebo"]}
        eyebrow={tr(infoHubNav.label, locale)}
        title={en ? "Everything in one place" : "Semua dalam satu tempat"}
        lead={en ? "Forms, downloads, key dates and answers to common questions." : "Formulir, unduhan, tanggal penting dan jawaban atas pertanyaan umum."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(infoHubNav.label, locale) }]}
      >
        <JumpLinks items={[{ id: "downloads", label: en ? "Downloads & forms" : "Unduhan & formulir" }, { id: "dates", label: en ? "Key dates" : "Tanggal penting" }, { id: "faq", label: "FAQ" }, { id: "contacts", label: en ? "Contacts" : "Kontak" }]} />
      </PageHero>

      <Section tone="light" labelledBy="downloads-title" id="downloads" className="scroll-mt-20">
        <SectionHeading id="downloads-title" tone="light" eyebrow={en ? "Downloads & forms" : "Unduhan & formulir"} title={en ? "Files and registration links" : "Berkas dan tautan pendaftaran"} />
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {downloads.map((d) => (
            <li key={d.title.en} className="glass-light flex flex-col gap-4 rounded-lg p-5 sm:flex-row sm:items-center sm:justify-between">
              <span>
                <span className="block font-bold text-midnight">{tr(d.title, locale)}</span>
                <span className="block text-sm text-ink-secondary">{tr(d.note, locale)}</span>
              </span>
              <ExternalLink href={d.href} label={d.kind === "download" ? (en ? "Download" : "Unduh") : (en ? "Open" : "Buka")} locale={locale} variant="midnight" icon={d.kind === "download" ? "download" : "arrow"} className="shrink-0 justify-center" />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white" labelledBy="dates-title" id="dates" className="scroll-mt-20">
        <SectionHeading id="dates-title" tone="light" eyebrow={en ? "Key dates" : "Tanggal penting"} title={en ? "Inbound exchange calendar" : "Kalender pertukaran inbound"} />
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {academicCalendar.map((r) => (
            <li key={r.semester.en} className="rounded-lg bg-midnight p-6 text-white">
              <p className="font-display text-4xl leading-none text-amber">{tr(r.semester, locale)}</p>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div><dt className="text-smoke/80">{en ? "Nomination deadline" : "Batas nominasi"}</dt><dd className="font-semibold">{tr(r.nomination, locale)}</dd></div>
                <div><dt className="text-smoke/80">{en ? "Application deadline" : "Batas pendaftaran"}</dt><dd className="font-semibold">{tr(r.application, locale)}</dd></div>
                <div><dt className="text-smoke/80">{en ? "Classes begin" : "Kuliah dimulai"}</dt><dd className="font-semibold">{tr(r.begin, locale)}</dd></div>
                <div><dt className="text-smoke/80">{en ? "Classes end" : "Kuliah berakhir"}</dt><dd className="font-semibold">{tr(r.end, locale)}</dd></div>
              </dl>
            </li>
          ))}
        </ul>
        <Link href={href(locale, "/news/calendar")} className="btn btn-midnight mt-6">{en ? "Events calendar" : "Kalender acara"} <ArrowRight className="size-4" aria-hidden /></Link>
      </Section>

      <Section tone="light" labelledBy="faq-title" id="faq" className="scroll-mt-20">
        <SectionHeading id="faq-title" tone="light" eyebrow="FAQ" title={en ? "Frequently asked questions" : "Pertanyaan yang sering diajukan"} />
        <ul className="mt-8 space-y-3">
          {faq.map((f) => (
            <li key={f.q.en}>
              <details className="group glass-light rounded-lg p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-midnight">
                  {tr(f.q, locale)}
                  <ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <p className="mt-3 text-ink-secondary">{tr(f.a, locale)}</p>
                {f.path && <Link href={href(locale, f.path)} className="prose-link mt-3 inline-block text-sm font-semibold">{en ? "Read more" : "Selengkapnya"}</Link>}
              </details>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white" labelledBy="contacts-title" id="contacts" className="scroll-mt-20">
        <SectionHeading id="contacts-title" tone="light" eyebrow={en ? "Contacts" : "Kontak"} title={en ? "Who to email" : "Email yang dituju"} />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {hubContacts.map((c) => (
            <li key={c.email} className="glass-light rounded-lg p-5">
              <p className="font-bold text-midnight">{tr(c.who, locale)}</p>
              <a className="prose-link mt-2 flex items-center gap-2 break-all text-sm" href={`mailto:${c.email}`}><Mail className="size-4 shrink-0" aria-hidden /> {c.email}</a>
            </li>
          ))}
        </ul>
        <Link href={href(locale, "/contact")} className="btn btn-midnight mt-6">{en ? "All contact routes" : "Semua kontak"} <ArrowRight className="size-4" aria-hidden /></Link>
      </Section>
    </>
  );
}

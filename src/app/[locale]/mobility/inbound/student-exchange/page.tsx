import { AlertTriangle, BedDouble, Mail, Phone } from "lucide-react";
import { media } from "@/content/media.generated";
import { mobilityNav } from "@/content/navigation";
import { academicCalendar, coursesOffered, exchangeIntro, factSheet, inboundContacts, inboundFees, inboundHowToApply, livingCosts } from "@/content/inbound";
import { links } from "@/content/links";
import { contact } from "@/content/contact";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { ExternalLink } from "@/components/sections/links";
import { CheckList, JumpLinks, NumberedSteps } from "@/components/sections/mobility";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Photo } from "@/components/brand/Photo";

export const generateStaticParams = localeParams;

const title = { en: "Inbound Student Exchange Program", id: "Program Pertukaran Mahasiswa Inbound" };

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/mobility/inbound/student-exchange", title, { en: "One or two semesters at Petra for students of partner universities: fact sheet, courses, academic calendar, how to apply, fees and living costs.", id: "Satu atau dua semester di Petra bagi mahasiswa universitas mitra: fact sheet, mata kuliah, kalender akademik, cara mendaftar, biaya dan biaya hidup." });
}

export default async function InboundExchangePage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const jumps = [
    { id: "fact-sheet", label: "Fact Sheet" },
    { id: "courses", label: en ? "Courses Offered" : "Mata Kuliah" },
    { id: "calendar", label: en ? "Academic Calendar" : "Kalender Akademik" },
    { id: "apply", label: en ? "How to Apply" : "Cara Mendaftar" },
    { id: "fees", label: en ? "Fees" : "Biaya" },
    { id: "living", label: en ? "Living Costs" : "Biaya Hidup" },
  ];

  return (
    <>
      <PageHero
        image={media.campus["gazebo-study"]}
        eyebrow={en ? "Inbound · undergraduate exchange" : "Inbound · pertukaran sarjana"}
        title={tr(title, locale)}
        lead={tr(exchangeIntro, locale)}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(mobilityNav.label, locale), href: href(locale, "/mobility") }, { label: "Inbound", href: href(locale, "/mobility/inbound") }, { label: en ? "Student Exchange" : "Pertukaran Mahasiswa" }]}
      >
        <JumpLinks items={jumps} />
      </PageHero>

      {/* Fact sheet */}
      <Section tone="light" labelledBy="fact-sheet-title" id="fact-sheet" className="scroll-mt-20">
        <SectionHeading id="fact-sheet-title" tone="light" eyebrow="Fact Sheet" title={en ? "Application information" : "Informasi pendaftaran"} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="glass-light rounded-lg p-6">
            <h3 className="text-xl text-midnight">{tr(factSheet.nomination.title, locale)}</h3>
            <p className="mt-2 text-ink-secondary">{tr(factSheet.nomination.body, locale)}</p>
            <CheckList items={factSheet.nomination.fields} locale={locale} className="mt-4 grid gap-2 !space-y-0 sm:grid-cols-2" />
          </div>
          <div className="glass-light rounded-lg p-6">
            <h3 className="text-xl text-midnight">{tr(factSheet.application.title, locale)}</h3>
            <ul className="mt-2 space-y-3 text-ink-secondary">
              {factSheet.application.body.map((b) => <li key={b.en}>{tr(b, locale)}</li>)}
            </ul>
          </div>
        </div>

        <h3 className="mt-14 text-2xl text-midnight">{en ? "Admission requirements" : "Persyaratan penerimaan"}</h3>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="glass-light rounded-lg p-6">
            <p className="eyebrow text-emerald">{en ? "Qualification" : "Kualifikasi"}</p>
            <CheckList items={factSheet.qualification} locale={locale} className="mt-4" />
          </div>
          <div className="glass-light rounded-lg p-6">
            <p className="eyebrow text-emerald">{en ? "Language" : "Bahasa"}</p>
            <p className="mt-4 text-midnight">{tr(factSheet.language, locale)}</p>
          </div>
          <div className="glass-light rounded-lg p-6">
            <p className="eyebrow text-emerald">{en ? "Course load" : "Beban studi"}</p>
            <CheckList items={factSheet.courses} locale={locale} className="mt-4" />
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="documents-title">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading id="documents-title" tone="light" eyebrow={en ? "Required documents" : "Dokumen yang diperlukan"} title={en ? "What to upload" : "Yang perlu diunggah"} />
            <CheckList items={factSheet.documents} locale={locale} className="mt-8" />
          </div>
          <div className="space-y-4">
            <div className="rounded-lg bg-midnight p-6 text-white">
              <p className="eyebrow text-amber">{en ? "Passport validity" : "Masa berlaku paspor"}</p>
              <CheckList items={factSheet.passportValidity} locale={locale} tone="dark" className="mt-4" />
              <p className="mt-4 text-sm text-smoke/90">{tr(factSheet.passportNote, locale)}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card"><Photo image={media.mobility["international-day"]} /></div>
          </div>
        </div>
      </Section>

      <Section tone="dark" cinematic bgImage={media.campus["students-corridor"]} labelledBy="visa-title">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-lg p-6">
            <SectionHeading id="visa-title" eyebrow={en ? "Visa application" : "Pengajuan visa"} title={en ? "We apply for your study visa" : "Kami mengajukan visa studi Anda"} />
            <p className="mt-4 text-smoke/90">{tr(factSheet.visa[0], locale)}</p>
            <p className="mt-4 flex gap-3 rounded-md border border-amber/50 bg-amber/10 p-4 font-semibold text-white">
              <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber" aria-hidden />
              {tr(factSheet.visa[1], locale)}
            </p>
          </div>
          <div className="glass rounded-lg p-6">
            <p className="eyebrow flex items-center gap-2 text-amber"><BedDouble className="size-4" aria-hidden /> {en ? "Off-campus dormitory" : "Asrama luar kampus"}</p>
            <ul className="mt-4 space-y-4 text-smoke/90">
              {factSheet.dormitory.map((d) => <li key={d.en}>{tr(d, locale)}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="light" labelledBy="connect-title">
        <SectionHeading id="connect-title" tone="light" eyebrow={en ? "Connect with us" : "Hubungi kami"} title={en ? "International Office" : "Kantor Urusan Internasional"} lead={`${contact.address} · io.petra.ac.id`} />
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {inboundContacts.map((c) => (
            <li key={c.email} className="glass-light rounded-lg p-5">
              <p className="font-bold text-midnight">{tr(c.role, locale)}</p>
              <a className="prose-link mt-3 flex items-center gap-2" href={`tel:${c.phone.replace(/\s/g, "")}`}><Phone className="size-4" aria-hidden /> {c.phone}</a>
              <a className="prose-link mt-1 flex items-center gap-2" href={`mailto:${c.email}`}><Mail className="size-4" aria-hidden /> {c.email}</a>
            </li>
          ))}
        </ul>
      </Section>

      {/* Courses offered */}
      <Section tone="dark" cinematic bgImage={media.mobility["exchange-group"]} orbs labelledBy="courses-title" id="courses" className="scroll-mt-20">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <SectionHeading id="courses-title" eyebrow={en ? "Courses offered" : "Mata kuliah yang ditawarkan"} title={en ? "Your course list arrives by email" : "Daftar mata kuliah dikirim melalui email"} lead={tr(coursesOffered, locale)} />
          <ExternalLink href={links.inboundRegistration} label={en ? "Inbound student registration" : "Pendaftaran mahasiswa inbound"} locale={locale} className="justify-center" />
        </div>
      </Section>

      {/* Academic calendar */}
      <Section tone="light" labelledBy="calendar-title" id="calendar" className="scroll-mt-20">
        <SectionHeading id="calendar-title" tone="light" eyebrow={en ? "Academic calendar" : "Kalender akademik"} title={en ? "Key dates for incoming exchange students" : "Tanggal penting bagi mahasiswa pertukaran"} lead={en ? "Nomination and application deadlines, and when classes run, for each semester." : "Batas nominasi dan pendaftaran, serta masa perkuliahan, untuk setiap semester."} />
        <div className="mt-8 overflow-x-auto rounded-lg bg-white shadow-card">
          <table className="w-full min-w-[40rem] text-left text-midnight">
            <thead className="bg-midnight text-white">
              <tr>
                <th scope="col" className="px-5 py-3">{en ? "Semester" : "Semester"}</th>
                <th scope="col" className="px-5 py-3">{en ? "Nomination deadline" : "Batas nominasi"}</th>
                <th scope="col" className="px-5 py-3">{en ? "Application deadline" : "Batas pendaftaran"}</th>
                <th scope="col" className="px-5 py-3">{en ? "Classes begin" : "Kuliah dimulai"}</th>
                <th scope="col" className="px-5 py-3">{en ? "Classes end" : "Kuliah berakhir"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-midnight/10">
              {academicCalendar.map((r) => (
                <tr key={r.semester.en}>
                  <th scope="row" className="px-5 py-4 font-bold">{tr(r.semester, locale)}</th>
                  <td className="px-5 py-4">{tr(r.nomination, locale)}</td>
                  <td className="px-5 py-4">{tr(r.application, locale)}</td>
                  <td className="px-5 py-4">{tr(r.begin, locale)}</td>
                  <td className="px-5 py-4">{tr(r.end, locale)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* How to apply */}
      <Section tone="deep" cinematic bgImage={media.campus.landmark} labelledBy="apply-title" id="apply" className="scroll-mt-20">
        <SectionHeading id="apply-title" eyebrow={en ? "How to apply" : "Cara mendaftar"} title={en ? "Five steps to Surabaya" : "Lima langkah ke Surabaya"} lead={en ? "Start with the International Office or exchange coordinator at your home university." : "Mulailah dari Kantor Internasional atau koordinator pertukaran di universitas asal Anda."} />
        <div className="mt-10"><NumberedSteps steps={inboundHowToApply} locale={locale} tone="dark" /></div>
      </Section>

      {/* Fees and living costs */}
      <Section tone="light" labelledBy="fees-title" id="fees" className="scroll-mt-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="fees-title" tone="light" eyebrow={en ? "Fees" : "Biaya"} title={en ? "No tuition at Petra" : "Bebas biaya kuliah di Petra"} lead={tr(inboundFees.intro, locale)} />
            <p className="mt-6 font-semibold text-midnight">{en ? "You cover your own:" : "Anda menanggung sendiri:"}</p>
            <CheckList items={inboundFees.ownCosts} locale={locale} className="mt-3 grid gap-2 !space-y-0 sm:grid-cols-2" />
          </div>
          <div id="living" className="scroll-mt-24">
            <h2 className="text-3xl text-midnight">{en ? "Living costs" : "Biaya hidup"}</h2>
            <p className="mt-3 text-ink-secondary">{tr(livingCosts.intro, locale)}</p>
            <dl className="mt-6 divide-y divide-midnight/10 overflow-hidden rounded-lg bg-white shadow-card">
              {livingCosts.items.map((c) => (
                <div key={c.item.en} className="flex flex-wrap items-baseline justify-between gap-2 px-5 py-4">
                  <dt className="font-semibold text-midnight">{tr(c.item, locale)}</dt>
                  <dd className="text-ink-secondary">{tr(c.cost, locale)}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-sm text-ink-secondary">{en ? "Estimates; actual costs vary by person and lifestyle." : "Perkiraan; biaya sebenarnya bergantung pada tiap orang dan gaya hidup."}</p>
          </div>
        </div>
      </Section>

      <CtaBand locale={locale} image={media.mobility["cultural-night"]} title={en ? "Questions about exchange?" : "Ada pertanyaan tentang pertukaran?"} body={en ? "Our mobility team answers on WhatsApp and email." : "Tim mobilitas kami siap menjawab melalui WhatsApp dan email."} />
    </>
  );
}

import Link from "next/link";
import { ArrowRight, Check, ClipboardCheck, FileCheck, Fingerprint, Landmark, Mail, Plane, Stamp } from "lucide-react";
import { media } from "@/content/media.generated";
import { internationalNav } from "@/content/navigation";
import { dosAndDonts, visa } from "@/content/inbound";
import { whatsapp } from "@/content/links";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { ToConfirm } from "@/components/sections/bits";
import { DosDonts } from "@/components/sections/DosDonts";
import { WhatsAppButton } from "@/components/sections/links";
import { ProcessFlow } from "@/components/sections/ProcessFlow";
import { SourceNote } from "@/components/sections/SourceNote";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";

const visaIcons = [FileCheck, Landmark, Stamp, Plane, Fingerprint, ClipboardCheck];

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/international-students", internationalNav.label, { en: "For international students at Petra: English-taught degrees, visa and stay permit, living in Indonesia, Petramate and Surabaya.", id: "Untuk mahasiswa internasional di Petra: gelar berbahasa Inggris, visa dan izin tinggal, tinggal di Indonesia, Petramate dan Surabaya." });
}

export default async function InternationalStudentsPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const cards = [
    { link: internationalNav.links[1], image: media.ai["study-table"] },
    { link: internationalNav.links[2], image: media.mobility["international-day"] },
    { link: internationalNav.links[3], image: media.mobility.bromo },
  ];

  return (
    <>
      <PageHero
        image={media.mobility["international-day"]}
        eyebrow={tr(internationalNav.label, locale)}
        title={en ? "Your home away from home" : "Rumah kedua Anda"}
        lead={tr(internationalNav.blurb, locale)}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(internationalNav.label, locale) }]}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#visa" className="btn btn-amber">{en ? "Visa & stay permit" : "Visa & izin tinggal"}</a>
          <a href="#rules" className="btn btn-glass">{en ? "Dos & don'ts" : "Yang boleh & tidak"}</a>
        </div>
      </PageHero>

      <Section tone="light" labelledBy="explore">
        <SectionHeading id="explore" tone="light" eyebrow={en ? "Explore" : "Jelajahi"} title={en ? "Study, settle in, explore" : "Belajar, beradaptasi, menjelajah"} />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map(({ link, image }, i) => (
            <li key={link.path}>
              <Reveal delay={i * 0.06} className="h-full">
                <Link href={href(locale, link.path)} className="group glass-light flex h-full flex-col overflow-hidden rounded-lg">
                  <span className="relative block aspect-[16/10] overflow-hidden">
                    <Photo image={image} className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 768px) 33vw, 100vw" />
                  </span>
                  <span className="flex flex-1 flex-col p-5">
                    <span className="text-xl font-bold text-midnight">{tr(link.label, locale)}</span>
                    <span className="mt-2 flex-1 text-ink-secondary">{tr(link.description, locale)}</span>
                    <span className="mt-4 flex items-center gap-1.5 font-semibold text-midnight">
                      {en ? "More information" : "Informasi lengkap"} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white" labelledBy="visa-title" id="visa" className="scroll-mt-20">
        <SectionHeading id="visa-title" tone="light" eyebrow={en ? "Visa" : "Visa"} title={en ? "Which visa do you need?" : "Visa apa yang Anda perlukan?"} />
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <ul className="space-y-3">
            {visa.types.map((v) => (
              <li key={v.name.en} className="glass-light rounded-lg p-5">
                <p className="font-bold text-midnight">{tr(v.name, locale)}</p>
                <p className="text-sm font-semibold text-emerald">{tr(v.who, locale)}</p>
                <p className="mt-1 text-sm text-ink-secondary">{tr(v.note, locale)}</p>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="text-lg text-midnight">{en ? "Documents to prepare" : "Dokumen yang perlu disiapkan"}</h3>
            <ul className="mt-3 space-y-2">
              {visa.documents.map((d) => (
                <li key={d.en} className="flex gap-3 text-midnight"><Check className="mt-0.5 size-5 shrink-0 text-emerald" aria-hidden />{tr(d, locale)}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-secondary"><strong className="text-midnight">{en ? "Cost: " : "Biaya: "}</strong>{tr(visa.cost, locale)}</p>
            <ToConfirm locale={locale} className="mt-4 text-emerald" />
          </div>
        </div>
      </Section>

      <Section tone="dark" cinematic bgImage={media.campus["students-corridor"]} labelledBy="visa-steps">
        <SectionHeading id="visa-steps" eyebrow={en ? "Visa & stay permit" : "Visa & izin tinggal"} title={en ? "From acceptance letter to ITAS" : "Dari surat penerimaan hingga ITAS"} lead={en ? "The usual sequence for a student stay in Indonesia. The International Office guides you through each step." : "Urutan umum untuk tinggal sebagai mahasiswa di Indonesia. Kantor Urusan Internasional mendampingi setiap langkah."} />
        <div className="mt-10">
          <ProcessFlow steps={visa.steps.map((s, i) => ({ icon: visaIcons[i], title: tr(s.title, locale), body: tr(s.body, locale) }))} />
        </div>
        <ToConfirm locale={locale} className="mt-6 text-amber" />
        <SourceNote ids={["visaYarsi", "visaBinus"]} locale={locale} tone="dark" className="mt-3" />
      </Section>

      <Section tone="light" labelledBy="rules-title" id="rules" className="scroll-mt-20">
        <SectionHeading id="rules-title" tone="light" eyebrow={en ? "Rules & regulations" : "Aturan & regulasi"} title={en ? "Living in Indonesia: dos and don'ts" : "Tinggal di Indonesia: yang boleh dan tidak"} />
        <div className="mt-8"><DosDonts dos={dosAndDonts.dos} donts={dosAndDonts.donts} locale={locale} /></div>
        <ToConfirm locale={locale} className="mt-5 text-emerald" />
      </Section>

      <Section tone="light" labelledBy="find-us">
        <SectionHeading id="find-us" tone="light" eyebrow={en ? "Find us" : "Lokasi"} title={en ? "Petra's main campus, Siwalankerto" : "Kampus utama Petra, Siwalankerto"} lead="Siwalankerto 121–131, Surabaya 60236" />
        <div className="mt-8">
          <MapEmbed query="Petra Christian University, Siwalankerto, Surabaya" title={en ? "Map of Petra Christian University" : "Peta Universitas Kristen Petra"} labels={en ? { load: "Show map", note: "Loads Google Maps, which may set cookies.", open: "Open in Google Maps" } : { load: "Tampilkan peta", note: "Memuat Google Maps, yang dapat menyimpan cookie.", open: "Buka di Google Maps" }} />
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

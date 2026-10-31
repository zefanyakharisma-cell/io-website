import Link from "next/link";
import { ArrowRight, Check, ClipboardCheck, FileCheck, Fingerprint, Landmark, Mail, Plane, Stamp } from "lucide-react";
import { media } from "@/content/media.generated";
import { videos } from "@/content/media";
import { inboundNav } from "@/content/navigation";
import { dosAndDonts, inboundPrograms, inboundRequirements, relatedCosts, visa } from "@/content/inbound";
import { mobilityGlance } from "@/content/mobility";
import { links, testimonialVideos, whatsapp } from "@/content/links";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { MAP_SIZE, countryPoints, surabaya } from "@/lib/map-points";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { ToConfirm } from "@/components/sections/bits";
import { DosDonts } from "@/components/sections/DosDonts";
import { ExternalLink, WhatsAppButton } from "@/components/sections/links";
import { VideoTestimonial } from "@/components/sections/MediaSlots";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";
import { WorldMap } from "@/components/ui/world-map";
import { ProcessFlow } from "@/components/sections/ProcessFlow";
import { SourceNote } from "@/components/sections/SourceNote";
import { MapEmbed } from "@/components/sections/MapEmbed";

const visaIcons = [FileCheck, Landmark, Stamp, Plane, Fingerprint, ClipboardCheck];

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/inbound", { en: "Inbound Programs", id: "Program Inbound" }, { en: "Study at Petra in Surabaya: student exchange, short programmes, tailor-made programmes, English-taught degrees and Darmasiswa.", id: "Belajar di Petra, Surabaya: pertukaran mahasiswa, program singkat, program khusus, gelar berbahasa Inggris dan Darmasiswa." });
}

export default async function InboundPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        image={media.mobility.bromo}
        video={videos.inboundHero}
        eyebrow={en ? "Inbound programs" : "Program inbound"}
        title={en ? "Study in Surabaya" : "Belajar di Surabaya"}
        lead={en ? "A semester, a summer or a full degree — alongside Petranesian and international students." : "Satu semester, musim panas atau gelar penuh — bersama mahasiswa Petra dan internasional."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(inboundNav.label, locale) }]}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <ExternalLink href={links.inboundRegistration} label={en ? "Register online" : "Daftar online"} locale={locale} />
          <a href="#programs" className="btn btn-glass">{en ? "See programs" : "Lihat program"}</a>
        </div>
      </PageHero>

      <Section tone="light" labelledBy="programs-title" id="programs" className="scroll-mt-20">
        <SectionHeading id="programs-title" tone="light" eyebrow={en ? "Programs" : "Program"} title={en ? "Five ways to study at Petra" : "Lima cara belajar di Petra"} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {inboundPrograms.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <Link href={href(locale, `/inbound/${p.slug}`)} className="group glass-light flex h-full flex-col overflow-hidden rounded-lg">
                  <span className="relative block aspect-[16/10] overflow-hidden">
                    <Photo image={p.image} className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 50vw" />
                    <span className="absolute left-3 top-3 rounded-full bg-midnight px-3 py-1 text-xs font-semibold text-white">{tr(p.kind, locale)}</span>
                  </span>
                  <span className="flex flex-1 flex-col p-5">
                    <span className="text-xl font-bold text-midnight">{tr(p.title, locale)}</span>
                    <span className="mt-2 flex-1 text-ink-secondary">{tr(p.summary, locale)}</span>
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

      <Section tone="dark" cinematic bgImage={media.mobility["asp-group"]} orbs labelledBy="glance">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <SectionHeading id="glance" eyebrow={en ? "Inbound · 2025–2026" : "Inbound · 2025–2026"} title={en ? `Students from ${mobilityGlance.inbound.countries} countries, ${mobilityGlance.inbound.continents} continents` : `Mahasiswa dari ${mobilityGlance.inbound.countries} negara, ${mobilityGlance.inbound.continents} benua`} lead={en ? `Including ${mobilityGlance.inbound.named.join(", ")}.` : `Termasuk ${mobilityGlance.inbound.named.join(", ")}.`} />
          <WorldMap origin={surabaya} size={MAP_SIZE} points={countryPoints(mobilityGlance.inbound.named, "#45b8bc")} dashed />
        </div>
      </Section>

      <Section tone="light" labelledBy="registration-title" id="registration" className="scroll-mt-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="registration-title" tone="light" eyebrow={en ? "Registration info" : "Info pendaftaran"} title={en ? "General requirements" : "Persyaratan umum"} />
            <ul className="mt-6 space-y-3">
              {inboundRequirements.map((r) => (
                <li key={r.en} className="flex gap-3 text-midnight"><Check className="mt-0.5 size-5 shrink-0 text-emerald" aria-hidden />{tr(r, locale)}</li>
              ))}
            </ul>
            <ToConfirm locale={locale} className="mt-5 text-emerald" />
            <div className="mt-6"><ExternalLink href={links.inboundRegistration} label={en ? "Inbound student registration" : "Pendaftaran mahasiswa inbound"} locale={locale} variant="midnight" /></div>
          </div>
          <div id="visa" className="scroll-mt-24">
            <h2 className="text-3xl text-midnight">{en ? "Visa" : "Visa"}</h2>
            <ul className="mt-6 space-y-3">
              {visa.types.map((v) => (
                <li key={v.name.en} className="glass-light rounded-lg p-5">
                  <p className="font-bold text-midnight">{tr(v.name, locale)}</p>
                  <p className="text-sm font-semibold text-emerald">{tr(v.who, locale)}</p>
                  <p className="mt-1 text-sm text-ink-secondary">{tr(v.note, locale)}</p>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-lg text-midnight">{en ? "Documents to prepare" : "Dokumen yang perlu disiapkan"}</h3>
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
        <SectionHeading id="visa-steps" eyebrow={en ? "Visa & stay permit" : "Visa & izin tinggal"} title={en ? "From acceptance letter to ITAS" : "Dari surat penerimaan hingga ITAS"} lead={en ? "The usual sequence for a student stay in Indonesia. KUI guides you through each step." : "Urutan umum untuk tinggal sebagai mahasiswa di Indonesia. KUI mendampingi setiap langkah."} />
        <div className="mt-10">
          <ProcessFlow steps={visa.steps.map((s, i) => ({ icon: visaIcons[i], title: tr(s.title, locale), body: tr(s.body, locale) }))} />
        </div>
        <ToConfirm locale={locale} className="mt-6 text-amber" />
        <SourceNote ids={["visaYarsi", "visaBinus"]} locale={locale} tone="dark" className="mt-3" />
      </Section>

      <Section tone="light" labelledBy="find-us">
        <SectionHeading id="find-us" tone="light" eyebrow={en ? "Find us" : "Lokasi"} title={en ? "Petra's main campus, Siwalankerto" : "Kampus utama Petra, Siwalankerto"} lead="Siwalankerto 121–131, Surabaya 60236" />
        <div className="mt-8">
          <MapEmbed query="Petra Christian University, Siwalankerto, Surabaya" title={en ? "Map of Petra Christian University" : "Peta Universitas Kristen Petra"} labels={en ? { load: "Show map", note: "Loads Google Maps, which may set cookies.", open: "Open in Google Maps" } : { load: "Tampilkan peta", note: "Memuat Google Maps, yang dapat menyimpan cookie.", open: "Buka di Google Maps" }} />
        </div>
      </Section>

      <Section tone="deep" cinematic bgImage={media.campus.landmark} labelledBy="costs">
        <SectionHeading id="costs" eyebrow={en ? "Related costs" : "Biaya terkait"} title={en ? "What to budget for" : "Yang perlu dianggarkan"} lead={en ? "KUI will confirm current amounts for your programme." : "KUI akan mengonfirmasi jumlah terkini untuk program Anda."} />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {relatedCosts.map((c) => (
            <li key={c.item.en} className="glass rounded-lg p-5">
              <p className="font-bold">{tr(c.item, locale)}</p>
              <p className="mt-1 text-sm text-smoke/90">{tr(c.note, locale)}</p>
              <p className="mt-3 text-xs font-semibold text-amber">{en ? "Amount to be confirmed" : "Jumlah menunggu konfirmasi"}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="light" labelledBy="rules">
        <SectionHeading id="rules" tone="light" eyebrow={en ? "Rules & regulations" : "Aturan & regulasi"} title={en ? "Living in Indonesia: dos and don'ts" : "Tinggal di Indonesia: yang boleh dan tidak"} />
        <div className="mt-8"><DosDonts dos={dosAndDonts.dos} donts={dosAndDonts.donts} locale={locale} /></div>
        <ToConfirm locale={locale} className="mt-5 text-emerald" />
      </Section>

      <Section tone="dark" cinematic bgImage={media.campus["green-walkway"]} orbs labelledBy="testimonies">
        <SectionHeading id="testimonies" eyebrow={en ? "Video testimonies" : "Video testimoni"} title={en ? "Hear it from past exchange students" : "Dengar langsung dari alumni pertukaran"} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonialVideos.inbound.map((id, i) => (
            <VideoTestimonial key={i} id={id} title={`${en ? "Student exchange testimony" : "Testimoni pertukaran"} ${i + 1}`} placeholder={en ? "Video coming soon" : "Video segera hadir"} />
          ))}
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

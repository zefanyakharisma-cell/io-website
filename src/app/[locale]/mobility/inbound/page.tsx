import { ArrowUpRight, Check } from "lucide-react";
import { media } from "@/content/media.generated";
import { videos } from "@/content/media";
import { navigation } from "@/content/navigation";
import { applyUrl, exchangePerks, exchangeSteps, mobilityGlance, signatureProgrammes } from "@/content/mobility";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { MAP_SIZE, countryPoints, surabaya } from "@/lib/map-points";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";
import { Ring } from "@/components/brand/Ring";
import { WorldMap } from "@/components/ui/world-map";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/mobility/inbound", { en: "Inbound Mobility", id: "Mobilitas Inbound" }, { en: "Semester exchange and summer programmes at Petra in Surabaya: ICOP, PSP, SPECTRA and the Asia Summer Program.", id: "Pertukaran semester dan program musim panas di Petra, Surabaya: ICOP, PSP, SPECTRA dan Asia Summer Program." });
}

export default async function InboundPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        image={media.mobility.bromo}
        video={videos.inboundHero}
        eyebrow={en ? "Inbound mobility" : "Mobilitas inbound"}
        title={en ? "Study in Surabaya" : "Belajar di Surabaya"}
        lead={en ? "A semester that counts at home, or a summer you won't forget — with classes alongside Petranesian and international students." : "Satu semester yang diakui di kampus asal, atau musim panas yang tak terlupakan — bersama mahasiswa Petra dan internasional."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(navigation[1].label, locale) }, { label: "Inbound" }]}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={applyUrl} target="_blank" rel="noreferrer" className="btn btn-amber">{en ? "Apply online" : "Daftar online"} <ArrowUpRight className="size-4" aria-hidden /></a>
          <a href="#programmes" className="btn btn-glass">{en ? "Summer programmes" : "Program musim panas"}</a>
        </div>
      </PageHero>

      <Section tone="dark" orbs labelledBy="glance">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <div>
            <SectionHeading id="glance" eyebrow={en ? "Inbound · 2025–2026" : "Inbound · 2025–2026"} title={en ? `Students from ${mobilityGlance.inbound.countries} countries, ${mobilityGlance.inbound.continents} continents` : `Mahasiswa dari ${mobilityGlance.inbound.countries} negara, ${mobilityGlance.inbound.continents} benua`} lead={en ? `Including ${mobilityGlance.inbound.named.join(", ")}.` : `Termasuk ${mobilityGlance.inbound.named.join(", ")}.`} />
          </div>
          <WorldMap origin={surabaya} size={MAP_SIZE} points={countryPoints(mobilityGlance.inbound.named, "#45b8bc")} dashed />
        </div>
      </Section>

      <Section tone="light" labelledBy="exchange">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="exchange" tone="light" eyebrow={en ? "Route one" : "Jalur satu"} title={en ? "Semester exchange at Petra" : "Pertukaran semester di Petra"} lead={en ? "One or two semesters that count in full at home. Follows the Petra academic calendar; open to customised semester schemes for partner cohorts." : "Satu atau dua semester yang diakui penuh di kampus asal. Mengikuti kalender akademik Petra; terbuka untuk skema semester khusus bagi kelompok mitra."} />
            <ol className="mt-10 space-y-3">
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
            <a href={applyUrl} target="_blank" rel="noreferrer" className="btn btn-midnight mt-6">international-registration.petra.ac.id <ArrowUpRight className="size-4" aria-hidden /></a>
          </div>
          <div className="space-y-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
              <Photo image={media.campus["gazebo-study"]} />
            </div>
            <ul className="grid gap-3 sm:grid-cols-3">
              {exchangePerks.map((p) => (
                <li key={tr(p.title, "en")} className="rounded-lg bg-midnight p-5 text-white">
                  <Check className="size-5 text-amber" aria-hidden />
                  <p className="mt-2 font-bold">{tr(p.title, locale)}</p>
                  <p className="mt-1 text-sm text-smoke/85">{tr(p.body, locale)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <div id="programmes" className="scroll-mt-24">
        {signatureProgrammes.map((p, i) => (
          <section key={p.code} id={p.code.toLowerCase()} aria-labelledby={`${p.code}-title`} className="relative isolate scroll-mt-24 overflow-hidden bg-midnight-deep py-20 text-white md:py-28">
            <div aria-hidden className="absolute inset-0 -z-10 opacity-30">
              <Photo image={p.images[0]} sizes="100vw" alt="" />
              <div className="absolute inset-0 bg-midnight-deep/70 backdrop-blur-2xl" />
            </div>
            {i % 2 === 0 && <Ring shape="ring-u-line" className="-right-40 top-0 w-[36rem] text-amber/40" />}
            <div className={cn("relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8", i % 2 === 1 && "lg:[&>*:first-child]:order-2")}>
              <Reveal>
                <div className="grid grid-cols-6 grid-rows-2 gap-3">
                  {p.images.slice(0, 3).map((img, k) => (
                    <div key={img.src} className={cn("relative overflow-hidden rounded-lg", k === 0 ? "col-span-4 row-span-2 aspect-[4/5]" : "col-span-2 aspect-[4/5]")}>
                      <Photo image={img} sizes={k === 0 ? "(min-width: 1024px) 33vw, 66vw" : "20vw"} />
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="eyebrow text-amber">{tr(p.kicker, locale)}</p>
                <h2 id={`${p.code}-title`} className="mt-2">
                  <span className="block font-display text-7xl font-normal leading-none tracking-normal text-amber md:text-8xl">{p.code}</span>
                  <span className="mt-2 block text-3xl">{p.name}</span>
                </h2>
                <p className="mt-4 text-lg text-smoke/90">{tr(p.summary, locale)}</p>
                <dl className="mt-6 grid grid-cols-4 gap-2">
                  {p.facts.map((f) => (
                    <div key={f.value + tr(f.label, "en")} className="glass flex flex-col-reverse rounded-lg p-3 text-center">
                      <dt className="text-[11px] leading-tight text-smoke/85">{tr(f.label, locale)}</dt>
                      <dd className="font-display text-3xl leading-none">{f.value}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="mt-6 space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h.en} className="flex gap-3 text-smoke">
                      <Check className="mt-0.5 size-4 shrink-0 text-amber" aria-hidden />
                      {tr(h, locale)}
                    </li>
                  ))}
                </ul>
                <a href={p.website} target="_blank" rel="noreferrer" className="btn btn-amber mt-8">
                  {en ? `Visit the ${p.code} website` : `Kunjungi situs ${p.code}`} <ArrowUpRight className="size-4" aria-hidden />
                  <span className="sr-only">{en ? "(opens in a new tab)" : "(membuka tab baru)"}</span>
                </a>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <Section tone="light" labelledBy="living">
        <SectionHeading id="living" tone="light" eyebrow={en ? "Living in Surabaya" : "Tinggal di Surabaya"} title={en ? "A city of 3 million, a campus that feels like home" : "Kota 3 juta jiwa, kampus yang terasa seperti rumah"} lead={en ? "Visa and housing support from the International Office, a Petramate buddy from day one, and weekends from Mount Bromo to the Madura strait." : "Bantuan visa dan akomodasi dari KUI, buddy Petramate sejak hari pertama, dan akhir pekan dari Gunung Bromo hingga Selat Madura."} />
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[media.mobility["cultural-night"], media.mobility["international-day"], media.mobility["spectra-cooking"], media.campus["students-corridor"], media.mobility.henna].map((img, i) => (
            <div key={img.src} className={cn("relative overflow-hidden rounded-lg", i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square")}>
              <Photo image={img} sizes="(min-width: 768px) 25vw, 50vw" />
            </div>
          ))}
        </div>
      </Section>

      <CtaBand locale={locale} image={media.mobility["asp-group"]} title={en ? "Bring your cohort to Petra." : "Bawa kelompok Anda ke Petra."} body={en ? "Partner universities can nominate students for exchange or request a tailor-made summer programme." : "Universitas mitra dapat menominasikan mahasiswa untuk pertukaran atau meminta program musim panas khusus."} />
    </>
  );
}

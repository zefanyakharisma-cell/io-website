import { media } from "@/content/media.generated";
import { inboundNav } from "@/content/navigation";
import { signatureProgrammes } from "@/content/mobility";
import { shortProgramDefinition } from "@/content/inbound";
import { posters } from "@/content/media";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { PosterSlot } from "@/components/sections/MediaSlots";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";
import { Ring } from "@/components/brand/Ring";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/inbound/short-programs", { en: "Short Programs", id: "Program Singkat" }, { en: "Petra Summer Program, Asia Summer Program, ICOP and Indonesian Spectrum: 2–3 weeks in Surabaya.", id: "Petra Summer Program, Asia Summer Program, ICOP dan Indonesian Spectrum: 2–3 minggu di Surabaya." });
}

export default async function ShortProgramsPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        image={media.mobility["psp-batik"]}
        eyebrow={en ? "Inbound · non-degree" : "Inbound · non-gelar"}
        title={en ? "Short Programs" : "Program Singkat"}
        lead={tr(shortProgramDefinition, locale)}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(inboundNav.label, locale), href: href(locale, "/inbound") }, { label: en ? "Short Programs" : "Program Singkat" }]}
      >
        <ul className="mt-6 flex flex-wrap gap-2">
          {signatureProgrammes.map((p) => (
            <li key={p.code}><a href={`#${p.code.toLowerCase()}`} className="btn btn-glass !px-4 !py-2 text-sm">{p.code}</a></li>
          ))}
        </ul>
      </PageHero>

      <Section tone="light" labelledBy="posters">
        <SectionHeading id="posters" tone="light" eyebrow={en ? "Upcoming summer programmes" : "Program musim panas mendatang"} title={en ? "Petra Summer Program & Asia Summer Program" : "Petra Summer Program & Asia Summer Program"} lead={en ? "Posters for the next intake. Visit each programme's website for dates and registration." : "Poster periode berikutnya. Kunjungi situs masing-masing program untuk tanggal dan pendaftaran."} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-4xl">
          {(["PSP", "ASP"] as const).map((code) => {
            const prog = signatureProgrammes.find((p) => p.code === code)!;
            return (
              <div key={code}>
                <PosterSlot src={posters[code]} alt={`${prog.name} poster`} title={code} placeholder={en ? "Poster coming soon" : "Poster segera hadir"} />
                <a href={prog.website} target="_blank" rel="noreferrer" className="btn btn-midnight mt-4 w-full justify-center">
                  {prog.name} <ArrowUpRight className="size-4" aria-hidden />
                  <span className="sr-only">{en ? "(opens in a new tab)" : "(membuka tab baru)"}</span>
                </a>
              </div>
            );
          })}
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

      <CtaBand locale={locale} image={media.mobility["asp-group"]} title={en ? "Bring your cohort to Petra." : "Bawa kelompok Anda ke Petra."} body={en ? "Partner universities can send a group to any short programme, or ask for a tailor-made one." : "Universitas mitra dapat mengirim kelompok ke program singkat mana pun, atau meminta program khusus."} />
    </>
  );
}

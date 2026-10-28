import Link from "next/link";
import { media } from "@/content/media.generated";
import { faculties, structureTotals } from "@/content/faculties";
import { navigation } from "@/content/navigation";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { facultyColors } from "@/components/sections/bits";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";
import { NumberTicker } from "@/components/ui/number-ticker";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/about/faculties", { en: "Faculties & Programmes", id: "Fakultas & Program Studi" }, { en: "Seven faculties, 30 study programmes and 59 programmes and tracks on one campus in Surabaya.", id: "Tujuh fakultas, 30 program studi dan 59 program dan peminatan di satu kampus di Surabaya." });
}

export default async function FacultiesPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        image={media.labs["architecture-studio"]}
        eyebrow={en ? "Academic structure" : "Struktur akademik"}
        title={en ? "Seven faculties, one campus" : "Tujuh fakultas, satu kampus"}
        lead={en ? "Every faculty runs study programmes; most branch further into named programmes and specialisation tracks." : "Setiap fakultas menaungi program studi; sebagian besar bercabang menjadi program dan peminatan."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(navigation[0].label, locale), href: href(locale, "/about") }, { label: en ? "Faculties & Programmes" : "Fakultas & Program Studi" }]}
      >
        <dl className="mt-6 flex flex-wrap gap-6 border-t border-white/15 pt-5">
          {structureTotals.map((t) => (
            <div key={t.value} className="flex flex-col-reverse">
              <dt className="text-sm text-smoke/90">{tr(t.label, locale)}</dt>
              <dd className="font-display text-5xl leading-none text-amber"><NumberTicker value={t.value} locale={locale} /></dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <nav aria-label={en ? "Faculties" : "Fakultas"} className="sticky top-[5.25rem] z-30 mx-auto -mt-7 max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="glass-strong flex gap-1 overflow-x-auto rounded-full p-1.5 [scrollbar-width:none]">
          {faculties.map((f) => (
            <li key={f.code}>
              <a href={`#${f.code.toLowerCase()}`} className="flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-smoke hover:bg-white/10 hover:text-white">
                <span className="size-2 rounded-full" style={{ background: facultyColors[f.code] }} aria-hidden />
                {f.code}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="bg-smoke">
        {faculties.map((f, i) => (
          <section key={f.code} id={f.code.toLowerCase()} aria-labelledby={`${f.code}-title`} className="scroll-mt-36 py-16 md:py-24">
            <div className={cn("mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8", i % 2 === 1 && "lg:[&>*:first-child]:order-2")}>
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
                  <Photo image={f.image} />
                  <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-bold text-midnight shadow-card">
                    <span className="size-2.5 rounded-full" style={{ background: facultyColors[f.code] }} aria-hidden />
                    {f.programmeCount} {en ? "programmes" : "program"}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="font-display text-7xl leading-none text-midnight">{f.code}</p>
                <h2 id={`${f.code}-title`} className="mt-2 text-3xl text-midnight">{tr(f.name, locale)}</h2>
                <ul className="mt-6 divide-y divide-midnight/10 rounded-lg border border-midnight/10 bg-white">
                  {f.programmes.map((p) => (
                    <li key={p.name} className="px-5 py-3.5">
                      <p className="font-semibold text-midnight">{p.name}</p>
                      {p.tracks && <p className="mt-0.5 text-sm text-ink-secondary">{p.tracks}</p>}
                    </li>
                  ))}
                </ul>
                {f.postgraduate && (
                  <p className="mt-4 text-sm text-ink-secondary">
                    <span className="eyebrow mr-2 text-emerald">{en ? "Postgraduate & more" : "Pascasarjana & lainnya"}</span>
                    {f.postgraduate}
                  </p>
                )}
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <Section tone="dark" orbs>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <SectionHeading eyebrow={en ? "Taught in English" : "Berbahasa Inggris"} title={en ? "Eight programmes, fully in English" : "Delapan program, sepenuhnya berbahasa Inggris"} />
          <Link href={href(locale, "/mobility/international-program")} className="btn btn-amber">{en ? "See the Regular International Program" : "Lihat Program Internasional Reguler"}</Link>
        </div>
      </Section>

      <CtaBand locale={locale} image={media.faculty.lecture} title={en ? "Looking for a faculty partner?" : "Mencari mitra fakultas?"} body={en ? "We match partner universities with the right faculty for exchange, joint degrees and research." : "Kami menghubungkan universitas mitra dengan fakultas yang tepat untuk pertukaran, gelar bersama dan riset."} />
    </>
  );
}

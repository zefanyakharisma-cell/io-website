import Link from "next/link";
import { ArrowUpRight, Compass, Globe2, UserRound } from "lucide-react";
import { media } from "@/content/media.generated";
import { videos } from "@/content/media";
import { inboundNav } from "@/content/navigation";
import { links } from "@/content/links";
import { ExternalLink } from "@/components/sections/links";
import { englishProgrammes, faculties } from "@/content/faculties";
import { applyUrl } from "@/content/mobility";
import { jumbo } from "@/content/research";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { facultyColors } from "@/components/sections/bits";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";
import { VideoSlot } from "@/components/brand/VideoSlot";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/inbound/international-programs", { en: "International Programs", id: "Program Internasional" }, { en: "Eight four-year bachelor's degrees taught in English, with a semester abroad built in.", id: "Delapan program sarjana empat tahun berbahasa Inggris, dengan satu semester di luar negeri." });
}

export default async function InternationalProgramPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const groups = ["SBM", "FHIK", "FTI", "FKIP"].map((code) => ({ faculty: faculties.find((f) => f.code === code)!, items: englishProgrammes.filter((p) => p.faculty === code) }));
  const features = [
    { icon: Globe2, value: "8", title: en ? "programmes" : "program", body: en ? "Four-year bachelor's degrees, fully in English" : "Program sarjana empat tahun, sepenuhnya berbahasa Inggris" },
    { icon: Compass, value: "1", title: en ? "semester abroad" : "semester di luar negeri", body: en ? "Exchange, internship or a dual-degree semester" : "Pertukaran, magang atau semester gelar ganda" },
    { icon: UserRound, value: "✓", title: en ? "personal advising" : "pendampingan personal", body: en ? "Dedicated advising for international students" : "Pendampingan khusus bagi mahasiswa internasional" },
  ];

  return (
    <>
      <PageHero
        image={media.ai["study-table"]}
        eyebrow={en ? "Inbound · route two" : "Inbound · jalur dua"}
        title={en ? "A full bachelor's degree, in English" : "Gelar sarjana penuh, dalam bahasa Inggris"}
        lead={en ? "Eight programmes across four faculties, with mobility built in." : "Delapan program di empat fakultas, dengan mobilitas di dalamnya."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(inboundNav.label, locale), href: href(locale, "/inbound") }, { label: en ? "International Programs" : "Program Internasional" }]}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={applyUrl} target="_blank" rel="noreferrer" className="btn btn-amber">{en ? "Apply" : "Daftar"} <ArrowUpRight className="size-4" aria-hidden /></a>
          <ExternalLink href={links.petraBusinessSchool} label="Petra Business School" locale={locale} variant="glass" className="text-white" />
        </div>
      </PageHero>

      <Section tone="dark" cinematic bgImage={media.campus["tree-planting"]} orbs labelledBy="why">
        <h2 id="why" className="sr-only">{en ? "Why the international programme" : "Mengapa program internasional"}</h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {features.map((f, i) => (
            <li key={f.title}>
              <Reveal delay={i * 0.08} className="glass h-full rounded-lg p-6">
                <f.icon className="size-6 text-amber" aria-hidden />
                <p className="mt-4 font-display text-6xl leading-none">{f.value}</p>
                <p className="text-lg font-bold">{f.title}</p>
                <p className="mt-1 text-smoke/85">{f.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="light" labelledBy="programmes">
        <SectionHeading id="programmes" tone="light" eyebrow={en ? "Eight programmes taught in English" : "Delapan program berbahasa Inggris"} title={en ? "Choose your degree" : "Pilih program Anda"} lead={en ? "Awards include S.M., S.Ak., S.T. and S.Pd." : "Gelar antara lain S.M., S.Ak., S.T. dan S.Pd."} />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {groups.map(({ faculty, items }) => (
            <Reveal key={faculty.code} className="glass-light overflow-hidden rounded-lg">
              <div className="relative h-36">
                <Photo image={faculty.image} sizes="(min-width: 768px) 50vw, 100vw" />
                <span className="absolute inset-0 bg-gradient-to-r from-midnight-deep/90 to-transparent" />
                <span className="absolute bottom-4 left-5 text-white">
                  <span className="flex items-center gap-2 font-display text-4xl leading-none text-white"><span className="h-6 w-1.5 rounded-full" style={{ background: facultyColors[faculty.code] }} aria-hidden />{faculty.code}</span>
                  <span className="block text-sm font-semibold">{tr(faculty.name, locale)}</span>
                </span>
              </div>
              <ul className="divide-y divide-midnight/10">
                {items.map((p) => (
                  <li key={p.name} className="flex items-center justify-between gap-3 px-5 py-3.5">
                    <span className="font-semibold text-midnight">{p.name}</span>
                    {p.award && <span className="rounded-full bg-midnight px-2.5 py-0.5 text-xs font-semibold text-white">{p.award}</span>}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <section aria-labelledby="ipdm" className="relative isolate overflow-hidden py-24 text-white md:py-32">
        <VideoSlot poster={media.labs["animation-still"]} src={videos.ipdmReel} />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-midnight-deep via-midnight-deep/80 to-midnight-deep/30" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="glass rounded-lg p-8">
            <p className="eyebrow text-amber">Spotlight · IPDM</p>
            <h2 id="ipdm" className="mt-3 text-[clamp(1.75rem,1.3rem+2vw,2.75rem)] leading-tight">{tr(jumbo.title, locale)}</h2>
            <p className="mt-4 text-lg text-smoke/95">{tr(jumbo.body, locale)}</p>
            <p className="mt-3 text-smoke/85">{en ? "IPDM also runs a 2+2 pathway with Dongseo University, Korea." : "IPDM juga memiliki jalur 2+2 dengan Dongseo University, Korea."}</p>
            <Link href={href(locale, "/about/research#lab-media")} className="btn btn-glass mt-6">{en ? "Inside the Digital Media Lab" : "Di dalam Digital Media Lab"}</Link>
          </div>
          <div className="relative mx-auto aspect-[3/4] w-64 overflow-hidden rounded-lg shadow-2xl md:w-80">
            <Photo image={jumbo.images[0]} sizes="20rem" />
          </div>
        </div>
      </section>

      <CtaBand locale={locale} image={media.ai.coaching} title={en ? "Ready to apply?" : "Siap mendaftar?"} body={en ? "International applicants register online. The International Office will guide you through the next steps." : "Pendaftar internasional mendaftar secara online. KUI akan memandu langkah berikutnya."} />
    </>
  );
}

import { media } from "@/content/media.generated";
import { videos } from "@/content/media";
import { navigation } from "@/content/navigation";
import { coauthorCountries, featuredPapers, journals, jumbo, labTour, outputByFaculty, publishers, researchTotals, stories, studyCentres } from "@/content/research";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { StatGrid } from "@/components/sections/StatGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { Bars, facultyColors } from "@/components/sections/bits";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";
import { Ring } from "@/components/brand/Ring";
import { Gallery } from "@/components/ui/gallery";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/about/research", { en: "Research & Labs", id: "Riset & Laboratorium" }, { en: "36 Q1 articles, four study centres and 65+ labs across seven faculties.", id: "36 artikel Q1, empat pusat studi dan 65+ laboratorium di tujuh fakultas." });
}

export default async function ResearchPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        image={media.labs["structural-beam"]}
        video={videos.labsHero}
        eyebrow={en ? "Research & labs" : "Riset & laboratorium"}
        title={en ? "Where ideas get built" : "Tempat ide diwujudkan"}
        lead={en ? "Co-authored worldwide, published at home, and tested hands-on in 65+ labs across seven faculties." : "Ditulis bersama mitra dunia, diterbitkan di rumah sendiri, dan diuji langsung di 65+ laboratorium di tujuh fakultas."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(navigation[0].label, locale), href: href(locale, "/about") }, { label: en ? "Research & Labs" : "Riset & Laboratorium" }]}
      />

      <Section tone="dark" orbs labelledBy="output">
        <SectionHeading id="output" eyebrow={en ? "Research & publications" : "Riset & publikasi"} title={en ? "Petra research in the world's top-quartile journals" : "Riset Petra di jurnal kuartil teratas dunia"} lead={en ? "Fifty-two articles in Scopus-indexed Q1–Q3 journals, each with a verified DOI and a Petra affiliation." : "Lima puluh dua artikel di jurnal Scopus Q1–Q3, masing-masing dengan DOI terverifikasi dan afiliasi Petra."} />
        <StatGrid stats={researchTotals} locale={locale} className="mt-10" />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="glass rounded-lg p-6">
            <p className="eyebrow mb-4 text-amber">{en ? "Output by faculty" : "Luaran per fakultas"}</p>
            <Bars items={outputByFaculty.map((o) => ({ label: o.faculty, value: o.count, color: facultyColors[o.faculty] }))} />
          </div>
          <div className="glass rounded-lg p-6">
            <p className="eyebrow mb-4 text-amber">{en ? "Co-authors in 10 countries" : "Penulis bersama di 10 negara"}</p>
            <ul className="flex flex-wrap gap-2">
              {coauthorCountries.map((c) => (
                <li key={c} className="rounded-full border border-white/20 px-3 py-1 text-sm">{c}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-smoke/85">{en ? "From UNSW Sydney and NTUST to Sophia University and Budapest Tech." : "Dari UNSW Sydney dan NTUST hingga Sophia University dan Budapest Tech."}</p>
          </div>
          <div className="glass rounded-lg p-6">
            <p className="eyebrow mb-4 text-amber">{en ? "Petra as publisher" : "Petra sebagai penerbit"}</p>
            <ul className="space-y-3">
              {journals.map((j) => (
                <li key={j.name}>
                  <p className="font-semibold">{j.name}</p>
                  <p className="text-sm text-smoke/85">{j.index}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-smoke/85">{publishers}</p>
          </div>
        </div>
      </Section>

      <Section tone="light" labelledBy="papers">
        <SectionHeading id="papers" tone="light" eyebrow="Q1" title={en ? "Featured top-quartile papers" : "Makalah kuartil teratas pilihan"} />
        <ul tabIndex={0} aria-label={en ? "Featured papers, scroll horizontally" : "Makalah pilihan, gulir ke samping"} className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
          {featuredPapers.map((p) => (
            <li key={p.author} className="glass-light flex w-72 shrink-0 snap-start flex-col overflow-hidden rounded-lg">
              <div className="relative aspect-[4/3] bg-white">
                <Photo image={p.photo} className="object-contain object-bottom" sizes="18rem" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="eyebrow text-emerald">{p.dept}</p>
                <p className="mt-1 font-bold text-midnight">{p.author}</p>
                <p className="mt-3 text-sm italic text-ink-secondary">“{p.title}”</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="deep" labelledBy="centres">
        <SectionHeading id="centres" eyebrow={en ? "Study centres" : "Pusat studi"} title={en ? "Four study centres, one research agenda" : "Empat pusat studi, satu agenda riset"} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {studyCentres.map((c, i) => (
            <li key={tr(c.name, "en")}>
              <Reveal delay={i * 0.06} className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-lg">
                <Photo image={c.image} className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, 50vw" />
                <span className="absolute inset-0 bg-gradient-to-t from-midnight-deep via-midnight-deep/50 to-transparent" />
                <span className="glass relative m-3 rounded-md p-4">
                  <span className="block font-bold">{tr(c.name, locale)}</span>
                  <span className="mt-1 block text-sm text-smoke/90">{tr(c.body, locale)}</span>
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {stories.map((s, i) => (
        <Section key={s.id} tone={i % 2 ? "light" : "dark"} orbs={i === 0} labelledBy={`story-${s.id}`}>
          {i === 0 && <Ring shape="ring-u" className="-right-24 -top-12 w-[28rem] text-teal/60" />}
          <div className={cn("grid gap-10 lg:grid-cols-2 lg:items-center", i % 2 === 1 && "lg:[&>*:first-child]:order-2")}>
            <Reveal>
              <div className="grid grid-cols-2 gap-3">
                {s.images.slice(0, 3).map((img, k) => (
                  <div key={img.src} className={cn("relative overflow-hidden rounded-lg", k === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square")}>
                    <Photo image={img} sizes="(min-width: 1024px) 25vw, 50vw" />
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={cn("eyebrow", i % 2 ? "text-emerald" : "text-amber")}>{en ? "Researchers in the community" : "Peneliti di masyarakat"} · {tr(s.field, locale)}</p>
              <h2 id={`story-${s.id}`} className={cn("mt-3 text-[clamp(1.75rem,1.3rem+2vw,2.75rem)] leading-tight", i % 2 ? "text-midnight" : "text-white")}>
                <span className="kicker mb-1">{s.person}</span>
                {tr(s.title, locale)}
              </h2>
              <p className={cn("mt-4 text-lg", i % 2 ? "text-ink-secondary" : "text-smoke/90")}>{tr(s.intro, locale)}</p>
              <dl className="mt-6 grid grid-cols-2 gap-3">
                {s.facts.map((f) => (
                  <div key={f.value} className={cn("rounded-lg p-4", i % 2 ? "glass-light" : "glass")}>
                    <dt className="sr-only">{tr(f.label, locale)}</dt>
                    <dd>
                      <span className={cn("font-display text-4xl leading-none", i % 2 ? "text-midnight" : "text-amber")}>{f.value}</span>
                      <span className={cn("mt-1 block text-xs", i % 2 ? "text-ink-secondary" : "text-smoke/85")}>{tr(f.label, locale)}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <ul className={cn("mt-6 space-y-2 text-sm", i % 2 ? "text-midnight" : "text-smoke")}>
                {s.points.map((p) => (
                  <li key={tr(p, "en")} className="flex gap-3">
                    <span className={cn("mt-2 size-1.5 shrink-0 rounded-full", i % 2 ? "bg-emerald" : "bg-amber")} aria-hidden />
                    {tr(p, locale)}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>
      ))}

      <Section tone="deep" labelledBy="labs">
        <SectionHeading id="labs" eyebrow={en ? "Inside the labs" : "Di dalam laboratorium"} title={en ? "65+ labs across 7 faculties" : "65+ laboratorium di 7 fakultas"} lead={en ? "Industry-standard practice space for every discipline — where students practise before they reach a clinic, a client or a construction site." : "Ruang praktik berstandar industri untuk setiap disiplin — tempat mahasiswa berlatih sebelum ke klinik, klien atau lokasi proyek."} />
        <div className="mt-12 space-y-16">
          {labTour.map((lab) => (
            <div key={lab.id} id={`lab-${lab.id}`} className="scroll-mt-28">
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-2xl">
                  <span className="eyebrow mr-3 align-middle text-amber">{lab.faculty}</span>
                  {tr(lab.title, locale)}
                </h3>
                <p className="max-w-xl text-sm text-smoke/85">{tr(lab.caption, locale)}</p>
              </div>
              <Gallery items={lab.images.map((img) => ({ ...img, caption: img.alt }))} columns="columns-2 md:columns-3" openLabel={en ? "Open photo" : "Buka foto"} />
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark" orbs labelledBy="jumbo">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading id="jumbo" eyebrow="IPDM · Digital Media Lab" title={tr(jumbo.title, locale)} lead={tr(jumbo.body, locale)} />
            <p className="mt-4 text-xs text-smoke/85">{jumbo.credit}</p>
          </div>
          <div className="grid grid-cols-[1fr_1.2fr] gap-3">
            {jumbo.images.map((img) => (
              <div key={img.src} className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Photo image={img} sizes="30vw" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand locale={locale} image={media.labs["smart-systems"]} title={en ? "Open to joint projects, co-supervision and co-authorship." : "Terbuka untuk proyek bersama, pembimbingan bersama dan publikasi bersama."} body={en ? "Research runs through our four study centres. Tell us where your work meets ours." : "Riset berjalan melalui empat pusat studi kami. Ceritakan di mana riset Anda bertemu riset kami."} />
    </>
  );
}

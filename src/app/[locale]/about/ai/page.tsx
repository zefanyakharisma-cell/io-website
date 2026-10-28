import { media } from "@/content/media.generated";
import { aboutNav } from "@/content/navigation";
import { aiAcross, aiFacts, aiModules, aiQuote, aiTeaching, aiTimeline, drone } from "@/content/ai";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";
import { Ring } from "@/components/brand/Ring";
import { Gallery } from "@/components/ui/gallery";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/about/ai", { en: "AI@PCU & Drone Academy", id: "AI@PCU & Drone Academy" }, { en: "An AI-native campus since 2023, a new Artificial Intelligence degree, and Indonesia's first credit-based UAV academy.", id: "Kampus AI-native sejak 2023, program studi Artificial Intelligence baru, dan akademi UAV berbasis kredit pertama di Indonesia." });
}

export default async function AiPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        image={media.ai.launch}
        eyebrow="AI@PCU"
        title={en ? "An AI-native campus" : "Kampus AI-native"}
        lead={tr(aiQuote, locale)}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(aboutNav.label, locale), href: href(locale, "/about") }, { label: "AI@PCU & Drone Academy" }]}
      />

      <Section tone="dark" orbs labelledBy="timeline">
        <SectionHeading id="timeline" eyebrow={en ? "On the record since 2023" : "Tercatat sejak 2023"} title={en ? "A degree built on three years of practice" : "Program studi yang dibangun dari tiga tahun praktik"} />
        <ol className="relative mt-12 grid gap-4 md:grid-cols-3">
          <span aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-amber via-teal to-cerise md:block" />
          {aiTimeline.map((t, i) => (
            <li key={t.year}>
              <Reveal delay={i * 0.12} className="relative">
                <span className="relative z-10 grid size-12 place-items-center rounded-full bg-amber font-bold text-midnight">{i + 1}</span>
                <div className="glass mt-4 rounded-lg p-5">
                  <p className="font-display text-5xl leading-none text-amber">{t.year}</p>
                  <p className="mt-2">{tr(t.body, locale)}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <dl className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {aiFacts.map((f) => (
            <div key={f.value} className="glass flex flex-col-reverse rounded-lg p-5">
              <dt className="mt-1 text-sm text-smoke/85">{tr(f.label, locale)}</dt>
              <dd className="font-display text-4xl leading-none text-white">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="light" labelledBy="degree">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading id="degree" tone="light" eyebrow={en ? "New degree · FTI" : "Program studi baru · FTI"} title="Artificial Intelligence" lead={en ? "An Artificial Intelligence pathway under Informatics. First intake AY 2026/2027." : "Jalur Artificial Intelligence di bawah Informatika. Angkatan pertama TA 2026/2027."} />
            <p className="eyebrow mb-3 mt-8 text-emerald">{en ? "Core modules" : "Modul inti"}</p>
            <ul className="flex flex-wrap gap-2">
              {aiModules.map((m) => (
                <li key={m} className="rounded-full bg-midnight px-4 py-1.5 text-sm font-semibold text-white">{m}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-lg"><Photo image={media.ai.coaching} /></div>
            <div className="relative aspect-square overflow-hidden rounded-lg"><Photo image={media.ai["3d-printing"]} sizes="25vw" /></div>
            <div className="relative aspect-square overflow-hidden rounded-lg"><Photo image={media.faculty["vr-studio"]} sizes="25vw" /></div>
          </div>
        </div>
      </Section>

      <Section tone="deep" labelledBy="across">
        <SectionHeading id="across" eyebrow={en ? "A layer across disciplines, not a department" : "Lapisan lintas disiplin, bukan satu departemen"} title={en ? "Where AI turns up" : "Di mana AI hadir"} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aiAcross.map((a, i) => (
            <li key={tr(a.field, "en")}>
              <Reveal delay={i * 0.06} className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-lg">
                <Photo image={a.image} className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, 50vw" />
                <span className="absolute inset-0 bg-gradient-to-t from-midnight-deep via-midnight-deep/40 to-transparent" />
                <span className="glass relative m-3 rounded-md p-4">
                  <span className="block font-bold">{tr(a.field, locale)}</span>
                  <span className="mt-1 block text-sm text-smoke/90">{tr(a.body, locale)}</span>
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
        <ul className="mt-6 grid gap-3 md:grid-cols-4">
          {aiTeaching.map((t) => (
            <li key={t.title} className="glass rounded-lg p-5">
              <p className="eyebrow text-amber">{tr(t.tag, locale)}</p>
              <p className="mt-2 font-bold">{t.title}</p>
              <p className="mt-1 text-sm text-smoke/85">{tr(t.body, locale)}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dark" orbs labelledBy="drone" id="drone-academy">
        <Ring shape="ring-n" className="-left-24 -bottom-24 w-[30rem] text-cerise/70" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading id="drone" eyebrow={`Petra Drone Academy · ${tr(drone.date, locale)}`} title={tr(drone.title, locale)} lead={tr(drone.summary, locale)} />
            <ol className="mt-8 grid grid-cols-2 gap-3">
              {drone.stages.map((s, i) => (
                <li key={tr(s.name, "en")} className="glass rounded-lg p-4">
                  <span className="text-xs font-semibold text-amber">0{i + 1}</span>
                  <p className="font-bold">{tr(s.name, locale)}</p>
                  <p className="text-sm text-smoke/85">{tr(s.body, locale)}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-3">
            <p className="eyebrow text-amber">{en ? "A market ready to take off" : "Pasar yang siap lepas landas"}</p>
            <dl className="grid gap-3">
              {drone.market.map((m) => (
                <div key={m.value} className="glass flex flex-col-reverse rounded-lg p-5">
                  <dt className="text-sm text-smoke/85">{tr(m.label, locale)}</dt>
                  <dd className="font-display text-5xl leading-none text-white">{m.value}</dd>
                </div>
              ))}
            </dl>
            <div className="glass rounded-lg p-5">
              <p className="eyebrow mb-2 text-amber">{en ? "Graduates receive" : "Lulusan mendapatkan"}</p>
              <ul className="space-y-1 text-sm">
                {drone.outcomes.map((o) => <li key={o.en}>— {tr(o, locale)}</li>)}
              </ul>
              <p className="eyebrow mb-2 mt-4 text-amber">{en ? "Partners" : "Mitra"}</p>
              <p className="text-sm text-smoke/90">{drone.partners.join(" · ")}</p>
            </div>
          </div>
        </div>
        <Gallery className="mt-12" items={drone.images.map((img) => ({ ...img, caption: img.alt }))} columns="columns-2 md:columns-3 lg:columns-5" openLabel={en ? "Open photo" : "Buka foto"} />
      </Section>

      <CtaBand locale={locale} image={media.drone.build} title={en ? "Build the AI-ready campus with us." : "Bangun kampus siap-AI bersama kami."} body={en ? "Joint lectures, faculty development and research on AI in learning are open to partners." : "Kuliah bersama, pengembangan dosen dan riset AI dalam pembelajaran terbuka bagi mitra."} />
    </>
  );
}

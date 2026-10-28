import { media } from "@/content/media.generated";
import { navigation } from "@/content/navigation";
import { consortia, euProjects } from "@/content/partners";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { ToConfirm } from "@/components/sections/bits";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";
import { Ring } from "@/components/brand/Ring";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/partnership/consortia", { en: "Consortia", id: "Konsorsium" }, { en: "ACUCA, AUN-QA, NUNI, Global Hakka Studies, the Asia Summer Program, and two EU-funded projects.", id: "ACUCA, AUN-QA, NUNI, Global Hakka Studies, Asia Summer Program, dan dua proyek yang didanai Uni Eropa." });
}

export default async function ConsortiaPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        image={media.mobility["asp-group"]}
        eyebrow={en ? "Networks & consortia" : "Jejaring & konsorsium"}
        title={en ? "Backed by Europe, built with the world" : "Didukung Eropa, dibangun bersama dunia"}
        lead={en ? "Petra is a funded partner in two EU consortia — 21 partner institutions in 12 countries — and a member of regional university networks." : "Petra adalah mitra yang didanai dalam dua konsorsium Uni Eropa — 21 institusi mitra di 12 negara — dan anggota jejaring universitas regional."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(navigation[2].label, locale) }, { label: en ? "Consortia" : "Konsorsium" }]}
      />

      <Section tone="dark" orbs labelledBy="networks">
        <SectionHeading id="networks" eyebrow={en ? "University networks" : "Jejaring universitas"} title={en ? "Where Petra is a member" : "Jejaring tempat Petra bergabung"} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {consortia.map((c, i) => (
            <li key={c.name}>
              <Reveal delay={(i % 3) * 0.06} className="glass flex h-full flex-col rounded-lg p-6">
                <p className="font-display text-4xl leading-none text-amber">{c.name}</p>
                {c.full !== c.name && <p className="mt-2 text-sm font-semibold text-smoke">{c.full}</p>}
                <p className="mt-3 flex-1 text-smoke/90">{tr(c.body, locale)}</p>
                {"confirm" in c && c.confirm && <ToConfirm locale={locale} className="mt-4 self-start text-amber" />}
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <section className="bg-midnight-deep py-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={media.brand["eu-cofunded"].src} alt={media.brand["eu-cofunded"].alt} className="mx-auto h-12 w-auto rounded bg-white px-3 py-2" loading="lazy" />
      </section>

      {euProjects.map((p, i) => (
        <Section key={p.programme} tone={i ? "light" : "deep"} labelledBy={`eu-${i}`}>
          {i === 0 && <Ring shape="ring-n" className="-right-24 -bottom-24 w-[28rem] text-blue/70" />}
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <p className={cn("eyebrow", i ? "text-emerald" : "text-amber")}>{p.programme} · {p.action}</p>
              <h2 id={`eu-${i}`} className={cn("mt-3 text-[clamp(1.5rem,1.2rem+1.4vw,2.25rem)] leading-tight", i ? "text-midnight" : "text-white")}>{p.title}</h2>
              <dl className="mt-6 flex gap-8">
                <div className="flex flex-col-reverse">
                  <dt className={cn("text-sm", i ? "text-ink-secondary" : "text-smoke/85")}>{en ? "institutions" : "institusi"}</dt>
                  <dd className={cn("font-display text-6xl leading-none", i ? "text-midnight" : "text-amber")}>{p.institutions}</dd>
                </div>
                <div className="flex flex-col-reverse">
                  <dt className={cn("text-sm", i ? "text-ink-secondary" : "text-smoke/85")}>{en ? "countries" : "negara"}</dt>
                  <dd className={cn("font-display text-6xl leading-none", i ? "text-midnight" : "text-amber")}>{p.countries}</dd>
                </div>
              </dl>
              <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-lg">
                <Photo image={p.image} sizes="(min-width: 1024px) 40vw, 100vw" />
              </div>
            </div>
            <ul className="grid content-start gap-3 sm:grid-cols-2">
              {p.members.map((m) => (
                <li key={m.name} className={cn("flex items-center gap-4 rounded-lg p-3", i ? "border border-midnight/10 bg-white" : "glass", m.name.startsWith("Petra") && "ring-2 ring-amber")}>
                  <div className="grid size-14 shrink-0 place-items-center rounded-md bg-white p-1.5">
                    {m.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={m.logo.src} alt="" className="max-h-full max-w-full object-contain" loading="lazy" />
                    ) : (
                      <span className="text-[10px] font-bold text-midnight">{m.name.split(" ")[0]}</span>
                    )}
                  </div>
                  <div>
                    <p className={cn("eyebrow", i ? "text-emerald" : "text-amber")}>{m.country}</p>
                    <p className={cn("font-semibold leading-tight", i ? "text-midnight" : "text-white")}>{m.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ))}

      <CtaBand locale={locale} image={media.labs["city-model"]} title={en ? "Building a consortium?" : "Sedang membangun konsorsium?"} body={en ? "Petra brings faculty depth, an Indonesian base and a track record in Erasmus+ and Horizon Europe." : "Petra membawa kekuatan fakultas, basis di Indonesia, dan rekam jejak di Erasmus+ dan Horizon Europe."} />
    </>
  );
}

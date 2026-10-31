import { BriefcaseBusiness, FlaskConical, GraduationCap, Mail, Mic, Presentation, Repeat, Ruler, Sun } from "lucide-react";
import { media } from "@/content/media.generated";
import { partnersNav } from "@/content/navigation";
import { byFaculty, byRegion, byScope, collaborationWays, consortia, continent, continentLabels, domestic, euProjects, mostPartnered, nationalList, networkTotals, partners, qsNote } from "@/content/partners";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { MAP_SIZE, partnerCountryPoints, surabaya } from "@/lib/map-points";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { StatGrid } from "@/components/sections/StatGrid";
import { Bars, ToConfirm } from "@/components/sections/bits";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { IconBadge } from "@/components/brand/IconBadge";
import { PatternBlock } from "@/components/brand/PatternBlock";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";
import { Donut } from "@/components/ui/donut";
import { WorldMap } from "@/components/ui/world-map";
import { PartnerWall } from "@/components/sections/PartnerWall";
import { ExternalLink } from "@/components/sections/links";
import { partnerSites } from "@/content/partner-sites";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/partners", { en: "Partners & Collaborators", id: "Mitra & Kolaborator" }, { en: "430+ domestic and 180+ international partners in 33 countries, and five consortiums.", id: "430+ mitra dalam negeri dan 180+ mitra internasional di 33 negara, serta lima konsorsium." });
}

const icons = { repeat: Repeat, graduation: GraduationCap, briefcase: BriefcaseBusiness, ruler: Ruler, flask: FlaskConical, presentation: Presentation, mic: Mic, sun: Sun } as const;

export default async function PartnersPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const newTab = en ? "(opens in a new tab)" : "(membuka tab baru)";
  const motionLabels = en ? { pause: "Pause scrolling", play: "Play scrolling" } : { pause: "Jeda gerakan", play: "Putar gerakan" };
  const kindLabel = { University: en ? "University" : "Universitas", Industry: en ? "Industry" : "Industri", Government: en ? "Government" : "Pemerintah", Healthcare: en ? "Healthcare" : "Kesehatan", Organisation: en ? "Organisation" : "Organisasi" } as const;

  // International partners named in the deck, alphabetical by country.
  const international = partners
    .filter((p) => p.country !== "Indonesia")
    .sort((a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name))
    .map((u) => ({ name: u.name, meta: `${u.country} · ${tr(continentLabels[continent(u.country)], locale)}`, badge: u.qs ? `QS #${u.qs}` : undefined, href: partnerSites[u.name], logo: u.logo }));
  const national = nationalList.map((d) => ({ name: d.name, meta: kindLabel[d.kind], href: d.website || undefined, logo: d.logo }));

  return (
    <>
      <PageHero
        image={media.mobility["exchange-group"]}
        eyebrow={en ? "Partners & collaborators" : "Mitra & kolaborator"}
        title={en ? "Going further, together" : "Melangkah lebih jauh, bersama"}
        lead={en ? "Petra works with 430+ domestic partners and 180+ universities in 33 countries — on teaching, research, student mobility and community outreach." : "Petra bekerja sama dengan 430+ mitra dalam negeri dan 180+ universitas di 33 negara — dalam pengajaran, riset, mobilitas mahasiswa dan pengabdian masyarakat."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(partnersNav.label, locale) }]}
      >
        <ul className="mt-6 flex flex-wrap gap-2">
          {partnersNav.links.map((l) => (
            <li key={l.path}><a href={l.path.slice(l.path.indexOf("#"))} className="btn btn-glass !px-4 !py-2 text-sm">{tr(l.label, locale)}</a></li>
          ))}
        </ul>
      </PageHero>

      <Section tone="dark" orbs cinematic bgImage={media.campus.landmark} labelledBy="numbers">
        <SectionHeading id="numbers" eyebrow={en ? "The network in numbers" : "Jejaring dalam angka"} title={en ? "Embrace the global stage" : "Rangkul panggung global"} />
        <StatGrid stats={networkTotals.slice(0, 4)} locale={locale} className="mt-10" />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="glass rounded-lg p-6">
            <p className="eyebrow mb-5 text-amber">{en ? "Where partners are" : "Lokasi mitra"}</p>
            <Donut shares={byRegion} total="180+" caption={en ? "partners" : "mitra"} locale={locale} />
          </div>
          <div className="glass rounded-lg p-6">
            <p className="eyebrow mb-5 text-amber">{en ? "What they cover" : "Cakupan kerja sama"}</p>
            <Donut shares={byScope} total="613" caption={en ? "areas" : "bidang"} locale={locale} />
          </div>
          <div className="glass rounded-lg p-6">
            <p className="eyebrow mb-5 text-amber">{en ? "Who carries it" : "Fakultas pelaksana"}</p>
            <Donut shares={byFaculty} total="1,299" caption={en ? "links" : "tautan"} locale={locale} />
          </div>
        </div>
        <div className="glass mt-4 rounded-lg p-6">
          <p className="eyebrow mb-5 text-amber">{en ? "Most-partnered universities · active links" : "Universitas dengan kerja sama terbanyak · tautan aktif"}</p>
          <Bars items={mostPartnered.map((m) => ({ label: m.name.replace(" University", ""), value: m.links, color: "#ffbc00" }))} />
        </div>
        <p className="mt-4 text-xs text-smoke/85">{en ? "Sources: IO Partnership List (agreements in force, July 2026) · Internationalization Dashboard AY 2025/2026. Taiwan, Hong Kong and Macau partners are counted within Greater China." : "Sumber: Daftar Kemitraan KUI (perjanjian berlaku, Juli 2026) · Dasbor Internasionalisasi TA 2025/2026. Mitra Taiwan, Hong Kong dan Makau dihitung dalam Tiongkok Raya."}</p>
      </Section>

      <Section tone="deep" labelledBy="map" bleed className="!py-10 md:!py-16">
        <h2 id="map" className="sr-only">{en ? "Map of partner countries" : "Peta negara mitra"}</h2>
        <Reveal><WorldMap origin={surabaya} points={partnerCountryPoints()} size={MAP_SIZE} /></Reveal>
      </Section>

      <Section tone="light" labelledBy="partners-title" id="partners" className="scroll-mt-20" decor={<span aria-hidden className="pcu-glow pcu-glow--cerise -right-48 -top-48 hidden size-[30rem] md:block" />}>
        <span id="domestic" className="block scroll-mt-20" />
        <span id="international" className="block scroll-mt-20" />
        <SectionHeading id="partners-title" tone="light" eyebrow={en ? "Partners" : "Mitra"} title={en ? "Who we work with" : "Mitra kerja sama kami"} lead={en ? `${domestic.total}+ partners across industry, government and institutions in Indonesia, and 180+ universities abroad.` : `${domestic.total}+ mitra dari industri, pemerintah dan institusi di Indonesia, serta 180+ universitas di luar negeri.`} />
        <dl className="mt-8 grid gap-3 sm:grid-cols-3">
          {domestic.breakdown.map((b) => (
            <div key={b.label.en} className="glass-light flex flex-col-reverse rounded-lg p-5">
              <dt className="text-sm text-ink-secondary">{tr(b.label, locale)}</dt>
              <dd className="font-display text-5xl leading-none text-midnight">{b.value}</dd>
            </div>
          ))}
        </dl>
        <PartnerWall
          className="mt-12"
          international={international}
          national={national}
          newTab={newTab}
          motionLabels={motionLabels}
          labels={{ group: en ? "Show partners" : "Tampilkan mitra", all: en ? "All" : "Semua", international: en ? "International" : "Internasional", national: en ? "National" : "Nasional" }}
        />
        <p className="mt-6 text-xs text-ink-secondary">{tr(qsNote, locale)} {en ? "Logos are trademarks of their respective institutions, shown to identify partnerships; initials stand in where a logo is still to be added. The full registers are kept by the International Office." : "Logo adalah merek dagang institusi masing-masing, ditampilkan untuk menandai kemitraan; inisial dipakai bila logo belum tersedia. Daftar lengkap disimpan oleh KUI."}</p>
      </Section>

      <Section tone="dark" orbs cinematic bgImage={media.mobility["international-day"]} labelledBy="consortiums-title" id="consortiums" className="scroll-mt-20">
        <SectionHeading id="consortiums-title" eyebrow="C" title={en ? "Consortiums" : "Konsorsium"} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {consortia.map((c, i) => (
            <li key={c.name}>
              <Reveal delay={i * 0.05} className="glass flex h-full flex-col rounded-lg p-5">
                <span className="grid h-24 place-items-center rounded-md bg-white p-3">
                  {c.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={c.logo.src} alt={c.logo.alt} className="max-h-[4.5rem] w-auto max-w-full object-contain" loading="lazy" />
                  ) : (
                    <span aria-hidden className="grid size-16 place-items-center rounded-full bg-midnight font-display text-xl leading-none tracking-wide text-amber">{c.name}</span>
                  )}
                </span>
                <p className="mt-4 font-display text-4xl leading-none text-amber">{c.name}</p>
                {c.full !== c.name && <p className="mt-2 text-sm font-semibold text-smoke">{c.full}</p>}
                <p className="mt-3 flex-1 text-sm text-smoke/90">{tr(c.body, locale)}</p>
                {"confirm" in c && c.confirm && <ToConfirm locale={locale} className="mt-4 self-start text-amber" />}
                <ExternalLink href={c.website} label={en ? "Visit website" : "Kunjungi situs"} locale={locale} variant="glass" className="mt-4 self-start" />
              </Reveal>
            </li>
          ))}
        </ul>
        <h3 className="mt-14 text-2xl">{en ? "EU-funded projects" : "Proyek yang didanai Uni Eropa"}</h3>
        <ul className="mt-6 grid gap-4 lg:grid-cols-2">
          {euProjects.map((p) => (
            <li key={p.programme} className="glass overflow-hidden rounded-lg">
              <div className="relative aspect-[16/7]"><Photo image={p.image} sizes="(min-width: 1024px) 50vw, 100vw" /><span className="absolute inset-0 bg-gradient-to-t from-midnight-deep to-transparent" /></div>
              <div className="p-6">
                <p className="eyebrow text-amber">{p.programme} · {p.action}</p>
                <p className="mt-2 font-bold">{p.title}</p>
                <p className="mt-2 text-sm text-smoke/90">{p.institutions} {en ? "institutions" : "institusi"} · {p.countries} {en ? "countries" : "negara"}</p>
                <p className="mt-3 text-sm text-smoke/85">{p.members.map((m) => m.name).join(" · ")}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white" labelledBy="collaborate-title" id="collaborate" className="scroll-mt-20" decor={<PatternBlock corner="tr" className="!size-64" />}>
        <SectionHeading id="collaborate-title" tone="light" eyebrow={en ? "Potential collaboration" : "Peluang kolaborasi"} title={en ? "8 ways to work with Petra" : "8 cara bekerja sama dengan Petra"} lead={en ? "Every partnership is shaped with you — from a single joint lecture to a full degree pathway." : "Setiap kemitraan dirancang bersama Anda — dari satu kuliah bersama hingga jalur gelar penuh."} />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {collaborationWays.map((w, i) => {
            const Icon = icons[w.icon as keyof typeof icons];
            return (
              <li key={w.icon} className="glass-light relative rounded-lg p-5">
                <span className="absolute right-4 top-4 font-display text-3xl leading-none text-midnight/15">0{i + 1}</span>
                <IconBadge icon={Icon} tone={(["sunrise", "aqua", "dusk", "amber"] as const)[i % 4]} size={44} />
                <p className="mt-3 text-lg font-bold">{tr(w.title, locale)}</p>
                <p className="mt-1 text-sm text-ink-secondary">{tr(w.body, locale)}</p>
              </li>
            );
          })}
        </ul>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-lg bg-gradient-midnight p-6 text-white md:flex-row md:items-center">
          <p className="text-lg font-semibold">{en ? "Interested in partnering with Petra?" : "Tertarik bermitra dengan Petra?"}</p>
          <a href="mailto:head-partnership@petra.ac.id" className="btn btn-amber"><Mail className="size-4" aria-hidden /> head-partnership@petra.ac.id</a>
        </div>
      </Section>
    </>
  );
}

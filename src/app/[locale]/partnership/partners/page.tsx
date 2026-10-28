import { media } from "@/content/media.generated";
import { navigation } from "@/content/navigation";
import { byFaculty, byRegion, byScope, industry, mostPartnered, networkTotals, partners, qsNote, type Region } from "@/content/partners";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { MAP_SIZE, partnerCountryPoints, regionColors, surabaya } from "@/lib/map-points";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { StatGrid } from "@/components/sections/StatGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { Bars } from "@/components/sections/bits";
import { PartnerDirectory } from "@/components/sections/PartnerDirectory";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Donut } from "@/components/ui/donut";
import { WorldMap } from "@/components/ui/world-map";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/partnership/partners", { en: "Partner List", id: "Daftar Mitra" }, { en: "180+ international partners in 33 countries, 17 in the QS top 500.", id: "180+ mitra internasional di 33 negara, 17 di QS top 500." });
}

export default async function PartnersPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        image={media.mobility["exchange-group"]}
        eyebrow={en ? "International partnership" : "Kemitraan internasional"}
        title={en ? "Who we work with, and how much" : "Dengan siapa kami bekerja sama"}
        lead={en ? "180+ international partners from 33 countries, across teaching, research and student mobility." : "180+ mitra internasional dari 33 negara, di bidang pengajaran, riset dan mobilitas mahasiswa."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(navigation[2].label, locale) }, { label: en ? "Partner List" : "Daftar Mitra" }]}
      />

      <Section tone="dark" orbs labelledBy="numbers">
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
        <p className="mt-4 text-xs text-smoke/85">{en ? "Sources: IO Partnership List (agreements in force, July 2026) · Internationalization Dashboard AY 2025/2026. Taiwan, Hong Kong and Macau partners are counted within Greater China." : "Sumber: Daftar Kemitraan KUI (perjanjian berlaku, Juli 2026) · Dasbor Internasionalisasi TA 2025/2026. Mitra Taiwan, Hong Kong dan Makau dihitung dalam Tiongkok Raya."}</p>
      </Section>

      <Section tone="deep" labelledBy="map">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-center">
          <Reveal><WorldMap origin={surabaya} points={partnerCountryPoints()} size={MAP_SIZE} /></Reveal>
          <div>
            <SectionHeading id="map" eyebrow={en ? "Closest partners" : "Mitra terdekat"} title={en ? "Most-partnered universities" : "Universitas dengan kerja sama terbanyak"} lead={en ? "Number of active partnership links per university." : "Jumlah tautan kerja sama aktif per universitas."} />
            <div className="mt-6">
              <Bars items={mostPartnered.map((m) => ({ label: m.name.replace(" University", ""), value: m.links, color: "#ffbc00" }))} />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="light" labelledBy="directory">
        <SectionHeading id="directory" tone="light" eyebrow={en ? "Partner list" : "Daftar mitra"} title={en ? "Find a partner" : "Cari mitra"} lead={en ? "A highlight list of partners named in our international profile, including the QS-ranked universities. The full register of 180+ agreements is kept by the International Office." : "Daftar mitra pilihan dari profil internasional kami, termasuk universitas berperingkat QS. Daftar lengkap 180+ perjanjian disimpan oleh KUI."} />
        <div className="mt-10">
          <PartnerDirectory
            partners={partners}
            regionColors={regionColors}
            labels={{
              search: en ? "Search by university or country" : "Cari universitas atau negara",
              all: en ? "All" : "Semua",
              region: en ? "Region" : "Kawasan",
              type: en ? "Type" : "Jenis",
              qs: en ? "QS-ranked" : "Berperingkat QS",
              none: en ? "No partners match these filters." : "Tidak ada mitra yang cocok.",
              results: en ? "{n} shown" : "{n} ditampilkan",
              regions: { ...(Object.fromEntries(byRegion.map((r) => [r.label.en, tr(r.label, locale)])) as Record<Exclude<Region, "Other">, string>), Other: en ? "Other" : "Lainnya" },
              tags: {
                "Joint degree": en ? "Joint degree" : "Gelar bersama",
                Exchange: en ? "Exchange" : "Pertukaran",
                Consortium: en ? "Consortium" : "Konsorsium",
                "EU project": en ? "EU project" : "Proyek UE",
                "Most partnered": en ? "Most partnered" : "Mitra terdekat",
                Summer: en ? "Summer" : "Musim panas",
              },
            }}
          />
        </div>
        <p className="mt-6 text-xs text-ink-secondary">{tr(qsNote, locale)}</p>
      </Section>

      <Section tone="dark" labelledBy="industry">
        <SectionHeading id="industry" eyebrow={en ? "Industry" : "Industri"} title={tr(industry.totals, locale)} />
        <ul className="mt-8 flex flex-wrap gap-2">
          {industry.names.map((n) => <li key={n} className="glass rounded-full px-4 py-2 font-semibold">{n}</li>)}
        </ul>
      </Section>

      <CtaBand locale={locale} image={media.mobility["international-day"]} title={en ? "Join the network." : "Bergabunglah dengan jejaring kami."} body={en ? "From one joint lecture to a full degree pathway, every partnership is shaped with you." : "Dari satu kuliah bersama hingga jalur gelar penuh, setiap kemitraan dirancang bersama Anda."} />
    </>
  );
}

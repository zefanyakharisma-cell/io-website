import { ArrowUpRight } from "lucide-react";
import { media } from "@/content/media.generated";
import { navigation } from "@/content/navigation";
import { gallery, jointDegrees, mobilityGlance, outboundRoutes } from "@/content/mobility";
import { contact } from "@/content/contact";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { MAP_SIZE, countryPoints, surabaya } from "@/lib/map-points";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { FacultyDot, ToConfirm } from "@/components/sections/bits";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";
import { WorldMap } from "@/components/ui/world-map";
import { Gallery } from "@/components/ui/gallery";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/mobility/outbound", { en: "Outbound Mobility", id: "Mobilitas Outbound" }, { en: "Petranesians abroad: exchange, joint and double degrees with 10 partners, IISMA and summer programmes.", id: "Petranesian di luar negeri: pertukaran, gelar bersama dan ganda dengan 10 mitra, IISMA dan program musim panas." });
}

const levelLabel = { B: { en: "Bachelor", id: "Sarjana" }, M: { en: "Master", id: "Magister" }, D: { en: "Doctoral", id: "Doktor" } };

export default async function OutboundPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const trackCount = jointDegrees.reduce((n, p) => n + p.tracks.length, 0);

  return (
    <>
      <PageHero
        image={media.mobility["korea-university"]}
        eyebrow={en ? "Outbound mobility" : "Mobilitas outbound"}
        title={en ? "Petranesians around the world" : "Petranesian di seluruh dunia"}
        lead={en ? `In 2025–2026, Petranesians studied in ${mobilityGlance.outbound.countries} countries on ${mobilityGlance.outbound.continents} continents.` : `Pada 2025–2026, Petranesian belajar di ${mobilityGlance.outbound.countries} negara di ${mobilityGlance.outbound.continents} benua.`}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(navigation[1].label, locale) }, { label: "Outbound" }]}
      />

      <Section tone="dark" orbs labelledBy="where">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <div>
            <SectionHeading id="where" eyebrow={en ? "Outbound · 2025–2026" : "Outbound · 2025–2026"} title={en ? "Where Petranesians go" : "Ke mana Petranesian pergi"} lead={en ? `Destinations include ${mobilityGlance.outbound.named.join(", ")}.` : `Tujuan antara lain ${mobilityGlance.outbound.named.join(", ")}.`} />
            <p className="mt-4 text-sm text-smoke/85">{en ? "The map shows the countries named in the source; the remaining destinations are not listed there." : "Peta menunjukkan negara yang disebut dalam sumber; tujuan lainnya tidak tercantum."}</p>
          </div>
          <WorldMap origin={surabaya} size={MAP_SIZE} points={countryPoints(mobilityGlance.outbound.named, "#ffbc00")} />
        </div>
      </Section>

      <Section tone="light" labelledBy="routes">
        <SectionHeading id="routes" tone="light" eyebrow={en ? "Ways to go" : "Jalur keberangkatan"} title={en ? "Four routes abroad" : "Empat jalur ke luar negeri"} />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {outboundRoutes.map((r, i) => (
            <li key={tr(r.title, "en")}>
              <Reveal delay={i * 0.06} className="glass-light flex h-full flex-col overflow-hidden rounded-lg sm:flex-row">
                <div className="relative aspect-[16/10] shrink-0 sm:aspect-auto sm:w-48">
                  <Photo image={r.image} sizes="(min-width: 640px) 12rem, 100vw" />
                </div>
                <div className="p-6">
                  <p className="text-xl font-bold text-midnight">{tr(r.title, locale)}</p>
                  <p className="mt-2 text-ink-secondary">{tr(r.body, locale)}</p>
                  {r.link && (
                    <a href={r.link.href} target="_blank" rel="noreferrer" className="btn btn-midnight mt-4 !px-4 !py-2 text-sm">
                      {tr(r.link.label, locale)} <ArrowUpRight className="size-4" aria-hidden />
                      <span className="sr-only">{en ? "(opens in a new tab)" : "(membuka tab baru)"}</span>
                    </a>
                  )}
                  {r.confirm && <ToConfirm locale={locale} className="mt-4 flex w-fit text-emerald" />}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-secondary">
          {en ? "Questions about going abroad? Email " : "Pertanyaan tentang studi ke luar negeri? Kirim email ke "}
          <a className="prose-link" href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      </Section>

      <Section tone="deep" labelledBy="degrees" id="joint-degree">
        <SectionHeading id="degrees" eyebrow={en ? "Joint & double degree" : "Gelar bersama & ganda"} title={en ? "Study at Petra, graduate twice" : "Kuliah di Petra, lulus dua kali"} lead={en ? `${jointDegrees.length} partners and ${trackCount} programmes. Years at Petra + years abroad.` : `${jointDegrees.length} mitra dan ${trackCount} program. Tahun di Petra + tahun di luar negeri.`} />
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-smoke">
          {["FTI", "SBM", "FHIK", "FTSP"].map((f) => (
            <span key={f} className="flex items-center gap-2"><FacultyDot code={f} />{f}</span>
          ))}
          <span className="text-smoke/85">· B = {tr(levelLabel.B, locale)} · M = {tr(levelLabel.M, locale)} · D = {tr(levelLabel.D, locale)}</span>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {jointDegrees.map((p, i) => (
            <li key={p.partner}>
              <Reveal delay={(i % 3) * 0.06} className="glass h-full rounded-lg p-5">
                <div className="flex items-center gap-3">
                  <div className="grid size-14 shrink-0 place-items-center rounded-md bg-white p-1.5">
                    {p.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.logo.src} alt="" className="max-h-full max-w-full object-contain" loading="lazy" />
                    ) : (
                      <span className="text-xs font-bold text-midnight">{p.partner.split(" ")[0]}</span>
                    )}
                  </div>
                  <div>
                    <p className="font-bold leading-tight">{p.partner}</p>
                    <p className="text-sm text-smoke/80">{p.country}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {p.tracks.map((t) => (
                    <li key={t.programme + t.scheme + t.level} className="flex items-center gap-2 text-sm">
                      <span className="w-9 shrink-0 rounded bg-amber px-1 text-center text-xs font-bold text-midnight">{t.scheme}</span>
                      <FacultyDot code={t.faculty} />
                      <span className="flex-1">{t.programme}</span>
                      <abbr title={tr(levelLabel[t.level], locale)} className="text-xs font-semibold text-smoke/85 no-underline">{t.level}</abbr>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dark" labelledBy="pictures">
        <SectionHeading id="pictures" eyebrow={en ? "In pictures" : "Dalam gambar"} title={en ? "Petranesians abroad" : "Petranesian di luar negeri"} />
        <Gallery className="mt-10" items={gallery.slice(5).map((g) => ({ ...g, caption: tr(g.caption, locale) }))} openLabel={en ? "Open photo" : "Buka foto"} />
      </Section>

      <CtaBand locale={locale} image={media.mobility.saxion} title={en ? "Partner on a double-degree pathway." : "Bermitra dalam jalur gelar ganda."} body={en ? "2+2, 3+1 and 1+1 pathways already run with ten universities. Yours could be next." : "Jalur 2+2, 3+1 dan 1+1 sudah berjalan dengan sepuluh universitas. Berikutnya bisa universitas Anda."} />
    </>
  );
}

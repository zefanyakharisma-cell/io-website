import { Check, Mail } from "lucide-react";
import { media } from "@/content/media.generated";
import { outboundNav } from "@/content/navigation";
import { jointDegrees, mobilityGlance, signatureProgrammes } from "@/content/mobility";
import { shortProgramDefinition } from "@/content/inbound";
import { globalOutbound, ice, iisma, localOutbound, outboundDosAndDonts, outboundRequirements } from "@/content/outbound";
import { links, testimonialVideos, whatsapp } from "@/content/links";
import { posters } from "@/content/media";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { MAP_SIZE, countryPoints, surabaya } from "@/lib/map-points";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { FacultyDot, ToConfirm } from "@/components/sections/bits";
import { DosDonts } from "@/components/sections/DosDonts";
import { ExternalLink, WhatsAppButton } from "@/components/sections/links";
import { PosterSlot, VideoTestimonial } from "@/components/sections/MediaSlots";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";
import { Ring } from "@/components/brand/Ring";
import { WorldMap } from "@/components/ui/world-map";
import { StatGrid } from "@/components/sections/StatGrid";
import { SourceNote } from "@/components/sections/SourceNote";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/outbound", { en: "Outbound Programs", id: "Program Outbound" }, { en: "Petranesians abroad: IISMA, student exchange, study abroad, joint and dual degrees, short, online and local programmes.", id: "Petranesian ke luar negeri: IISMA, pertukaran, study abroad, joint dan dual degree, program singkat, daring dan lokal." });
}

const levelLabel = { B: { en: "Bachelor", id: "Sarjana" }, M: { en: "Master", id: "Magister" }, D: { en: "Doctoral", id: "Doktor" } };

export default async function OutboundPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const trackCount = jointDegrees.reduce((n, p) => n + p.tracks.length, 0);
  const petraOnly = en ? "Sign in with your @petra.ac.id or @john.petra.ac.id account to download." : "Masuk dengan akun @petra.ac.id atau @john.petra.ac.id untuk mengunduh.";
  const icop = signatureProgrammes.find((p) => p.code === "ICOP")!;

  return (
    <>
      <PageHero
        image={media.mobility["korea-university"]}
        eyebrow={en ? "Outbound programs" : "Program outbound"}
        title={en ? "Petranesians around the world" : "Petranesian di seluruh dunia"}
        lead={en ? `In 2025–2026, Petranesians studied in ${mobilityGlance.outbound.countries} countries on ${mobilityGlance.outbound.continents} continents.` : `Pada 2025–2026, Petranesian belajar di ${mobilityGlance.outbound.countries} negara di ${mobilityGlance.outbound.continents} benua.`}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(outboundNav.label, locale) }]}
      >
        <ul className="mt-6 flex flex-wrap gap-2">
          {outboundNav.links.map((l) => (
            <li key={l.path}><a href={l.path.slice(l.path.indexOf("#"))} className="btn btn-glass !px-4 !py-2 text-sm">{tr(l.label, locale)}</a></li>
          ))}
        </ul>
      </PageHero>

      <Section tone="light" labelledBy="iisma-title" id="iisma" className="scroll-mt-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading id="iisma-title" tone="light" eyebrow="IISMA" title="Indonesian International Student Mobility Awards" lead={tr(iisma.intro, locale)} />
            <ul className="mt-6 space-y-2">
              {iisma.facts.map((f) => <li key={f.en} className="flex gap-3 text-midnight"><Check className="mt-0.5 size-5 shrink-0 text-emerald" aria-hidden />{tr(f, locale)}</li>)}
            </ul>
            <h3 className="mt-8 text-lg text-midnight">{en ? "Petra's internal selection" : "Seleksi internal Petra"}</h3>
            <ul className="mt-3 space-y-2">
              {iisma.selection.map((r) => <li key={r.en} className="flex gap-3 text-midnight"><Check className="mt-0.5 size-5 shrink-0 text-emerald" aria-hidden />{tr(r, locale)}</li>)}
            </ul>
            <ToConfirm locale={locale} className="mt-5 text-emerald" />
            <div className="mt-6"><ExternalLink href={links.iisma} label={en ? "IISMA website" : "Situs IISMA"} locale={locale} variant="midnight" /></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {iisma.images.map((img, k) => (
              <div key={img.src} className={k === 0 ? "relative col-span-2 aspect-[16/9] overflow-hidden rounded-lg" : "relative aspect-square overflow-hidden rounded-lg"}>
                <Photo image={img} sizes="(min-width: 1024px) 25vw, 50vw" />
              </div>
            ))}
            <figure className="glass-light col-span-2 rounded-lg p-5">
              <figcaption className="font-bold text-midnight">{en ? "Applicants nationwide" : "Pendaftar nasional"}</figcaption>
              <ul className="mt-4 space-y-3">
                {[...iisma.applicants.map((a) => ({ label: a.year, sub: en ? "applicants" : "pendaftar", value: a.value, color: "#19304b" })), { label: "2024", sub: en ? "selected" : "terpilih", value: iisma.selected2024, color: "#135d50" }].map((b) => (
                  <li key={b.label + b.sub} className="grid grid-cols-[5.5rem_1fr_4rem] items-center gap-3 text-sm">
                    <span className="text-midnight"><span className="font-semibold">{b.label}</span> <span className="text-ink-secondary">{b.sub}</span></span>
                    <span className="h-3 overflow-hidden rounded-full bg-midnight/10"><span className="block h-full rounded-full" style={{ width: `${(b.value / iisma.applicants[1].value) * 100}%`, background: b.color }} /></span>
                    <span className="text-right font-semibold tabular-nums text-midnight">{b.value.toLocaleString(en ? "en-US" : "id-ID")}</span>
                  </li>
                ))}
              </ul>
              <SourceNote ids={["iismaKatadata", "iismaUmy"]} locale={locale} />
            </figure>
          </div>
        </div>
      </Section>

      <Section tone="dark" cinematic bgImage={media.campus["gazebo-study"]} orbs labelledBy="global-title" id="global" className="scroll-mt-20">
        <Ring shape="ring-u-line" className="-right-40 top-0 w-[34rem] text-amber/40" />
        <SectionHeading id="global-title" eyebrow={en ? "Global outbound" : "Outbound global"} title={en ? "Five ways to go abroad" : "Lima cara ke luar negeri"} lead={petraOnly} />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {globalOutbound.map((g, i) => (
            <li key={g.title.en}>
              <Reveal delay={(i % 2) * 0.06} className="glass flex h-full flex-col overflow-hidden rounded-lg sm:flex-row">
                <div className="relative aspect-[16/10] shrink-0 sm:aspect-auto sm:w-44"><Photo image={g.image} sizes="11rem" /></div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xl font-bold">{i + 1}. {tr(g.title, locale)}</p>
                  <p className="mt-2 flex-1 text-smoke/90">{tr(g.definition, locale)}</p>
                  <ExternalLink href={g.download} label={en ? "Download list (Petra account)" : "Unduh daftar (akun Petra)"} locale={locale} icon="lock" variant="amber" className="mt-4 self-start !px-4 !py-2 text-sm" />
                </div>
              </Reveal>
            </li>
          ))}
          <li className="md:col-span-2">
            <Reveal className="glass grid gap-6 rounded-lg p-6 md:grid-cols-[1.2fr_1fr_1fr]">
              <div>
                <p className="text-xl font-bold">5. {en ? "Short Program (non-degree)" : "Program Singkat (non-gelar)"}</p>
                <p className="mt-2 text-smoke/90">{tr(shortProgramDefinition, locale)}</p>
                <div className="mt-4"><ExternalLink href={icop.website} label={en ? "ICOP website" : "Situs ICOP"} locale={locale} className="!px-4 !py-2 text-sm" /></div>
              </div>
              {(["PSP", "ASP"] as const).map((code) => {
                const prog = signatureProgrammes.find((p) => p.code === code)!;
                return (
                  <div key={code}>
                    <PosterSlot src={posters[code]} alt={`${prog.name} poster`} title={code} placeholder={en ? "Poster coming soon" : "Poster segera hadir"} className="max-h-80" />
                    <a href={prog.website} target="_blank" rel="noreferrer" className="mt-2 block text-center text-sm font-semibold text-amber underline-offset-4 hover:underline">{prog.name} ↗<span className="sr-only">{en ? " (opens in a new tab)" : " (membuka tab baru)"}</span></a>
                  </div>
                );
              })}
            </Reveal>
          </li>
        </ul>
      </Section>

      <Section tone="deep" cinematic bgImage={media.mobility["international-day"]} labelledBy="degrees" id="degree-partners">
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

      <Section tone="light" labelledBy="registration-title" id="registration" className="scroll-mt-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="registration-title" tone="light" eyebrow={en ? "Registration info" : "Info pendaftaran"} title={en ? "General requirements" : "Persyaratan umum"} />
            <ul className="mt-6 space-y-3">
              {outboundRequirements.map((r) => <li key={r.en} className="flex gap-3 text-midnight"><Check className="mt-0.5 size-5 shrink-0 text-emerald" aria-hidden />{tr(r, locale)}</li>)}
            </ul>
            <ToConfirm locale={locale} className="mt-5 text-emerald" />
            <div className="mt-6"><ExternalLink href={links.outboundRegistration} label={en ? "Outbound student registration" : "Pendaftaran mahasiswa outbound"} locale={locale} variant="midnight" /></div>
          </div>
          <div>
            <h2 className="text-3xl text-midnight">{en ? "Rules & regulations" : "Aturan & regulasi"}</h2>
            <div className="mt-6"><DosDonts dos={outboundDosAndDonts.dos} donts={outboundDosAndDonts.donts} locale={locale} /></div>
          </div>
        </div>
      </Section>

      <Section tone="deep" cinematic bgImage={media.campus["tree-planting"]} labelledBy="online-title" id="online" className="scroll-mt-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="online-title" eyebrow={en ? "Online outbound" : "Outbound daring"} title="ICE Institute" lead={tr(ice.intro, locale)} />
            <ul className="mt-6 space-y-2">
              {ice.selection.map((r) => <li key={r.en} className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-amber" aria-hidden />{tr(r, locale)}</li>)}
            </ul>
            <ToConfirm locale={locale} className="mt-5 text-amber" />
            <div className="mt-6 flex flex-wrap gap-3">
              <ExternalLink href={links.iceInstitute} label={en ? "ICE Institute website" : "Situs ICE Institute"} locale={locale} />
              <ExternalLink href={links.outboundRegistration} label={en ? "Register" : "Daftar"} locale={locale} variant="glass" />
            </div>
            <StatGrid stats={ice.stats} locale={locale} className="mt-8 sm:grid-cols-3 md:grid-cols-3" />
            <SourceNote ids={["icePartners", "iceFiveYears"]} locale={locale} tone="dark" />
          </div>
          <div id="local" className="scroll-mt-24">
            <h2 className="text-3xl">{en ? "Local outbound" : "Outbound lokal"}</h2>
            <ul className="mt-6 space-y-3">
              {localOutbound.map((l) => (
                <li key={l.name} className="glass rounded-lg p-5">
                  <p className="font-display text-3xl leading-none text-amber">{l.name}</p>
                  <p className="mt-2 text-smoke/90">{tr(l.body, locale)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="dark" cinematic bgImage={media.mobility["asp-group"]} orbs labelledBy="where">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <div>
            <SectionHeading id="where" eyebrow={en ? "Outbound · 2025–2026" : "Outbound · 2025–2026"} title={en ? "Where Petranesians go" : "Ke mana Petranesian pergi"} lead={en ? `Destinations include ${mobilityGlance.outbound.named.join(", ")}.` : `Tujuan antara lain ${mobilityGlance.outbound.named.join(", ")}.`} />
            <p className="mt-4 text-sm text-smoke/85">{en ? "The map shows the countries named in the source; the remaining destinations are not listed there." : "Peta menunjukkan negara yang disebut dalam sumber; tujuan lainnya tidak tercantum."}</p>
          </div>
          <WorldMap origin={surabaya} size={MAP_SIZE} points={countryPoints(mobilityGlance.outbound.named, "#ffbc00")} />
        </div>
      </Section>

      <Section tone="dark" cinematic bgImage={media.campus["students-corridor"]} labelledBy="testimonies">
        <SectionHeading id="testimonies" eyebrow={en ? "Testimonies" : "Testimoni"} title={en ? "From NUNI, BKPTKI and IISMA students" : "Dari peserta NUNI, BKPTKI dan IISMA"} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonialVideos.outbound.map((id, i) => (
            <VideoTestimonial key={i} id={id} title={`${["NUNI", "BKPTKI", "IISMA"][i]} ${en ? "testimony" : "testimoni"}`} placeholder={`${["NUNI", "BKPTKI", "IISMA"][i]} — ${en ? "testimony coming soon" : "testimoni segera hadir"}`} />
          ))}
        </div>
      </Section>

      <Section tone="white" labelledBy="inquiries">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <SectionHeading id="inquiries" tone="light" eyebrow={en ? "Inquiries" : "Pertanyaan"} title={en ? "Outgoing student inquiries" : "Pertanyaan mahasiswa outbound"} lead={en ? "Chat with us on WhatsApp (chat only, no calls) or send an email." : "Hubungi kami via WhatsApp (khusus chat, tanpa telepon) atau email."} />
          <div className="flex flex-col gap-3">
            <WhatsAppButton digits={whatsapp.outbound.digits} display={whatsapp.outbound.display} locale={locale} className="justify-center" />
            <a href="mailto:staff-mobility@petra.ac.id" className="btn justify-center border border-midnight/25 text-midnight hover:bg-midnight/5"><Mail className="size-4" aria-hidden /> staff-mobility@petra.ac.id</a>
          </div>
        </div>
      </Section>
    </>
  );
}

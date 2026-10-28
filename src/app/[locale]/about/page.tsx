import Link from "next/link";
import { ArrowRight, DoorOpen, Mail, MapPin, Phone } from "lucide-react";
import { media } from "@/content/media.generated";
import { aboutNav } from "@/content/navigation";
import { campusResources, office } from "@/content/getToKnow";
import { accreditations, badges, campus, history, keyStats, rankingNote, rankings, standing, statsSource, tagline, vision } from "@/content/profile";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { StatGrid } from "@/components/sections/StatGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";
import { Ring } from "@/components/brand/Ring";
import { IconBadge } from "@/components/brand/IconBadge";
import { Sign } from "@/components/brand/Sign";
import { Timeline } from "@/components/sections/Timeline";
import { SourceNote } from "@/components/sections/SourceNote";
import { MapEmbed } from "@/components/sections/MapEmbed";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/about", { en: "About Petra", id: "Tentang Petra" }, { en: "Petra Christian University: founded 1961 in Surabaya, ranked in QS WUR 2026, accredited “Unggul”.", id: "Universitas Kristen Petra: berdiri 1961 di Surabaya, masuk QS WUR 2026, terakreditasi “Unggul”." });
}

export default async function AboutPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const about = aboutNav;

  return (
    <>
      <PageHero
        image={media.campus.landmark}
        eyebrow={en ? "Global profile" : "Profil global"}
        title={en ? "Petra Christian University" : "Universitas Kristen Petra"}
        lead={tr(vision, locale) + (en ? " Since 1961 — Surabaya, Indonesia." : " Sejak 1961 — Surabaya, Indonesia.")}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(about.label, locale) }]}
      />

      <Section tone="dark" labelledBy="numbers">
        <SectionHeading id="numbers" eyebrow={en ? "Petra in numbers · 2025–2026" : "Petra dalam angka · 2025–2026"} title={en ? "Six decades of measurable impact" : "Enam dekade dampak yang terukur"} />
        <StatGrid stats={keyStats} locale={locale} className="mt-10" />
        <p className="mt-6 text-xs text-smoke/85">{en ? "Sources" : "Sumber"}: {tr(statsSource, locale)}</p>
      </Section>

      <Section tone="deep" orbs labelledBy="history" decor={<Ring shape="ring-n-line" className="-right-24 top-8 w-[30rem] text-teal" />}>
        <SectionHeading id="history" face="serif" eyebrow={en ? "Our story" : "Sejarah kami"} title={en ? "Seventy-five years of Petra education" : "Tujuh puluh lima tahun pendidikan Petra"} lead={en ? "From a Christian education foundation in 1951 to a QS-ranked university." : "Dari yayasan pendidikan Kristen pada 1951 hingga universitas berperingkat QS."} />
        <Timeline className="mt-10" items={history.map((h) => ({ when: h.when, title: tr(h.title, locale), body: tr(h.body, locale) }))} />
        <SourceNote ids={["wikipediaPetra"]} locale={locale} tone="dark" className="mt-6" />
      </Section>

      <Section tone="light" labelledBy="recognition">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading id="recognition" tone="light" eyebrow={en ? "Global recognition" : "Rekognisi global"} title={en ? "Ranked, accredited and internationally trusted" : "Berperingkat, terakreditasi dan dipercaya dunia"} lead={tr(rankingNote, locale)} />
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {badges.map((b) => (
                <div key={b.src} className="grid h-24 place-items-center rounded-lg bg-midnight px-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.src} alt={b.alt} className="max-h-20 w-auto" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {rankings.map((r, i) => (
              <li key={r.rank}>
                <Reveal delay={i * 0.06} className="glass-light h-full rounded-lg p-6">
                  <p className="font-display text-6xl leading-none text-midnight">{r.rank}</p>
                  <p className="mt-2 font-semibold text-midnight">{tr(r.label, locale)}</p>
                  <p className="mt-1 text-xs text-ink-secondary">{r.source}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
        <ul className="mt-12 grid gap-3 md:grid-cols-3">
          {standing.map((s) => (
            <li key={s.title} className="rounded-lg border border-midnight/10 bg-white p-6">
              <p className="text-lg font-bold text-midnight">{s.title}</p>
              <p className="mt-1 text-sm text-ink-secondary">{tr(s.body, locale)}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dark" orbs labelledBy="accreditation">
        <Ring shape="ring-n" className="-right-32 -top-24 w-[26rem] text-teal/60" />
        <SectionHeading id="accreditation" eyebrow={en ? "Accreditation" : "Akreditasi"} title={en ? "Benchmarked against the world" : "Bertolok ukur dunia"} lead={en ? "European, Washington and Canberra Accord standards — and every programme nationally “Excellent”." : "Standar Eropa, Washington Accord dan Canberra Accord — dan setiap program berstatus “Unggul” secara nasional."} />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {accreditations.map((a, i) => (
            <li key={a.body}>
              <Reveal delay={i * 0.08} className="glass flex h-full flex-col rounded-lg p-6">
                <div className="grid h-20 place-items-center rounded-md bg-white px-4">
                  {a.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={a.logo.src} alt={a.logo.alt} className="max-h-14 w-auto" loading="lazy" />
                  ) : (
                    <span className="text-2xl font-bold tracking-wide text-midnight">{a.body}</span>
                  )}
                </div>
                <p className="mt-5 text-xl font-bold">{a.body}</p>
                <p className="text-amber">{tr(a.standard, locale)}</p>
                <p className="mt-3 text-sm text-smoke/90">{tr(a.scope, locale)}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="light" labelledBy="resources" id="campus-resources" className="scroll-mt-20">
        <SectionHeading id="resources" tone="light" eyebrow={en ? "Campus resources" : "Fasilitas kampus"} title={en ? "Everything you need on one campus" : "Semua yang Anda butuhkan di satu kampus"} lead={en ? "Facilities that support international students at Petra." : "Fasilitas pendukung bagi mahasiswa internasional di Petra."} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {campusResources.map((r, i) => (
            <li key={r.title.en}>
              <Reveal delay={(i % 3) * 0.06} className="glass-light h-full overflow-hidden rounded-lg">
                <div className="relative aspect-[16/10]"><Photo image={r.image} sizes="(min-width: 1024px) 33vw, 50vw" /></div>
                <div className="p-5">
                  <p className="text-lg font-bold text-midnight">{tr(r.title, locale)}</p>
                  <p className="mt-1 text-ink-secondary">{tr(r.body, locale)}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-secondary">{en ? "International students are welcomed by our " : "Mahasiswa internasional disambut oleh "}<Link className="prose-link" href={href(locale, "/about/petramate")}>Petramate</Link>{en ? " team." : "."}</p>
      </Section>

      <Section tone="deep" labelledBy="explore">
        <SectionHeading id="explore" eyebrow={tagline} title={en ? "Explore Petra" : "Jelajahi Petra"} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { link: about.links[1], image: media.mobility["international-day"] },
            { link: about.links[2], image: media.mobility.bromo },
            { link: about.links[3], image: media.campus["building-yellow"] },
            { link: about.links[4], image: media.faculty.medicine },
            { link: about.links[5], image: media.labs["structural-beam"] },
            { link: about.links[6], image: media.drone.launch },
          ].map(({ link, image }) => (
            <li key={link.path}>
              <Link href={href(locale, link.path)} className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-lg">
                <Photo image={image} className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, 50vw" />
                <span className="absolute inset-0 bg-gradient-to-t from-midnight-deep via-midnight-deep/30 to-transparent" />
                <span className="glass relative m-3 rounded-md p-4">
                  <span className="flex items-center justify-between font-bold">
                    {tr(link.label, locale)} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                  <span className="mt-1 block text-sm text-smoke/85">{tr(link.description, locale)}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="light" labelledBy="visit">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading id="visit" tone="light" eyebrow={en ? "Visit us" : "Kunjungi kami"} title={en ? "Find the International Office" : "Temukan Kantor Urusan Internasional"} />
            <ul className="mt-6 space-y-4 text-midnight">
              <li className="flex items-center gap-3"><IconBadge icon={MapPin} size={40} /><span><strong>{tr(office.room, locale)}</strong><br />{campus.address}</span></li>
              <li className="flex items-center gap-3"><IconBadge icon={Phone} tone="aqua" size={40} /><span>{en ? "Student mobility: " : "Mobilitas mahasiswa: "}<a className="font-semibold underline underline-offset-2" href={`tel:${office.mobilityPhone.tel}`}>{office.mobilityPhone.display}</a></span></li>
              <li className="flex items-center gap-3"><IconBadge icon={Mail} tone="dusk" size={40} /><a className="font-semibold underline underline-offset-2" href={`mailto:${office.mobilityEmail}`}>{office.mobilityEmail}</a></li>
            </ul>
            <SourceNote ids={["pcuFactSheet"]} locale={locale} />
            <Sign icon={DoorOpen} building={en ? "D Building · Room 104" : "Gedung D · Ruang 104"} room={en ? "International Office" : "Kantor Urusan Internasional"} className="mt-8 max-w-md" />
          </div>
          <MapEmbed query="Petra Christian University, Siwalankerto, Surabaya" title={en ? "Map of Petra Christian University" : "Peta Universitas Kristen Petra"} labels={en ? { load: "Show map", note: "Loads Google Maps, which may set cookies.", open: "Open in Google Maps" } : { load: "Tampilkan peta", note: "Memuat Google Maps, yang dapat menyimpan cookie.", open: "Buka di Google Maps" }} />
        </div>
      </Section>

      <CtaBand locale={locale} image={media.campus["gazebo-study"]} title={en ? "Visit us in Surabaya." : "Kunjungi kami di Surabaya."} body={en ? "Delegations, partner visits and campus tours start with the International Office." : "Kunjungan delegasi, mitra dan tur kampus dimulai dari Kantor Urusan Internasional."} />
    </>
  );
}

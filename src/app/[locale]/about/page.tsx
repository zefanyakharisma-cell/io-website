import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { media } from "@/content/media.generated";
import { navigation } from "@/content/navigation";
import { accreditations, badges, keyStats, rankingNote, rankings, standing, statsSource, tagline, vision } from "@/content/profile";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { StatGrid } from "@/components/sections/StatGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";
import { Ring } from "@/components/brand/Ring";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/about", { en: "About Petra", id: "Tentang Petra" }, { en: "Petra Christian University: founded 1961 in Surabaya, ranked in QS WUR 2026, accredited “Unggul”.", id: "Universitas Kristen Petra: berdiri 1961 di Surabaya, masuk QS WUR 2026, terakreditasi “Unggul”." });
}

export default async function AboutPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const about = navigation[0];

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

      <Section tone="deep" labelledBy="explore">
        <SectionHeading id="explore" eyebrow={tagline} title={en ? "Explore Petra" : "Jelajahi Petra"} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { link: about.links[1], image: media.campus["building-yellow"] },
            { link: about.links[2], image: media.faculty.medicine },
            { link: about.links[3], image: media.labs["structural-beam"] },
            { link: about.links[4], image: media.drone.launch },
          ].map(({ link, image }) => (
            <li key={link.path}>
              <Link href={href(locale, link.path)} className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-lg">
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

      <CtaBand locale={locale} image={media.campus["gazebo-study"]} title={en ? "Visit us in Surabaya." : "Kunjungi kami di Surabaya."} body={en ? "Delegations, partner visits and campus tours start with the International Office." : "Kunjungan delegasi, mitra dan tur kampus dimulai dari Kantor Urusan Internasional."} />
    </>
  );
}

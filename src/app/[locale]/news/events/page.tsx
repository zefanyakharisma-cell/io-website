import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { media } from "@/content/media.generated";
import { getPastEvents, getUpcomingEvents, todayISO } from "@/lib/news";
import { href, localeParams, pageMeta, resolveLocale, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { NewsCard } from "@/components/sections/NewsCard";
import { NewsTabs } from "@/components/sections/NewsTabs";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { links } from "@/content/links";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/news/events", { en: "Events", id: "Acara" }, { en: "Upcoming and past events at Petra's International Office.", id: "Acara mendatang dan sebelumnya di Kantor Urusan Internasional Petra." });
}

export default async function EventsPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const today = todayISO();
  const upcoming = getUpcomingEvents(today);
  const past = getPastEvents(today);

  return (
    <>
      <PageHero
        image={media.mobility["cultural-night"]}
        eyebrow={en ? "Events" : "Acara"}
        title={en ? "Meet the world on campus" : "Bertemu dunia di kampus"}
        lead={en ? "International days, cultural nights, summer programmes and partner visits." : "International Day, malam budaya, program musim panas dan kunjungan mitra."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: en ? "News" : "Berita", href: href(locale, "/news") }, { label: en ? "Events" : "Acara" }]}
      />
      <NewsTabs locale={locale} active="events" />
      <Section tone="dark" cinematic bgImage={media.mobility["international-day"]} orbs labelledBy="upcoming">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="upcoming" eyebrow={en ? "Upcoming" : "Mendatang"} title={en ? "Save the date" : "Catat tanggalnya"} />
          <Link href={href(locale, "/news/calendar")} className="btn btn-glass shrink-0"><CalendarDays className="size-4" aria-hidden /> {en ? "Calendar view" : "Tampilan kalender"}</Link>
        </div>
        {upcoming.length ? (
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((p) => <li key={p.slug}><NewsCard post={p} locale={locale} /></li>)}
          </ul>
        ) : (
          <div className="glass mt-8 flex flex-col items-start justify-between gap-4 rounded-lg p-6 md:flex-row md:items-center">
            <p className="text-lg">{en ? "No upcoming events right now. Follow us for announcements." : "Belum ada acara mendatang. Ikuti kami untuk pengumuman."}</p>
            <a href={links.instagram} target="_blank" rel="noreferrer" className="btn btn-amber">@internationaloffice_pcu</a>
          </div>
        )}
      </Section>
      <Section tone="white" labelledBy="past">
        <SectionHeading id="past" tone="light" eyebrow={en ? "Past events" : "Acara sebelumnya"} title={en ? "What we've been up to" : "Kegiatan kami"} />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {past.map((p) => <li key={p.slug}><NewsCard post={p} locale={locale} /></li>)}
        </ul>
      </Section>
    </>
  );
}

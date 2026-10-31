import { media } from "@/content/media.generated";
import { getCalendarEntries, todayISO } from "@/lib/news";
import { ui } from "@/lib/dictionary";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { NewsTabs } from "@/components/sections/NewsTabs";
import { EventCalendar } from "@/components/sections/EventCalendar";
import { SectionHeading } from "@/components/brand/SectionHeading";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/news/calendar", { en: "Calendar", id: "Kalender" }, { en: "Events and application deadlines at Petra's International Office, month by month.", id: "Acara dan batas pendaftaran di Kantor Urusan Internasional Petra, per bulan." });
}

export default async function CalendarPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const items = getCalendarEntries().map((e) => ({ date: e.date, end: e.end, type: e.type, sample: e.sample, title: tr(e.title, locale), url: href(locale, `/news/${e.slug}`) }));

  return (
    <>
      <PageHero
        image={media.mobility["psp-bus"]}
        eyebrow={en ? "Calendar" : "Kalender"}
        title={en ? "Events and deadlines" : "Acara dan batas waktu"}
        lead={en ? "Plan ahead: every KUI event and application deadline in one place." : "Rencanakan lebih awal: semua acara dan batas pendaftaran KUI di satu tempat."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: en ? "News" : "Berita", href: href(locale, "/news") }, { label: en ? "Calendar" : "Kalender" }]}
      />
      <NewsTabs locale={locale} active="calendar" />
      <Section tone="white" labelledBy="calendar">
        <SectionHeading id="calendar" tone="light" eyebrow={en ? "Calendar" : "Kalender"} title={en ? "Month by month" : "Per bulan"} lead={en ? "Pick a day to see what's on. Teal marks events, pink marks application deadlines." : "Pilih tanggal untuk melihat kegiatan. Hijau toska menandai acara, merah muda menandai batas pendaftaran."} />
        <div className="mt-10">
          <EventCalendar
            items={items}
            locale={locale}
            initialMonth={todayISO().slice(0, 7)}
            labels={{
              prev: en ? "Previous month" : "Bulan sebelumnya",
              next: en ? "Next month" : "Bulan berikutnya",
              today: en ? "Today" : "Hari ini",
              event: en ? "Event" : "Acara",
              deadline: tr(ui.deadline, locale),
              empty: en ? "Nothing scheduled. Try the next month." : "Belum ada jadwal. Coba bulan berikutnya.",
              agenda: en ? "Agenda" : "Agenda",
              sample: tr(ui.sample, locale),
            }}
          />
        </div>
      </Section>
    </>
  );
}

import Link from "next/link";
import { CalendarDays, Megaphone, Newspaper, Sparkles } from "lucide-react";
import { href, tr, type L, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export type NewsTab = "overview" | "events" | "calendar" | "opportunities";

export const newsTabs: { key: NewsTab; path: string; label: L; icon: typeof Newspaper }[] = [
  { key: "overview", path: "/news", label: { en: "Overview", id: "Ringkasan" }, icon: Newspaper },
  { key: "events", path: "/news/events", label: { en: "Events", id: "Acara" }, icon: Sparkles },
  { key: "calendar", path: "/news/calendar", label: { en: "Calendar", id: "Kalender" }, icon: CalendarDays },
  { key: "opportunities", path: "/news/opportunities", label: { en: "Opportunities", id: "Peluang" }, icon: Megaphone },
];

/** Sticky sub-navigation shared by the four News pages. */
export function NewsTabs({ locale, active }: { locale: Locale; active: NewsTab }) {
  return (
    <nav aria-label={locale === "en" ? "News sections" : "Bagian berita"} className="sticky top-[4.5rem] z-30 border-b border-midnight/10 bg-white/90 backdrop-blur sm:top-20">
      <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8 [scrollbar-width:none]">
        {newsTabs.map((t) => {
          const on = t.key === active;
          const Icon = t.icon;
          return (
            <li key={t.key} className="shrink-0">
              <Link
                href={href(locale, t.path)}
                aria-current={on ? "page" : undefined}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                  on ? "border-midnight bg-midnight text-white" : "border-midnight/15 bg-white text-midnight hover:border-midnight/40",
                )}
              >
                <Icon className="size-4" aria-hidden />
                {tr(t.label, locale)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

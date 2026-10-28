import { NumberTicker } from "@/components/ui/number-ticker";
import { tr, type L, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Glass tiles with animated Bebas Neue numerals. */
export function StatGrid({
  stats,
  locale,
  className,
  tone = "dark",
}: {
  stats: { value: number; prefix?: string; suffix?: string; label: L; note?: L }[];
  locale: Locale;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <dl className={cn("grid grid-cols-2 gap-3 md:grid-cols-4", className)}>
      {stats.map((s) => (
        <div key={tr(s.label, "en")} className={cn("rounded-lg p-5 md:p-6", tone === "dark" ? "glass" : "glass-light")}>
          <dt className={cn("text-sm font-semibold", tone === "dark" ? "text-smoke" : "text-midnight")}>{tr(s.label, locale)}</dt>
          <dd className="mt-2">
            <NumberTicker
              value={s.value}
              prefix={s.prefix}
              suffix={s.suffix}
              locale={locale}
              className={cn("font-display text-5xl leading-none md:text-6xl", tone === "dark" ? "text-amber" : "text-midnight")}
            />
            {s.note && <p className={cn("mt-2 text-xs leading-snug", tone === "dark" ? "text-smoke/80" : "text-ink-secondary")}>{tr(s.note, locale)}</p>}
          </dd>
        </div>
      ))}
    </dl>
  );
}

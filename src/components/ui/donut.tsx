import type { Locale } from "@/lib/i18n";
import { tr } from "@/lib/i18n";
import type { Share } from "@/content/partners";

/** Proportional ring with a legend. Shares are percentages that sum to ~100. */
export function Donut({ shares, total, caption, locale }: { shares: Share[]; total: string; caption: string; locale: Locale }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <figure className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
      <div className="relative size-44 shrink-0">
        <svg viewBox="0 0 100 100" className="-rotate-90" role="img" aria-label={`${caption}: ${shares.map((s) => `${tr(s.label, locale)} ${s.value}%`).join(", ")}`}>
          <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="11" />
          {shares.map((s) => {
            const len = (s.value / 100) * c;
            const el = <circle key={s.color + s.value} cx="50" cy="50" r={r} fill="none" stroke={s.color} strokeWidth="11" strokeDasharray={`${Math.max(len - 0.8, 0)} ${c}`} strokeDashoffset={-offset} />;
            offset += len;
            return el;
          })}
        </svg>
        <div className="absolute inset-0 grid place-items-center text-center">
          <div>
            <div className="font-display text-4xl leading-none text-white">{total}</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-smoke/80">{caption}</div>
          </div>
        </div>
      </div>
      <figcaption className="w-full">
        <ul className="space-y-1.5 text-sm">
          {shares.map((s) => (
            <li key={s.color + s.value} className="flex items-center gap-2.5">
              <span className="size-2.5 shrink-0 rounded-full" style={{ background: s.color }} aria-hidden />
              <span className="flex-1 text-smoke">{tr(s.label, locale)}</span>
              <span className="tabular-nums font-semibold text-white">{s.value.toLocaleString(locale === "id" ? "id-ID" : "en-US")}%</span>
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}

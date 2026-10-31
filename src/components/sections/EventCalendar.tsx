"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type CalItem = { date: string; end?: string; title: string; url: string; type: "event" | "deadline"; sample: boolean };

type Labels = { prev: string; next: string; today: string; event: string; deadline: string; empty: string; agenda: string; sample: string };

const iso = (y: number, m: number, d: number) => `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
const covers = (it: CalItem, day: string) => day >= it.date && day <= (it.end ?? it.date);

/** Month grid of events and deadlines, plus an agenda list for the shown month. */
export function EventCalendar({ items, locale, labels, initialMonth }: { items: CalItem[]; locale: "en" | "id"; labels: Labels; initialMonth: string }) {
  const tag = locale === "id" ? "id-ID" : "en-GB";
  const [ym, setYm] = useState(initialMonth); // "YYYY-MM"
  const [today, setToday] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  // The page is pre-rendered; switch to the visitor's real month once it runs.
  useEffect(() => {
    const now = new Date();
    const t = iso(now.getFullYear(), now.getMonth(), now.getDate());
    setToday(t);
    setYm(t.slice(0, 7));
  }, []);

  const [y, m] = ym.split("-").map(Number) as [number, number];
  const month = m - 1;
  const first = new Date(Date.UTC(y, month, 1));
  const daysIn = new Date(Date.UTC(y, month + 1, 0)).getUTCDate();
  const lead = (first.getUTCDay() + 6) % 7; // Monday-first

  const weekdays = useMemo(() => Array.from({ length: 7 }, (_, i) => new Intl.DateTimeFormat(tag, { weekday: "short", timeZone: "UTC" }).format(new Date(Date.UTC(2024, 0, 1 + i)))), [tag]);
  const title = new Intl.DateTimeFormat(tag, { month: "long", year: "numeric", timeZone: "UTC" }).format(first);
  const fmtDay = (d: string) => new Intl.DateTimeFormat(tag, { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" }).format(new Date(d));

  const monthStart = iso(y, month, 1);
  const monthEnd = iso(y, month, daysIn);
  const inMonth = items.filter((it) => it.date <= monthEnd && (it.end ?? it.date) >= monthStart);
  const shown = selected ? items.filter((it) => covers(it, selected)) : inMonth;

  const shift = (n: number) => {
    const d = new Date(Date.UTC(y, month + n, 1));
    setYm(`${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`);
    setSelected(null);
  };

  const cells: (string | null)[] = [...Array(lead).fill(null), ...Array.from({ length: daysIn }, (_, i) => iso(y, month, i + 1))];
  while (cells.length % 7) cells.push(null);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      <div className="glass-light rounded-lg p-4 text-midnight sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <button type="button" onClick={() => shift(-1)} className="grid size-10 place-items-center rounded-full hover:bg-midnight/5" aria-label={labels.prev}>
            <ChevronLeft className="size-5" />
          </button>
          <h3 className="text-xl font-bold capitalize" aria-live="polite">{title}</h3>
          <button type="button" onClick={() => shift(1)} className="grid size-10 place-items-center rounded-full hover:bg-midnight/5" aria-label={labels.next}>
            <ChevronRight className="size-5" />
          </button>
        </div>
        <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs font-semibold uppercase text-ink-muted" aria-hidden>
          {weekdays.map((w) => <span key={w}>{w}</span>)}
        </div>
        <div className="mt-1 grid grid-cols-7 gap-1" role="group" aria-label={title}>
          {cells.map((d, i) => {
            if (!d) return <span key={`x${i}`} />;
            const day = items.filter((it) => covers(it, d));
            const isToday = d === today;
            const isSel = d === selected;
            return (
              <button
                key={d}
                type="button"
                onClick={() => setSelected(isSel ? null : d)}
                aria-pressed={isSel}
                aria-label={`${fmtDay(d)}${day.length ? ` — ${day.map((it) => it.title).join("; ")}` : ""}`}
                className={cn(
                  "relative flex h-11 flex-col sm:h-14 items-center justify-center rounded-md text-sm font-semibold transition-colors",
                  isSel ? "bg-midnight text-white" : day.length ? "bg-amber/15 hover:bg-amber/30" : "hover:bg-midnight/5",
                  isToday && !isSel && "ring-2 ring-midnight",
                )}
              >
                {Number(d.slice(8))}
                {day.length > 0 && (
                  <span className="absolute bottom-1.5 flex gap-0.5" aria-hidden>
                    {day.slice(0, 3).map((it) => <span key={it.url + it.type} className={cn("size-1.5 rounded-full", it.type === "event" ? "bg-teal" : "bg-cerise")} />)}
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <p className="mt-4 flex flex-wrap gap-4 text-xs text-ink-secondary">
          <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-teal" />{labels.event}</span>
          <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-cerise" />{labels.deadline}</span>
          <button type="button" className="ml-auto font-semibold underline underline-offset-2" onClick={() => { if (today) setYm(today.slice(0, 7)); setSelected(today); }}>{labels.today}</button>
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-midnight">{selected ? fmtDay(selected) : `${labels.agenda} · ${title}`}</h3>
        {shown.length ? (
          <ul className="mt-4 space-y-3">
            {shown.map((it) => (
              <li key={it.url + it.type}>
                <Link href={it.url} className="group flex gap-4 rounded-lg border border-midnight/10 bg-white p-4 text-midnight transition-colors hover:border-midnight/30">
                  <span className={cn("grid w-14 shrink-0 place-items-center rounded-md py-2 text-center leading-tight text-white", it.type === "event" ? "bg-teal" : "bg-cerise")}>
                    <span className="text-xl font-bold">{Number(it.date.slice(8))}</span>
                    <span className="text-[11px] uppercase">{new Intl.DateTimeFormat(tag, { month: "short", timeZone: "UTC" }).format(new Date(it.date))}</span>
                  </span>
                  <span className="min-w-0">
                    <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      {it.type === "event" ? labels.event : labels.deadline}
                      {it.sample && ` · ${labels.sample}`}
                    </span>
                    <span className="mt-0.5 block font-bold leading-snug group-hover:underline">{it.title}</span>
                    {it.end && <span className="mt-0.5 block text-sm text-ink-secondary">{fmtDay(it.date)} – {fmtDay(it.end)}</span>}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 rounded-lg border border-dashed border-midnight/20 p-6 text-ink-secondary">{labels.empty}</p>
        )}
      </div>
    </div>
  );
}

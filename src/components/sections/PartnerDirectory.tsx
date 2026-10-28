"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Partner, Region } from "@/content/partners";
import { cn } from "@/lib/utils";

type Labels = {
  search: string;
  all: string;
  region: string;
  type: string;
  /** "{n}" is replaced with the count. */
  results: string;
  qs: string;
  none: string;
  regions: Record<Region, string>;
  tags: Record<Partner["tags"][number], string>;
};

const regionOrder: Region[] = ["Greater China", "ASEAN", "Asia · other", "Europe", "Oceania", "North America", "Other"];
const tagOrder: Partner["tags"][number][] = ["Joint degree", "Most partnered", "Exchange", "Summer", "Consortium", "EU project"];

/** Searchable, filterable partner list. Data is the highlight list in src/content/partners.ts. */
export function PartnerDirectory({ partners, labels, regionColors }: { partners: Partner[]; labels: Labels; regionColors: Record<Region, string> }) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<Region | null>(null);
  const [tag, setTag] = useState<Partner["tags"][number] | null>(null);
  const [qsOnly, setQsOnly] = useState(false);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return partners
      .filter((p) => !region || p.region === region)
      .filter((p) => !tag || p.tags.includes(tag))
      .filter((p) => !qsOnly || p.qs)
      .filter((p) => !q || `${p.name} ${p.country}`.toLowerCase().includes(q))
      .sort((a, b) => (a.qs ?? 9999) - (b.qs ?? 9999) || a.name.localeCompare(b.name));
  }, [partners, query, region, tag, qsOnly]);

  const chip = (active: boolean) =>
    cn("rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors", active ? "border-midnight bg-midnight text-white" : "border-midnight/15 bg-white text-midnight hover:border-midnight/40");

  return (
    <div>
      <div className="glass-light rounded-lg p-4 md:p-5">
        <label className="relative block">
          <span className="sr-only">{labels.search}</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-muted" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={labels.search}
            className="w-full rounded-full border border-midnight/15 bg-white py-3 pl-11 pr-4 text-midnight placeholder:text-ink-muted"
          />
        </label>
        <fieldset className="mt-4">
          <legend className="eyebrow mb-2 text-emerald">{labels.region}</legend>
          <div className="flex flex-wrap gap-2">
            <button type="button" aria-pressed={!region} className={chip(!region)} onClick={() => setRegion(null)}>{labels.all}</button>
            {regionOrder.map((r) => (
              <button key={r} type="button" aria-pressed={region === r} className={chip(region === r)} onClick={() => setRegion(region === r ? null : r)}>
                <span className="mr-1.5 inline-block size-2 rounded-full align-middle" style={{ background: regionColors[r] === "#ffffff" ? "#5f6b78" : regionColors[r] }} aria-hidden />
                {labels.regions[r]}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="mt-4">
          <legend className="eyebrow mb-2 text-emerald">{labels.type}</legend>
          <div className="flex flex-wrap gap-2">
            <button type="button" aria-pressed={!tag} className={chip(!tag)} onClick={() => setTag(null)}>{labels.all}</button>
            {tagOrder.map((t) => (
              <button key={t} type="button" aria-pressed={tag === t} className={chip(tag === t)} onClick={() => setTag(tag === t ? null : t)}>{labels.tags[t]}</button>
            ))}
            <button type="button" aria-pressed={qsOnly} className={chip(qsOnly)} onClick={() => setQsOnly(!qsOnly)}>{labels.qs}</button>
          </div>
        </fieldset>
      </div>

      <p className="mt-6 text-sm font-semibold text-midnight" aria-live="polite">{labels.results.replace("{n}", `${list.length} / ${partners.length}`)}</p>
      {list.length === 0 ? (
        <p className="mt-4 text-ink-secondary">{labels.none}</p>
      ) : (
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <li key={p.name} className="flex items-center gap-4 rounded-lg border border-midnight/10 bg-white p-4">
              <div className="grid size-14 shrink-0 place-items-center rounded-md border border-midnight/10 p-1.5">
                {p.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.logo.src} alt="" className="max-h-full max-w-full object-contain" loading="lazy" />
                ) : (
                  <span className="size-3 rounded-full" style={{ background: regionColors[p.region] === "#ffffff" ? "#5f6b78" : regionColors[p.region] }} aria-hidden />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-bold leading-tight text-midnight">{p.name}</p>
                <p className="text-sm text-ink-secondary">{p.country}</p>
                {p.tags.length > 0 && (
                  <p className="mt-1.5 flex flex-wrap gap-1">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded bg-smoke px-1.5 py-0.5 text-[11px] font-semibold text-midnight">{labels.tags[t]}</span>
                    ))}
                  </p>
                )}
              </div>
              {p.qs && (
                <span className="shrink-0 text-right">
                  <span className="block font-display text-2xl leading-none text-midnight">#{p.qs}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted">QS</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

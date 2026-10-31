"use client";

import { useEffect, useState } from "react";
import { MovingLogoGrid, type LogoRow } from "@/components/sections/MovingLogoGrid";
import type { LogoItem } from "@/components/sections/LogoGrid";
import { cn } from "@/lib/utils";

type Filter = "all" | "international" | "national";

/** Split items into `n` rows of near-equal length. */
function rows(items: LogoItem[], n: number): LogoRow[] {
  const size = Math.ceil(items.length / n);
  return Array.from({ length: n }, (_, i) => ({ items: items.slice(i * size, (i + 1) * size) })).filter((r) => r.items.length);
}

/** Alternate the two lists so every row of "All" mixes national and international partners. */
function interleave(a: LogoItem[], b: LogoItem[]) {
  const out: LogoItem[] = [];
  const ratio = a.length / Math.max(1, b.length);
  let ai = 0;
  for (let bi = 0; bi <= b.length; bi++) {
    const until = Math.round((bi + 1) * ratio);
    while (ai < Math.min(until, a.length)) out.push(a[ai++]);
    if (bi < b.length) out.push(b[bi]);
  }
  return out;
}

/**
 * Every partner logo as moving rows, with All / International / National
 * filters. The #international and #domestic anchors preselect a filter.
 */
export function PartnerWall({
  international,
  national,
  labels,
  newTab,
  motionLabels,
  className,
}: {
  international: LogoItem[];
  national: LogoItem[];
  labels: { group: string; all: string; international: string; national: string };
  newTab: string;
  motionLabels: { pause: string; play: string };
  className?: string;
}) {
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    const fromHash = () => {
      if (location.hash === "#international") setFilter("international");
      else if (location.hash === "#domestic") setFilter("national");
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const options: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: labels.all, count: international.length + national.length },
    { id: "international", label: labels.international, count: international.length },
    { id: "national", label: labels.national, count: national.length },
  ];
  const shown =
    filter === "international" ? rows(international, 2) : filter === "national" ? rows(national, 3) : rows(interleave(national, international), 4);

  return (
    <div className={className}>
      <div role="group" aria-label={labels.group} className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            aria-pressed={filter === o.id}
            onClick={() => setFilter(o.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition",
              filter === o.id ? "border-midnight bg-midnight text-white" : "border-midnight/20 text-midnight hover:bg-midnight/5",
            )}
          >
            {o.label} <span className={filter === o.id ? "text-amber" : "text-ink-secondary"}>{o.count}</span>
          </button>
        ))}
      </div>
      <MovingLogoGrid key={filter} className="mt-4" rows={shown} newTab={newTab} labels={motionLabels} />
    </div>
  );
}

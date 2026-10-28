"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/** Category filter over server-rendered news cards. Each child carries its category key. */
export function NewsList({ categories, allLabel, items }: { categories: { key: string; label: string }[]; allLabel: string; items: { key: string; category: string; node: React.ReactNode }[] }) {
  const [active, setActive] = useState<string | null>(null);
  const shown = items.filter((i) => !active || i.category === active);
  const chip = (on: boolean) => cn("rounded-full border px-4 py-2 text-sm font-semibold transition-colors", on ? "border-midnight bg-midnight text-white" : "border-midnight/15 bg-white text-midnight hover:border-midnight/40");
  return (
    <>
      <div role="group" aria-label="Filter" className="flex flex-wrap gap-2">
        <button type="button" aria-pressed={!active} className={chip(!active)} onClick={() => setActive(null)}>{allLabel}</button>
        {categories.map((c) => (
          <button key={c.key} type="button" aria-pressed={active === c.key} className={chip(active === c.key)} onClick={() => setActive(active === c.key ? null : c.key)}>{c.label}</button>
        ))}
      </div>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {shown.map((i) => <li key={i.key}>{i.node}</li>)}
      </ul>
    </>
  );
}

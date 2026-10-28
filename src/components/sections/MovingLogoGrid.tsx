"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { LogoTile, type LogoItem } from "@/components/sections/LogoGrid";
import { cn } from "@/lib/utils";

export type LogoRow = { label?: string; items: LogoItem[] };

/**
 * Partner tiles in rows that scroll in alternating directions. Slows on hover,
 * stops while a tile has keyboard focus, and has a pause button (WCAG 2.2.2).
 * Under reduced motion each row becomes a static wrapping row.
 */
export function MovingLogoGrid({
  rows,
  newTab,
  labels,
  tone = "light",
  className,
}: {
  rows: LogoRow[];
  newTab: string;
  labels: { pause: string; play: string };
  tone?: "light" | "dark";
  className?: string;
}) {
  const [paused, setPaused] = useState(false);
  const [focused, setFocused] = useState(false);
  return (
    <div className={cn("space-y-5", className)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className={cn("inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold", tone === "light" ? "border-midnight/20 text-midnight hover:bg-midnight/5" : "border-white/30 text-white hover:bg-white/10")}
        >
          {paused ? <Play className="size-3.5" aria-hidden /> : <Pause className="size-3.5" aria-hidden />}
          {paused ? labels.play : labels.pause}
        </button>
      </div>
      {rows.map((row, i) => (
        <div key={row.label ?? i}>
          {row.label && <p className={cn("eyebrow mb-2", tone === "light" ? "text-emerald" : "text-amber")}>{row.label}</p>}
          <InfiniteSlider gap={12} duration={Math.max(30, row.items.length * 5)} durationOnHover={row.items.length * 20} reverse={i % 2 === 1} paused={paused || focused} className="py-2">
            {row.items.map((it) => (
              <LogoTile key={it.name} item={it} newTab={newTab} className="h-52 w-44 shrink-0" />
            ))}
          </InfiniteSlider>
        </div>
      ))}
    </div>
  );
}

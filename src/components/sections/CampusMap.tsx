"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion";
import type { MapPoi, MapStep } from "./CampusMapInner";

// Leaflet touches `window`, so it only ever loads in the browser.
const Inner = dynamic(() => import("./CampusMapInner"), { ssr: false, loading: () => <div className="grid h-full place-items-center text-midnight/60">…</div> });

type Labels = { load: string; note: string; directions: string; steps: string; legend: Record<MapPoi["kind"], string> };

const dot: Record<MapPoi["kind"], string> = { campus: "bg-amber", transport: "bg-teal", city: "bg-blue", trip: "bg-cerise" };

/**
 * Interactive OpenStreetMap (Leaflet) with zoom steps and points of interest.
 * Like MapEmbed, nothing is fetched from the tile server until the visitor asks.
 */
export function CampusMap({ pois, steps, labels, preview }: { pois: MapPoi[]; steps: MapStep[]; labels: Labels; preview?: React.ReactNode }) {
  const reduce = useReducedMotionSafe();
  const [on, setOn] = useState(false);
  const [step, setStep] = useState(steps.length - 1);

  return (
    <div className="overflow-hidden rounded-lg border border-white/15 bg-midnight-deep">
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 p-3" role="group" aria-label={labels.steps}>
        {steps.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => { setStep(i); setOn(true); }}
            aria-pressed={on && step === i}
            className={cn("flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold transition-colors", on && step === i ? "bg-amber text-midnight" : "bg-white/10 text-white hover:bg-white/20")}
          >
            <span className="grid size-5 place-items-center rounded-full bg-midnight/20 text-xs">{i + 1}</span>
            {s.label}
          </button>
        ))}
        <ul className="ml-auto hidden flex-wrap gap-3 text-xs text-smoke/85 md:flex">
          {(Object.keys(labels.legend) as MapPoi["kind"][]).map((k) => (
            <li key={k} className="flex items-center gap-1.5"><span className={cn("size-2.5 rounded-full", dot[k])} />{labels.legend[k]}</li>
          ))}
        </ul>
      </div>
      <div className="relative isolate aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/8]">
        {on ? (
          <Inner pois={pois} step={steps[step]} reduce={!!reduce} directions={labels.directions} />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-gradient-midnight p-6 text-center text-white">
            {preview && <div className="pointer-events-none absolute inset-0 opacity-25">{preview}</div>}
            <div className="relative">
              <MapPin className="mx-auto size-10 text-amber" aria-hidden />
              <button type="button" onClick={() => setOn(true)} className="btn btn-amber mt-4">{labels.load}</button>
              <p className="mx-auto mt-3 max-w-sm text-xs text-smoke/85">{labels.note}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

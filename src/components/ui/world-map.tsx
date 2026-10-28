"use client";

// Adapted from 21st.dev "World Map" (aceternity / manuarora700): animated arcs
// from one origin over a dotted map. Points are projected on the server
// (src/lib/map-projection.ts) so this component ships no map data.
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type MapPoint = { x: number; y: number; label: string; detail?: string; color?: string };

export function WorldMap({
  origin,
  points,
  size,
  className,
  originLabel = "Surabaya",
  dashed = false,
}: {
  origin: { x: number; y: number };
  points: MapPoint[];
  size: { width: number; height: number };
  className?: string;
  originLabel?: string;
  dashed?: boolean;
}) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const curve = (p: MapPoint) => {
    const midX = (origin.x + p.x) / 2;
    const midY = Math.min(origin.y, p.y) - Math.max(4, Math.abs(origin.x - p.x) * 0.22);
    return `M ${origin.x} ${origin.y} Q ${midX} ${midY} ${p.x} ${p.y}`;
  };

  return (
    <div className={cn("relative w-full", className)} style={{ aspectRatio: `${size.width} / ${size.height}` }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/world-dots.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full select-none opacity-25 [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]"
        draggable={false}
      />
      <svg viewBox={`0 0 ${size.width} ${size.height}`} className="absolute inset-0 h-full w-full" role="group" aria-label={points.map((p) => p.label).join(", ")}>
        <defs>
          <linearGradient id="arc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffbc00" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#ffbc00" />
            <stop offset="100%" stopColor="#45b8bc" />
          </linearGradient>
        </defs>
        {points.map((p, i) => (
          <motion.path
            key={`arc-${p.label}`}
            d={curve(p)}
            fill="none"
            stroke={active === i ? "#ffffff" : "url(#arc)"}
            strokeWidth={active === i ? 0.45 : 0.28}
            strokeDasharray={dashed ? "0.8 0.6" : undefined}
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.08 * i, ease: "easeOut" }}
          />
        ))}
        {points.map((p, i) => (
          <g
            key={`pt-${p.label}`}
            tabIndex={0}
            role="button"
            aria-label={p.detail ? `${p.label}: ${p.detail}` : p.label}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            className="cursor-pointer outline-none"
          >
            <circle cx={p.x} cy={p.y} r={2.2} fill="transparent" />
            <circle cx={p.x} cy={p.y} r={active === i ? 1.1 : 0.75} fill={p.color ?? "#45b8bc"} stroke="#133256" strokeWidth={0.2} />
          </g>
        ))}
        <circle cx={origin.x} cy={origin.y} r={1.1} fill="#ffbc00" />
        {!reduce && (
          <circle cx={origin.x} cy={origin.y} r={1.1} fill="#ffbc00" opacity={0.6}>
            <animate attributeName="r" from="1.1" to="4" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
          </circle>
        )}
      </svg>
      <div
        className="pointer-events-none absolute -translate-x-1/2 translate-y-2 rounded-full bg-amber px-2.5 py-0.5 text-[11px] font-semibold text-midnight"
        style={{ left: `${(origin.x / size.width) * 100}%`, top: `${(origin.y / size.height) * 100}%` }}
      >
        {originLabel}
      </div>
      {active !== null && (
        <div
          className="glass-strong pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[130%] whitespace-nowrap rounded-md px-3 py-1.5 text-xs text-white"
          style={{ left: `${(points[active].x / size.width) * 100}%`, top: `${(points[active].y / size.height) * 100}%` }}
        >
          <strong className="font-semibold">{points[active].label}</strong>
          {points[active].detail && <span className="text-smoke/80"> · {points[active].detail}</span>}
        </div>
      )}
    </div>
  );
}

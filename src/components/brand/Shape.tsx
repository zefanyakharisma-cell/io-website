import { cn } from "@/lib/utils";

export type ShapeKind =
  | "circle"
  | "semicircle"
  | "quarter"
  | "quarter-tl"
  | "quarter-br"
  | "quarter-bl"
  | "tab"
  | "bar"
  | "ring-u"
  | "ring-n"
  | "ring-u-line"
  | "ring-n-line"
  | "double-arch";

const cls: Record<ShapeKind, string> = {
  circle: "shape-circle",
  semicircle: "shape-semicircle",
  quarter: "shape-quarter",
  "quarter-tl": "shape-quarter-tl",
  "quarter-br": "shape-quarter-br",
  "quarter-bl": "shape-quarter-bl",
  tab: "shape-tab",
  bar: "shape-bar",
  "ring-u": "ring-u",
  "ring-n": "ring-n",
  "ring-u-line": "ring-u-line",
  "ring-n-line": "ring-n-line",
  "double-arch": "double-arch",
};

/**
 * One piece of the design system's graphic geometry. Colour comes from `text-*`, width from the
 * caller (height follows the aspect ratio). Let it bleed off edges; never place it behind text.
 * Hidden below md unless `mobile`, for shapes small enough to sit clear of text on phones.
 */
export function Shape({ kind, className, mobile = false }: { kind: ShapeKind; className?: string; mobile?: boolean }) {
  return <span aria-hidden className={cn("pointer-events-none absolute", mobile ? "block" : "hidden md:block", cls[kind], className)} />;
}

/**
 * Filled-geometry cluster after the design system's cover: a midnight-gradient slab, blue block,
 * amber quarter, cerise disc and a white half ring, stepping on a modular grid. Decorative only.
 */
export function GeoCluster({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("pointer-events-none absolute hidden aspect-[13/9] md:block", className)}>
      <svg viewBox="0 0 416 288" className="size-full" preserveAspectRatio="xMaxYMin meet">
        <rect x="32" y="0" width="160" height="192" fill="#245484" />
        <rect x="192" y="0" width="160" height="96" fill="#3880d0" />
        <path d="M192 96 H288 A96 96 0 0 1 192 192 Z" fill="#ffbc00" />
        <rect x="320" y="160" width="96" height="128" fill="#45b8bc" />
        <circle cx="16" cy="40" r="16" fill="#ec008c" />
        <path transform="translate(48 112) scale(0.64)" d="M0 100 A100 100 0 0 1 200 100 H165 A65 65 0 0 0 35 100 Z" fill="#ffffff" />
        <path transform="translate(224 0) scale(0.48)" d="M0 0 H35 A65 65 0 0 0 165 0 H200 A100 100 0 0 1 0 0 Z" fill="#ffbc00" />
      </svg>
    </span>
  );
}

import { Shape } from "@/components/brand/Shape";

type RingShape = "ring-u" | "ring-n" | "ring-u-line" | "ring-n-line" | "double-arch";

/**
 * The design system's signature half ring. Colour comes from `text-*`; let it bleed off edges.
 * Hidden below md: on narrow screens it would sit behind text, which the brand rules forbid.
 */
export function Ring({ shape = "ring-n", className }: { shape?: RingShape; className?: string }) {
  return <Shape kind={shape} className={className} />;
}

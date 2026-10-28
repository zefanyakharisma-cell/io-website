import { cn } from "@/lib/utils";

type Shape = "ring-u" | "ring-n" | "ring-u-line" | "double-arch";

/**
 * The design system's signature half ring. Colour comes from `text-*`; let it bleed off edges.
 * Hidden below md: on narrow screens it would sit behind text, which the brand rules forbid.
 */
export function Ring({ shape = "ring-n", className }: { shape?: Shape; className?: string }) {
  return <span aria-hidden className={cn("pointer-events-none absolute hidden md:block", shape, className)} />;
}

import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type BadgeTone = "brand" | "sunrise" | "dusk" | "aqua" | "amber" | "cerise";

/**
 * The design system's "colour background" icon: a white 2px outline icon in a gradient circle.
 * Decorative by default; pass `label` when the icon itself carries meaning.
 */
export function IconBadge({ icon: Icon, tone = "brand", size = 48, label, className }: { icon: LucideIcon; tone?: BadgeTone; size?: number; label?: string; className?: string }) {
  return (
    <span
      className={cn("icon-badge", tone !== "brand" && `icon-badge--${tone}`, className)}
      style={{ "--size": `${size}px` } as React.CSSProperties}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      <Icon strokeLinecap="round" strokeLinejoin="round" />
    </span>
  );
}

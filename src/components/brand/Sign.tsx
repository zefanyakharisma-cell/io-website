import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Wayfinding sign from the design system: midnight panel, pill right end, flat amber offset.
 * Building names in capitals, rooms in sentence case, one destination per sign.
 */
export function Sign({ icon: Icon, building, room, arrow = "→", className }: { icon: LucideIcon; building: string; room: string; arrow?: string; className?: string }) {
  return (
    <div className={cn("pcu-sign mr-4 mt-4", className)}>
      <Icon className="size-9 shrink-0" strokeWidth={2.5} aria-hidden />
      <span className="min-w-0">
        <span className="eyebrow block text-amber">{building}</span>
        <span className="mt-1 block text-xl leading-snug md:text-2xl">{room}</span>
      </span>
      <span aria-hidden className="ml-auto pl-2 text-2xl">{arrow}</span>
    </div>
  );
}

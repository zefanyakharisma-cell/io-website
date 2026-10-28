import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconBadge, type BadgeTone } from "@/components/brand/IconBadge";

// The midnight badge would vanish on dark glass, so dark flows start from aqua.
const lightTones: BadgeTone[] = ["brand", "aqua", "dusk", "sunrise", "amber", "cerise"];
const darkTones: BadgeTone[] = ["aqua", "sunrise", "dusk", "amber", "cerise", "aqua"];

/** Numbered process steps with icons; a row on desktop, a column on mobile. */
export function ProcessFlow({ steps, tone = "light" }: { steps: { icon: LucideIcon; title: string; body: string }[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ol className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
      {steps.map((s, i) => (
        <li key={s.title} className={cn("relative flex gap-3 rounded-lg p-4 xl:flex-col", dark ? "glass" : "glass-light")}>
          <IconBadge icon={s.icon} tone={(dark ? darkTones : lightTones)[i % 6]} size={44} />
          <span>
            <span className={cn("block text-xs font-semibold", dark ? "text-amber" : "text-emerald")}>{String(i + 1).padStart(2, "0")}</span>
            <span className={cn("block font-bold leading-snug", dark ? "text-white" : "text-midnight")}>{s.title}</span>
            <span className={cn("mt-1 block text-sm", dark ? "text-smoke/90" : "text-ink-secondary")}>{s.body}</span>
          </span>
          {i < steps.length - 1 && <ChevronRight aria-hidden className={cn("absolute -right-3 top-1/2 z-10 hidden size-5 -translate-y-1/2 xl:block", dark ? "text-amber" : "text-midnight/40")} />}
        </li>
      ))}
    </ol>
  );
}

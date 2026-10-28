import { cn } from "@/lib/utils";
import { Reveal } from "@/components/brand/Reveal";

export type TimelineItem = { when: string; title: string; body?: string };

/** Milestones as glass cards on a gradient line: horizontal from lg, vertical below. */
export function Timeline({ items, tone = "dark", className }: { items: TimelineItem[]; tone?: "dark" | "light"; className?: string }) {
  const dark = tone === "dark";
  return (
    <ol className={cn("relative grid gap-4 lg:gap-3", className)} style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, 11rem), 1fr))` }}>
      <span aria-hidden className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-gradient-to-r from-amber via-teal to-cerise lg:block" />
      {items.map((it, i) => (
        <li key={it.when + it.title} className="relative">
          <Reveal delay={i * 0.06}>
            <span className={cn("relative z-10 grid size-9 place-items-center rounded-full text-sm font-bold", dark ? "bg-amber text-midnight" : "bg-midnight text-white")}>{i + 1}</span>
            <div className={cn("mt-3 rounded-lg p-4 break-words", dark ? "glass" : "glass-light")}>
              <p className={cn("font-display text-2xl leading-none", dark ? "text-amber" : "text-midnight")}>{it.when}</p>
              <p className={cn("mt-1 font-semibold", dark ? "text-white" : "text-midnight")}>{it.title}</p>
              {it.body && <p className={cn("mt-1 text-sm", dark ? "text-smoke/90" : "text-ink-secondary")}>{it.body}</p>}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

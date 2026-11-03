import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { href, tr, type L, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/brand/Reveal";
import { Photo, type PhotoSource } from "@/components/brand/Photo";

/** Linked programme cards: photo, label pill, title and summary. */
export function CardGrid({
  items,
  locale,
  cols = 3,
}: {
  items: { path: string; title: L; kind?: L; summary: L; image: PhotoSource }[];
  locale: Locale;
  cols?: 2 | 3;
}) {
  const en = locale === "en";
  return (
    <ul className={cn("grid gap-4 sm:grid-cols-2", cols === 3 && "lg:grid-cols-3")}>
      {items.map((p, i) => (
        <li key={p.path}>
          <Reveal delay={(i % 3) * 0.06} className="h-full">
            <Link href={href(locale, p.path)} className="group glass-light flex h-full flex-col overflow-hidden rounded-lg">
              <span className="relative block aspect-[16/10] overflow-hidden">
                <Photo image={p.image} className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 50vw" />
                {p.kind && <span className="absolute left-3 top-3 rounded-full bg-midnight px-3 py-1 text-xs font-semibold text-white">{tr(p.kind, locale)}</span>}
              </span>
              <span className="flex flex-1 flex-col p-5">
                <span className="text-xl font-bold text-midnight">{tr(p.title, locale)}</span>
                <span className="mt-2 flex-1 text-ink-secondary">{tr(p.summary, locale)}</span>
                <span className="mt-4 flex items-center gap-1.5 font-semibold text-midnight">
                  {en ? "More information" : "Informasi lengkap"} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

/** Check-marked list for requirements and eligibility. */
export function CheckList({ items, locale, tone = "light", className }: { items: L[]; locale: Locale; tone?: "light" | "dark"; className?: string }) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((r) => (
        <li key={r.en} className={cn("flex gap-3", tone === "light" ? "text-midnight" : "text-smoke")}>
          <Check className={cn("mt-0.5 size-5 shrink-0", tone === "light" ? "text-emerald" : "text-amber")} aria-hidden />
          {tr(r, locale)}
        </li>
      ))}
    </ul>
  );
}

/** Numbered steps in two columns (for long application flows). */
export function NumberedSteps({ steps, locale, tone = "light" }: { steps: { title: L; body: L }[]; locale: Locale; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ol className="grid gap-3 md:grid-cols-2">
      {steps.map((s, i) => (
        <li key={s.title.en}>
          <Reveal delay={(i % 2) * 0.05} className={cn("flex h-full items-start gap-4 rounded-lg p-5", dark ? "glass" : "glass-light")}>
            <span className={cn("font-display text-4xl leading-none", dark ? "text-amber" : "text-midnight")}>{String(i + 1).padStart(2, "0")}</span>
            <span>
              <span className={cn("block font-bold", dark ? "text-white" : "text-midnight")}>{tr(s.title, locale)}</span>
              <span className={cn("mt-1 block text-sm", dark ? "text-smoke/90" : "text-ink-secondary")}>{tr(s.body, locale)}</span>
            </span>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

/** In-page jump links shown in a page hero. */
export function JumpLinks({ items }: { items: { id: string; label: string }[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((j) => (
        <li key={j.id}><a href={`#${j.id}`} className="btn btn-glass !px-4 !py-2 text-sm">{j.label}</a></li>
      ))}
    </ul>
  );
}

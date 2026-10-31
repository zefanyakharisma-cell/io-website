import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type LogoItem = {
  name: string;
  meta?: string;
  badge?: string;
  href?: string;
  logo?: { src: string; alt: string } | null;
};

const SKIP = new Set(["of", "the", "and", "de", "del", "university", "universitas", "universiti", "universidad", "institute", "–", "-"]);

/** Initials for a partner without a logo yet: "Korea University" → "KU", "NTUST" → "NTUST". */
function monogram(name: string) {
  const first = name.split(/[\s,]+/)[0];
  if (/^[A-Z0-9-]{2,6}$/.test(first)) return first;
  const words = name.split(/[\s,]+/).filter((w) => w && !SKIP.has(w.toLowerCase()));
  return (words.length ? words : name.split(/\s+/)).slice(0, 3).map((w) => w[0]).join("").toUpperCase();
}

/** One partner tile: logo (or monogram), name and detail, linking to the partner's site when known. */
export function LogoTile({ item: it, newTab, className }: { item: LogoItem; newTab: string; className?: string }) {
  const body = (
    <>
      <span className="grid h-20 place-items-center">
        {it.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={it.logo.src} alt="" className="max-h-16 max-w-[80%] object-contain grayscale transition duration-300 group-hover:grayscale-0 group-focus-visible:grayscale-0" loading="lazy" />
        ) : (
          <span aria-hidden className="grid size-16 place-items-center rounded-full bg-midnight font-display text-xl leading-none tracking-wide text-amber">{monogram(it.name)}</span>
        )}
      </span>
      <span className="mt-3 line-clamp-3 text-sm font-semibold leading-snug text-midnight" title={it.name}>{it.name}</span>
      {it.meta && <span className="mt-0.5 block text-xs text-ink-secondary">{it.meta}</span>}
      {it.badge && <span className="mt-2 inline-block rounded-full bg-midnight/5 px-2 py-0.5 text-[11px] font-semibold text-midnight">{it.badge}</span>}
      {it.href && <ArrowUpRight aria-hidden className="absolute right-3 top-3 size-4 text-ink-secondary transition group-hover:text-midnight" />}
    </>
  );
  const tile = cn("group relative flex h-full flex-col items-center rounded-lg bg-white p-4 text-center shadow-card transition", className);
  return it.href ? (
    <a href={it.href} target="_blank" rel="noreferrer" className={cn(tile, "hover:-translate-y-0.5 hover:shadow-lg")}>
      {body}
      <span className="sr-only"> {newTab}</span>
    </a>
  ) : (
    <div className={tile}>{body}</div>
  );
}

/** Static grid of partner tiles. */
export function LogoGrid({ items, newTab, className }: { items: LogoItem[]; newTab: string; className?: string }) {
  return (
    <ul className={cn("grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5", className)}>
      {items.map((it) => (
        <li key={it.name}>
          <LogoTile item={it} newTab={newTab} />
        </li>
      ))}
    </ul>
  );
}

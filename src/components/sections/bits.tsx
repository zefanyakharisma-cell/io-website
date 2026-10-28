import { CircleHelp } from "lucide-react";
import { ui } from "@/lib/dictionary";
import { tr, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Marks content the deck does not cover and the International Office still has to confirm. */
export function ToConfirm({ locale, className }: { locale: Locale; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border border-dashed border-current px-2.5 py-0.5 text-[11px] font-semibold", className)}>
      <CircleHelp className="size-3.5" aria-hidden />
      {tr(ui.toConfirm, locale)}
    </span>
  );
}

export const facultyColors: Record<string, string> = {
  FTSP: "#ffbc00",
  FTI: "#45b8bc",
  SBM: "#ec008c",
  FHIK: "#be93e4",
  FKIP: "#6aaa43",
  FK: "#f37121",
  FKG: "#3880d0",
};

export function FacultyDot({ code, className }: { code: string; className?: string }) {
  return <span aria-hidden className={cn("inline-block size-2.5 shrink-0 rounded-full", className)} style={{ background: facultyColors[code] ?? "#fff" }} />;
}

/** Horizontal share bar list for counts (e.g. Q-articles by faculty). */
export function Bars({ items, max, tone = "dark" }: { items: { label: string; value: number; color?: string }[]; max?: number; tone?: "dark" | "light" }) {
  const top = max ?? Math.max(...items.map((i) => i.value));
  return (
    <ul className="space-y-2.5">
      {items.map((i) => (
        <li key={i.label} className="grid grid-cols-[4.5rem_1fr_2.5rem] items-center gap-3 text-sm">
          <span className={cn("font-semibold", tone === "dark" ? "text-white" : "text-midnight")}>{i.label}</span>
          <span className={cn("h-2.5 overflow-hidden rounded-full", tone === "dark" ? "bg-white/10" : "bg-midnight/10")}>
            <span className="block h-full rounded-full" style={{ width: `${(i.value / top) * 100}%`, background: i.color ?? "#ffbc00" }} />
          </span>
          <span className={cn("text-right tabular-nums font-semibold", tone === "dark" ? "text-white" : "text-midnight")}>{i.value}</span>
        </li>
      ))}
    </ul>
  );
}

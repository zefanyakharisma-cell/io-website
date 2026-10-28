import { sources, type SourceId } from "@/content/sources";
import { cn } from "@/lib/utils";

/** "Sources:" line under a section that uses facts from the web. */
export function SourceNote({ ids, locale, tone = "light", className }: { ids: SourceId[]; locale: "en" | "id"; tone?: "light" | "dark"; className?: string }) {
  return (
    <p className={cn("mt-4 text-xs leading-relaxed", tone === "dark" ? "text-smoke/85" : "text-ink-secondary", className)}>
      <span className="font-semibold">{locale === "en" ? "Sources: " : "Sumber: "}</span>
      {ids.map((id, i) => (
        <span key={id}>
          {i > 0 && " · "}
          <a href={sources[id].url} target="_blank" rel="noreferrer" className={cn("underline underline-offset-2", tone === "dark" ? "decoration-teal" : "decoration-blue")}>
            {sources[id].title}
          </a>
        </span>
      ))}
    </p>
  );
}

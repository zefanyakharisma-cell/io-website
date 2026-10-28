import type { Credit } from "@/content/web-photos.generated";
import { cn } from "@/lib/utils";

/** "Photo: author, licence" for one Commons photo, linking the file page and the licence. */
export function PhotoCredit({ credit, locale, tone = "light", className }: { credit: Credit; locale: "en" | "id"; tone?: "light" | "dark"; className?: string }) {
  const link = cn("underline underline-offset-2", tone === "dark" ? "decoration-teal" : "decoration-blue");
  return (
    <p className={cn("text-xs", tone === "dark" ? "text-smoke/85" : "text-ink-secondary", className)}>
      {locale === "en" ? "Photo: " : "Foto: "}
      <a href={credit.source} target="_blank" rel="noreferrer" className={link}>{credit.author}</a>
      {", "}
      {credit.licenseUrl ? <a href={credit.licenseUrl} target="_blank" rel="noreferrer" className={link}>{credit.license}</a> : credit.license}
      {", via Wikimedia Commons"}
    </p>
  );
}

/** Credits for a set of Commons photos shown together, e.g. under a gallery. */
export function PhotoCredits({ photos, locale, tone = "light", className }: { photos: { alt: string; credit: Credit }[]; locale: "en" | "id"; tone?: "light" | "dark"; className?: string }) {
  const link = cn("underline underline-offset-2", tone === "dark" ? "decoration-teal" : "decoration-blue");
  return (
    <p className={cn("mt-4 text-xs leading-relaxed", tone === "dark" ? "text-smoke/85" : "text-ink-secondary", className)}>
      <span className="font-semibold">{locale === "en" ? "Photo credits: " : "Kredit foto: "}</span>
      {photos.map((p, i) => (
        <span key={p.credit.source}>
          {i > 0 && " · "}
          <a href={p.credit.source} target="_blank" rel="noreferrer" className={link}>{p.alt}</a>
          {`, ${p.credit.author}, `}
          {p.credit.licenseUrl ? <a href={p.credit.licenseUrl} target="_blank" rel="noreferrer" className={link}>{p.credit.license}</a> : p.credit.license}
        </span>
      ))}
      {", via Wikimedia Commons."}
    </p>
  );
}

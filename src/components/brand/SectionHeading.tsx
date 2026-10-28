import { cn } from "@/lib/utils";

/** Brand section title: eyebrow label, light kicker over a bold title, optional lead. */
export function SectionHeading({
  eyebrow,
  kicker,
  title,
  lead,
  tone = "dark",
  align = "left",
  className,
  as: Tag = "h2",
  id,
}: {
  eyebrow?: string;
  kicker?: string;
  title: string;
  lead?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
  /** Heading id, for the section's aria-labelledby. */
  id?: string;
}) {
  const onDark = tone === "dark";
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className={cn("eyebrow mb-4", onDark ? "text-amber" : "text-emerald")}>{eyebrow}</p>}
      <Tag id={id} className={cn("text-[clamp(2rem,1.5rem+2vw,3rem)] leading-[1.1]", onDark ? "text-white" : "text-midnight")}>
        {kicker && <span className="kicker mb-1">{kicker}</span>}
        {title}
      </Tag>
      {lead && <p className={cn("mt-5 text-lg leading-relaxed", align === "center" && "mx-auto", onDark ? "text-smoke/90" : "text-ink-secondary")}>{lead}</p>}
    </div>
  );
}

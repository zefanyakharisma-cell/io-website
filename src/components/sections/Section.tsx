import { cn } from "@/lib/utils";
import { OrbBackground } from "@/components/brand/OrbBackground";

/**
 * Page section in one of the two Midnight Glass grounds: "dark" (midnight
 * canvas with orbs, white text) or "light" (smoke ground for dense content,
 * midnight text).
 */
export function Section({
  children,
  tone = "dark",
  orbs = false,
  className,
  id,
  labelledBy,
  decor,
}: {
  children: React.ReactNode;
  /** Decorative shapes positioned against the section's own edges (aria-hidden, never behind text). */
  decor?: React.ReactNode;
  tone?: "dark" | "light" | "deep";
  orbs?: boolean;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative isolate overflow-hidden py-20 md:py-28",
        tone === "light" && "bg-smoke text-midnight",
        tone === "deep" && "bg-midnight-deep text-white on-dark",
        tone === "dark" && "text-white on-dark",
        className,
      )}
    >
      {tone === "dark" && <OrbBackground variant={orbs ? "default" : "quiet"} />}
      {decor}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

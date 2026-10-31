import { cn } from "@/lib/utils";
import { OrbBackground } from "@/components/brand/OrbBackground";
import { Cinematic, Parallax } from "@/components/brand/Cinematic";
import { Photo, type PhotoSource } from "@/components/brand/Photo";

/**
 * Page section in one of the Midnight Glass grounds: "dark" (midnight canvas
 * with orbs, white text), "deep" (flat midnight), "light" (smoke ground for
 * dense content) or "white" (the last section before the footer, so the
 * footer's double-arch edge reads).
 */
export function Section({
  children,
  tone = "dark",
  orbs = false,
  className,
  id,
  labelledBy,
  decor,
  bgImage,
  cinematic = false,
  bleed = false,
}: {
  children: React.ReactNode;
  /** Decorative shapes positioned against the section's own edges (aria-hidden, never behind text). */
  decor?: React.ReactNode;
  tone?: "dark" | "light" | "deep" | "white";
  orbs?: boolean;
  className?: string;
  id?: string;
  labelledBy?: string;
  /** Dark and deep tones only: a photo tinted into the midnight ground as quiet texture. */
  bgImage?: PhotoSource;
  /** Scroll-linked scene entrance for the section's content. */
  cinematic?: boolean;
  /** Full-width content with no side gutter or max width. */
  bleed?: boolean;
}) {
  const dark = tone === "dark" || tone === "deep";
  const inner = cn("relative", !bleed && "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8");
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative isolate overflow-hidden py-20 md:py-28",
        tone === "light" && "bg-smoke text-midnight",
        tone === "white" && "bg-white text-midnight",
        tone === "deep" && "bg-midnight-deep text-white on-dark",
        tone === "dark" && "text-white on-dark",
        className,
      )}
    >
      {tone === "dark" && <OrbBackground variant={orbs ? "default" : "quiet"} />}
      {dark && bgImage && (
        <Parallax className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo image={bgImage} sizes="100vw" alt="" className="opacity-[0.14] mix-blend-luminosity grayscale" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(19,50,86,0.65)_85%)]" />
        </Parallax>
      )}
      {decor}
      {cinematic ? <Cinematic className={inner}>{children}</Cinematic> : <div className={inner}>{children}</div>}
    </section>
  );
}

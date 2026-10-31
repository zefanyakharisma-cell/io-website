import { cn } from "@/lib/utils";
import { OrbBackground } from "@/components/brand/OrbBackground";
import { Cinematic, Parallax } from "@/components/brand/Cinematic";
import { Photo, type PhotoSource } from "@/components/brand/Photo";

/**
 * Page section in one of the Midnight Glass grounds: "dark" (the shared page
 * canvas shows through, white text), "deep" (a darker midnight scrim over that
 * canvas), "light" (smoke ground for dense content) or "white" (the last
 * section before the footer, so the footer's double-arch edge reads).
 *
 * Dark sections have no background of their own: the one fixed canvas in the
 * locale layout runs behind all of them, so they join without seams. Where a
 * dark section meets a light one, the light ground fades in (see
 * `.section-ground` in globals.css).
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
      data-tone={tone}
      className={cn(
        "relative isolate overflow-hidden py-20 md:py-28",
        dark ? "text-white on-dark" : "text-midnight",
        className,
      )}
    >
      {tone === "light" && <div aria-hidden className="section-ground bg-smoke" />}
      {tone === "white" && <div aria-hidden className="section-ground bg-white" />}
      {tone === "deep" && <div aria-hidden className="section-ground bg-midnight-deep/70" />}
      {tone === "dark" && orbs && <OrbBackground className="fade-edges bg-none" />}
      {dark && bgImage && (
        <Parallax className="fade-edges pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Photo image={bgImage} sizes="100vw" alt="" className="opacity-[0.14] mix-blend-luminosity grayscale" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(19,50,86,0.65)_85%)]" />
        </Parallax>
      )}
      {decor && <div aria-hidden className="section-decor">{decor}</div>}
      {cinematic ? <Cinematic className={inner}>{children}</Cinematic> : <div className={inner}>{children}</div>}
    </section>
  );
}

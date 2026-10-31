import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { VideoSlot } from "@/components/brand/VideoSlot";
import type { PhotoSource } from "@/components/brand/Photo";
import { Ring } from "@/components/brand/Ring";
import { Shape } from "@/components/brand/Shape";
import { Parallax, SceneExit } from "@/components/brand/Cinematic";

/** Subpage header: full-bleed Ken Burns photo (or video), midnight scrim, glass title card and breadcrumb. */
export function PageHero({
  image,
  video,
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  image: PhotoSource;
  video?: { mp4: string; webm?: string };
  eyebrow: string;
  title: string;
  lead?: string;
  crumbs: { label: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <header className="relative isolate flex min-h-[78vh] items-end overflow-hidden pb-14 pt-36 md:min-h-[72vh]">
      {/* Photo-only heroes drift slowly; a video keeps its own layer so its pause button stays on top. */}
      {video ? (
        <VideoSlot poster={image} src={video} priority />
      ) : (
        <Parallax className="absolute inset-0 overflow-hidden" amount={6}>
          <VideoSlot poster={image} priority />
        </Parallax>
      )}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-midnight-deep via-midnight-deep/55 to-midnight-deep/30" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-midnight-deep/70 via-transparent to-transparent" />
      <Ring shape="ring-n" className="-right-24 bottom-[-6rem] w-[28rem] text-amber/90 md:w-[34rem]" />
      <Shape kind="circle" className="right-[22%] top-[34%] w-12 text-cerise md:hidden lg:block" />
      <Shape kind="ring-u-line" className="right-[8%] top-[24%] w-52 text-teal md:hidden lg:block" />
      <SceneExit className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-smoke/85">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="size-3.5 opacity-60" aria-hidden />}
                {c.href ? <Link href={c.href} className="hover:text-white hover:underline">{c.label}</Link> : <span aria-current="page" className="text-white">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <div className="glass max-w-3xl rounded-lg p-6 sm:p-8">
          <p className="eyebrow mb-3 text-amber">{eyebrow}</p>
          <h1 className="text-[clamp(2.25rem,1.6rem+3vw,4rem)] leading-[1.04]">{title}</h1>
          {lead && <p className="mt-4 max-w-2xl text-lg text-smoke/95">{lead}</p>}
          {children}
        </div>
      </SceneExit>
    </header>
  );
}

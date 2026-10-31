"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { ImageIcon, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/** YouTube testimonial with a click-to-load facade; an empty id shows a placeholder. */
export function VideoTestimonial({ id, title, placeholder }: { id: string; title: string; placeholder: string }) {
  if (!id) {
    return (
      <div className="glass grid aspect-video place-items-center rounded-lg p-6 text-center">
        <div>
          <PlayCircle className="mx-auto size-10 text-amber" aria-hidden />
          <p className="mt-3 text-sm text-smoke">{placeholder}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-lg">
      <LiteYouTubeEmbed id={id} title={title} noCookie />
    </div>
  );
}

/** Programme poster (portrait); without an image it shows a branded placeholder. */
export function PosterSlot({ src, alt, title, placeholder, className }: { src?: string; alt: string; title: string; placeholder: string; className?: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={cn("aspect-[3/4] w-full rounded-lg object-cover shadow-card", className)} loading="lazy" />;
  }
  return (
    <div className={cn("relative grid aspect-[3/4] w-full place-items-center overflow-hidden rounded-lg bg-gradient-midnight p-6 text-center text-white", className)}>
      <div aria-hidden className="pcu-pattern absolute -right-10 -top-10 size-32 rounded-bl-full [background-size:64px_64px]" />
      <div>
        <ImageIcon className="mx-auto size-10 text-amber" aria-hidden />
        <p className="mt-4 font-display text-5xl leading-none">{title}</p>
        <p className="mt-3 text-sm text-smoke">{placeholder}</p>
      </div>
    </div>
  );
}

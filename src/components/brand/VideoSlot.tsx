"use client";

import { useEffect, useRef, useState } from "react";

import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Photo, type PhotoSource } from "./Photo";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion";

/**
 * A muted, looping background video with a photo poster. Until a video file is
 * supplied (src/content/media.ts → videos), the poster plays a slow Ken Burns
 * zoom instead. Under reduced motion the poster stays still and video never autoplays.
 */
export function VideoSlot({
  poster,
  src,
  className,
  priority,
  pauseLabel = "Pause background video",
  playLabel = "Play background video",
}: {
  poster: PhotoSource;
  src?: { mp4: string; webm?: string };
  className?: string;
  priority?: boolean;
  pauseLabel?: string;
  playLabel?: string;
}) {
  const reduce = useReducedMotionSafe();
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v || reduce) return;
    v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [reduce, src]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().then(() => setPlaying(true));
    else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className={cn("absolute inset-0", !src && !reduce && "animate-kenburns")}>
        <Photo image={poster} priority={priority} sizes="100vw" alt="" />
      </div>
      {src && (
        <>
          <video
            ref={ref}
            className="absolute inset-0 h-full w-full object-cover"
            muted
            loop
            playsInline
            preload="none"
            poster={poster.src}
            aria-hidden
          >
            {src.webm && <source src={src.webm} type="video/webm" />}
            <source src={src.mp4} type="video/mp4" />
          </video>
          <button
            type="button"
            onClick={toggle}
            className="btn-glass absolute bottom-5 right-5 z-20 grid size-10 place-items-center rounded-full"
            aria-label={playing ? pauseLabel : playLabel}
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
          </button>
        </>
      )}
    </div>
  );
}

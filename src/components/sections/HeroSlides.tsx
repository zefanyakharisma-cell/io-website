"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, Quote } from "lucide-react";
import { Photo, type PhotoSource } from "@/components/brand/Photo";
import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion";

export type Slide = { image: PhotoSource; caption: string; quote?: string; name?: string; program?: string };

/** Full-bleed crossfading photos with a caption or testimonial. Pauses on request and under reduced motion. */
export function HeroSlides({ slides, labels }: { slides: Slide[]; labels: { pause: string; play: string; slide: string } }) {
  const reduce = useReducedMotionSafe();
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (reduce || !playing || slides.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, [reduce, playing, slides.length]);

  const s = slides[i];
  return (
    <>
      <div className="fade-bottom absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={s.image.src}
            className={cn("absolute inset-0", !reduce && "animate-kenburns")}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Photo image={s.image} priority={i === 0} sizes="100vw" alt={s.image.alt} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-6 right-4 z-20 flex items-center gap-3 sm:right-6 lg:right-8">
        <div className="glass-strong max-w-xs rounded-md px-4 py-3 text-sm sm:max-w-sm" aria-live="polite">
          {s.quote ? (
            <figure>
              <Quote className="mb-1 size-4 text-amber" aria-hidden />
              <blockquote className="text-white">“{s.quote}”</blockquote>
              {s.name && <figcaption className="mt-1 text-xs text-smoke/90">— {s.name}{s.program ? `, ${s.program}` : ""}</figcaption>}
            </figure>
          ) : (
            <p className="text-smoke">{s.caption}</p>
          )}
        </div>
        {slides.length > 1 && (
          <div className="flex flex-col items-center gap-2">
            <button type="button" onClick={() => setPlaying((p) => !p)} className="btn-glass grid size-9 place-items-center rounded-full" aria-label={playing ? labels.pause : labels.play}>
              {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
            </button>
            <div className="flex gap-1.5">
              {slides.map((sl, k) => (
                <button
                  key={sl.image.src}
                  type="button"
                  onClick={() => setI(k)}
                  aria-label={`${labels.slide} ${k + 1}`}
                  aria-current={k === i}
                  className={cn("h-1.5 rounded-full transition-all", k === i ? "w-5 bg-amber" : "w-1.5 bg-white/60")}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

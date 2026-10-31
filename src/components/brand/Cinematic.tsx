"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion";

/**
 * Scroll-linked entrance: the block rises, scales up and comes into full
 * opacity as it moves into view, so each section arrives like a new scene.
 * Static under reduced motion and without JavaScript (data-reveal).
 */
export function Cinematic({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.6"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.15, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [70, 0]);
  if (reduce) return <div ref={ref} className={className}>{children}</div>;
  return (
    <motion.div ref={ref} data-reveal className={className} style={{ opacity, scale, y }}>
      {children}
    </motion.div>
  );
}

/** Background layer that drifts slower than the page (subtle parallax). Fill its parent. */
export function Parallax({ children, className, amount = 8 }: { children: ReactNode; className?: string; amount?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);
  return (
    <div ref={ref} aria-hidden className={className}>
      <motion.div className="absolute inset-x-0 -inset-y-[10%]" style={reduce ? undefined : { y }}>
        {children}
      </motion.div>
    </div>
  );
}

/** Hero content that lifts away and dims as the page scrolls past it. */
export function SceneExit({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.1]);
  if (reduce) return <div ref={ref} className={className}>{children}</div>;
  return (
    <motion.div ref={ref} data-reveal className={className} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
}

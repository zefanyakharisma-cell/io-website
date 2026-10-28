"use client";

// Adapted from 21st.dev "Infinite Slider" (ibelick). Pauses under reduced
// motion, where it becomes a wrapping row.
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion";

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 40,
  durationOnHover,
  reverse = false,
  paused = false,
  className,
}: {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  reverse?: boolean;
  /** Stops the motion (e.g. from a pause button) without resetting position. */
  paused?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotionSafe();
  const [current, setCurrent] = useState(duration);
  const [ref, { width }] = useMeasure();
  const x = useMotionValue(0);

  useEffect(() => {
    if (reduce || paused || !width) return;
    const half = (width + gap) / 2;
    // Resume from the current offset so pausing doesn't jump back to the start.
    const from = Math.min(0, Math.max(-half, x.get()));
    const to = reverse ? 0 : -half;
    x.set(from);
    const first = animate(x, to, { ease: "linear", duration: (current * Math.abs(to - from)) / half });
    let loop: ReturnType<typeof animate> | undefined;
    first.then(() => {
      loop = animate(x, reverse ? [-half, 0] : [0, -half], { ease: "linear", duration: current, repeat: Infinity, repeatType: "loop" });
    });
    return () => {
      first.stop();
      loop?.stop();
    };
  }, [x, current, width, gap, reverse, reduce, paused]);

  if (reduce) {
    return <div className={cn("flex flex-wrap items-center justify-center", className)} style={{ gap }}>{children}</div>;
  }

  return (
    <div className={cn("overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]", className)}>
      <motion.div
        className="flex w-max items-center"
        style={{ x, gap }}
        ref={ref}
        onHoverStart={durationOnHover ? () => setCurrent(durationOnHover) : undefined}
        onHoverEnd={durationOnHover ? () => setCurrent(duration) : undefined}
      >
        {children}
        {/* Visual duplicate for the seamless loop: hidden from assistive tech and keyboard. */}
        <div aria-hidden inert className="flex items-center" style={{ gap }}>{children}</div>
      </motion.div>
    </div>
  );
}

"use client";

// Adapted from 21st.dev "Infinite Slider" (ibelick). Pauses under reduced
// motion, where it becomes a wrapping row.
import { animate, motion, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { cn } from "@/lib/utils";

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 40,
  durationOnHover,
  reverse = false,
  className,
}: {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  reverse?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(duration);
  const [ref, { width }] = useMeasure();
  const x = useMotionValue(0);

  useEffect(() => {
    if (reduce || !width) return;
    const size = width + gap;
    const from = reverse ? -size / 2 : 0;
    const to = reverse ? 0 : -size / 2;
    const controls = animate(x, [from, to], { ease: "linear", duration: current, repeat: Infinity, repeatType: "loop" });
    return controls.stop;
  }, [x, current, width, gap, reverse, reduce]);

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
        <div aria-hidden className="flex items-center" style={{ gap }}>{children}</div>
      </motion.div>
    </div>
  );
}

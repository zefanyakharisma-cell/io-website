"use client";

// Adapted from 21st.dev "Number Ticker" (danielpetho/basic-number-ticker):
// counts when scrolled into view, formats with thousands separators, and
// shows the final value immediately under reduced motion.
import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion";

export function NumberTicker({
  value,
  prefix = "",
  suffix = "",
  locale = "en",
  className,
  duration = 2.2,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  locale?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotionSafe();
  const count = useMotionValue(0);
  const fmt = new Intl.NumberFormat(locale === "id" ? "id-ID" : "en-US");
  const text = useTransform(count, (v) => `${prefix}${fmt.format(Math.round(v))}${suffix}`);

  useEffect(() => {
    if (reduce) {
      count.set(value);
      return;
    }
    if (!inView) return;
    const controls = animate(count, value, { duration, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, reduce, value, duration, count]);

  return (
    <span ref={ref} data-ticker className={cn("tabular-nums", className)}>
      <span className="sr-only">{`${prefix}${fmt.format(value)}${suffix}`}</span>
      <motion.span aria-hidden>{text}</motion.span>
    </span>
  );
}

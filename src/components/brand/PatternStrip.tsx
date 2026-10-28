import { cn } from "@/lib/utils";

/** The brand pattern as a thin strip: a divider or frame edge, never behind text. */
export function PatternStrip({ className }: { className?: string }) {
  return <div aria-hidden className={cn("pcu-pattern h-5 w-full", className)} />;
}

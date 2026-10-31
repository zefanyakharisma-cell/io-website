import { cn } from "@/lib/utils";

/**
 * Approved white-wordmark logomaster (PETRA Design System, Assets → Logos).
 * Only on midnight or black grounds; never below 96px wide; never recoloured.
 */
export function Logo({ className, height = 44 }: { className?: string; height?: number }) {
  const width = Math.max(96, Math.round((height * 842) / 296));
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logomaster-white.png"
      alt="Petra Christian University"
      width={width}
      height={Math.round((width * 296) / 842)}
      className={cn("block select-none", className)}
      draggable={false}
    />
  );
}

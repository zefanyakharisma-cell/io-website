import { cn } from "@/lib/utils";

/**
 * The Midnight Glass canvas: gradient-midnight with slowly drifting brand orbs
 * (the design system's "gradient overlay" register, ~.55 opacity).
 */
export function OrbBackground({ className, variant = "default" }: { className?: string; variant?: "default" | "quiet" }) {
  const quiet = variant === "quiet";
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-gradient-midnight", className)}>
      <div className={cn("absolute -left-[10%] -top-[20%] h-[60vmax] w-[60vmax] rounded-full bg-teal blur-[120px] animate-drift", quiet ? "opacity-20" : "opacity-40")} />
      <div className={cn("absolute -right-[15%] top-[20%] h-[50vmax] w-[50vmax] rounded-full bg-blue blur-[120px] animate-drift [animation-delay:-9s]", quiet ? "opacity-25" : "opacity-50")} />
      <div className={cn("absolute bottom-[-25%] left-[30%] h-[40vmax] w-[40vmax] rounded-full bg-cerise blur-[140px] animate-drift [animation-delay:-18s]", quiet ? "opacity-10" : "opacity-25")} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(19,50,86,0.55)_70%)]" />
    </div>
  );
}

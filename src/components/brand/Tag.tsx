import { cn } from "@/lib/utils";

/** Design system category label: one or two words on the midnight gradient; `outline` on dark cards. */
export function Tag({ children, outline, className }: { children: React.ReactNode; outline?: boolean; className?: string }) {
  return <span className={cn("pcu-tag", outline && "pcu-tag--outline", className)}>{children}</span>;
}

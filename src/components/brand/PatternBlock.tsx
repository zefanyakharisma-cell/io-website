import { cn } from "@/lib/utils";

const corners = {
  tl: "-left-16 -top-16 rounded-br-[100%]",
  tr: "-right-16 -top-16 rounded-bl-[100%]",
  bl: "-bottom-16 -left-16 rounded-tr-[100%]",
  br: "-bottom-16 -right-16 rounded-tl-[100%]",
} as const;

/**
 * The brand pattern as a large quarter-round block bleeding off one corner of a
 * section, like a poster accent. Decorative, hidden below md, never behind text:
 * place it in the corner away from the heading.
 */
export function PatternBlock({ corner = "tr", className }: { corner?: keyof typeof corners; className?: string }) {
  return <div aria-hidden className={cn("pcu-pattern pointer-events-none absolute hidden size-72 [background-size:120px_120px] md:block lg:size-96", corners[corner], className)} />;
}

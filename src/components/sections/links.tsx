import { ArrowUpRight, Clock, Download, Lock, MessageCircle } from "lucide-react";
import { tr, type L, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const soon: L = { en: "Link coming soon", id: "Tautan segera hadir" };
const newTab: L = { en: "(opens in a new tab)", id: "(membuka tab baru)" };

/**
 * External link button. An empty `href` renders a non-interactive
 * "Link coming soon" pill, so a missing URL is never a broken link.
 */
export function ExternalLink({
  href,
  label,
  locale,
  variant = "amber",
  icon = "arrow",
  className,
}: {
  href: string;
  label: string;
  locale: Locale;
  variant?: "amber" | "midnight" | "glass";
  icon?: "arrow" | "download" | "lock";
  className?: string;
}) {
  if (!href) {
    return (
      <span className={cn("inline-flex items-center gap-2 rounded-full border border-dashed border-current px-4 py-2 text-sm font-semibold opacity-80", className)}>
        <Clock className="size-4" aria-hidden />
        {label} — {tr(soon, locale)}
      </span>
    );
  }
  const Icon = icon === "download" ? Download : icon === "lock" ? Lock : ArrowUpRight;
  return (
    <a href={href} target="_blank" rel="noreferrer" className={cn("btn", `btn-${variant}`, className)}>
      {icon !== "arrow" && <Icon className="size-4" aria-hidden />}
      {label}
      {icon === "arrow" && <Icon className="size-4" aria-hidden />}
      <span className="sr-only">{tr(newTab, locale)}</span>
    </a>
  );
}

/** WhatsApp click-to-chat (wa.me) button. */
export function WhatsAppButton({ digits, display, locale, className }: { digits: string; display: string; locale: Locale; className?: string }) {
  return (
    <a href={`https://wa.me/${digits}`} target="_blank" rel="noreferrer" className={cn("btn btn-amber", className)}>
      <MessageCircle className="size-4" aria-hidden />
      WhatsApp {display}
      <span className="sr-only">{tr(newTab, locale)}</span>
    </a>
  );
}

import { Check, ThumbsDown, ThumbsUp, X } from "lucide-react";
import { tr, type L, type Locale } from "@/lib/i18n";
import { IconBadge } from "@/components/brand/IconBadge";

export function DosDonts({ dos, donts, locale }: { dos: L[]; donts: L[]; locale: Locale }) {
  const en = locale === "en";
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="glass-light rounded-lg p-6">
        <h3 className="flex items-center gap-3 text-xl text-emerald">
          <IconBadge icon={ThumbsUp} tone="aqua" size={44} />
          {en ? "Do" : "Lakukan"}
        </h3>
        <ul className="mt-4 space-y-3">
          {dos.map((d) => (
            <li key={d.en} className="flex gap-3 text-midnight">
              <Check className="mt-0.5 size-5 shrink-0 text-emerald" aria-hidden />
              {tr(d, locale)}
            </li>
          ))}
        </ul>
      </div>
      <div className="glass-light rounded-lg p-6">
        <h3 className="flex items-center gap-3 text-xl text-red">
          <IconBadge icon={ThumbsDown} tone="sunrise" size={44} />
          {en ? "Don't" : "Jangan"}
        </h3>
        <ul className="mt-4 space-y-3">
          {donts.map((d) => (
            <li key={d.en} className="flex gap-3 text-midnight">
              <X className="mt-0.5 size-5 shrink-0 text-red" aria-hidden />
              {tr(d, locale)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

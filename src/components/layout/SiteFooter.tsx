import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { directNav, navigation } from "@/content/navigation";
import { contact } from "@/content/contact";
import { tagline, vision } from "@/content/profile";
import { ui } from "@/lib/dictionary";
import { href, tr, type Locale } from "@/lib/i18n";
import { Logo } from "@/components/brand/Logo";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-smoke">
      {/* ArchBand: the design system's double-arch top edge, one per page, at the bottom. */}
      <div className="pcu-arch-band isolate overflow-hidden text-smoke">
        <div className="relative mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
            <div>
              <div className="pcu-lockup text-white">
                <Logo height={56} className="h-14 w-auto" />
                <span className="pcu-lockup__rule" aria-hidden />
                <span className="pcu-lockup__dept">{locale === "en" ? "International Office" : "Kantor Urusan Internasional"}</span>
              </div>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-smoke">{tr(ui.footerAbout, locale)}</p>
              <p className="mt-4 max-w-sm text-sm italic text-smoke/90">{tr(vision, locale)}</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-amber" aria-hidden />
                  <a className="prose-link on-dark" href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-amber" aria-hidden />
                  <a className="prose-link on-dark" href={contact.phoneHref}>{contact.phone}</a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-amber" aria-hidden />
                  <a className="prose-link on-dark" href={contact.mapUrl} target="_blank" rel="noreferrer">{contact.address}</a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
              {navigation.map((group) => (
                <div key={group.path}>
                  <p className="eyebrow mb-4 text-amber">{tr(group.label, locale)}</p>
                  <ul className="space-y-2 text-sm">
                    {group.links.map((l) => (
                      <li key={l.path}>
                        <Link href={href(locale, l.path)} className="text-smoke/85 hover:text-white">{tr(l.label, locale)}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                <p className="eyebrow mb-4 text-amber">{locale === "en" ? "More" : "Lainnya"}</p>
                <ul className="space-y-2 text-sm">
                  {directNav.map((d) => (
                    <li key={d.path}><Link href={href(locale, d.path)} className="text-smoke/85 hover:text-white">{tr(d.label, locale)}</Link></li>
                  ))}
                </ul>
                <p className="eyebrow mb-4 mt-8 text-amber">Social</p>
                <ul className="space-y-2 text-sm">
                  {contact.social.map((s) => (
                    <li key={s.handle}>
                      {s.url ? (
                        <a href={s.url} target="_blank" rel="noreferrer" className="text-smoke/85 hover:text-white">{s.handle}</a>
                      ) : (
                        <span className="text-smoke/85">{s.handle}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 py-8 text-xs text-smoke/85 sm:flex-row sm:items-center">
            <p className="tagline text-smoke/90">{tagline}</p>
            <p>© {new Date().getFullYear()} {tr(ui.rights, locale)} · Soli Deo Gloria</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

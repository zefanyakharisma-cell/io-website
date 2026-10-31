"use client";

// Glass navigation adapted from 21st.dev "Glassmorphism Navigation"
// (akashsingh890901-crypto): frosted pill bar with a sliding "lamp" indicator,
// extended into a mega menu for the site's three sections plus News.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Globe, Menu, X, ArrowRight, Search } from "lucide-react";
import { directNav, navigation, newsNav } from "@/content/navigation";
import { ui } from "@/lib/dictionary";
import { href, tr, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/Logo";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion";
import type { SearchItem } from "@/lib/search-index";
import { newsTabs } from "@/components/sections/NewsTabs";
import { SearchDialog } from "./SearchDialog";

export function SiteHeader({ locale, index }: { locale: Locale; index: SearchItem[] }) {
  const pathname = usePathname() ?? "/";
  const reduce = useReducedMotionSafe();
  const [open, setOpen] = useState<number | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [search, setSearch] = useState<{ open: boolean; q: string }>({ open: false, q: "" });
  const [expanded, setExpanded] = useState<number | null>(null);
  const openSearch = (q = "") => {
    setOpen(null);
    setMobile(false);
    setSearch({ open: true, q });
  };

  const rest = pathname.replace(/^\/(en|id)(?=\/|$)/, "");
  const otherLocale: Locale = locale === "en" ? "id" : "en";
  const switchHref = `/${otherLocale}${rest || "/"}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [pathname]);

  // Ctrl/Cmd+K anywhere, or "/" when not typing, opens search.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement | null)?.closest("input, textarea, select, [contenteditable]");
      if ((e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        setOpen(null);
        setMobile(false);
        setSearch({ open: true, q: "" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  // In the drawer, the section holding the current page starts open.
  useEffect(() => {
    if (mobile) setExpanded(navigation.findIndex((g) => rest.startsWith(`/${g.path.split("/")[1]}`)));
  }, [mobile, rest]);

  const isActive = (path: string) => {
    const section = path.split("/")[1];
    return rest.startsWith(`/${section}`);
  };
  const activeIndex = [...navigation.map((g) => g.path), ...directNav.map((d) => d.path)].findIndex(isActive);

  const enter = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(i);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };
  // A link to a #section of the current page doesn't change the pathname, so close on any link click too.
  const closeOnLink = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) {
      setOpen(null);
      setMobile(false);
    }
  };

  return (
    <>
      <a href="#main" className="sr-only z-[60] rounded-full bg-amber px-4 py-2 font-semibold text-midnight focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        {tr(ui.skip, locale)}
      </a>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full py-2 pl-5 pr-2 transition-all duration-300",
            scrolled || open !== null ? "glass-strong shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)]" : "glass",
          )}
          onMouseLeave={leave}
        >
          <Link href={href(locale)} className="shrink-0 rounded-sm" aria-label={`Petra Christian University International Office — ${tr(ui.home, locale)}`}>
            <Logo height={34} className="h-[34px] w-auto" />
          </Link>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {navigation.map((group, i) => (
                <li key={group.path} onMouseEnter={() => enter(i)}>
                  <button
                    type="button"
                    aria-expanded={open === i}
                    aria-controls={`mega-${i}`}
                    onClick={() => setOpen(open === i ? null : i)}
                    className={cn(
                      "relative flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors",
                      activeIndex === i || open === i ? "text-white" : "text-smoke/85 hover:text-white",
                    )}
                  >
                    {tr(group.label, locale)}
                    <ChevronDown className={cn("size-3.5 transition-transform", open === i && "rotate-180")} aria-hidden />
                    {activeIndex === i && <Lamp reduce={!!reduce} />}
                  </button>
                </li>
              ))}
              {directNav.map((d, k) => (
                <li key={d.path} onMouseEnter={() => setOpen(null)}>
                  <Link
                    href={href(locale, d.path)}
                    className={cn(
                      "relative block whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors",
                      activeIndex === navigation.length + k ? "text-white" : "text-smoke/85 hover:text-white",
                    )}
                  >
                    {tr(d.label, locale)}
                    {activeIndex === navigation.length + k && <Lamp reduce={!!reduce} />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => openSearch()}
              className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-smoke/90 hover:bg-white/10 hover:text-white"
              aria-label={`${tr(ui.search, locale)} (Ctrl+K)`}
              aria-haspopup="dialog"
            >
              <Search className="size-4" aria-hidden />
              <kbd className="hidden rounded border border-white/25 px-1.5 py-0.5 font-sans text-[11px] text-smoke/80 2xl:inline">⌘K</kbd>
            </button>
            <Link
              href={switchHref}
              hrefLang={otherLocale}
              className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-smoke/90 hover:bg-white/10 hover:text-white"
              aria-label={tr(ui.language, locale)}
            >
              <Globe className="size-4" aria-hidden />
              {tr(ui.languageShort, locale)}
            </Link>
            <Link href={href(locale, "/contact")} className="btn btn-amber hidden !px-4 !py-2 text-sm md:inline-flex xl:hidden">
              {tr(ui.connect, locale)}
            </Link>
            <button
              type="button"
              className="grid size-10 place-items-center rounded-full text-white hover:bg-white/10 xl:hidden"
              aria-expanded={mobile}
              aria-controls="mobile-menu"
              aria-label={tr(mobile ? ui.close : ui.menu, locale)}
              onClick={() => setMobile((m) => !m)}
            >
              {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Desktop mega menu */}
        <AnimatePresence>
          {open !== null && (
            <motion.div
              id={`mega-${open}`}
              key={open}
              initial={reduce ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-2 hidden max-w-7xl xl:block"
              onMouseEnter={() => enter(open)}
              onMouseLeave={leave}
              onClick={closeOnLink}
            >
              <MegaPanel locale={locale} index={open} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <SearchDialog index={index} locale={locale} open={search.open} initialQuery={search.q} onClose={() => setSearch({ open: false, q: "" })} />

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-midnight-deep/[0.97] px-5 pb-10 pt-24 backdrop-blur-xl xl:hidden"
            onClick={closeOnLink}
          >
            <nav aria-label="Mobile" className="pb-24">
              <button
                type="button"
                onClick={() => openSearch()}
                className="mb-6 flex w-full items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-left text-smoke/85"
              >
                <Search className="size-5" aria-hidden />
                {tr(ui.searchPlaceholder, locale)}
              </button>
              <ul className="divide-y divide-white/10">
                {navigation.map((group, gi) => {
                  const isOpen = expanded === gi;
                  return (
                    <li key={group.path}>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`m-group-${gi}`}
                        onClick={() => setExpanded(isOpen ? null : gi)}
                        className={cn("flex w-full items-center justify-between py-4 text-left text-xl font-bold", isActive(group.path) ? "text-amber" : "text-white")}
                      >
                        {tr(group.label, locale)}
                        <ChevronDown className={cn("size-5 transition-transform", isOpen && "rotate-180")} aria-hidden />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.ul
                            id={`m-group-${gi}`}
                            initial={reduce ? false : { height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={reduce ? undefined : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-1 overflow-hidden pb-4"
                          >
                            <li>
                              <Link href={href(locale, group.path)} className="flex items-center justify-between rounded-md px-3 py-2 font-semibold text-amber hover:bg-white/10">
                                {tr(group.blurb, locale)}
                                <ArrowRight className="size-4 shrink-0" aria-hidden />
                              </Link>
                            </li>
                            {group.links.map((l) => (
                              <li key={l.path}>
                                <Link href={href(locale, l.path)} aria-current={rest.replace(/\/$/, "") === l.path ? "page" : undefined} className="block rounded-md px-3 py-2 hover:bg-white/10">
                                  <span className="block font-semibold text-white">{tr(l.label, locale)}</span>
                                  <span className="block text-sm text-smoke/70">{tr(l.description, locale)}</span>
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
                <li className="py-4">
                  <Link href={href(locale, newsNav.path)} className={cn("flex items-center justify-between text-xl font-bold", isActive(newsNav.path) ? "text-amber" : "text-white")}>
                    {tr(newsNav.label, locale)}
                    <ArrowRight className="size-5 text-smoke/60" aria-hidden />
                  </Link>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {newsTabs.slice(1).map((t) => (
                      <li key={t.key}>
                        <Link href={href(locale, t.path)} className="block rounded-full border border-white/20 px-3 py-1.5 text-sm font-semibold text-smoke hover:bg-white/10">{tr(t.label, locale)}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <div className="fixed inset-x-0 bottom-0 flex gap-3 border-t border-white/10 bg-midnight-deep px-5 py-4">
                <Link href={href(locale, "/contact")} className="btn btn-amber flex-1 justify-center">
                  {tr(ui.connect, locale)}
                </Link>
                <Link href={switchHref} hrefLang={otherLocale} className="btn btn-glass shrink-0" aria-label={tr(ui.language, locale)}>
                  <Globe className="size-4" aria-hidden /> {tr(ui.languageShort, locale)}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Lamp({ reduce }: { reduce: boolean }) {
  return (
    <motion.span
      layoutId={reduce ? undefined : "nav-lamp"}
      className="absolute inset-0 -z-10 rounded-full bg-white/10"
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      aria-hidden
    >
      <span className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-amber">
        <span className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-amber/30 blur-md" />
      </span>
    </motion.span>
  );
}

function MegaPanel({ locale, index }: { locale: Locale; index: number }) {
  const group = navigation[index];
  return (
    <div className="glass-strong grid grid-cols-[1.1fr_2fr] gap-2 overflow-hidden rounded-lg p-2 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]">
      <Link href={href(locale, group.path)} className="group relative block min-h-56 overflow-hidden rounded-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={group.image.src} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute inset-0 bg-gradient-to-t from-midnight-deep via-midnight-deep/40 to-transparent" />
        <span className="absolute inset-x-0 bottom-0 p-5">
          <span className="block text-xl font-bold text-white">{tr(group.label, locale)}</span>
          <span className="mt-1 block text-sm text-smoke/90">{tr(group.blurb, locale)}</span>
        </span>
      </Link>
      <ul className="grid grid-cols-2 content-start gap-1 p-2">
        {group.links.map((l) => (
          <li key={l.path}>
            <Link href={href(locale, l.path)} className="group block rounded-md px-4 py-3 transition-colors hover:bg-white/10">
              <span className="flex items-center gap-2 font-semibold text-white">
                {tr(l.label, locale)}
                <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
              </span>
              <span className="mt-0.5 block text-sm text-smoke/80">{tr(l.description, locale)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

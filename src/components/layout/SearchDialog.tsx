"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CornerDownLeft, Search, X } from "lucide-react";
import type { SearchItem } from "@/lib/search-index";
import { ui } from "@/lib/dictionary";
import { href, tr, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion";

/** Lower-case, strip accents, so "Pendaftaran" matches "pendaftaran" and "café" matches "cafe". */
const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const SUGGESTED = ["/inbound/student-exchange", "/outbound#iisma", "/news/opportunities", "/news/calendar", "/contact"];

type Prepared = SearchItem & { t: string; d: string; k: string };

function rank(items: Prepared[], query: string, locale: Locale) {
  const terms = norm(query).split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  const other: Locale = locale === "en" ? "id" : "en";
  const scored: { item: Prepared; score: number }[] = [];
  for (const it of items) {
    let score = 0;
    let ok = true;
    for (const term of terms) {
      if (it.t.includes(term)) score += it.t.startsWith(term) || it.t.includes(` ${term}`) ? 12 : 8;
      else if (it.k.includes(term)) score += 4;
      else if (it.d.includes(term)) score += 3;
      else if (norm(`${it.title[other]} ${it.description[other]}`).includes(term)) score += 1;
      else { ok = false; break; }
    }
    if (ok) scored.push({ item: it, score });
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, 12).map((s) => s.item);
}

/** Site-wide search over a build-time index: Ctrl/Cmd+K or "/" opens it. */
export function SearchDialog({ index, locale, open, onClose, initialQuery = "" }: { index: SearchItem[]; locale: Locale; open: boolean; onClose: () => void; initialQuery?: string }) {
  const router = useRouter();
  const reduce = useReducedMotionSafe();
  const [q, setQ] = useState(initialQuery);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const prepared = useMemo<Prepared[]>(
    () => index.map((it) => ({ ...it, t: norm(it.title[locale]), d: norm(it.description[locale]), k: norm(it.keywords ?? "") })),
    [index, locale],
  );
  const results = useMemo(() => {
    if (q.trim()) return rank(prepared, q, locale);
    return SUGGESTED.map((p) => prepared.find((it) => it.path === p)).filter((x): x is Prepared => !!x);
  }, [prepared, q, locale]);

  useEffect(() => {
    if (!open) return;
    setQ(initialQuery);
    setActive(0);
    const prev = document.activeElement as HTMLElement | null;
    const t = setTimeout(() => inputRef.current?.focus(), 30);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
      prev?.focus?.();
    };
  }, [open, initialQuery]);

  useEffect(() => setActive(0), [q]);

  const go = (it: SearchItem) => {
    onClose();
    router.push(href(locale, it.path));
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") { e.preventDefault(); onClose(); }
    else if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === "Enter" && results[active]) { e.preventDefault(); go(results[active]); }
    else if (e.key === "Tab") {
      // Keep focus inside the dialog.
      const f = panelRef.current?.querySelectorAll<HTMLElement>("input, button, a[href]");
      if (!f?.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  };

  useEffect(() => {
    panelRef.current?.querySelector(`[data-idx="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  // Group consecutive results by their section label, keeping rank order of first appearance.
  const groups: { label: string; items: { it: Prepared; i: number }[] }[] = [];
  results.forEach((it, i) => {
    const label = q.trim() ? tr(it.group, locale) : tr(ui.searchSuggested, locale);
    let grp = groups.find((x) => x.label === label);
    if (!grp) groups.push((grp = { label, items: [] }));
    grp.items.push({ it, i });
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-start justify-center bg-midnight-deep/70 px-3 pt-[10vh] backdrop-blur-sm"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={tr(ui.search, locale)}
            onKeyDown={onKeyDown}
            initial={reduce ? false : { y: -12, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={reduce ? undefined : { y: -12, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="flex max-h-[75vh] w-full max-w-2xl flex-col overflow-hidden rounded-lg bg-white text-midnight shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center gap-3 border-b border-midnight/10 px-4">
              <Search className="size-5 shrink-0 text-ink-muted" aria-hidden />
              <input
                ref={inputRef}
                type="text"
                enterKeyHint="go"
                autoComplete="off"
                spellCheck={false}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={tr(ui.searchPlaceholder, locale)}
                className="h-14 w-full bg-transparent text-lg outline-none placeholder:text-ink-muted"
                role="combobox"
                aria-expanded="true"
                aria-controls="search-results"
                aria-activedescendant={results[active] ? `sr-${active}` : undefined}
                aria-autocomplete="list"
              />
              <button type="button" onClick={onClose} className="grid size-9 shrink-0 place-items-center rounded-full hover:bg-midnight/5" aria-label={tr(ui.close, locale)}>
                <X className="size-5" />
              </button>
            </div>
            <div id="search-results" role="listbox" className="flex-1 overflow-y-auto p-2" aria-label={tr(ui.search, locale)}>
              {results.length === 0 ? (
                <p className="px-4 py-10 text-center text-ink-secondary">{tr(ui.searchNoResults, locale)}</p>
              ) : (
                groups.map((grp) => (
                  <div key={grp.label} role="group" aria-label={grp.label} className="mb-2">
                    <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-ink-muted">{grp.label}</p>
                    {grp.items.map(({ it, i }) => (
                      <div
                        key={it.path + it.title.en}
                        id={`sr-${i}`}
                        data-idx={i}
                        role="option"
                        aria-selected={i === active}
                        onMouseMove={() => setActive(i)}
                        onClick={() => go(it)}
                        className={cn("flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5", i === active ? "bg-midnight text-white" : "hover:bg-midnight/5")}
                      >
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-semibold">{tr(it.title, locale)}</span>
                          <span className={cn("block truncate text-sm", i === active ? "text-smoke/85" : "text-ink-secondary")}>{tr(it.description, locale)}</span>
                        </span>
                        {i === active ? <CornerDownLeft className="size-4 shrink-0" aria-hidden /> : <ArrowRight className="size-4 shrink-0 opacity-40" aria-hidden />}
                      </div>
                    ))}
                  </div>
                ))
              )}
            </div>
            <p className="hidden border-t border-midnight/10 px-4 py-2 text-xs text-ink-muted sm:block">
              <kbd className="rounded border border-midnight/20 px-1">↑</kbd> <kbd className="rounded border border-midnight/20 px-1">↓</kbd> {tr(ui.searchHint, locale)}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categoryLabels, formatDate, type NewsPost } from "@/lib/news";
import { href, tr, type Locale } from "@/lib/i18n";
import { Photo } from "@/components/brand/Photo";
import { Shape } from "@/components/brand/Shape";
import { Tag } from "@/components/brand/Tag";
import { cn } from "@/lib/utils";
import { ui } from "@/lib/dictionary";

/** One corner shape per card, its colour following the category. */
const cornerColor: Record<NewsPost["category"], string> = {
  Mobility: "text-amber",
  Partnership: "text-teal",
  Research: "text-cerise",
  Events: "text-blue",
  Opportunities: "text-amber",
};

export function NewsCard({ post, locale, featured, compact }: { post: NewsPost; locale: Locale; featured?: boolean; compact?: boolean }) {
  // Events show when they happen, opportunities their deadline, everything else the publish date.
  const shownDate = post.kind === "upcoming" ? post.eventDate : post.kind === "opportunity" ? post.deadline : post.datePending ? undefined : post.date;
  const prefix = post.kind === "opportunity" ? `${tr(ui.deadline, locale)}: ` : "";
  const meta = (
    <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
      <Tag outline={featured}>{tr(categoryLabels[post.category], locale)}</Tag>
      {post.sample && <span className="rounded-full border border-current px-2 py-0.5 font-semibold uppercase tracking-wide opacity-80" title={tr(ui.sampleNote, locale)}>{tr(ui.sample, locale)}</span>}
      {shownDate && <time dateTime={shownDate}>{prefix}{formatDate(shownDate, locale)}{post.eventEnd ? ` – ${formatDate(post.eventEnd, locale)}` : ""}</time>}
    </span>
  );

  if (featured) {
    return (
      <Link href={href(locale, `/news/${post.slug}`)} className="group relative flex min-h-[28rem] flex-col justify-end overflow-hidden rounded-lg text-white shadow-card">
        <Photo image={post.cover} className="absolute inset-0 transition-transform duration-[1.2s] group-hover:scale-105" />
        <span className="absolute inset-0 bg-gradient-to-t from-midnight-deep via-midnight-deep/50 to-transparent" />
        <span className="glass relative m-4 block rounded-md p-6">
          <span className="text-smoke">{meta}</span>
          <span className="mt-3 block text-2xl font-bold leading-snug">{tr(post.title, locale)}</span>
          <span className="mt-2 block text-smoke/90">{tr(post.excerpt, locale)}</span>
        </span>
      </Link>
    );
  }

  return (
    <Link href={href(locale, `/news/${post.slug}`)} className={cn("group glass-light relative flex overflow-hidden rounded-lg text-midnight transition-transform hover:-translate-y-0.5", compact ? "flex-col lg:flex-row" : "flex-col")}>
      <span className={cn("relative block shrink-0 overflow-hidden", compact ? "aspect-[16/10] lg:aspect-auto lg:w-44" : "aspect-[16/10]")}>
        <Photo image={post.cover} className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, 100vw" />
      </span>
      <Shape kind={compact ? "quarter-bl" : "quarter-tl"} mobile className={cn("right-0 w-8", compact ? "top-0" : "bottom-0", cornerColor[post.category])} />
      <span className="flex flex-1 flex-col p-5 pr-10">
        <span className="text-ink-secondary">{meta}</span>
        <span className="mt-2 flex items-start justify-between gap-2 font-bold leading-snug">
          {tr(post.title, locale)}
          <ArrowUpRight className="mt-0.5 size-4 shrink-0 opacity-60 transition group-hover:opacity-100" aria-hidden />
        </span>
        {!compact && <span className="mt-2 text-sm text-ink-secondary">{tr(post.excerpt, locale)}</span>}
      </span>
    </Link>
  );
}

import Link from "next/link";
import { ArrowUpRight, Clock, Users } from "lucide-react";
import { audienceLabels, daysUntil, formatDate, type NewsPost } from "@/lib/news";
import { ui } from "@/lib/dictionary";
import { href, tr, type Locale } from "@/lib/i18n";
import { Photo } from "@/components/brand/Photo";
import { cn } from "@/lib/utils";

/** An open call: cover, deadline countdown, audience and an apply link. */
export function OpportunityCard({ post, locale, today }: { post: NewsPost; locale: Locale; today: string }) {
  const left = post.deadline ? daysUntil(post.deadline, today) : undefined;
  const closed = left !== undefined && left < 0;
  const badge = left === undefined ? null : closed ? tr(ui.closed, locale) : left === 0 ? tr(ui.lastDay, locale) : `${left} ${tr(ui.daysLeft, locale)}`;
  return (
    <article className={cn("glass-light group relative flex h-full flex-col overflow-hidden rounded-lg text-midnight", closed && "opacity-70")}>
      <div className="relative aspect-[16/9] overflow-hidden">
        <Photo image={post.cover} className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
        {badge && (
          <span className={cn("absolute left-3 top-3 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold shadow", closed ? "bg-white text-midnight" : left! <= 14 ? "bg-cerise text-white" : "bg-amber text-midnight")}>
            <Clock className="size-3.5" aria-hidden />
            {badge}
          </span>
        )}
        {post.sample && <span className="absolute right-3 top-3 rounded-full bg-midnight/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white" title={tr(ui.sampleNote, locale)}>{tr(ui.sample, locale)}</span>}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-secondary">
          {post.deadline && <span><strong>{tr(ui.deadline, locale)}:</strong> <time dateTime={post.deadline}>{formatDate(post.deadline, locale)}</time></span>}
          {post.audience && <span className="flex items-center gap-1"><Users className="size-3.5" aria-hidden />{tr(audienceLabels[post.audience], locale)}</span>}
        </p>
        <h3 className="mt-2 text-lg font-bold leading-snug">
          <Link href={href(locale, `/news/${post.slug}`)} className="after:absolute after:inset-0">{tr(post.title, locale)}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-ink-secondary">{tr(post.excerpt, locale)}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
          {tr(ui.readMore, locale)} <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </div>
    </article>
  );
}

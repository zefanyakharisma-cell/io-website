import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { contact } from "@/content/contact";
import { href, type Locale } from "@/lib/i18n";
import { Photo, type PhotoSource } from "@/components/brand/Photo";
import { Ring } from "@/components/brand/Ring";
import { PatternBlock } from "@/components/brand/PatternBlock";
import { Reveal } from "@/components/brand/Reveal";

/**
 * Closing call to action, Connect with Us. A white section with a framed
 * photo: it sits last before the footer, so the footer's arch edge reads.
 */
export function CtaBand({ locale, image, title, body }: { locale: Locale; image: PhotoSource; title: string; body: string }) {
  const en = locale === "en";
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 text-midnight md:py-28">
      <PatternBlock corner="tr" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8">
        <Reveal className="relative md:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
            <Photo image={image} sizes="(min-width: 768px) 50vw, 100vw" alt="" />
          </div>
          <Ring shape="ring-u" className="-bottom-10 -right-10 w-56 text-cerise" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow mb-4 text-emerald">{en ? "Connect with us" : "Hubungi kami"}</p>
          <h2 className="text-[clamp(1.75rem,1.3rem+2vw,2.75rem)] leading-tight">{title}</h2>
          <p className="mt-4 max-w-xl text-lg text-ink-secondary">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={href(locale, "/contact")} className="btn btn-midnight">
              {en ? "Start a conversation" : "Mulai percakapan"} <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a href={`mailto:${contact.email}`} className="btn border border-midnight/25 text-midnight hover:bg-midnight/5">
              <Mail className="size-4" aria-hidden /> {contact.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

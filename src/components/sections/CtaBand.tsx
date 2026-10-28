import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { contact } from "@/content/contact";
import { href, type Locale } from "@/lib/i18n";
import { Photo, type PhotoSource } from "@/components/brand/Photo";
import { Ring } from "@/components/brand/Ring";

/** Closing call to action: photo background, glass card, Connect with Us. */
export function CtaBand({ locale, image, title, body }: { locale: Locale; image: PhotoSource; title: string; body: string }) {
  const en = locale === "en";
  return (
    <section className="relative isolate overflow-hidden py-24 text-white md:py-32">
      <div className="absolute inset-0 -z-10">
        <Photo image={image} sizes="100vw" alt="" />
        <div className="absolute inset-0 bg-midnight-deep/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-deep via-midnight-deep/60 to-transparent" />
      </div>
      <Ring shape="ring-u" className="-right-20 -top-10 w-[30rem] text-cerise/80" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass max-w-2xl rounded-lg p-8 md:p-10">
          <p className="eyebrow mb-4 text-amber">{en ? "Connect with us" : "Hubungi kami"}</p>
          <h2 className="text-[clamp(1.75rem,1.3rem+2vw,2.75rem)] leading-tight">{title}</h2>
          <p className="mt-4 text-lg text-smoke/95">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={href(locale, "/contact")} className="btn btn-amber">
              {en ? "Start a conversation" : "Mulai percakapan"} <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a href={`mailto:${contact.email}`} className="btn btn-glass">
              <Mail className="size-4" aria-hidden /> {contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

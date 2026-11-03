import { media } from "@/content/media.generated";
import { mobilityNav } from "@/content/navigation";
import { outboundStories, outboundVideos } from "@/content/outbound";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { VideoTestimonial } from "@/components/sections/MediaSlots";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/mobility/outbound/experiences", { en: "Outbound Experiences", id: "Pengalaman Outbound" }, { en: "Petranesians share their student exchange and dual degree experiences abroad.", id: "Petranesian berbagi pengalaman pertukaran mahasiswa dan dual degree di luar negeri." });
}

export default async function OutboundExperiencesPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        image={media.mobility["exchange-group"]}
        eyebrow={en ? "Outbound · experiences" : "Outbound · pengalaman"}
        title={en ? "Petranesians abroad, in their words" : "Petranesian di luar negeri, dalam cerita mereka"}
        lead={en ? "Highlights and testimonies from students who went on exchange and dual degree programmes." : "Sorotan dan testimoni dari mahasiswa yang mengikuti pertukaran dan dual degree."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(mobilityNav.label, locale), href: href(locale, "/mobility") }, { label: "Outbound", href: href(locale, "/mobility/outbound") }, { label: en ? "Experiences" : "Pengalaman" }]}
      />

      <Section tone="light" labelledBy="stories-title">
        <SectionHeading id="stories-title" tone="light" eyebrow={en ? "Highlights" : "Sorotan"} title={en ? "Six journeys" : "Enam perjalanan"} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outboundStories.map((s, i) => (
            <li key={s.name}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <article className="glass-light flex h-full flex-col overflow-hidden rounded-lg">
                  <div className="relative aspect-[4/3]">
                    <Photo image={s.image} sizes="(min-width: 1024px) 33vw, 50vw" />
                    <span className="absolute left-3 top-3 rounded-full bg-midnight px-3 py-1 text-xs font-semibold text-white">{tr(s.program, locale)}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-xl font-bold text-midnight">{s.name}</h3>
                    <p className="text-sm font-semibold text-emerald">{s.study}{s.award ? ` · ${s.award}` : ""}</p>
                    <p className="mt-2 text-ink-secondary">{s.host}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-secondary">{en ? "Photos and quotes from each student are coming soon; the photos shown are from Petra's mobility programmes." : "Foto dan kutipan dari setiap mahasiswa segera hadir; foto yang tampil berasal dari program mobilitas Petra."}</p>
      </Section>

      <Section tone="dark" cinematic bgImage={media.campus["green-walkway"]} orbs labelledBy="videos-title">
        <SectionHeading id="videos-title" eyebrow={en ? "Video testimonies" : "Video testimoni"} title={en ? "Hear it from Petranesians" : "Dengar langsung dari Petranesian"} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {outboundVideos.map((v) => (
            <figure key={v.title}>
              <VideoTestimonial id={v.youtubeId} title={v.title} placeholder={en ? "Video coming soon" : "Video segera hadir"} />
              <figcaption className="mt-3 text-sm text-smoke/90">{v.title}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CtaBand locale={locale} image={media.mobility.nsysu} title={en ? "Your journey starts here." : "Perjalanan Anda dimulai di sini."} body={en ? "Explore the outbound programmes and talk to our student mobility team." : "Jelajahi program outbound dan hubungi tim mobilitas mahasiswa kami."} />
    </>
  );
}

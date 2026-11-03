import { media } from "@/content/media.generated";
import { mobilityNav } from "@/content/navigation";
import { inboundExperiences } from "@/content/inbound";
import { testimonialVideos } from "@/content/links";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { VideoTestimonial } from "@/components/sections/MediaSlots";
import { JumpLinks } from "@/components/sections/mobility";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Gallery } from "@/components/ui/gallery";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/mobility/inbound/experiences", { en: "Inbound Experiences", id: "Pengalaman Inbound" }, { en: "Stories from our global community: welcome dinners, city tours, outings, farewells and testimonies from international students at Petra.", id: "Cerita komunitas global kami: welcome dinner, city tour, jalan-jalan, perpisahan dan testimoni mahasiswa internasional di Petra." });
}

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

export default async function InboundExperiencesPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const events = inboundExperiences.events;

  return (
    <>
      <PageHero
        image={media.mobility["cultural-night"]}
        eyebrow={en ? "Inbound · experiences" : "Inbound · pengalaman"}
        title={en ? "Stories from Our Global Community" : "Cerita dari Komunitas Global Kami"}
        lead={tr(inboundExperiences.intro, locale)}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(mobilityNav.label, locale), href: href(locale, "/mobility") }, { label: "Inbound", href: href(locale, "/mobility/inbound") }, { label: en ? "Experiences" : "Pengalaman" }]}
      >
        <JumpLinks items={[...events.map((e) => ({ id: slug(e.title.en), label: tr(e.title, locale) })), { id: "testimony", label: en ? "Testimony" : "Testimoni" }]} />
      </PageHero>

      {events.map((e, i) => (
        <Section key={e.title.en} tone={i % 2 ? "white" : "light"} labelledBy={`${slug(e.title.en)}-title`} id={slug(e.title.en)} className="scroll-mt-20">
          <SectionHeading id={`${slug(e.title.en)}-title`} tone="light" eyebrow={en ? "In pictures" : "Dalam gambar"} title={tr(e.title, locale)} />
          <Gallery className="mt-8" items={e.images.map((img) => ({ ...img, caption: tr(e.title, locale) }))} columns="columns-2 md:columns-3" openLabel={en ? "Open photo" : "Buka foto"} />
        </Section>
      ))}

      <Section tone="dark" cinematic bgImage={media.campus["green-walkway"]} orbs labelledBy="testimony-title" id="testimony" className="scroll-mt-20">
        <SectionHeading id="testimony-title" eyebrow={en ? "Testimony" : "Testimoni"} title={en ? "Hear it from our international students" : "Dengar langsung dari mahasiswa internasional"} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonialVideos.inbound.map((id, i) => (
            <VideoTestimonial key={i} id={id} title={`${en ? "Inbound testimony" : "Testimoni inbound"} ${i + 1}`} placeholder={en ? "Video coming soon" : "Video segera hadir"} />
          ))}
        </div>
      </Section>

      <CtaBand locale={locale} image={media.mobility["asp-group"]} title={en ? "Write your own story at Petra." : "Tulis kisah Anda sendiri di Petra."} body={en ? "Ask your home university about exchange to Petra, or join one of our short programmes." : "Tanyakan universitas asal Anda tentang pertukaran ke Petra, atau ikuti salah satu program singkat kami."} />
    </>
  );
}

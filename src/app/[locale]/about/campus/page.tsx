import { MapPin } from "lucide-react";
import { media } from "@/content/media.generated";
import { webPhotos } from "@/content/web-photos.generated";
import { campus } from "@/content/profile";
import { contact } from "@/content/contact";
import { aboutNav } from "@/content/navigation";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Gallery } from "@/components/ui/gallery";
import { PhotoCredits } from "@/components/sections/PhotoCredit";
import { CampusMap } from "@/components/sections/CampusMap";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/about/campus", { en: "Where We Are", id: "Lokasi Kami" }, { en: "Rooted in Surabaya since 1961: the gateway to East Java and eastern Indonesia.", id: "Berakar di Surabaya sejak 1961: gerbang Jawa Timur dan Indonesia bagian timur." });
}

export default async function CampusPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const photos = [
    media.campus["building-yellow"], media.campus["green-walkway"], media.campus["students-corridor"], media.campus["gazebo-study"],
    media.campus["tree-planting"], media.campus["students-gazebo"], media.campus.landmark, media.ai["study-table"],
  ];
  // Official Petra photos published on Wikimedia Commons by BrandingPCU (credited below the gallery).
  const commons = [webPhotos.petra["w-building"], webPhotos.petra["servant-leader"], webPhotos.petra.library];

  return (
    <>
      <PageHero
        image={media.campus["building-yellow"]}
        eyebrow={en ? "Where we are" : "Lokasi kami"}
        title={en ? "Rooted in Surabaya since 1961" : "Berakar di Surabaya sejak 1961"}
        lead={tr(campus.intro, locale)}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(aboutNav.label, locale), href: href(locale, "/about") }, { label: en ? "Where We Are" : "Lokasi Kami" }]}
      />

      <Section tone="dark" cinematic bgImage={media.campus["building-yellow"]} orbs labelledBy="zoom">
        <SectionHeading id="zoom" eyebrow={en ? "Zoom in" : "Perbesar"} title={en ? "Indonesia → East Java → Surabaya" : "Indonesia → Jawa Timur → Surabaya"} lead={tr(campus.city, locale)} />
        <div className="mt-12">
          <CampusMap
            pois={campus.pois.map((p) => ({ ...p, name: tr(p.name, locale), body: tr(p.body, locale) }))}
            steps={[
              { label: "Indonesia", center: [-2.5, 117.5], zoom: 4 },
              { label: en ? "East Java" : "Jawa Timur", center: [-7.65, 112.7], zoom: 8 },
              { label: "Surabaya", center: [-7.3, 112.755], zoom: 12 },
              { label: en ? "Campus" : "Kampus", center: [campus.pois[0].lat, campus.pois[0].lng], zoom: 16 },
            ]}
            labels={{
              load: en ? "Load interactive map" : "Muat peta interaktif",
              note: en ? "The map loads tiles from OpenStreetMap only after you click." : "Peta memuat data dari OpenStreetMap hanya setelah Anda klik.",
              directions: en ? "Directions" : "Petunjuk arah",
              steps: en ? "Zoom to" : "Perbesar ke",
              legend: { campus: en ? "Campus" : "Kampus", transport: en ? "Getting here" : "Transportasi", city: en ? "City" : "Kota", trip: en ? "Trips" : "Wisata" },
            }}
          />
        </div>
        <ol className="mt-6 grid grid-cols-3 gap-3 md:gap-4">
          {campus.maps.map((m, i) => (
            <li key={m.image.src}>
              <Reveal delay={i * 0.12} className="glass h-full rounded-lg p-3">
                <p className="flex items-center gap-2 text-sm font-bold">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-amber text-xs text-midnight">{i + 1}</span>
                  <span className="truncate">{tr(m.label, locale)}</span>
                </p>
                <div className="mt-3 grid aspect-[4/3] place-items-center overflow-hidden rounded-md bg-white/95 p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.image.src} alt={m.image.alt} className="max-h-full w-auto object-contain" loading="lazy" />
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="glass mt-8 flex flex-col gap-4 rounded-lg p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-3">
            <MapPin className="mt-1 size-5 shrink-0 text-amber" aria-hidden />
            <span>
              <strong className="block">{en ? "Main campus" : "Kampus utama"}</strong>
              {campus.address}
            </span>
          </p>
          <a href={contact.mapUrl} target="_blank" rel="noreferrer" className="btn btn-amber shrink-0">
            {en ? "Open in Google Maps" : "Buka di Google Maps"}
          </a>
        </div>
      </Section>

      <Section tone="light" labelledBy="campus-life">
        <SectionHeading id="campus-life" tone="light" eyebrow={en ? "Campus" : "Kampus"} title={en ? "A green campus, built for meeting" : "Kampus hijau, tempat bertemu"} lead={en ? "Petra's 40-hectare green campus is managed by its Sustainability & Social Innovation centre." : "Kampus hijau Petra seluas 40 hektare dikelola Pusat Keberlanjutan & Inovasi Sosial."} />
        <Gallery className="mt-10" items={[...commons, ...photos].map((p) => ({ ...p, caption: p.alt }))} openLabel={en ? "Open photo" : "Buka foto"} />
        <PhotoCredits photos={commons} locale={locale} />
      </Section>

      <CtaBand locale={locale} image={media.mobility["psp-bus"]} title={en ? "Come and see Surabaya." : "Datang dan lihat Surabaya."} body={en ? "Exchange students, summer cohorts and partner delegations are always welcome." : "Mahasiswa pertukaran, peserta musim panas dan delegasi mitra selalu kami sambut."} />
    </>
  );
}

import type { L } from "@/lib/i18n";
import { media } from "./media.generated";

/**
 * Home hero slides: a landmark or student photo with a one- or two-line
 * testimonial (KUI spec, Sheet1 row 1). Quotes and names are pending from KUI;
 * a slide without a quote shows its caption only. Never invent a quote.
 */
export const heroSlides: { image: { src: string; small?: string; alt: string; width?: number; height?: number }; caption: L; quote?: L; name?: string; program?: string }[] = [
  { image: media.campus.landmark, caption: { en: "Petra Christian University, Surabaya", id: "Universitas Kristen Petra, Surabaya" } },
  { image: media.mobility.bromo, caption: { en: "Inbound students at sunrise over Mount Bromo", id: "Mahasiswa inbound saat matahari terbit di Gunung Bromo" } },
  { image: media.mobility["korea-university"], caption: { en: "A Petranesian on exchange at Korea University", id: "Petranesian pertukaran di Korea University" } },
  { image: media.mobility["icop-river"], caption: { en: "ICOP students building an irrigation pump, Weihura", id: "Mahasiswa ICOP membangun pompa irigasi, Weihura" } },
];

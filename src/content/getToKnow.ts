import type { L } from "@/lib/i18n";
import { media } from "./media.generated";

type Img = { src: string; small?: string; alt: string; width?: number; height?: number };

/**
 * Campus resources to highlight. Uses facilities from the deck until OMNI
 * sends its list (KUI spec: "kirim ke OMNI fasilitas yang mau dihighlight").
 */
export const campusResources: { title: L; body: L; image: Img }[] = [
  { title: { en: "65+ labs & studios", id: "65+ laboratorium & studio" }, body: { en: "Industry-standard practice space for every discipline.", id: "Ruang praktik berstandar industri untuk setiap disiplin." }, image: media.labs["smart-systems"] },
  { title: { en: "40-hectare green campus", id: "Kampus hijau 40 hektare" }, body: { en: "Planted walkways and gardens between classes.", id: "Jalur hijau dan taman di antara gedung kuliah." }, image: media.campus["green-walkway"] },
  { title: { en: "Student spaces", id: "Ruang mahasiswa" }, body: { en: "Lounges and gazebos for study and meeting friends.", id: "Lounge dan gazebo untuk belajar dan bertemu teman." }, image: media.campus["students-gazebo"] },
  { title: { en: "TV & media studios", id: "Studio TV & media" }, body: { en: "Broadcast, photography and digital media facilities.", id: "Fasilitas siaran, fotografi dan media digital." }, image: media.faculty["tv-studio"] },
  { title: { en: "VR studio", id: "Studio VR" }, body: { en: "Immersive technology for design and learning.", id: "Teknologi imersif untuk desain dan pembelajaran." }, image: media.faculty["vr-studio"] },
  { title: { en: "Hot kitchen", id: "Dapur praktik" }, body: { en: "Culinary labs for spice, technique and fusion.", id: "Laboratorium kuliner untuk rempah, teknik dan fusion." }, image: media.faculty.culinary },
];

/** Petramate. Benefits drafted — TO CONFIRM by KUI. */
export const petramate = {
  intro: {
    en: "Petramates are Petra students who welcome international students: they meet them at arrival, help them settle in, and show them campus and city life.",
    id: "Petramate adalah mahasiswa Petra yang menyambut mahasiswa internasional: menjemput saat kedatangan, membantu beradaptasi, dan memperkenalkan kehidupan kampus dan kota.",
  } satisfies L,
  benefits: [
    { en: "Make friends from around the world without leaving Surabaya", id: "Berteman dengan mahasiswa dari seluruh dunia tanpa meninggalkan Surabaya" },
    { en: "Practise English and other languages every day", id: "Berlatih bahasa Inggris dan bahasa lain setiap hari" },
    { en: "Build intercultural and leadership skills", id: "Membangun keterampilan antarbudaya dan kepemimpinan" },
    { en: "Join international programme activities and trips", id: "Ikut kegiatan dan perjalanan program internasional" },
    { en: "Prepare for your own exchange or study abroad", id: "Bersiap untuk pertukaran atau studi di luar negeri" },
  ] satisfies L[],
  images: [media.mobility["international-day"], media.mobility["cultural-night"], media.mobility.henna],
  contact: "head-mobility@petra.ac.id",
};

/**
 * Beautiful Surabaya. KUI asked for Surabaya City Government (Pemkot) photos,
 * each captioned and credited; until those arrive, deck photos stand in.
 */
export const surabaya = {
  intro: {
    en: "Surabaya is Indonesia's second-largest city and the gateway to East Java — about an hour's flight from Bali and a two-hour drive from the cool highlands of Malang and Mount Bromo.",
    id: "Surabaya adalah kota terbesar kedua di Indonesia dan gerbang Jawa Timur — sekitar satu jam penerbangan dari Bali dan dua jam perjalanan dari dataran tinggi Malang dan Gunung Bromo.",
  } satisfies L,
  nearby: [
    { place: "Bali", detail: { en: "≈1 hour by air", id: "≈1 jam penerbangan" } },
    { place: "Malang", detail: { en: "≈2 hours by road", id: "≈2 jam perjalanan darat" } },
    { place: "Mount Bromo", detail: { en: "Sunrise trips from Surabaya", id: "Perjalanan matahari terbit dari Surabaya" } },
    { place: "Madura", detail: { en: "Across the Suramadu Bridge", id: "Melalui Jembatan Suramadu" } },
  ] satisfies { place: string; detail: L }[],
  photos: [
    { image: media.mobility.bromo, caption: { en: "Sunrise at Mount Bromo", id: "Matahari terbit di Gunung Bromo" }, credit: "Petra International Office" },
    { image: media.mobility["psp-bus"], caption: { en: "City tour, Surabaya", id: "Tur kota, Surabaya" }, credit: "Petra International Office" },
    { image: media.mobility["museum-group"], caption: { en: "Museum visit", id: "Kunjungan museum" }, credit: "Petra International Office" },
    { image: media.mobility["spectra-museum"], caption: { en: "Heritage museum, Surabaya", id: "Museum warisan, Surabaya" }, credit: "Petra International Office" },
  ],
};

import type { L } from "@/lib/i18n";
import { webPhotos, type WebPhoto } from "./web-photos.generated";
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
  /** From Petra's 2024/25 open-recruitment notice (petramate2425 source). Confirm for the current year. */
  recruitmentFacts: [
    { value: "SKKK", label: { en: "Credit points for completing a Petramate term", id: "Poin SKKK setelah menyelesaikan satu periode Petramate" } },
    { value: "Scholarship", label: { en: "Members can qualify for a scholarship when joining PCU's International Programs", id: "Anggota dapat memperoleh beasiswa saat bergabung di Program Internasional PCU" } },
  ] satisfies { value: string; label: L }[],
};

/** International Office location and mobility line (pcuFactSheet source). */
export const office = {
  room: { en: "Main Campus, D Building, Room 104", id: "Kampus Utama, Gedung D, Ruang 104" } satisfies L,
  mobilityPhone: { display: "+62 31 298 3188", tel: "+62312983188" },
  mobilityEmail: "staff-mobility@petra.ac.id",
};

/**
 * Beautiful Surabaya. Landmark and sight photos come from Wikimedia Commons under free
 * licences, each credited on the page. Surabaya City Government (Pemkot) photos can
 * replace them when KUI provides them.
 */
export const surabaya = {
  intro: {
    en: "Surabaya is Indonesia's second-largest city and the gateway to East Java — about an hour's flight from Bali, two hours from the cool highlands of Malang and a few hours from Mount Bromo.",
    id: "Surabaya adalah kota terbesar kedua di Indonesia dan gerbang Jawa Timur — sekitar satu jam penerbangan dari Bali, dua jam dari dataran tinggi Malang, dan beberapa jam dari Gunung Bromo.",
  } satisfies L,
  nearby: [
    { place: "Malang", detail: { en: "1.5–2 hours by toll road · ≈2 hours by train", id: "1,5–2 jam via tol · ≈2 jam dengan kereta" } },
    { place: "Mount Bromo", detail: { en: "3–4 hours by road", id: "3–4 jam perjalanan darat" } },
    { place: "Madura", detail: { en: "Across the 5.4 km Suramadu Bridge", id: "Melalui Jembatan Suramadu 5,4 km" } },
    { place: "Bali", detail: { en: "≈1¼ hours by air", id: "≈1¼ jam penerbangan" } },
  ] satisfies { place: string; detail: L }[],
  /** Day-trip map points (lat, lng) with travel times — malangToll, bromoTransfer sources; Bali from airline schedules. */
  dayTrips: [
    { place: "Malang", side: "left", lat: -7.98, lng: 112.63, time: { en: "1.5–2 h by road", id: "1,5–2 jam darat" } },
    { place: "Bromo", side: "right", lat: -7.94, lng: 112.95, time: { en: "3–4 h by road", id: "3–4 jam darat" } },
    { place: "Madura", side: "right", lat: -7.05, lng: 112.85, time: { en: "Suramadu Bridge", id: "Jembatan Suramadu" } },
    { place: "Bali", side: "bottom", lat: -8.65, lng: 115.22, time: { en: "≈1¼ h flight", id: "≈1¼ jam terbang" } },
  ] satisfies { place: string; side: "top" | "bottom" | "left" | "right"; lat: number; lng: number; time: L }[],
  /** Landmarks — surabayaLandmarks, surabayaCultureTrip sources. Photos from Wikimedia Commons (scripts/web-photos.json). */
  landmarks: [
    { name: "Suramadu Bridge", stat: "5.4 km", photo: webPhotos.surabaya.suramadu, body: { en: "Opened in June 2009, it links Java and Madura and is Indonesia's longest bridge. Best at sunset.", id: "Diresmikan Juni 2009, menghubungkan Jawa dan Madura, dan merupakan jembatan terpanjang di Indonesia. Paling indah saat senja." } },
    { name: "Tugu Pahlawan", stat: "41 m", photo: webPhotos.surabaya["tugu-pahlawan"], body: { en: "The Heroes Monument honours the Battle of Surabaya on 10 November 1945; the 10 November Museum sits beside it.", id: "Monumen yang mengenang Pertempuran Surabaya 10 November 1945; Museum 10 November berada di sampingnya." } },
    { name: "House of Sampoerna", stat: "1932", photo: webPhotos.surabaya["house-of-sampoerna"], body: { en: "A heritage complex and museum on the history of kretek, with guided tours of the hand-rolling floor.", id: "Kompleks cagar budaya dan museum sejarah kretek, dengan tur ke ruang pelintingan tangan." } },
    { name: "Monumen Kapal Selam", stat: "Monkasel", photo: webPhotos.surabaya.monkasel, body: { en: "A retired Soviet-built Whiskey-class submarine, now a museum on the bank of the Kalimas River.", id: "Kapal selam kelas Whiskey buatan Soviet yang kini menjadi museum di tepi Kalimas." } },
  ] satisfies { name: string; stat: string; photo: WebPhoto; body: L }[],
  /** "Sights around Surabaya": Wikimedia Commons photos, each credited on the page. */
  photos: [
    { image: webPhotos.surabaya["skyline-day"], caption: { en: "Surabaya by day", id: "Surabaya di siang hari" } },
    { image: webPhotos.surabaya["skyline-night"], caption: { en: "The city after dark", id: "Kota di malam hari" } },
    { image: webPhotos.surabaya.bromo, caption: { en: "Sunrise at Mount Bromo", id: "Matahari terbit di Gunung Bromo" } },
    { image: webPhotos.surabaya.malang, caption: { en: "Malang at night", id: "Malang di malam hari" } },
  ] satisfies { image: WebPhoto; caption: L }[],
};

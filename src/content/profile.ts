import type { L } from "@/lib/i18n";
import { media } from "./media.generated";

/** Figures from "PETRA International Profile" (General), slides 1–4 and 8. */
export const tagline = "EXPLORE | DISCOVER | TRANSFORM";

export const vision: L = {
  en: "A world-leading Christian university that transforms society for the glory of God.",
  id: "Universitas Kristen kelas dunia yang mentransformasi masyarakat untuk kemuliaan Tuhan.",
};

/** Founded 22 September 1961 (see the timeline below). The static export computes the age at build time. */
const founded = new Date(Date.UTC(1961, 8, 22));
function yearsSinceFounding(now = new Date()) {
  const years = now.getUTCFullYear() - founded.getUTCFullYear();
  const beforeAnniversary = now.getUTCMonth() < founded.getUTCMonth() || (now.getUTCMonth() === founded.getUTCMonth() && now.getUTCDate() < founded.getUTCDate());
  return beforeAnniversary ? years - 1 : years;
}

export type Stat = { value: number; suffix?: string; prefix?: string; label: L; note?: L };

export const keyStats: Stat[] = [
  { value: yearsSinceFounding(), label: { en: "Years since 1961", id: "Tahun sejak 1961" }, note: { en: "One of East Java's oldest private universities", id: "Salah satu universitas swasta tertua di Jawa Timur" } },
  { value: 7, label: { en: "Faculties", id: "Fakultas" }, note: { en: "All with “Excellent” institutional standing", id: "Seluruhnya berstatus “Unggul”" } },
  { value: 59, label: { en: "Programmes", id: "Program" }, note: { en: "Bachelor to doctoral and professional", id: "Sarjana hingga doktor dan profesi" } },
  { value: 7000, suffix: "+", label: { en: "Active students", id: "Mahasiswa aktif" }, note: { en: "Plus a growing international cohort", id: "Ditambah mahasiswa internasional yang terus bertambah" } },
  { value: 53080, label: { en: "Global alumni", id: "Alumni global" }, note: { en: "Across 6 continents, 55 countries", id: "Di 6 benua, 55 negara" } },
  { value: 430, suffix: "+", label: { en: "National partners", id: "Mitra nasional" }, note: { en: "Industry, government, institutions", id: "Industri, pemerintah, institusi" } },
  { value: 180, suffix: "+", label: { en: "International partners", id: "Mitra internasional" }, note: { en: "From 33 countries", id: "Dari 33 negara" } },
  { value: 65, suffix: "+", label: { en: "Labs & studios", id: "Laboratorium & studio" }, note: { en: "Industry-standard facilities", id: "Fasilitas berstandar industri" } },
];

export const statsSource: L = {
  en: "UK Petra Prospectus 2026 · International Office, June 2026 · Quality Assurance Office",
  id: "Prospektus UK Petra 2026 · Kantor Urusan Internasional, Juni 2026 · Kantor Penjaminan Mutu",
};

export const rankings = [
  { rank: "#1", label: { en: "Best private university in East Java", id: "Universitas swasta terbaik di Jawa Timur" }, source: "QS WUR 2026" },
  { rank: "#20", label: { en: "In Indonesia", id: "Di Indonesia" }, source: "QS WUR 2026" },
  { rank: "#99", label: { en: "Top 100, South-Eastern Asia", id: "Top 100 Asia Tenggara" }, source: "QS South-Eastern Asia" },
  { rank: "#526", label: { en: "In Asia", id: "Di Asia" }, source: "QS Asia 2026" },
] satisfies { rank: string; label: L; source: string }[];

export const rankingNote: L = {
  en: "One of only eight private universities in Indonesia with a global QS rank.",
  id: "Satu dari hanya delapan universitas swasta di Indonesia dengan peringkat global QS.",
};

export const standing: { title: string; body: L }[] = [
  { title: "BAN-PT “Unggul”", body: { en: "“Excellent”, the highest national institutional accreditation.", id: "Akreditasi institusi tertinggi tingkat nasional." } },
  { title: "#524 QS Sustainability (Asia)", body: { en: "A green-campus record we can evidence.", id: "Rekam jejak kampus hijau yang terukur." } },
  { title: "MANDIRI research cluster", body: { en: "Independent research status from the Ministry of Higher Education.", id: "Klaster riset Mandiri dari Kementerian Pendidikan Tinggi." } },
];

export const accreditations = [
  {
    body: "AQAS · Germany",
    standard: { en: "European Standards (ESG)", id: "Standar Eropa (ESG)" },
    scope: { en: "Visual Communication Design · Interior Design", id: "Desain Komunikasi Visual · Desain Interior" },
    logo: media.brand.aqas,
  },
  {
    body: "IABEE",
    standard: { en: "Washington Accord", id: "Washington Accord" },
    scope: { en: "Civil · Electrical · Mechanical · Industrial · Informatics", id: "Sipil · Elektro · Mesin · Industri · Informatika" },
    logo: media.brand.iabee,
  },
  {
    body: "KAAB",
    standard: { en: "Canberra Accord", id: "Canberra Accord" },
    scope: { en: "Architecture, bachelor's and postgraduate", id: "Arsitektur, sarjana dan pascasarjana" },
    logo: null,
  },
] satisfies { body: string; standard: L; scope: L; logo: { src: string; alt: string } | null }[];

export const badges = [media.brand["qs-world"], media.brand["qs-asia"], media.brand["qs-sea-top100"], media.brand["best-private"]];

export const campus = {
  address: "Siwalankerto 121–131, Surabaya 60236, East Java, Indonesia",
  intro: {
    en: "A Christian university in the heart of Indonesia's second-largest city, the gateway to East Java and eastern Indonesia.",
    id: "Universitas Kristen di jantung kota terbesar kedua di Indonesia, gerbang menuju Jawa Timur dan Indonesia bagian timur.",
  } satisfies L,
  city: {
    en: "Surabaya is the capital of East Java, a port city of about 3 million people. The main campus sits in Siwalankerto, South Surabaya, about 10 km from the city centre.",
    id: "Surabaya adalah ibu kota Jawa Timur, kota pelabuhan berpenduduk sekitar 3 juta jiwa. Kampus utama berada di Siwalankerto, Surabaya Selatan, sekitar 10 km dari pusat kota.",
  } satisfies L,
  maps: [
    { image: media.brand["map-indonesia"], label: { en: "Indonesia", id: "Indonesia" } },
    { image: media.brand["map-eastjava"], label: { en: "East Java", id: "Jawa Timur" } },
    { image: media.brand["map-surabaya"], label: { en: "Surabaya", id: "Surabaya" } },
  ] satisfies { image: { src: string; alt: string }; label: L }[],
  /** Points on the interactive campus map. Coordinates from OpenStreetMap (Nominatim), checked Oct 2026. */
  pois: [
    { id: "campus", kind: "campus", lat: -7.33947, lng: 112.73756, name: { en: "Petra Christian University", id: "Universitas Kristen Petra" }, body: { en: "Main campus, Siwalankerto 121–131. The International Office is on campus.", id: "Kampus utama, Siwalankerto 121–131. Kantor Urusan Internasional ada di kampus." } },
    { id: "airport", kind: "transport", lat: -7.38071, lng: 112.78549, name: { en: "Juanda International Airport (SUB)", id: "Bandara Internasional Juanda (SUB)" }, body: { en: "About 25 minutes by car. Petramates can meet you at arrivals.", id: "Sekitar 25 menit dengan mobil. Petramate bisa menjemput Anda di kedatangan." } },
    { id: "gubeng", kind: "transport", lat: -7.26531, lng: 112.75264, name: { en: "Gubeng railway station", id: "Stasiun Gubeng" }, body: { en: "Trains to Malang, Banyuwangi (for Bali), Yogyakarta and Jakarta.", id: "Kereta ke Malang, Banyuwangi (ke Bali), Yogyakarta dan Jakarta." } },
    { id: "tunjungan", kind: "city", lat: -7.26239, lng: 112.73901, name: { en: "Tunjungan Plaza", id: "Tunjungan Plaza" }, body: { en: "The city's best-known shopping centre, on historic Jalan Tunjungan.", id: "Pusat perbelanjaan paling terkenal di kota, di Jalan Tunjungan yang bersejarah." } },
    { id: "pahlawan", kind: "city", lat: -7.24586, lng: 112.73782, name: { en: "Heroes Monument (Tugu Pahlawan)", id: "Tugu Pahlawan" }, body: { en: "Surabaya's landmark, remembering the Battle of Surabaya of 10 November 1945.", id: "Ikon Surabaya, mengenang Pertempuran Surabaya 10 November 1945." } },
    { id: "bromo", kind: "trip", lat: -7.94207, lng: 112.95298, name: { en: "Mount Bromo", id: "Gunung Bromo" }, body: { en: "Sunrise over the volcano — a favourite weekend trip for exchange students.", id: "Matahari terbit di atas gunung api — perjalanan akhir pekan favorit mahasiswa pertukaran." } },
  ] satisfies { id: string; kind: "campus" | "transport" | "city" | "trip"; lat: number; lng: number; name: L; body: L }[],
};

/** Petra history — wikipediaPetra source for 1951–1964, the deck for recent milestones. */
export const history = [
  { when: "1951", title: { en: "PPPK Petra founded", id: "PPPK Petra berdiri" }, body: { en: "The Christian education foundation behind Petra, in Surabaya", id: "Yayasan pendidikan Kristen di balik Petra, di Surabaya" } },
  { when: "1961", title: { en: "Petra Christian University", id: "Universitas Kristen Petra" }, body: { en: "Announced on 22 September, starting with the Faculty of Letters", id: "Diumumkan 22 September, diawali Fakultas Sastra" } },
  { when: "1962", title: { en: "Second faculty", id: "Fakultas kedua" }, body: { en: "Civil Engineering and Planning opens", id: "Teknik Sipil dan Perencanaan dibuka" } },
  { when: "2025", title: { en: "AI@PETRA", id: "AI@PETRA" }, body: { en: "Launched 1 August", id: "Diluncurkan 1 Agustus" } },
  { when: "2026", title: { en: "QS WUR 2026", id: "QS WUR 2026" }, body: { en: "#1 private university in East Java; Drone Academy opens", id: "Universitas swasta #1 di Jawa Timur; Drone Academy dibuka" } },
] satisfies { when: string; title: L; body: L }[];

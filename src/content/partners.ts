import type { L } from "@/lib/i18n";
import { media } from "./media.generated";

type Img = { src: string; alt: string };

export const SURABAYA = { lat: -7.2575, lng: 112.7521 };

/** Slides 33–35. Shares from the IO Partnership List (agreements in force, July 2026). */
export const networkTotals = [
  { value: 180, suffix: "+", label: { en: "International partners", id: "Mitra internasional" } },
  { value: 33, label: { en: "Countries", id: "Negara" } },
  { value: 17, label: { en: "In the QS top 500", id: "Di QS top 500" } },
  { value: 613, label: { en: "Recorded areas of work", id: "Bidang kerja sama tercatat" } },
  { value: 1299, label: { en: "Faculty partnership links", id: "Tautan kemitraan fakultas" } },
] satisfies { value: number; suffix?: string; label: L }[];

export type Share = { label: L; value: number; color: string };

export const byRegion: Share[] = [
  { label: { en: "Greater China", id: "Tiongkok Raya" }, value: 26.7, color: "#ffbc00" },
  { label: { en: "ASEAN", id: "ASEAN" }, value: 26.2, color: "#45b8bc" },
  { label: { en: "Asia · other", id: "Asia · lainnya" }, value: 23.5, color: "#ec008c" },
  { label: { en: "Europe", id: "Eropa" }, value: 15.0, color: "#3880d0" },
  { label: { en: "Oceania", id: "Oseania" }, value: 5.9, color: "#be93e4" },
  { label: { en: "North America", id: "Amerika Utara" }, value: 2.7, color: "#f37121" },
];

export const byScope: Share[] = [
  { label: { en: "Teaching & learning", id: "Pengajaran & pembelajaran" }, value: 49.4, color: "#ffbc00" },
  { label: { en: "Research", id: "Riset" }, value: 21.7, color: "#45b8bc" },
  { label: { en: "Student affairs", id: "Kemahasiswaan" }, value: 18.9, color: "#ec008c" },
  { label: { en: "Institutional", id: "Kelembagaan" }, value: 5.9, color: "#3880d0" },
  { label: { en: "Community outreach", id: "Pengabdian masyarakat" }, value: 4.1, color: "#be93e4" },
];

export const byFaculty: Share[] = [
  { label: { en: "SBM", id: "SBM" }, value: 20.0, color: "#ec008c" },
  { label: { en: "FHIK", id: "FHIK" }, value: 19.2, color: "#be93e4" },
  { label: { en: "FTSP", id: "FTSP" }, value: 17.8, color: "#ffbc00" },
  { label: { en: "FTI", id: "FTI" }, value: 16.6, color: "#45b8bc" },
  { label: { en: "FKIP", id: "FKIP" }, value: 14.7, color: "#6aaa43" },
  { label: { en: "FKG", id: "FKG" }, value: 5.9, color: "#3880d0" },
  { label: { en: "FK", id: "FK" }, value: 5.8, color: "#f37121" },
];

export const mostPartnered = [
  { name: "Dongseo University", country: "Korea", links: 15 },
  { name: "NUAA", country: "China", links: 11 },
  { name: "Saxion", country: "Netherlands", links: 10 },
  { name: "Guangxi Normal University", country: "China", links: 6 },
  { name: "Woosong University", country: "Korea", links: 6 },
  { name: "NTUST", country: "Taiwan", links: 4 },
  { name: "Bangkok University", country: "Thailand", links: 4 },
  { name: "Fontys", country: "Netherlands", links: 4 },
];

export type Region = "Greater China" | "ASEAN" | "Asia · other" | "Europe" | "Oceania" | "North America" | "Other";

export type Partner = {
  name: string;
  country: string;
  region: Region;
  lat: number;
  lng: number;
  qs?: number;
  tags: ("Joint degree" | "Exchange" | "Consortium" | "EU project" | "Most partnered" | "Summer")[];
  logo?: Img;
};

/**
 * Partners named in the deck. This is a highlight list, not the full register
 * of 180+ agreements, which the International Office keeps.
 * QS ranks are QS World University Rankings 2026 as printed in the deck.
 */
export const partners: Partner[] = [
  { name: "Fudan University", country: "China", region: "Greater China", lat: 31.3, lng: 121.5, qs: 26, tags: [] },
  { name: "Monash University", country: "Australia", region: "Oceania", lat: -37.91, lng: 145.13, qs: 31, tags: [] },
  { name: "Yonsei University", country: "South Korea", region: "Asia · other", lat: 37.57, lng: 126.94, qs: 42, tags: [] },
  { name: "City University of Hong Kong", country: "Hong Kong", region: "Greater China", lat: 22.34, lng: 114.17, qs: 52, tags: [] },
  { name: "Macquarie University", country: "Australia", region: "Oceania", lat: -33.77, lng: 151.11, qs: 126, tags: [] },
  { name: "Universiti Sains Malaysia", country: "Malaysia", region: "ASEAN", lat: 5.36, lng: 100.3, qs: 128, tags: [] },
  { name: "Massey University", country: "New Zealand", region: "Oceania", lat: -40.39, lng: 175.62, qs: 215, tags: [] },
  { name: "Queensland University of Technology", country: "Australia", region: "Oceania", lat: -27.48, lng: 153.03, qs: 240, tags: [] },
  { name: "UCSI University", country: "Malaysia", region: "ASEAN", lat: 3.08, lng: 101.73, qs: 282, tags: [] },
  { name: "Swinburne University of Technology", country: "Australia", region: "Oceania", lat: -37.82, lng: 145.04, qs: 291, tags: [] },
  { name: "University of Tasmania", country: "Australia", region: "Oceania", lat: -42.9, lng: 147.32, qs: 311, tags: [] },
  { name: "Sunway University", country: "Malaysia", region: "ASEAN", lat: 3.07, lng: 101.6, qs: 354, tags: [] },
  { name: "NTUST", country: "Taiwan", region: "Greater China", lat: 25.01, lng: 121.54, qs: 379, tags: ["Joint degree", "Most partnered"], logo: media.logos.ntust },
  { name: "MUST Macau", country: "Macau", region: "Greater China", lat: 22.16, lng: 113.56, qs: 398, tags: [] },
  { name: "National Sun Yat-sen University", country: "Taiwan", region: "Greater China", lat: 22.63, lng: 120.27, qs: 438, tags: ["Exchange"] },
  { name: "Pusan National University", country: "South Korea", region: "Asia · other", lat: 35.23, lng: 129.08, qs: 449, tags: [] },
  { name: "Iowa State University", country: "USA", region: "North America", lat: 42.03, lng: -93.65, qs: 540, tags: ["Joint degree"], logo: media.logos["iowa-state"] },
  { name: "Dongseo University", country: "South Korea", region: "Asia · other", lat: 35.15, lng: 129.0, tags: ["Joint degree", "Most partnered", "Summer"], logo: media.logos.dongseo },
  { name: "NUAA", country: "China", region: "Greater China", lat: 32.03, lng: 118.82, tags: ["Joint degree", "Most partnered"], logo: media.logos.nuaa },
  { name: "Saxion University of Applied Sciences", country: "Netherlands", region: "Europe", lat: 52.22, lng: 6.89, tags: ["Joint degree", "Most partnered"], logo: media.logos.saxion },
  { name: "Guangxi Normal University", country: "China", region: "Greater China", lat: 25.27, lng: 110.29, tags: ["Most partnered"] },
  { name: "Woosong University", country: "South Korea", region: "Asia · other", lat: 36.34, lng: 127.45, tags: ["Most partnered"] },
  { name: "Bangkok University", country: "Thailand", region: "ASEAN", lat: 14.04, lng: 100.61, tags: ["Most partnered", "Summer"] },
  { name: "Fontys University of Applied Sciences", country: "Netherlands", region: "Europe", lat: 51.45, lng: 5.48, tags: ["Most partnered"] },
  { name: "Wenzao Ursuline University of Languages", country: "Taiwan", region: "Greater China", lat: 22.67, lng: 120.31, tags: ["Joint degree"], logo: media.logos.wenzao },
  { name: "I-Shou University", country: "Taiwan", region: "Greater China", lat: 22.73, lng: 120.4, tags: ["Joint degree"], logo: media.logos["i-shou"] },
  { name: "Yangzhou University", country: "China", region: "Greater China", lat: 32.39, lng: 119.42, tags: ["Joint degree"], logo: media.logos.yangzhou },
  { name: "IMI Switzerland", country: "Switzerland", region: "Europe", lat: 47.05, lng: 8.31, tags: ["Joint degree"] },
  { name: "TAR UMT", country: "Malaysia", region: "ASEAN", lat: 3.22, lng: 101.73, tags: ["Joint degree"], logo: media.logos["tar-umt"] },
  { name: "Korea University", country: "South Korea", region: "Asia · other", lat: 37.59, lng: 127.03, tags: ["Exchange"] },
  { name: "UniMAP", country: "Malaysia", region: "ASEAN", lat: 6.46, lng: 100.35, tags: ["Summer", "Consortium"] },
  { name: "Josai International University", country: "Japan", region: "Asia · other", lat: 35.5, lng: 140.23, tags: ["Summer", "Consortium"] },
  { name: "University of Jyväskylä", country: "Finland", region: "Europe", lat: 62.24, lng: 25.75, tags: ["EU project"], logo: media.logos.jyvaskyla },
  { name: "FH Joanneum", country: "Austria", region: "Europe", lat: 47.07, lng: 15.44, tags: ["EU project"], logo: media.logos["fh-joanneum"] },
  { name: "NIRMA University", country: "India", region: "Asia · other", lat: 23.13, lng: 72.54, tags: ["EU project"], logo: media.logos.nirma },
  { name: "Somaiya University", country: "India", region: "Asia · other", lat: 19.07, lng: 72.9, tags: ["EU project"] },
  { name: "Prince of Songkla University", country: "Thailand", region: "ASEAN", lat: 7.01, lng: 100.5, tags: ["EU project"], logo: media.logos.psu },
  { name: "Payap University", country: "Thailand", region: "ASEAN", lat: 18.79, lng: 99.03, tags: ["EU project"], logo: media.logos.payap },
  { name: "Universitas Sumatera Utara", country: "Indonesia", region: "ASEAN", lat: 3.56, lng: 98.66, tags: ["EU project"], logo: media.logos.usu },
  { name: "FAU Erlangen-Nürnberg", country: "Germany", region: "Europe", lat: 49.6, lng: 11.0, tags: ["EU project"], logo: media.logos.fau },
  { name: "Danube Private University", country: "Austria", region: "Europe", lat: 48.41, lng: 15.6, tags: ["EU project"], logo: media.logos.danube },
  { name: "CIC biomaGUNE", country: "Spain", region: "Europe", lat: 43.29, lng: -1.98, tags: ["EU project"], logo: media.logos["cic-biomagune"] },
  { name: "Trakia University", country: "Bulgaria", region: "Europe", lat: 42.42, lng: 25.63, tags: ["EU project"], logo: media.logos.trakia },
  { name: "University of Rome Tor Vergata", country: "Italy", region: "Europe", lat: 41.85, lng: 12.6, tags: ["EU project"], logo: media.logos["tor-vergata"] },
  { name: "mAIbe S.R.L.", country: "Italy", region: "Europe", lat: 41.9, lng: 12.5, tags: ["EU project"], logo: media.logos.maibe },
  { name: "Technion – Israel Institute of Technology", country: "Israel", region: "Asia · other", lat: 32.78, lng: 35.02, tags: ["EU project"], logo: media.logos.technion },
  { name: "Universidad Nacional del Sur", country: "Argentina", region: "Other", lat: -38.7, lng: -62.27, tags: ["EU project"], logo: media.logos.uns },
  { name: "Universidad de Buenos Aires", country: "Argentina", region: "Other", lat: -34.6, lng: -58.37, tags: ["EU project"], logo: media.logos.uba },
  { name: "Chulalongkorn University", country: "Thailand", region: "ASEAN", lat: 13.74, lng: 100.53, tags: ["EU project"], logo: media.logos.chulalongkorn },
  { name: "Prove Innomed", country: "Thailand", region: "ASEAN", lat: 13.76, lng: 100.5, tags: ["EU project"], logo: media.logos.innomed },
  { name: "Mahidol University", country: "Thailand", region: "ASEAN", lat: 13.79, lng: 100.32, tags: ["EU project"], logo: media.logos.mahidol },
  { name: "University of Mauritius", country: "Mauritius", region: "Other", lat: -20.24, lng: 57.5, tags: ["EU project"], logo: media.logos.mauritius },
];

export const qsNote: L = {
  en: "Iowa State University is listed at #540 in the source deck, outside the QS top-500 band. The International Office is confirming the figure.",
  id: "Iowa State University tercantum di peringkat #540 pada sumber, di luar kelompok QS top 500. KUI sedang mengonfirmasi angka ini.",
};

/** Consortiums named in KUI's spec (WEBSITE IO, Sheet1 → Partners). */
export const consortia = [
  { name: "ACUCA", full: "Association of Christian Universities and Colleges in Asia", body: { en: "A network of Christian universities across Asia, linking Petra to sister institutions for exchange and leadership programmes.", id: "Jejaring universitas Kristen se-Asia yang menghubungkan Petra dengan institusi saudara untuk pertukaran dan program kepemimpinan." } },
  { name: "GHAS", full: "Global Hakka Studies network", body: { en: "An international research network on Hakka studies, alongside Petra's Chinese Indonesian Studies centre (est. 2011).", id: "Jejaring riset internasional tentang studi Hakka, sejalan dengan Pusat Studi Tionghoa Indonesia Petra (berdiri 2011)." }, confirm: true },
  { name: "P2A", full: "P2A", body: { en: "A consortium in which Petra is a member. A full description is pending from the International Office.", id: "Konsorsium tempat Petra menjadi anggota. Deskripsi lengkap menunggu dari KUI." }, confirm: true },
  { name: "BKPTKI", full: "Badan Kerja Sama Perguruan Tinggi Kristen Indonesia", body: { en: "The association of Indonesian Christian higher-education institutions, including a local student exchange among members.", id: "Badan kerja sama perguruan tinggi Kristen di Indonesia, termasuk pertukaran mahasiswa antaranggota." } },
  { name: "NUNI", full: "NUNI", body: { en: "A university network in which Petra is a member, with student exchange among members. A full description is pending from the International Office.", id: "Jejaring universitas tempat Petra menjadi anggota, dengan pertukaran mahasiswa antaranggota. Deskripsi lengkap menunggu dari KUI." }, confirm: true },
] satisfies { name: string; full: string; body: L; confirm?: boolean }[];

export type Continent = "Asia" | "Europe" | "Oceania" | "Americas" | "Africa";
export const continentLabels: Record<Continent, L> = {
  Asia: { en: "Asia", id: "Asia" },
  Europe: { en: "Europe", id: "Eropa" },
  Oceania: { en: "Oceania", id: "Oseania" },
  Americas: { en: "Americas", id: "Amerika" },
  Africa: { en: "Africa", id: "Afrika" },
};
const continentOf: Record<string, Continent> = {
  Australia: "Oceania", "New Zealand": "Oceania",
  USA: "Americas", Argentina: "Americas",
  Netherlands: "Europe", Switzerland: "Europe", Finland: "Europe", Austria: "Europe", Germany: "Europe", Spain: "Europe", Bulgaria: "Europe", Italy: "Europe",
  Mauritius: "Africa",
};
export function continent(country: string): Continent {
  return continentOf[country] ?? "Asia";
}

/** Domestic partners. Totals from the deck; the full list is pending from KUI. */
export const domestic = {
  total: 430,
  breakdown: [
    { value: "165+", label: { en: "National industry", id: "Industri nasional" } },
    { value: "15+", label: { en: "Government", id: "Pemerintah" } },
    { value: "15+", label: { en: "International companies", id: "Perusahaan internasional" } },
  ] satisfies { value: string; label: L }[],
};

export const industry = {
  totals: { en: "165+ national · 15+ government · 15+ international", id: "165+ nasional · 15+ pemerintah · 15+ internasional" } satisfies L,
  names: ["BCA", "Wings", "Polygon", "Schneider Electric", "Nutrifood", "SPIL", "Kempinski", "Astra"],
};

/** Slides 36–38: EU-funded projects. */
export const euProjects = [
  {
    programme: "Erasmus+",
    action: "Capacity Building in Higher Education",
    title: "Modern Academic Platform for Smart and Sustainable Cities Development in Asia and Southeast Asia Cities",
    institutions: 8,
    countries: 5,
    image: media.labs["city-model"],
    members: [
      { country: "Finland", name: "University of Jyväskylä", logo: media.logos.jyvaskyla },
      { country: "Austria", name: "FH Joanneum", logo: media.logos["fh-joanneum"] },
      { country: "India", name: "NIRMA University", logo: media.logos.nirma },
      { country: "India", name: "Somaiya University" },
      { country: "Thailand", name: "Prince of Songkla University", logo: media.logos.psu },
      { country: "Thailand", name: "Payap University", logo: media.logos.payap },
      { country: "Indonesia", name: "Petra Christian University", logo: media.brand["petra-seal"] },
      { country: "Indonesia", name: "Universitas Sumatera Utara", logo: media.logos.usu },
    ],
  },
  {
    programme: "Horizon Europe",
    action: "Marie Skłodowska-Curie Actions",
    title: "Engineered Erythrocytes and Erythrocyte Extracellular Vesicles for Advanced Photodynamic and Sonodynamic Therapy",
    institutions: 14,
    countries: 10,
    image: media.faculty.medicine,
    members: [
      { country: "Germany", name: "FAU Erlangen-Nürnberg", logo: media.logos.fau },
      { country: "Austria", name: "Danube Private University", logo: media.logos.danube },
      { country: "Spain", name: "CIC biomaGUNE", logo: media.logos["cic-biomagune"] },
      { country: "Bulgaria", name: "Trakia University", logo: media.logos.trakia },
      { country: "Italy", name: "Rome Tor Vergata", logo: media.logos["tor-vergata"] },
      { country: "Italy", name: "mAIbe S.R.L.", logo: media.logos.maibe },
      { country: "Israel", name: "Technion", logo: media.logos.technion },
      { country: "Argentina", name: "Univ. Nacional del Sur", logo: media.logos.uns },
      { country: "Argentina", name: "Univ. Buenos Aires", logo: media.logos.uba },
      { country: "Thailand", name: "Chulalongkorn University", logo: media.logos.chulalongkorn },
      { country: "Thailand", name: "Prove Innomed", logo: media.logos.innomed },
      { country: "Thailand", name: "Mahidol University", logo: media.logos.mahidol },
      { country: "Mauritius", name: "University of Mauritius", logo: media.logos.mauritius },
      { country: "Indonesia", name: "Petra Christian University", logo: media.brand["petra-seal"] },
    ],
  },
] satisfies {
  programme: string;
  action: string;
  title: string;
  institutions: number;
  countries: number;
  image: Img;
  members: { country: string; name: string; logo?: Img }[];
}[];

/** Slide 39: eight ways to work with Petra. */
export const collaborationWays = [
  { title: { en: "Student exchange", id: "Pertukaran mahasiswa" }, body: { en: "A semester with full credit transfer", id: "Satu semester dengan transfer kredit penuh" }, icon: "repeat" },
  { title: { en: "Joint & dual degree", id: "Gelar bersama & ganda" }, body: { en: "2+2 and 3+1, two awards", id: "2+2 dan 3+1, dua gelar" }, icon: "graduation" },
  { title: { en: "International internship", id: "Magang internasional" }, body: { en: "Placements with our partners, or yours", id: "Penempatan di mitra kami, atau mitra Anda" }, icon: "briefcase" },
  { title: { en: "Tailor-made programmes", id: "Program khusus" }, body: { en: "Short courses built for your cohort", id: "Kursus singkat untuk kelompok Anda" }, icon: "ruler" },
  { title: { en: "Research collaboration", id: "Kolaborasi riset" }, body: { en: "Joint projects and co-authored papers", id: "Proyek bersama dan publikasi bersama" }, icon: "flask" },
  { title: { en: "Joint lecture", id: "Kuliah bersama" }, body: { en: "Co-taught, online or on campus", id: "Diajar bersama, daring atau di kampus" }, icon: "presentation" },
  { title: { en: "Joint conference", id: "Konferensi bersama" }, body: { en: "Co-hosted academic events", id: "Acara akademik bersama" }, icon: "mic" },
  { title: { en: "Joint programmes", id: "Program bersama" }, body: { en: "Summer schools and consortia", id: "Summer school dan konsorsium" }, icon: "sun" },
] satisfies { title: L; body: L; icon: string }[];

export const logoStrip = [
  media.logos.nuaa, media.logos.dongseo, media.logos.saxion, media.logos.ntust, media.logos["iowa-state"], media.logos.wenzao,
  media.logos["tar-umt"], media.logos["i-shou"], media.logos.chulalongkorn, media.logos.mahidol, media.logos.fau, media.logos.technion,
  media.logos.jyvaskyla, media.logos["fh-joanneum"], media.logos["tor-vergata"], media.logos.psu,
];

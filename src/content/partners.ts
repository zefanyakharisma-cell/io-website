import type { L } from "@/lib/i18n";
import { media } from "./media.generated";
import { nationalPartners, type NationalKind } from "./national-partners.generated";

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


/** Consortiums, with descriptions and websites from KUI's spec (WEBSITE IO, NEW UPDATED → Global Collaboration). */
export const consortia = [
  { name: "ACUCA", full: "Association of Christian Universities and Colleges in Asia", website: "https://acuca.asia/", logo: null, body: { en: "A network of Christian universities across Asia, linking Petra to sister institutions for exchange and leadership programmes.", id: "Jejaring universitas Kristen se-Asia yang menghubungkan Petra dengan institusi saudara untuk pertukaran dan program kepemimpinan." } },
  { name: "GHAS", full: "Consortium of Global Hakka Studies", website: "https://ghas.hakka.nycu.edu.tw/", logo: { src: "/images/logos/consortia/ghas.webp", alt: "GHAS logo" }, body: { en: "An international platform for Hakka and ethnic studies, founded in 2019 at National Chiao Tung University with Petra among its overseas founding members.", id: "Platform internasional untuk studi Hakka dan etnis, didirikan 2019 di National Chiao Tung University dengan Petra sebagai salah satu anggota pendiri luar negeri." } },
  { name: "P2A", full: "Passage to ASEAN", website: "https://passagetoasean.org/", logo: { src: "/images/logos/consortia/p2a.webp", alt: "Passage to ASEAN logo" }, body: { en: "A network of universities across ASEAN, founded in 2012, for student and staff exchange and cooperation among members.", id: "Jejaring universitas se-ASEAN, berdiri 2012, untuk pertukaran mahasiswa dan staf serta kerja sama antaranggota." } },
  { name: "BKPTKI", full: "Badan Kerja Sama Perguruan Tinggi Kristen di Indonesia", website: "https://bkptki.org/", logo: null, body: { en: "The association of Indonesian Christian higher-education institutions, including a local student exchange among members.", id: "Badan kerja sama perguruan tinggi Kristen di Indonesia, termasuk pertukaran mahasiswa antaranggota." } },
  { name: "NUNI", full: "Nationwide University Network in Indonesia", website: "https://nuni.or.id/", logo: null, body: { en: "A network of Indonesian universities founded in 2011 for student and faculty mobility and joint research, including a credit-earning exchange semester.", id: "Jejaring universitas Indonesia yang berdiri 2011 untuk mobilitas mahasiswa dan dosen serta riset bersama, termasuk semester pertukaran berkredit." } },
  { name: "AUPF", full: "Asian University Presidents Forum", website: "", logo: null, body: { en: "A forum where university leaders across Asia exchange ideas and build cooperation. It was founded in 2002 and Petra hosted it in Surabaya in 2018.", id: "Forum tempat para pemimpin universitas se-Asia bertukar gagasan dan membangun kerja sama. Forum ini berdiri pada 2002 dan Petra menjadi tuan rumah di Surabaya pada 2018." } },
] satisfies { name: string; full: string; website: string; logo: Img | null; body: L; confirm?: boolean }[];

/**
 * A selection of named domestic partners: industry names from the deck plus
 * publicly announced agreements (sources in docs/sources.md).
 */
export const domesticPartners: { name: string; kind: NationalKind; website: string }[] = [
  { name: "Universitas Gadjah Mada", kind: "University", website: "https://ugm.ac.id/" },
  { name: "Monash University, Indonesia", kind: "University", website: "https://www.monash.edu/indonesia" },
  { name: "Universitas Sumatera Utara", kind: "University", website: "https://www.usu.ac.id/" },
  { name: "Bank Jatim", kind: "Government", website: "https://www.bankjatim.co.id/" },
  { name: "BCA", kind: "Industry", website: "https://www.bca.co.id/" },
  { name: "Astra", kind: "Industry", website: "https://www.astra.co.id/" },
  { name: "Maspion Group", kind: "Industry", website: "https://www.maspion.com/" },
  { name: "Wings", kind: "Industry", website: "https://www.wingscorp.com/" },
  { name: "Polygon", kind: "Industry", website: "https://www.polygonbikes.com/" },
  { name: "Schneider Electric", kind: "Industry", website: "https://www.se.com/id/" },
  { name: "Nutrifood", kind: "Industry", website: "https://www.nutrifood.co.id/" },
  { name: "SPIL", kind: "Industry", website: "https://www.spil.co.id/" },
  { name: "Kempinski", kind: "Industry", website: "https://www.kempinski.com/" },
];

/** Logo files whose partner is already in domesticPartners under a shorter name. */
const sameAs: Record<string, string> = {
  "Yayasan Monash University Indonesia": "Monash University, Indonesia",
  "PT Bank Pembangunan Daerah Jawa Timur Tbk (Bank Jatim)": "Bank Jatim",
  "Maspion Group": "Maspion Group",
  "Wings Group Surabaya": "Wings",
  "PT. Graha Alam Lestari (The Apurva Kempinski Bali)": "Kempinski",
};

/**
 * Every named national partner: the logos supplied by KUI
 * (scripts/build-partner-logos.mjs) plus the publicly announced partners above.
 */
export const nationalList: { name: string; kind: NationalKind; website?: string; logo?: Img }[] = [
  ...nationalPartners.map((n) => {
    const d = domesticPartners.find((x) => x.name === sameAs[n.name]);
    return { name: d?.name ?? n.name, kind: d?.kind ?? n.kind, website: d?.website, logo: n.logo };
  }),
  ...domesticPartners
    .filter((d) => !Object.values(sameAs).includes(d.name))
    .map((d) => ({ ...d, logo: d.name === "Universitas Sumatera Utara" ? media.logos.usu : undefined })),
].sort((a, b) => a.name.replace(/^PT\.? /, "").localeCompare(b.name.replace(/^PT\.? /, "")));

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

/** Global Collaboration (KUI spec, NEW UPDATED). */
export const collaboration = {
  headline: { en: "Connecting Petra to the World", id: "Menghubungkan Petra dengan Dunia" } satisfies L,
  intro: { en: "Petra Christian University works alongside leading universities, global companies, and reputable foundations to create opportunities that reach beyond borders, for our students, our faculty, and the communities we serve.", id: "Universitas Kristen Petra bekerja bersama universitas terkemuka, perusahaan global, dan yayasan bereputasi untuk menciptakan peluang yang melampaui batas, bagi mahasiswa, dosen, dan masyarakat yang kami layani." } satisfies L,
  partnersLine: { en: "We partner with QS Top 100 universities, multinational corporations, and established foundations across Indonesia and around the globe.", id: "Kami bermitra dengan universitas QS Top 100, perusahaan multinasional, dan yayasan ternama di Indonesia dan seluruh dunia." } satisfies L,
  waysIntro: { en: "From student exchanges to co-developed programs, we design collaborations that fit each partner's priorities.", id: "Dari pertukaran mahasiswa hingga program yang dikembangkan bersama, kami merancang kolaborasi sesuai prioritas setiap mitra." } satisfies L,
  consortiumIntro: { en: "Petra is an active member of regional and international consortia that advance higher education, research, and mobility.", id: "Petra adalah anggota aktif konsorsium regional dan internasional yang memajukan pendidikan tinggi, riset, dan mobilitas." } satisfies L,
  contactIntro: { en: "Interested in partnering with Petra? Our partnership team is ready to explore opportunities with you.", id: "Tertarik bermitra dengan Petra? Tim kemitraan kami siap menjajaki peluang bersama Anda." } satisfies L,
  emails: ["head-partnership@petra.ac.id", "staff-partnership@petra.ac.id"],
  phone: { display: "+62 31 298 3186", href: "tel:+62312983186" },
};

/** Ways We Collaborate (KUI spec). */
export const collaborationWays = [
  { title: { en: "Joint Degree", id: "Joint Degree" }, icon: "graduation" },
  { title: { en: "Student Exchange", id: "Pertukaran Mahasiswa" }, icon: "repeat" },
  { title: { en: "Internship", id: "Magang" }, icon: "briefcase" },
  { title: { en: "Research", id: "Riset" }, icon: "flask" },
  { title: { en: "Joint Lecture", id: "Kuliah Bersama" }, icon: "presentation" },
  { title: { en: "Joint Conference", id: "Konferensi Bersama" }, icon: "mic" },
  { title: { en: "Tailor-Made Program", id: "Program Tailor-Made" }, icon: "ruler" },
  { title: { en: "And other possibilities", id: "Dan peluang lainnya" }, icon: "sun" },
] satisfies { title: L; icon: string }[];

/** Logo wall for Global Networking: QS Top 100 universities, multinational companies and foundations. */
const mncNames = [
  "PT. Bosch Rexroth", "PT. Transforma Oto Prima (Mercedes-Benz)", "PT Grant Thornton Indonesia", "RSM Indonesia", "JW Marriott Hotel Surabaya",
  "Hotel Double Tree by Hilton Surabaya", "Sheraton Surabaya Hotel", "Four Points By Sheraton Surabaya", "PT Rekso Nasional Food (McDonald's)",
  "PT Odoo Software Indonesia", "PT. Charoen Popkphand Indonesia Tbk - Jawa Timur", "Kempinski", "Schneider Electric", "PT GoTo Gojek Tokopedia Tbk",
];
const foundationNames = ["Yayasan Monash University Indonesia", "Monash University, Indonesia"];
export const networkingLogos = {
  qsTop100: partners.filter((p) => p.qs && p.qs <= 100),
  multinationals: nationalList.filter((n) => mncNames.includes(n.name)),
  foundations: nationalList.filter((n) => foundationNames.includes(n.name)),
};

export const logoStrip = [
  media.logos.nuaa, media.logos.dongseo, media.logos.saxion, media.logos.ntust, media.logos["iowa-state"], media.logos.wenzao,
  media.logos["tar-umt"], media.logos["i-shou"], media.logos.chulalongkorn, media.logos.mahidol, media.logos.fau, media.logos.technion,
  media.logos.jyvaskyla, media.logos["fh-joanneum"], media.logos["tor-vergata"], media.logos.psu,
];

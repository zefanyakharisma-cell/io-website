import type { L } from "@/lib/i18n";
import { media } from "./media.generated";
import { webPhotos } from "./web-photos.generated";

type Img = { src: string; alt: string; width?: number; height?: number };

/** Slides 43–49: mobility at a glance, exchange route and signature programmes. */
export const mobilityGlance = {
  outbound: {
    countries: 10,
    continents: 3,
    named: ["Korea", "China", "Japan", "Malaysia", "Australia", "USA", "Netherlands"],
  },
  inbound: {
    countries: 6,
    continents: 2,
    named: ["China", "South Korea", "Japan", "India"],
  },
};

export const exchangeSteps = [
  { n: "01", title: { en: "Nomination", id: "Nominasi" }, body: { en: "by your home university", id: "oleh universitas asal Anda" } },
  { n: "02", title: { en: "Apply online", id: "Daftar online" }, body: { en: "credits agreed up front", id: "kredit disepakati sejak awal" } },
  { n: "03", title: { en: "Arrive", id: "Tiba di Surabaya" }, body: { en: "visa and housing support", id: "bantuan visa dan akomodasi" } },
] satisfies { n: string; title: L; body: L }[];

export const exchangePerks = [
  { title: { en: "Credits that count", id: "Kredit yang diakui" }, body: { en: "One or two semesters that count in full at home.", id: "Satu atau dua semester yang diakui penuh di kampus asal." } },
  { title: { en: "Indonesian from zero", id: "Bahasa Indonesia dari nol" }, body: { en: "Language classes built on the national BIPA framework.", id: "Kelas bahasa berbasis kerangka nasional BIPA." } },
  { title: { en: "A Petramate buddy", id: "Buddy Petramate" }, body: { en: "A Petranesian student who helps you settle in from day one.", id: "Mahasiswa Petra yang mendampingi Anda sejak hari pertama." } },
] satisfies { title: L; body: L }[];

export const applyUrl = "https://international-registration.petra.ac.id";

export type SignatureProgramme = {
  code: string;
  name: string;
  kicker: L;
  summary: L;
  facts: { value: string; label: L }[];
  highlights: L[];
  images: Img[];
  /** The programme's own website. */
  website: string;
};

export const signatureProgrammes: SignatureProgramme[] = [
  {
    code: "ICOP",
    website: "https://cop.petra.ac.id/",
    name: "International Community Outreach Program",
    kicker: { en: "Signature programme · since 1996", id: "Program unggulan · sejak 1996" },
    summary: {
      en: "Students live, build and teach alongside rural Indonesian communities. The work is set by the community, not the visiting cohort.",
      id: "Mahasiswa tinggal, membangun dan mengajar bersama masyarakat desa di Indonesia. Pekerjaannya ditentukan oleh masyarakat, bukan oleh peserta.",
    },
    facts: [
      { value: "30", label: { en: "years running", id: "tahun berjalan" } },
      { value: "3,500+", label: { en: "students", id: "mahasiswa" } },
      { value: "20", label: { en: "partner universities", id: "universitas mitra" } },
      { value: "13", label: { en: "countries", id: "negara" } },
    ],
    highlights: [
      { en: "Live with village host families", id: "Tinggal bersama keluarga di desa" },
      { en: "Build clean water and irrigation", id: "Membangun air bersih dan irigasi" },
      { en: "Teach local school children", id: "Mengajar anak-anak sekolah setempat" },
    ],
    images: [media.mobility["icop-river"], media.mobility["icop-teaching"], media.mobility["icop-buckets"], media.mobility["service-learning"]],
  },
  {
    code: "PSP",
    website: "https://psp.petra.ac.id/",
    name: "Petra Summer Program",
    kicker: { en: "Signature programme · summer immersion", id: "Program unggulan · imersi musim panas" },
    summary: {
      en: "Two to four credit-bearing weeks in Surabaya, taught in English, across four tracks.",
      id: "Dua hingga empat minggu berkredit di Surabaya, berbahasa Inggris, dalam empat peminatan.",
    },
    facts: [
      { value: "4", label: { en: "tracks", id: "peminatan" } },
      { value: "2–4", label: { en: "weeks", id: "minggu" } },
      { value: "EN", label: { en: "taught in English", id: "berbahasa Inggris" } },
      { value: "✓", label: { en: "credit-bearing", id: "berkredit" } },
    ],
    highlights: [
      { en: "Indonesian Culinary Arts: spice, technique and fusion labs", id: "Indonesian Culinary Arts: lab rempah, teknik dan fusion" },
      { en: "SPICE: industry site visits paired with a live challenge brief", id: "SPICE: kunjungan industri dan tantangan nyata" },
      { en: "Indonesian Language & Culture, from beginner level", id: "Bahasa & Budaya Indonesia, dari tingkat pemula" },
      { en: "Chinese-Indonesian Studies: Connecting the Bridge", id: "Studi Tionghoa-Indonesia: Connecting the Bridge" },
    ],
    images: [media.mobility["psp-batik"], media.mobility["psp-culinary"], media.mobility["psp-bus"], media.mobility["cultural-night"]],
  },
  {
    code: "SPECTRA",
    website: "https://indonesianspectrum.petra.ac.id/",
    name: "Indonesian Spectrum",
    kicker: { en: "Signature programme · culture & language", id: "Program unggulan · budaya & bahasa" },
    summary: {
      en: "Summer Program Exploration of Culture and the Indonesian Language: three modules taught in English.",
      id: "Summer Program Exploration of Culture and the Indonesian Language: tiga modul berbahasa Inggris.",
    },
    facts: [
      { value: "3", label: { en: "modules", id: "modul" } },
      { value: "BIPA", label: { en: "language framework", id: "kerangka bahasa" } },
      { value: "ASEAN", label: { en: "business focus", id: "fokus bisnis" } },
      { value: "EN", label: { en: "taught in English", id: "berbahasa Inggris" } },
    ],
    highlights: [
      { en: "ASEAN dynamics and cross-border strategy", id: "Dinamika ASEAN dan strategi lintas batas" },
      { en: "Indonesian through BIPA", id: "Bahasa Indonesia melalui BIPA" },
      { en: "Cultural immersion across Surabaya", id: "Imersi budaya di seluruh Surabaya" },
    ],
    images: [media.mobility["spectra-cooking"], media.mobility["spectra-museum"], media.mobility["museum-group"], media.mobility.bromo],
  },
  {
    code: "ASP",
    website: "https://asp.petra.ac.id/",
    name: "Asia Summer Program",
    kicker: { en: "Signature programme · regional consortium", id: "Program unggulan · konsorsium regional" },
    summary: {
      en: "Three credit-bearing weeks. Hosting rotates every year between the five founders, and credits transfer home.",
      id: "Tiga minggu berkredit. Tuan rumah bergilir setiap tahun di antara lima pendiri, dan kredit diakui di kampus asal.",
    },
    facts: [
      { value: "5", label: { en: "founders", id: "pendiri" } },
      { value: "4", label: { en: "countries", id: "negara" } },
      { value: "3", label: { en: "weeks", id: "minggu" } },
      { value: "✓", label: { en: "credit-bearing", id: "berkredit" } },
    ],
    highlights: [
      { en: "Petra (Indonesia), Dongseo (Korea), UniMAP (Malaysia), Bangkok University (Thailand), Josai International (Japan)", id: "Petra (Indonesia), Dongseo (Korea), UniMAP (Malaysia), Bangkok University (Thailand), Josai International (Jepang)" },
    ],
    images: [media.mobility["asp-group"], media.mobility["asp-thailand"], media.mobility["asp-event"]],
  },
];

/** Slides 40–41: joint and double degree partners. */
export type DegreeLevel = "B" | "M" | "D";
export const jointDegrees: {
  partner: string;
  country: string;
  logo?: Img;
  tracks: { scheme: "2+2" | "3+1" | "1+1"; level: DegreeLevel; faculty: "FTI" | "SBM" | "FHIK" | "FTSP"; programme: string }[];
}[] = [
  {
    partner: "NUAA",
    country: "China",
    logo: media.logos.nuaa,
    tracks: [
      { scheme: "2+2", level: "B", faculty: "FTI", programme: "Informatics" },
      { scheme: "2+2", level: "B", faculty: "FTI", programme: "Mechanical Eng." },
      { scheme: "2+2", level: "B", faculty: "FTI", programme: "Electrical Eng." },
      { scheme: "2+2", level: "B", faculty: "FTI", programme: "Int'l Business Engineering" },
      { scheme: "2+2", level: "B", faculty: "SBM", programme: "Int'l Business Accounting" },
    ],
  },
  {
    partner: "Dongseo University",
    country: "South Korea",
    logo: media.logos.dongseo,
    tracks: [
      { scheme: "3+1", level: "B", faculty: "FHIK", programme: "Visual Communication Design" },
      { scheme: "3+1", level: "B", faculty: "FHIK", programme: "Interior Design" },
      { scheme: "3+1", level: "B", faculty: "FHIK", programme: "English" },
      { scheme: "3+1", level: "B", faculty: "FHIK", programme: "Communication" },
      { scheme: "2+2", level: "B", faculty: "FHIK", programme: "IPDM" },
    ],
  },
  {
    partner: "Saxion",
    country: "Netherlands",
    logo: media.logos.saxion,
    tracks: [
      { scheme: "2+2", level: "B", faculty: "SBM", programme: "Int'l Business Management" },
      { scheme: "2+2", level: "B", faculty: "SBM", programme: "Finance & Investment" },
      { scheme: "2+2", level: "B", faculty: "SBM", programme: "Business Accounting" },
    ],
  },
  {
    partner: "Iowa State University",
    country: "USA",
    logo: media.logos["iowa-state"],
    tracks: [
      { scheme: "1+1", level: "M", faculty: "FTSP", programme: "Civil Engineering" },
      { scheme: "2+2", level: "D", faculty: "FTSP", programme: "Civil Engineering" },
    ],
  },
  {
    partner: "NTUST",
    country: "Taiwan",
    logo: media.logos.ntust,
    tracks: [
      { scheme: "2+2", level: "B", faculty: "FTSP", programme: "Civil Engineering" },
      { scheme: "1+1", level: "M", faculty: "FTSP", programme: "Civil Engineering" },
    ],
  },
  {
    partner: "Wenzao Ursuline",
    country: "Taiwan",
    logo: media.logos.wenzao,
    tracks: [
      { scheme: "3+1", level: "B", faculty: "FHIK", programme: "English" },
      { scheme: "1+1", level: "M", faculty: "FHIK", programme: "English Literature" },
    ],
  },
  { partner: "I-Shou University", country: "Taiwan", logo: media.logos["i-shou"], tracks: [{ scheme: "1+1", level: "M", faculty: "SBM", programme: "Management" }] },
  { partner: "Yangzhou University", country: "China", logo: media.logos.yangzhou, tracks: [{ scheme: "2+2", level: "B", faculty: "FHIK", programme: "Mandarin" }] },
  { partner: "IMI Switzerland", country: "Switzerland", tracks: [{ scheme: "3+1", level: "B", faculty: "SBM", programme: "Hotel Management" }] },
  { partner: "TAR UMT", country: "Malaysia", logo: media.logos["tar-umt"], tracks: [{ scheme: "1+1", level: "M", faculty: "SBM", programme: "Management" }] },
];

export const gallery: (Img & { caption: L })[] = [
  { ...media.mobility["international-day"], caption: { en: "International Day · Surabaya", id: "International Day · Surabaya" } },
  { ...media.mobility["icop-river"], caption: { en: "ICOP · Weihura irrigation", id: "ICOP · Irigasi Weihura" } },
  { ...media.mobility["icop-teaching"], caption: { en: "ICOP · SD Sumberjati", id: "ICOP · SD Sumberjati" } },
  { ...media.mobility["service-learning"], caption: { en: "Service-learning deployment", id: "Penerjunan service-learning" } },
  { ...webPhotos.petra["cop-2022"], caption: { en: "COP · Surabaya, 2022", id: "COP · Surabaya, 2022" } },
  { ...webPhotos.petra["cop-2018"], caption: { en: "COP · school mural, 2018", id: "COP · mural sekolah, 2018" } },
  { ...media.mobility.henna, caption: { en: "Summer programme immersion", id: "Imersi program musim panas" } },
  { ...media.mobility["exchange-group"], caption: { en: "Petranesians abroad", id: "Petranesian di luar negeri" } },
  { ...media.mobility.nsysu, caption: { en: "Exchange · NSYSU, Taiwan", id: "Pertukaran · NSYSU, Taiwan" } },
  { ...media.mobility["korea-university"], caption: { en: "Exchange · Korea University", id: "Pertukaran · Korea University" } },
  { ...media.mobility.saxion, caption: { en: "Joint degree · Saxion, NL", id: "Gelar bersama · Saxion, Belanda" } },
  { ...media.mobility.bromo, caption: { en: "Sunrise at Mount Bromo", id: "Matahari terbit di Gunung Bromo" } },
  { ...media.mobility["psp-batik"], caption: { en: "Batik workshop, PSP", id: "Workshop batik, PSP" } },
  { ...media.mobility["asp-thailand"], caption: { en: "Asia Summer Program, Thailand", id: "Asia Summer Program, Thailand" } },
];

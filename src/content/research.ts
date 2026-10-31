import type { L } from "@/lib/i18n";
import { media } from "./media.generated";

type Img = { src: string; alt: string; width?: number; height?: number };

/** Slide 62: research output, Scopus-indexed Q1–Q3 articles with verified DOIs. */
export const researchTotals = [
  { value: 36, label: { en: "Q1 articles", id: "Artikel Q1" }, note: { en: "Top 25% of their field", id: "25% teratas di bidangnya" } },
  { value: 52, label: { en: "Scopus articles", id: "Artikel Scopus" }, note: { en: "DOI and quartile verified", id: "DOI dan kuartil terverifikasi" } },
  { value: 15, label: { en: "Q2 / Q3 articles", id: "Artikel Q2 / Q3" }, note: { en: "Upper and middle quartiles", id: "Kuartil atas dan tengah" } },
  { value: 7, suffix: "/7", label: { en: "Faculties", id: "Fakultas" }, note: { en: "Every faculty publishes", id: "Setiap fakultas memublikasikan riset" } },
] satisfies { value: number; suffix?: string; label: L; note: L }[];

export const outputByFaculty = [
  { faculty: "FTI", count: 17 },
  { faculty: "SBM", count: 10 },
  { faculty: "FTSP", count: 9 },
  { faculty: "FHIK", count: 7 },
  { faculty: "FK", count: 6 },
  { faculty: "FKG", count: 3 },
  { faculty: "FKIP", count: 2 },
];

export const publishers = "Nature Portfolio · Elsevier · IEEE · Wiley · Springer · Taylor & Francis · Emerald · AGU · MDPI";

export const coauthorCountries = ["Australia", "Japan", "Korea", "Taiwan", "China", "Hungary", "Finland", "USA", "Singapore", "Vietnam"];

export const journals = [
  { name: "Civil Engineering Dimension", index: "Scopus · SINTA 1" },
  { name: "DIMENSI — Architecture & Built Environment", index: "Scopus since June 2026 · SINTA 2" },
];

/** Slides 51–54. */
export const featuredPapers = [
  { author: "Gregorius S. Budhi", dept: "Informatics", title: "Detecting Signs of Depression Using Social Media Texts Through an Ensemble of Ensemble Classifiers", photo: media.research.gregorius },
  { author: "Juliana Anggono", dept: "Mechanical Engineering", title: "Biobased PLA / sugarcane bagasse fiber composites: effect of fiber characteristics and interfacial adhesion on properties", photo: media.research.juliana },
  { author: "Yopi Yusuf Tanoto", dept: "Mechanical Engineering", title: "Exploring the impact of the ball milling process on the homogenous blending of polyamide 6-AZ61 magnesium powders", photo: media.research.yopi },
  { author: "Gan Shu San", dept: "Industrial Engineering", title: "What will lead Asian consumers into circular consumption? An empirical study of purchasing refurbished smartphones in Japan and Indonesia", photo: media.research["gan-shu-san"] },
  { author: "Cilcia Kusumastuti", dept: "Civil Engineering", title: "Revisiting model complexity: space-time correction of high dimensional variable sets in climate model simulations", photo: media.research.cilcia },
  { author: "Hedy C. Indrani", dept: "Interior Design", title: "Indoor soundscape model: assessing contextual factors in open-plan offices on university campuses in Surabaya, Indonesia", photo: media.research.hedy },
  { author: "Liem Satya Limanta", dept: "English Literature", title: "The Effects of Digital Storytelling on the Retention and Transferability of Student Knowledge", photo: media.research.liem },
] satisfies { author: string; dept: string; title: string; photo: Img }[];

/** Slides 54–56. */
export const studyCentres = [
  { name: { en: "Value Chain Studies", id: "Studi Rantai Nilai" }, body: { en: "Supply chains, ERP and green operations: the route industry uses to reach Petra.", id: "Rantai pasok, ERP dan operasi hijau: jalur industri menuju Petra." }, image: media.labs.automation },
  { name: { en: "Sustainability & Social Innovation", id: "Keberlanjutan & Inovasi Sosial" }, body: { en: "Sets the SDG agenda and runs the 40-hectare green campus.", id: "Menetapkan agenda SDG dan mengelola kampus hijau seluas 40 hektare." }, image: media.campus["tree-planting"] },
  { name: { en: "Chinese Indonesian Studies", id: "Studi Tionghoa Indonesia" }, body: { en: "Est. 2011: a special library collection and a summer-school strand.", id: "Berdiri 2011: koleksi perpustakaan khusus dan jalur summer school." }, image: media.research["chinese-studies"] },
  { name: { en: "AI & Computational Modeling", id: "AI & Pemodelan Komputasi" }, body: { en: "The research engine under AI@PETRA and the VR and CADE labs.", id: "Motor riset di balik AI@PETRA serta lab VR dan CADE." }, image: media.faculty["vr-studio"] },
] satisfies { name: L; body: L; image: Img }[];

export type Story = {
  id: string;
  field: L;
  person: string;
  title: L;
  intro: L;
  facts: { value: string; label: L }[];
  points: L[];
  images: Img[];
};

/** Slides 27–32: researchers in the community. */
export const stories: Story[] = [
  {
    id: "water",
    field: { en: "Civil Engineering", id: "Teknik Sipil" },
    person: "Dr. rer. nat. Ir. Surya Hermawan",
    title: { en: "Brackish water made drinkable", id: "Air payau menjadi layak minum" },
    intro: {
      en: "Surya Hermawan (Kiel University, 2014) heads FTSP's Environmental & Hydraulics Laboratory. His purifiers turn 6,000 mg/L brackish groundwater into water that coastal Sidoarjo households can drink.",
      id: "Surya Hermawan (Kiel University, 2014) memimpin Laboratorium Lingkungan & Hidraulika FTSP. Alat penjernihnya mengubah air tanah payau 6.000 mg/L menjadi air minum bagi rumah tangga pesisir Sidoarjo.",
    },
    facts: [
      { value: "−68%", label: { en: "dissolved solids after treatment", id: "zat terlarut setelah pengolahan" } },
      { value: "10×", label: { en: "water flow, 0.025 to 0.25 L/s", id: "debit air, 0,025 ke 0,25 L/dtk" } },
      { value: "100%", label: { en: "of households' clean-water need met", id: "kebutuhan air bersih rumah tangga terpenuhi" } },
      { value: "44", label: { en: "students installed the first five units, 2022", id: "mahasiswa memasang lima unit pertama, 2022" } },
    ],
    points: [
      { en: "BALAM: a village-maintained sand, carbon and kaolin filter", id: "BALAM: filter pasir, karbon dan kaolin yang dirawat warga desa" },
      { en: "MOMI: solar reverse osmosis with IoT monitoring, patent filed", id: "MOMI: reverse osmosis tenaga surya dengan pemantauan IoT, paten diajukan" },
      { en: "Josai International University, Japan, joined phase 2 in Dusun Tlocor", id: "Josai International University, Jepang, bergabung pada fase 2 di Dusun Tlocor" },
    ],
    images: [media.research["water-researcher"], media.research["water-install"], media.research["water-trailer"], media.labs["balam-trailer"]],
  },
  {
    id: "batik",
    field: { en: "Visual Communication Design", id: "Desain Komunikasi Visual" },
    person: "Dr. Aniendya Christianna",
    title: { en: "Batik as a shared colonial archive", id: "Batik sebagai arsip kolonial bersama" },
    intro: {
      en: "Aniendya Christianna reads Batik Belanda as evidence rather than ornament: a textile made largely by Indo-European and Peranakan Chinese women, in which colonial taste and colonial power were quietly worn.",
      id: "Aniendya Christianna membaca Batik Belanda sebagai bukti, bukan sekadar ornamen: kain yang dibuat terutama oleh perempuan Indo-Eropa dan Tionghoa Peranakan, tempat selera dan kuasa kolonial dikenakan diam-diam.",
    },
    facts: [
      { value: "2025", label: { en: "invited speaker, Indonesia–Netherlands week", id: "pembicara undangan, pekan Indonesia–Belanda" } },
      { value: "SDG 5 · 11", label: { en: "gender equality and heritage", id: "kesetaraan gender dan warisan budaya" } },
    ],
    points: [
      { en: "The buketan bouquet carries European collecting habits into cloth", id: "Motif buketan membawa kebiasaan koleksi Eropa ke dalam kain" },
      { en: "Soldiers and warships hide in floral borders", id: "Tentara dan kapal perang tersembunyi di bingkai bunga" },
      { en: "A Petra voice beside Leiden, the Rijksmuseum and KITLV", id: "Suara Petra bersama Leiden, Rijksmuseum dan KITLV" },
    ],
    images: [media.research.aniendya, media.research["batik-buketan"], media.research["batik-flora"]],
  },
  {
    id: "sik",
    field: { en: "Accounting · SIK incubator", id: "Akuntansi · Inkubator SIK" },
    person: "Dr. Pwee Leng",
    title: { en: "From risk research to businesses that grow", id: "Dari riset risiko ke bisnis yang bertumbuh" },
    intro: {
      en: "Pwee Leng holds degrees in economics, law and informatics, publishes on enterprise risk management in East Java's medium-sized firms, and chairs SIK, Petra's business technology incubator.",
      id: "Pwee Leng bergelar ekonomi, hukum dan informatika, meneliti manajemen risiko perusahaan menengah di Jawa Timur, dan memimpin SIK, inkubator bisnis teknologi Petra.",
    },
    facts: [
      { value: "35", label: { en: "MSMEs at the Glow Economy Expo, 17 Oct 2025", id: "UMKM di Glow Economy Expo, 17 Okt 2025" } },
      { value: "LEAP", label: { en: "bookkeeping to seed funding", id: "pembukuan hingga pendanaan awal" } },
    ],
    points: [
      { en: "Workshops with Martha Tilaar Group; Bank Jatim curated founders for financing", id: "Workshop bersama Martha Tilaar Group; Bank Jatim mengkurasi pendiri untuk pembiayaan" },
      { en: "MARVEL SEA mangrove eco-tourism in Wonorejo, with Wahana Visi", id: "Ekowisata mangrove MARVEL SEA di Wonorejo, bersama Wahana Visi" },
      { en: "Students from four disciplines; measured income gains for farmers", id: "Mahasiswa dari empat disiplin; peningkatan pendapatan petani yang terukur" },
    ],
    images: [media.research["glow-economy"], media.research["msme-bazaar"], media.research["msme-stall"], media.research["msme-buyers"]],
  },
];

/** Slides 10–22: the lab tour, grouped by discipline. */
export const labTour: { id: string; faculty: string; title: L; caption: L; images: Img[] }[] = [
  {
    id: "health",
    faculty: "FK · FKG",
    title: { en: "Clinical skills, long before the clinic", id: "Keterampilan klinis, jauh sebelum praktik" },
    caption: { en: "Dental simulation with phantom heads, operating microscopes, a microbiology incubator and a full dental unit with mobile X-ray.", id: "Simulasi gigi dengan phantom head, mikroskop operasi, inkubator mikrobiologi dan dental unit lengkap dengan X-ray portabel." },
    images: [media.labs["phantom-head"], media.labs["dental-tray"], media.labs["dental-microscope"], media.labs["dental-unit"], media.labs.incubator, media.labs["health-lounge"]],
  },
  {
    id: "craft",
    faculty: "FHIK",
    title: { en: "Clay, paper and fire, made by hand", id: "Tanah liat, kertas dan api, buatan tangan" },
    caption: { en: "Interior and product design workshops: the gas kiln, glaze studies, newspaper-roll sculpture and the batik and textile studio.", id: "Workshop desain interior dan produk: tungku gas, studi glasir, patung gulungan koran, serta studio batik dan tekstil." },
    images: [media.labs["craft-studio"], media.labs.kiln, media.labs["ceramics-shelf"], media.labs.glaze, media.labs["paper-sculpture"]],
  },
  {
    id: "fashion",
    faculty: "FHIK",
    title: { en: "From toile to runway", id: "Dari toile ke runway" },
    caption: { en: "Fashion Design and Textile studio: dress forms, pattern tables and draping, home of the #innofashion ecosystem.", id: "Studio Desain Fashion dan Tekstil: manekin, meja pola dan draping, rumah ekosistem #innofashion." },
    images: [media.labs["fashion-studio"], media.labs.sewing, media.labs["denim-mannequin"], media.labs.textile],
  },
  {
    id: "media",
    faculty: "FHIK · IPDM",
    title: { en: "Animated worlds, made on campus", id: "Dunia animasi, dibuat di kampus" },
    caption: { en: "Photography studios, 3D character work and the Digital Media Lab, where IPDM students make folklore films with industry partners.", id: "Studio fotografi, karakter 3D dan Digital Media Lab, tempat mahasiswa IPDM membuat film cerita rakyat bersama mitra industri." },
    images: [media.labs["poster-wall"], media.labs["photo-wall"], media.labs.figures, media.labs["animation-still"], media.faculty["tv-studio"]],
  },
  {
    id: "civil",
    faculty: "FTSP",
    title: { en: "Testing at full scale", id: "Pengujian skala penuh" },
    caption: { en: "Steel reaction frames load real-size beams, joints and shear walls; soil, materials and pavement labs start every road with a sample.", id: "Rangka reaksi baja menguji balok, sambungan dan dinding geser berukuran nyata; lab tanah, material dan perkerasan memulai setiap jalan dari sampel." },
    images: [media.labs["structural-beam"], media.labs["structural-joint"], media.labs["shear-wall"], media.labs["asphalt-mixer"], media.labs["direct-shear"], media.labs["materials-lab"]],
  },
  {
    id: "architecture",
    faculty: "FTSP",
    title: { en: "Cities, built to scale", id: "Kota, dibangun sesuai skala" },
    caption: { en: "A studio-wide Surabaya riverfront masterplan, model by model.", id: "Rencana induk tepi sungai Surabaya, dibangun model demi model oleh satu studio." },
    images: [media.labs["city-model"], media.labs["architecture-studio"], media.labs["site-model"], media.faculty["architecture-model"]],
  },
  {
    id: "engineering",
    faculty: "FTI",
    title: { en: "Robots, machines and aerodynamics", id: "Robot, mesin dan aerodinamika" },
    caption: { en: "Smart systems, robotics, automation rigs, VR and vehicle design.", id: "Sistem cerdas, robotika, rig otomasi, VR dan desain kendaraan." },
    images: [media.labs["smart-systems"], media.labs.robotics, media.labs["service-robot"], media.labs.automation, media.labs["car-cad"], media.faculty["vr-studio"]],
  },
];

export const jumbo = {
  title: { en: "From our student to the big screen", id: "Dari mahasiswa kami ke layar lebar" },
  body: {
    en: "Maximillian Serafino Suprapto from IPDM is credited as an animator (Ayena Studio) on Visinema's animated feature JUMBO.",
    id: "Maximillian Serafino Suprapto dari IPDM tercatat sebagai animator (Ayena Studio) di film animasi JUMBO produksi Visinema.",
  },
  images: [media.labs["jumbo-poster"], media.labs["jumbo-credits"]],
  credit: "Photo: @jackyhoo",
};

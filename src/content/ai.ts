import type { L } from "@/lib/i18n";
import { media } from "./media.generated";

/** Slides 57–60. */
export const aiTimeline = [
  { year: "2023", body: { en: "AI enters teaching and campus operations", id: "AI masuk ke pengajaran dan operasional kampus" } },
  { year: "2025", body: { en: "AI@PETRA launched on 1 August", id: "AI@PETRA diluncurkan pada 1 Agustus" } },
  { year: "2026", body: { en: "First Artificial Intelligence degree intake, AY 2026/27", id: "Angkatan pertama program Artificial Intelligence, TA 2026/27" } },
] satisfies { year: string; body: L }[];

export const aiQuote: L = {
  en: "Shaping Minds, Strengthening Character, Powered by AI.",
  id: "Shaping Minds, Strengthening Character, Powered by AI.",
};

export const aiModules = ["Data Analytics", "AI & Machine Learning", "NLP", "Deep Learning", "Generative AI", "Digital Leadership", "Technopreneurship"];

export const aiFacts = [
  { value: "22", label: { en: "documented AI practices", id: "praktik AI terdokumentasi" } },
  { value: "3 yrs", label: { en: "of AI practice across every faculty", id: "praktik AI di setiap fakultas" } },
  { value: "USD 243.5 B", label: { en: "Indonesia's AI economy by 2030", id: "ekonomi AI Indonesia pada 2030" } },
  { value: "6.5 M", label: { en: "digital-talent gap to 2030", id: "kesenjangan talenta digital hingga 2030" } },
] satisfies { value: string; label: L }[];

export const aiAcross = [
  { field: { en: "Architecture", id: "Arsitektur" }, body: { en: "Wind and sunlight simulation in design crits", id: "Simulasi angin dan cahaya matahari dalam kritik desain" }, image: media.labs["architecture-studio"] },
  { field: { en: "Fashion", id: "Fashion" }, body: { en: "Garment collection modelling", id: "Pemodelan koleksi busana" }, image: media.ai["fashion-class"] },
  { field: { en: "Creative media", id: "Media kreatif" }, body: { en: "Generative image, video and audio", id: "Gambar, video dan audio generatif" }, image: media.ai["3d-printing"] },
  { field: { en: "Drone Academy", id: "Drone Academy" }, body: { en: "AI recognition of aerial data", id: "Pengenalan data udara dengan AI" }, image: media.drone.assembly },
] satisfies { field: L; body: L; image: { src: string; alt: string } }[];

export const aiTeaching = [
  { tag: { en: "Faculty development", id: "Pengembangan dosen" }, title: "Faculty Development Forum", body: { en: "A holistic approach to AI in learning and teaching.", id: "Pendekatan holistik AI dalam pembelajaran dan pengajaran." } },
  { tag: { en: "Assessment", id: "Asesmen" }, title: "GenAI & assessment", body: { en: "University-wide sessions on what generative AI does to learning.", id: "Sesi lintas universitas tentang dampak AI generatif pada pembelajaran." } },
  { tag: { en: "Research", id: "Riset" }, title: "Towards an AI-Native Campus", body: { en: "22 first-hand accounts on the tool versus the personal touch.", id: "22 kisah langsung tentang alat versus sentuhan personal." } },
  { tag: { en: "Inclusion", id: "Inklusi" }, title: "Inclusive AI", body: { en: "Library workshops on AI for people with disabilities.", id: "Workshop perpustakaan tentang AI bagi penyandang disabilitas." } },
] satisfies { tag: L; title: string; body: L }[];

/** Slides 23–24: Petra Drone Academy. */
export const drone = {
  date: { en: "Launched 13 July 2026", id: "Diluncurkan 13 Juli 2026" } satisfies L,
  title: { en: "Indonesia's first credit-based UAV academy", id: "Akademi UAV berbasis kredit pertama di Indonesia" } satisfies L,
  summary: {
    en: "One year, 20 credits, from airframe to AI-driven aerial data. Launched with PT SkyWay Aerospace Technology and open to any programme, and beyond Petra.",
    id: "Satu tahun, 20 SKS, dari rangka pesawat hingga data udara berbasis AI. Diluncurkan bersama PT SkyWay Aerospace Technology dan terbuka untuk semua program, bahkan di luar Petra.",
  } satisfies L,
  stages: [
    { name: { en: "Foundation", id: "Dasar" }, body: { en: "Aviation safety, flight theory", id: "Keselamatan penerbangan, teori terbang" } },
    { name: { en: "Applied", id: "Terapan" }, body: { en: "Build and maintain a drone", id: "Merakit dan merawat drone" } },
    { name: { en: "AI-oriented", id: "Berorientasi AI" }, body: { en: "Recognise aerial data", id: "Mengenali data udara" } },
    { name: { en: "Practical", id: "Praktik" }, body: { en: "Supervised field flights", id: "Penerbangan lapangan terbimbing" } },
  ] satisfies { name: L; body: L }[],
  market: [
    { value: "USD 982.8 M", label: { en: "Indonesian drone market by 2030, up from 515.5 M", id: "pasar drone Indonesia pada 2030, naik dari 515,5 juta" } },
    { value: "15,000+", label: { en: "drones in industry", id: "drone di industri" } },
    { value: "2,000 ha", label: { en: "mapped in one flight", id: "dipetakan dalam satu penerbangan" } },
  ] satisfies { value: string; label: L }[],
  outcomes: [
    { en: "UAV Application Technology certificate", id: "Sertifikat UAV Application Technology" },
    { en: "Internship in Taiwan", id: "Magang di Taiwan" },
    { en: "Access to the global UAV job market", id: "Akses ke pasar kerja UAV global" },
  ] satisfies L[],
  partners: ["PT SkyWay Aerospace Technology", "Chung Yuan Christian University", "Beijing Sino-Aviation Research Institute"],
  images: [media.drone.launch, media.drone.assembly, media.drone.build, media.drone.workshop, media.drone.signing],
};

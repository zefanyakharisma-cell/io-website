import type { L } from "@/lib/i18n";
import { links } from "./links";
import { media } from "./media.generated";

type Img = { src: string; small?: string; alt: string; width?: number; height?: number };

/** Student Mobility → Outbound, from KUI's spec (WEBSITE IO, "NEW UPDATED"). */

const eligibilityBase: L[] = [
  { en: "You must be a Petra Christian University full-time undergraduate or graduate student.", id: "Anda adalah mahasiswa sarjana atau pascasarjana penuh waktu Universitas Kristen Petra." },
  { en: "Undergraduates must have successfully completed at least 2 semesters at Petra Christian University.", id: "Mahasiswa sarjana telah menyelesaikan minimal 2 semester di Universitas Kristen Petra." },
  { en: "Good conduct, behaviour and responsibility, with the qualities and suitability to represent Petra Christian University overseas.", id: "Berkelakuan baik dan bertanggung jawab, dengan kualitas dan kelayakan untuk mewakili Universitas Kristen Petra di luar negeri." },
  { en: "See the International Outbound Program Flyer for the minimum GPA and language proficiency requirements. Requirements may vary by host university.", id: "Lihat Flyer International Outbound Program untuk syarat IPK dan kemampuan bahasa minimum. Persyaratan dapat berbeda di setiap universitas tujuan." },
];

export type OutboundProgram = {
  slug: "short-program" | "student-exchange" | "dual-degree";
  title: L;
  kind: L;
  definition: L;
  eligibility: L[];
  image: Img;
};

export const outboundPrograms: OutboundProgram[] = [
  {
    slug: "short-program",
    title: { en: "Short Program", id: "Program Singkat" },
    kind: { en: "2–3 weeks abroad", id: "2–3 minggu di luar negeri" },
    definition: {
      en: "Ready for an international adventure? Join a Short Program to experience learning abroad, explore new cultures, make friends from around the world, and create unforgettable memories, all in just 2–3 weeks!",
      id: "Siap untuk petualangan internasional? Ikuti Program Singkat untuk merasakan belajar di luar negeri, menjelajahi budaya baru, berteman dengan mahasiswa dari seluruh dunia, dan menciptakan kenangan tak terlupakan, hanya dalam 2–3 minggu!",
    },
    eligibility: eligibilityBase,
    image: media.mobility["asp-thailand"],
  },
  {
    slug: "student-exchange",
    title: { en: "Student Exchange", id: "Pertukaran Mahasiswa" },
    kind: { en: "A semester or an academic year", id: "Satu semester atau satu tahun akademik" },
    definition: {
      en: "Experience student life in another country through our Student Exchange Program! Spend a semester or an academic year at one of our partner universities, discover new cultures, make international friends, and gain valuable academic and life experiences beyond the classroom.",
      id: "Rasakan kehidupan mahasiswa di negara lain melalui Program Pertukaran Mahasiswa! Habiskan satu semester atau satu tahun akademik di salah satu universitas mitra, temukan budaya baru, jalin pertemanan internasional, dan raih pengalaman akademik serta kehidupan yang berharga di luar kelas.",
    },
    eligibility: eligibilityBase,
    image: media.mobility["korea-university"],
  },
  {
    slug: "dual-degree",
    title: { en: "Dual Degree", id: "Dual Degree" },
    kind: { en: "Two degrees, two universities", id: "Dua gelar, dua universitas" },
    definition: {
      en: "Take your education to the next level with our Dual Degree Program! Study at Petra Christian University and an overseas partner university to earn two degrees, experience different academic environments, and expand your global opportunities for future success.",
      id: "Bawa pendidikan Anda ke tingkat berikutnya dengan Program Dual Degree! Kuliah di Universitas Kristen Petra dan universitas mitra di luar negeri untuk meraih dua gelar, merasakan lingkungan akademik yang berbeda, dan memperluas peluang global untuk masa depan.",
    },
    eligibility: [eligibilityBase[0], eligibilityBase[2], eligibilityBase[3]],
    image: media.mobility.saxion,
  },
];

/** How to Apply — the same ten steps for all three programmes. */
export const outboundHowToApply: { title: L; body: L }[] = [
  { title: { en: "Explore the program", id: "Pelajari program" }, body: { en: "Check the details and requirements in the International Outbound Program Flyer.", id: "Periksa informasi dan persyaratan di Flyer International Outbound Program." } },
  { title: { en: "Consult your Head of Department", id: "Konsultasi dengan Kaprodi" }, body: { en: "Discuss your study plan and course selection with your Head of Department.", id: "Diskusikan rencana studi dan pilihan mata kuliah dengan Ketua Program Studi." } },
  { title: { en: "Complete Form 01", id: "Isi Form 01" }, body: { en: "Register through io.petra.ac.id/outbound before the application deadline.", id: "Daftar melalui io.petra.ac.id/outbound sebelum batas waktu pendaftaran." } },
  { title: { en: "Wait for the selection results", id: "Tunggu hasil seleksi" }, body: { en: "Results are announced within 3–4 days after the application deadline.", id: "Hasil diumumkan dalam 3–4 hari setelah batas waktu pendaftaran." } },
  { title: { en: "Nomination to the host university", id: "Nominasi ke universitas tujuan" }, body: { en: "Petra Christian University nominates selected students to the host university.", id: "Universitas Kristen Petra menominasikan mahasiswa terpilih ke universitas tujuan." } },
  { title: { en: "Complete the host university's application", id: "Lengkapi aplikasi universitas tujuan" }, body: { en: "Follow the host university's instructions and submit all required documents before its deadline.", id: "Ikuti petunjuk universitas tujuan dan kirim semua dokumen sebelum batas waktunya." } },
  { title: { en: "Receive your Letter of Acceptance", id: "Terima Letter of Acceptance" }, body: { en: "Wait for the official acceptance letter (LoA) from the host university.", id: "Tunggu surat penerimaan resmi (LoA) dari universitas tujuan." } },
  { title: { en: "Apply for a visa", id: "Ajukan visa" }, body: { en: "Prepare the required documents and complete the visa application.", id: "Siapkan dokumen dan selesaikan pengajuan visa." } },
  { title: { en: "Complete Form 02", id: "Isi Form 02" }, body: { en: "Complete the next registration step through io.petra.ac.id/outbound.", id: "Selesaikan tahap pendaftaran berikutnya melalui io.petra.ac.id/outbound." } },
  { title: { en: "Get ready for departure!", id: "Bersiap berangkat!" }, body: { en: "Finalise your preparations for your international learning experience.", id: "Selesaikan persiapan untuk pengalaman belajar internasional Anda." } },
];

/** Fees: the study-fee decrees (SK Tarif Studi) KUI will upload. */
export const outboundFees = {
  body: { en: "Fees follow Petra's study-fee decrees (SK Tarif Studi) No. 381 and No. 532.", id: "Biaya mengikuti SK Tarif Studi Universitas Kristen Petra No. 381 dan No. 532." } satisfies L,
  files: [
    { label: "SK Tarif Studi No. 381", href: links.skTarif381 },
    { label: "SK Tarif Studi No. 532", href: links.skTarif532 },
  ],
};

/** Student Exchange → Host University. */
export const hostUniversities: { country: string; universities: string[] }[] = [
  { country: "Bangladesh", universities: ["Daffodil International University"] },
  { country: "Cambodia", universities: ["National University of Management"] },
  { country: "China", universities: ["Zhejiang Yuexiu University of Foreign Languages", "Nanjing University of Aeronautics and Astronautics", "Guangxi Normal University", "Xi'an Jiaotong-Liverpool University"] },
  { country: "Hong Kong", universities: ["Hong Kong Baptist University", "Lingnan University"] },
  { country: "India", universities: ["Assam Down Town University", "Lady Doak College"] },
  { country: "Japan", universities: ["International Christian University", "Josai International University", "Kaichi International University", "Kwansei Gakuin University", "Meiji University", "Momoyama Gakuin University", "Sophia University"] },
  { country: "Germany", universities: ["Hochschule Darmstadt", "Hochschule Mainz", "Hochschule Fresenius"] },
  { country: "Malaysia", universities: ["UCSI University", "Universiti Tunku Abdul Rahman (UTAR)"] },
  { country: "Philippines", universities: ["University of Mindanao"] },
  { country: "Russia", universities: ["Southern Federal University (SFedU)"] },
  { country: "Singapore", universities: ["Singapore University of Technology and Design (SUTD)"] },
  { country: "South Korea", universities: ["Dankook University", "Dongseo University", "Hankuk University of Foreign Studies", "Hannam University", "Keimyung University", "SolBridge International School of Business", "Woosong University", "Soongsil University"] },
  { country: "Netherlands", universities: ["Saxion University of Applied Sciences", "Fontys University of Applied Sciences"] },
  { country: "Taiwan, ROC", universities: ["Chang Jung Christian University", "Chung Yuan Christian University", "Fu Jen Catholic University", "I-Shou University", "National Kaohsiung University of Science and Technology", "National Sun Yat-sen University", "National Taiwan University of Science and Technology", "Tunghai University", "Wenzao Ursuline University of Languages"] },
  { country: "Thailand", universities: ["Bangkok University"] },
];

export const scholarships = {
  note: { en: "Subject to change.", id: "Dapat berubah sewaktu-waktu." } satisfies L,
  internal: [
    { program: { en: "Short Program", id: "Program Singkat" }, amount: "Rp2,500,000" },
    { program: { en: "Student Exchange", id: "Pertukaran Mahasiswa" }, amount: "Rp5,000,000" },
    { program: { en: "Dual Degree", id: "Dual Degree" }, amount: "Rp10,000,000" },
  ] satisfies { program: L; amount: string }[],
  external: [
    { for: { en: "For exchange programs", id: "Untuk program pertukaran" }, items: ["Global Korea Scholarship (GKS)", "JASSO Scholarship", "Bangkok University Scholarship", "ACUCA Student Mobility Scheme"] },
    { for: { en: "For dual degree programs", id: "Untuk program dual degree" }, items: ["NUAA Freshmen Scholarship", "Saxion Talent Scholarship", "Orange Tulip Scholarship"] },
  ] satisfies { for: L; items: string[] }[],
};

/** Experiences: photo highlights and video testimonies. Photos are stand-ins until KUI sends the students' own. */
export const outboundStories: { program: L; host: string; name: string; study: string; award?: string; image: Img }[] = [
  { program: { en: "Student Exchange", id: "Pertukaran Mahasiswa" }, host: "Hochschule Fresenius, Germany", name: "Michael Tjipto", study: "IBAcc '20", image: media.mobility["exchange-group"] },
  { program: { en: "Student Exchange", id: "Pertukaran Mahasiswa" }, host: "Dongseo University, South Korea", name: "Veronica Singajaya", study: "Visual Communication Design '22", award: "GKS Awardee", image: media.mobility["korea-university"] },
  { program: { en: "Student Exchange", id: "Pertukaran Mahasiswa" }, host: "Sophia University, Japan", name: "Nicholas Dean", study: "Tax Accounting '23", award: "JASSO Awardee", image: media.mobility.nsysu },
  { program: { en: "Dual Degree", id: "Dual Degree" }, host: "IMI, Switzerland", name: "Neven Nanthaniel", study: "Hotel Management '22", image: media.campus["students-gazebo"] },
  { program: { en: "Dual Degree", id: "Dual Degree" }, host: "Nanjing University of Aeronautics and Astronautics, China", name: "Fellix Allenfant", study: "Business Information System '22", image: media.campus["students-corridor"] },
  { program: { en: "Dual Degree", id: "Dual Degree" }, host: "Saxion University of Applied Sciences, the Netherlands", name: "Evany Melika Martamulia", study: "IBM '21", image: media.mobility.saxion },
];

export const outboundVideos: { title: string; youtubeId: string }[] = [
  { title: "Student Exchange to Nanjing University of Aeronautics and Astronautics — Sherilyn Phan, IBM '23", youtubeId: "" },
  { title: "Dual Degree to Dongseo University — Theresia Rebecca, IPDM '22", youtubeId: "" },
];

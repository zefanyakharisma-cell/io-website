import type { L } from "@/lib/i18n";
import { media } from "./media.generated";

type Img = { src: string; small?: string; alt: string; width?: number; height?: number };

/** KUI spec, Sheet1 → Inbound Programs. Each programme opens its own page. */
export const inboundPrograms: { slug: string; title: L; kind: L; summary: L; image: Img }[] = [
  {
    slug: "student-exchange",
    title: { en: "Student Exchange", id: "Pertukaran Mahasiswa" },
    kind: { en: "Non-degree · 1–2 semesters", id: "Non-gelar · 1–2 semester" },
    summary: { en: "A semester or two at Petra, with credits that count at home and courses taught in English.", id: "Satu atau dua semester di Petra, dengan kredit yang diakui di kampus asal dan mata kuliah berbahasa Inggris." },
    image: media.campus["gazebo-study"],
  },
  {
    slug: "short-programs",
    title: { en: "Short Programs", id: "Program Singkat" },
    kind: { en: "Non-degree · 2–3 weeks", id: "Non-gelar · 2–3 minggu" },
    summary: { en: "Petra Summer Program, Asia Summer Program, ICOP and Indonesian Spectrum.", id: "Petra Summer Program, Asia Summer Program, ICOP dan Indonesian Spectrum." },
    image: media.mobility["psp-batik"],
  },
  {
    slug: "tailor-made",
    title: { en: "Tailor-made Programs", id: "Program Khusus (Tailor-made)" },
    kind: { en: "Non-degree · built for your cohort", id: "Non-gelar · dirancang untuk kelompok Anda" },
    summary: { en: "A short programme designed with a partner university around its students' goals.", id: "Program singkat yang dirancang bersama universitas mitra sesuai tujuan mahasiswanya." },
    image: media.mobility["asp-event"],
  },
  {
    slug: "international-programs",
    title: { en: "International Programs", id: "Program Internasional" },
    kind: { en: "Degree · 4-year bachelor's in English", id: "Gelar · sarjana 4 tahun berbahasa Inggris" },
    summary: { en: "Eight full bachelor's degrees taught in English, including Petra Business School.", id: "Delapan program sarjana penuh berbahasa Inggris, termasuk Petra Business School." },
    image: media.ai["study-table"],
  },
  {
    slug: "darmasiswa",
    title: { en: "Darmasiswa Scholarship", id: "Beasiswa Darmasiswa" },
    kind: { en: "Scholarship · Indonesian language & culture", id: "Beasiswa · bahasa & budaya Indonesia" },
    summary: { en: "The Indonesian government scholarship for international students to learn Indonesian language and culture.", id: "Beasiswa pemerintah Indonesia bagi mahasiswa internasional untuk belajar bahasa dan budaya Indonesia." },
    image: media.mobility["cultural-night"],
  },
];

/** Definition from KUI's spec (WEBSITE IO, Sheet3 → Outbound → Short Program). */
export const shortProgramDefinition: L = {
  en: "Ready for an international adventure? Join a Short Program to experience learning abroad, explore new cultures, make friends from around the world, and create unforgettable memories, all in just 2–3 weeks!",
  id: "Siap untuk petualangan internasional? Ikuti Program Singkat untuk merasakan belajar di luar negeri, menjelajahi budaya baru, berteman dengan mahasiswa dari seluruh dunia, dan menciptakan kenangan tak terlupakan, hanya dalam 2–3 minggu!",
};

/** General requirements. Drafted from common practice — TO CONFIRM by KUI. */
export const inboundRequirements: L[] = [
  { en: "Nomination by your home university (for exchange students)", id: "Nominasi dari universitas asal (untuk mahasiswa pertukaran)" },
  { en: "Active enrolment at your home university", id: "Terdaftar aktif di universitas asal" },
  { en: "A passport valid for at least 18 months from your arrival date", id: "Paspor yang berlaku minimal 18 bulan sejak tanggal kedatangan" },
  { en: "Academic transcript and a study plan agreed with your home university", id: "Transkrip akademik dan rencana studi yang disetujui universitas asal" },
  { en: "Proof of English proficiency, if requested by your programme", id: "Bukti kemampuan bahasa Inggris, bila diminta program" },
  { en: "Health insurance covering your stay in Indonesia", id: "Asuransi kesehatan selama tinggal di Indonesia" },
];

/** Visa overview. Drafted from Indonesian immigration practice — TO CONFIRM by KUI before publishing. */
export const visa = {
  types: [
    {
      name: { en: "Student visa (study permit)", id: "Visa pelajar (izin belajar)" },
      who: { en: "Exchange and degree students staying a semester or longer", id: "Mahasiswa pertukaran dan bergelar yang tinggal satu semester atau lebih" },
      note: { en: "Petra acts as your sponsor. After arrival it is converted into a limited-stay permit (ITAS/KITAS).", id: "Petra bertindak sebagai sponsor. Setelah tiba, visa dikonversi menjadi izin tinggal terbatas (ITAS/KITAS)." },
    },
    {
      name: { en: "Visit visa / visa on arrival", id: "Visa kunjungan / visa on arrival" },
      who: { en: "Short programmes of a few weeks", id: "Program singkat beberapa minggu" },
      note: { en: "Eligibility depends on your nationality and the activity. Check with KUI before you book.", id: "Kelayakan bergantung pada kewarganegaraan dan kegiatan. Konsultasikan dengan KUI sebelum memesan tiket." },
    },
  ] satisfies { name: L; who: L; note: L }[],
  steps: [
    { en: "Receive your letter of acceptance from Petra", id: "Terima surat penerimaan dari Petra" },
    { en: "Send KUI the documents for your visa application", id: "Kirim dokumen pengajuan visa ke KUI" },
    { en: "Petra applies for your visa as sponsor; you receive the e-visa by email", id: "Petra mengajukan visa sebagai sponsor; Anda menerima e-visa melalui email" },
    { en: "Arrive in Indonesia and report to KUI in your first week", id: "Tiba di Indonesia dan lapor ke KUI di minggu pertama" },
    { en: "KUI helps you complete your stay permit and local registration", id: "KUI membantu menyelesaikan izin tinggal dan pelaporan setempat" },
  ] satisfies L[],
  cost: { en: "Visa and stay-permit fees follow current Indonesian immigration rates. KUI will confirm the amount for your programme.", id: "Biaya visa dan izin tinggal mengikuti tarif imigrasi Indonesia yang berlaku. KUI akan mengonfirmasi jumlahnya untuk program Anda." } satisfies L,
};

/** Cost items to budget for. Amounts are pending from KUI. */
export const relatedCosts: { item: L; note: L }[] = [
  { item: { en: "Tuition", id: "Biaya kuliah" }, note: { en: "Often waived for exchange students from partner universities", id: "Umumnya dibebaskan bagi mahasiswa pertukaran dari universitas mitra" } },
  { item: { en: "Visa & stay permit", id: "Visa & izin tinggal" }, note: { en: "Current immigration rates", id: "Tarif imigrasi yang berlaku" } },
  { item: { en: "Accommodation", id: "Akomodasi" }, note: { en: "Boarding houses (kos) near campus", id: "Rumah kos di sekitar kampus" } },
  { item: { en: "Living costs", id: "Biaya hidup" }, note: { en: "Meals, transport and phone", id: "Makan, transportasi dan telepon" } },
  { item: { en: "Health insurance", id: "Asuransi kesehatan" }, note: { en: "Required for your whole stay", id: "Wajib selama masa tinggal" } },
];

/** Living in Indonesia. Drafted general guidance — TO CONFIRM by KUI. */
export const dosAndDonts = {
  dos: [
    { en: "Dress modestly on campus and at places of worship", id: "Berpakaian sopan di kampus dan tempat ibadah" },
    { en: "Use your right hand to give, receive and eat", id: "Gunakan tangan kanan untuk memberi, menerima dan makan" },
    { en: "Carry a copy of your passport and stay permit", id: "Bawa salinan paspor dan izin tinggal" },
    { en: "Tell KUI if you change address or travel outside Surabaya", id: "Beri tahu KUI jika pindah alamat atau bepergian ke luar Surabaya" },
    { en: "Greet people and ask before taking photos of them", id: "Sapa orang dan minta izin sebelum memotret mereka" },
  ] satisfies L[],
  donts: [
    { en: "Don't work, paid or unpaid, on a student visa", id: "Jangan bekerja, berbayar atau tidak, dengan visa pelajar" },
    { en: "Don't bring or use drugs — penalties in Indonesia are severe", id: "Jangan membawa atau memakai narkoba — hukumannya sangat berat di Indonesia" },
    { en: "Don't overstay your visa or permit", id: "Jangan melewati masa berlaku visa atau izin tinggal" },
    { en: "Don't show public displays of affection", id: "Jangan bermesraan di tempat umum" },
    { en: "Don't speak disrespectfully about religion or the state", id: "Jangan berbicara tidak hormat tentang agama atau negara" },
  ] satisfies L[],
};

/** Tailor-made programmes. Drafted — TO CONFIRM by KUI. */
export const tailorMade = {
  intro: {
    en: "A tailor-made programme is a short programme designed together with a partner university for its own group of students. You choose the focus, length and dates; Petra builds the classes, lab sessions, company visits and cultural activities around them.",
    id: "Program tailor-made adalah program singkat yang dirancang bersama universitas mitra untuk kelompok mahasiswanya sendiri. Anda menentukan fokus, durasi dan tanggal; Petra menyusun kelas, sesi laboratorium, kunjungan industri dan kegiatan budaya di sekitarnya.",
  } satisfies L,
  options: [
    { en: "Academic modules from any of Petra's 7 faculties", id: "Modul akademik dari 7 fakultas Petra" },
    { en: "Hands-on sessions in 65+ labs and studios", id: "Sesi praktik di 65+ laboratorium dan studio" },
    { en: "Industry visits in Surabaya and East Java", id: "Kunjungan industri di Surabaya dan Jawa Timur" },
    { en: "Indonesian language and culture", id: "Bahasa dan budaya Indonesia" },
    { en: "Community service with village partners", id: "Pengabdian masyarakat bersama mitra desa" },
  ] satisfies L[],
  gallery: [media.mobility["asp-event"], media.mobility["spectra-cooking"], media.mobility["psp-culinary"], media.mobility["museum-group"], media.mobility["psp-bus"], media.mobility.henna],
};

/** Darmasiswa. Public facts about the Indonesian government programme — TO CONFIRM by KUI. */
export const darmasiswa = {
  intro: {
    en: "Darmasiswa is a scholarship from the Government of Indonesia for international students to study Indonesian language, arts and culture at Indonesian universities for up to one academic year.",
    id: "Darmasiswa adalah beasiswa dari Pemerintah Indonesia bagi mahasiswa internasional untuk mempelajari bahasa, seni dan budaya Indonesia di universitas di Indonesia hingga satu tahun akademik.",
  } satisfies L,
  points: [
    { en: "Apply through the official Darmasiswa website or the Indonesian embassy in your country", id: "Daftar melalui situs resmi Darmasiswa atau Kedutaan Besar Indonesia di negara Anda" },
    { en: "Choose Petra Christian University as your host university, if it is listed for the current intake", id: "Pilih Universitas Kristen Petra sebagai universitas tujuan, bila tercantum pada periode pendaftaran" },
    { en: "KUI supports Darmasiswa students at Petra from arrival to completion", id: "KUI mendampingi mahasiswa Darmasiswa di Petra dari kedatangan hingga selesai" },
  ] satisfies L[],
};

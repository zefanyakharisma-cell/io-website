import type { L } from "@/lib/i18n";
import { links } from "./links";
import { media } from "./media.generated";

type Img = { src: string; small?: string; alt: string; width?: number; height?: number };

/** KUI spec, Sheet1 → Outbound Programs. Definitions drafted — TO CONFIRM by KUI. */
export const iisma = {
  intro: {
    en: "IISMA (Indonesian International Student Mobility Awards) is the Indonesian government's scholarship for undergraduates to spend a semester at a leading university abroad, with tuition, travel and living costs covered.",
    id: "IISMA (Indonesian International Student Mobility Awards) adalah beasiswa pemerintah Indonesia bagi mahasiswa S1 untuk kuliah satu semester di universitas terkemuka di luar negeri, dengan biaya kuliah, perjalanan dan hidup ditanggung.",
  } satisfies L,
  selection: [
    { en: "Active Petra undergraduate in the semester set by the call", id: "Mahasiswa S1 aktif Petra pada semester yang ditetapkan" },
    { en: "Minimum GPA and English score as set by IISMA and Petra", id: "IPK dan skor bahasa Inggris minimum sesuai ketentuan IISMA dan Petra" },
    { en: "Recommendation from your study programme", id: "Rekomendasi dari program studi" },
    { en: "Petra's internal selection: documents and interview", id: "Seleksi internal Petra: berkas dan wawancara" },
  ] satisfies L[],
  images: [media.mobility.nsysu, media.mobility["korea-university"], media.mobility["exchange-group"]] satisfies Img[],
  facts: [
    { en: "Managed by the Directorate General of Higher Education, Research and Technology", id: "Dikelola Direktorat Jenderal Pendidikan Tinggi, Riset, dan Teknologi" },
    { en: "Open to undergraduates; a vocational track has run since 2022", id: "Terbuka untuk mahasiswa S1; jalur vokasi berjalan sejak 2022" },
  ] satisfies L[],
  /** Applicants per year (iismaKatadata source); selected only reported for 2024. */
  applicants: [
    { year: "2021", value: 2551 },
    { year: "2024", value: 15211 },
  ],
  selected2024: 3330,
};

export const globalOutbound: { title: L; definition: L; download: string; image: Img }[] = [
  {
    title: { en: "Student Exchange", id: "Pertukaran Mahasiswa" },
    definition: { en: "One or two semesters at a partner university under an exchange agreement. You pay Petra's tuition, and credits transfer back to your degree.", id: "Satu atau dua semester di universitas mitra dalam perjanjian pertukaran. Anda membayar biaya kuliah Petra, dan kreditnya diakui untuk studi Anda." },
    download: links.outboundExchangeList,
    image: media.mobility["korea-university"],
  },
  {
    title: { en: "Study Abroad", id: "Study Abroad" },
    definition: { en: "A semester abroad at a university of your choice, usually paying that university's fees, with credits recognised by Petra.", id: "Satu semester di universitas pilihan Anda di luar negeri, umumnya dengan membayar biaya universitas tersebut, dan kreditnya diakui Petra." },
    download: links.outboundStudyAbroadList,
    image: media.mobility.nsysu,
  },
  {
    title: { en: "Joint Degree", id: "Joint Degree" },
    definition: { en: "A programme designed and delivered together by Petra and a partner, leading to one degree awarded jointly.", id: "Program yang dirancang dan dijalankan bersama oleh Petra dan mitra, menghasilkan satu gelar yang diberikan bersama." },
    download: links.outboundJointDegreeList,
    image: media.mobility.saxion,
  },
  {
    title: { en: "Dual Degree", id: "Dual Degree" },
    definition: { en: "Study part of your programme at Petra and part at a partner (2+2, 3+1 or 1+1) and graduate with a degree from each.", id: "Kuliah sebagian di Petra dan sebagian di mitra (2+2, 3+1 atau 1+1) dan lulus dengan gelar dari keduanya." },
    download: links.outboundDualDegreeList,
    image: media.mobility["exchange-group"],
  },
];

export const outboundRequirements: L[] = [
  { en: "Active Petra student in good academic standing", id: "Mahasiswa aktif Petra dengan status akademik baik" },
  { en: "Minimum GPA and English score set by the programme", id: "IPK dan skor bahasa Inggris minimum sesuai program" },
  { en: "Approval of your study plan by your study programme", id: "Persetujuan rencana studi dari program studi" },
  { en: "A passport valid for the whole stay abroad", id: "Paspor yang berlaku selama masa tinggal di luar negeri" },
  { en: "Parental consent and health insurance", id: "Izin orang tua dan asuransi kesehatan" },
];

export const ice = {
  intro: {
    en: "ICE Institute (Indonesia Cyber Education Institute) is a consortium platform for online courses that count toward university credit. It is run by Universitas Terbuka, with members such as UGM, Universitas Indonesia, ITS, BINUS and UPH.",
    id: "ICE Institute (Indonesia Cyber Education Institute) adalah platform konsorsium mata kuliah daring yang dapat diakui sebagai kredit. Platform ini dikelola Universitas Terbuka, dengan anggota seperti UGM, Universitas Indonesia, ITS, BINUS dan UPH.",
  } satisfies L,
  /** As of ICE Institute's fifth anniversary (iceFiveYears source). */
  stats: [
    { value: 49, label: { en: "Partner institutions", id: "Institusi mitra" } },
    { value: 885, label: { en: "National online courses", id: "Mata kuliah daring nasional" } },
    { value: 50000, suffix: "+", label: { en: "Learners", id: "Pembelajar" } },
  ] satisfies { value: number; suffix?: string; label: L }[],
  selection: [
    { en: "Course approved by your study programme for credit transfer; your programme sets how many credits can come from online courses", id: "Mata kuliah disetujui program studi untuk transfer kredit; program studi menentukan berapa banyak kredit dari mata kuliah daring" },
    { en: "Registration through KUI within the enrolment window", id: "Pendaftaran melalui KUI dalam periode pendaftaran" },
  ] satisfies L[],
};

export const localOutbound: { name: string; body: L }[] = [
  { name: "Local Student Exchange Program", body: { en: "A semester at another Indonesian university, with credits recognised by Petra.", id: "Satu semester di universitas lain di Indonesia, dengan kredit yang diakui Petra." } },
  { name: "NUNI", body: { en: "Exchange within the NUNI university network.", id: "Pertukaran dalam jejaring universitas NUNI." } },
  { name: "BKPTKI", body: { en: "Exchange among member universities of BKPTKI, the association of Indonesian Christian higher-education institutions.", id: "Pertukaran antaranggota BKPTKI, Badan Kerja Sama Perguruan Tinggi Kristen Indonesia." } },
];

export const outboundDosAndDonts = {
  dos: [
    { en: "Register your trip with KUI and share your contact details abroad", id: "Daftarkan perjalanan Anda ke KUI dan bagikan kontak selama di luar negeri" },
    { en: "Keep copies of your passport, visa and insurance", id: "Simpan salinan paspor, visa dan asuransi" },
    { en: "Follow the host university's rules and local laws", id: "Patuhi aturan universitas tujuan dan hukum setempat" },
    { en: "Report your grades to your study programme after you return", id: "Laporkan nilai ke program studi setelah kembali" },
  ] satisfies L[],
  donts: [
    { en: "Don't change courses without approval from your study programme", id: "Jangan mengganti mata kuliah tanpa persetujuan program studi" },
    { en: "Don't work unless your visa allows it", id: "Jangan bekerja kecuali visa mengizinkan" },
    { en: "Don't leave your host country without telling KUI and the host university", id: "Jangan keluar dari negara tujuan tanpa memberi tahu KUI dan universitas tujuan" },
  ] satisfies L[],
};

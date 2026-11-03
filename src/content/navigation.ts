import type { L } from "@/lib/i18n";
import { media } from "./media.generated";

export type NavLink = { label: L; path: string; description: L; /** Column heading in the mega menu, e.g. Inbound / Outbound. */ section?: L };
export type NavGroup = {
  label: L;
  path: string;
  image: { src: string; alt: string };
  blurb: L;
  links: NavLink[];
};

/** Main menu, following KUI's spec (WEBSITE IO, "NEW UPDATED"). */
export const aboutNav: NavGroup = {
  label: { en: "About & Contact", id: "Tentang & Kontak" },
  path: "/about",
  image: media.campus.landmark,
  blurb: { en: "Petra Christian University, Surabaya — since 1961, ranked in QS WUR 2026.", id: "Universitas Kristen Petra, Surabaya — sejak 1961, masuk QS WUR 2026." },
  links: [
    { label: { en: "About Petra", id: "Tentang Petra" }, path: "/about", description: { en: "Rankings, numbers, campus resources", id: "Peringkat, angka, fasilitas kampus" } },
    { label: { en: "Faculties & Programmes", id: "Fakultas & Program Studi" }, path: "/about/faculties", description: { en: "7 faculties, 59 programmes", id: "7 fakultas, 59 program" } },
    { label: { en: "Research & Labs", id: "Riset & Laboratorium" }, path: "/about/research", description: { en: "65+ labs, 36 Q1 articles", id: "65+ laboratorium, 36 artikel Q1" } },
    { label: { en: "AI@PETRA & Drone Academy", id: "AI@PETRA & Drone Academy" }, path: "/about/ai", description: { en: "An AI-native campus", id: "Kampus AI-native" } },
    { label: { en: "Where We Are", id: "Lokasi Kami" }, path: "/about/campus", description: { en: "Surabaya, East Java", id: "Surabaya, Jawa Timur" } },
    { label: { en: "Contact Us", id: "Hubungi Kami" }, path: "/contact", description: { en: "Who to email, WhatsApp, inquiry form", id: "Email, WhatsApp, formulir pertanyaan" } },
  ],
};

const inbound: L = { en: "Inbound", id: "Inbound" };
const outbound: L = { en: "Outbound", id: "Outbound" };

export const mobilityNav: NavGroup = {
  label: { en: "Student Mobility", id: "Mobilitas Mahasiswa" },
  path: "/mobility",
  image: media.mobility["exchange-group"],
  blurb: { en: "Come to Petra from abroad, or go abroad as a Petranesian.", id: "Datang ke Petra dari luar negeri, atau ke luar negeri sebagai Petranesian." },
  links: [
    { section: inbound, label: { en: "Inbound overview", id: "Ringkasan inbound" }, path: "/mobility/inbound", description: { en: "Study at Petra in Surabaya", id: "Belajar di Petra, Surabaya" } },
    { section: inbound, label: { en: "Inbound Student Exchange", id: "Pertukaran Mahasiswa Inbound" }, path: "/mobility/inbound/student-exchange", description: { en: "Fact sheet, calendar, fees, living costs", id: "Fact sheet, kalender, biaya, biaya hidup" } },
    { section: inbound, label: { en: "Short-Term & Non-Degree", id: "Jangka Pendek & Non-Gelar" }, path: "/mobility/inbound/short-programs", description: { en: "iCOP, ASP, PSP, Indonesian Spectrum", id: "iCOP, ASP, PSP, Indonesian Spectrum" } },
    { section: inbound, label: { en: "Inbound Experiences", id: "Pengalaman Inbound" }, path: "/mobility/inbound/experiences", description: { en: "Stories from our global community", id: "Cerita komunitas global kami" } },
    { section: outbound, label: { en: "Outbound overview", id: "Ringkasan outbound" }, path: "/mobility/outbound", description: { en: "Petranesians abroad", id: "Petranesian ke luar negeri" } },
    { section: outbound, label: { en: "Short Program", id: "Program Singkat" }, path: "/mobility/outbound/short-program", description: { en: "2–3 weeks abroad", id: "2–3 minggu di luar negeri" } },
    { section: outbound, label: { en: "Student Exchange", id: "Pertukaran Mahasiswa" }, path: "/mobility/outbound/student-exchange", description: { en: "A semester or a year at a partner", id: "Satu semester atau setahun di mitra" } },
    { section: outbound, label: { en: "Dual Degree", id: "Dual Degree" }, path: "/mobility/outbound/dual-degree", description: { en: "Two degrees, two universities", id: "Dua gelar, dua universitas" } },
    { section: outbound, label: { en: "Scholarships", id: "Beasiswa" }, path: "/mobility/outbound/scholarships", description: { en: "Internal and external awards", id: "Beasiswa internal dan eksternal" } },
    { section: outbound, label: { en: "Outbound Experiences", id: "Pengalaman Outbound" }, path: "/mobility/outbound/experiences", description: { en: "Photos and video testimonies", id: "Foto dan video testimoni" } },
  ],
};

export const internationalNav: NavGroup = {
  label: { en: "International Students", id: "Mahasiswa Internasional" },
  path: "/international-students",
  image: media.mobility["international-day"],
  blurb: { en: "Degrees in English, visas, and life in Surabaya.", id: "Gelar berbahasa Inggris, visa, dan kehidupan di Surabaya." },
  links: [
    { label: { en: "Visa & living in Indonesia", id: "Visa & tinggal di Indonesia" }, path: "/international-students", description: { en: "Visa, stay permit, dos & don'ts", id: "Visa, izin tinggal, hal yang boleh/tidak" } },
    { label: { en: "International Programs", id: "Program Internasional" }, path: "/international-students/international-programs", description: { en: "Bachelor's degrees in English", id: "Program sarjana berbahasa Inggris" } },
    { label: { en: "Petramate", id: "Petramate" }, path: "/international-students/petramate", description: { en: "Our student buddy team", id: "Tim buddy mahasiswa kami" } },
    { label: { en: "Beautiful Surabaya", id: "Surabaya yang Indah" }, path: "/international-students/surabaya", description: { en: "Near Bali and Malang", id: "Dekat Bali dan Malang" } },
  ],
};

export const collaborationNav: NavGroup = {
  label: { en: "Global Collaboration", id: "Kolaborasi Global" },
  path: "/collaboration",
  image: media.mobility["asp-group"],
  blurb: { en: "Connecting Petra to the world.", id: "Menghubungkan Petra dengan dunia." },
  links: [
    { label: { en: "Global Networking", id: "Jejaring Global" }, path: "/collaboration#networking", description: { en: "Partners and ways we collaborate", id: "Mitra dan bentuk kolaborasi" } },
    { label: { en: "Consortium", id: "Konsorsium" }, path: "/collaboration#consortium", description: { en: "ACUCA, GHAS, P2A, BKPTKI, NUNI, AUPF", id: "ACUCA, GHAS, P2A, BKPTKI, NUNI, AUPF" } },
    { label: { en: "Contact Us", id: "Hubungi Kami" }, path: "/collaboration#contact", description: { en: "Our partnership team", id: "Tim kemitraan kami" } },
  ],
};

export const navigation: NavGroup[] = [aboutNav, mobilityNav, internationalNav, collaborationNav];

export const newsNav = { label: { en: "News & Events", id: "Berita & Acara" }, path: "/news" };
export const infoHubNav = { label: { en: "Information Hub", id: "Pusat Informasi" }, path: "/information-hub" };
export const contactNav = { label: { en: "Contact Us", id: "Hubungi Kami" }, path: "/contact" };
export const directNav = [newsNav, infoHubNav];

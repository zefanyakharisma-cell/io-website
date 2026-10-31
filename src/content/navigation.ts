import type { L } from "@/lib/i18n";
import { media } from "./media.generated";

export type NavLink = { label: L; path: string; description: L };
export type NavGroup = {
  label: L;
  path: string;
  image: { src: string; alt: string };
  blurb: L;
  links: NavLink[];
};

/** Main menu, following KUI's spec (WEBSITE IO, Sheet1). */
export const inboundNav: NavGroup = {
  label: { en: "Inbound Programs", id: "Program Inbound" },
  path: "/inbound",
  image: media.mobility.bromo,
  blurb: { en: "Study at Petra in Surabaya — for a semester, a summer, or a full degree.", id: "Belajar di Petra, Surabaya — satu semester, musim panas, atau gelar penuh." },
  links: [
    { label: { en: "Student Exchange", id: "Pertukaran Mahasiswa" }, path: "/inbound/student-exchange", description: { en: "1–2 semesters, credits that count", id: "1–2 semester, kredit diakui" } },
    { label: { en: "Short Programs", id: "Program Singkat" }, path: "/inbound/short-programs", description: { en: "PSP, ASP, ICOP, Indonesian Spectrum", id: "PSP, ASP, ICOP, Indonesian Spectrum" } },
    { label: { en: "Tailor-made Programs", id: "Program Tailor-made" }, path: "/inbound/tailor-made", description: { en: "Built for your cohort", id: "Dirancang untuk kelompok Anda" } },
    { label: { en: "International Programs", id: "Program Internasional" }, path: "/inbound/international-programs", description: { en: "Bachelor's degrees in English", id: "Program sarjana berbahasa Inggris" } },
    { label: { en: "Darmasiswa Scholarship", id: "Beasiswa Darmasiswa" }, path: "/inbound/darmasiswa", description: { en: "Indonesian language & culture", id: "Bahasa & budaya Indonesia" } },
    { label: { en: "Registration, visa & costs", id: "Pendaftaran, visa & biaya" }, path: "/inbound#registration", description: { en: "Requirements, visa, rules", id: "Persyaratan, visa, aturan" } },
  ],
};

export const outboundNav: NavGroup = {
  label: { en: "Outbound Programs", id: "Program Outbound" },
  path: "/outbound",
  image: media.mobility["korea-university"],
  blurb: { en: "Petranesians abroad: IISMA, exchange, double degrees, short and online programmes.", id: "Petranesian ke luar negeri: IISMA, pertukaran, gelar ganda, program singkat dan daring." },
  links: [
    { label: { en: "IISMA", id: "IISMA" }, path: "/outbound#iisma", description: { en: "Government mobility awards", id: "Beasiswa mobilitas pemerintah" } },
    { label: { en: "Global outbound", id: "Outbound global" }, path: "/outbound#global", description: { en: "Exchange, study abroad, joint & dual degree", id: "Pertukaran, study abroad, joint & dual degree" } },
    { label: { en: "Online outbound", id: "Outbound daring" }, path: "/outbound#online", description: { en: "ICE Institute", id: "ICE Institute" } },
    { label: { en: "Local outbound", id: "Outbound lokal" }, path: "/outbound#local", description: { en: "Local exchange, NUNI, BKPTKI", id: "Pertukaran lokal, NUNI, BKPTKI" } },
    { label: { en: "Registration & rules", id: "Pendaftaran & aturan" }, path: "/outbound#registration", description: { en: "Requirements and dos & don'ts", id: "Persyaratan dan hal yang boleh/tidak" } },
  ],
};

export const partnersNav: NavGroup = {
  label: { en: "Partners", id: "Mitra" },
  path: "/partners",
  image: media.mobility["exchange-group"],
  blurb: { en: "430+ national and 180+ international partners, and five consortia.", id: "430+ mitra nasional dan 180+ mitra internasional, serta lima konsorsium." },
  links: [
    { label: { en: "Domestic partners", id: "Mitra dalam negeri" }, path: "/partners#domestic", description: { en: "Industry, government, institutions", id: "Industri, pemerintah, institusi" } },
    { label: { en: "International partners", id: "Mitra internasional" }, path: "/partners#international", description: { en: "Universities in 33 countries", id: "Universitas di 33 negara" } },
    { label: { en: "Consortiums", id: "Konsorsium" }, path: "/partners#consortiums", description: { en: "ACUCA, GHAS, P2A, BKPTKI, NUNI", id: "ACUCA, GHAS, P2A, BKPTKI, NUNI" } },
    { label: { en: "Work with us", id: "Bekerja sama" }, path: "/partners#collaborate", description: { en: "8 ways to collaborate", id: "8 cara berkolaborasi" } },
  ],
};

export const aboutNav: NavGroup = {
  label: { en: "Get to Know Us", id: "Mengenal Kami" },
  path: "/about",
  image: media.campus.landmark,
  blurb: { en: "Petra Christian University, Surabaya — since 1961, ranked in QS WUR 2026.", id: "Universitas Kristen Petra, Surabaya — sejak 1961, masuk QS WUR 2026." },
  links: [
    { label: { en: "About Petra", id: "Tentang Petra" }, path: "/about", description: { en: "Rankings, numbers, campus resources", id: "Peringkat, angka, fasilitas kampus" } },
    { label: { en: "Petramate", id: "Petramate" }, path: "/about/petramate", description: { en: "Our student buddy team", id: "Tim buddy mahasiswa kami" } },
    { label: { en: "Beautiful Surabaya", id: "Surabaya yang Indah" }, path: "/about/surabaya", description: { en: "Near Bali and Malang", id: "Dekat Bali dan Malang" } },
    { label: { en: "Where We Are", id: "Lokasi Kami" }, path: "/about/campus", description: { en: "Surabaya, East Java", id: "Surabaya, Jawa Timur" } },
    { label: { en: "Faculties & Programmes", id: "Fakultas & Program Studi" }, path: "/about/faculties", description: { en: "7 faculties, 59 programmes", id: "7 fakultas, 59 program" } },
    { label: { en: "Research & Labs", id: "Riset & Laboratorium" }, path: "/about/research", description: { en: "65+ labs, 36 Q1 articles", id: "65+ laboratorium, 36 artikel Q1" } },
    { label: { en: "AI@PETRA & Drone Academy", id: "AI@PETRA & Drone Academy" }, path: "/about/ai", description: { en: "An AI-native campus", id: "Kampus AI-native" } },
  ],
};

export const navigation: NavGroup[] = [inboundNav, outboundNav, partnersNav, aboutNav];

export const newsNav = { label: { en: "News", id: "Berita" }, path: "/news" };
export const contactNav = { label: { en: "Contact Us", id: "Hubungi Kami" }, path: "/contact" };
export const directNav = [newsNav, contactNav];

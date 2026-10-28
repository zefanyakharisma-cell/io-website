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

export const navigation: NavGroup[] = [
  {
    label: { en: "About PETRA", id: "Tentang PETRA" },
    path: "/about",
    image: media.campus.landmark,
    blurb: {
      en: "A Christian university in Surabaya since 1961, ranked in the QS World University Rankings 2026.",
      id: "Universitas Kristen di Surabaya sejak 1961, masuk QS World University Rankings 2026.",
    },
    links: [
      { label: { en: "Overview", id: "Profil" }, path: "/about", description: { en: "Rankings, accreditation and numbers", id: "Peringkat, akreditasi dan angka" } },
      { label: { en: "Where We Are", id: "Lokasi Kami" }, path: "/about/campus", description: { en: "Surabaya, East Java, Indonesia", id: "Surabaya, Jawa Timur, Indonesia" } },
      { label: { en: "Faculties & Programmes", id: "Fakultas & Program Studi" }, path: "/about/faculties", description: { en: "7 faculties, 59 programmes", id: "7 fakultas, 59 program" } },
      { label: { en: "Research & Labs", id: "Riset & Laboratorium" }, path: "/about/research", description: { en: "65+ labs, 36 Q1 articles", id: "65+ laboratorium, 36 artikel Q1" } },
      { label: { en: "AI@PCU & Drone Academy", id: "AI@PCU & Drone Academy" }, path: "/about/ai", description: { en: "An AI-native campus", id: "Kampus AI-native" } },
    ],
  },
  {
    label: { en: "Mobility Program", id: "Program Mobilitas" },
    path: "/mobility/inbound",
    image: media.mobility.bromo,
    blurb: {
      en: "Come to Surabaya for a semester or a summer, or go abroad to one of our partners.",
      id: "Datang ke Surabaya untuk satu semester atau musim panas, atau berangkat ke kampus mitra kami.",
    },
    links: [
      { label: { en: "Inbound", id: "Inbound" }, path: "/mobility/inbound", description: { en: "Exchange and summer programmes at Petra", id: "Pertukaran dan program musim panas di Petra" } },
      { label: { en: "Outbound", id: "Outbound" }, path: "/mobility/outbound", description: { en: "Petranesians in 10 countries", id: "Petranesian di 10 negara" } },
      { label: { en: "Regular International Program", id: "Program Internasional Reguler" }, path: "/mobility/international-program", description: { en: "8 bachelor's degrees taught in English", id: "8 program sarjana berbahasa Inggris" } },
    ],
  },
  {
    label: { en: "Partnership", id: "Kemitraan" },
    path: "/partnership/partners",
    image: media.mobility["exchange-group"],
    blurb: {
      en: "180+ international partners in 33 countries, and two EU-funded consortia.",
      id: "180+ mitra internasional di 33 negara, dan dua konsorsium yang didanai Uni Eropa.",
    },
    links: [
      { label: { en: "Partner List", id: "Daftar Mitra" }, path: "/partnership/partners", description: { en: "Who we work with", id: "Mitra kerja sama kami" } },
      { label: { en: "Consortia", id: "Konsorsium" }, path: "/partnership/consortia", description: { en: "Networks and EU projects", id: "Jejaring dan proyek Uni Eropa" } },
      { label: { en: "Connect with Us", id: "Hubungi Kami" }, path: "/partnership/connect", description: { en: "8 ways to work with Petra", id: "8 cara bekerja sama dengan Petra" } },
    ],
  },
];

export const newsNav = { label: { en: "News & Updates", id: "Berita & Kabar" }, path: "/news" };

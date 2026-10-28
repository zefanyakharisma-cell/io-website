import type { L } from "./i18n";

/** Interface strings shared across pages. */
export const ui = {
  skip: { en: "Skip to content", id: "Langsung ke konten" },
  menu: { en: "Menu", id: "Menu" },
  close: { en: "Close", id: "Tutup" },
  home: { en: "Home", id: "Beranda" },
  language: { en: "Bahasa Indonesia", id: "English" },
  languageShort: { en: "ID", id: "EN" },
  readMore: { en: "Read more", id: "Baca selengkapnya" },
  learnMore: { en: "Learn more", id: "Selengkapnya" },
  allNews: { en: "All news", id: "Semua berita" },
  connect: { en: "Connect with us", id: "Hubungi kami" },
  applyNow: { en: "Apply now", id: "Daftar sekarang" },
  watch: { en: "Watch", id: "Tonton" },
  toConfirm: { en: "Details to be confirmed by the International Office", id: "Detail menunggu konfirmasi Kantor Urusan Internasional" },
  source: { en: "Source", id: "Sumber" },
  footerAbout: {
    en: "The International Office (Kantor Urusan Internasional) connects Petra Christian University with 180+ partners in 33 countries.",
    id: "Kantor Urusan Internasional (KUI) menghubungkan Universitas Kristen Petra dengan 180+ mitra di 33 negara.",
  },
  rights: { en: "Petra Christian University. All rights reserved.", id: "Universitas Kristen Petra. Hak cipta dilindungi." },
} satisfies Record<string, L>;

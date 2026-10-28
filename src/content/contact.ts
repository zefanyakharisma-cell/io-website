import type { L } from "@/lib/i18n";

/** Slide 50. */
export const contact = {
  office: { en: "International Office (KUI)", id: "Kantor Urusan Internasional (KUI)" } satisfies L,
  email: "io@petra.ac.id",
  phone: "+62 31 2983185-88",
  phoneHref: "tel:+62312983185",
  address: "Siwalankerto 121–131, Surabaya, East Java 60236, Indonesia",
  web: ["petra.ac.id", "io.petra.ac.id"],
  social: [
    // Xiaohongshu profiles have no stable public URL; the handle is shown as text.
    { network: "Instagram", handle: "@internationaloffice_pcu", url: "https://www.instagram.com/internationaloffice_pcu/" },
    { network: "Instagram", handle: "@lifeatpcu", url: "https://www.instagram.com/lifeatpcu/" },
    { network: "Xiaohongshu", handle: "小红书 @PetraMeetsTheWorld", url: null },
  ],
  mapUrl: "https://maps.google.com/?q=Petra+Christian+University+Siwalankerto+Surabaya",
};

export const inquiryTopics = [
  { value: "partnership", label: { en: "New partnership / MoU", id: "Kemitraan baru / MoU" } },
  { value: "exchange", label: { en: "Student exchange", id: "Pertukaran mahasiswa" } },
  { value: "degree", label: { en: "Joint or double degree", id: "Gelar bersama atau ganda" } },
  { value: "summer", label: { en: "Summer or short programme", id: "Program musim panas atau singkat" } },
  { value: "research", label: { en: "Research collaboration", id: "Kolaborasi riset" } },
  { value: "visit", label: { en: "Delegation visit", id: "Kunjungan delegasi" } },
  { value: "other", label: { en: "Something else", id: "Lainnya" } },
] satisfies { value: string; label: L }[];

export const partnershipProcess = [
  { title: { en: "Say hello", id: "Sapa kami" }, body: { en: "Tell us who you are and what you have in mind.", id: "Ceritakan siapa Anda dan apa yang Anda rencanakan." } },
  { title: { en: "Shape it together", id: "Rancang bersama" }, body: { en: "We match you with the right faculty and agree the scope, from one joint lecture to a full degree pathway.", id: "Kami menghubungkan Anda dengan fakultas yang tepat dan menyepakati cakupan, dari satu kuliah bersama hingga jalur gelar penuh." } },
  { title: { en: "Sign and start", id: "Tanda tangan dan mulai" }, body: { en: "An MoU or agreement is signed, and the International Office supports every step that follows.", id: "MoU atau perjanjian ditandatangani, dan KUI mendampingi setiap langkah berikutnya." } },
] satisfies { title: L; body: L }[];

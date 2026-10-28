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

/** Inquiry topics, each routed to the KUI address named in the spec (Sheet1 → Contact Us). */
export const inquiryTopics = [
  { value: "partnership", to: "head-partnership@petra.ac.id", label: { en: "New partnership / MoU", id: "Kemitraan baru / MoU" } },
  { value: "degree", to: "head-partnership@petra.ac.id", label: { en: "Joint or dual degree", id: "Joint atau dual degree" } },
  { value: "research", to: "head-partnership@petra.ac.id", label: { en: "Research collaboration", id: "Kolaborasi riset" } },
  { value: "visit", to: "head-partnership@petra.ac.id", label: { en: "Delegation visit", id: "Kunjungan delegasi" } },
  { value: "inbound", to: "head-mobility@petra.ac.id", label: { en: "Studying at Petra (international students)", id: "Belajar di Petra (mahasiswa internasional)" } },
  { value: "outbound", to: "staff-mobility@petra.ac.id", label: { en: "Going abroad (Petra students)", id: "Ke luar negeri (mahasiswa Petra)" } },
  { value: "intprogram", to: "intprogram@petra.ac.id", label: { en: "International Program (degree)", id: "Program Internasional (gelar)" } },
  { value: "petramate", to: "head-mobility@petra.ac.id", label: { en: "Petramate", id: "Petramate" } },
  { value: "other", to: "io@petra.ac.id", label: { en: "Something else", id: "Lainnya" } },
] satisfies { value: string; to: string; label: L }[];


import type { L } from "@/lib/i18n";
import { media } from "./media.generated";

/** Slides 5–7: seven faculties, their study programmes and tracks. */
export type Faculty = {
  code: string;
  name: L;
  programmeCount: number;
  accent: "amber" | "teal" | "cerise" | "blue" | "green" | "orange" | "purple";
  image: { src: string; alt: string };
  programmes: { name: string; tracks?: string }[];
  postgraduate?: string;
};

export const faculties: Faculty[] = [
  {
    code: "FTSP",
    name: { en: "Civil Engineering & Planning", id: "Teknik Sipil & Perencanaan" },
    programmeCount: 3,
    accent: "amber",
    image: media.faculty["architecture-model"],
    programmes: [{ name: "Civil Engineering" }, { name: "Architecture" }, { name: "Sustainable Housing & Real Estate" }],
    postgraduate: "M.Sc. Civil Engineering · M.Arch. · Dr. Civil Engineering",
  },
  {
    code: "FTI",
    name: { en: "Industrial Technology", id: "Teknologi Industri" },
    programmeCount: 12,
    accent: "teal",
    image: media.faculty["engineering-workshop"],
    programmes: [
      { name: "Electrical Engineering", tracks: "Internet of Things" },
      { name: "Mechanical Engineering", tracks: "Sustainable Design · Automotive" },
      { name: "Industrial Engineering", tracks: "Global Logistics & Supply Chain" },
      { name: "Informatics", tracks: "Business Info. System · Data Science · AI" },
      { name: "Food Technology" },
      { name: "International Business Engineering" },
    ],
    postgraduate: "M.T. Industrial Eng. · Engineer Profession",
  },
  {
    code: "SBM",
    name: { en: "Business & Management", id: "Bisnis & Manajemen" },
    programmeCount: 14,
    accent: "cerise",
    image: media.faculty.culinary,
    programmes: [
      { name: "Management", tracks: "Business · Branding & Digital Marketing · Retail · Finance & Investment · Tourism · Culinary · Int'l Business Mgmt" },
      { name: "Accounting", tracks: "Business · Tax · Int'l Trade & Finance · Int'l Business Accounting · Int'l Digital Accounting & Fraud" },
      { name: "Petra Business School", tracks: "Global Entrepreneurship · Applied Finance" },
    ],
    postgraduate: "M.M. · Dr. Leadership & Management",
  },
  {
    code: "FHIK",
    name: { en: "Humanities & Creative Industries", id: "Humaniora & Industri Kreatif" },
    programmeCount: 13,
    accent: "purple",
    image: media.faculty["design-studio"],
    programmes: [
      { name: "English", tracks: "Creative Industry · Business" },
      { name: "Chinese" },
      { name: "Design", tracks: "Interior · Visual Communication · Fashion & Textile · Digital Media" },
      { name: "Communication", tracks: "Creative Media · Strategic · Interactive Media" },
    ],
    postgraduate: "M.A. Literature · M.Ds.",
  },
  {
    code: "FKIP",
    name: { en: "Teacher Education", id: "Keguruan & Ilmu Pendidikan" },
    programmeCount: 3,
    accent: "green",
    image: media.faculty["teacher-ed"],
    programmes: [
      { name: "Elementary Teacher Education" },
      { name: "Early Childhood Teacher Education" },
      { name: "International Teacher Education", tracks: "Early Childhood · Elementary" },
    ],
    postgraduate: "Certifications: child counsellor · special-needs education",
  },
  {
    code: "FK",
    name: { en: "Medicine", id: "Kedokteran" },
    programmeCount: 2,
    accent: "orange",
    image: media.faculty.medicine,
    programmes: [{ name: "Medicine", tracks: "Sarjana Kedokteran, S.Ked." }, { name: "Medical Doctor Profession", tracks: "dokter, dr." }],
  },
  {
    code: "FKG",
    name: { en: "Dentistry", id: "Kedokteran Gigi" },
    programmeCount: 2,
    accent: "blue",
    image: media.faculty.dentistry,
    programmes: [{ name: "Dental Medicine", tracks: "Sarjana Kedokteran Gigi" }, { name: "Dentist Profession", tracks: "dokter gigi, drg." }],
  },
];

export const structureTotals = [
  { value: 7, label: { en: "faculties", id: "fakultas" } },
  { value: 30, label: { en: "study programmes", id: "program studi" } },
  { value: 59, label: { en: "programmes & tracks", id: "program & peminatan" } },
] satisfies { value: number; label: L }[];

/** Slides 9 and 63: English-taught bachelor's degrees (Inbound route two). */
/** Awards per the deck: S.M. / S.Ak. / S.T. / S.Pd.; FHIK awards are not listed there. */
export const englishProgrammes: { faculty: string; name: string; award?: string }[] = [
  { faculty: "SBM", name: "International Business Management", award: "S.M." },
  { faculty: "SBM", name: "International Business Accounting", award: "S.Ak." },
  { faculty: "SBM", name: "International Digital Accounting & Fraud", award: "S.Ak." },
  { faculty: "FHIK", name: "International Program in Digital Media (IPDM)" },
  { faculty: "FHIK", name: "English: Creative Industry Business" },
  { faculty: "FHIK", name: "Chinese" },
  { faculty: "FTI", name: "International Business Engineering", award: "S.T." },
  { faculty: "FKIP", name: "International Teacher Education (Elementary · Early Childhood)", award: "S.Pd." },
];

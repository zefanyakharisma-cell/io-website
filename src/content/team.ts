import type { L } from "@/lib/i18n";

/** Contact routes from KUI's spec (WEBSITE IO, Sheet1 → Contact Us). */
export const contactGroups: { audience: L; contacts: { email: string; role: L }[] }[] = [
  {
    audience: { en: "For partners", id: "Untuk mitra" },
    contacts: [
      { email: "head-partnership@petra.ac.id", role: { en: "Partnership", id: "Kemitraan" } },
      { email: "staff-partnership@petra.ac.id", role: { en: "Partnership", id: "Kemitraan" } },
    ],
  },
  {
    audience: { en: "For students", id: "Untuk mahasiswa" },
    contacts: [
      { email: "head-mobility@petra.ac.id", role: { en: "International students", id: "Mahasiswa internasional" } },
      { email: "staff-mobility@petra.ac.id", role: { en: "Indonesian students", id: "Mahasiswa Indonesia" } },
    ],
  },
  {
    audience: { en: "International track", id: "Jalur internasional" },
    contacts: [{ email: "intprogram@petra.ac.id", role: { en: "International Program", id: "Program Internasional" } }],
  },
  {
    audience: { en: "For Petramate", id: "Untuk Petramate" },
    contacts: [{ email: "head-mobility@petra.ac.id", role: { en: "International students", id: "Mahasiswa internasional" } }],
  },
];

/**
 * KUI persons in charge. Names and photos are pending from KUI; the roles
 * follow the contact routes above. Fill `name` and `photo` to replace the placeholder.
 */
export const team: { role: L; email: string; name: string; photo?: string }[] = [
  { role: { en: "Head of Partnership", id: "Kepala Kemitraan" }, email: "head-partnership@petra.ac.id", name: "" },
  { role: { en: "Partnership Staff", id: "Staf Kemitraan" }, email: "staff-partnership@petra.ac.id", name: "" },
  { role: { en: "Head of Mobility", id: "Kepala Mobilitas" }, email: "head-mobility@petra.ac.id", name: "" },
  { role: { en: "Mobility Staff", id: "Staf Mobilitas" }, email: "staff-mobility@petra.ac.id", name: "" },
  { role: { en: "International Program", id: "Program Internasional" }, email: "intprogram@petra.ac.id", name: "" },
];

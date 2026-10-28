/**
 * Every external link on the site, in one place for KUI to maintain.
 * An empty string ("") renders as a disabled "Link coming soon" pill,
 * so a missing URL never produces a broken link.
 * Entries marked TO CONFIRM came from public sources, not from KUI.
 */
export const links = {
  // Registration
  inboundRegistration: "https://international-registration.petra.ac.id",
  outboundRegistration: "", // KUI: outbound student registration form
  petramateRegistration: "", // KUI: Petramate online registration form

  // Downloads (Google Drive, shared with @petra.ac.id and @john.petra.ac.id accounts only)
  inboundCourses: "", // Excel: courses offered in English for inbound exchange
  outboundExchangeList: "", // Excel: student exchange destinations
  outboundStudyAbroadList: "", // Excel: study abroad destinations
  outboundJointDegreeList: "", // Excel: joint degree programmes
  outboundDualDegreeList: "", // Excel: dual degree programmes

  // Programmes
  icop: "https://cop.petra.ac.id/",
  psp: "https://psp.petra.ac.id/",
  asp: "https://asp.petra.ac.id/",
  spectra: "https://indonesianspectrum.petra.ac.id/",
  petraBusinessSchool: "", // KUI: Petra Business School website
  darmasiswa: "https://darmasiswa.kemendikdasmen.go.id/", // per 2026/27 guidelines
  darmasiswaApply: "https://apply.darmasiswa.kemendikdasmen.go.id/", // per 2026/27 guidelines
  iisma: "https://iisma.id/", // per partner-university guides; older domain iisma.kemdikbud.go.id
  iceInstitute: "https://icei.ac.id/",

  // Faculty websites, keyed by faculty code (found by web search; KUI to confirm)
  faculty: {
    FTSP: "https://ftsp.petra.ac.id/",
    FTI: "https://fti.petra.ac.id/",
    SBM: "", // KUI: School of Business and Management site
    FHIK: "", // KUI: Faculty of Humanities and Creative Industries site
    FKIP: "", // KUI: Faculty of Teacher Education site
    FK: "https://fk.petra.ac.id/en/",
    FKG: "https://fkg.petra.ac.id/en/",
  } as Record<string, string>,

  // Study programme websites, keyed by the programme name in faculties.ts (KUI to confirm)
  programmes: {
    "Civil Engineering": "https://civil.petra.ac.id/en",
    Architecture: "https://architecture.petra.ac.id/en",
    "Sustainable Housing & Real Estate": "",
    "Electrical Engineering": "https://electrical.petra.ac.id/en/",
    "Mechanical Engineering": "https://smed.petra.ac.id/en/",
    "Industrial Engineering": "https://industrial.petra.ac.id/en/",
    Informatics: "https://informatics.petra.ac.id/en/",
    "Food Technology": "https://foodtech.petra.ac.id/en/",
    "International Business Engineering": "https://ibe.petra.ac.id/",
    Management: "",
    Accounting: "https://bacc.petra.ac.id/en/",
    "Petra Business School": "https://pbs.petra.ac.id/",
    English: "",
    Chinese: "",
    Design: "",
    Communication: "",
    "Elementary Teacher Education": "https://pgsd.petra.ac.id/en/",
    "Early Childhood Teacher Education": "https://pgpaud.petra.ac.id/en/",
    "International Teacher Education": "https://itep.petra.ac.id/en/",
    Medicine: "https://fk.petra.ac.id/en/",
    "Medical Doctor Profession": "",
    "Dental Medicine": "https://fkg.petra.ac.id/en/",
    "Dentist Profession": "",
  } as Record<string, string>,

  // Track, programme and postgraduate sites shown under each faculty (KUI to confirm)
  programmeSites: [
    { faculty: "FTSP", label: "M.Sc. Civil Engineering", url: "https://mcivil.petra.ac.id/en/" },
    { faculty: "FTSP", label: "Doctor of Civil Engineering", url: "https://doctoral-civil.petra.ac.id/en/" },
    { faculty: "FTSP", label: "Master of Architecture", url: "https://mars.petra.ac.id/en/" },
    { faculty: "FTI", label: "Business Information System", url: "https://sib.petra.ac.id/en/" },
    { faculty: "FTI", label: "Data Science & Analytics", url: "https://dsa.petra.ac.id/en/" },
    { faculty: "FTI", label: "Master of Industrial Engineering", url: "https://mti.petra.ac.id/" },
    { faculty: "SBM", label: "International Business Management", url: "https://ibm.petra.ac.id/" },
    { faculty: "SBM", label: "International Business Accounting", url: "https://ibacc.petra.ac.id/" },
    { faculty: "SBM", label: "Retail Management", url: "https://retail.petra.ac.id/en/" },
    { faculty: "SBM", label: "Culinary Business", url: "https://culinary.petra.ac.id/en/" },
    { faculty: "SBM", label: "Master of Management", url: "https://mm.petra.ac.id/en/" },
    { faculty: "SBM", label: "Online Master of Management", url: "https://mm-online.petra.ac.id/en/" },
    { faculty: "SBM", label: "Doctor of Leadership & Management", url: "https://dm.petra.ac.id/en/" },
    { faculty: "FHIK", label: "Visual Communication Design", url: "https://dkv.petra.ac.id/en" },
    { faculty: "FHIK", label: "Interior Design", url: "https://interior.petra.ac.id/en/" },
    { faculty: "FHIK", label: "Fashion & Textile Design", url: "https://fashion.petra.ac.id/en/" },
    { faculty: "FHIK", label: "IPDM (Digital Media)", url: "https://ipdm.petra.ac.id/" },
  ] satisfies { faculty: string; label: string; url: string }[],

  // Beautiful Surabaya (Surabaya City Government channels, from KUI's spec)
  surabaya: [
    { label: "Instagram @surabayasparkling", url: "https://www.instagram.com/surabayasparkling/" },
    { label: "Surabaya Tourism", url: "https://tourism.surabaya.go.id/" },
    { label: "YouTube @sparklingsurabaya", url: "https://www.youtube.com/@sparklingsurabaya" },
    { label: "Tiket Wisata Surabaya", url: "https://tiketwisata.surabaya.go.id/" },
    { label: "Virtual Tourism Surabaya", url: "https://virtualtourism.surabaya.go.id/" },
  ],

  instagram: "https://www.instagram.com/internationaloffice_pcu/",
};

/** WhatsApp click-to-chat numbers (international format, digits only). */
export const whatsapp = {
  inbound: { digits: "6281232075125", display: "+62 812-3207-5125" },
  outbound: { digits: "628156000809", display: "+62 815-6000-809" },
};

/** YouTube video ids for testimonials. Leave empty to show a placeholder. */
export const testimonialVideos = {
  inbound: ["", "", ""], // KUI: 3 videos from past student exchange participants
  outbound: ["", "", ""], // KUI: NUNI, BKPTKI and IISMA participants
};

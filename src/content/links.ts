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
  darmasiswa: "https://darmasiswa.kemdikbud.go.id/", // TO CONFIRM
  iisma: "https://iisma.kemdikbud.go.id/", // TO CONFIRM
  iceInstitute: "https://iceinstitute.id/", // TO CONFIRM

  // Faculty websites, keyed by faculty code
  faculty: {
    FTSP: "",
    FTI: "",
    SBM: "",
    FHIK: "",
    FKIP: "",
    FK: "",
    FKG: "",
  } as Record<string, string>,

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

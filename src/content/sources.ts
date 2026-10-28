/**
 * Web sources behind facts on the site (accessed 28 Oct 2026). Pages cite
 * them by id through <SourceNote>; docs/sources.md lists them with context.
 */
export const sources = {
  ioAbout: { title: "Petra International Office — About us", url: "https://io.petra.ac.id/page/about-us" },
  petramate2425: { title: "Petramate open recruitment 24/25 (Petra digital repository)", url: "https://dewey.petra.ac.id/catalog/digital/view/60085" },
  pcuFactSheet: { title: "PCU Fact Sheet, Non-Degree Program Fall 2026 (hosted by HKBU)", url: "https://intl.hkbu.edu.hk/f/partner/564/Fact_Sheet_Non_Degree_Program_PCU_Fall2026.pdf" },
  darmasiswaGuidelines: { title: "Darmasiswa 2026/2027 Application Guidelines (via Università di Siena)", url: "https://www.unisi.it/sites/default/files/allegatiparagrafo/Application-Guidelines-Darmasiswa-20262027_rev.pdf" },
  darmasiswaAtmaJaya: { title: "Darmasiswa Scholarship Program 2026/2027 (Atma Jaya)", url: "https://www.atmajaya.ac.id/id/pages/darmasiswa_26-27/" },
  iismaUmy: { title: "IISMA information (Universitas Muhammadiyah Yogyakarta)", url: "https://ipirel.umy.ac.id/?p=3475" },
  iismaKatadata: { title: "Record high 15,211 people apply for IISMA in 2024 (Katadata)", url: "https://databoks.katadata.co.id/en/consumer-services/statistics/c10ad9a729a0f6a/record-high-15211-people-apply-for-the-iisma-program-in-2024" },
  icePartners: { title: "ICE Institute and partner universities strengthen digital consortium", url: "https://icei.ac.id/en/article/ice-institute-and-partner-universities-strengthen-higher-education-digital-consortium/" },
  iceFiveYears: { title: "Five years of ICE Institute (icei.ac.id)", url: "https://icei.ac.id/en/article/lima-tahun-ice-institute-membangun-masa-depan-pendidikan-digital-indonesia/" },
  visaYarsi: { title: "Visa and immigration for international students (YARSI)", url: "https://www.yarsi.ac.id/?p=11692" },
  visaBinus: { title: "International student visa guide (BINUS)", url: "https://international.binus.ac.id/?p=73888" },
  wikipediaPetra: { title: "Petra Christian University — Wikipedia", url: "https://en.wikipedia.org/wiki/Petra_Christian_University" },
  surabayaLandmarks: { title: "Famous Surabaya landmarks (What's New Indonesia)", url: "https://whatsnewindonesia.com/ultimate-guide/things-do-travel/famous-surabaya-landmarks-you-need-see" },
  surabayaCultureTrip: { title: "10 must-visit attractions in Surabaya (Culture Trip)", url: "https://theculturetrip.com/asia/indonesia/articles/10-must-visit-attractions-surabaya-indonesia" },
  suramaduWiki: { title: "Suramadu Bridge — Wikipedia", url: "https://en.wikipedia.org/wiki/Suramadu_Bridge" },
  malangToll: { title: "Surabaya–Malang travel time (Jawa Pos, 2026)", url: "https://www.jawapos.com/travelling/2602160071/5-jalur-tercepat-surabaya-malang-2026-via-tol-kereta-atau-bus-ini-panduan-lengkapnya" },
  bromoTransfer: { title: "Surabaya Airport to Mount Bromo (Backindo)", url: "https://www.backindo.com/?p=10362" },
} as const;

export type SourceId = keyof typeof sources;

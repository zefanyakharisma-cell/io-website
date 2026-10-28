# Web sources

Facts the site takes from the web, each cited on its page through `<SourceNote>`. The ids match `src/content/sources.ts`. Accessed 28 October 2026.

Where sources disagree, the page uses cautious wording and keeps the "Details to be confirmed" badge. Nothing here is presented as Petra policy unless a Petra source says so.

| Page | Fact | Source id | URL |
|---|---|---|---|
| Inbound → Visa | The six-step sequence: acceptance letter, study permit, visa, arrival, biometrics & ITAS, report to KUI. Also the documents checklist, with passport validity of at least 18 months, longer for two-year stays. Sources differ on this, so it is marked to confirm. | visaYarsi, visaBinus | https://www.yarsi.ac.id/?p=11692 · https://international.binus.ac.id/?p=73888 |
| Inbound → Darmasiswa | The 2026/27 dates: registration 15 May–15 Jun, embassy interviews 16–23 Jun, announcement 14 Jul, orientation in Jakarta late August, classes early September. Also the info and apply portals. | darmasiswaGuidelines | https://www.unisi.it/sites/default/files/allegatiparagrafo/Application-Guidelines-Darmasiswa-20262027_rev.pdf |
| Inbound → Darmasiswa | Registration on the portal, then the embassy interview. Sources differ on the age limit, so the page says "check current guidelines". | darmasiswaAtmaJaya | https://www.atmajaya.ac.id/id/pages/darmasiswa_26-27/ |
| Outbound → IISMA | Managed by the Directorate General of Higher Education. Open to undergraduates, with a vocational track since 2022. Website is iisma.id. | iismaUmy | https://ipirel.umy.ac.id/?p=3475 |
| Outbound → IISMA | Applicants: 2,551 in 2021 and 15,211 in 2024. Selected: 3,330 in 2024. | iismaKatadata | https://databoks.katadata.co.id/en/consumer-services/statistics/c10ad9a729a0f6a/record-high-15211-people-apply-for-the-iisma-program-in-2024 |
| Outbound → ICE Institute | Run by Universitas Terbuka. Members include UGM, UI, ITS, BINUS and UPH. | icePartners | https://icei.ac.id/en/article/ice-institute-and-partner-universities-strengthen-higher-education-digital-consortium/ |
| Outbound → ICE Institute | 49 partner institutions, 885 national online courses and 50,000+ learners. The credit cap is described only as "set by your study programme". | iceFiveYears | https://icei.ac.id/en/article/lima-tahun-ice-institute-membangun-masa-depan-pendidikan-digital-indonesia/ |
| Get to Know Us → Petramate | Petramates earn SKKK points for a completed term and can qualify for a scholarship in PCU's International Programs. These come from the 2024/25 call and are marked to confirm for this year. | petramate2425 | https://dewey.petra.ac.id/catalog/digital/view/60085 |
| Get to Know Us → About | The International Office is in Main Campus, D Building, Room 104. Student mobility line: +62 31 298 3188. | pcuFactSheet | https://intl.hkbu.edu.hk/f/partner/564/Fact_Sheet_Non_Degree_Program_PCU_Fall2026.pdf |
| Get to Know Us → About | History: PPPK Petra founded in 1951. The university was announced on 22 Sep 1961, starting with the Faculty of Letters. Civil Engineering followed in 1962. The 2025–2026 milestones come from the deck. | wikipediaPetra | https://en.wikipedia.org/wiki/Petra_Christian_University |
| Get to Know Us → Surabaya | Landmarks: Tugu Pahlawan (41 m, Battle of Surabaya 10 Nov 1945), House of Sampoerna (1932) and the Monkasel submarine. Its hull number is left out because sources conflict. | surabayaLandmarks, surabayaCultureTrip | https://whatsnewindonesia.com/ultimate-guide/things-do-travel/famous-surabaya-landmarks-you-need-see · https://theculturetrip.com/asia/indonesia/articles/10-must-visit-attractions-surabaya-indonesia |
| Get to Know Us → Surabaya | Suramadu Bridge: 5.4 km (5,438 m), opened June 2009, the longest bridge in Indonesia. | suramaduWiki | https://en.wikipedia.org/wiki/Suramadu_Bridge |
| Get to Know Us → Surabaya | Surabaya to Malang: 1.5–2 h by toll road, about 2 h by train. | malangToll | https://www.jawapos.com/travelling/2602160071/5-jalur-tercepat-surabaya-malang-2026-via-tol-kereta-atau-bus-ini-panduan-lengkapnya |
| Get to Know Us → Surabaya | Surabaya to Bromo: 3–4 h by road. | bromoTransfer | https://www.backindo.com/?p=10362 |
| Get to Know Us → Surabaya | Surabaya to Bali: about 1¼ h by air. Estimated from airline schedules, so no single source. | — | — |

| Get to Know Us → Surabaya | The day-trips map outline, made from the Natural Earth admin-1 provinces by `scripts/build-regionmap.mjs`. The data is public domain. | naturalEarth | https://github.com/nvkelso/natural-earth-vector |

## Links found by web search (to confirm with KUI)

These links were found by web search on 28 Oct 2026. They could not be opened from the build environment, so KUI should confirm them.

- **Consortium websites** (`src/content/partners.ts`):
  - ACUCA: acuca.net. The address comes from UKI's ACUCA page and is unverified.
  - GHAS: ghas.hakka.nycu.edu.tw. Petra is listed as an overseas founding member.
  - P2A: passagetoasean.org, from the ASEAN entities directory. No source confirms Petra's membership, so the card keeps the to-confirm badge.
  - NUNI: BINUS Global's NUNI page. NUNI's secretariat is at BINUS.
  - BKPTKI: no official website was found.
- **Faculty and programme websites** (`src/content/links.ts`): taken from the `*.petra.ac.id` subdomains that appeared in search results.
  - Faculties: ftsp, fti, fk, fkg.
  - Programmes: civil, architecture, electrical, smed (Mechanical Engineering), industrial, informatics, foodtech, ibe, bacc, pbs, pgsd, pgpaud, itep.
  - Tracks and postgraduate: mcivil, doctoral-civil, mars, sib, dsa, mti, ibm, ibacc, retail, culinary, mm, mm-online, dm, dkv, interior, fashion, ipdm.
  - Not found: the SBM, FHIK and FKIP faculty sites, and the Management, English, Chinese, Design (the umbrella programme), Communication and professional-programme sites.
- **Partner homepages** (`src/content/partner-sites.ts`): the official domain of each named partner.
- **Domestic partners** (`domesticPartners` in `partners.ts`):
  - Industry names from the deck (slide on industry partners).
  - Monash University, Indonesia: MoU signed 17 Sep 2024 (monash.edu/indonesia news).
  - Universitas Gadjah Mada: cooperation announced on ugm.ac.id (news 23617).
  - Bank Jatim: MoU signed 17 Jun 2025 (Jatim Times).
  - Maspion Group: cooperation from Aug 2022 (Jawa Pos).
  - Universitas Sumatera Utara: partner in the Erasmus+ project.

## Photos

Fetched from Wikimedia Commons on 28 Oct 2026 by `scripts/fetch-web-photos.mjs`, which reads `scripts/web-photos.json`. The script rejects any file whose licence isn't CC0, public domain, CC BY or CC BY-SA. Each photo is credited on its page with author, licence and a link to the file page.

The five Petra photos were uploaded to Commons by **BrandingPCU**, Petra's own branding account. petra.ac.id itself could not be used: it sits behind a Cloudflare bot check that refuses scripted requests.

| Page | Photo | Author | Licence | Commons file |
|---|---|---|---|---|
| Get to Know Us → Surabaya (landmarks) | Tugu Pahlawan, the Heroes Monument, under a blue sky in central Surabaya | P. Hughes | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Surabaya_-_Heroes_Monument,_or_Tugu_Pahlawan.jpg |
| Get to Know Us → Surabaya (landmarks) | Colonnaded façade of the House of Sampoerna museum | consigliere ivan from Bontang, Indonesia | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:House_of_Sampoerna_Mei_2015.jpg |
| Get to Know Us → Surabaya (landmarks) | Suramadu Bridge spanning the Madura Strait, fishing boats in the foreground | Sakurai Midori | CC BY 3.0 | https://commons.wikimedia.org/wiki/File:Suramadu_Bridge_5.JPG |
| Get to Know Us → Surabaya (landmarks) | The Monkasel submarine museum on the bank of the Kalimas River | Midori | CC BY 3.0 | https://commons.wikimedia.org/wiki/File:Submarine_Monument_Surabaya_2.JPG |
| Get to Know Us → Surabaya (in pictures) | Surabaya rooftops and high-rises on a clear day | Rifky2011 | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Surabaya_City_Skyline_in_July_2025.jpg |
| Get to Know Us → Surabaya (in pictures) | Surabaya's towers and light trails at night | Pasha Dwantara | CC0 | https://commons.wikimedia.org/wiki/File:Surabaya_at_Night,_2025.jpg |
| Get to Know Us → Surabaya (in pictures) | Mount Bromo and the Tengger caldera at sunrise | Thomas Fuhrmann | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Gunung_Bromo_sunrise_-_Indonesia.jpg |
| Get to Know Us → Surabaya (in pictures) | Night view over the lights of Malang | Uliyanti | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Malang_city.jpg |
| Where We Are (campus gallery) | The Radius Prawiro (W) Building at Petra Christian University | BrandingPCU | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Radius_Prawiro_or_W_Building_in_PCU.jpg |
| Where We Are (campus gallery) | The Servant Leader sculpture of Jesus washing a disciple's feet, Q Building | BrandingPCU | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Servant_Leader_-_Q_Building.jpg |
| Where We Are (campus gallery) | Reading tables in Petra's new library | BrandingPCU | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:New_Library_in_PCU.jpg |
| Home (in pictures) | Community Outreach Program students painting a school mural, 2018 | BrandingPCU | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:COP_-_2018.jpg |
| Home (in pictures) | Community Outreach Program students laying paving blocks in Surabaya, 2022 | BrandingPCU | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:20220326_-_COP_Surabaya_3.jpg |

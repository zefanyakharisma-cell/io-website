# Petra Christian University — International Office website

The public website of the International Office (Kantor Urusan Internasional, KUI) of Petra Christian University, Surabaya. It is built from the deck *PETRA International Profile (General)* and styled with the **PCU Design System** plus a "Midnight Glass" glassmorphism layer.

- **Audience:** partner institutions first, international students second.
- **Languages:** English (`/en/`) and Bahasa Indonesia (`/id/`). The Indonesian copy still needs a KUI review.
- **Stack:** Next.js 15 (App Router, static export), TypeScript, Tailwind CSS v4 and Framer Motion. Components are adapted from [21st.dev](https://21st.dev): glass navigation, glass video hero, world map with arcs, infinite slider, number ticker and the bento grid pattern.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000/en/
npm run build      # static site in out/
npm run lint
```

`npm run build` writes a fully static site to `out/`. Any static host can serve it. On Vercel, import the repository and the defaults work.

## Sitemap

The menu follows KUI's content spec: the Google Sheet "WEBSITE IO", Sheet1.

| Menu | Pages (under `/en/` and `/id/`) |
|---|---|
| Home | `/` — photo slides with testimonial slots, faculties, numbers, programmes, partner map, news, gallery |
| Inbound Programs | `inbound` (programs, registration info, visa, related costs, dos & don'ts, video testimonies, inquiries) · `inbound/student-exchange` · `inbound/short-programs` · `inbound/tailor-made` · `inbound/international-programs` · `inbound/darmasiswa` |
| Outbound Programs | `outbound` (IISMA, global outbound, joint/dual degree partners, registration & rules, ICE Institute, local outbound, testimonies, inquiries) |
| Partners | `partners` (domestic, international by continent, consortiums, EU projects, 8 ways to collaborate) |
| Get to Know Us | `about` (incl. campus resources) · `about/petramate` · `about/surabaya` · `about/campus` · `about/faculties` · `about/research` · `about/ai` |
| News | `news` (upcoming and past events) · `news/[slug]` |
| Contact Us | `contact` (contact routes, KUI persons in charge, WhatsApp, inquiry form) |

## Where things live

```
src/content/         All site copy and data, typed and bilingual ({ en, id })
  profile.ts         Rankings, numbers, accreditation, campus
  faculties.ts       7 faculties, programmes, English-taught degrees
  mobility.ts        Exchange steps, ICOP/PSP/SPECTRA/ASP, joint degrees, gallery
  partners.ts        Network numbers, partner list, consortia, EU projects, 8 ways to collaborate
  research.ts        Q1 output, study centres, researcher stories, lab tour
  ai.ts              AI@PCU and Petra Drone Academy
  contact.ts         Office details, inquiry topics
  links.ts           Every external link, WhatsApp numbers, testimonial video ids (fill these in)
  inbound.ts         Inbound programmes, requirements, visa, costs, dos & don'ts, tailor-made, Darmasiswa
  outbound.ts        IISMA, global/online/local outbound, requirements, dos & don'ts
  getToKnow.ts       Campus resources, Petramate, Beautiful Surabaya
  team.ts            Contact routes and KUI persons in charge
  testimonials.ts    Home hero slides
  media.ts           Video slots and YouTube embeds (fill these in)
  media.generated.ts Generated from scripts/media-manifest.json — do not edit
content/news/*.md    News posts (both languages in one file)
src/components/      brand/ (Logo, Ring, Glass canvas, VideoSlot…), ui/ (21st.dev adaptations), sections/, layout/
public/brand/        Logo, fonts and shapes copied from the PCU Design System
public/images/       WebP photos extracted from the deck
scripts/             build-media.mjs (deck photos → WebP), build-map.mjs (dotted world map)
```

### Fill in links, videos and posters

Most "coming soon" items are filled in from one place:

- **`src/content/links.ts`** holds every external link:
  - Registration forms and Petramate registration.
  - The Petra-only Google Drive Excel files (inbound courses; outbound exchange, study abroad, joint and dual degree lists).
  - Faculty websites, Petra Business School, Darmasiswa, IISMA and ICE Institute.
  - The WhatsApp numbers and the YouTube testimonial video IDs.
  - A link left as `""` shows as a non-clickable "Link coming soon" pill.
- **`src/content/media.ts`** holds the PSP and ASP posters (`posters`) and the background videos.
- **`src/content/team.ts`** holds the KUI persons in charge: fill in `name` and `photo`.
- **`src/content/testimonials.ts`** holds the home hero slides. Add `quote`, `name` and `program` when KUI provides real testimonials.
- **Upcoming events:** add a news post with `kind: upcoming` and `eventDate: YYYY-MM-DD`. It shows under Upcoming Events until that date passes.

For the outbound Excel files, share each one in Google Drive only with the `petra.ac.id` and `john.petra.ac.id` domains, then paste its link in `links.ts`. Google then asks visitors to sign in with a Petra account.

### Edit copy

Change the matching file in `src/content/`. Every string is `{ en: "…", id: "…" }`.

### Add a news post

Create `content/news/my-post.md`:

```md
---
date: 2026-11-01
category: Mobility          # Mobility | Partnership | Research | Events
cover: mobility.bromo       # any key from src/content/media.generated.ts
title:
  en: English title
  id: Judul bahasa Indonesia
excerpt:
  en: One-sentence summary.
  id: Ringkasan satu kalimat.
---
::en
English body in Markdown.
::id
Isi berita dalam bahasa Indonesia.
```

Add `datePending: true` to hide a date that is not confirmed yet.

### Add photos

1. Add an entry to `scripts/media-manifest.json` in the form `"name": ["sourcefile.jpg", "Alt text"]`.
2. Run `node scripts/build-media.mjs <folder-with-the-source-images>`.
3. The photo is then available as `media.<group>.<name>`.

### Adding videos

The deck links 14 videos on Google Drive (fashion studio, DFT, the IPDM showreel and others). They are not in the repository yet. Until they are added, each video slot shows its photo with a slow Ken Burns zoom.

To add one, first transcode it for the web: 720p, muted, about 4 MB or less.

```bash
ffmpeg -i input.mp4 -vf "scale=-2:720" -an -c:v libx264 -crf 28 -preset slow -movflags +faststart public/video/home-hero.mp4
```

```bash
ffmpeg -i input.mp4 -vf "scale=-2:720" -an -c:v libvpx-vp9 -crf 38 -b:v 0 public/video/home-hero.webm
```

Then fill in the slot in `src/content/media.ts`:

```ts
homeHero: { mp4: "/video/home-hero.mp4", webm: "/video/home-hero.webm" },
```

Slots: `homeHero` (home), `inboundHero` (Mobility → Inbound), `ipdmReel` (Regular International Program, IPDM spotlight) and `labsHero` (Research & Labs). Videos never autoplay for visitors who prefer reduced motion, and every video has a pause button.

## Design rules (from the PCU Design System)

- **Colour:** `midnight` leads. Text on midnight may be white, smoke, amber, yellow, teal, green, orange or purple. On light grounds it may be midnight, black, emerald or red. Blue and cerise text is allowed only at 24px and above.
- **Gradients:** only `gradient-midnight`, `-aqua`, `-sunrise` and `-dusk`.
- **Type:** Inter (with `cv11` and `ss01`). Headings are bold at -0.02em. Bebas Neue is for big numerals. Section labels use the eyebrow and tagline styles.
- **Glass:** `.glass`, `.glass-strong` and `.glass-light` in `src/app/globals.css`. Each always has a base tint so text stays at 4.5:1 or better. It falls back to a solid panel without `backdrop-filter`, or when the visitor prefers reduced transparency.
- **Shapes:** the half ring (`<Ring>`) bleeds off edges and is never placed behind text. It is hidden on small screens.
- **Logo:** the approved white logomaster only, on midnight, at least 96px wide.
- **Focus:** a 3px amber ring at a 3px offset. Motion is off when the visitor prefers reduced motion.

## To confirm with the International Office

On the site, content that isn't from KUI or the deck carries a dashed "Details to be confirmed" badge, and links that aren't available yet show "Link coming soon".

**Links and files to provide (`src/content/links.ts`):**
- The inbound courses-offered Excel file.
- The outbound registration form.
- The Petramate registration form.
- The four outbound Excel lists: exchange, study abroad, joint degree, dual degree.
- The Petra Business School website.
- The faculty websites (FTSP, FTI, SBM, FHIK, FKIP, FK, FKG).
- The IISMA, Darmasiswa and ICE Institute URLs. These were taken from public sources and need checking.

**Media to provide:**
- PSP and ASP posters.
- 3 inbound testimonial videos.
- NUNI, BKPTKI and IISMA testimonial videos.
- Testimonial quotes for the home hero.
- KUI team names and photos.
- Surabaya City Government (Pemkot) tourism photos, each with its credit.
- OMNI's list of campus facilities to highlight.
- IISMA and ICE Institute activity photos. Deck photos are used for now.

**Drafted text to review**, written from general or public knowledge:
- Inbound: general requirements, visa types and steps, cost items (no amounts), dos & don'ts, the tailor-made programme description, and the Darmasiswa description.
- Outbound: the IISMA description and internal selection, definitions of exchange, study abroad, joint degree and dual degree, general requirements, ICE Institute, local outbound (NUNI, BKPTKI), and dos & don'ts.
- Get to Know Us: Petramate benefits, and the Surabaya travel times to Bali and Malang.
- Partners: the descriptions for GHAS, P2A and NUNI, and the full list of domestic partners.

**Data flags from the deck:**
- Iowa State is listed at QS #540 under a "Top 500" heading.
- Sherly De Yong is listed under two different faculties.
- Two news posts have unconfirmed dates.

**Copy review:** all Indonesian copy needs a review by KUI.

## Pending inputs

- **Chulalongkorn reference site:** `inter.chula.ac.th` is used as the structural inspiration, but this build environment could not reach it. The homepage section order should be reviewed against it.
- **Videos:** see [Adding videos](#adding-videos).

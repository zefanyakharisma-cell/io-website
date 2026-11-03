# Petra Christian University — International Office website

The public website of the International Office (Kantor Urusan Internasional, KUI) of Petra Christian University, Surabaya. It is built from the deck *PETRA International Profile (General)* and styled with the **PETRA Design System** plus a "Midnight Glass" glassmorphism layer.

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

The menu follows KUI's content spec: the sheet "WEBSITE IO", tab "NEW UPDATED". Inbound copy comes from KUI's linked Google Doc "Narasi page Inbound Student Exchange Program".

| Menu | Pages (under `/en/` and `/id/`) |
|---|---|
| Home | `/` |
| About & Contact | `about` · `about/faculties` · `about/research` · `about/ai` · `about/campus` · `contact` |
| Student Mobility | `mobility` · Inbound: `mobility/inbound`, `…/inbound/student-exchange` (fact sheet, courses, academic calendar, how to apply, fees, living costs), `…/inbound/short-programs` (iCOP, ASP, PSP, Indonesian Spectrum), `…/inbound/experiences` · Outbound: `mobility/outbound`, `…/outbound/short-program`, `…/outbound/student-exchange` (incl. host universities), `…/outbound/dual-degree`, `…/outbound/scholarships`, `…/outbound/experiences` |
| International Students | `international-students` (visa, dos & don'ts, inquiries) · `…/international-programs` · `…/petramate` · `…/surabaya` |
| Global Collaboration | `collaboration` (#networking, #consortium, #contact) |
| News & Events | `news` · `news/events` · `news/calendar` · `news/opportunities` · `news/[slug]` |
| Information Hub | `information-hub` (downloads & forms, key dates, FAQ, contacts) |

**Moved pages.** Old URLs (`/inbound…`, `/outbound`, `/partners`, `/about/petramate`, `/about/surabaya`) are static redirect pages built with `src/lib/redirect-page.tsx`. Darmasiswa, IISMA, ICE Institute, local outbound, study abroad, joint degree, tailor-made and EU projects were removed with the new menu.

## Where things live

```
src/content/         All site copy and data, typed and bilingual ({ en, id })
  profile.ts         Rankings, numbers, accreditation, campus
  faculties.ts       7 faculties, programmes, English-taught degrees
  mobility.ts        iCOP/ASP/PSP/Indonesian Spectrum, mobility numbers, gallery
  partners.ts        Network numbers, partner data, consortia, Global Collaboration copy and logo wall
  research.ts        Q1 output, study centres, researcher stories, lab tour
  ai.ts              AI@PETRA and Petra Drone Academy
  contact.ts         Office details, inquiry topics
  links.ts           Every external link, WhatsApp numbers, testimonial video ids (fill these in)
  inbound.ts         Inbound fact sheet, calendar, how to apply, fees, living costs, experiences, visa, dos & don'ts
  outbound.ts        Short program, exchange, dual degree, host universities, 10 steps, fees, scholarships, experiences
  infoHub.ts         Information Hub downloads, FAQ and contacts
  getToKnow.ts       Campus resources, Petramate, Beautiful Surabaya
  team.ts            Contact routes and KUI persons in charge
  testimonials.ts    Home hero slides
  media.ts           Video slots and YouTube embeds (fill these in)
  media.generated.ts Generated from scripts/media-manifest.json — do not edit
content/news/*.md    News posts (both languages in one file)
src/components/      brand/ (Logo, Ring, Glass canvas, VideoSlot…), ui/ (21st.dev adaptations), sections/, layout/
public/brand/        Logo, fonts and shapes copied from the PETRA Design System
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

### Add national partner logos

1. Put one logo file per partner (PNG, JPG or SVG) in a folder, each named after the partner, e.g. `PT Tokopedia.png`.
2. Run `node scripts/build-partner-logos.mjs <folder>`. It trims, resizes and writes WebP files to `public/images/logos/national/` and regenerates `src/content/national-partners.generated.ts`.
3. If the partner is already in `domesticPartners` under another name, add it to `sameAs` in `src/content/partners.ts` so the two merge.

### Add photos from Wikimedia Commons

1. Add an entry to `scripts/web-photos.json` in the form `"name": ["File:Exact Commons title.jpg", "Alt text"]`.
2. Run `node scripts/fetch-web-photos.mjs`. Behind a proxy, prefix it with `NODE_USE_ENV_PROXY=1`. The script:
   - checks the licence and stops on anything but CC0, public domain, CC BY or CC BY-SA;
   - saves WebP files at 1600 and 800 px;
   - writes `src/content/web-photos.generated.ts`.
3. Use the photo as `webPhotos.<group>.<name>`, and show its credit with `<PhotoCredit>` (a single photo) or `<PhotoCredits>` (a gallery). Add a row to the Photos table in `docs/sources.md`.

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

## Design rules (from the PETRA Design System)

- **Colour:** `midnight` leads. Text on midnight may be white, smoke, amber, yellow, teal, green, orange or purple. On light grounds it may be midnight, black, emerald or red. Blue and cerise text is allowed only at 24px and above.
- **Gradients:** only `gradient-midnight`, `-aqua`, `-sunrise` and `-dusk`.
- **Type:** Inter (with `cv11` and `ss01`). Headings are bold at -0.02em. Bebas Neue is for big numerals. Section labels use the eyebrow and tagline styles.
- **Glass:** `.glass`, `.glass-strong` and `.glass-light` in `src/app/globals.css`. Each always has a base tint so text stays at 4.5:1 or better. It falls back to a solid panel without `backdrop-filter`, or when the visitor prefers reduced transparency.
- **Shapes:** the half ring (`<Ring>`) bleeds off edges and is never placed behind text. It is hidden on small screens.
- **Pattern:** only as a `<PatternBlock>` bleeding off one section corner, away from the heading. No thin pattern strips.
- **Last section before the footer is always white** (`<Section tone="white">` or `<CtaBand>`), so the footer's double-arch edge reads.
- **Dark sections** may carry a photo tint (`<Section bgImage={…}>`): grayscale at 14%, text always on glass cards.
- **Motion:** sections enter with a scroll-linked scene effect (`<Section cinematic>`), page heroes drift and lift away (`Parallax`, `SceneExit`). All of it is static under reduced motion and without JavaScript.
- **Graphic elements** (`src/components/brand/`):
  - `<Shape>`: filled geometry and rings.
  - `<GeoCluster>`: the cover composition.
  - `<IconBadge>`: a white outline icon in a gradient circle.
  - `<Tag>`: a midnight category label.
  - `<Sign>`: a wayfinding panel with the amber offset.
  - `<PatternStrip>`: the quarter-circle pattern as a divider.
  - Put section-level shapes in `<Section decor>` so they bleed off the section edge and stay clear of text.
- **Footer:** an ArchBand forms the double-arch top edge of the footer, the one band per page. The footer logo uses the "International Office" DepartmentLockup.
- **Headline faces:** Inter by default. `SectionHeading face="serif"` (Libre Baskerville) is for formal or academic headings, and a page uses one display face.
- **Logo:** the approved white logomaster only, on midnight, at least 96px wide.
- **Focus:** a 3px amber ring at a 3px offset. Motion is off when the visitor prefers reduced motion.

## To confirm with the International Office

On the site, content that isn't from KUI or the deck carries a dashed "Details to be confirmed" badge, and links that aren't available yet show "Link coming soon".

**Files and links to provide (`src/content/links.ts`):**
- The International Outbound Program Flyer (`outboundFlyer`).
- SK Tarif Studi No. 381 and No. 532 PDFs (`skTarif381`, `skTarif532`).
- The Petramate registration form and the Petra Business School website.
- Websites for SBM, FHIK and FKIP, and the AUPF website and logo (`src/content/partners.ts`).

**Media to provide:**
- Inbound Experiences: Welcome Dinner, City Tour, Outing and Farewell Dinner photos, and testimony videos (`testimonialVideos.inbound`). Programme photos stand in for now.
- Outbound Experiences: photos of the six students and the two YouTube videos (`outboundStories`, `outboundVideos` in `outbound.ts`).
- Logos of QS Top 100 partners (Fudan, Monash, Yonsei, CityU HK); initials show for now. Check the multinational and foundation selection in `partners.ts` → `mncNames`, `foundationNames`.
- PSP and ASP posters, home hero testimonial quotes, KUI team names and photos.

**Drafted text to review:** all Indonesian translations of the new content; the visa overview and dos & don'ts (International Students); Petramate benefits and Surabaya travel times.

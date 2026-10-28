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

| Section | Pages |
|---|---|
| Home | `/` (sends visitors to `/en/` or `/id/`), `/[locale]/` |
| About PETRA | `about`, `about/campus`, `about/faculties`, `about/research`, `about/ai` |
| Mobility Program | `mobility/inbound`, `mobility/outbound`, `mobility/international-program` |
| Partnership | `partnership/partners`, `partnership/consortia`, `partnership/connect` |
| News & Updates | `news`, `news/[slug]` |

## Where things live

```
src/content/         All site copy and data, typed and bilingual ({ en, id })
  profile.ts         Rankings, numbers, accreditation, campus
  faculties.ts       7 faculties, programmes, English-taught degrees
  mobility.ts        Exchange steps, ICOP/PSP/SPECTRA/ASP, outbound routes, joint degrees, gallery
  partners.ts        Network numbers, partner list, consortia, EU projects, 8 ways to collaborate
  research.ts        Q1 output, study centres, researcher stories, lab tour
  ai.ts              AI@PCU and Petra Drone Academy
  contact.ts         Office details, inquiry topics
  media.ts           Video slots and YouTube embeds (fill these in)
  media.generated.ts Generated from scripts/media-manifest.json — do not edit
content/news/*.md    News posts (both languages in one file)
src/components/      brand/ (Logo, Ring, Glass canvas, VideoSlot…), ui/ (21st.dev adaptations), sections/, layout/
public/brand/        Logo, fonts and shapes copied from the PCU Design System
public/images/       WebP photos extracted from the deck
scripts/             build-media.mjs (deck photos → WebP), build-map.mjs (dotted world map)
```

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

Content the deck does not cover is marked on the site with a dashed "Details to be confirmed" badge, or is listed here:

- **Outbound → IISMA & scholarships**, and **Summer & short programmes abroad**: the deck has no detail on either.
- **Consortia → NUNI**: the full name and description are missing. **Global Hakka Studies**: the description needs checking.
- **Partner list:** the site shows the partners named in the deck (52), not the full register of 180+ agreements.
- **Iowa State University:** listed at QS #540 under a "QS top 500" heading in the deck.
- **Sherly De Yong:** listed under Architecture on one slide and FHIK on another. She is not shown on the site until this is resolved.
- **News dates:** the Erasmus+/Horizon post and the JUMBO post use placeholder dates (`datePending: true`), so no date is shown.
- **Degree awards** for the FHIK English-taught programmes (IPDM, English, Chinese) are not listed in the deck.
- **Xiaohongshu:** the handle is shown as text only, without a link.
- **Indonesian translation:** all `id` copy needs a KUI review.

## Pending inputs

- **Chulalongkorn reference site:** `inter.chula.ac.th` is used as the structural inspiration, but this build environment could not reach it. The homepage section order should be reviewed against it.
- **Videos:** see [Adding videos](#adding-videos).

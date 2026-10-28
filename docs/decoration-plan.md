# Decoration plan: PCU Design System components and web photos

**Status (28 Oct 2026):**
- **Done:**
  - §2 components 1–6 and 8–9. The component from §2.7 exists as `GeoCluster` but isn't placed yet, because every page has a header photo.
  - §3 placements: footer, page heroes, Home, About, Contact, Partners, process flows, and dos and don'ts.
  - §4 photos: 13 Commons files, 5 of them Petra's own uploads.
- **Blocked:** petra.ac.id is reachable but sits behind a Cloudflare bot check, so its photos come from BrandingPCU's Commons uploads instead.

Goal: make the site more engaging by using more of the PCU Design System's graphic language, and add real photos from Wikimedia Commons, Wikipedia and petra.ac.id. All rules in the README's "Design rules" section still apply: no shape behind text, contrast at 4.5:1 or better, motion off under reduced motion.

## 1. What the site uses today, and what it doesn't

| Design System element | On the site now | Gap |
|---|---|---|
| Half ring (`ring-u`, `ring-n`, `ring-u-line`) | Yes, via `<Ring>` on 6 pages | `ring-n-line` is missing |
| Glass panels, brand buttons, eyebrow and tagline | Yes | — |
| Bebas Neue numerals | Yes | — |
| **Pattern** (`.pcu-pattern`, quarter-circle tile) | CSS class exists, not used anywhere | Unused |
| **ArchBand** (double-arch top edge) | `double-arch.svg` is in `public/brand/`, not used | Unused |
| **Filled geometry** (blocks, quarters, discs, as on the Cover) | No | Unused |
| **Gradient overlay glows** (`.pcu-glow--cerise/aqua/amber`) | No (OrbBackground is similar but not the DS class) | Unused |
| **IconBadge** (white outline icon in a gradient circle) | No; icons are bare Lucide glyphs | Unused |
| **Tag** (midnight category label) | No; cards use plain eyebrows | Unused |
| **Card** with one corner Shape | No | Unused |
| **Sign** (wayfinding panel with amber offset) | No | Unused |
| **DepartmentLockup** (logo, rule, unit name) | No | Unused |
| **Headline faces** (Baskerville, Bebas headline) | No; Bebas is used for numbers only | Unused |

## 2. Component work (new files in `src/components/brand/`)

1. **`Shape.tsx`** extends `<Ring>` to every DS kind: `circle`, `semicircle`, `quarter-*`, `bar`, `tab`, `ring-n-line`. It masks `currentColor` like `.ring-*` does. It is always `aria-hidden` and hidden below `md`. Copy `ring-n-line.svg`, `arch-band-mask.svg` and `notch-mask.svg` from the DS artifact into `public/brand/`.
2. **`ArchBand.tsx`**: a midnight-gradient band whose top edge is the double arch.
3. **`PatternStrip.tsx`**: a 24–40px strip of `pattern-tile.svg`, used as a divider and never behind text.
4. **`IconBadge.tsx`**: a gradient circle (brand, sunrise, dusk or aqua) holding a white 2px outline icon. It wraps Lucide icons with `strokeWidth={2}`.
5. **`Tag.tsx`**: a midnight-gradient category label, with an `outline` variant for dark cards.
6. **`Sign.tsx`**: a midnight panel with a pill right end and the flat amber `shadow-sign` offset.
7. **`GeoCover.tsx`**: the filled-geometry composition from the DS Cover (midnight slab, blue block, amber quarter, cerise disc, teal block, three half rings). It replaces the photo on pages that don't have one.
8. **Glows**: add `.pcu-glow--cerise/aqua/amber` to `globals.css` (multiply blend at 0.55) for light sections.
9. **Fonts**: copy `LibreBaskerville-Variable.woff2` and `-Italic.woff2` from the DS. Add a `font-serif` token. Use one display face per page.

## 3. Where each piece goes

**Global**
- **Footer:** an ArchBand forms the top edge of `SiteFooter`. This is the one band per page, at the bottom, as the DS asks.
- **Footer logo:** a DepartmentLockup reading *Petra Christian University | International Office*.
- **Page heroes:** `PageHero` adds a small amber quarter and a `ring-n-line` in the corner away from the text.

**Home (`/`)**
- **Audience cards:** an IconBadge in place of each bare icon (brand, sunrise and aqua tones).
- **Numbers band:** a PatternStrip above and below it.
- **Mobility tiles and news:** a Tag on each card ("Inbound", "Research"). News cards become DS Cards with one bleeding corner Shape, its colour rotating by category.
- **Faculties grid:** a faint aqua glow behind the grid on the light section, never under the labels.
- **Gallery:** new Commons and Petra photos are mixed in (see §4).

**Get to Know Us**
- **About:** the history timeline gets a Libre Baskerville headline (formal and academic) and a linework register: blue 1.5px connector lines with `ring-n-line` milestones. Add a historical or campus photo from Commons.
- **Surabaya:** fill the "Sights around Surabaya" grid with credited Commons photos (§4). The day-trip cards get a filled-geometry corner.
- **Campus:** a **Sign** directory board ("GEDUNG D · Kantor Urusan Internasional · D 104 →") and campus photos from petra.ac.id.
- **Faculties:** each faculty header gets an IconBadge, and a photo where petra.ac.id has one.

**Inbound and Outbound**
- **Short programmes:** a Bebas Neue campaign headline with a PatternStrip.
- **Process flows (visa, registration):** step numbers become IconBadges, with linework connectors.
- **Dos and don'ts:** the two columns get IconBadges (aqua for do, sunrise for don't).

**Partners:** each continent heading gets a small filled-geometry accent. The consortium cards become DS Cards with Tags.

**Contact:** a **Sign** for "Room D 104 →" next to the map. IconBadges replace the bare icons for email, WhatsApp and phone.

## 4. Photos from the web

### Sources and licence rules
- **commons.wikimedia.org** for file pages and the API. Licence and author come from `extmetadata`.
- **upload.wikimedia.org** for the image files themselves.
- **en.wikipedia.org** for finding images on articles such as Petra Christian University, Surabaya, Suramadu Bridge, Tugu Pahlawan, House of Sampoerna and Mount Bromo. The files themselves still come from Commons.
- **petra.ac.id** for Petra's own campus, faculty and event photos.

Accept only CC0, public domain, CC BY or CC BY-SA from Commons. Reject non-free and fair-use files, which some Wikipedia articles use. Every photo carries a visible credit: author, licence and a link to the source.

### Candidate subjects
- **Surabaya:** Tugu Pahlawan, House of Sampoerna, Suramadu Bridge, the Monkasel submarine, the skyline and Kya-Kya Kembang Jepun.
- **Day trips:** Mount Bromo, Malang and Bali.
- **Petra:** campus buildings, the library, graduation, and international student events, from petra.ac.id.

The exact files are chosen once the hosts are reachable. No file names are guessed here.

### Pipeline
1. **Manifest:** add `scripts/web-photos.json` with one entry per photo: `key`, `group`, source page URL and alt text.
2. **Fetch script:** add `scripts/fetch-web-photos.mjs`. It:
   - calls the Commons API (`action=query&prop=imageinfo&iiprop=url|extmetadata`) for each Commons entry;
   - checks the licence against the allow-list;
   - records the author, licence, licence URL and file page;
   - downloads the original into its own scratch folder.
3. **Convert:** reuse `build-media.mjs` to make WebP files at 800, 1200 and 1600 px, so photos are self-hosted rather than hotlinked. That suits the static export and Wikimedia's hotlinking guidance.
4. **Credits:** `media.generated.ts` gains an optional `credit` field. `<Photo>` shows it as a small caption, or via an info button on full-bleed images. `docs/sources.md` gets a Photos table.

## 5. Order of work
1. Network access (§6), then fetch and vet the photos.
2. Components 1–9, each checked in the browser in light and dark sections, at phone width and with reduced motion on.
3. Page placements: global, then Home, Get to Know Us, Inbound and Outbound, Partners, Contact.
4. `npm run lint && npm run build`, plus a contrast and screen-reader check of the new decorations.

## 6. Network access (blocked right now)
This build environment's network policy refuses all four hosts (`CONNECT 403`). To allow them, edit the cloud environment's settings, open **Network access**, and add these under **Allowed domains** (keep "Allow package managers" ticked):

```
upload.wikimedia.org
commons.wikimedia.org
en.wikipedia.org
petra.ac.id
```

Steps: https://code.claude.com/docs/en/cloud-environments#network-access

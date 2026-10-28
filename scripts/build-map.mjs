// Writes the dotted maps used behind the partner, mobility and day-trip maps.
// Usage: node scripts/build-map.mjs
import DottedMap from "dotted-map";
import fs from "node:fs";
import path from "node:path";

// Keep in sync with src/lib/map-projection.ts.
const maps = {
  "world-dots.svg": { options: { height: 60, grid: "diagonal" }, radius: 0.24 },
  "eastjava-dots.svg": { options: { height: 50, grid: "diagonal", region: { lat: { min: -9.3, max: -6.6 }, lng: { min: 111.2, max: 116.0 } } }, radius: 0.32 },
};

for (const [file, { options, radius }] of Object.entries(maps)) {
  const map = new DottedMap(options);
  const svg = map.getSVG({ radius, color: "#ffffff", shape: "circle", backgroundColor: "transparent" });
  const out = path.resolve(import.meta.dirname, "../public/brand", file);
  fs.writeFileSync(out, svg.replace(/\n\s*/g, ""));
  console.log("wrote", out, map.image.width, "x", map.image.height);
}

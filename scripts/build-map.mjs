// Writes the dotted world map used behind the partner and mobility maps.
// The East Java day-trip map comes from scripts/build-regionmap.mjs.
// Usage: node scripts/build-map.mjs
import DottedMap from "dotted-map";
import fs from "node:fs";
import path from "node:path";

// Keep in sync with src/lib/map-projection.ts.
const maps = {
  "world-dots.svg": { options: { height: 60, grid: "diagonal" }, radius: 0.24 },
};

for (const [file, { options, radius }] of Object.entries(maps)) {
  const map = new DottedMap(options);
  const svg = map.getSVG({ radius, color: "#ffffff", shape: "circle", backgroundColor: "transparent" });
  const out = path.resolve(import.meta.dirname, "../public/brand", file);
  fs.writeFileSync(out, svg.replace(/\n\s*/g, ""));
  console.log("wrote", out, map.image.width, "x", map.image.height);
}

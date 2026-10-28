// Writes the dotted world map used behind the partner and mobility maps.
// Usage: node scripts/build-map.mjs
import DottedMap from "dotted-map";
import fs from "node:fs";
import path from "node:path";

export const MAP_OPTIONS = { height: 60, grid: "diagonal" };
const map = new DottedMap(MAP_OPTIONS);
const svg = map.getSVG({ radius: 0.24, color: "#ffffff", shape: "circle", backgroundColor: "transparent" });
const out = path.resolve(import.meta.dirname, "../public/brand/world-dots.svg");
fs.writeFileSync(out, svg.replace(/\n\s*/g, ""));
console.log("wrote", out, map.image.width, "x", map.image.height);

// Builds the East Java & Bali map (public/brand/eastjava-map.svg) from
// Natural Earth admin-1 provinces (public domain). The 40 MB source is not
// committed; download it first:
//   curl -o <dir>/admin1.geojson https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_1_states_provinces.geojson
//   node scripts/build-regionmap.mjs <dir>/admin1.geojson
import fs from "node:fs";

const src = process.argv[2];
if (!src) throw new Error("Usage: node scripts/build-regionmap.mjs <admin1.geojson>");

// Keep in sync with src/lib/map-projection.ts (EAST_JAVA_BOUNDS).
const B = { west: 110.9, east: 116.1, north: -6.5, south: -9.0 };
const W = 100;
const H = Math.round(((B.north - B.south) / (B.east - B.west)) * W * 10) / 10;
const px = ([lng, lat]) => [((lng - B.west) / (B.east - B.west)) * W, ((B.north - lat) / (B.north - B.south)) * H];

const PROVINCES = { "Jawa Timur": "home", Bali: "near", "Jawa Tengah": "near", Yogyakarta: "near", "Nusa Tenggara Barat": "near" };

function simplify(pts, tol) {
  if (pts.length < 4) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    let max = 0, idx = -1;
    const [ax, ay] = pts[a], [bx, by] = pts[b];
    const dx = bx - ax, dy = by - ay, len = Math.hypot(dx, dy) || 1;
    for (let i = a + 1; i < b; i++) {
      const d = Math.abs(dy * pts[i][0] - dx * pts[i][1] + bx * ay - by * ax) / len;
      if (d > max) { max = d; idx = i; }
    }
    if (max > tol) { keep[idx] = 1; stack.push([a, idx], [idx, b]); }
  }
  return pts.filter((_, i) => keep[i]);
}

// Closed rings start and end on the same point, so simplify each half separately.
function simplifyRing(ring, tol) {
  const open = ring.slice(0, -1);
  const mid = Math.floor(open.length / 2);
  return [...simplify(open.slice(0, mid + 1), tol), ...simplify(open.slice(mid), tol).slice(1)];
}

function inRing(pt, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if (yi > pt[1] !== yj > pt[1] && pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

const geo = JSON.parse(fs.readFileSync(src, "utf8"));
const shapes = {};
for (const f of geo.features) {
  const name = f.properties.name;
  if (f.properties.admin !== "Indonesia" || !PROVINCES[name]) continue;
  const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
  shapes[name] = polys.map((p) => p[0]); // outer rings only
}

const paths = [];
for (const [name, rings] of Object.entries(shapes)) {
  const d = rings
    .map((r) => simplifyRing(r.map(px), 0.06))
    .filter((r) => r.length > 3)
    .map((r) => "M" + r.map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`).join("L") + "Z")
    .join("");
  const home = PROVINCES[name] === "home";
  paths.push(`<path d="${d}" fill="#ffffff" fill-opacity="${home ? 0.2 : 0.08}" stroke="#ffffff" stroke-opacity="${home ? 0.55 : 0.25}" stroke-width="0.12" stroke-linejoin="round"><title>${name}</title></path>`);
}

// Sanity check: every pin must fall on land in the expected province.
const pins = [
  ["Surabaya", -7.2575, 112.7521, "Jawa Timur"],
  ["Malang", -7.98, 112.63, "Jawa Timur"],
  ["Bromo", -7.94, 112.95, "Jawa Timur"],
  ["Bangkalan (Madura)", -7.05, 112.85, "Jawa Timur"],
  ["Denpasar", -8.65, 115.22, "Bali"],
];
for (const [label, lat, lng, prov] of pins) {
  if (!shapes[prov].some((r) => inRing([lng, lat], r))) throw new Error(`${label} is not inside ${prov}`);
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${paths.join("")}</svg>\n`;
fs.writeFileSync("public/brand/eastjava-map.svg", svg);
console.log(`eastjava-map.svg ${W}x${H}, ${(svg.length / 1024).toFixed(1)} KB; pins OK`);

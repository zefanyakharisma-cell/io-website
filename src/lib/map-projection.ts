import DottedMap from "dotted-map";

/** Same options as scripts/build-map.mjs so pins line up with public/brand/*-dots.svg. */
const world = new DottedMap({ height: 60, grid: "diagonal" });
const eastJava = new DottedMap({ height: 50, grid: "diagonal", region: { lat: { min: -9.3, max: -6.6 }, lng: { min: 111.2, max: 116.0 } } });

export const MAP_SIZE = { width: world.image.width, height: world.image.height };
export const EAST_JAVA_SIZE = { width: eastJava.image.width, height: eastJava.image.height };

function pin(map: DottedMap, lat: number, lng: number) {
  const p = map.getPin({ lat, lng });
  if (!p) throw new Error(`Point outside the map: ${lat}, ${lng}`);
  return { x: p.x, y: p.y };
}

/** Server-side only: projects lat/lng onto the world dotted map's viewBox. */
export function project(lat: number, lng: number) {
  return pin(world, lat, lng);
}

/** Server-side only: projects lat/lng onto the East Java & Bali regional map. */
export function projectEastJava(lat: number, lng: number) {
  return pin(eastJava, lat, lng);
}

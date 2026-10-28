import DottedMap from "dotted-map";

/** Same options as scripts/build-map.mjs so pins line up with public/brand/*-dots.svg. */
const world = new DottedMap({ height: 60, grid: "diagonal" });

export const MAP_SIZE = { width: world.image.width, height: world.image.height };
/** Bounds of public/brand/eastjava-map.svg; keep in sync with scripts/build-regionmap.mjs. */
const EAST_JAVA_BOUNDS = { west: 110.9, east: 116.1, north: -6.5, south: -9.0 };
export const EAST_JAVA_SIZE = { width: 100, height: 48.1 };

function pin(map: DottedMap, lat: number, lng: number) {
  const p = map.getPin({ lat, lng });
  if (!p) throw new Error(`Point outside the map: ${lat}, ${lng}`);
  return { x: p.x, y: p.y };
}

/** Server-side only: projects lat/lng onto the world dotted map's viewBox. */
export function project(lat: number, lng: number) {
  return pin(world, lat, lng);
}

/** Projects lat/lng onto the East Java & Bali regional map (equirectangular). */
export function projectEastJava(lat: number, lng: number) {
  const b = EAST_JAVA_BOUNDS;
  return {
    x: ((lng - b.west) / (b.east - b.west)) * EAST_JAVA_SIZE.width,
    y: ((b.north - lat) / (b.north - b.south)) * EAST_JAVA_SIZE.height,
  };
}

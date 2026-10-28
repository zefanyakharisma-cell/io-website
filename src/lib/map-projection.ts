import DottedMap from "dotted-map";

/** Same options as scripts/build-map.mjs so pins line up with public/brand/world-dots.svg. */
const map = new DottedMap({ height: 60, grid: "diagonal" });
export const MAP_SIZE = { width: map.image.width, height: map.image.height };

/** Server-side only: projects lat/lng onto the dotted map's viewBox. */
export function project(lat: number, lng: number) {
  const pin = map.getPin({ lat, lng });
  if (!pin) throw new Error(`Point outside the map: ${lat}, ${lng}`);
  return { x: pin.x, y: pin.y };
}

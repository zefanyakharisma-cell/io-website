import { partners, SURABAYA, type Region } from "@/content/partners";
import { MAP_SIZE, project } from "./map-projection";
import type { MapPoint } from "@/components/ui/world-map";

export const regionColors: Record<Region, string> = {
  "Greater China": "#ffbc00",
  ASEAN: "#45b8bc",
  "Asia · other": "#ec008c",
  Europe: "#3880d0",
  Oceania: "#be93e4",
  "North America": "#f37121",
  Other: "#ffffff",
};

/** One point per partner country, labelled with the named partners there. */
export function partnerCountryPoints(): MapPoint[] {
  const byCountry = new Map<string, typeof partners>();
  for (const p of partners) {
    if (p.country === "Indonesia") continue;
    byCountry.set(p.country, [...(byCountry.get(p.country) ?? []), p]);
  }
  return [...byCountry.entries()].map(([country, list]) => {
    const lat = list.reduce((s, p) => s + p.lat, 0) / list.length;
    const lng = list.reduce((s, p) => s + p.lng, 0) / list.length;
    return {
      ...project(lat, lng),
      label: country,
      detail: list.length === 1 ? list[0].name : `${list.length} partners named here`,
      color: regionColors[list[0].region],
    };
  });
}

/** Country centroids for the mobility maps. */
const countryCentroids: Record<string, [number, number]> = {
  Korea: [36.5, 127.9],
  "South Korea": [36.5, 127.9],
  China: [32.0, 112.0],
  Japan: [36.2, 138.25],
  Malaysia: [3.5, 102.0],
  Australia: [-25.3, 134.0],
  USA: [39.8, -98.6],
  Netherlands: [52.13, 5.29],
  India: [21.0, 78.0],
};

export function countryPoints(names: string[], color: string): MapPoint[] {
  return names.filter((n) => countryCentroids[n]).map((n) => ({ ...project(...countryCentroids[n]), label: n, color }));
}

export const surabaya = project(SURABAYA.lat, SURABAYA.lng);
export { MAP_SIZE };

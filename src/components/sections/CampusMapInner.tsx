"use client";

import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export type MapPoi = { id: string; kind: "campus" | "transport" | "city" | "trip"; lat: number; lng: number; name: string; body: string };
export type MapStep = { label: string; center: [number, number]; zoom: number };

const colors: Record<MapPoi["kind"], string> = { campus: "#ffbc00", transport: "#45b8bc", city: "#3880d0", trip: "#ec008c" };

/** Branded pins as plain HTML, so Leaflet never needs its default marker images. */
const pin = (kind: MapPoi["kind"]) =>
  L.divIcon({
    className: "",
    iconSize: kind === "campus" ? [40, 40] : [28, 28],
    iconAnchor: kind === "campus" ? [20, 40] : [14, 28],
    popupAnchor: [0, kind === "campus" ? -36 : -24],
    html: `<span style="display:block;width:100%;height:100%;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:${colors[kind]};border:3px solid #133256;box-shadow:0 6px 14px -4px rgba(0,0,0,.5)"></span>`,
  });

function FlyTo({ step, reduce }: { step: MapStep; reduce: boolean }) {
  const map = useMap();
  useEffect(() => {
    if (reduce) map.setView(step.center, step.zoom);
    else map.flyTo(step.center, step.zoom, { duration: 1.6 });
  }, [map, step, reduce]);
  return null;
}

export default function CampusMapInner({ pois, step, reduce, directions }: { pois: MapPoi[]; step: MapStep; reduce: boolean; directions: string }) {
  return (
    <MapContainer center={step.center} zoom={step.zoom} scrollWheelZoom={false} className="h-full w-full" style={{ background: "#e8edf2" }}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" maxZoom={19} />
      <FlyTo step={step} reduce={reduce} />
      {pois.map((p) => (
        <Marker key={p.id} position={[p.lat, p.lng]} icon={pin(p.kind)} title={p.name} alt={p.name}>
          <Popup>
            <strong style={{ display: "block", fontSize: 14, color: "#133256" }}>{p.name}</strong>
            <span style={{ display: "block", marginTop: 4, color: "#46505c" }}>{p.body}</span>
            <a href={`https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`} target="_blank" rel="noreferrer" style={{ display: "inline-block", marginTop: 6, fontWeight: 600 }}>
              {directions} →
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

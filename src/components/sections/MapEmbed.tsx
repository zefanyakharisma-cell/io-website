"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

/** Google Maps embed that loads only after the visitor asks, so nothing is fetched from Google before then. */
export function MapEmbed({ query, title, labels }: { query: string; title: string; labels: { load: string; note: string; open: string } }) {
  const [on, setOn] = useState(false);
  const q = encodeURIComponent(query);
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-midnight">
      {on ? (
        <iframe title={title} src={`https://www.google.com/maps?q=${q}&output=embed`} className="absolute inset-0 h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-gradient-midnight p-6 text-center text-white">
          <div>
            <MapPin className="mx-auto size-10 text-amber" aria-hidden />
            <p className="mt-3 font-semibold">{title}</p>
            <button type="button" onClick={() => setOn(true)} className="btn btn-amber mt-4">{labels.load}</button>
            <p className="mt-3 text-xs text-smoke/85">{labels.note}</p>
            <a className="mt-2 inline-block text-xs text-smoke underline underline-offset-2" href={`https://maps.google.com/?q=${q}`} target="_blank" rel="noreferrer">{labels.open}</a>
          </div>
        </div>
      )}
    </div>
  );
}

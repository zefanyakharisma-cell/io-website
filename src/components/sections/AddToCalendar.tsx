"use client";

import { CalendarPlus } from "lucide-react";

/** Downloads an .ics file for an all-day event or deadline, built in the browser. */
export function AddToCalendar({ uid, title, start, end, location, url, label }: { uid: string; title: string; start: string; end?: string; location?: string; url: string; label: string }) {
  const onClick = () => {
    const d = (s: string) => s.replace(/-/g, "");
    // DTEND is exclusive for all-day events.
    const last = new Date(`${end ?? start}T00:00:00Z`);
    last.setUTCDate(last.getUTCDate() + 1);
    const esc = (s: string) => s.replace(/[\\,;]/g, (c) => `\\${c}`).replace(/\n/g, "\\n");
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Petra International Office//News//EN",
      "BEGIN:VEVENT",
      `UID:${uid}@io.petra.ac.id`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").slice(0, 15)}Z`,
      `DTSTART;VALUE=DATE:${d(start)}`,
      `DTEND;VALUE=DATE:${last.toISOString().slice(0, 10).replace(/-/g, "")}`,
      `SUMMARY:${esc(title)}`,
      location ? `LOCATION:${esc(location)}` : "",
      `URL:${new URL(url, window.location.href).href}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].filter(Boolean).join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    a.download = `${uid}.ics`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  return (
    <button type="button" onClick={onClick} className="btn btn-glass">
      <CalendarPlus className="size-4" aria-hidden /> {label}
    </button>
  );
}

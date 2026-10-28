"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type Labels = {
  name: string;
  email: string;
  institution: string;
  country: string;
  topic: string;
  message: string;
  submit: string;
  note: string;
  subjectPrefix: string;
  required: string;
  /** Shown after the mail app opens. */
  sent: string;
};

/**
 * Inquiry form without a backend: it composes a prefilled email to the
 * KUI address for the chosen topic (falling back to `to`) and opens the visitor's mail app.
 */
export function InquiryForm({ to, topics, labels }: { to: string; topics: { value: string; label: string; to?: string }[]; labels: Labels }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const chosen = topics.find((t) => t.value === get("topic"));
    const topic = chosen?.label ?? get("topic");
    const recipient = chosen?.to ?? to;
    const subject = `${labels.subjectPrefix}: ${topic} — ${get("institution") || get("name")}`;
    const body = [
      get("message"),
      "",
      "—",
      `${labels.name}: ${get("name")}`,
      `${labels.email}: ${get("email")}`,
      `${labels.institution}: ${get("institution")}`,
      `${labels.country}: ${get("country")}`,
      `${labels.topic}: ${topic}`,
    ].join("\n");
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field = "mt-1.5 w-full rounded-md border border-midnight/15 bg-white px-4 py-3 text-midnight placeholder:text-ink-muted";
  const label = "text-sm font-semibold text-midnight";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="block">
        <span className={label}>{labels.name} <span aria-hidden className="text-red">*</span></span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block">
        <span className={label}>{labels.email} <span aria-hidden className="text-red">*</span></span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block">
        <span className={label}>{labels.institution}</span>
        <input name="institution" autoComplete="organization" className={field} />
      </label>
      <label className="block">
        <span className={label}>{labels.country}</span>
        <input name="country" autoComplete="country-name" className={field} />
      </label>
      <label className="block sm:col-span-2">
        <span className={label}>{labels.topic}</span>
        <select name="topic" className={field} defaultValue={topics[0].value}>
          {topics.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className={label}>{labels.message} <span aria-hidden className="text-red">*</span></span>
        <textarea name="message" required rows={5} className={field} />
      </label>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-secondary">{labels.note} <span className="text-red">*</span> {labels.required}</p>
        <button type="submit" className="btn btn-midnight justify-center">
          <Send className="size-4" aria-hidden /> {labels.submit}
        </button>
      </div>
      {sent && <p role="status" className="text-sm font-semibold text-emerald sm:col-span-2">{labels.sent}</p>}
    </form>
  );
}

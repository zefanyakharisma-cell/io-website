import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "International Office · Petra Christian University",
  robots: { index: false },
  other: { refresh: "0; url=/en/" },
};

/** Static export has no server redirects: send visitors to the English site, or Indonesian if their browser prefers it. */
export default function RootPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-midnight-deep p-8 text-center text-white">
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace((navigator.language||"").toLowerCase().startsWith("id")?"/id/":"/en/")`,
        }}
      />
      <p>
        <Link className="prose-link on-dark" href="/en/">English</Link> · <Link className="prose-link on-dark" href="/id/">Bahasa Indonesia</Link>
      </p>
    </main>
  );
}

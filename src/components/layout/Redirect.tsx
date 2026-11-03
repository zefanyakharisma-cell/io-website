"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Client-side redirect for a moved page. The site is a static export, so there
 * are no server redirects: the page carries a meta refresh (works without JS)
 * and replaces the history entry when JS runs.
 */
export function Redirect({ to, label }: { to: string; label: string }) {
  useEffect(() => {
    window.location.replace(to + window.location.hash);
  }, [to]);
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <main className="mx-auto max-w-xl px-4 py-48 text-center">
        <p className="text-lg">
          <Link className="prose-link" href={to}>{label}</Link>
        </p>
      </main>
    </>
  );
}

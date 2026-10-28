export const locales = ["en", "id"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** A string in both site languages. Indonesian copy is pending review by KUI. */
export type L = { en: string; id: string };

export function tr(value: L | string, locale: Locale): string {
  return typeof value === "string" ? value : value[locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Prefix an internal path with the locale, e.g. href("en", "/news#top") -> "/en/news/#top". */
export function href(locale: Locale, path = "/") {
  const [route, hash] = path.split("#");
  const clean = route.replace(/^\/+|\/+$/g, "");
  const base = clean ? `/${locale}/${clean}/` : `/${locale}/`;
  return hash ? `${base}#${hash}` : base;
}

export function localeParams() {
  return locales.map((locale) => ({ locale }));
}

/** Resolves the [locale] route param; 404s anything that is not a site language. */
export async function resolveLocale(params: Promise<{ locale: string }>): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    const { notFound } = await import("next/navigation");
    notFound();
  }
  return locale as Locale;
}

export type PageProps = { params: Promise<{ locale: string }> };

/** Page metadata in the active language, with alternates for both. */
export function pageMeta(locale: Locale, path: string, title: L, description: L) {
  return {
    title: title[locale],
    description: description[locale],
    alternates: {
      canonical: href(locale, path),
      languages: { en: href("en", path), id: href("id", path) },
    },
  };
}

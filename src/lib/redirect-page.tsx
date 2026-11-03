import { Redirect } from "@/components/layout/Redirect";
import { href, localeParams, resolveLocale, type PageProps } from "@/lib/i18n";

/** Builds a static redirect page from an old URL to its new home (see README → Moved pages). */
export function redirectPage(to: string) {
  return {
    generateStaticParams: localeParams,
    async generateMetadata({ params }: PageProps) {
      const locale = await resolveLocale(params);
      return { title: locale === "en" ? "Page moved" : "Halaman dipindahkan", robots: { index: false }, alternates: { canonical: href(locale, to) } };
    },
    async Page({ params }: PageProps) {
      const locale = await resolveLocale(params);
      return <Redirect to={href(locale, to)} label={locale === "en" ? "This page has moved — continue" : "Halaman ini telah dipindahkan — lanjutkan"} />;
    },
  };
}

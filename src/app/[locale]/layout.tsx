import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { isLocale, localeParams, type Locale } from "@/lib/i18n";

export const dynamicParams = false;
export function generateStaticParams() {
  return localeParams();
}

const SITE_URL = "https://io.petra.ac.id";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const en = locale === "en";
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: en ? "International Office · Petra Christian University" : "Kantor Urusan Internasional · Universitas Kristen Petra",
      template: en ? "%s · Petra International Office" : "%s · KUI Petra",
    },
    description: en
      ? "Partner with, study at, or go abroad from Petra Christian University, Surabaya: 180+ international partners in 33 countries, ranked in QS WUR 2026."
      : "Bermitra, belajar, atau berangkat ke luar negeri bersama Universitas Kristen Petra, Surabaya: 180+ mitra internasional di 33 negara, masuk QS WUR 2026.",
    openGraph: { type: "website", siteName: "Petra Christian University · International Office", images: ["/images/campus/landmark-1600.webp"], locale: en ? "en_GB" : "id_ID" },
    icons: { icon: "/brand/favicon.png" },
  };
}

export const viewport: Viewport = { themeColor: "#133256" };

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale}>
      <body className="min-h-screen">
        <SiteHeader locale={locale as Locale} />
        <main id="main">{children}</main>
        <SiteFooter locale={locale as Locale} />
      </body>
    </html>
  );
}

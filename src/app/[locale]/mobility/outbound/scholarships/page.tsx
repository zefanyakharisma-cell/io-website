import { Award, Wallet } from "lucide-react";
import { media } from "@/content/media.generated";
import { mobilityNav } from "@/content/navigation";
import { scholarships } from "@/content/outbound";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { IconBadge } from "@/components/brand/IconBadge";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/mobility/outbound/scholarships", { en: "Outbound Scholarships", id: "Beasiswa Outbound" }, { en: "Internal Petra scholarships for short programs, exchange and dual degrees, and external scholarships such as GKS, JASSO and Orange Tulip.", id: "Beasiswa internal Petra untuk program singkat, pertukaran dan dual degree, serta beasiswa eksternal seperti GKS, JASSO dan Orange Tulip." });
}

export default async function ScholarshipsPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        image={media.mobility.nsysu}
        eyebrow={en ? "Outbound · scholarships" : "Outbound · beasiswa"}
        title={en ? "Scholarships" : "Beasiswa"}
        lead={en ? "Funding from Petra and from partner governments and universities to help you study abroad." : "Pendanaan dari Petra serta dari pemerintah dan universitas mitra untuk membantu Anda belajar di luar negeri."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(mobilityNav.label, locale), href: href(locale, "/mobility") }, { label: "Outbound", href: href(locale, "/mobility/outbound") }, { label: en ? "Scholarships" : "Beasiswa" }]}
      />

      <Section tone="light" labelledBy="internal-title" id="internal" className="scroll-mt-20">
        <SectionHeading id="internal-title" tone="light" eyebrow={en ? "Internal scholarship" : "Beasiswa internal"} title={en ? "From Petra Christian University" : "Dari Universitas Kristen Petra"} lead={tr(scholarships.note, locale)} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {scholarships.internal.map((s, i) => (
            <li key={s.amount} className="glass-light rounded-lg p-6">
              <IconBadge icon={Wallet} tone={(["sunrise", "aqua", "dusk"] as const)[i]} size={44} />
              <p className="mt-4 font-bold text-midnight">{tr(s.program, locale)}</p>
              <p className="mt-1 font-display text-5xl leading-none text-midnight">{s.amount}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dark" cinematic bgImage={media.mobility["korea-university"]} orbs labelledBy="external-title" id="external" className="scroll-mt-20">
        <SectionHeading id="external-title" eyebrow={en ? "External scholarship" : "Beasiswa eksternal"} title={en ? "From partners and governments" : "Dari mitra dan pemerintah"} lead={tr(scholarships.note, locale)} />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {scholarships.external.map((g) => (
            <div key={g.for.en} className="glass rounded-lg p-6">
              <p className="eyebrow text-amber">{tr(g.for, locale)}</p>
              <ul className="mt-4 space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-lg font-semibold"><Award className="size-5 shrink-0 text-amber" aria-hidden />{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand locale={locale} image={media.mobility["exchange-group"]} title={en ? "Ask us about scholarships." : "Tanyakan tentang beasiswa."} body={en ? "The student mobility team can tell you which scholarships fit your destination." : "Tim mobilitas mahasiswa dapat menjelaskan beasiswa yang sesuai dengan tujuan Anda."} />
    </>
  );
}

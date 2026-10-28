import { Check, Mail } from "lucide-react";
import { media } from "@/content/media.generated";
import { aboutNav } from "@/content/navigation";
import { petramate } from "@/content/getToKnow";
import { links } from "@/content/links";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { ToConfirm } from "@/components/sections/bits";
import { ExternalLink } from "@/components/sections/links";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Gallery } from "@/components/ui/gallery";
import { SourceNote } from "@/components/sections/SourceNote";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/about/petramate", { en: "Petramate Team", id: "Tim Petramate" }, { en: "Petra students who welcome international students to Surabaya. Join the team.", id: "Mahasiswa Petra yang menyambut mahasiswa internasional di Surabaya. Bergabunglah." });
}

export default async function PetramatePage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        image={media.mobility["international-day"]}
        eyebrow={tr(aboutNav.label, locale)}
        title={en ? "Petramate Team" : "Tim Petramate"}
        lead={tr(petramate.intro, locale)}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(aboutNav.label, locale), href: href(locale, "/about") }, { label: "Petramate" }]}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <ExternalLink href={links.petramateRegistration} label={en ? "Register as a Petramate" : "Daftar sebagai Petramate"} locale={locale} />
        </div>
      </PageHero>
      <Section tone="light" labelledBy="benefits">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="benefits" tone="light" eyebrow={en ? "Why join" : "Mengapa bergabung"} title={en ? "What you gain as a Petramate" : "Yang Anda dapatkan sebagai Petramate"} />
            <ul className="mt-6 space-y-3">
              {petramate.benefits.map((b) => <li key={b.en} className="flex gap-3 text-midnight"><Check className="mt-0.5 size-5 shrink-0 text-emerald" aria-hidden />{tr(b, locale)}</li>)}
            </ul>
            <ToConfirm locale={locale} className="mt-5 text-emerald" />
            <h3 className="mt-8 text-lg text-midnight">{en ? "Recognition (2024/25 recruitment)" : "Penghargaan (rekrutmen 2024/25)"}</h3>
            <dl className="mt-3 grid gap-3 sm:grid-cols-2">
              {petramate.recruitmentFacts.map((f) => (
                <div key={f.value} className="glass-light rounded-lg p-4">
                  <dt className="font-display text-3xl leading-none text-midnight">{f.value}</dt>
                  <dd className="mt-1 text-sm text-ink-secondary">{tr(f.label, locale)}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-2 text-xs font-semibold text-emerald">{en ? "From the 2024/25 call — to be confirmed for this year." : "Dari rekrutmen 2024/25 — menunggu konfirmasi untuk tahun ini."}</p>
            <SourceNote ids={["petramate2425"]} locale={locale} />
          </div>
          <div className="glass-light self-start rounded-lg p-6">
            <p className="eyebrow text-emerald">{en ? "Interested?" : "Tertarik?"}</p>
            <p className="mt-2 text-lg font-bold text-midnight">{en ? "Register online, or ask our mobility team." : "Daftar online, atau tanyakan ke tim mobilitas kami."}</p>
            <div className="mt-5 flex flex-col gap-3">
              <ExternalLink href={links.petramateRegistration} label={en ? "Online registration" : "Pendaftaran online"} locale={locale} variant="midnight" />
              <a href={`mailto:${petramate.contact}`} className="btn btn-amber self-start"><Mail className="size-4" aria-hidden /> {petramate.contact}</a>
            </div>
          </div>
        </div>
      </Section>
      <Section tone="deep" labelledBy="moments">
        <SectionHeading id="moments" eyebrow={en ? "Petramate moments" : "Momen Petramate"} title={en ? "Welcoming the world to Petra" : "Menyambut dunia di Petra"} />
        <Gallery className="mt-10" items={petramate.images.map((g) => ({ ...g, caption: g.alt }))} columns="columns-2 md:columns-3" openLabel={en ? "Open photo" : "Buka foto"} />
      </Section>
    </>
  );
}

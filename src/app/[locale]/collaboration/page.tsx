import { BriefcaseBusiness, FlaskConical, GraduationCap, Mail, Mic, Phone, Presentation, Repeat, Ruler, Sparkles } from "lucide-react";
import { media } from "@/content/media.generated";
import { collaborationNav } from "@/content/navigation";
import { collaboration, collaborationWays, consortia, networkingLogos } from "@/content/partners";
import { partnerSites } from "@/content/partner-sites";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { ExternalLink } from "@/components/sections/links";
import { LogoGrid } from "@/components/sections/LogoGrid";
import { JumpLinks } from "@/components/sections/mobility";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { IconBadge } from "@/components/brand/IconBadge";
import { PatternBlock } from "@/components/brand/PatternBlock";
import { Reveal } from "@/components/brand/Reveal";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/collaboration", collaborationNav.label, collaboration.intro);
}

const icons = { repeat: Repeat, graduation: GraduationCap, briefcase: BriefcaseBusiness, ruler: Ruler, flask: FlaskConical, presentation: Presentation, mic: Mic, sun: Sparkles } as const;

export default async function CollaborationPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";
  const newTab = en ? "(opens in a new tab)" : "(membuka tab baru)";
  const groups = [
    { label: en ? "QS Top 100 universities" : "Universitas QS Top 100", items: networkingLogos.qsTop100.map((p) => ({ name: p.name, meta: p.country, badge: `QS #${p.qs}`, href: partnerSites[p.name], logo: p.logo })) },
    { label: en ? "Multinational corporations" : "Perusahaan multinasional", items: networkingLogos.multinationals.map((n) => ({ name: n.name, href: n.website, logo: n.logo })) },
    { label: en ? "Foundations" : "Yayasan", items: networkingLogos.foundations.map((n) => ({ name: n.name, href: n.website, logo: n.logo })) },
  ];

  return (
    <>
      <PageHero
        image={media.mobility["asp-group"]}
        eyebrow={tr(collaborationNav.label, locale)}
        title={tr(collaboration.headline, locale)}
        lead={tr(collaboration.intro, locale)}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(collaborationNav.label, locale) }]}
      >
        <JumpLinks items={collaborationNav.links.map((l) => ({ id: l.path.split("#")[1], label: tr(l.label, locale) }))} />
      </PageHero>

      <Section tone="light" labelledBy="networking-title" id="networking" className="scroll-mt-20" decor={<span aria-hidden className="petra-glow petra-glow--cerise -right-48 -top-48 hidden size-[30rem] md:block" />}>
        <SectionHeading id="networking-title" tone="light" eyebrow={en ? "Global networking" : "Jejaring global"} title={tr(collaboration.headline, locale)} lead={tr(collaboration.partnersLine, locale)} />
        <div className="mt-10 space-y-10">
          {groups.map((g) => (
            <div key={g.label}>
              <h3 className="eyebrow text-emerald">{g.label}</h3>
              <LogoGrid className="mt-4" items={g.items} newTab={newTab} />
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink-secondary">{en ? "Logos are trademarks of their respective institutions, shown to identify partnerships; initials stand in where a logo is still to be added." : "Logo adalah merek dagang institusi masing-masing, ditampilkan untuk menandai kemitraan; inisial dipakai bila logo belum tersedia."}</p>
      </Section>

      <Section tone="white" labelledBy="ways-title" decor={<PatternBlock corner="tr" className="!size-64" />}>
        <SectionHeading id="ways-title" tone="light" eyebrow={en ? "Ways we collaborate" : "Bentuk kolaborasi"} title={en ? "Collaboration that fits your priorities" : "Kolaborasi sesuai prioritas Anda"} lead={tr(collaboration.waysIntro, locale)} />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {collaborationWays.map((w, i) => {
            const Icon = icons[w.icon as keyof typeof icons];
            return (
              <li key={w.icon} className="glass-light relative flex items-center gap-4 rounded-lg p-5">
                <IconBadge icon={Icon} tone={(["sunrise", "aqua", "dusk", "amber"] as const)[i % 4]} size={44} />
                <p className="text-lg font-bold text-midnight">{tr(w.title, locale)}</p>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section tone="dark" orbs cinematic bgImage={media.mobility["international-day"]} labelledBy="consortium-title" id="consortium" className="scroll-mt-20">
        <SectionHeading id="consortium-title" eyebrow={en ? "Consortium" : "Konsorsium"} title={en ? "Regional and international consortia" : "Konsorsium regional dan internasional"} lead={tr(collaboration.consortiumIntro, locale)} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {consortia.map((c, i) => {
            const logo = (
              <span className="grid h-24 place-items-center rounded-md bg-white p-3">
                {c.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={c.logo.src} alt={c.logo.alt} className="max-h-[4.5rem] w-auto max-w-full object-contain" loading="lazy" />
                ) : (
                  <span aria-hidden className="grid size-16 place-items-center rounded-full bg-midnight font-display text-xl leading-none tracking-wide text-amber">{c.name}</span>
                )}
              </span>
            );
            return (
              <li key={c.name}>
                <Reveal delay={(i % 3) * 0.05} className="glass flex h-full flex-col rounded-lg p-5">
                  {c.website ? (
                    <a href={c.website} target="_blank" rel="noreferrer" className="block rounded-md transition-transform hover:-translate-y-0.5" aria-label={`${c.name} ${en ? "website" : "situs"} ${newTab}`}>{logo}</a>
                  ) : logo}
                  <p className="mt-4 font-display text-4xl leading-none text-amber">{c.name}</p>
                  <p className="mt-2 text-sm font-semibold text-smoke">{c.full}</p>
                  <p className="mt-3 flex-1 text-sm text-smoke/90">{tr(c.body, locale)}</p>
                  <ExternalLink href={c.website} label={en ? "Visit website" : "Kunjungi situs"} locale={locale} variant="glass" className="mt-4 self-start" />
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section tone="white" labelledBy="contact-title" id="contact" className="scroll-mt-20">
        <div className="grid gap-8 rounded-lg bg-gradient-midnight p-8 text-white lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <SectionHeading id="contact-title" eyebrow={en ? "Contact us" : "Hubungi kami"} title={en ? "Let's work together" : "Mari bekerja sama"} lead={tr(collaboration.contactIntro, locale)} />
          <div className="flex flex-col gap-3">
            {collaboration.emails.map((e) => (
              <a key={e} href={`mailto:${e}`} className="btn btn-amber justify-center"><Mail className="size-4" aria-hidden /> {e}</a>
            ))}
            <a href={collaboration.phone.href} className="btn btn-glass justify-center"><Phone className="size-4" aria-hidden /> {collaboration.phone.display}</a>
          </div>
        </div>
      </Section>
    </>
  );
}

import { Check } from "lucide-react";
import { media } from "@/content/media.generated";
import { inboundNav } from "@/content/navigation";
import { tailorMade } from "@/content/inbound";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { ToConfirm } from "@/components/sections/bits";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Gallery } from "@/components/ui/gallery";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/inbound/tailor-made", { en: "Tailor-made Programs", id: "Program Tailor-made" }, { en: "Short programmes designed with a partner university around its students' goals.", id: "Program singkat yang dirancang bersama universitas mitra sesuai tujuan mahasiswanya." });
}

export default async function TailorMadePage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        image={media.mobility["asp-event"]}
        eyebrow={en ? "Inbound · non-degree" : "Inbound · non-gelar"}
        title={en ? "Tailor-made Programs" : "Program Tailor-made"}
        lead={en ? "A programme built for your cohort." : "Program yang dirancang untuk kelompok Anda."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(inboundNav.label, locale), href: href(locale, "/inbound") }, { label: en ? "Tailor-made Programs" : "Program Tailor-made" }]}
      />
      <Section tone="light" labelledBy="what">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="what" tone="light" eyebrow={en ? "What is a tailor-made program?" : "Apa itu program tailor-made?"} title={en ? "Your goals, our campus" : "Tujuan Anda, kampus kami"} lead={tr(tailorMade.intro, locale)} />
            <ToConfirm locale={locale} className="mt-5 text-emerald" />
          </div>
          <div className="glass-light rounded-lg p-6">
            <p className="eyebrow text-emerald">{en ? "Build it from" : "Disusun dari"}</p>
            <ul className="mt-4 space-y-3">
              {tailorMade.options.map((o) => (
                <li key={o.en} className="flex gap-3 text-midnight"><Check className="mt-0.5 size-5 shrink-0 text-emerald" aria-hidden />{tr(o, locale)}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section tone="deep" labelledBy="past">
        <SectionHeading id="past" eyebrow={en ? "Past programmes" : "Program sebelumnya"} title={en ? "Programmes we have hosted" : "Program yang pernah kami selenggarakan"} />
        <Gallery className="mt-10" items={tailorMade.gallery.map((g) => ({ ...g, caption: g.alt }))} openLabel={en ? "Open photo" : "Buka foto"} />
      </Section>
      <CtaBand locale={locale} image={media.mobility["asp-group"]} title={en ? "Plan a programme with us." : "Rancang program bersama kami."} body={en ? "Tell us your group size, dates and focus, and we'll propose a programme." : "Sampaikan jumlah peserta, tanggal dan fokus, dan kami akan mengusulkan programnya."} />
    </>
  );
}

import { BriefcaseBusiness, FlaskConical, GraduationCap, Mail, MapPin, Mic, Phone, Presentation, Repeat, Ruler, Sun } from "lucide-react";
import { media } from "@/content/media.generated";
import { navigation } from "@/content/navigation";
import { collaborationWays } from "@/content/partners";
import { contact, inquiryTopics, partnershipProcess } from "@/content/contact";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/brand/Reveal";
import { Photo } from "@/components/brand/Photo";
import { Ring } from "@/components/brand/Ring";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/partnership/connect", { en: "Connect with Us", id: "Hubungi Kami" }, { en: "Eight ways to work with Petra, and how to reach the International Office.", id: "Delapan cara bekerja sama dengan Petra, dan cara menghubungi KUI." });
}

const icons = { repeat: Repeat, graduation: GraduationCap, briefcase: BriefcaseBusiness, ruler: Ruler, flask: FlaskConical, presentation: Presentation, mic: Mic, sun: Sun } as const;

/** Bento layout (21st.dev "bento grid" pattern): a 2×2 and a 2×1 photo tile, then six glass tiles — three full rows of four. */
const bento = [
  { span: "md:col-span-2 md:row-span-2", image: media.mobility["korea-university"] },
  { span: "md:col-span-2", image: media.mobility.saxion },
  { span: "", image: null },
  { span: "", image: null },
  { span: "", image: null },
  { span: "", image: null },
  { span: "", image: null },
];

export default async function ConnectPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        image={media.mobility["international-day"]}
        eyebrow={en ? "Potential collaboration" : "Peluang kolaborasi"}
        title={en ? "8 ways to work with Petra" : "8 cara bekerja sama dengan Petra"}
        lead={en ? "Every partnership is shaped with you — from a single joint lecture to a full degree pathway." : "Setiap kemitraan dirancang bersama Anda — dari satu kuliah bersama hingga jalur gelar penuh."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(navigation[2].label, locale) }, { label: en ? "Connect with Us" : "Hubungi Kami" }]}
      >
        <a href="#inquiry" className="btn btn-amber mt-6">{en ? "Send an inquiry" : "Kirim pertanyaan"}</a>
      </PageHero>

      <Section tone="dark" orbs labelledBy="ways">
        <h2 id="ways" className="sr-only">{en ? "Ways to collaborate" : "Cara berkolaborasi"}</h2>
        <ul className="grid auto-rows-[minmax(11rem,auto)] gap-3 md:grid-cols-4">
          {collaborationWays.map((w, i) => {
            const Icon = icons[w.icon as keyof typeof icons];
            const cell = bento[i] ?? { span: "", image: null };
            return (
              <li key={w.icon} className={cn(cell.span)}>
                <Reveal delay={(i % 4) * 0.05} className={cn("relative flex h-full flex-col justify-end overflow-hidden rounded-lg", !cell.image && "glass p-5")}>
                  {cell.image ? (
                    <>
                      <Photo image={cell.image} className="absolute inset-0" sizes="(min-width: 768px) 50vw, 100vw" />
                      <span className="absolute inset-0 bg-gradient-to-t from-midnight-deep via-midnight-deep/40 to-transparent" />
                      <span className="glass relative m-3 block rounded-md p-5">
                        <Icon className="size-6 text-amber" aria-hidden />
                        <span className="mt-3 block text-xl font-bold">{tr(w.title, locale)}</span>
                        <span className="mt-1 block text-smoke/90">{tr(w.body, locale)}</span>
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="absolute right-4 top-4 font-display text-4xl leading-none text-white/15">0{i + 1}</span>
                      <Icon className="size-6 text-amber" aria-hidden />
                      <span className="mt-3 block text-lg font-bold">{tr(w.title, locale)}</span>
                      <span className="mt-1 block text-sm text-smoke/90">{tr(w.body, locale)}</span>
                    </>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-sm text-smoke/80">{en ? "Exchange is open across all faculties. Research runs through our four study centres. Example conference: the International Conference on Empathic Architecture." : "Pertukaran terbuka untuk semua fakultas. Riset berjalan melalui empat pusat studi kami. Contoh konferensi: International Conference on Empathic Architecture."}</p>
      </Section>

      <Section tone="deep" labelledBy="process">
        <SectionHeading id="process" eyebrow={en ? "How it works" : "Cara kerjanya"} title={en ? "From hello to MoU" : "Dari sapaan hingga MoU"} />
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {partnershipProcess.map((s, i) => (
            <li key={tr(s.title, "en")}>
              <Reveal delay={i * 0.1} className="glass h-full rounded-lg p-6">
                <span className="font-display text-6xl leading-none text-amber">0{i + 1}</span>
                <p className="mt-2 text-xl font-bold">{tr(s.title, locale)}</p>
                <p className="mt-1 text-smoke/90">{tr(s.body, locale)}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="light" labelledBy="inquiry-title" id="inquiry" className="scroll-mt-20">
        <Ring shape="ring-u-line" className="-left-40 -top-10 w-[34rem] text-blue/40" />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="glass-light rounded-lg p-6 md:p-8">
            <SectionHeading id="inquiry-title" tone="light" eyebrow={en ? "Inquiry" : "Pertanyaan"} title={en ? "Tell us what you have in mind" : "Ceritakan rencana Anda"} />
            <div className="mt-8">
              <InquiryForm
                to={contact.email}
                topics={inquiryTopics.map((t) => ({ value: t.value, label: tr(t.label, locale) }))}
                labels={{
                  name: en ? "Your name" : "Nama Anda",
                  email: en ? "Email" : "Email",
                  institution: en ? "Institution" : "Institusi",
                  country: en ? "Country" : "Negara",
                  topic: en ? "Topic" : "Topik",
                  message: en ? "Message" : "Pesan",
                  submit: en ? "Open in my email app" : "Buka di aplikasi email",
                  note: en ? `Submitting opens a prefilled email to ${contact.email}.` : `Formulir ini membuka email yang sudah terisi ke ${contact.email}.`,
                  required: en ? "required" : "wajib diisi",
                  subjectPrefix: en ? "Inquiry" : "Pertanyaan",
                  sent: en ? "Your email app should open with the message ready to send." : "Aplikasi email Anda akan terbuka dengan pesan yang siap dikirim.",
                }}
              />
            </div>
          </div>
          <aside className="space-y-4">
            <div className="overflow-hidden rounded-lg bg-midnight text-white">
              <div className="relative aspect-[16/9]"><Photo image={media.campus.landmark} sizes="(min-width: 1024px) 33vw, 100vw" /></div>
              <div className="p-6">
                <p className="eyebrow text-amber">{tr(contact.office, locale)}</p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex gap-3"><Mail className="mt-0.5 size-4 shrink-0 text-amber" aria-hidden /><a className="prose-link on-dark" href={`mailto:${contact.email}`}>{contact.email}</a></li>
                  <li className="flex gap-3"><Phone className="mt-0.5 size-4 shrink-0 text-amber" aria-hidden /><a className="prose-link on-dark" href={contact.phoneHref}>{contact.phone}</a></li>
                  <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-amber" aria-hidden /><a className="prose-link on-dark" href={contact.mapUrl} target="_blank" rel="noreferrer">{contact.address}</a></li>
                </ul>
                <p className="mt-5 text-sm text-smoke/85">{contact.web.join(" · ")}</p>
              </div>
            </div>
            <div className="rounded-lg border border-midnight/10 bg-white p-6">
              <p className="eyebrow text-emerald">Social</p>
              <ul className="mt-3 space-y-2">
                {contact.social.map((s) => (
                  <li key={s.handle} className="flex items-center justify-between gap-3 text-midnight">
                    <span className="text-sm text-ink-secondary">{s.network}</span>
                    {s.url ? <a className="prose-link font-semibold" href={s.url} target="_blank" rel="noreferrer">{s.handle}</a> : <span className="font-semibold">{s.handle}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

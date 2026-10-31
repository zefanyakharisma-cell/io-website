import { AtSign, DoorOpen, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { media } from "@/content/media.generated";
import { contactNav } from "@/content/navigation";
import { contact, inquiryTopics } from "@/content/contact";
import { contactGroups, team } from "@/content/team";
import { links, whatsapp } from "@/content/links";
import { href, localeParams, pageMeta, resolveLocale, tr, type PageProps } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/Section";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { ToConfirm } from "@/components/sections/bits";
import { WhatsAppButton } from "@/components/sections/links";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Photo } from "@/components/brand/Photo";
import { IconBadge } from "@/components/brand/IconBadge";
import { Sign } from "@/components/brand/Sign";
import { Shape } from "@/components/brand/Shape";

export const generateStaticParams = localeParams;

export async function generateMetadata({ params }: PageProps) {
  return pageMeta(await resolveLocale(params), "/contact", { en: "Contact Us", id: "Hubungi Kami" }, { en: "Contact the International Office of Petra Christian University: partnership, student mobility, the International Program and Petramate.", id: "Hubungi Kantor Urusan Internasional Universitas Kristen Petra: kemitraan, mobilitas mahasiswa, Program Internasional dan Petramate." });
}

export default async function ContactPage({ params }: PageProps) {
  const locale = await resolveLocale(params);
  const en = locale === "en";

  return (
    <>
      <PageHero
        image={media.mobility["international-day"]}
        eyebrow={tr(contact.office, locale)}
        title={en ? "Contact Us" : "Hubungi Kami"}
        lead={en ? "Find the right person for partnerships, student mobility, the International Program and Petramate." : "Temukan kontak yang tepat untuk kemitraan, mobilitas mahasiswa, Program Internasional dan Petramate."}
        crumbs={[{ label: en ? "Home" : "Beranda", href: href(locale) }, { label: tr(contactNav.label, locale) }]}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <WhatsAppButton digits={whatsapp.inbound.digits} display={`${whatsapp.inbound.display} (${en ? "inbound" : "inbound"})`} locale={locale} />
          <WhatsAppButton digits={whatsapp.outbound.digits} display={`${whatsapp.outbound.display} (${en ? "outbound" : "outbound"})`} locale={locale} className="btn-glass !bg-white/10 !text-white" />
        </div>
      </PageHero>

      <Section tone="light" labelledBy="routes" decor={<><Shape kind="quarter-bl" className="right-0 top-0 w-32 text-teal md:hidden lg:block" /><Shape kind="circle" className="right-36 top-6 w-8 text-amber md:hidden lg:block" /></>}>
        <SectionHeading id="routes" tone="light" eyebrow={en ? "Contact" : "Kontak"} title={en ? "Who to contact" : "Siapa yang dihubungi"} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactGroups.map((g) => (
            <li key={g.audience.en} className="glass-light rounded-lg p-6">
              <p className="eyebrow text-emerald">{tr(g.audience, locale)}</p>
              <ul className="mt-4 space-y-3">
                {g.contacts.map((c) => (
                  <li key={c.email + g.audience.en}>
                    <a className="prose-link break-all font-semibold text-midnight" href={`mailto:${c.email}`}>{c.email}</a>
                    <p className="text-sm text-ink-secondary">{tr(c.role, locale)}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="mt-6 flex items-center gap-2 text-midnight">
          <AtSign className="size-5" aria-hidden />Instagram
          <a className="prose-link font-semibold" href={links.instagram} target="_blank" rel="noreferrer">@internationaloffice_pcu</a>
        </p>
      </Section>

      <Section tone="dark" cinematic bgImage={media.campus["gazebo-study"]} orbs labelledBy="team">
        <SectionHeading id="team" eyebrow={en ? "Members of KUI" : "Anggota KUI"} title={en ? "Persons in charge" : "Penanggung jawab"} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((m) => (
            <li key={m.role.en} className="glass rounded-lg p-5 text-center">
              <div className="mx-auto grid size-24 place-items-center overflow-hidden rounded-full bg-white/10">
                {m.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
                ) : (
                  <UserRound className="size-10 text-smoke/70" aria-hidden />
                )}
              </div>
              <p className="mt-4 font-bold">{m.name || (en ? "Name to be confirmed" : "Nama menunggu konfirmasi")}</p>
              <p className="text-sm text-amber">{tr(m.role, locale)}</p>
              <a className="prose-link mt-2 block break-all text-xs text-smoke" href={`mailto:${m.email}`}>{m.email}</a>
            </li>
          ))}
        </ul>
        {team.some((m) => !m.name) && <ToConfirm locale={locale} className="mt-6 text-amber" />}
      </Section>

      <Section tone="white" labelledBy="inquiry-title" id="inquiry" className="scroll-mt-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="glass-light rounded-lg p-6 md:p-8">
            <SectionHeading id="inquiry-title" tone="light" eyebrow={en ? "Inquiry" : "Pertanyaan"} title={en ? "Send us a message" : "Kirim pesan"} />
            <div className="mt-8">
              <InquiryForm
                to={contact.email}
                topics={inquiryTopics.map((t) => ({ value: t.value, to: t.to, label: tr(t.label, locale) }))}
                labels={{
                  name: en ? "Your name" : "Nama Anda",
                  email: "Email",
                  institution: en ? "Institution" : "Institusi",
                  country: en ? "Country" : "Negara",
                  topic: en ? "Topic" : "Topik",
                  message: en ? "Message" : "Pesan",
                  submit: en ? "Open in my email app" : "Buka di aplikasi email",
                  note: en ? "Your message goes to the KUI team for the topic you choose." : "Pesan Anda dikirim ke tim KUI sesuai topik yang dipilih.",
                  required: en ? "required" : "wajib diisi",
                  subjectPrefix: en ? "Inquiry" : "Pertanyaan",
                  sent: en ? "Your email app should open with the message ready to send." : "Aplikasi email Anda akan terbuka dengan pesan yang siap dikirim.",
                }}
              />
            </div>
          </div>
          <div>
            <aside className="overflow-hidden rounded-lg bg-midnight text-white">
              <div className="relative aspect-[16/9]"><Photo image={media.campus.landmark} sizes="(min-width: 1024px) 33vw, 100vw" /></div>
              <div className="p-6">
                <p className="eyebrow text-amber">{tr(contact.office, locale)}</p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-center gap-3"><IconBadge icon={Mail} tone="sunrise" size={36} /><a className="prose-link on-dark" href={`mailto:${contact.email}`}>{contact.email}</a></li>
                  <li className="flex items-center gap-3"><IconBadge icon={Phone} tone="aqua" size={36} /><a className="prose-link on-dark" href={contact.phoneHref}>{contact.phone}</a></li>
                  <li className="flex items-center gap-3"><IconBadge icon={MapPin} tone="dusk" size={36} /><a className="prose-link on-dark" href={contact.mapUrl} target="_blank" rel="noreferrer">{contact.address}</a></li>
                </ul>
              </div>
            </aside>
            <Sign icon={DoorOpen} building={en ? "D Building · Room 104" : "Gedung D · Ruang 104"} room={en ? "International Office" : "Kantor Urusan Internasional"} className="mt-8" />
          </div>
        </div>
      </Section>
    </>
  );
}

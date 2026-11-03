import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import content from "@/data/content.json";
import { site, waLink } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const contact = content.contact;

// Form nai: client shorasori WhatsApp / Call / Email e reach kore. Number/email: src/data/site.json
export default function Contact() {
  const cards = [
    { icon: FaWhatsapp, label: "WhatsApp", value: site.phone, action: "Chat on WhatsApp", href: waLink(contact.whatsappText), primary: true, tone: "bg-emerald-500/15 text-emerald-400", external: true },
    { icon: FiPhone, label: "Call us", value: site.phone, action: "Call now", href: `tel:${site.phone.replace(/\s/g, "")}`, tone: "bg-brand/15 text-glow" },
    { icon: FiMail, label: "Email", value: site.email, action: "Send an email", href: `mailto:${site.email}?subject=${encodeURIComponent("Website project inquiry")}`, tone: "bg-indigo-400/15 text-indigo-300" },
  ];

  return (
    <section id="contact" className="bg-white/[0.025] py-20 md:py-28">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow={contact.eyebrow} title={contact.title} highlight={contact.highlight} subtitle={contact.subtitle} />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map(({ icon: Icon, label, value, action, href, primary, tone, external }, i) => (
            <Reveal key={label} delay={i * 90} className="h-full min-w-0">
              <div className={`glass-card flex h-full flex-col rounded-3xl p-7 ${primary ? "border-brand/40 bg-white/[0.07]" : ""}`}>
                <span className={`grid h-14 w-14 place-items-center rounded-2xl text-2xl ${tone}`}><Icon /></span>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
                <p className="mt-1 min-w-0 break-words font-display text-lg font-bold text-white">{value}</p>
                <div className="mt-auto pt-7">
                  <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={`${primary ? "btn-primary" : "btn-ghost"} w-full`}>{action}</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex items-center justify-center gap-2 text-sm text-slate-400">
          <FiMapPin className="text-glow" /> {site.location}
        </Reveal>
      </div>
    </section>
  );
}

import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa";
import content from "@/data/content.json";
import { site, socials } from "@/lib/site";
import Logo from "./Logo";

const { nav, footer } = content;
const ICON = { facebook: FaFacebookF, instagram: FaInstagram, linkedin: FaLinkedinIn, youtube: FaYoutube, github: FaGithub };
const h4 = "text-xs font-semibold uppercase tracking-[0.2em] text-white";

export default function Footer() {
  const links = nav.filter((n) => footer.explore.includes(n.id));
  const rows = [
    { icon: FiMail, text: site.email, href: `mailto:${site.email}` },
    { icon: FiPhone, text: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: FiMapPin, text: site.location },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/30 pt-16 text-slate-400 md:pt-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]">
          <div className="min-w-0">
            <a href="#home" aria-label={`${site.name} – home`} className="text-white"><Logo size={40} light /></a>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed">{footer.bio}</p>
            {socials.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {socials.map(([key, url]) => {
                  const Icon = ICON[key];
                  return Icon && (
                    <a key={key} href={url} target="_blank" rel="noopener noreferrer" aria-label={key} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-brand hover:bg-brand hover:text-white"><Icon /></a>
                  );
                })}
              </div>
            )}
          </div>

          <div className="min-w-0">
            <h4 className={h4}>Services</h4>
            <ul className="mt-5 space-y-3 text-[15px]">
              {footer.services.map((s) => <li key={s}><a href="#services" className="transition hover:text-brand">{s}</a></li>)}
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className={h4}>Explore</h4>
            <ul className="mt-5 space-y-3 text-[15px]">
              {links.map((l) => <li key={l.id}><a href={`#${l.id}`} className="transition hover:text-brand">{l.label}</a></li>)}
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className={h4}>Contact</h4>
            <ul className="mt-5 space-y-4 text-[15px]">
              {rows.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5 text-glow"><Icon /></span>
                  {href ? <a href={href} className="min-w-0 truncate transition hover:text-white">{text}</a> : <span>{text}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 py-7 text-center text-xs tracking-wide text-slate-500 md:text-left">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

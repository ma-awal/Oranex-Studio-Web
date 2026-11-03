import { FiArrowRight, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import content from "@/data/content.json";
import { waLink } from "@/lib/site";
import HeroVisual from "./HeroVisual";

const hero = content.hero;

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-20 pt-28 sm:px-8 md:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="min-w-0 animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 backdrop-blur">
            <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            {hero.badge}
          </span>

          <h1 className="mt-6 font-display text-[2.1rem] font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            {hero.titleStart} <span className="grad-text">{hero.titleHighlight}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">{hero.subtitle}</p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#work" className="btn-primary">{hero.primaryCta} <FiArrowRight className="text-lg" /></a>
            <a href={waLink(hero.whatsappText)} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <FaWhatsapp className="text-lg text-emerald-400" /> {hero.whatsappCta}
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-300 lg:justify-start">
            {hero.points.map((p) => (
              <li key={p} className="inline-flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white/10 text-glow"><FiCheck className="text-xs" /></span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 animate-fade-up [animation-delay:150ms]">
          <HeroVisual chips={hero.chips} />
        </div>
      </div>
    </section>
  );
}

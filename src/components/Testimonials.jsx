import { FiStar } from "react-icons/fi";
import content from "@/data/content.json";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const t = content.testimonials;

export default function Testimonials() {
  if (!t.items.length) return null; // items faka hole section hide
  return (
    <section id="testimonials" className="bg-white/[0.025] py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} highlight={t.highlight} />
        <div className="columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5">
          {t.items.map((it, i) => (
            <Reveal key={it.name} delay={(i % 3) * 80} className="break-inside-avoid">
              <figure className="glass-card rounded-3xl p-7">
                <div className="flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((n) => <FiStar key={n} className="fill-current" />)}
                </div>
                <blockquote className="mt-4 text-[15px] leading-relaxed text-slate-300">“{it.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full text-sm font-bold uppercase text-white grad-bg">{it.name.charAt(0)}</span>
                  <span className="text-sm font-semibold text-white">{it.name}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

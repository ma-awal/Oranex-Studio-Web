import content from "@/data/content.json";
import { iconFor } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const w = content.whyUs;

export default function WhyUs() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow={w.eyebrow} title={w.title} highlight={w.highlight} subtitle={w.subtitle} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {w.items.map((it, i) => {
            const Icon = iconFor(it.icon);
            return (
              <Reveal key={it.title} delay={(i % 2) * 90} className="h-full min-w-0">
                <div className="glass-card flex h-full items-start gap-5 rounded-3xl p-6 md:p-7">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand/15 text-xl text-glow"><Icon /></span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold text-white">{it.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-slate-400">{it.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

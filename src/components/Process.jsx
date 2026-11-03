import content from "@/data/content.json";
import { iconFor } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const p = content.process;

export default function Process() {
  return (
    <section id="process" className="bg-white/[0.025] py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow={p.eyebrow} title={p.title} highlight={p.highlight} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {p.steps.map((s, i) => {
            const Icon = iconFor(s.icon);
            return (
              <Reveal key={s.title} delay={i * 90} className="h-full min-w-0">
                <div className="glass-card relative h-full rounded-3xl p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl text-xl text-white shadow-glow grad-bg"><Icon /></span>
                    <span className="font-display text-4xl font-extrabold text-white/10">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-400">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

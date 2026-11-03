import content from "@/data/content.json";
import { iconFor } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const t = content.tech;

export default function Tech() {
  return (
    <section id="tech" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} highlight={t.highlight} subtitle={t.subtitle} />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {t.core.map((s, i) => {
            const Icon = iconFor(s.icon);
            return (
              <Reveal key={s.title} delay={(i % 7) * 50} className="h-full min-w-0">
                <div className="glass-card group flex h-full flex-col items-center rounded-3xl p-5 text-center hover:-translate-y-1.5">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/15 text-2xl text-glow transition group-hover:text-white group-hover:grad-bg"><Icon /></span>
                  <h3 className="mt-3 font-display text-sm font-bold text-white">{s.title}</h3>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14">
          <p className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{t.platformsLabel}</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {t.platforms.map((p) => {
              const Icon = iconFor(p.icon);
              return (
                <div key={p.title} className="glass-card flex min-w-0 items-center gap-4 rounded-3xl p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-2xl text-glow"><Icon /></span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-bold text-white">{p.title}</h3>
                    <p className="text-[13px] leading-snug text-slate-400">{p.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

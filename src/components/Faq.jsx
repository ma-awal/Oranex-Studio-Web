import { FiChevronDown } from "react-icons/fi";
import content from "@/data/content.json";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const f = content.faq;

// JS lage na: native <details>
export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow={f.eyebrow} title={f.title} highlight={f.highlight} />
        <div className="space-y-3">
          {f.items.map((it, i) => (
            <Reveal key={it.q} delay={(i % 3) * 60}>
              <details className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition open:border-brand/40 open:bg-white/[0.07]">
                <summary className="flex list-none items-center justify-between gap-4 font-display text-base font-bold text-white [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0">{it.q}</span>
                  <FiChevronDown className="shrink-0 text-xl text-glow transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-400">{it.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

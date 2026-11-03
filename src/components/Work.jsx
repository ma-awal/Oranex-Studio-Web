import { FaWhatsapp } from "react-icons/fa";
import content from "@/data/content.json";
import { waLink } from "@/lib/site";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const work = content.work;

// Shob project ekbare (filter button / pagination nai). projects: src/data/projects.json
export default function Work({ projects = [] }) {
  return (
    <section id="work" className="bg-white/[0.025] py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow={work.eyebrow} title={work.title} highlight={work.highlight} subtitle={work.subtitle} />

        {projects.length === 0 ? (
          <div className="mx-auto max-w-lg rounded-3xl border border-dashed border-white/15 bg-white/[0.03] px-6 py-16 text-center">
            <p className="text-slate-400">{work.empty}</p>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6"><FaWhatsapp className="text-lg" /> Chat on WhatsApp</a>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title + i} delay={(i % 3) * 80} className="h-full min-w-0"><ProjectCard project={p} /></Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

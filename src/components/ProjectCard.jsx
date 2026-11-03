import { FiArrowUpRight } from "react-icons/fi";
import content from "@/data/content.json";

const hostOf = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};

// Minimal card: thumbnail + category + title + live link. live faka hole "Sample design" lekha dekhay.
export default function ProjectCard({ project }) {
  const host = hostOf(project.live);
  return (
    <article className="glass-card group flex h-full flex-col overflow-hidden rounded-3xl hover:-translate-y-1.5">
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-2">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            width={800}
            height={500}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full w-full place-items-center">
            <span className="grad-text font-display text-6xl font-extrabold">
              {String(project.title || "?")
                .charAt(0)
                .toUpperCase()}
            </span>
          </div>
        )}
        {project.category && (
          <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-ink/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
            {project.category}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <h3 className="font-display text-lg font-bold leading-snug text-white">
          {project.title}
        </h3>
        <div className="mt-auto flex items-center justify-between gap-3">
          {/* <span className="min-w-0 truncate text-sm text-slate-500">{host}</span> */}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live`}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-brand hover:text-white"
            >
              View live <FiArrowUpRight />
            </a>
          ) : (
            <span className="shrink-0 rounded-xl bg-white/10 px-3.5 py-2 text-xs font-semibold text-slate-400">
              {content.work.sampleLabel}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

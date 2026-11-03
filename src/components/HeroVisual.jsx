import { iconFor } from "./icons";

// Photo nai: 3 ta browser window mockup (ecommerce / landing / portfolio) diye service dekhano hoy. Shob % size, tai mobile e overflow hoy na.
function Win({ className = "", children }) {
  return (
    <div className={`absolute overflow-hidden rounded-2xl border border-white/15 bg-ink-2/90 shadow-2xl backdrop-blur ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2">
        <i className="h-2 w-2 rounded-full bg-red-400/80" /><i className="h-2 w-2 rounded-full bg-amber-400/80" /><i className="h-2 w-2 rounded-full bg-emerald-400/80" />
        <span className="ml-2 h-2 flex-1 rounded-full bg-white/10" />
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

export default function HeroVisual({ chips = [] }) {
  const pos = ["left-0 bottom-[22%]", "left-[7%] bottom-[8%]", "right-[1%] top-[41%]"];
  return (
    <div className="relative mx-auto aspect-[1/0.92] w-full max-w-[520px]" aria-hidden="true">
      <div className="absolute inset-[8%] rounded-full bg-brand/25 blur-[90px]" />

      {/* Ecommerce */}
      <Win className="left-0 top-[9%] z-10 w-[74%] animate-float">
        <div className="h-14 rounded-lg bg-linear-to-br from-glow to-brand p-2.5 sm:h-20 sm:p-3.5">
          <div className="h-2 w-2/5 rounded-full bg-white/90" /><div className="mt-1.5 h-1.5 w-1/4 rounded-full bg-white/60" /><div className="mt-2 h-3.5 w-1/6 rounded-full bg-white" />
        </div>
        <div className="mt-2.5 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i}>
              <div className="aspect-square rounded-lg bg-white/10" />
              <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-white/25" /><div className="mt-1 h-1.5 w-1/3 rounded-full bg-glow/80" />
            </div>
          ))}
        </div>
      </Win>

      {/* Landing page */}
      <Win className="right-0 top-0 z-20 w-[46%] animate-float [animation-delay:-2s]">
        <div className="h-2 w-4/5 rounded-full bg-white/75" /><div className="mt-1.5 h-2 w-3/5 rounded-full bg-white/75" />
        <div className="mt-2.5 h-1.5 w-full rounded-full bg-white/20" /><div className="mt-1 h-1.5 w-5/6 rounded-full bg-white/20" />
        <div className="mt-3 h-4 w-2/5 rounded-full bg-linear-to-r from-glow to-brand" />
        <div className="mt-3 h-9 rounded-lg bg-violet/40 sm:h-12" />
      </Win>

      {/* Portfolio */}
      <Win className="bottom-0 right-[3%] z-20 w-[52%] animate-float [animation-delay:-4s]">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 shrink-0 rounded-full bg-linear-to-br from-glow to-brand" />
          <div className="min-w-0 flex-1"><div className="h-1.5 w-3/4 rounded-full bg-white/60" /><div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-white/25" /></div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2"><div className="h-8 rounded-md bg-glow/35 sm:h-12" /><div className="h-8 rounded-md bg-white/10 sm:h-12" /></div>
      </Win>

      {chips.map((c, i) => {
        const Icon = iconFor(c.icon);
        return (
          <div key={c.label} className={`absolute z-30 ${pos[i] || ""} flex items-center gap-2 rounded-xl border border-white/15 bg-ink/80 px-3 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur-md sm:text-sm`}>
            <span className="grid h-6 w-6 place-items-center rounded-lg text-white grad-bg sm:h-7 sm:w-7"><Icon /></span>{c.label}
          </div>
        );
      })}
    </div>
  );
}

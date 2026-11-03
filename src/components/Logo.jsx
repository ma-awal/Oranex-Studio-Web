import { site } from "@/lib/site";

// Logo file: public/logo.svg (ba site.json e "logo" path). Original logo diye file ta replace korlei hobe.
export default function Logo({ size = 36, text = true, light = false }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <img src={site.logo} alt="" width={size} height={size} className="shrink-0 rounded-full" style={{ width: size, height: size }} />
      {text && (
        <span className={`font-display text-lg font-bold tracking-tight ${light ? "text-white" : ""}`}>
          <span className="lg:hidden">{site.shortName}</span>
          <span className="hidden lg:inline">{site.name}</span>
        </span>
      )}
    </span>
  );
}

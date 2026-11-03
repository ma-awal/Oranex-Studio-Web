// Site settings JSON theke ashe (src/data/site.json). Ekhane shudhu code-level helper.
import site from "@/data/site.json";

const isUrl = (u) => { try { return !!new URL(u); } catch { return false; } };
const envUrl = (process.env.NEXT_PUBLIC_SITE_URL || "").trim().replace(/\/+$/, "");
export const SITE_URL = isUrl(envUrl) ? envUrl : "http://localhost:3000"; // domain kena hole .env / Vercel e set koro

export { site };
export const SEO = site.seo;
export const socials = Object.entries(site.social).filter(([, url]) => url); // faka link hide

export const waLink = (text = "Hi Oranex Studio, I'd like to talk about a website project.") =>
  `https://wa.me/${String(site.whatsapp).replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;

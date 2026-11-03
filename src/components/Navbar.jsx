"use client";
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import content from "@/data/content.json";
import { site, waLink } from "@/lib/site";
import Logo from "./Logo";

const { nav } = content;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const els = nav.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const esc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  const solid = scrolled || open;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ${solid ? "border-b border-white/10 bg-ink/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl" : "border-b border-transparent bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:h-[4.5rem] lg:px-10">
        <a href="#home" aria-label={`${site.name} – home`} onClick={() => setOpen(false)}><Logo /></a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${active === n.id ? "text-glow" : "text-slate-300 hover:text-white"}`}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <a href="#contact" className="btn-primary [--btn-px:1.25rem] [--btn-py:0.6rem] [--btn-fs:0.875rem]">Get a quote <FiArrowUpRight /></a>
          </div>
          <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-xl text-white md:hidden">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-ink/95 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4" aria-label="Mobile">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className={`rounded-xl px-4 py-3 text-[15px] font-medium ${active === n.id ? "bg-brand/15 text-glow" : "text-slate-200 hover:bg-white/5"}`}>{n.label}</a>
            ))}
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-3 w-full"><FaWhatsapp className="text-lg" /> Chat on WhatsApp</a>
          </nav>
        </div>
      )}
    </header>
  );
}

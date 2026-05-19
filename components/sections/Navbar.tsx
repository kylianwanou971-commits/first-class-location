"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Accueil", href: "#" },
  { label: "LLD Pro", href: "#lld" },
  { label: "Événements", href: "#evenements" },
  { label: "Programme", href: "#programme" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex flex-col leading-none">
      <span
        className="text-base font-semibold tracking-[0.25em] uppercase text-gold-gradient"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        First Class
      </span>
      <span
        className="text-[9px] tracking-[0.35em] uppercase text-white/40"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Location · Formation
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Desktop layout */}
          <div className="hidden lg:flex items-center justify-between">
            <Logo />
            <nav className="flex items-center gap-5">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[10px] font-medium tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <a href="#formation" className="btn-primary text-xs px-5 py-3">
              Devenir loueur
            </a>
          </div>

          {/* Mobile layout */}
          <div className="lg:hidden flex items-center justify-between">
            <button
              className="w-10 text-white/70 hover:text-white transition-colors p-1"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <Menu size={22} />
            </button>
            <Logo />
            <div className="w-10" />
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col lg:hidden"
          >
            {/* Gold top line */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            {/* Header row */}
            <div className="flex items-center justify-between px-5 py-5">
              <div className="w-10" />
              <Logo />
              <button
                onClick={() => setOpen(false)}
                className="w-10 flex justify-end text-white/50 hover:text-white transition-colors"
                aria-label="Fermer"
              >
                <X size={22} />
              </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/5 mx-5" />

            {/* Links */}
            <nav className="flex-1 flex flex-col justify-center px-5 py-8 gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-widest uppercase text-white/50 hover:text-white py-4 border-b border-white/5 transition-colors flex items-center justify-between group"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {l.label}
                  <span className="text-gold/0 group-hover:text-gold/60 transition-colors text-xs">→</span>
                </motion.a>
              ))}
            </nav>

            {/* CTA */}
            <div className="px-5 pb-8">
              <motion.a
                href="#formation"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.25 }}
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center py-4"
              >
                Devenir loueur
              </motion.a>
            </div>

            {/* Gold bottom line */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

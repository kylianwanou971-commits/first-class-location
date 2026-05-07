"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BookingCallModal from "@/components/ui/BookingCallModal";

const navLinks = [
  { href: "/nos-voitures", label: "Nos Voitures" },
  { href: "/formation", label: "Formation" },
  { href: "/lld-professionnel", label: "LLD Pro" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[rgba(201,168,76,0.15)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-tight">
            <span
              className="text-lg md:text-xl font-heading font-light tracking-[0.3em] text-text-primary uppercase"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              First Class
            </span>
            <span
              className="text-[10px] tracking-[0.4em] text-gold uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Location de Luxe
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase text-text-secondary hover:text-gold transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="btn-gold flex items-center gap-2 text-xs"
            >
              <Phone size={14} />
              Réserver un call
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-text-primary p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0A0A0A] border-t border-[rgba(201,168,76,0.15)]"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-xs tracking-widest uppercase text-text-secondary hover:text-gold transition-colors py-2 border-b border-[rgba(201,168,76,0.1)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setModalOpen(true);
                  }}
                  className="btn-gold mt-2 justify-center text-xs"
                >
                  <Phone size={14} />
                  Réserver un call
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <BookingCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

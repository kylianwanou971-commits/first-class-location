"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Lock, Clock } from "lucide-react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function Countdown() {
  const targetRef = useRef<number | null>(null);
  const [time, setTime] = useState({ h: 71, m: 59, s: 59 });

  useEffect(() => {
    targetRef.current = Date.now() + 72 * 60 * 60 * 1000;
    const id = setInterval(() => {
      const diff = (targetRef.current ?? 0) - Date.now();
      if (diff <= 0) {
        setTime({ h: 0, m: 0, s: 0 });
        clearInterval(id);
        return;
      }
      const h = Math.floor(diff / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1000);
      setTime({ h, m, s });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2 justify-center">
      {[
        { label: "HH", value: time.h },
        { label: "MM", value: time.m },
        { label: "SS", value: time.s },
      ].map(({ label, value }, i) => (
        <div key={label} className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="bg-[#1a0000] border border-red-500/30 px-4 py-3 md:px-6 md:py-4 rounded min-w-[64px] md:min-w-[80px] text-center">
              <span
                className="text-red-400 text-2xl md:text-4xl font-bold tabular-nums"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {pad(value)}
              </span>
            </div>
            <span className="text-red-400/40 text-[9px] uppercase tracking-widest mt-1" style={{ fontFamily: "var(--font-inter)" }}>
              {label}
            </span>
          </div>
          {i < 2 && (
            <span className="text-red-400/60 text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-inter)" }}>
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

const included = [
  "Accès immédiat aux 5 modules vidéo",
  "Communauté privée First Class",
  "Sessions live mensuelles avec Jessy",
  "Mises à jour à vie incluses",
  "Templates de contrats prêts à l'emploi",
  "Support direct par messagerie",
];

export default function CTAFinale() {
  return (
    <section id="contact" className="relative py-24 md:py-36 px-4 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0700] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.1),transparent_65%)]" />

      {/* Top / bottom lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="gold-line" />
          <span className="label">Offre à durée limitée</span>
          <div className="gold-line" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Prêt à lancer
          <br />
          <span className="text-gold-gradient italic">ton agence ?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/50 text-base md:text-lg mb-10 max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Places limitées — Accès immédiat dès ton inscription.
          <br />
          <span className="text-white/30">Le prix augmente à la fermeture de ce timer.</span>
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock size={13} className="text-red-400/70" />
            <span className="text-red-400/70 text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-inter)" }}>
              Offre expire dans
            </span>
          </div>
          <Countdown />
        </motion.div>

        {/* Price card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-[#0d0d0d] border border-gold/20 p-8 md:p-10 max-w-lg mx-auto mb-8 relative overflow-hidden"
        >
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-bl-full" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          {/* Included */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 text-left">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckCircle size={13} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="border-t border-white/8 pt-6 mb-6">
            <div className="flex items-end justify-center gap-3">
              <span
                className="text-white/25 text-lg line-through"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                1 490 €
              </span>
              <span
                className="text-gold text-5xl font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                990 €
              </span>
            </div>
            <p className="text-white/25 text-xs mt-1" style={{ fontFamily: "var(--font-inter)" }}>
              Paiement unique · Accès à vie
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="btn-primary w-full justify-center text-sm py-5 shadow-[0_4px_30px_rgba(201,168,76,0.3)]"
          >
            <Zap size={16} fill="black" />
            Je veux accéder à la formation maintenant
          </a>

          {/* Trust row */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <div className="flex items-center gap-1.5">
              <Lock size={11} className="text-white/25" />
              <span className="text-white/25 text-[10px]" style={{ fontFamily: "var(--font-inter)" }}>
                Paiement sécurisé
              </span>
            </div>
            <span className="text-white/15 text-xs">·</span>
            <span className="text-white/25 text-[10px]" style={{ fontFamily: "var(--font-inter)" }}>
              Accès immédiat
            </span>
            <span className="text-white/15 text-xs">·</span>
            <span className="text-white/25 text-[10px]" style={{ fontFamily: "var(--font-inter)" }}>
              Support inclus
            </span>
          </div>
        </motion.div>

        {/* Social proof below */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-white/25 text-xs"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          +50 entrepreneurs ont déjà fait confiance à cette formation · Résultats variables selon l&apos;implication
        </motion.p>
      </div>
    </section>
  );
}

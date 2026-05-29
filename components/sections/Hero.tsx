"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

const particles = [
  { top: "18%", left: "8%",  size: 5, dur: 4.2, delay: 0   },
  { top: "65%", left: "88%", size: 4, dur: 5.1, delay: 0.8 },
  { top: "38%", left: "75%", size: 3, dur: 3.8, delay: 1.5 },
  { top: "80%", left: "15%", size: 6, dur: 6.0, delay: 0.4 },
  { top: "50%", left: "48%", size: 3, dur: 4.5, delay: 2.1 },
  { top: "22%", left: "58%", size: 4, dur: 5.5, delay: 1.0 },
];

const lineVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: 0.15 + i * 0.18, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const wordVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.25 + i * 0.07, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], ["0%", "22%"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center px-4 pb-10 overflow-hidden bg-[#FAF7F2] min-h-screen"
      style={{ paddingTop: 90 }}
    >
      {/* ── Fond image ── */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110 will-change-transform">
          <Image
            src="https://images.unsplash.com/photo-1776855222862-4c4949002701?w=1920&q=80"
            alt="Porsche GT3 RS vue arrière circuit"
            fill
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
            priority
            sizes="100vw"
          />
        </motion.div>
        {/* Overlay 0.6 */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,18,5,0.72) 0%, rgba(26,18,5,0.55) 50%, rgba(250,247,242,0.95) 90%, rgba(250,247,242,1) 100%)" }} />
        {/* Transition fluide vers la section suivante */}
        <div className="absolute bottom-0 inset-x-0 h-[80px] bg-gradient-to-t from-[#FAF7F2] to-transparent" />
      </div>

      {/* ── Particules dorées ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ delay: p.delay + 1.8, duration: p.dur, repeat: Infinity, repeatType: "loop" }}
            className="absolute rounded-full bg-gold"
            style={{
              top: p.top, left: p.left, width: p.size, height: p.size,
              boxShadow: `0 0 ${p.size * 3}px rgba(201,168,76,0.8)`,
              animation: `floatParticle ${p.dur}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06),transparent_70%)]" />
      </div>

      {/* ── Contenu centré ── */}
      <div className="relative max-w-4xl mx-auto text-center z-10 w-full">

        {/* 1. Label */}
        <motion.p
          custom={0} variants={lineVariants} initial="hidden" animate="visible"
          className="text-sm font-bold tracking-widest uppercase text-gold mb-3"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          La meilleure formation pour lancer ton agence de location de luxe
        </motion.p>

        {/* 2. H1 — mot par mot, text-5xl */}
        <h1
          className="font-bold mb-4 leading-[1.1]"
          style={{ fontFamily: "var(--font-playfair)" }}
          aria-label="La seule formation du marché où un véhicule t'attend à la fin."
        >
          <span className="block text-6xl text-white mb-1">
            {["La", "seule", "formation", "du", "marché"].map((w, i) => (
              <motion.span key={i} custom={i} variants={wordVariants} initial="hidden" animate="visible"
                className="inline-block mr-[0.3em]">{w}</motion.span>
            ))}
          </span>
          <span className="block text-6xl text-white mb-2">
            {["où", "un", "véhicule", "t'attend"].map((w, i) => (
              <motion.span key={i} custom={5 + i} variants={wordVariants} initial="hidden" animate="visible"
                className="inline-block mr-[0.3em]">{w}</motion.span>
            ))}
          </span>
          <span className="block text-6xl text-gold-gradient italic">
            {["à", "la", "fin."].map((w, i) => (
              <motion.span key={i} custom={9 + i} variants={wordVariants} initial="hidden" animate="visible"
                className="inline-block mr-[0.3em]">{w}</motion.span>
            ))}
          </span>
        </h1>

        {/* 3. Sous-titre — text-lg, mb 24px */}
        <motion.p
          custom={3} variants={lineVariants} initial="hidden" animate="visible"
          className="text-lg text-white/70 max-w-xl mx-auto mb-6 leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          15 ans d&apos;expérience · Agence lancée en 60 jours
        </motion.p>

        {/* 4. CTA — padding 16px 32px, mb 32px */}
        <motion.div
          custom={4} variants={lineVariants} initial="hidden" animate="visible"
          className="flex justify-center mb-8"
        >
          <a href="#formation" className="btn-primary px-8 py-4">
            Je veux lancer mon agence
          </a>
        </motion.div>

        {/* 5. VSL — 780px × 380px, radius 12px, bordure or */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full max-w-[780px] mx-auto overflow-hidden border border-gold/20"
          style={{ height: 440, borderRadius: 12 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1200] via-[#1a1a1a] to-[#111111]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Glow or en haut */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
            <span className="label text-white/30">Vidéo de présentation</span>
            <span className="label text-white/20">First Class Location</span>
          </div>
          <button className="absolute inset-0 flex items-center justify-center group animate-pulse-gold" aria-label="Regarder la vidéo">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gold/20 scale-150 animate-ping" style={{ animationDuration: "2s" }} />
              <div className="absolute inset-0 rounded-full bg-gold/10 scale-125" />
              <div className="relative w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-[0_0_50px_rgba(201,168,76,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_80px_rgba(201,168,76,0.7)] transition-all duration-300">
                <Play size={28} fill="black" className="text-black ml-1" />
              </div>
            </div>
          </button>
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-5">
            <p className="text-white/30 text-xs text-center" style={{ fontFamily: "var(--font-inter)" }}>
              Clique pour regarder la présentation complète
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

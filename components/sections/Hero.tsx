"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
      className="relative flex flex-col items-center justify-center px-4 pb-8 md:pb-10 overflow-hidden bg-[#FAF7F2] min-h-screen pt-[70px] md:pt-[90px]"
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
          className="font-bold mb-4 leading-[1.15]"
          style={{ fontFamily: "var(--font-playfair)" }}
          aria-label="La seule formation où un véhicule t'attend à la fin."
        >
          <span className="block text-2xl md:text-4xl lg:text-5xl text-white mb-1">
            {["La", "seule", "formation", "où", "un", "véhicule", "t'attend"].map((w, i) => (
              <motion.span key={i} custom={i} variants={wordVariants} initial="hidden" animate="visible"
                className="inline-block mr-[0.3em]">{w}</motion.span>
            ))}
          </span>
          <span className="block text-2xl md:text-4xl lg:text-5xl text-gold-gradient italic">
            {["à", "la", "fin."].map((w, i) => (
              <motion.span key={i} custom={7 + i} variants={wordVariants} initial="hidden" animate="visible"
                className="inline-block mr-[0.3em]">{w}</motion.span>
            ))}
          </span>
        </h1>

        {/* 3. Sous-titre — text-lg, mb 24px */}
        <motion.p
          custom={3} variants={lineVariants} initial="hidden" animate="visible"
          className="text-sm md:text-lg text-white/70 max-w-xl mx-auto mb-4 md:mb-6 leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          15 ans d&apos;expérience dans le secteur
        </motion.p>

        {/* 4. CTA — padding 16px 32px, mb 32px */}
        <motion.div
          custom={4} variants={lineVariants} initial="hidden" animate="visible"
          className="flex justify-center mb-6 md:mb-8 w-full"
        >
          <a href="https://app.iclosed.io/e/Jessy-FCFORMATION/appel-strat-gique-offert-30-min" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 w-full md:w-auto justify-center">
            Je veux lancer mon agence
          </a>
        </motion.div>

        {/* 5. VSL — 780px × 380px, radius 12px, bordure or */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full max-w-[780px] mx-auto overflow-hidden border border-gold/20 h-[200px] md:h-auto"
          style={{ aspectRatio: "16/9", borderRadius: 12 }}
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent z-10" />
          <iframe
            src="https://www.youtube.com/embed/8ejjlmlaAMU?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1"
            title="First Class Location — Vidéo de présentation"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: "none" }}
          />
        </motion.div>

      </div>
    </section>
  );
}

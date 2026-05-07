"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Car, GraduationCap } from "lucide-react";
import Image from "next/image";

/* ── Particules dorées flottantes (positions fixes pour éviter l'hydratation) ── */
const particles = [
  { top: "18%",  left: "8%",  size: 5, dur: 4.2, delay: 0    },
  { top: "65%",  left: "88%", size: 4, dur: 5.1, delay: 0.8  },
  { top: "38%",  left: "75%", size: 3, dur: 3.8, delay: 1.5  },
  { top: "80%",  left: "15%", size: 6, dur: 6.0, delay: 0.4  },
  { top: "50%",  left: "48%", size: 3, dur: 4.5, delay: 2.1  },
  { top: "22%",  left: "58%", size: 4, dur: 5.5, delay: 1.0  },
];

/* ── Animation titre ligne par ligne ── */
const lineVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.15 + i * 0.18, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  /* Parallax : l'image descend légèrement pendant le scroll */
  const bgY = useTransform(scrollY, [0, 700], ["0%", "22%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-4 overflow-hidden"
    >
      {/* ── Fond image Unsplash avec parallaxe ── */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 scale-110 will-change-transform"
        >
          <Image
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80"
            alt="Voiture de luxe First Class Location"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </motion.div>
        {/* Overlay dégradé */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
      </div>

      {/* ── Particules dorées flottantes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ delay: p.delay + 1.8, duration: p.dur, repeat: Infinity, repeatType: "loop" }}
            className="absolute rounded-full bg-gold"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              boxShadow: `0 0 ${p.size * 3}px rgba(201,168,76,0.8)`,
              animation: `floatParticle ${p.dur}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
        {/* Glow central radial */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06),transparent_70%)]" />
      </div>

      {/* ── Contenu ── */}
      <div className="relative max-w-4xl mx-auto text-center z-10">

        {/* Label double activité */}
        <motion.div
          custom={0} variants={lineVariants} initial="hidden" animate="visible"
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="gold-line" />
          <span className="label">Lille · Location de luxe & Formation</span>
          <div className="gold-line" />
        </motion.div>

        {/* H1 — 2 lignes animées */}
        <h1
          className="font-bold leading-[1.08] mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
          aria-label="First Class Location — Loue. Roule. Réussis."
        >
          <motion.span
            custom={1} variants={lineVariants} initial="hidden" animate="visible"
            className="block text-2xl md:text-5xl lg:text-6xl text-white/90 tracking-tight"
          >
            First Class Location
          </motion.span>
          <motion.span
            custom={2} variants={lineVariants} initial="hidden" animate="visible"
            className="block text-3xl md:text-6xl lg:text-7xl text-gold-gradient italic mt-1"
          >
            Loue. Roule. Réussis.
          </motion.span>
        </h1>

        {/* Sous-titre équilibré */}
        <motion.p
          custom={3} variants={lineVariants} initial="hidden" animate="visible"
          className="text-white/55 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Location de voitures de luxe à{" "}
          <span className="text-white font-semibold">Lille</span>{" "}
          <span className="text-white/30">+</span>{" "}
          La formation pour lancer{" "}
          <span className="text-gold font-semibold">ta propre agence</span>
        </motion.p>

        {/* 2 CTA côte à côte */}
        <motion.div
          custom={4} variants={lineVariants} initial="hidden" animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <a href="#location" className="btn-secondary text-sm px-8 py-4 group">
            <Car size={16} />
            Réserver une voiture
            <span className="text-gold/50 ml-0.5">→</span>
          </a>
          <a href="#formation" className="btn-primary text-xs px-7 py-4 group">
            <GraduationCap size={15} />
            Devenir loueur
          </a>
        </motion.div>

        {/* VSL Placeholder — inchangé */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative aspect-video w-full max-w-3xl mx-auto mb-10"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-gold/40 via-gold/10 to-transparent" />
          <div className="relative rounded-2xl overflow-hidden bg-[#0d0d0d] border border-white/5 animate-pulse-gold">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1200] via-[#0d0d0d] to-[#0a0a0a]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
              <span className="label text-white/30">Vidéo de présentation</span>
              <span className="label text-white/20">First Class Location</span>
            </div>
            <button className="absolute inset-0 flex items-center justify-center group" aria-label="Regarder la vidéo">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gold/20 scale-150 animate-ping" style={{ animationDuration: "2s" }} />
                <div className="absolute inset-0 rounded-full bg-gold/10 scale-125" />
                <div className="relative w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-[0_0_50px_rgba(201,168,76,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_80px_rgba(201,168,76,0.7)] transition-all duration-300">
                  <Play size={28} fill="black" className="text-black ml-1" />
                </div>
              </div>
            </button>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-5">
              <p className="text-white/40 text-xs text-center" style={{ fontFamily: "var(--font-inter)" }}>
                Clique pour regarder la présentation complète
              </p>
            </div>
          </div>
        </motion.div>

        {/* Badges de réassurance — mix location + formation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.55, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8"
        >
          {[
            { icon: Car,            text: "Disponible 7j/7 à Lille" },
            { icon: Play,           text: "Formation 100% en ligne" },
            { icon: GraduationCap,  text: "+50 élèves formés" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2" style={{ fontFamily: "var(--font-inter)" }}>
              <b.icon size={14} className="text-gold flex-shrink-0" />
              <span className="text-white/55 text-sm font-medium">{b.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

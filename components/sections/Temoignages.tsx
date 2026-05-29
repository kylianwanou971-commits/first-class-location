"use client";

import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    name: "Kevin R.",
    city: "Lyon",
    result: "3 voitures en 4 mois",
    detail: "CA mensuel : 6 500 €",
    color: "from-[#1a0f00]",
  },
  {
    name: "Amira B.",
    city: "Paris",
    result: "Agence lancée en 6 semaines",
    detail: "Déjà rentable",
    color: "from-[#001a0f]",
  },
  {
    name: "Dylan M.",
    city: "Bordeaux",
    result: "8 000 € dès le 6ème mois",
    detail: "2 BMW M + 1 Porsche",
    color: "from-[#0f001a]",
  },
  {
    name: "Thomas K.",
    city: "Marseille",
    result: "Quitté son emploi en 3 mois",
    detail: "Full time maintenant",
    color: "from-[#1a0000]",
  },
  {
    name: "Sonia L.",
    city: "Nantes",
    result: "Premier client J+18",
    detail: "Réseau de 4 agences",
    color: "from-[#00101a]",
  },
  {
    name: "Rayan A.",
    city: "Nice",
    result: "12 000 € / mois en année 1",
    detail: "Flotte de 6 véhicules",
    color: "from-[#0d1a00]",
  },
];

function VideoCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="video-card flex flex-col"
    >
      {/* 9:16 card */}
      <div
        className="relative bg-[#FFFFFF] border border-[#D4C5A9] rounded-xl overflow-hidden group cursor-pointer hover:border-[#C9A84C]/40 transition-all duration-300"
        style={{ aspectRatio: "9/16" }}
      >
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-b ${t.color} via-[#2C2C2E] to-[#EDE8DE]`} />

        {/* Top stars */}
        <div className="absolute top-4 left-4 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10} fill="#C9A84C" className="text-gold" />
          ))}
        </div>

        {/* Initial circle (fake avatar) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%]">
          <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-[#C9A84C]/40 flex items-center justify-center mb-4 mx-auto">
            <span className="text-gold text-xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
              {t.name[0]}
            </span>
          </div>
        </div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center pt-16">
          <div className="w-12 h-12 rounded-full bg-[#C9A84C]/8 border border-[#C9A84C]/40 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-[#C9A84C]/40 transition-all duration-300">
            <Play size={16} fill="white" className="text-[#1A1205] ml-0.5" />
          </div>
        </div>

        {/* Bottom overlay */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-8 pb-4 px-4">
          <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-inter)" }}>
            Témoignage vidéo
          </p>
          <p className="text-[#1A1205] text-xs font-semibold leading-tight" style={{ fontFamily: "var(--font-inter)" }}>
            {t.result}
          </p>
          <p className="text-[#2D2416] text-[10px] mt-0.5" style={{ fontFamily: "var(--font-inter)" }}>
            {t.detail}
          </p>
        </div>
      </div>

      {/* Below card */}
      <div className="mt-3 px-1">
        <p className="text-[#1A1205] text-xs font-semibold" style={{ fontFamily: "var(--font-inter)" }}>
          {t.name}
        </p>
        <p className="text-[#2D2416] text-[10px]" style={{ fontFamily: "var(--font-inter)" }}>
          {t.city}
        </p>
      </div>
    </motion.div>
  );
}

export default function Temoignages() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="temoignages" className="py-24 md:py-32 bg-[#F0EBE1] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label mb-4"
        >
          Ils ont transformé leur vie
        </motion.p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[#1A1205]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Est-ce que ça marche
            <br />
            <span className="text-gold-gradient italic">vraiment ?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#2D2416] text-sm max-w-xs md:text-right"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Regarde les résultats de nos élèves. Eux aussi partaient de zéro.
          </motion.p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-4 md:px-8 pb-4"
        style={{ scrollSnapType: "x mandatory", paddingLeft: "max(16px, calc((100vw - 1152px) / 2))", paddingRight: "max(16px, calc((100vw - 1152px) / 2))" }}
      >
        {testimonials.map((t, i) => (
          <div key={t.name} style={{ scrollSnapAlign: "start" }}>
            <VideoCard t={t} index={i} />
          </div>
        ))}
      </div>

      {/* Mobile scroll hint */}
      <p className="text-center text-[#6B5C3E] text-xs mt-4 md:hidden" style={{ fontFamily: "var(--font-inter)" }}>
        ← Fais glisser pour voir plus →
      </p>

      {/* CTA */}
      <div className="text-center mt-12 px-4">
        <a href="#formation" className="btn-primary">
          Je veux des résultats similaires
        </a>
      </div>
    </section>
  );
}

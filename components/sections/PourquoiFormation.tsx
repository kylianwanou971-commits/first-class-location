"use client";

import { motion } from "framer-motion";
import { Target, Users, Layers } from "lucide-react";

const problems = [
  {
    icon: Target,
    problem: "Partir de zéro sans réseau",
    solution: "On t'apprend à trouver tes premiers véhicules, tes premiers clients et à construire ta réputation rapidement — même sans connexions dans le milieu.",
    before: "Avant : perdu, sans contacts",
    after: "Après : réseau solide en 3 mois",
  },
  {
    icon: Users,
    problem: "Ne pas savoir trouver des clients",
    solution: "Stratégies digitales, Instagram, bouche-à-oreille, partenariats locaux — toutes les méthodes qui marchent vraiment pour remplir ton calendrier de locations.",
    before: "Avant : 0 réservation",
    after: "Après : agenda plein",
  },
  {
    icon: Layers,
    problem: "Gérer la logistique seul",
    solution: "Contrats, assurances, cautions, états des lieux, comptabilité — on couvre tout ce qui se passe après la réservation pour que tu opères comme un pro dès le jour 1.",
    before: "Avant : submergé, stressé",
    after: "Après : systèmes clairs",
  },
];

export default function PourquoiFormation() {
  return (
    <section className="py-24 md:py-32 px-4 bg-[#080808] relative overflow-hidden">
      {/* Accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label mb-4"
          >
            Pourquoi se lancer ?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Les 3 blocages que
            <br />
            <span className="text-gold-gradient italic">tu vas surmonter</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-base max-w-xl mx-auto mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            First Class Location génère +1 000 locations/an. Jessy a décidé de partager exactement comment — pour que toi aussi tu puisses construire ce qu&apos;il a construit.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.problem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="relative bg-[#0d0d0d] border border-white/6 p-7 group hover:border-gold/25 transition-all duration-300"
            >
              {/* Number */}
              <span
                className="absolute top-6 right-6 text-5xl font-bold text-white/[0.04] select-none"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/15 transition-colors">
                <p.icon size={20} className="text-gold" />
              </div>

              {/* Problem */}
              <h3
                className="text-lg font-bold text-white mb-4 leading-snug"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {p.problem}
              </h3>

              {/* Solution */}
              <p
                className="text-white/45 text-sm leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {p.solution}
              </p>

              {/* Before / After */}
              <div className="space-y-2 pt-5 border-t border-white/6">
                <div className="flex items-center gap-2">
                  <span className="text-red-400/70 text-xs">✕</span>
                  <span className="text-white/30 text-xs" style={{ fontFamily: "var(--font-inter)" }}>{p.before}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gold text-xs">✓</span>
                  <span className="text-gold/80 text-xs font-medium" style={{ fontFamily: "var(--font-inter)" }}>{p.after}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#formation" className="btn-primary">
            Résoudre ces blocages maintenant
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle } from "lucide-react";

const modules = [
  {
    number: "01",
    title: "Les bases de la location de luxe",
    duration: "4 heures de contenu",
    points: [
      "Comprendre le marché et ses opportunités",
      "Choisir sa niche et ses premiers véhicules",
      "Réglementation, assurances et cadre légal",
      "Créer sa structure juridique (SASU, SAS, SARL)",
    ],
    outcome: "Tu sors de ce module avec ton business plan prêt.",
  },
  {
    number: "02",
    title: "Trouver et convertir tes premiers clients",
    duration: "5 heures de contenu",
    points: [
      "Stratégie Instagram & réseaux sociaux",
      "Créer une offre irrésistible dès le départ",
      "Partenariats locaux et bouche-à-oreille",
      "Gérer les demandes et les réservations",
    ],
    outcome: "Tu sors de ce module avec tes 3 premiers clients potentiels.",
  },
  {
    number: "03",
    title: "Gérer ton parc automobile",
    duration: "3 heures de contenu",
    points: [
      "Trouver et négocier l'acquisition de véhicules",
      "LLD, achat comptant vs financement",
      "Entretien, logistique et gestion quotidienne",
      "Contrats de location conformes et cautions",
    ],
    outcome: "Tu sors de ce module avec un système de gestion opérationnel.",
  },
  {
    number: "04",
    title: "Scaler et automatiser ton activité",
    duration: "4 heures de contenu",
    points: [
      "Agrandir sa flotte intelligemment",
      "Déléguer et recruter",
      "Automatiser les réservations et la communication",
      "Diversifier : chauffeur, événementiel, LLD pro",
    ],
    outcome: "Tu sors de ce module avec un plan de croissance sur 12 mois.",
  },
  {
    number: "05",
    title: "Community & suivi live",
    duration: "Accès illimité",
    points: [
      "Communauté privée active avec les autres membres",
      "Sessions live mensuelles avec Jessy",
      "Accès aux mises à jour et nouvelles stratégies",
      "Support direct pour tes questions spécifiques",
    ],
    outcome: "Tu n'es plus jamais seul dans ton aventure.",
  },
];

function ModuleItem({ mod, index, isOpen, onToggle }: {
  mod: typeof modules[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`border-b border-[#D4C5A9] last:border-b-0 ${isOpen ? "bg-[#FFFFFF]" : "bg-transparent"} transition-colors`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-5 py-6 px-6 text-left group"
      >
        {/* Number */}
        <span
          className={`text-2xl font-bold flex-shrink-0 transition-colors ${isOpen ? "text-gold" : "text-[#C9A84C]/50"}`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {mod.number}
        </span>

        {/* Title + duration */}
        <div className="flex-1 min-w-0">
          <p
            className={`text-sm md:text-base font-semibold transition-colors ${isOpen ? "text-[#1A1205]" : "text-[#2D2416] group-hover:text-[#1A1205]"}`}
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {mod.title}
          </p>
          <p className="text-xs text-[#6B5C3E] mt-0.5" style={{ fontFamily: "var(--font-inter)" }}>
            {mod.duration}
          </p>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex-shrink-0 transition-colors ${isOpen ? "text-gold" : "text-[#6B5C3E]"}`}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      {/* Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-7 pl-[60px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {mod.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-2.5">
                    <CheckCircle size={13} className="text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-[#2D2416] text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/8 border border-[#C9A84C]/40 rounded-sm">
                <span className="text-gold text-xs" style={{ fontFamily: "var(--font-inter)" }}>🎯</span>
                <span className="text-gold/80 text-xs font-medium" style={{ fontFamily: "var(--font-inter)" }}>
                  {mod.outcome}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Programme() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="programme" className="py-24 md:py-32 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label mb-4"
          >
            Le programme
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[#1A1205] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            5 modules pour{" "}
            <span className="text-gold-gradient italic">tout maîtriser</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#2D2416] text-base"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            De la création de ta structure jusqu&apos;au premier million — tout est là.
          </motion.p>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border border-[#D4C5A9] rounded-sm overflow-hidden"
        >
          {modules.map((mod, i) => (
            <ModuleItem
              key={mod.number}
              mod={mod}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a href="#formation" className="btn-primary">
            Accéder à ces 5 modules maintenant
          </a>
          <p className="text-[#6B5C3E] text-xs mt-3" style={{ fontFamily: "var(--font-inter)" }}>
            Accès immédiat · Paiement sécurisé
          </p>
        </motion.div>
      </div>
    </section>
  );
}

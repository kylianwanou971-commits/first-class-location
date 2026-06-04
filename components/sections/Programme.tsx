"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const chapitres = [
  {
    number: "01",
    title: "Les fondamentaux",
    modules: [
      "Comprendre le marché de la location de luxe",
      "Différence entre location classique et location de luxe",
      "Les types de prestations",
      "Les types de véhicules",
      "Le rôle du loueur",
      "Positionnement sur le marché",
      "Pourquoi c'est un secteur d'avenir",
    ],
  },
  {
    number: "02",
    title: "Étude de marché et positionnement",
    modules: [
      "Étudier sa zone de chalandise",
      "Analyser la concurrence et les prix",
      "Identifier ses personas clients",
      "Évaluer la demande et les opportunités locales",
      "Identifier ses atouts et sa différenciation",
      "Construire son positionnement",
    ],
  },
  {
    number: "03",
    title: "Cadre légal, assurances et sécurité",
    modules: [
      "Choisir le bon statut juridique",
      "Les obligations légales et administratives",
      "Les contrats et conditions de location",
      "Les vérifications et la sélection des clients",
      "L'assurance et la gestion des sinistres",
      "Les risques et les précautions",
    ],
  },
  {
    number: "04",
    title: "Rentabilité et comptabilité",
    modules: [
      "Comprendre ses coûts et ses charges",
      "Calculer le coût journalier d'un véhicule",
      "Fixer ses tarifs et ses marges",
      "Comprendre la TVA et la facturation",
      "Gérer sa trésorerie et ses paiements",
      "Mesurer la rentabilité globale",
    ],
  },
  {
    number: "05",
    title: "Organisation, gestion de flotte et parcours client",
    modules: [
      "Outils de gestion et réservations",
      "Gestion de la flotte et entretien",
      "Le parcours client complet",
      "Filtrer les clients dès le premier contact",
      "Contrats, dossiers et conditions",
      "Logistique et remise du véhicule",
      "Gestion des imprévus et des litiges",
    ],
  },
  {
    number: "06",
    title: "Influence, partenariats et image en ligne",
    modules: [
      "Le rôle des influenceurs",
      "Les partenariats locaux",
      "Créer du contenu visuel de qualité",
    ],
  },
  {
    number: "07",
    title: "Image de marque et expérience client",
    modules: [
      "Construire son identité visuelle",
      "L'importance de l'environnement et de l'accueil",
      "L'attitude du loueur et le discours commercial",
    ],
  },
  {
    number: "08",
    title: "Communication et marketing",
    modules: [
      "L'importance de la communication dans la location de luxe",
      "Les réseaux à utiliser et leurs objectifs",
      "La régularité et la planification",
      "Collaborations, influence et jeux concours",
      "Suivre ses performances et ajuster sa stratégie",
      "Le marketing stratégique et événementiel",
    ],
  },
];

function ChapitreItem({ chap, index, isOpen, onToggle }: {
  chap: typeof chapitres[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
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
          {chap.number}
        </span>

        {/* Title */}
        <div className="flex-1 min-w-0">
          <p
            className={`text-sm md:text-base font-semibold transition-colors ${isOpen ? "text-[#1A1205]" : "text-[#2D2416] group-hover:text-[#1A1205]"}`}
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {chap.title}
          </p>
          <p className="text-xs text-[#6B5C3E] mt-0.5" style={{ fontFamily: "var(--font-inter)" }}>
            {chap.modules.length} module{chap.modules.length > 1 ? "s" : ""}
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
              <div className="flex flex-col gap-2">
                {chap.modules.map((mod, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="text-gold font-bold text-xs flex-shrink-0 mt-0.5 w-4 text-right"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {i + 1}.
                    </span>
                    <span className="text-[#2D2416] text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                      {mod}
                    </span>
                  </div>
                ))}
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
            8 chapitres pour{" "}
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
          {chapitres.map((chap, i) => (
            <ChapitreItem
              key={chap.number}
              chap={chap}
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
            Accéder à ces 8 chapitres maintenant
          </a>
          <p className="text-[#6B5C3E] text-xs mt-3" style={{ fontFamily: "var(--font-inter)" }}>
            Accès immédiat · Paiement sécurisé
          </p>
        </motion.div>
      </div>
    </section>
  );
}

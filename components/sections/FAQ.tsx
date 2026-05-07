"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Est-ce que cette formation est adaptée aux débutants complets ?",
    a: "Oui, absolument. La formation est construite de A à Z pour quelqu'un qui part de zéro — aucune expérience dans la location, l'automobile ou le business n'est requise. On commence par les fondamentaux et on monte progressivement en niveau.",
  },
  {
    q: "Combien de temps faut-il pour voir des résultats concrets ?",
    a: "Les premiers résultats dépendent de ton implication, mais la plupart de nos élèves trouvent leurs premiers clients dans les 30 à 90 jours suivant le début de la formation. Certains ont leur premier véhicule loué dès la troisième semaine.",
  },
  {
    q: "Faut-il un gros budget pour démarrer une agence de location de luxe ?",
    a: "Non — c'est l'un des secrets que la formation révèle. Il existe des stratégies pour démarrer avec un investissement minimal (LLD, partenariats, sous-location encadrée). On te montre comment minimiser les risques financiers tout en maximisant ta rentabilité.",
  },
  {
    q: "La formation est-elle accessible sur mobile et à mon propre rythme ?",
    a: "Oui. Tu accèdes à tous les modules vidéo depuis n'importe quel appareil (téléphone, tablette, ordinateur), 24h/24, 7j/7. Tu avances à ton propre rythme et tu gardes l'accès à vie, y compris toutes les mises à jour futures.",
  },
  {
    q: "Y a-t-il un vrai suivi après la formation ?",
    a: "Oui. Tu intègres la communauté privée avec tous les autres membres, tu as accès aux sessions live mensuelles avec Jessy, et tu peux poser tes questions à tout moment. Tu n'es jamais seul dans ton aventure.",
  },
  {
    q: "Est-ce que je peux obtenir un remboursement si ça ne me convient pas ?",
    a: "La formation contient des méthodes exclusives testées sur le terrain — nous prenons le risque au sérieux. Les conditions de remboursement sont détaillées dans nos CGV. Contacte-nous directement pour en discuter selon ta situation.",
  },
];

function FAQItem({ item, index, isOpen, onToggle }: {
  item: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="border-b border-white/8 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 py-6 text-left group"
      >
        <div
          className={`flex-shrink-0 w-7 h-7 border flex items-center justify-center mt-0.5 transition-colors duration-200 ${
            isOpen ? "border-gold bg-gold/10" : "border-white/15 group-hover:border-white/30"
          }`}
        >
          {isOpen ? (
            <Minus size={13} className="text-gold" />
          ) : (
            <Plus size={13} className="text-white/50 group-hover:text-white/70 transition-colors" />
          )}
        </div>
        <p
          className={`text-sm md:text-base font-medium transition-colors duration-200 flex-1 ${
            isOpen ? "text-white" : "text-white/60 group-hover:text-white/80"
          }`}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {item.q}
        </p>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p
              className="text-white/45 text-sm leading-relaxed pb-6 pl-11"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 px-4 bg-[#080808] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label mb-4"
          >
            Questions fréquentes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Tu te poses des
            <br />
            <span className="text-gold-gradient italic">questions ?</span>
          </motion.h2>
        </div>

        {/* Accordion */}
        <div>
          {faqs.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/30 text-sm mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            Tu as d&apos;autres questions ? On répond personnellement.
          </p>
          <a href="#contact" className="btn-secondary">
            Nous contacter directement
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Qu'est-ce qui m'attend dans la formation ?",
    a: "La formation est disponible entièrement en ligne. Tu découvriras l'ensemble du business de A à Z grâce à un programme structuré avec l'intervention de plusieurs experts. Des cas pratiques sont prévus pour renforcer ton apprentissage. À l'issue de la formation, tu repartiras avec ton site internet, tes supports graphiques, ainsi qu'un véhicule pour démarrer ton activité.",
  },
  {
    q: "Qui peut suivre la formation ?",
    a: "Toute personne souhaitant se lancer dans la location de voitures de luxe peut suivre cette formation. Que tu sois entrepreneur, salarié en reconversion ou passionné d'automobile, la formation est accessible sans prérequis particuliers. Elle s'adresse aussi bien aux débutants qu'aux professionnels souhaitant structurer leur activité.",
  },
  {
    q: "Faut-il un gros budget pour se lancer ?",
    a: "Tout dépend de la façon dont tu veux développer ton activité. Tu peux démarrer avec 2 000€ comme avec 15 000€. Acheter ses véhicules, les louer ou opter pour un modèle de conciergerie — tous ces scénarios sont détaillés dans la formation pour t'aider à faire les bons choix.",
  },
  {
    q: "Combien de temps faut-il pour lancer son activité après la formation ?",
    a: "Tu pourras démarrer dès la création de ta structure et la réception de ton extrait Kbis. Selon le statut juridique choisi, ce processus prend généralement entre 3 et 4 semaines. Une bonne préparation sur ton étude de marché et ta stratégie de communication est essentielle pour poser des bases solides.",
  },
  {
    q: "Quels sont les avantages par rapport aux autres formations ?",
    a: "Forts de 15 ans d'expérience dans la location de voitures, nous sommes toujours en activité et gérons chaque année une flotte de plus de 20 véhicules. Tu seras formé par des experts reconnus, avec des mises en situation réelles. En plus de la formation, nous prenons en charge la création de tes supports graphiques et te fournissons un véhicule pour démarrer — sans aucun intermédiaire.",
  },
  {
    q: "Comment accéder à la formation en ligne ?",
    a: "La formation en ligne est accessible immédiatement après réception du paiement. Tu pourras y accéder sans délai, depuis n'importe quel appareil, et elle est régulièrement mise à jour pour te garantir un contenu toujours à jour.",
  },
  {
    q: "La formation convient-elle aux débutants complets ?",
    a: "Oui, absolument. La formation a été conçue pour être accessible sans aucune expérience préalable dans la location de véhicules. Chaque module t'accompagne pas à pas, du choix du statut juridique jusqu'à l'acquisition de tes premiers clients.",
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
      className="border-b border-[#D4C5A9] last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 py-6 text-left group"
      >
        <div
          className={`flex-shrink-0 w-7 h-7 border flex items-center justify-center mt-0.5 transition-colors duration-200 ${
            isOpen ? "border-gold bg-gold/10" : "border-[#D4C5A9] group-hover:border-white/30"
          }`}
        >
          {isOpen ? (
            <Minus size={13} className="text-gold" />
          ) : (
            <Plus size={13} className="text-[#2D2416] group-hover:text-[#2D2416] transition-colors" />
          )}
        </div>
        <p
          className={`text-sm md:text-base font-medium transition-colors duration-200 flex-1 ${
            isOpen ? "text-[#1A1205]" : "text-[#2D2416] group-hover:text-[#1A1205]"
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
              className="text-[#2D2416] text-sm leading-relaxed pb-6 pl-11"
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
    <section id="faq" className="py-24 md:py-32 px-4 bg-[#FAF7F2] relative">
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
            className="text-3xl md:text-5xl font-bold text-[#1A1205]"
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
          <p className="text-[#2D2416] text-sm mb-4" style={{ fontFamily: "var(--font-inter)" }}>
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

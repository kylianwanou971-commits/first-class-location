"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alexandre M.",
    city: "Lille",
    text: "Une expérience absolument incroyable. La Porsche 911 était en parfait état, le service impeccable. Je recommande les yeux fermés !",
    rating: 5,
  },
  {
    name: "Sophie L.",
    city: "Tourcoing",
    text: "Premier test drive de ma vie avec la BMW M3 — une sensation inoubliable. L'équipe est professionnelle, accueillante et passionnée.",
    rating: 5,
  },
  {
    name: "Julien D.",
    city: "Roubaix",
    text: "J'ai loué la Mercedes GLE 63S pour mon mariage. Tout était parfait, de la réservation à la remise des clés. Merci First Class !",
    rating: 5,
  },
  {
    name: "Thomas B.",
    city: "Bondues",
    text: "Service 5 étoiles sans la moindre hésitation. La voiture était livrée à l'heure, propre et en parfait état. Je suis client fidèle.",
    rating: 5,
  },
  {
    name: "Camille R.",
    city: "Villeneuve d'Ascq",
    text: "La formation est une vraie mine d'or. En 6 mois j'ai lancé mon agence grâce aux méthodes de Jessy. Résultats concrets dès le premier mois.",
    rating: 5,
  },
  {
    name: "Marc F.",
    city: "Valenciennes",
    text: "Location de l'Audi RS6 pour un week-end. Voiture sublime, équipe réactive. Le meilleur rapport qualité-service de la région.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="text-gold fill-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const itemsPerPage = 3;
  const pages = Math.ceil(testimonials.length / itemsPerPage);
  const visible = testimonials.slice(
    current * itemsPerPage,
    current * itemsPerPage + itemsPerPage
  );

  return (
    <section className="section-padding bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-subtitle mb-4"
          >
            Témoignages
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Ce que disent nos clients
          </motion.h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {visible.map((t) => (
              <div key={t.name} className="card-surface p-6">
                <StarRating count={t.rating} />
                <p
                  className="text-text-secondary text-sm leading-relaxed my-4 italic"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[rgba(201,168,76,0.1)]">
                  <div className="w-8 h-8 bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-xs font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p
                      className="text-text-primary text-sm font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-text-secondary text-xs"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {t.city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {pages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((p) => Math.max(0, p - 1))}
              disabled={current === 0}
              className="p-2 border border-[rgba(201,168,76,0.3)] text-gold disabled:opacity-30 hover:bg-gold/10 transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-gold" : "bg-[rgba(201,168,76,0.3)]"
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((p) => Math.min(pages - 1, p + 1))}
              disabled={current === pages - 1}
              className="p-2 border border-[rgba(201,168,76,0.3)] text-gold disabled:opacity-30 hover:bg-gold/10 transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

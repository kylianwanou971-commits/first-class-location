"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Gauge, Shield, CreditCard } from "lucide-react";

export default function TestDriveSection() {
  return (
    <section className="section-padding bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-subtitle mb-4"
          >
            Test Drive
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Prenez le volant
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-surface p-10 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

            <p
              className="text-text-secondary leading-relaxed text-sm md:text-base max-w-2xl mx-auto mb-10"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Chez First Class Location, nous offrons à tous la chance de prendre le
              volant d&apos;une voiture de sport de rêve, sans condition compliquée ! Il
              suffit d&apos;avoir 18 ans et un permis B valide pour vivre une expérience
              unique sur route ouverte. À petit prix, sans caution, nos baptêmes de
              conduite permettent à chacun de goûter aux sensations de la conduite haut
              de gamme, en toute sécurité, accompagné par un professionnel.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: CreditCard,
                  title: "À petit prix",
                  text: "Tarif accessible, sans caution requise",
                },
                {
                  icon: Shield,
                  title: "En toute sécurité",
                  text: "Accompagné par un professionnel expérimenté",
                },
                {
                  icon: Gauge,
                  title: "Sur route ouverte",
                  text: "Expérience authentique, vraies sensations",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <p
                    className="text-text-primary text-sm font-medium"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-text-secondary text-xs text-center"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="text-text-secondary text-xs mb-6 italic"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Conditions : 18 ans minimum · Permis B valide · Accompagnement professionnel inclus
            </p>

            <Link href="/contact?objet=Test+Drive" className="btn-gold">
              Réserver un test drive
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";

export default function FormationTeaser() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0a00] via-[#0A0A0A] to-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-subtitle mb-4">Formation Infopreneur</p>
            <div className="gold-divider mb-8" />
            <h2
              className="section-title text-4xl md:text-5xl mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Lance ta propre agence
              <br />
              <span className="text-gold italic">de voitures de luxe</span>
            </h2>
            <p
              className="text-text-secondary leading-relaxed mb-8 text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Tu veux lancer ta propre agence de location de voitures de luxe ?
              Apprends directement de ceux qui le font depuis 10 ans. Méthodes
              éprouvées, accompagnement personnalisé, résultats concrets.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: TrendingUp, text: "Business rentable dès les premiers mois" },
                { icon: Users, text: "Communauté privée de membres actifs" },
                { icon: Award, text: "Formateurs actifs dans le secteur depuis 10 ans" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-gold" />
                  </div>
                  <p
                    className="text-text-secondary text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <Link href="/formation" className="btn-gold group">
              Découvrir la formation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Price card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="card-surface p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-16 translate-x-16" />
              <p
                className="section-subtitle mb-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Formation en ligne
              </p>
              <div className="gold-divider mb-6" />

              <ul className="space-y-3 mb-8">
                {[
                  "Accès à vie aux modules vidéo",
                  "Supports PDF téléchargeables",
                  "Communauté privée exclusive",
                  "Mises à jour incluses à vie",
                  "Méthodes terrain éprouvées",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-secondary text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <span className="text-gold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="border-t border-[rgba(201,168,76,0.15)] pt-6 flex items-end justify-between">
                <div>
                  <p
                    className="text-text-secondary text-xs mb-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Investissement
                  </p>
                  <p
                    className="font-heading text-4xl text-gold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    990 €
                  </p>
                </div>
                <Link href="/formation" className="btn-gold text-xs">
                  Je commence →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

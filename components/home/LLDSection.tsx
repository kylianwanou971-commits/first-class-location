"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const avantages = [
  "Véhicules haut de gamme prêts à intégrer vos flottes",
  "Conditions souples, sans contraintes d'achat ou d'import",
  "Accompagnement sur mesure par nos experts",
  "Partenariat de croissance à long terme",
];

export default function LLDSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-subtitle mb-4">LLD Professionnel</p>
            <div className="gold-divider mb-8" />
            <h2
              className="section-title text-4xl md:text-5xl mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Pour les agences
              <br />
              <span className="text-gold italic">&amp; entrepreneurs</span>
            </h2>
            <p
              className="text-text-secondary leading-relaxed mb-6 text-sm md:text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Grâce à notre service de location longue durée (LLD) dédié aux
              professionnels, First Class Location facilite l&apos;accès aux véhicules de
              prestige pour les agences de location et les entrepreneurs du secteur. Nous
              mettons à disposition des voitures haut de gamme, prêtes à intégrer vos
              flottes, avec des conditions souples et un accompagnement sur mesure.
            </p>
            <p
              className="text-text-secondary leading-relaxed mb-8 text-sm md:text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Notre objectif : vous permettre d&apos;offrir à votre clientèle des modèles de
              luxe sans gérer les contraintes d&apos;achat ou d&apos;import. Forts de notre
              expérience terrain de plus de 10 ans, nous devenons un véritable
              partenaire de croissance.
            </p>

            <ul className="space-y-3 mb-8">
              {avantages.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span
                    className="text-text-secondary text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {a}
                  </span>
                </li>
              ))}
            </ul>

            <Link href="/lld-professionnel" className="btn-gold group">
              En savoir plus
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?w=800&q=80"
              alt="Location longue durée professionnelle"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 border border-[rgba(201,168,76,0.3)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="section-padding max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/3] overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80"
            alt="Flotte First Class Location"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 border border-[rgba(201,168,76,0.3)]" />
          {/* Gold corner accent */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold" />
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle mb-4">Notre Histoire</p>
          <div className="gold-divider mb-8" />
          <h2
            className="section-title text-4xl md:text-5xl mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            10 ans de passion
            <br />
            <span className="text-gold italic">& d&apos;excellence</span>
          </h2>
          <div
            className="space-y-4 text-text-secondary leading-relaxed text-sm md:text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <p>
              Depuis plus de 10 ans, First Class Location est la référence incontournable
              de la location de voitures de luxe dans la métropole lilloise. Notre
              expertise, forgée par des milliers de locations réussies, repose sur un
              service haut de gamme, une flotte de véhicules prestigieux (Ferrari,
              Lamborghini, Porsche, Mercedes, BMW et bien d&apos;autres), et une attention
              personnalisée portée à chaque client.
            </p>
            <p>
              Avec un taux de satisfaction proche de la perfection, notre priorité est de
              faire vivre à chacun une expérience unique, que ce soit pour un événement,
              un séjour ou un simple plaisir de conduite.
            </p>
            <p>
              Ce qui fait notre force ? Une communauté engagée de plus de 20 000 abonnés
              sur les réseaux sociaux, des événements exclusifs organisés chaque année,
              une offre de formation dédiée aux professionnels de la location et un
              accompagnement sur-mesure. En 2025, nous célébrons notre quatrième
              événement annuel, preuve de notre solidité et de notre innovation constante.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <div className="text-center">
              <p className="font-heading text-3xl text-gold" style={{ fontFamily: "var(--font-heading)" }}>2014</p>
              <p className="text-xs tracking-widest uppercase text-text-secondary" style={{ fontFamily: "var(--font-body)" }}>Fondation</p>
            </div>
            <div className="w-px h-12 bg-[rgba(201,168,76,0.3)]" />
            <div className="text-center">
              <p className="font-heading text-3xl text-gold" style={{ fontFamily: "var(--font-heading)" }}>Bondues</p>
              <p className="text-xs tracking-widest uppercase text-text-secondary" style={{ fontFamily: "var(--font-body)" }}>Nord (59)</p>
            </div>
            <div className="w-px h-12 bg-[rgba(201,168,76,0.3)]" />
            <div className="text-center">
              <p className="font-heading text-3xl text-gold" style={{ fontFamily: "var(--font-heading)" }}>#1</p>
              <p className="text-xs tracking-widest uppercase text-text-secondary" style={{ fontFamily: "var(--font-body)" }}>Métropole</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Users } from "lucide-react";

export default function EventsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,168,76,0.06),transparent_60%)]" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[16/10] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="Événement First Class Location"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span
                className="text-xs tracking-widest uppercase text-gold border border-gold/50 px-3 py-1.5 bg-black/50"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Édition 2025 — 4ème Événement
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-subtitle mb-4">Événements Exclusifs</p>
            <div className="gold-divider mb-8" />
            <h2
              className="section-title text-4xl md:text-5xl mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Des rendez-vous
              <br />
              <span className="text-gold italic">uniques</span>
            </h2>
            <p
              className="text-text-secondary leading-relaxed mb-6 text-sm md:text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Depuis plusieurs années, First Class Location organise des événements
              exclusifs autour de l&apos;univers du luxe automobile, devenus de véritables
              rendez-vous pour les passionnés, les professionnels et les curieux.
            </p>
            <p
              className="text-text-secondary leading-relaxed mb-8 text-sm md:text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Ces rencontres, uniques dans la métropole lilloise, sont l&apos;occasion de
              découvrir nos plus beaux modèles, d&apos;échanger avec notre équipe et notre
              communauté, et de vivre une expérience mémorable. Avec déjà trois éditions
              couronnées de succès, notre quatrième événement en 2025 s&apos;annonce encore
              plus ambitieux.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Calendar, label: "4ème édition", sub: "En 2025" },
                { icon: MapPin, label: "Métropole", sub: "Lilloise" },
                { icon: Users, label: "Passionnés", sub: "& pros" },
              ].map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="text-center p-4 border border-[rgba(201,168,76,0.15)] bg-[#111]"
                >
                  <Icon size={20} className="text-gold mx-auto mb-2" />
                  <p
                    className="text-text-primary text-sm font-medium"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-text-secondary text-xs"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

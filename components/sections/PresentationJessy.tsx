"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "15 ans", label: "dans le secteur" },
  { value: "+1 000", label: "voitures louées" },
  { value: "N°1", label: "dans le Nord" },
];

export default function PresentationJessy() {
  return (
    <section className="py-12 md:py-32 px-4 bg-[#F0EBE1] relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_right,rgba(201,168,76,0.04),transparent_65%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-4 rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.15),transparent_70%)]" />

              {/* Circle */}
              <div className="relative w-[150px] h-[150px] md:w-80 md:h-80 rounded-full bg-[#FFFFFF] border-4 border-[#C9A84C]/40 flex items-center justify-center shadow-[0_0_60px_rgba(201,168,76,0.2)]">
                <Image
                  src="/jessy.png"
                  alt="Jessy, fondateur de First Class Location"
                  width={300}
                  height={300}
                  className="rounded-full object-cover w-full h-full"
                  style={{ objectFit: "cover" }}
                />

                {/* Gold accent dot */}
                <div className="absolute bottom-6 right-6 w-4 h-4 rounded-full bg-gold shadow-[0_0_12px_rgba(201,168,76,0.8)]" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-[#FFFFFF] border border-[#C9A84C]/40 px-4 py-2 rounded-full shadow-lg"
              >
                <p className="text-gold text-xs font-bold" style={{ fontFamily: "var(--font-inter)" }}>
                  ✓ Formation active
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="label mb-4">Qui est Jessy ?</p>
            <div className="gold-line mb-8" />

            <h2
              className="text-2xl md:text-4xl font-bold text-[#1A1205] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              15 ans à la tête de{" "}
              <span className="text-gold-gradient italic">First Class Location</span>
            </h2>

            <p className="text-[#2D2416] text-sm leading-relaxed mb-5" style={{ fontFamily: "var(--font-inter)" }}>
              Jessy a fondé <strong className="text-[#1A1205]">First Class Location</strong> à Bondues (Nord) il y a plus de 15 ans. De zéro, il a bâti l&apos;agence de référence dans la métropole lilloise — +1 000 locations par an, une flotte de prestige, et une réputation construite client après client.
            </p>

            <p className="text-[#2D2416] text-sm leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter)" }}>
              Fort de ce parcours, il a créé la formation pour transmettre exactement ce qui fonctionne : trouver ses premiers véhicules, remplir son agenda, gérer les contrats et scaler son activité — sans perdre 3 ans à tâtonner.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center p-4 bg-[#FFFFFF] border border-white/6">
                  <p
                    className="text-gold text-xl font-bold mb-0.5"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-[#2D2416] text-[10px] uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="relative pl-5 border-l-2 border-[#C9A84C]/40">
              <Quote size={18} className="text-gold/40 mb-2" />
              <blockquote
                className="text-[#2D2416] text-sm italic leading-relaxed"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                &ldquo;J&apos;aurais voulu avoir cette formation quand je me suis lancé. J&apos;ai mis 3 ans à comprendre ce que tu apprendras en quelques semaines.&rdquo;
              </blockquote>
              <cite
                className="text-gold/60 text-xs not-italic mt-2 block"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                — Jessy, fondateur de First Class Location
              </cite>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

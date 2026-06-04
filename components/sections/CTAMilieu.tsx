"use client";

import { motion } from "framer-motion";

const ICLOSED = "https://app.iclosed.io/e/Jessy-FCFORMATION/appel-strat-gique-offert-30-min";

export default function CTAMilieu() {
  return (
    <section className="py-20 md:py-28 px-4 bg-[#F0EBE1] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="gold-line" />
          <span className="label">First Class Formation</span>
          <div className="gold-line" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-[#1A1205] mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Prêt à lancer ton agence ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#6B5C3E] text-base md:text-lg leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Rejoins les élèves qui ont déjà transformé leur vie avec First Class Formation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={ICLOSED}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-4 text-sm"
          >
            Je veux lancer mon agence →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

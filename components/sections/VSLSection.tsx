"use client";

import { motion } from "framer-motion";

export default function VSLSection() {
  return (
    <section className="bg-[#FAF7F2] px-4 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-[700px] mx-auto"
        style={{ aspectRatio: "16/9" }}
      >
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-gold/40 via-gold/25 to-transparent" />
        <div className="relative rounded-2xl overflow-hidden h-full">
          <iframe
            src="https://www.youtube.com/embed/8ejjlmlaAMU?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1"
            title="First Class Location — Vidéo de présentation"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: "none" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

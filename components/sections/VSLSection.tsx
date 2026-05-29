"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VSLSection() {
  return (
    <section className="bg-[#FAF7F2] px-4 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-[700px] mx-auto"
        style={{ height: "clamp(160px, 30vw, 250px)" }}
      >
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-gold/40 via-gold/25 to-transparent" />
        <div className="relative rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/5 animate-pulse-gold h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1200] via-[#1a1a1a] to-[#111111]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
            <span className="label text-white/30">Vidéo de présentation</span>
            <span className="label text-white/20">First Class Location</span>
          </div>
          <button className="absolute inset-0 flex items-center justify-center group" aria-label="Regarder la vidéo">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gold/20 scale-150 animate-ping" style={{ animationDuration: "2s" }} />
              <div className="absolute inset-0 rounded-full bg-gold/10 scale-125" />
              <div className="relative w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-[0_0_50px_rgba(201,168,76,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_80px_rgba(201,168,76,0.7)] transition-all duration-300">
                <Play size={28} fill="black" className="text-black ml-1" />
              </div>
            </div>
          </button>
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-5">
            <p className="text-white/30 text-xs text-center" style={{ fontFamily: "var(--font-inter)" }}>
              Clique pour regarder la présentation complète
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

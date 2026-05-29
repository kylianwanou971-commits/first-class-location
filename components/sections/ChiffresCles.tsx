"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { prefix: "+", value: 20, suffix: "", label: "Élèves formés", sublabel: "et satisfaits" },
  { prefix: "+", value: 1000, suffix: "", label: "Voitures louées", sublabel: "par l'agence" },
  { prefix: "", value: 15, suffix: " ans", label: "D'expérience", sublabel: "dans le secteur" },
  { prefix: "", value: 98, suffix: "%", label: "De satisfaction", sublabel: "taux moyen" },
];

function Counter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  const display = value >= 1000 ? count.toLocaleString("fr-FR") : count;

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function ChiffresCles() {
  return (
    <section className="py-24 md:py-32 px-4 bg-[#F0EBE1] relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.04),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="gold-line" />
            <span className="label">Lance ton agence</span>
            <div className="gold-line" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[#1A1205] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Tu veux toi aussi lancer ta{" "}
            <span className="text-gold-gradient italic">propre agence de location de voiture de luxe ?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#2D2416] text-base max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            First Class t&apos;accompagne, te forme, et te fournit même le véhicule pour démarrer.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#D4C5A9]">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-[#FAF7F2] p-8 md:p-10 flex flex-col items-center text-center group hover:bg-[#FFFFFF] transition-colors"
            >
              <p
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p
                className="text-[#1A1205] text-sm font-semibold uppercase tracking-widest mb-1"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {s.label}
              </p>
              <p
                className="text-[#2D2416] text-xs"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {s.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a href="#formation" className="btn-primary">
            Je veux les mêmes résultats
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function trackStyle(val: number, min: number, max: number) {
  const pct = ((val - min) / (max - min)) * 100;
  return { background: `linear-gradient(to right, #c9a84c ${pct}%, #2a2a2a ${pct}%)` };
}

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  displayValue: string;
  hint?: string;
}

function GoldSlider({ label, value, min, max, step, onChange, displayValue, hint }: SliderProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="label text-white/40" style={{ fontFamily: "var(--font-inter)" }}>
          {label}
        </span>
        <motion.span
          key={displayValue}
          initial={{ opacity: 0.4, y: -3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.12 }}
          className="text-gold font-bold text-sm"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {displayValue}
        </motion.span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="slider-gold w-full"
        style={trackStyle(value, min, max)}
      />
      {hint && (
        <p className="text-white/20 text-[10px] mt-2.5 tracking-wide" style={{ fontFamily: "var(--font-inter)" }}>
          {hint}
        </p>
      )}
    </div>
  );
}

function ResultLine({
  label, value, color = "white", large = false,
}: { label: string; value: string; color?: string; large?: boolean }) {
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-white/6 last:border-b-0">
      <span className="text-white/40 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
        {label}
      </span>
      <motion.span
        key={value}
        initial={{ opacity: 0.3, x: 4 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.15 }}
        className={`font-bold ${large ? "text-2xl" : "text-base"}`}
        style={{ fontFamily: "var(--font-inter)", color }}
      >
        {value}
      </motion.span>
    </div>
  );
}

export default function Simulateur() {
  const [vehicules, setVehicules] = useState(3);
  const [prixJour, setPrixJour] = useState(300);
  const [jours, setJours] = useState(15);
  const [charges, setCharges] = useState(3000);

  const { ca, benefice, annuel } = useMemo(() => {
    const ca = vehicules * prixJour * jours;
    const benefice = ca - charges;
    return { ca, benefice, annuel: benefice * 12 };
  }, [vehicules, prixJour, jours, charges]);

  const fmt = (n: number) => n.toLocaleString("fr-FR");

  return (
    <section id="simulateur" className="py-24 md:py-32 px-4 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.04),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="gold-line" />
            <span className="label">Simulateur de revenus</span>
            <div className="gold-line" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Simule tes{" "}
            <span className="text-gold-gradient italic">revenus mensuels</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-sm md:text-base max-w-md mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Ajuste les sliders et découvre le potentiel de ton agence.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6"
        >
          {/* Sliders */}
          <div className="bg-[#0d0d0d] border border-white/6 p-7 space-y-8">
            <GoldSlider
              label="Nombre de véhicules"
              value={vehicules}
              min={1}
              max={15}
              step={1}
              onChange={setVehicules}
              displayValue={`${vehicules} véhicule${vehicules > 1 ? "s" : ""} dans ta flotte`}
            />
            <GoldSlider
              label="Prix moyen par jour"
              value={prixJour}
              min={150}
              max={800}
              step={10}
              onChange={setPrixJour}
              displayValue={`${fmt(prixJour)} € / jour en moyenne`}
              hint="BMW M4  ·  Mercedes AMG  ·  Porsche  ·  Ferrari"
            />
            <GoldSlider
              label="Jours loués / mois (par véhicule)"
              value={jours}
              min={5}
              max={28}
              step={1}
              onChange={setJours}
              displayValue={`${jours} jours / mois`}
            />
            <GoldSlider
              label="Charges mensuelles totales"
              value={charges}
              min={500}
              max={20000}
              step={100}
              onChange={setCharges}
              displayValue={`${fmt(charges)} € de charges`}
            />
          </div>

          {/* Results */}
          <div className="flex flex-col">
            <div className="bg-[#0d0d0d] border border-white/6 p-6 flex-1">
              <p className="label text-white/30 mb-1" style={{ fontFamily: "var(--font-inter)" }}>
                Résultats en temps réel
              </p>
              <div className="mt-4">
                {/* 2-col on mobile */}
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 mb-3">
                  <div className="py-3 border-b border-white/6 lg:border-b-0">
                    <p className="text-white/40 text-xs mb-1" style={{ fontFamily: "var(--font-inter)" }}>CA brut / mois</p>
                    <motion.span key={ca} initial={{ opacity: 0.3, x: 4 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.15 }}
                      className="font-bold text-base text-white" style={{ fontFamily: "var(--font-inter)" }}>
                      {fmt(ca)} €
                    </motion.span>
                  </div>
                  <div className="py-3 border-b border-white/6 lg:border-b-0">
                    <p className="text-white/40 text-xs mb-1" style={{ fontFamily: "var(--font-inter)" }}>Charges / mois</p>
                    <motion.span key={charges} initial={{ opacity: 0.3, x: 4 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.15 }}
                      className="font-bold text-base text-red-400" style={{ fontFamily: "var(--font-inter)" }}>
                      − {fmt(charges)} €
                    </motion.span>
                  </div>
                </div>

                {/* Bénéfice — highlighted */}
                <div className="my-3 p-4 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.08),transparent_70%)] border border-gold/20">
                  <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-inter)" }}>
                    Bénéfice net / mois
                  </p>
                  <motion.p
                    key={benefice}
                    initial={{ opacity: 0.3, x: 4 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                    className={`text-3xl font-bold ${benefice >= 0 ? "text-gold" : "text-red-400"}`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {benefice >= 0 ? "" : "− "}{fmt(Math.abs(benefice))} €
                  </motion.p>
                </div>

                <ResultLine
                  label="Revenu annuel estimé"
                  value={`${fmt(annuel)} €/an`}
                  color="#c9a84c"
                />
              </div>
            </div>

            <a
              href="#formation"
              className="btn-primary justify-center mt-4"
            >
              Je veux atteindre ces chiffres
              <ArrowRight size={14} />
            </a>

            <p className="text-white/20 text-[10px] text-center mt-3 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              Simulation indicative. Les résultats varient selon le marché et la gestion.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
    </section>
  );
}

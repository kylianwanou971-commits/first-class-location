"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function trackStyle(val: number, min: number, max: number) {
  const pct = ((val - min) / (max - min)) * 100;
  return { background: `linear-gradient(to right, #c9a84c ${pct}%, #2a2a2a ${pct}%)` };
}

function GoldSlider({
  label, value, min, max, step, onChange, displayValue,
}: {
  label: string; value: number; min: number; max: number;
  step: number; onChange: (v: number) => void; displayValue: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="label text-[#2D2416]" style={{ fontFamily: "var(--font-inter)" }}>
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
    </div>
  );
}

export default function Simulateur() {
  const [loyer, setLoyer] = useState(1500);
  const [prixJour, setPrixJour] = useState(250);
  const [jours, setJours] = useState(15);
  const [vehicules, setVehicules] = useState(1);

  const ca = prixJour * jours * vehicules;
  const loyerTotal = loyer * vehicules;
  const benefice = ca - loyerTotal;
  const annuel = benefice * 12;

  const fmt = (n: number) => n.toLocaleString("fr-FR");

  return (
    <section id="simulateur" className="py-24 md:py-32 px-4 bg-[#FAF7F2] relative overflow-hidden">
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
            className="text-3xl md:text-5xl font-bold text-[#1A1205] mb-4"
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
            className="text-[#2D2416] text-sm md:text-base max-w-md mx-auto"
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
          className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:items-stretch"
        >
          {/* Sliders */}
          <div className="bg-[#FFFFFF] border border-white/6 p-5 flex flex-col justify-between h-full">
            <GoldSlider
              label="Loyer mensuel du véhicule"
              value={loyer}
              min={500}
              max={5000}
              step={100}
              onChange={setLoyer}
              displayValue={`${fmt(loyer)} €`}
            />
            <GoldSlider
              label="Prix de location à la journée"
              value={prixJour}
              min={100}
              max={800}
              step={10}
              onChange={setPrixJour}
              displayValue={`${fmt(prixJour)} €`}
            />
            <GoldSlider
              label="Jours loués par mois"
              value={jours}
              min={1}
              max={28}
              step={1}
              onChange={setJours}
              displayValue={`${jours} jour${jours > 1 ? "s" : ""}`}
            />

            {/* Séparateur + texte explicatif */}
            <div>
              <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-5" />
              <p className="text-[#6B5C3E] text-[11px] leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter)" }}>
                Basé sur 1 véhicule. Multiplie par le nombre de véhicules dans ta flotte pour estimer ton CA total.
              </p>
              <GoldSlider
                label="Nombre de véhicules"
                value={vehicules}
                min={1}
                max={10}
                step={1}
                onChange={setVehicules}
                displayValue={`${vehicules} véhicule${vehicules > 1 ? "s" : ""} dans ta flotte`}
              />
            </div>
          </div>

          {/* Results */}
          <div className="flex flex-col">
            <div className="bg-[#FFFFFF] border border-white/6 p-6 flex-1 flex flex-col">
              <p className="label text-[#2D2416] mb-4" style={{ fontFamily: "var(--font-inter)" }}>
                Résultats en temps réel
              </p>

              {/* Contexte véhicules */}
              <motion.p
                key={vehicules}
                initial={{ opacity: 0.3, x: 4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className="text-[#6B5C3E] text-[10px] uppercase tracking-widest mb-3"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {vehicules} véhicule{vehicules > 1 ? "s" : ""} dans ta flotte
              </motion.p>

              {/* CA */}
              <div className="py-3.5 border-b border-white/6">
                <p className="text-[#2D2416] text-xs mb-1" style={{ fontFamily: "var(--font-inter)" }}>
                  Chiffre d&apos;affaires hors taxes par mois
                </p>
                <motion.p
                  key={ca}
                  initial={{ opacity: 0.3, x: 4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="font-bold text-xl text-[#1A1205]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {fmt(ca)} €
                </motion.p>
              </div>

              {/* Loyer total */}
              <div className="py-3.5 border-b border-white/6">
                <p className="text-[#2D2416] text-xs mb-1" style={{ fontFamily: "var(--font-inter)" }}>
                  Loyer total des véhicules
                </p>
                <motion.p
                  key={loyerTotal}
                  initial={{ opacity: 0.3, x: 4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="font-bold text-base text-red-400"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  − {fmt(loyerTotal)} €
                </motion.p>
              </div>

              {/* Bénéfice — highlighted */}
              <div className="my-3 p-4 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.08),transparent_70%)] border border-[#C9A84C]/40">
                <p className="text-[#2D2416] text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-inter)" }}>
                  Bénéfice hors taxes avant impôt
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

              {/* Annuel */}
              <div className="flex items-center justify-between py-3 mt-auto">
                <span className="text-[#2D2416] text-xs" style={{ fontFamily: "var(--font-inter)" }}>
                  Revenus annuel estimé
                </span>
                <motion.span
                  key={annuel}
                  initial={{ opacity: 0.3, x: 4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="font-bold text-base text-gold"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {fmt(annuel)} €/an
                </motion.span>
              </div>
            </div>

            <a href="https://app.iclosed.io/e/Jessy-FCFORMATION/appel-strat-gique-offert-30-min" target="_blank" rel="noopener noreferrer" className="btn-primary justify-center mt-4">
              Je veux atteindre ces chiffres
              <ArrowRight size={14} />
            </a>

            <p className="text-[#6B5C3E] text-[10px] text-center mt-3 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              Simulation indicative. Les résultats varient selon le marché et la gestion.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
    </section>
  );
}

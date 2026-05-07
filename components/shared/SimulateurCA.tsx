"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp } from "lucide-react";

function formatEur(n: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

interface SliderProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  format?: (v: number) => string;
}

function Slider({ label, min, max, step, value, onChange, format }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <span
          className="text-xs uppercase tracking-widest text-text-secondary"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {label}
        </span>
        <span
          className="text-gold font-heading text-xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {format ? format(value) : value}
        </span>
      </div>
      <div className="relative">
        <div className="h-1 bg-[#1a1a1a] rounded-full mb-1">
          <div
            className="h-1 bg-gold rounded-full transition-all duration-100"
            style={{ width: `${pct}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-4 -top-1.5"
          aria-label={label}
        />
      </div>
      <div
        className="flex justify-between text-[10px] text-text-secondary mt-1"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <span>{format ? format(min) : min}</span>
        <span>{format ? format(max) : max}</span>
      </div>
    </div>
  );
}

export default function SimulateurCA() {
  const [nbVoitures, setNbVoitures] = useState(3);
  const [prixJour, setPrixJour] = useState(500);
  const [tauxOccupation, setTauxOccupation] = useState(50);
  const [dureeLocation, setDureeLocation] = useState(3);

  const results = useMemo(() => {
    const caJour = nbVoitures * prixJour * (tauxOccupation / 100);
    const caMensuel = caJour * 30;
    const caAnnuel = caMensuel * 12;
    const beneficeNet = caAnnuel * 0.4;
    return { caMensuel, caAnnuel, beneficeNet };
  }, [nbVoitures, prixJour, tauxOccupation, dureeLocation]);

  return (
    <section className="section-padding bg-[#080808] border-y border-[rgba(201,168,76,0.1)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-subtitle mb-4"
          >
            Simulateur
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-4xl md:text-5xl"
          >
            Estimez votre chiffre
            <br />
            <span className="text-gold italic">d&apos;affaires</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Sliders */}
          <div className="card-surface p-8 space-y-8">
            <Slider
              label="Nombre de voitures"
              min={1}
              max={10}
              step={1}
              value={nbVoitures}
              onChange={setNbVoitures}
            />
            <Slider
              label="Prix moyen / jour"
              min={200}
              max={1500}
              step={50}
              value={prixJour}
              onChange={setPrixJour}
              format={(v) => `${v} €`}
            />
            <Slider
              label="Taux d'occupation"
              min={10}
              max={90}
              step={5}
              value={tauxOccupation}
              onChange={setTauxOccupation}
              format={(v) => `${v}%`}
            />
            <Slider
              label="Durée moy. de location"
              min={1}
              max={7}
              step={1}
              value={dureeLocation}
              onChange={setDureeLocation}
              format={(v) => `${v} jour${v > 1 ? "s" : ""}`}
            />
          </div>

          {/* Results */}
          <div className="flex flex-col gap-4">
            {[
              { label: "CA Mensuel estimé", value: results.caMensuel, highlight: false },
              { label: "CA Annuel estimé", value: results.caAnnuel, highlight: false },
              { label: "Bénéfice net estimé (40%)", value: results.beneficeNet, highlight: true },
            ].map(({ label, value, highlight }) => (
              <motion.div
                key={label}
                layout
                className={`card-surface p-6 flex items-center justify-between ${
                  highlight ? "border-gold/40 bg-gradient-to-r from-[#1a1200] to-[#111111]" : ""
                }`}
              >
                <p
                  className="text-text-secondary text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {label}
                </p>
                <motion.p
                  key={value}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className={`font-heading text-2xl md:text-3xl ${highlight ? "text-gold" : "text-text-primary"}`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {formatEur(value)}
                </motion.p>
              </motion.div>
            ))}

            <div className="flex items-start gap-2 mt-2">
              <TrendingUp size={14} className="text-gold flex-shrink-0 mt-0.5" />
              <p
                className="text-text-secondary text-xs italic leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Simulation indicative basée sur des moyennes du marché. Les résultats
                réels dépendent de nombreux facteurs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 border border-[rgba(201,168,76,0.2)] bg-gradient-to-b from-[#0d0a00] to-transparent"
        >
          <p
            className="text-gold text-sm mb-3"
            style={{ fontFamily: "var(--font-body)" }}
          >
            💡 Ces chiffres t&apos;intéressent ?
          </p>
          <h3
            className="section-title text-2xl md:text-3xl mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Apprends à les atteindre.
          </h3>
          <Link href="/formation" className="btn-gold">
            Découvrir la formation — 990 €
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Filter } from "lucide-react";

const fleet = [
  {
    name: "Porsche 911 Carrera GTS",
    subtitle: "Type 991",
    brand: "Porsche",
    type: "Sport",
    puissance: "450 ch",
    transmission: "PDK",
    places: "2+2",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
  },
  {
    name: "Mercedes GLE 63S AMG",
    subtitle: "SUV de prestige",
    brand: "Mercedes",
    type: "SUV",
    puissance: "612 ch",
    transmission: "Auto",
    places: "5",
    image: "https://images.unsplash.com/photo-1563720223809-b2dba7fd8bec?w=800&q=80",
  },
  {
    name: "Mercedes C63S AMG",
    subtitle: "E Performance",
    brand: "Mercedes",
    type: "Sport",
    puissance: "680 ch",
    transmission: "Auto",
    places: "4",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
  },
  {
    name: "Audi RS6 Performance",
    subtitle: "Break sportif",
    brand: "Audi",
    type: "Berline",
    puissance: "630 ch",
    transmission: "Tiptronic",
    places: "5",
    image: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=800&q=80",
  },
  {
    name: "Mercedes CLE 53 AMG",
    subtitle: "Cabriolet",
    brand: "Mercedes",
    type: "Cabriolet",
    puissance: "449 ch",
    transmission: "Auto",
    places: "4",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
  },
  {
    name: "BMW M3 Competition",
    subtitle: "La berline ultime",
    brand: "BMW",
    type: "Sport",
    puissance: "510 ch",
    transmission: "Auto",
    places: "4",
    image: "https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&q=80",
  },
  {
    name: "Mercedes CLS AMG",
    subtitle: "Avec chauffeur disponible",
    brand: "Mercedes",
    type: "Berline",
    puissance: "450 ch",
    transmission: "Auto",
    places: "4",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
];

const brands = ["Tous", "Mercedes", "Porsche", "BMW", "Audi"];
const types = ["Tous", "Sport", "SUV", "Berline", "Cabriolet"];

export default function NosVoituresPage() {
  const [activeBrand, setActiveBrand] = useState("Tous");
  const [activeType, setActiveType] = useState("Tous");

  const filtered = fleet.filter((car) => {
    const brandMatch = activeBrand === "Tous" || car.brand === activeBrand;
    const typeMatch = activeType === "Tous" || car.type === activeType;
    return brandMatch && typeMatch;
  });

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="section-subtitle mb-4"
        >
          Notre Flotte
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="section-title text-5xl md:text-6xl"
        >
          Des véhicules
          <br />
          <span className="text-gold italic">d&apos;exception</span>
        </motion.h1>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="flex flex-wrap gap-4 items-start justify-between">
          <div className="flex items-center gap-3 flex-wrap">
            <Filter size={14} className="text-gold" />
            <span
              className="text-xs tracking-widest uppercase text-text-secondary"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Marque :
            </span>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setActiveBrand(b)}
                className={`text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                  activeBrand === b
                    ? "border-gold bg-gold text-black"
                    : "border-[rgba(201,168,76,0.3)] text-text-secondary hover:border-gold hover:text-gold"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {b}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className="text-xs tracking-widest uppercase text-text-secondary"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Type :
            </span>
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                  activeType === t
                    ? "border-gold bg-gold text-black"
                    : "border-[rgba(201,168,76,0.3)] text-text-secondary hover:border-gold hover:text-gold"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((car, i) => (
            <motion.div
              key={car.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="group card-surface overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span
                  className="absolute top-3 right-3 text-[10px] tracking-widest uppercase text-gold border border-gold/50 px-2 py-1 bg-black/50"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {car.type}
                </span>
              </div>

              <div className="p-6">
                <p
                  className="text-xs tracking-widest uppercase text-text-secondary mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {car.subtitle}
                </p>
                <h3
                  className="text-xl font-heading text-text-primary mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {car.name}
                </h3>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {[
                    { label: "Puissance", value: car.puissance },
                    { label: "Boîte", value: car.transmission },
                    { label: "Places", value: car.places },
                  ].map(({ label, value }) => (
                    <div key={label} className="text-center p-2 bg-[#0d0d0d] border border-[rgba(201,168,76,0.1)]">
                      <p
                        className="text-gold text-xs font-medium"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {value}
                      </p>
                      <p
                        className="text-text-secondary text-[10px] uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/contact?objet=${encodeURIComponent(car.name)}`}
                  className="btn-gold w-full justify-center text-xs"
                >
                  Réserver ce véhicule
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-text-secondary" style={{ fontFamily: "var(--font-body)" }}>
            Aucun véhicule ne correspond à ces filtres.
          </div>
        )}

        {/* CTA bas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 border border-[rgba(201,168,76,0.2)] text-center"
        >
          <p
            className="section-subtitle mb-3"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Votre véhicule idéal n&apos;est pas là ?
          </p>
          <h3
            className="font-heading text-2xl text-text-primary mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Contactez-nous — nous avons peut-être la solution.
          </h3>
          <Link href="/contact" className="btn-gold">
            Nous contacter
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

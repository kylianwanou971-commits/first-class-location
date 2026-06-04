"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type BadgeType = "available" | "vip";

const fleet = [
  {
    name: "Porsche 911 Carrera",
    tagline: "Le mythe. La légende.",
    category: "Coupé Sport",
    badge: "Disponible",
    badgeType: "available" as BadgeType,
    vip: false,
    img: "/flotte/porsche-911.jpeg",
  },
  {
    name: "BMW M3 Competition",
    tagline: "La référence sportive allemande.",
    category: "Berline Sport",
    badge: "Disponible",
    badgeType: "available" as BadgeType,
    vip: false,
    img: "/flotte/bmw-m3.jpeg",
  },
  {
    name: "Mercedes-AMG C 63 S",
    tagline: "La berline qui ne fait aucun compromis.",
    category: "Berline Sport",
    badge: "Disponible",
    badgeType: "available" as BadgeType,
    vip: false,
    img: "/flotte/mercedes-c63.jpeg",
    imgPosition: "object-[center_70%]",
  },
  {
    name: "Mercedes-AMG GLC 63 S Coupé",
    tagline: "L'élégance d'un SUV, la rage d'un AMG.",
    category: "SUV Sport",
    badge: "Disponible",
    badgeType: "available" as BadgeType,
    vip: false,
    img: "/flotte/mercedes-glc63.jpeg",
  },
  {
    name: "Mercedes-AMG GT 63 S 4MATIC",
    tagline: "La gran turismo qui redéfinit les codes.",
    category: "Berline GT",
    badge: "Disponible",
    badgeType: "available" as BadgeType,
    vip: false,
    img: "/flotte/mercedes-gt63.jpeg",
  },
  {
    name: "Mercedes-AMG SL 63 4MATIC",
    tagline: "Ciel ouvert, adrénaline garantie.",
    category: "Roadster",
    badge: "Disponible",
    badgeType: "available" as BadgeType,
    vip: false,
    img: "/flotte/mercedes-sl63.jpeg",
  },
  {
    name: "Mercedes-Benz Classe S",
    tagline: "Le summum du confort et du prestige.",
    category: "Limousine de Prestige",
    badge: "⭐ Avec chauffeur",
    badgeType: "vip" as BadgeType,
    vip: true,
    img: "/flotte/mercedes-classe-s.jpeg",
  },
  {
    name: "Brabus 800 (Mercedes-AMG G 63)",
    tagline: "La bête ultime des routes.",
    category: "SUV de Prestige",
    badge: "Disponible",
    badgeType: "available" as BadgeType,
    vip: false,
    img: "/flotte/brabus-800.jpeg",
  },
  {
    name: "Ferrari FF",
    tagline: "La Ferrari qui s'adapte à toutes les saisons.",
    category: "GT Sportive",
    badge: "Disponible",
    badgeType: "available" as BadgeType,
    vip: false,
    img: "/flotte/ferrari-ff.jpeg",
  },
];

function CarCard({ car, index }: { car: typeof fleet[0] & { imgPosition?: string }; index: number }) {
  const borderCls = car.vip
    ? "border border-gold/50 hover:border-gold"
    : "border border-white/6 hover:border-gold/35";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      className={`group relative bg-[#FFFFFF] overflow-hidden transition-all duration-400 ${borderCls}`}
    >
      {/* Image */}
      <div className="relative h-[220px] overflow-hidden bg-[#FFFFFF]">
        <Image
          src={car.img}
          alt={car.name}
          fill
          className={`object-cover group-hover:scale-105 transition-transform duration-700 ${car.imgPosition ?? "object-center"}`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2E] via-transparent to-black/20" />

        {/* Badge */}
        <div className="absolute top-3 right-3">
          {car.badgeType === "available" ? (
            <span
              className="text-[9px] font-bold tracking-widest uppercase text-emerald-400 border border-emerald-400/40 bg-black/10 px-2.5 py-1 rounded-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {car.badge}
            </span>
          ) : (
            <span
              className="text-[9px] font-bold tracking-widest uppercase text-gold border border-gold/60 bg-black/10 px-2.5 py-1 rounded-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {car.badge}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p
          className="text-[10px] tracking-widest uppercase text-[#2D2416] mb-1"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {car.category}
        </p>
        <h3
          className="text-base font-bold text-[#1A1205] mb-0.5 group-hover:text-gold-gradient transition-all duration-300 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {car.name}
        </h3>
        <p
          className="text-white/35 text-xs italic mb-3"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {car.tagline}
        </p>
        <p
          className="text-[#2D2416] text-xs mb-4"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Prix sur demande
        </p>
        <p
          className="text-gold/60 text-[10px] font-semibold uppercase tracking-widest text-center border border-[#C9A84C]/40 py-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Voiture disponible dans la formation
        </p>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/50 transition-all duration-400" />
    </motion.div>
  );
}

export default function LocationVoitures() {
  return (
    <section id="location" className="py-24 md:py-32 px-4 bg-[#FAF7F2] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.04),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="gold-line" />
            <span className="label">Agence de location · Lille</span>
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
            Notre flotte —{" "}
            <span className="text-gold-gradient italic">disponible à Lille</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#2D2416] text-sm md:text-base max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Mariage, anniversaire, voyage d&apos;affaires, shooting photo ou simple plaisir.
            Livraison disponible dans toute la métropole lilloise.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {fleet.map((car, i) => (
            <CarCard key={car.name} car={car} index={i} />
          ))}
        </div>

        {/* Phrase de fin */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-[#2D2416] text-sm md:text-base italic mt-10"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          … et bien d&apos;autres encore, selon vos envies et disponibilités.
        </motion.p>
      </div>

      <div className="absolute bottom-0 inset-x-0">
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        <div className="h-px mt-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      </div>
    </section>
  );
}

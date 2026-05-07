"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cars = [
  {
    name: "Porsche 911 Carrera GTS",
    subtitle: "Type 991",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    tag: "Sport",
  },
  {
    name: "Mercedes GLE 63S AMG",
    subtitle: "SUV de prestige",
    image: "https://images.unsplash.com/photo-1563720223809-b2dba7fd8bec?w=800&q=80",
    tag: "SUV Luxe",
  },
  {
    name: "Mercedes C63S AMG",
    subtitle: "E Performance",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
    tag: "Hybride",
  },
  {
    name: "Audi RS6 Performance",
    subtitle: "Break sportif",
    image: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=800&q=80",
    tag: "Performance",
  },
  {
    name: "Mercedes CLE 53 AMG",
    subtitle: "Cabriolet",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    tag: "Cabriolet",
  },
  {
    name: "BMW M3 Competition",
    subtitle: "La berline ultime",
    image: "https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&q=80",
    tag: "Sport",
  },
];

export default function CarShowcase() {
  return (
    <section className="section-padding bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-subtitle mb-4"
          >
            Notre Flotte
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Des véhicules d&apos;exception
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, i) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group card-surface overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span
                  className="absolute top-3 right-3 text-[10px] tracking-widest uppercase text-gold border border-gold/50 px-2 py-1 bg-black/50"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {car.tag}
                </span>
              </div>
              <div className="p-5">
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
                <Link
                  href="/contact"
                  className="btn-gold text-xs w-full justify-center"
                >
                  Réserver
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/nos-voitures" className="btn-outline-gold group">
            Voir toutes nos voitures
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

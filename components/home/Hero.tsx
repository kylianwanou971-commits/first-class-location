"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";
import BookingCallModal from "@/components/ui/BookingCallModal";

const stagger = {
  container: {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
};

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80"
            alt="Voiture de luxe First Class Location"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center max-w-5xl mx-auto px-4"
        >
          <motion.div variants={stagger.item} className="flex items-center justify-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="section-subtitle">Nord-Pas-de-Calais · Depuis 2014</span>
            <div className="gold-divider" />
          </motion.div>

          <motion.h1
            variants={stagger.item}
            className="section-title text-5xl md:text-7xl lg:text-8xl mb-6 leading-none"
          >
            Le prestige a une adresse.
            <br />
            <span className="text-gold italic">Vous venez de la trouver.</span>
          </motion.h1>

          <motion.p
            variants={stagger.item}
            className="text-text-secondary text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Location de voiture de luxe N°1 dans le Nord-Pas-De-Calais — Ferrari,
            Lamborghini, Porsche, Mercedes, BMW et bien plus.
          </motion.p>

          <motion.div variants={stagger.item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/nos-voitures" className="btn-gold group">
              Nos Voitures
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/formation" className="btn-outline-gold group">
              Lancer mon agence
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-12 bg-gradient-to-b from-gold to-transparent"
          />
        </motion.div>
      </section>

      <BookingCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Phone, ArrowRight, Building2, TrendingUp, Shield, Handshake } from "lucide-react";
import BookingCallModal from "@/components/ui/BookingCallModal";
import ContactForm from "@/components/shared/ContactForm";
import { CONTACT_INFO } from "@/config/booking";

const avantages = [
  {
    icon: Building2,
    title: "Pas d'achat, pas d'import",
    desc: "Accédez aux véhicules les plus prestigieux sans les contraintes financières et logistiques de l'acquisition.",
  },
  {
    icon: TrendingUp,
    title: "Flotte évolutive",
    desc: "Ajustez votre flotte à la demande de vos clients. Plus de flexibilité = plus de réactivité commerciale.",
  },
  {
    icon: Shield,
    title: "Accompagnement sur mesure",
    desc: "Notre équipe reste disponible pour vous conseiller, vous former et vous aider à maximiser vos locations.",
  },
  {
    icon: Handshake,
    title: "Partenariat long terme",
    desc: "Nous voulons votre succès sur la durée. Nos conditions s'adaptent à votre croissance.",
  },
];

export default function LLDPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0a00] via-[#0A0A0A] to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,168,76,0.07),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <p className="section-subtitle mb-4">LLD Professionnel</p>
            <div className="gold-divider mb-8" />
            <h1
              className="section-title text-5xl md:text-6xl mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              La flotte de luxe
              <br />
              <span className="text-gold italic">pour votre agence</span>
            </h1>
            <p
              className="text-text-secondary leading-relaxed mb-6 text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Grâce à notre service de location longue durée (LLD) dédié aux
              professionnels, First Class Location facilite l&apos;accès aux véhicules de
              prestige pour les agences de location et les entrepreneurs du secteur.
            </p>
            <p
              className="text-text-secondary leading-relaxed mb-10 text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Forts de notre expérience terrain de plus de 10 ans, nous devenons un
              véritable partenaire de croissance pour ceux qui souhaitent se démarquer
              dans le monde de la location automobile de luxe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                <Phone size={14} />
                Prendre contact
              </button>
              <Link href="#formulaire" className="btn-outline-gold">
                Formulaire pro
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?w=800&q=80"
              alt="LLD Professionnel First Class Location"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 border border-[rgba(201,168,76,0.3)]" />
          </motion.div>
        </div>
      </section>

      {/* Avantages */}
      <section className="section-padding bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Pourquoi choisir notre LLD</p>
            <h2 className="section-title text-4xl md:text-5xl">
              Vos avantages
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantages.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-surface p-6 text-center"
              >
                <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <a.icon size={20} className="text-gold" />
                </div>
                <h3
                  className="font-heading text-lg text-text-primary mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {a.title}
                </h3>
                <p
                  className="text-text-secondary text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {a.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">Notre offre</p>
            <h2 className="section-title text-4xl md:text-5xl">
              Conditions & fonctionnement
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Véhicules haut de gamme disponibles rapidement",
              "Durées de location flexibles (3 à 24 mois)",
              "Kilométrage négociable selon votre activité",
              "Entretien et assistance inclus selon formule",
              "Remplacement de véhicule en cas de panne",
              "Facturation simplifiée pour la comptabilité",
              "Renouvellement de flotte facilité",
              "Suivi dédié par un interlocuteur unique",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 border border-[rgba(201,168,76,0.1)] bg-[#111]"
              >
                <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                <p
                  className="text-text-secondary text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section id="formulaire" className="section-padding bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">Demande professionnelle</p>
            <h2 className="section-title text-4xl md:text-5xl">
              Parlons de votre projet
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-surface p-8"
          >
            <ContactForm defaultObjet="LLD Professionnel" />
          </motion.div>

          <div className="text-center mt-8">
            <p
              className="text-text-secondary text-sm mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Vous préférez en discuter directement ?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="btn-outline-gold">
                <Phone size={14} />
                {CONTACT_INFO.phone}
              </a>
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Réserver un call
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookingCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

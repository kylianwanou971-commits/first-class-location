"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check, ChevronDown, ChevronUp, Phone, ArrowRight, Star } from "lucide-react";
import SimulateurCA from "@/components/shared/SimulateurCA";
import BookingCallModal from "@/components/ui/BookingCallModal";

const modules = [
  {
    number: "01",
    title: "Comprendre le marché de la location de luxe",
    content:
      "Analyse du marché, identification des opportunités, concurrence, clientèle cible, positionnement premium. Tout ce qu'il faut savoir avant de se lancer.",
  },
  {
    number: "02",
    title: "Choisir et acquérir ses premiers véhicules",
    content:
      "Sélection des modèles rentables, sources d'approvisionnement, LLD, achat comptant vs financement. Optimiser son investissement dès le départ.",
  },
  {
    number: "03",
    title: "Créer sa structure juridique",
    content:
      "SASU, SAS, SARL : quel statut choisir ? Domiciliation, immatriculation, assurances professionnelles obligatoires, réglementation spécifique à la location.",
  },
  {
    number: "04",
    title: "Trouver ses premiers clients",
    content:
      "Stratégie digitale, réseaux sociaux, partenariats locaux, référencement, bouche-à-oreille, événementiel. Les canaux qui convertissent réellement.",
  },
  {
    number: "05",
    title: "Gérer les locations au quotidien",
    content:
      "Contrats de location conformes, état des lieux, cautions, gestion des sinistres, relation client, logistique. Opérer comme un pro dès le jour 1.",
  },
  {
    number: "06",
    title: "Développer et scaler son activité",
    content:
      "Agrandir sa flotte, déléguer, automatiser, développer sa marque, événements, partenariats B2B, LLD professionnel. Passer à l'échelle supérieure.",
  },
];

const options = [
  { emoji: "🎨", title: "Identité visuelle", desc: "Carte de visite, flyer, charte graphique" },
  { emoji: "🌐", title: "Création de site internet", desc: "Site professionnel pour ton agence" },
  { emoji: "📞", title: "Suivi personnalisé 6 mois", desc: "Accompagnement mensuel avec l'équipe" },
  { emoji: "📞", title: "Suivi personnalisé 12 mois", desc: "Accompagnement complet sur 1 an" },
  { emoji: "📄", title: "Réalisation des contrats", desc: "Contrats de location rédigés pour toi" },
  { emoji: "🏢", title: "Aide à la création de société", desc: "Accompagnement création SASU/SAS/SARL" },
  { emoji: "👤", title: "Entretiens individuels", desc: "Sessions 1-to-1 avec l'équipe" },
  { emoji: "📋", title: "Liste de fournisseurs", desc: "Accès à notre carnet d'adresses partenaires" },
  { emoji: "🚗", title: "Formation en présentiel", desc: "Journée d'immersion à Bondues" },
];

const faqs = [
  {
    q: "Est-ce que la formation est 100% en ligne ?",
    a: "Oui, entièrement accessible en ligne, à ton rythme, depuis n'importe quel appareil. Tu accèdes aux modules vidéo quand tu veux.",
  },
  {
    q: "Faut-il déjà avoir une voiture pour commencer ?",
    a: "Non, on part de zéro. La formation t'accompagne de A à Z, de la recherche des premiers véhicules jusqu'au développement de ton activité.",
  },
  {
    q: "La formation en présentiel est-elle disponible ?",
    a: "Oui, en option supplémentaire uniquement. Elle comprend une journée d'immersion complète dans nos locaux à Bondues (Nord).",
  },
  {
    q: "Que comprend l'accompagnement personnalisé ?",
    a: "Des sessions régulières avec notre équipe, un suivi de ton avancement, des réponses à tes questions spécifiques et des conseils adaptés à ta situation.",
  },
  {
    q: "Y a-t-il un remboursement possible ?",
    a: "Les conditions de remboursement sont précisées dans nos CGV. Contactez-nous directement pour en discuter selon votre situation.",
  },
];

const testimonials = [
  {
    name: "Kevin R.",
    city: "Lyon",
    result: "3 voitures en 4 mois",
    text: "La formation m'a donné toutes les clés. En 4 mois j'avais ma première flotte et mes premiers clients réguliers.",
    rating: 5,
  },
  {
    name: "Amira B.",
    city: "Paris",
    result: "Agence créée en 2 mois",
    text: "Méthodes concrètes, applicables immédiatement. Jessy et son équipe sont disponibles et passionnés. Vraie valeur ajoutée.",
    rating: 5,
  },
  {
    name: "Dylan M.",
    city: "Bordeaux",
    result: "CA de 8 000€/mois dès le 6ème mois",
    text: "J'avais peur de me lancer seul. La communauté et le suivi m'ont donné confiance. Résultats au-delà de mes attentes.",
    rating: 5,
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[rgba(201,168,76,0.15)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span
          className="text-text-primary text-sm md:text-base"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {q}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-gold flex-shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-gold flex-shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p
              className="text-text-secondary text-sm pb-5 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FormationPage() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleOption = (title: string) => {
    setSelectedOptions((prev) =>
      prev.includes(title) ? prev.filter((o) => o !== title) : [...prev, title]
    );
  };

  const devisUrl = selectedOptions.length > 0
    ? `/contact?objet=Demande+de+renseignement&options=${encodeURIComponent(selectedOptions.join(", "))}`
    : "/contact";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a00] via-[#0A0A0A] to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="section-subtitle mb-4"
          >
            Formation Professionnelle
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            Lance ta propre agence
            <br />
            <span className="text-gold italic">de location de luxe</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-10"
            style={{ fontFamily: "var(--font-body)" }}
          >
            La formation créée par des professionnels qui le font depuis 10 ans.
            Méthodes éprouvées, résultats concrets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="#offre" className="btn-gold text-sm">
              Je rejoins la formation — 990 €
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-outline-gold text-sm"
            >
              <Phone size={14} />
              Réserver un call gratuit
            </button>
          </motion.div>
        </div>
      </section>

      {/* Promesse */}
      <section className="section-padding bg-[#080808]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gold-divider mx-auto mb-8" />
          <blockquote
            className="font-heading text-2xl md:text-3xl lg:text-4xl text-text-primary leading-relaxed"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            &ldquo;Apprends à construire une activité rentable dans la location de voitures de
            luxe, depuis zéro, avec les méthodes exactes qui ont fait le succès de{" "}
            <span className="text-gold italic">First Class Location</span>.&rdquo;
          </blockquote>
          <div className="gold-divider mx-auto mt-8" />
        </div>
      </section>

      {/* Programme */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Programme</p>
            <h2 className="section-title text-4xl md:text-5xl">
              Ce que tu vas apprendre
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-surface p-6 group hover:border-gold/40 transition-all"
              >
                <p
                  className="font-heading text-4xl text-gold/20 group-hover:text-gold/40 transition-colors mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {mod.number}
                </p>
                <h3
                  className="font-heading text-lg text-text-primary mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {mod.title}
                </h3>
                <p
                  className="text-text-secondary text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {mod.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing card */}
      <section id="offre" className="section-padding bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">L&apos;Offre</p>
            <h2 className="section-title text-4xl md:text-5xl">
              Formation en ligne
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-surface p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full translate-x-24 -translate-y-24" />

            <ul className="space-y-4 mb-10">
              {[
                "Accès à vie à tous les modules vidéo",
                "Supports PDF téléchargeables",
                "Communauté privée exclusive",
                "Mises à jour incluses à vie",
                "Accès immédiat dès l'achat",
                "Méthodes terrain de 10 ans d'expérience",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-text-secondary text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <div className="w-5 h-5 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-gold" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="border-t border-[rgba(201,168,76,0.2)] pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p
                  className="text-text-secondary text-xs mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Investissement unique
                </p>
                <p
                  className="font-heading text-5xl text-gold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  990 €
                </p>
                <p
                  className="text-text-secondary text-xs mt-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Paiement sécurisé
                </p>
              </div>
              <div className="flex flex-col gap-3 text-center">
                <Link href="/contact?objet=Formation+Agence+de+Luxe" className="btn-gold">
                  Je commence maintenant
                </Link>
                <button
                  onClick={() => setModalOpen(true)}
                  className="text-gold text-xs flex items-center gap-1 justify-center hover:text-gold-light transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Phone size={12} /> Des questions ? Réserver un call
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Options configurateur */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">Options & Accompagnement</p>
            <h2 className="section-title text-4xl md:text-5xl">
              Allez plus loin
              <br />
              <span className="text-gold italic">avec nos services</span>
            </h2>
            <p
              className="text-text-secondary text-sm mt-4 max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Sélectionnez les options qui vous intéressent — notre équipe vous contactera
              avec un devis personnalisé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {options.map((opt) => {
              const active = selectedOptions.includes(opt.title);
              return (
                <motion.button
                  key={opt.title}
                  onClick={() => toggleOption(opt.title)}
                  whileTap={{ scale: 0.98 }}
                  className={`text-left p-5 border transition-all duration-200 flex items-start gap-3 ${
                    active
                      ? "border-gold bg-[rgba(201,168,76,0.08)]"
                      : "border-[rgba(201,168,76,0.15)] bg-[#111] hover:border-[rgba(201,168,76,0.4)]"
                  }`}
                >
                  <div
                    className={`w-5 h-5 border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      active ? "border-gold bg-gold" : "border-[rgba(201,168,76,0.4)]"
                    }`}
                  >
                    {active && <Check size={10} className="text-black" />}
                  </div>
                  <div>
                    <p
                      className="text-sm font-medium text-text-primary mb-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {opt.emoji} {opt.title}
                    </p>
                    <p
                      className="text-text-secondary text-xs"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {opt.desc}
                    </p>
                    <p
                      className="text-gold text-xs mt-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Sur devis
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence>
            {selectedOptions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center p-6 border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.05)]"
              >
                <div>
                  <p
                    className="text-text-primary text-sm font-medium"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {selectedOptions.length} option{selectedOptions.length > 1 ? "s" : ""} sélectionnée{selectedOptions.length > 1 ? "s" : ""}
                  </p>
                  <p
                    className="text-text-secondary text-xs"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {selectedOptions.join(", ")}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link href={devisUrl} className="btn-gold text-xs">
                    Demander un devis
                  </Link>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="btn-outline-gold text-xs"
                  >
                    <Phone size={12} />
                    Réserver un call
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Simulateur CA */}
      <SimulateurCA />

      {/* Témoignages */}
      <section className="section-padding bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Témoignages</p>
            <h2 className="section-title text-4xl md:text-5xl">
              Ils l&apos;ont fait. Toi aussi.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-surface p-6"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} className="text-gold fill-gold" />
                  ))}
                </div>
                <p
                  className="text-text-secondary text-sm leading-relaxed italic mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[rgba(201,168,76,0.1)]">
                  <div className="w-8 h-8 bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-xs font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p
                      className="text-text-primary text-sm font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-gold text-xs"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {t.result} · {t.city}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">FAQ</p>
            <h2 className="section-title text-4xl md:text-5xl">
              Questions fréquentes
            </h2>
          </div>
          <div>
            {faqs.map((f) => (
              <AccordionItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-[#080808] text-center">
        <div className="max-w-2xl mx-auto">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="section-subtitle mb-4">Prêt à te lancer ?</p>
          <h2 className="section-title text-4xl md:text-5xl mb-8">
            Démarrer ma formation
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?objet=Formation+Agence+de+Luxe" className="btn-gold">
              Rejoindre la formation — 990 €
              <ArrowRight size={16} />
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-outline-gold"
            >
              <Phone size={14} />
              Réserver un call gratuit
            </button>
          </div>
        </div>
      </section>

      <BookingCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

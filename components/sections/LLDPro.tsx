"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import Image from "next/image";

const advantages = [
  {
    emoji: "🇫🇷",
    title: "Fournisseur 100% Français",
    desc: "Première agence française à fournir directement en France. Venez en train ou en avion, on s'occupe du reste.",
  },
  {
    emoji: "🚗",
    title: "+100 Véhicules disponibles",
    desc: "90% de Mercedes, uniquement des véhicules de l'année en cours, tous assurés et conformes pour la mise en location.",
  },
  {
    emoji: "💳",
    title: "Caution & paiement sécurisés",
    desc: "Caution en empreinte bancaire, paiement échelonné, récupération garantie si aucun problème.",
  },
  {
    emoji: "⚡",
    title: "Livraison en 48h",
    desc: "Véhicules livrés en parfait état, à récupérer dans nos locaux dans le Nord. Durée de contrat : 6 à 8 mois.",
  },
  {
    emoji: "🏆",
    title: "15 ans d'expérience",
    desc: "15 ans d'expertise dans la location de luxe. Une collaboration sereine et professionnelle garantie.",
  },
  {
    emoji: "📞",
    title: "Service client 7j/7",
    desc: "Notre équipe répond tous les jours pour un accompagnement personnalisé à chaque étape.",
  },
];

const catalog = [
  {
    name: "Mercedes CLA Pack AMG",
    price: "1 600 €/mois",
    img: "https://images.unsplash.com/photo-1617531653332-bd46c16f4d55?w=800&q=80",
  },
  {
    name: "Mercedes Classe A Pack AMG",
    price: "1 600 €/mois",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
  },
  {
    name: "Mercedes C43 AMG Berline",
    price: "2 800 €/mois",
    img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
  },
  {
    name: "Mercedes C63s AMG E-Performance Berline",
    price: "4 400 €/mois",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
  },
  {
    name: "Mercedes CLE 53 AMG Coupé",
    price: "3 500 €/mois",
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
  },
  {
    name: "Mercedes CLE 53 AMG Cabriolet",
    price: "3 500 €/mois",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
  },
  {
    name: "Mercedes GLC 63s AMG E-Performance SUV",
    price: "4 500 €/mois",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
  },
  {
    name: "Mercedes GLE 63S E-Performance SUV",
    price: "4 500 €/mois",
    img: "https://images.unsplash.com/photo-1566024349560-f5f8e9b4d73d?w=800&q=80",
  },
  {
    name: "Mercedes GT 63S E-Performance Coupé",
    price: "5 500 €/mois",
    img: "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?w=800&q=80",
  },
];

function VehicleModal({
  isOpen, onClose, vehicleName,
}: { isOpen: boolean; onClose: () => void; vehicleName: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ prenom: "", nom: "", telephone: "", email: "", message: "" });

  useEffect(() => {
    if (isOpen) setSubmitted(false);
  }, [isOpen]);

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));
  const cls = "w-full bg-[#111] border border-white/10 px-3 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm" />
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-[#0d0d0d] border border-gold/30 w-full max-w-lg relative pointer-events-auto max-h-[90vh] overflow-y-auto"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              <button onClick={onClose} className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors" aria-label="Fermer">
                <X size={20} />
              </button>
              <div className="p-7">
                {!submitted ? (
                  <>
                    <p className="label mb-1.5">FC Leasing — Demande véhicule</p>
                    <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                      {vehicleName}
                    </h3>
                    <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>Prénom *</label>
                          <input required type="text" value={form.prenom} onChange={update("prenom")} className={cls} style={{ fontFamily: "var(--font-inter)" }} />
                        </div>
                        <div>
                          <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>Nom *</label>
                          <input required type="text" value={form.nom} onChange={update("nom")} className={cls} style={{ fontFamily: "var(--font-inter)" }} />
                        </div>
                      </div>
                      <div>
                        <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>Téléphone *</label>
                        <input required type="tel" value={form.telephone} onChange={update("telephone")} className={cls} style={{ fontFamily: "var(--font-inter)" }} />
                      </div>
                      <div>
                        <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>Email *</label>
                        <input required type="email" value={form.email} onChange={update("email")} className={cls} style={{ fontFamily: "var(--font-inter)" }} />
                      </div>
                      <div>
                        <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>Votre agence / projet</label>
                        <textarea rows={3} value={form.message} onChange={update("message")} className={`${cls} resize-none`} style={{ fontFamily: "var(--font-inter)" }} />
                      </div>
                      <button type="submit" className="btn-primary w-full justify-center py-4">Envoyer ma demande</button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-10">
                    <CheckCircle size={52} className="text-gold mx-auto mb-5" />
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Demande envoyée !</h3>
                    <p className="text-white/50 text-sm mb-6" style={{ fontFamily: "var(--font-inter)" }}>Notre équipe vous contacte sous 24h ✓</p>
                    <button onClick={onClose} className="btn-secondary text-xs">Fermer</button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function VehicleCard({ vehicle, index, onSelect }: { vehicle: typeof catalog[0]; index: number; onSelect: (name: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.5 }}
      className="group bg-[#0d0d0d] border border-white/6 overflow-hidden hover:border-gold/35 transition-all duration-300"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[#111]">
        <Image
          src={vehicle.img}
          alt={vehicle.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-black/20" />
        <div className="absolute top-3 right-3">
          <span className="text-[9px] font-bold tracking-widest uppercase text-emerald-400 border border-emerald-400/40 bg-black/70 px-2.5 py-1 rounded-sm" style={{ fontFamily: "var(--font-inter)" }}>
            Disponible
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-sm font-bold text-white mb-1 leading-snug group-hover:text-gold-gradient transition-all duration-300" style={{ fontFamily: "var(--font-playfair)" }}>
          {vehicle.name}
        </h3>
        <p className="text-gold text-base font-bold mb-4" style={{ fontFamily: "var(--font-inter)" }}>
          {vehicle.price}
        </p>
        <button
          onClick={() => onSelect(vehicle.name)}
          className="w-full text-[11px] font-semibold tracking-widest uppercase text-black bg-gold px-4 py-2.5 hover:bg-[#d4b05c] transition-colors duration-200 rounded-sm"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Demander ce véhicule
        </button>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/50 transition-all duration-300" />
    </motion.div>
  );
}

export default function LLDPro() {
  const [modalVehicle, setModalVehicle] = useState<string | null>(null);

  return (
    <section id="lld" className="py-24 md:py-32 px-4 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.04),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-5">
            <div className="gold-line" />
            <span className="label">Pour les professionnels</span>
            <div className="gold-line" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}>
            First Class Leasing{" "}
            <span className="text-gold-gradient italic">Pour les Professionnels</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-sm md:text-base max-w-2xl mx-auto mb-8"
            style={{ fontFamily: "var(--font-inter)" }}>
            Fournisseur de véhicules de luxe pour agences de location.
            La première plateforme française 100% dédiée aux pros.
          </motion.p>
          {/* Intro block */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative bg-[#0d0d0d] border border-gold/15 p-6 max-w-3xl mx-auto text-left overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              Accédez à notre catalogue de{" "}
              <strong className="text-white">+100 véhicules de luxe</strong>, assurés, récents, livrés en 48h dans le Nord de la France.
              Pas de déplacement à l&apos;étranger, pas de barrière de la langue.
            </p>
          </motion.div>
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-[#0d0d0d] border border-white/6 p-6 hover:border-gold/25 transition-all duration-300"
            >
              <span className="text-2xl mb-4 block">{adv.emoji}</span>
              <h3 className="text-sm font-bold text-white mb-2" style={{ fontFamily: "var(--font-inter)" }}>{adv.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>{adv.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Catalog header */}
        <div className="text-center mb-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="label">Notre catalogue</span>
            <div className="gold-line" />
          </motion.div>
          <motion.h3 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}>
            Véhicules disponibles pour vos agences
          </motion.h3>
        </div>

        {/* Vehicles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {catalog.map((v, i) => (
            <VehicleCard key={v.name} vehicle={v} index={i} onSelect={setModalVehicle} />
          ))}
        </div>

        {/* External CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center">
          <a
            href="https://forms.gle/f2Nbs9Su6t85ZoTU6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Formulaire d&apos;adhésion FC Leasing →
          </a>
          <p className="text-white/25 text-xs mt-3" style={{ fontFamily: "var(--font-inter)" }}>
            Accessible aux agences et auto-entrepreneurs
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0">
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        <div className="h-px mt-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      </div>

      <VehicleModal
        isOpen={!!modalVehicle}
        onClose={() => setModalVehicle(null)}
        vehicleName={modalVehicle ?? ""}
      />
    </section>
  );
}

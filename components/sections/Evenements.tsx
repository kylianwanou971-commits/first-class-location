"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

const events = [
  {
    emoji: "🎊",
    title: "Mariages & Cérémonies",
    desc: "Arrivée en grande pompe dans votre véhicule de prestige. Décorations, coordination, photographe recommandé.",
    type: "Mariage / Cérémonie",
  },
  {
    emoji: "📸",
    title: "Shootings & Clips vidéo",
    desc: "Location de véhicules pour vos productions. Nos voitures ont déjà tourné dans des dizaines de clips.",
    type: "Shooting / Clip vidéo",
  },
  {
    emoji: "🤝",
    title: "Voyages d'affaires & VIP",
    desc: "Transferts aéroport, réceptions clients, séminaires. Impression garantie.",
    type: "Voyage d'affaires / VIP",
  },
];

function EventModal({
  isOpen, onClose, eventType,
}: { isOpen: boolean; onClose: () => void; eventType: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ prenom: "", nom: "", telephone: "", email: "", typeEvenement: eventType, message: "" });

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setForm(f => ({ ...f, typeEvenement: eventType }));
    }
  }, [isOpen, eventType]);

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));
  const cls = "w-full bg-[#FFFFFF] border border-[#C9A84C]/40 px-3 py-2.5 text-[#1A1205] text-sm focus:outline-none focus:border-gold/50 transition-colors";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} className="fixed inset-0 bg-black/10 z-50 backdrop-blur-sm" />
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-[#FFFFFF] border border-[#C9A84C]/40 w-full max-w-lg relative pointer-events-auto max-h-[90vh] overflow-y-auto"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              <button onClick={onClose} className="absolute top-4 right-4 text-[#2D2416] hover:text-[#1A1205] transition-colors" aria-label="Fermer">
                <X size={20} />
              </button>
              <div className="p-7">
                {!submitted ? (
                  <>
                    <p className="label mb-1.5">First Class Events</p>
                    <h3 className="text-xl font-bold text-[#1A1205] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                      Organisons ton événement
                    </h3>
                    <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[#2D2416] text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>Prénom *</label>
                          <input required type="text" value={form.prenom} onChange={update("prenom")} className={cls} style={{ fontFamily: "var(--font-inter)" }} />
                        </div>
                        <div>
                          <label className="text-[#2D2416] text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>Nom *</label>
                          <input required type="text" value={form.nom} onChange={update("nom")} className={cls} style={{ fontFamily: "var(--font-inter)" }} />
                        </div>
                      </div>
                      <div>
                        <label className="text-[#2D2416] text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>Téléphone *</label>
                        <input required type="tel" value={form.telephone} onChange={update("telephone")} className={cls} style={{ fontFamily: "var(--font-inter)" }} />
                      </div>
                      <div>
                        <label className="text-[#2D2416] text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>Email *</label>
                        <input required type="email" value={form.email} onChange={update("email")} className={cls} style={{ fontFamily: "var(--font-inter)" }} />
                      </div>
                      <div>
                        <label className="text-[#2D2416] text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>Type d&apos;événement *</label>
                        <select required value={form.typeEvenement} onChange={update("typeEvenement")}
                          className={`${cls} bg-[#FFFFFF]`}
                          style={{ fontFamily: "var(--font-inter)", colorScheme: "dark" }}>
                          <option value="">Sélectionner...</option>
                          <option>Mariage / Cérémonie</option>
                          <option>Shooting / Clip vidéo</option>
                          <option>Voyage d&apos;affaires / VIP</option>
                          <option>Autre</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[#2D2416] text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>Décris ton projet</label>
                        <textarea rows={3} value={form.message} onChange={update("message")} className={`${cls} resize-none`} style={{ fontFamily: "var(--font-inter)" }} />
                      </div>
                      <button type="submit" className="btn-primary w-full justify-center py-4">
                        Organiser mon événement →
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-10">
                    <CheckCircle size={52} className="text-gold mx-auto mb-5" />
                    <h3 className="text-xl font-bold text-[#1A1205] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Demande envoyée !</h3>
                    <p className="text-[#2D2416] text-sm mb-6" style={{ fontFamily: "var(--font-inter)" }}>Jessy vous contacte sous 24h ✓</p>
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

export default function Evenements() {
  const [modalEvent, setModalEvent] = useState<string | null>(null);

  return (
    <section id="evenements" className="py-24 md:py-32 px-4 bg-[#FAF7F2] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.04),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-5">
            <div className="gold-line" />
            <span className="label">Expériences sur mesure</span>
            <div className="gold-line" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[#1A1205] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}>
            First Class{" "}
            <span className="text-gold-gradient italic">Events</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#2D2416] text-sm md:text-base max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}>
            On ne loue pas que des voitures. On crée des expériences.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {events.map((ev, i) => (
            <motion.div
              key={ev.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group bg-[#FFFFFF] border border-white/6 p-8 hover:border-[#C9A84C]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <span className="text-4xl mb-5 block">{ev.emoji}</span>
              <h3 className="text-xl font-bold text-[#1A1205] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                {ev.title}
              </h3>
              <p className="text-[#6B5C3E] text-sm leading-relaxed mb-6 flex-1" style={{ fontFamily: "var(--font-inter)" }}>
                {ev.desc}
              </p>
              <button
                onClick={() => setModalEvent(ev.type)}
                className="btn-secondary text-xs w-full justify-center"
              >
                En savoir plus →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-20">
          <button onClick={() => setModalEvent("")} className="btn-primary">
            Organiser mon événement →
          </button>
        </motion.div>

        {/* Photo scroll */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="label text-center mb-8 text-[#2D2416]"
          >
            Nos événements en photos
          </motion.p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10 pointer-events-none" />
            <div
              className="marquee-strip flex gap-4 w-max"
              style={{ animation: "marquee 50s linear infinite" }}
            >
              {[...Array(2)].flatMap(() =>
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => n)
              ).map((n, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 transition-transform duration-300 hover:-translate-y-2"
                  style={{ width: 400, height: 400 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/events/photo${n}.jpeg`}
                    alt={`Événement First Class ${n}`}
                    style={{ width: 400, height: 400, objectFit: "cover", display: "block", borderRadius: 12, border: "1px solid rgba(201,168,76,0.25)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-[#1A1205] text-center mb-10"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nos événements{" "}
            <span className="text-gold-gradient italic">en vidéo</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Vidéo événement 1", "Vidéo événement 2", "Vidéo événement 3"].map((title, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative bg-[#FFFFFF] border border-[#C9A84C]/40 overflow-hidden group cursor-pointer hover:border-gold/50 transition-all duration-300"
                  style={{ aspectRatio: "16/9" }}>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#C9A84C]/8 border border-[#C9A84C]/40 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-[#C9A84C]/40 transition-all duration-300">
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="white" className="ml-1">
                        <path d="M0 0L16 9L0 18V0Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-[#2D2416] text-sm mt-3 text-center" style={{ fontFamily: "var(--font-inter)" }}>
                  {title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0">
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        <div className="h-px mt-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      </div>

      <EventModal
        isOpen={modalEvent !== null}
        onClose={() => setModalEvent(null)}
        eventType={modalEvent ?? ""}
      />
    </section>
  );
}

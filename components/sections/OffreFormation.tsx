"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X, Clock } from "lucide-react";

/* ── Countdown ── */
function pad(n: number) { return String(n).padStart(2, "0"); }

function Countdown() {
  const targetRef = useRef<number | null>(null);
  const [time, setTime] = useState({ h: 71, m: 59, s: 59 });

  useEffect(() => {
    targetRef.current = Date.now() + 24 * 60 * 60 * 1000;
    const id = setInterval(() => {
      const diff = (targetRef.current ?? 0) - Date.now();
      if (diff <= 0) { setTime({ h: 0, m: 0, s: 0 }); clearInterval(id); return; }
      setTime({
        h: Math.floor(diff / 3_600_000),
        m: Math.floor((diff % 3_600_000) / 60_000),
        s: Math.floor((diff % 60_000) / 1000),
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2 justify-center">
      {[{ label: "HH", value: time.h }, { label: "MM", value: time.m }, { label: "SS", value: time.s }].map(({ label, value }, i) => (
        <div key={label} className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="bg-[#1A1205] border border-[#C9A84C]/30 px-3 py-2 md:px-5 md:py-3 min-w-[52px] md:min-w-[68px] text-center">
              <span className="text-[#C9A84C] text-xl md:text-3xl font-bold tabular-nums" style={{ fontFamily: "var(--font-inter)" }}>
                {pad(value)}
              </span>
            </div>
            <span className="text-[#C9A84C]/40 text-[9px] uppercase tracking-widest mt-1" style={{ fontFamily: "var(--font-inter)" }}>{label}</span>
          </div>
          {i < 2 && <span className="text-[#C9A84C]/60 text-xl md:text-2xl font-bold mb-3">:</span>}
        </div>
      ))}
    </div>
  );
}

/* ── Contact Modal (1:1) ── */
function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ prenom: "", nom: "", telephone: "", email: "", message: "" });

  useEffect(() => {
    if (isOpen) setSubmitted(false);
  }, [isOpen]);

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));
  const cls = "w-full bg-[#FAF7F2] border border-[#C9A84C]/40 px-3 py-2.5 text-[#1A1205] text-sm focus:outline-none focus:border-gold/50 transition-colors";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} className="fixed inset-0 bg-[#1A1205]/60 z-50 backdrop-blur-sm" />
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
                    <p className="label mb-1.5">Accompagnement 1:1</p>
                    <h3 className="text-xl font-bold text-[#1A1205] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                      Réserve ton appel avec Jessy
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
                        <label className="text-[#2D2416] text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>Parle-nous de ton projet</label>
                        <textarea rows={3} value={form.message} onChange={update("message")} className={`${cls} resize-none`} style={{ fontFamily: "var(--font-inter)" }} />
                      </div>
                      <button type="submit" className="btn-primary w-full justify-center py-4">
                        Envoyer — Jessy vous répond sous 24h
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

/* ── Data ── */
const offreFormation = [
  "Accès immédiat aux 5 modules vidéo",
  "Communauté privée First Class",
  "Sessions live mensuelles avec Jessy",
  "Templates de contrats prêts à l'emploi",
  "Mises à jour à vie incluses",
  "Support par messagerie",
];

const offreAccompagnement = [
  "Tout ce qui est dans la formation complète",
  "Pack communication complet : logo, site web, flyers, carte de visite",
  "Réalisation de vos contrats de location personnalisés",
  "Accompagnement de 6 à 12 mois avec Jessy",
  "Véhicule fourni à la fin de l'accompagnement (loyer à votre charge)",
  "Mises en situation réelles",
  "Intervention d'experts de l'automobile",
  "Aide complète à la création d'entreprise",
  "Appels 1:1 avec Jessy",
  "Accès WhatsApp direct",
];

/* ── Main component ── */
export default function OffreFormation() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="formation" className="py-24 md:py-32 px-4 bg-[#F0EBE1] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05),transparent_65%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-5">
            <div className="gold-line" />
            <span className="label">La Formation</span>
            <div className="gold-line" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[#1A1205] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}>
            Lance ton agence avec la{" "}
            <span className="text-gold-gradient italic">méthode qui a fait ses preuves</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#2D2416] text-base md:text-lg max-w-xl mx-auto mb-10"
            style={{ fontFamily: "var(--font-inter)" }}>
            Choisis la formule qui correspond à ton niveau d&apos;ambition
          </motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[#2D2416] text-sm mb-4"
            style={{ fontFamily: "var(--font-inter)" }}>
            Places limitées — Le prix augmente à la fermeture de ce timer.
          </motion.p>

          {/* Countdown */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex flex-col items-center gap-3 mb-10">
            <div className="flex items-center gap-2">
              <Clock size={12} className="text-[#C9A84C]/70" />
              <span className="text-[#C9A84C]/70 text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-inter)" }}>
                Offre expire dans
              </span>
            </div>
            <Countdown />
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Offre 1 — Formation autonome */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="group bg-[#FFFFFF] border border-[#C9A84C]/40 p-8 relative hover:-translate-y-1 transition-transform duration-300 flex flex-col overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="inline-flex mb-6">
              <span className="text-[9px] font-bold tracking-widest uppercase bg-[#C9A84C]/8 text-[#2D2416] px-3 py-1.5" style={{ fontFamily: "var(--font-inter)" }}>
                Le plus populaire
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#1A1205] mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
              Formation Complète
            </h3>
            <p className="text-[#2D2416] text-xs mb-6" style={{ fontFamily: "var(--font-inter)" }}>
              Formation autonome — à ton rythme
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {offreFormation.map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle size={13} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-[#2D2416] text-sm" style={{ fontFamily: "var(--font-inter)" }}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-[#C9A84C]/40 pt-6 mb-6">
              <div className="flex items-end gap-3">
                <span className="text-[#6B5C3E] text-base line-through" style={{ fontFamily: "var(--font-inter)" }}>1 490 €</span>
                <span className="text-[#1A1205] text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>990 €</span>
              </div>
              <p className="text-[#6B5C3E] text-xs mt-1" style={{ fontFamily: "var(--font-inter)" }}>Paiement unique · Accès à vie</p>
            </div>

            <a href="https://app.iclosed.io/e/Jessy-FCFORMATION/appel-strat-gique-offert-30-min" target="_blank" rel="noopener noreferrer" className="btn-primary justify-center py-4">
              Accéder maintenant — 990 €
            </a>
          </motion.div>

          {/* Offre 2 — Accompagnement 1:1 */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="group border-2 border-[#C9A84C] p-8 relative hover:-translate-y-1 transition-transform duration-300 flex flex-col overflow-hidden"
            style={{ background: "linear-gradient(135deg, #FAF7F2 0%, #F0E6C8 50%, #E8D5A3 100%)", boxShadow: "0 8px 40px rgba(201,168,76,0.25)" }}
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.06),transparent_60%)]" />

            <div className="inline-flex mb-6 relative">
              <span
                className="text-[9px] font-bold tracking-widest uppercase text-[#FAF7F2] px-3 py-1.5"
                style={{ fontFamily: "var(--font-inter)", background: "#C9A84C" }}
              >
                ⚡ Pour aller plus vite
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#1A1205] mb-1 relative" style={{ fontFamily: "var(--font-playfair)" }}>
              Tu veux faire exploser ton agence ?
            </h3>
            <p className="text-gold/70 text-xs mb-4 relative" style={{ fontFamily: "var(--font-inter)" }}>
              Accompagnement personnalisé avec Jessy
            </p>
            <p className="text-[#2D2416] text-sm leading-relaxed mb-6 relative" style={{ fontFamily: "var(--font-inter)" }}>
              Pour ceux qui veulent des résultats bien plus rapides. Jessy travaille directement avec toi : stratégie, acquisition clients, gestion du parc.{" "}
              <span className="text-gold/70 font-medium">Limité à quelques personnes par mois.</span>
            </p>

            <ul className="space-y-2.5 mb-8 flex-1 relative">
              {offreAccompagnement.map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle size={13} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-[#2D2416] text-sm" style={{ fontFamily: "var(--font-inter)" }}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-gold/15 pt-6 mb-6" />

            <a
              href="https://app.iclosed.io/e/Jessy-FCFORMATION/appel-strat-gique-offert-30-min"
              target="_blank"
              rel="noopener noreferrer"
              className="justify-center py-4 relative text-[#FAF7F2] text-xs font-bold tracking-widest uppercase flex items-center transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #C9A84C, #8B6914)", boxShadow: "0 4px 15px rgba(201,168,76,0.4)", fontFamily: "var(--font-inter)" }}
            >
              Réserver un appel →
            </a>
            <p className="text-center text-xs text-[#2D2416] italic mt-3" style={{ fontFamily: "var(--font-inter)" }}>
              (Gratuit &amp; sans engagement)
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-[#6B5C3E] text-xs text-center mt-8 max-w-lg mx-auto"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Les résultats présentés sont des exemples et ne constituent pas une garantie de gains. Les performances varient selon l&apos;implication de chacun.
        </motion.p>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  carName: string;
}

export default function ReservationModal({ isOpen, onClose, carName }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    prenom: "", nom: "", telephone: "", email: "",
    vehicule: carName, dateDebut: "", dateFin: "", message: "",
  });

  useEffect(() => {
    if (isOpen) {
      setForm(f => ({ ...f, vehicule: carName }));
      setSubmitted(false);
    }
  }, [isOpen, carName]);

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const update = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value }));

  const inputCls = "w-full bg-[#111] border border-white/10 px-3 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-[#0d0d0d] border border-gold/30 w-full max-w-lg relative overflow-hidden pointer-events-auto max-h-[90vh] overflow-y-auto"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors z-10"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>

              <div className="p-7">
                {!submitted ? (
                  <>
                    <div className="mb-6">
                      <p className="label mb-1.5">Demande de réservation</p>
                      <h3
                        className="text-xl font-bold text-white"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {carName}
                      </h3>
                    </div>

                    <form
                      onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>
                            Prénom *
                          </label>
                          <input required type="text" value={form.prenom} onChange={update("prenom")} className={inputCls} style={{ fontFamily: "var(--font-inter)" }} />
                        </div>
                        <div>
                          <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>
                            Nom *
                          </label>
                          <input required type="text" value={form.nom} onChange={update("nom")} className={inputCls} style={{ fontFamily: "var(--font-inter)" }} />
                        </div>
                      </div>

                      <div>
                        <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>
                          Téléphone *
                        </label>
                        <input required type="tel" value={form.telephone} onChange={update("telephone")} className={inputCls} style={{ fontFamily: "var(--font-inter)" }} />
                      </div>

                      <div>
                        <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>
                          Email *
                        </label>
                        <input required type="email" value={form.email} onChange={update("email")} className={inputCls} style={{ fontFamily: "var(--font-inter)" }} />
                      </div>

                      <div>
                        <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>
                          Véhicule souhaité
                        </label>
                        <input type="text" value={form.vehicule} onChange={update("vehicule")} className={inputCls} style={{ fontFamily: "var(--font-inter)" }} />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>
                            Début *
                          </label>
                          <input
                            required
                            type="date"
                            value={form.dateDebut}
                            onChange={update("dateDebut")}
                            className={inputCls}
                            style={{ fontFamily: "var(--font-inter)", colorScheme: "dark" }}
                          />
                        </div>
                        <div>
                          <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>
                            Fin *
                          </label>
                          <input
                            required
                            type="date"
                            value={form.dateFin}
                            onChange={update("dateFin")}
                            className={inputCls}
                            style={{ fontFamily: "var(--font-inter)", colorScheme: "dark" }}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>
                          Message (optionnel)
                        </label>
                        <textarea
                          rows={3}
                          value={form.message}
                          onChange={update("message")}
                          className={`${inputCls} resize-none`}
                          style={{ fontFamily: "var(--font-inter)" }}
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full justify-center py-4 mt-1">
                        Envoyer ma demande
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-10">
                    <CheckCircle size={52} className="text-gold mx-auto mb-5" />
                    <h3
                      className="text-xl font-bold text-white mb-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Demande envoyée !
                    </h3>
                    <p className="text-white/50 text-sm mb-6" style={{ fontFamily: "var(--font-inter)" }}>
                      Jessy vous contacte sous 24h ✓
                    </p>
                    <button onClick={handleClose} className="btn-secondary text-xs">
                      Fermer
                    </button>
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

"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";
import { BOOKING_URL } from "@/config/booking";

interface BookingCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingCallModal({ isOpen, onClose }: BookingCallModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 flex items-center justify-center z-[101] px-4"
          >
            <div className="bg-[#FAF7F2] border border-[rgba(201,168,76,0.3)] w-full max-w-lg p-8 relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-text-secondary hover:text-gold transition-colors p-1"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gold/10 border border-[#C9A84C]/40 flex items-center justify-center">
                  <Phone size={16} className="text-gold" />
                </div>
                <span
                  className="text-xs tracking-widest uppercase text-gold"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Appel Gratuit
                </span>
              </div>

              <h2
                className="text-2xl md:text-3xl font-heading text-text-primary mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Réservez votre appel gratuit
              </h2>
              <p
                className="text-text-secondary text-sm leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Réservez votre appel gratuit avec notre équipe — nous répondons à toutes
                vos questions sur la formation ou la location.
              </p>

              {/* Booking widget placeholder */}
              <div className="border border-[rgba(201,168,76,0.15)] p-6 bg-[#F0EBE1] min-h-[200px] flex items-center justify-center">
                {BOOKING_URL ? (
                  <iframe
                    src={BOOKING_URL}
                    className="w-full h-[400px] border-0"
                    title="Réserver un appel"
                  />
                ) : (
                  <div className="text-center">
                    {/* CALENDRIER_ICLOSED_ICI */}
                    <p
                      className="text-text-secondary text-sm italic"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      [Calendrier de réservation — à intégrer via iClosed]
                    </p>
                    <p
                      className="text-xs text-gold/50 mt-2"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Renseignez <code className="text-gold/70">BOOKING_URL</code> dans{" "}
                      <code className="text-gold/70">config/booking.ts</code>
                    </p>
                  </div>
                )}
              </div>

              <p
                className="text-text-secondary text-xs mt-4 text-center"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Appel 100% gratuit, sans engagement
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

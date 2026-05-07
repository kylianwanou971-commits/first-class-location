"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Ghost } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";
import { CONTACT_INFO } from "@/config/booking";

export default function ContactPageContent() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="section-subtitle mb-4"
          >
            Contactez-nous
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title text-5xl md:text-6xl"
          >
            Parlons de votre
            <br />
            <span className="text-gold italic">projet</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card-surface p-8"
          >
            <h2
              className="font-heading text-2xl text-text-primary mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Envoyez-nous un message
            </h2>
            <ContactForm />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2
                className="font-heading text-2xl text-text-primary mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Nos coordonnées
              </h2>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Adresse", value: CONTACT_INFO.address, href: undefined },
                  { icon: Phone, label: "Téléphone", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}` },
                  { icon: Mail, label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                  { icon: Clock, label: "Horaires", value: "Lun-Ven 10h-12h / 14h-17h | Sam sur RDV", href: undefined },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4 p-4 border border-[rgba(201,168,76,0.1)] bg-[#111]">
                    <div className="w-10 h-10 bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <div>
                      <p
                        className="text-xs tracking-widest uppercase text-gold mb-0.5"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-text-secondary text-sm hover:text-gold transition-colors"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {value}
                        </a>
                      ) : (
                        <p
                          className="text-text-secondary text-sm"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Réseaux */}
            <div>
              <p
                className="text-xs tracking-widest uppercase text-gold mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Suivez-nous
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: CONTACT_INFO.social.instagram, label: "Instagram" },
                  { icon: Facebook, href: CONTACT_INFO.social.facebook, label: "Facebook" },
                  { icon: Youtube, href: CONTACT_INFO.social.youtube, label: "YouTube" },
                  { icon: Ghost, href: CONTACT_INFO.social.snapchat, label: "Snapchat" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 border border-[rgba(201,168,76,0.3)] flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="aspect-video border border-[rgba(201,168,76,0.2)] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.0!2d3.0730!3d50.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d6e9b5c2b8d5%3A0x1!2s3+bis+Rue+Marie+Curie%2C+59910+Bondues!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="First Class Location — Bondues"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

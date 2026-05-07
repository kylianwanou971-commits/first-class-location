"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";
import { CONTACT_INFO } from "@/config/booking";

export default function ContactSection() {
  return (
    <section className="section-padding bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-subtitle mb-4"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Parlons de votre projet
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-surface p-8"
          >
            <ContactForm />
          </motion.div>

          {/* Infos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                icon: MapPin,
                label: "Adresse",
                value: CONTACT_INFO.address,
                href: "https://maps.google.com/?q=3+bis+Rue+Marie+Curie+59910+Bondues",
              },
              {
                icon: Phone,
                label: "Téléphone",
                value: CONTACT_INFO.phone,
                href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
              },
              {
                icon: Mail,
                label: "Email",
                value: CONTACT_INFO.email,
                href: `mailto:${CONTACT_INFO.email}`,
              },
              {
                icon: Clock,
                label: "Horaires",
                value: "Lun-Ven 10h-12h / 14h-17h",
                sub: "Samedi sur rendez-vous",
              },
            ].map(({ icon: Icon, label, value, href, sub }) => (
              <div key={label} className="flex gap-4">
                <div className="w-10 h-10 bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-gold" />
                </div>
                <div>
                  <p
                    className="text-xs tracking-widest uppercase text-gold mb-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
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
                  {sub && (
                    <p
                      className="text-text-secondary text-xs mt-0.5"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {sub}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
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
    </section>
  );
}

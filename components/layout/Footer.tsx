import Link from "next/link";
import { Instagram, Facebook, Youtube, Ghost } from "lucide-react";
import { CONTACT_INFO } from "@/config/booking";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[rgba(201,168,76,0.15)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-tight mb-4">
              <span
                className="text-xl font-heading font-light tracking-[0.3em] text-text-primary uppercase"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                First Class
              </span>
              <span
                className="text-[10px] tracking-[0.4em] text-gold uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Location de Luxe
              </span>
            </div>
            <p
              className="text-text-secondary text-sm leading-relaxed mt-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              La référence de la location de voitures de luxe dans la métropole
              lilloise depuis plus de 10 ans.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={CONTACT_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-gold transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href={CONTACT_INFO.social.snapchat}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-gold transition-colors"
                aria-label="Snapchat"
              >
                <Ghost size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-xs tracking-widest uppercase text-gold mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/nos-voitures", label: "Nos Voitures" },
                { href: "/formation", label: "Formation" },
                { href: "/lld-professionnel", label: "LLD Pro" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-gold transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-xs tracking-widest uppercase text-gold mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-text-secondary" style={{ fontFamily: "var(--font-body)" }}>
              <li>{CONTACT_INFO.address}</li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="hover:text-gold transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-gold transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="leading-relaxed">{CONTACT_INFO.hours}</li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3
              className="text-xs tracking-widest uppercase text-gold mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Nos Services
            </h3>
            <ul className="space-y-3 text-sm text-text-secondary" style={{ fontFamily: "var(--font-body)" }}>
              <li>Location courte durée</li>
              <li>Location longue durée pro</li>
              <li>Test drive & baptême</li>
              <li>Location avec chauffeur</li>
              <li>Formation agence de luxe</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(201,168,76,0.1)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-text-secondary text-xs"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © 2025 First Class Location. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="text-text-secondary text-xs hover:text-gold transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Mentions légales
            </Link>
            <Link
              href="/cgv"
              className="text-text-secondary text-xs hover:text-gold transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

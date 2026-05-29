import Link from "next/link";
import { Instagram, Facebook, Youtube, Phone, MapPin } from "lucide-react";

const locationLinks = [
  { label: "Notre flotte", href: "#location" },
  { label: "Réserver un véhicule", href: "#location" },
  { label: "Événements", href: "#evenements" },
];

const formationLinks = [
  { label: "Programme", href: "#programme" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "FAQ", href: "#faq" },
  { label: "Devenir loueur", href: "#formation" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1A1205] border-t border-[#C9A84C] pt-16 pb-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none mb-4">
              <span
                className="text-xl font-semibold tracking-[0.25em] uppercase text-gold-gradient"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                First Class
              </span>
              <span
                className="text-[9px] tracking-[0.35em] uppercase text-[#E8D5A3]/60 mt-1"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Location · Formation
              </span>
            </div>

            <p
              className="text-[#F5F0E8]/70 text-xs leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Agence de location de voitures de luxe — référence N°1 dans la métropole lilloise depuis plus de 15 ans.
            </p>

            {/* Contact infos */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <MapPin size={12} className="text-[#C9A84C] flex-shrink-0" />
                <span
                  className="text-[#F5F0E8]/70 text-xs"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Lille, Nord-Pas-de-Calais
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={12} className="text-[#C9A84C] flex-shrink-0" />
                <a
                  href="tel:0622543084"
                  className="text-[#F5F0E8]/70 text-xs hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  06 22 54 30 84
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2.5 mt-5">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/firstclass.location", label: "Instagram" },
                { Icon: Facebook, href: "https://www.facebook.com/FirstClassLocationLille", label: "Facebook" },
                { Icon: Youtube, href: "https://www.youtube.com", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 border border-[#C9A84C]/30 flex items-center justify-center text-[#E8D5A3]/60 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer on lg */}
          <div className="hidden lg:block" />

          {/* Location links */}
          <div>
            <p
              className="label mb-5 text-[#C9A84C]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Location
            </p>
            <ul className="space-y-3">
              {locationLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[#E8D5A3]/70 text-xs hover:text-[#C9A84C] transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Formation links */}
          <div>
            <p
              className="label mb-5 text-[#C9A84C]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Formation
            </p>
            <ul className="space-y-3">
              {formationLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[#E8D5A3]/70 text-xs hover:text-[#C9A84C] transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#E8D5A3]/50 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
            © 2025 First Class Location — Basée à Lille, Nord-Pas-de-Calais
          </p>
          <div className="flex gap-5">
            <Link
              href="/mentions-legales"
              className="text-[#E8D5A3]/50 text-xs hover:text-[#C9A84C] transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Mentions légales
            </Link>
            <Link
              href="/cgv"
              className="text-[#E8D5A3]/50 text-xs hover:text-[#C9A84C] transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              CGV
            </Link>
            <Link
              href="/confidentialite"
              className="text-[#E8D5A3]/50 text-xs hover:text-[#C9A84C] transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Confidentialité
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <p
          className="text-[#E8D5A3]/30 text-[10px] text-center mt-8 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Les résultats présentés sont des exemples de réussite et ne constituent pas une garantie de gains. Les performances varient selon les individus et leur implication dans la formation.
        </p>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://firstclasslocation.fr"),
  title: "First Class Formation | La seule formation pour lancer ton agence de location de voitures de luxe",
  description:
    "Découvre la formation de Jessy, 15 ans d'expérience dans la location de luxe. Lance ton agence en 60 jours et repars avec un véhicule à la fin. Accessible partout en France.",
  keywords: [
    "formation agence location voiture luxe",
    "lancer agence location luxe",
    "formation location voiture luxe France",
    "first class formation",
    "jessy formation location luxe",
    "formation entrepreneur voiture luxe",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "First Class Formation | Formation agence location voitures de luxe",
    description:
      "La seule formation du marché où un véhicule t'attend à la fin. Méthode prouvée, 15 ans d'expérience, accessible partout en France.",
    siteName: "First Class Formation",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}

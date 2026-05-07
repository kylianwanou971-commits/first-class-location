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
  title: "First Class Location | Location voitures de luxe Lille + Formation",
  description:
    "Louez une voiture de luxe à Lille avec First Class Location. Mercedes AMG, Porsche, Ferrari disponibles 7j/7. Et découvrez notre formation pour lancer votre propre agence.",
  keywords: [
    "location voiture luxe Lille",
    "location Mercedes Lille",
    "location Porsche Lille",
    "location Ferrari Lille",
    "agence location voiture luxe Nord",
    "formation location voiture luxe",
    "first class location",
    "location voiture Bondues",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "First Class Location | Location voitures de luxe Lille + Formation",
    description:
      "Louez une voiture de luxe à Lille avec First Class Location. Mercedes AMG, Porsche, Ferrari disponibles 7j/7. Et découvrez notre formation pour lancer votre propre agence.",
    siteName: "First Class Location",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}

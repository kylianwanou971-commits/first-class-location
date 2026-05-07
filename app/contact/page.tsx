import type { Metadata } from "next";
import ContactPageContent from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact — Réservation & Renseignements",
  description:
    "Contactez First Class Location pour réserver votre véhicule de luxe, un test drive ou obtenir des informations sur nos services. Basé à Bondues (59).",
};

export default function Page() {
  return <ContactPageContent />;
}

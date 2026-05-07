import type { Metadata } from "next";
import LLDPage from "@/components/pages/LLDPage";

export const metadata: Metadata = {
  title: "LLD Professionnel — Location Longue Durée pour Agences",
  description:
    "Service de location longue durée dédié aux professionnels de la location automobile. Véhicules de luxe prêts à intégrer votre flotte. Conditions souples.",
};

export default function Page() {
  return <LLDPage />;
}

import type { Metadata } from "next";
import NosVoituresPage from "@/components/pages/NosVoituresPage";

export const metadata: Metadata = {
  title: "Notre Flotte — Voitures de Luxe à Louer",
  description:
    "Découvrez notre flotte de véhicules d'exception : Porsche 911, Mercedes GLE 63S, Audi RS6, BMW M3 et bien plus. Location courte et longue durée dans le Nord.",
};

export default function Page() {
  return <NosVoituresPage />;
}

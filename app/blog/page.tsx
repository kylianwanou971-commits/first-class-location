import type { Metadata } from "next";
import BlogPageContent from "@/components/pages/BlogPageContent";

export const metadata: Metadata = {
  title: "Blog — Conseils & Actualités Location Voiture Luxe",
  description:
    "Découvrez nos articles sur la location de voitures de luxe : conseils, guides, actualités du secteur.",
};

export default function Page() {
  return <BlogPageContent />;
}

import type { Metadata } from "next";
import FormationPage from "@/components/pages/FormationPage";

export const metadata: Metadata = {
  title: "Formation — Lance ta propre agence de location de voitures de luxe",
  description:
    "Apprends à construire une activité rentable dans la location de voitures de luxe. Formation en ligne créée par First Class Location, experts depuis 10 ans. 990€.",
};

export default function Page() {
  return <FormationPage />;
}

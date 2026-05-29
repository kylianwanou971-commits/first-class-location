import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import ChiffresCles from "@/components/sections/ChiffresCles";
import Temoignages from "@/components/sections/Temoignages";
import PresentationJessy from "@/components/sections/PresentationJessy";
import Simulateur from "@/components/sections/Simulateur";
import LocationVoitures from "@/components/sections/LocationVoitures";
import LogosBandeau from "@/components/sections/LogosBandeau";
import OffreFormation from "@/components/sections/OffreFormation";
import PourquoiFormation from "@/components/sections/PourquoiFormation";
import Programme from "@/components/sections/Programme";
import Evenements from "@/components/sections/Evenements";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <ChiffresCles />
      <Temoignages />
      <PresentationJessy />
      <Simulateur />
      <LocationVoitures />
      <LogosBandeau />
      <OffreFormation />
      <PourquoiFormation />
      <Programme />
      <Evenements />
      <OffreFormation />
      <FAQ />
      <Footer />
    </>
  );
}

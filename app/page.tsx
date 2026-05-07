import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import LocationVoitures from "@/components/sections/LocationVoitures";
import LLDPro from "@/components/sections/LLDPro";
import LogosBandeau from "@/components/sections/LogosBandeau";
import ChiffresCles from "@/components/sections/ChiffresCles";
import Simulateur from "@/components/sections/Simulateur";
import PourquoiFormation from "@/components/sections/PourquoiFormation";
import Programme from "@/components/sections/Programme";
import Temoignages from "@/components/sections/Temoignages";
import Evenements from "@/components/sections/Evenements";
import PresentationJessy from "@/components/sections/PresentationJessy";
import OffreFormation from "@/components/sections/OffreFormation";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <LocationVoitures />
      <LogosBandeau />
      <ChiffresCles />
      <Temoignages />
      <PresentationJessy />
      <Simulateur />
      <PourquoiFormation />
      <Programme />
      <OffreFormation />
      <LLDPro />
      <Evenements />
      <FAQ />
      <Footer />
    </>
  );
}

import BackgroundTexture from "./components/BackgroundTexture";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ProblemsSection from "./components/ProblemsSection";
import SoilSection from "./components/SoilSection";
import JourneySection from "./components/JourneySection";
import SeasonsSection from "./components/SeasonsSection";
import FieldSection from "./components/FieldSection";
import EngineSection from "./components/EngineSection";
import ComparisonSection from "./components/ComparisonSection";
import FeaturesSection from "./components/FeaturesSection";
import FieldFirstSection from "./components/FieldFirstSection";
import HardwareSection from "./components/HardwareSection";
import InstallSection from "./components/InstallSection";
import PricingSection from "./components/PricingSection";
import PlatformSection from "./components/PlatformSection";
import RoadmapSection from "./components/RoadmapSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <BackgroundTexture />
      <Header />
      <main>
        <Hero />                 {/* 01 — Hero                                */}
        <TrustBar />             {/*      Trust strip                         */}
        <ProblemsSection />      {/* 02 — Farming shouldn't be a gamble       */}
        <SoilSection />          {/* 03 — Below the surface                   */}
        <JourneySection />       {/* 04 — The growth journey                  */}
        <SeasonsSection />       {/* 05 — Across Maha & Yala                  */}
        <FieldSection />         {/* 06 — Field scanning                      */}
        <EngineSection />        {/* 07 — The intelligence engine             */}
        <ComparisonSection />    {/* 08 — Replacing guesswork with measurement */}
        <FeaturesSection />      {/* 09 — Features & capabilities             */}
        <FieldFirstSection />    {/* 10 — Designed for the field              */}
        <HardwareSection />      {/* 11 — The IoT ecosystem                   */}
        <InstallSection />       {/* 12 — How field hardware installs         */}
        <PricingSection />       {/* 13 — Choose what fits your farm          */}
        <PlatformSection />      {/* 14 — The Aswenna platform                */}
        <RoadmapSection />       {/* 15 — The roadmap                         */}
        <TestimonialsSection />  {/* 16 — Trusted by farmers                  */}
        <FaqSection />           {/* 17 — Frequently asked questions          */}
        <CtaSection />           {/* 18 — Final call to action                */}
        <ContactSection />       {/*      Closing band + contact form         */}
      </main>
      <Footer />
    </>
  );
}

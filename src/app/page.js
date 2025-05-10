"use client";  
import AboutSection from "./components/AboutSection";
import CompanyValues from "./components/CompanyValues";
import ContactUs from "./components/Contactus";
import HeroSection from "./components/HeroSection";
import VisionMission from "./components/VissionMission";
import WelcomeMessage from "./components/Welcome";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeMessage/>
      <VisionMission/>
      <CompanyValues/>
      <AboutSection/>
      <ContactUs/>

      {/* You could also include a brief About preview, etc. */}
    </>
  );
}

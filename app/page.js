import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImpactStats from "@/components/ImpactStats";
import QuoteSection from "@/components/QuoteSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ImpactStats />
      <QuoteSection />
      <AboutSection />
      <ProgramsSection />
      <ContactForm />
      <Footer />
    </>
  );
}

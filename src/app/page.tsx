import Hero from "@/components/Hero";
import WasteEmergencySection from "@/components/WasteEmergencySection";
import Section3R from "@/components/Section3R";
import WasteCatalogSection from "@/components/WasteCatalogSection";
import ScanWasteSection from "@/components/ScanWasteSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import SectionTransition from "@/components/SectionTransition";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white">
      {/* 1. Hero (Dark) */}
      <Hero />

      {/* 2. Tantangan TPA (Light) */}
      <WasteEmergencySection />

      {/* Transition: Light -> Dark (Dome) */}
      <SectionTransition
        fillColor="text-zinc-950"
        variant="dome"
        className="bg-slate-50"
      />

      {/* 3. Gerakan 3R (Dark) */}
      <Section3R />

      {/* Transition: Dark -> Light (Bowl) */}
      <SectionTransition
        fillColor="text-white"
        variant="bowl"
        className="bg-zinc-950"
      />

      {/* 4. Katalog Sampah (Light) */}
      <WasteCatalogSection />

      {/* Transition: Light -> Dark (Dome) */}
      <SectionTransition
        fillColor="text-black"
        variant="dome"
        className="bg-white"
      />

      {/* 5. Scan AI Sampah (Dark) */}
      <ScanWasteSection />

      {/* Transition: Dark -> Light (Bowl) */}
      <SectionTransition
        fillColor="text-slate-50"
        variant="bowl"
        className="bg-black"
      />

      {/* 6. Media Sosial (Light) */}
      <SocialMediaSection />

      {/* 7. Tim KKN UNIKOM (Dark) */}
      <TeamSection />

      {/* 8. Kontak & Pengurus Wilayah (Light) */}
      <ContactSection />

      {/* 9. FAQ Akordion (Dark) */}
      <FaqSection />

      {/* 10. Footer (Dark) */}
      <Footer />
    </main>
  );
}


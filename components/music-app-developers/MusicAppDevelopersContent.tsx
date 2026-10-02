import MusicAudienceSection from "./sections/MusicAudienceSection";
import MusicCtaSection from "./sections/MusicCtaSection";
import MusicFaqSection from "./sections/MusicFaqSection";
import MusicFeaturesSection from "./sections/MusicFeaturesSection";
import MusicHeroSection from "./sections/MusicHeroSection";
import MusicProcessSection from "./sections/MusicProcessSection";
import MusicServicesSection from "./sections/MusicServicesSection";
import MusicTechStackSection from "./sections/MusicTechStackSection";
import MusicTestimonialsSection from "./sections/MusicTestimonialsSection";
import MusicTypesSection from "./sections/MusicTypesSection";
import MusicWhyChooseSection from "./sections/MusicWhyChooseSection";

export default function MusicAppDevelopersContent() {
  return (
    <div className="min-h-screen">
      <main>
        <MusicHeroSection />
        <MusicTypesSection />
        <MusicFeaturesSection />
        <MusicServicesSection />
        <MusicWhyChooseSection />
        <MusicProcessSection />
        <MusicTechStackSection />
        <MusicAudienceSection />
        <MusicTestimonialsSection />
        <MusicFaqSection />
        <MusicCtaSection />
      </main>
    </div>
  );
}

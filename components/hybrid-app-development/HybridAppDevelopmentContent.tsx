import HybridAudienceSection from "./sections/HybridAudienceSection";
import HybridCtaSection from "./sections/HybridCtaSection";
import HybridFaqSection from "./sections/HybridFaqSection";
import HybridFeaturesSection from "./sections/HybridFeaturesSection";
import HybridHeroSection from "./sections/HybridHeroSection";
import HybridProcessSection from "./sections/HybridProcessSection";
import HybridServicesSection from "./sections/HybridServicesSection";
import HybridTechStackSection from "./sections/HybridTechStackSection";
import HybridTestimonialsSection from "./sections/HybridTestimonialsSection";
import HybridTypesSection from "./sections/HybridTypesSection";
import HybridWhyChooseSection from "./sections/HybridWhyChooseSection";

export default function HybridAppDevelopmentContent() {
  return (
    <div className="min-h-screen">
      <main>
        <HybridHeroSection />
        <HybridTypesSection />
        <HybridFeaturesSection />
        <HybridServicesSection />
        <HybridWhyChooseSection />
        <HybridProcessSection />
        <HybridTechStackSection />
        <HybridAudienceSection />
        <HybridTestimonialsSection />
        <HybridFaqSection />
        <HybridCtaSection />
      </main>
    </div>
  );
}

import type { Project } from "@/lib/models/project";
import ConsultAboutSection from "./sections/ConsultAboutSection";
import ConsultBenefitsSection from "./sections/ConsultBenefitsSection";
import ConsultCaseStudiesSection from "./sections/ConsultCaseStudiesSection";
import ConsultFaqSection from "./sections/ConsultFaqSection";
import ConsultFeaturesSection from "./sections/ConsultFeaturesSection";
import ConsultFinalCtaSection from "./sections/ConsultFinalCtaSection";
import ConsultHeroSection from "./sections/ConsultHeroSection";
import ConsultIndustriesSection from "./sections/ConsultIndustriesSection";
import ConsultMidCtaSection from "./sections/ConsultMidCtaSection";
import ConsultProcessSection from "./sections/ConsultProcessSection";
import ConsultServicesSection from "./sections/ConsultServicesSection";
import ConsultTestimonialsSection from "./sections/ConsultTestimonialsSection";
import ConsultTrustSection from "./sections/ConsultTrustSection";
import ConsultWhyChooseSection from "./sections/ConsultWhyChooseSection";

export default function MobileAppConsultationContent({ projects }: { projects: Project[] }) {
  return (
    <div className="min-h-screen">
      <main>
        <ConsultHeroSection />
        <ConsultTrustSection />
        <ConsultAboutSection />
        <ConsultServicesSection />
        <ConsultWhyChooseSection />
        <ConsultIndustriesSection />
        <ConsultBenefitsSection />
        <ConsultFeaturesSection />
        <ConsultProcessSection />
        <ConsultCaseStudiesSection projects={projects} />
        <ConsultMidCtaSection />
        <ConsultTestimonialsSection />
        <ConsultFaqSection />
        <ConsultFinalCtaSection />
      </main>
    </div>
  );
}

import PartnerCaseStudySection from "./sections/PartnerCaseStudySection";
import PartnerChecklistSection from "./sections/PartnerChecklistSection";
import PartnerComparisonSection from "./sections/PartnerComparisonSection";
import PartnerCtaSection from "./sections/PartnerCtaSection";
import PartnerEngagementSection from "./sections/PartnerEngagementSection";
import PartnerFaqSection from "./sections/PartnerFaqSection";
import PartnerHeroSection from "./sections/PartnerHeroSection";
import PartnerHowWeWorkSection from "./sections/PartnerHowWeWorkSection";
import PartnerIndustriesSection from "./sections/PartnerIndustriesSection";
import PartnerProcessSection from "./sections/PartnerProcessSection";
import PartnerServicesSection from "./sections/PartnerServicesSection";
import PartnerWhatIsSection from "./sections/PartnerWhatIsSection";
import PartnerWhyChooseSection from "./sections/PartnerWhyChooseSection";

export default function SoftwareDevelopmentPartnerContent() {
  return (
    <div className="min-h-screen">
      <main>
        <PartnerHeroSection />
        <PartnerWhatIsSection />
        <PartnerComparisonSection />
        <PartnerServicesSection />
        <PartnerEngagementSection />
        <PartnerHowWeWorkSection />
        <PartnerProcessSection />
        <PartnerIndustriesSection />
        <PartnerWhyChooseSection />
        <PartnerCaseStudySection />
        <PartnerChecklistSection />
        <PartnerFaqSection />
        <PartnerCtaSection />
      </main>
    </div>
  );
}

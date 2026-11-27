import EnterpriseCaseStudySection from "./sections/EnterpriseCaseStudySection";
import EnterpriseCostSection from "./sections/EnterpriseCostSection";
import EnterpriseCtaSection from "./sections/EnterpriseCtaSection";
import EnterpriseEngagementSection from "./sections/EnterpriseEngagementSection";
import EnterpriseFaqSection from "./sections/EnterpriseFaqSection";
import EnterpriseHeroSection from "./sections/EnterpriseHeroSection";
import EnterpriseIndustriesSection from "./sections/EnterpriseIndustriesSection";
import EnterpriseProcessSection from "./sections/EnterpriseProcessSection";
import EnterpriseSecuritySection from "./sections/EnterpriseSecuritySection";
import EnterpriseServicesSection from "./sections/EnterpriseServicesSection";
import EnterpriseTechStackSection from "./sections/EnterpriseTechStackSection";
import EnterpriseTypesSection from "./sections/EnterpriseTypesSection";
import EnterpriseWhatIsSection from "./sections/EnterpriseWhatIsSection";
import EnterpriseWhyChooseSection from "./sections/EnterpriseWhyChooseSection";

export default function EnterpriseAppDevelopmentContent() {
  return (
    <div className="min-h-screen">
      <main>
        <EnterpriseHeroSection />
        <EnterpriseWhatIsSection />
        <EnterpriseServicesSection />
        <EnterpriseTypesSection />
        <EnterpriseIndustriesSection />
        <EnterpriseProcessSection />
        <EnterpriseTechStackSection />
        <EnterpriseSecuritySection />
        <EnterpriseWhyChooseSection />
        <EnterpriseEngagementSection />
        <EnterpriseCaseStudySection />
        <EnterpriseCostSection />
        <EnterpriseFaqSection />
        <EnterpriseCtaSection />
      </main>
    </div>
  );
}

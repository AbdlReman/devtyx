import WebChecklistSection from "./sections/WebChecklistSection";
import WebComparisonSection from "./sections/WebComparisonSection";
import WebCtaSection from "./sections/WebCtaSection";
import WebFaqSection from "./sections/WebFaqSection";
import WebHeroSection from "./sections/WebHeroSection";
import WebIndustriesWhySection from "./sections/WebIndustriesWhySection";
import WebProcessQualitySection from "./sections/WebProcessQualitySection";
import WebServicesSection from "./sections/WebServicesSection";
import WebTechPackagesSection from "./sections/WebTechPackagesSection";
import WebWhatIsSection from "./sections/WebWhatIsSection";
import WebWorkSection from "./sections/WebWorkSection";

export default function CustomWebDevelopmentContent() {
  return (
    <div className="min-h-screen">
      <main>
        <WebHeroSection />
        <WebWhatIsSection />
        <WebComparisonSection />
        <WebServicesSection />
        <WebTechPackagesSection />
        <WebProcessQualitySection />
        <WebWorkSection />
        <WebIndustriesWhySection />
        <WebChecklistSection />
        <WebFaqSection />
        <WebCtaSection />
      </main>
    </div>
  );
}

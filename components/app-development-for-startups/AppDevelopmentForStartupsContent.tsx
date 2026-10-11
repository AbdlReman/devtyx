import StartupApproachSection from "./sections/StartupApproachSection";
import StartupCtaSection from "./sections/StartupCtaSection";
import StartupCustomAppSection from "./sections/StartupCustomAppSection";
import StartupFaqSection from "./sections/StartupFaqSection";
import StartupHeroSection from "./sections/StartupHeroSection";
import StartupLookForSection from "./sections/StartupLookForSection";
import StartupRelatedSection from "./sections/StartupRelatedSection";
import StartupServicesSection from "./sections/StartupServicesSection";
import StartupWhyAppMattersSection from "./sections/StartupWhyAppMattersSection";
import StartupWhyChooseSection from "./sections/StartupWhyChooseSection";

export default function AppDevelopmentForStartupsContent() {
  return (
    <div className="min-h-screen">
      <main>
        <StartupHeroSection />
        <StartupWhyAppMattersSection />
        <StartupApproachSection />
        <StartupLookForSection />
        <StartupServicesSection />
        <StartupCustomAppSection />
        <StartupWhyChooseSection />
        <StartupRelatedSection />
        <StartupFaqSection />
        <StartupCtaSection />
      </main>
    </div>
  );
}

import NativeCtaSection from "./sections/NativeCtaSection";
import NativeDifferentiatorsSection from "./sections/NativeDifferentiatorsSection";
import NativeExpertiseSection from "./sections/NativeExpertiseSection";
import NativeFaqSection from "./sections/NativeFaqSection";
import NativeHeroSection from "./sections/NativeHeroSection";
import NativeProcessSection from "./sections/NativeProcessSection";
import NativeTechStackSection from "./sections/NativeTechStackSection";
import NativeTestimonialsSection from "./sections/NativeTestimonialsSection";
import NativeTypesSection from "./sections/NativeTypesSection";
import NativeVsCrossSection from "./sections/NativeVsCrossSection";
import NativeWhatIsSection from "./sections/NativeWhatIsSection";
import NativeWhyChooseSection from "./sections/NativeWhyChooseSection";

export default function NativeAppDevelopmentContent() {
  return (
    <div className="min-h-screen">
      <main>
        <NativeHeroSection />
        <NativeWhatIsSection />
        <NativeExpertiseSection />
        <NativeTypesSection />
        <NativeDifferentiatorsSection />
        <NativeProcessSection />
        <NativeVsCrossSection />
        <NativeTechStackSection />
        <NativeWhyChooseSection />
        <NativeTestimonialsSection />
        <NativeFaqSection />
        <NativeCtaSection />
      </main>
    </div>
  );
}

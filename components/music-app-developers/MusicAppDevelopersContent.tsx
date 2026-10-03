import type { BlogPost } from "@/lib/models/blog";
import MusicAudienceSection from "./sections/MusicAudienceSection";
import MusicCapabilitiesSection from "./sections/MusicCapabilitiesSection";
import MusicComparisonSection from "./sections/MusicComparisonSection";
import MusicCtaSection from "./sections/MusicCtaSection";
import MusicFaqSection from "./sections/MusicFaqSection";
import MusicFeaturesSection from "./sections/MusicFeaturesSection";
import MusicHeroSection from "./sections/MusicHeroSection";
import MusicPerformanceSection from "./sections/MusicPerformanceSection";
import MusicProcessSection from "./sections/MusicProcessSection";
import MusicRelatedBlogSection from "./sections/MusicRelatedBlogSection";
import MusicServicesSection from "./sections/MusicServicesSection";
import MusicStatsSection from "./sections/MusicStatsSection";
import MusicTechStackSection from "./sections/MusicTechStackSection";
import MusicTestimonialsSection from "./sections/MusicTestimonialsSection";
import MusicTypesSection from "./sections/MusicTypesSection";
import MusicWhyChooseSection from "./sections/MusicWhyChooseSection";

export default function MusicAppDevelopersContent({ relatedPosts }: { relatedPosts: BlogPost[] }) {
  return (
    <div className="min-h-screen">
      <main>
        <MusicHeroSection />
        <MusicStatsSection />
        <MusicTypesSection />
        <MusicPerformanceSection />
        <MusicFeaturesSection />
        <MusicCapabilitiesSection />
        <MusicServicesSection />
        <MusicComparisonSection />
        <MusicWhyChooseSection />
        <MusicProcessSection />
        <MusicTechStackSection />
        <MusicAudienceSection />
        <MusicTestimonialsSection />
        <MusicFaqSection />
        <MusicRelatedBlogSection posts={relatedPosts} />
        <MusicCtaSection />
      </main>
    </div>
  );
}

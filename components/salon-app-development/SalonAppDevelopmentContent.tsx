import type { BlogPost } from "@/lib/models/blog";
import SalonCostGuideSection from "./sections/SalonCostGuideSection";
import SalonCtaSection from "./sections/SalonCtaSection";
import SalonFaqSection from "./sections/SalonFaqSection";
import SalonFeaturesSection from "./sections/SalonFeaturesSection";
import SalonHeroSection from "./sections/SalonHeroSection";
import SalonProcessSection from "./sections/SalonProcessSection";
import SalonRelatedBlogSection from "./sections/SalonRelatedBlogSection";
import SalonStatsSection from "./sections/SalonStatsSection";
import SalonTechStackSection from "./sections/SalonTechStackSection";
import SalonTestimonialsSection from "./sections/SalonTestimonialsSection";
import SalonWhyChooseSection from "./sections/SalonWhyChooseSection";
import SalonWhyOverOthersSection from "./sections/SalonWhyOverOthersSection";

export default function SalonAppDevelopmentContent({ relatedPosts }: { relatedPosts: BlogPost[] }) {
  return (
    <div className="min-h-screen">
      <main>
        <SalonHeroSection />
        <SalonStatsSection />
        <SalonWhyChooseSection />
        <SalonFeaturesSection />
        <SalonProcessSection />
        <SalonTechStackSection />
        <SalonCostGuideSection />
        <SalonWhyOverOthersSection />
        <SalonFaqSection />
        <SalonTestimonialsSection />
        <SalonRelatedBlogSection posts={relatedPosts} />
        <SalonCtaSection />
      </main>
    </div>
  );
}

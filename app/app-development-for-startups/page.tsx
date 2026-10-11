import type { Metadata } from "next";
import AppDevelopmentForStartupsContent from "@/components/app-development-for-startups/AppDevelopmentForStartupsContent";
import { faqCategories } from "@/components/app-development-for-startups/data/app-development-for-startups-data";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "App Development for Startups | MVP to Scale",
  description:
    "Mobile app development for startups, from idea validation and MVP to launch and growth. Fixed-price packages, fast kickoff and full code ownership. Talk to DEVTYX.",
  path: "/app-development-for-startups",
  keywords: [
    "app development for startups",
    "mobile app development for startups",
    "startup app development",
    "startup business mobile app development",
    "mvp app development for startups",
    "best app developers for startups",
    "startup mvp development company",
    "app development company for startups usa",
  ],
});

export default function AppDevelopmentForStartupsPage() {
  const allFaqs = faqCategories.flatMap((cat) => cat.items);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "App Development for Startups", path: "/app-development-for-startups" }])} />
      <JsonLd data={faqJsonLd(allFaqs)} />
      <AppDevelopmentForStartupsContent />
    </>
  );
}

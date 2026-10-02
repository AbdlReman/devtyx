import type { Metadata } from "next";
import MobileAppConsultationContent from "@/components/mobile-app-consultation/MobileAppConsultationContent";
import { faqItems } from "@/components/mobile-app-consultation/data/mobile-app-consultation-data";
import { getAllProjects } from "@/lib/models/project";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Mobile App Consulting Services",
  description:
    "DEVTYX mobile app development consulting gives you a clear strategy, the right technology and a realistic budget before you write a single line of code.",
  path: "/mobile-app-consultation",
  keywords: [
    "mobile app consulting services",
    "mobile app development consulting",
    "mobile app consultants",
    "app strategy consulting",
    "mobile app audit",
  ],
});

export default async function MobileAppConsultationPage() {
  const projectsResult = await getAllProjects().catch(() => []);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Mobile App Consultation", path: "/mobile-app-consultation" }])} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <MobileAppConsultationContent projects={projectsResult} />
    </>
  );
}

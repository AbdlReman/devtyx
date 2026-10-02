import type { Metadata } from "next";
import HybridAppDevelopmentContent from "@/components/hybrid-app-development/HybridAppDevelopmentContent";
import { faqCategories } from "@/components/hybrid-app-development/data/hybrid-app-development-data";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Hybrid App Development",
  description:
    "DEVTYX is a hybrid mobile app development company building cross-platform iOS, Android and web apps — plus mobile games — from one codebase, for clients in the USA and worldwide.",
  path: "/hybrid-app-development",
  keywords: [
    "hybrid mobile app development company",
    "hybrid app development company",
    "hybrid mobile app development services in usa",
    "hybrid mobile app development services",
    "hybrid app development services",
    "hybrid mobile application development company",
    "hybrid mobile application development services",
    "hybrid mobile app development company in usa",
    "hybrid mobile app development service",
    "hybrid mobile app development companies",
    "hybrid app development company usa",
    "hybrid app development company united states",
    "hybrid app development service",
    "hybrid application development company",
    "hybrid app design services",
    "enterprise app development services",
    "hybrid app development companies",
    "cross platform mobile game development",
    "hybrid application development services",
    "best software for mobile game development",
    "mobile app",
    "mobile game ui",
  ],
});

export default function HybridAppDevelopmentPage() {
  const allFaqs = faqCategories.flatMap((cat) => cat.items);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Hybrid App Development", path: "/hybrid-app-development" }])} />
      <JsonLd data={faqJsonLd(allFaqs)} />
      <HybridAppDevelopmentContent />
    </>
  );
}

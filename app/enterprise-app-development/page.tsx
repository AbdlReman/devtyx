import type { Metadata } from "next";
import EnterpriseAppDevelopmentContent from "@/components/enterprise-app-development/EnterpriseAppDevelopmentContent";
import { faqItems } from "@/components/enterprise-app-development/data/enterprise-app-development-data";
import { SITE_NAME, SITE_URL, breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Enterprise App Development Services",
  description:
    "DEVTYX enterprise application development services: secure, scalable web, mobile, cloud and AI apps that integrate with your systems. Free consultation.",
  path: "/enterprise-app-development",
  image: "/images/enterprise-app/professional-enterprise-software-development-3.jpg",
  keywords: [
    "enterprise app development services",
    "enterprise application development services",
    "enterprise application development company",
    "enterprise app development company",
    "custom enterprise software development",
    "enterprise mobile app development",
    "enterprise web application development",
    "legacy application modernization",
    "enterprise systems integration",
    "ERP and CRM integration",
    "cloud-native enterprise apps",
    "enterprise AI",
    "enterprise app development cost",
  ],
});

export default function EnterpriseAppDevelopmentPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Enterprise App Development", path: "/enterprise-app-development" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Enterprise App Development Services",
          description:
            "Secure, scalable enterprise web, mobile, cloud and AI applications with systems integration, legacy modernization and senior-led delivery.",
          url: `${SITE_URL}/enterprise-app-development`,
          image: `${SITE_URL}/images/enterprise-app/professional-enterprise-software-development-3.jpg`,
          provider: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
        }}
      />
      <JsonLd data={faqJsonLd(faqItems)} />
      <EnterpriseAppDevelopmentContent />
    </>
  );
}

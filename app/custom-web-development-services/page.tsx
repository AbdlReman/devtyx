import type { Metadata } from "next";
import CustomWebDevelopmentContent from "@/components/custom-web-development/CustomWebDevelopmentContent";
import { faqItems } from "@/components/custom-web-development/data/custom-web-development-data";
import { SITE_NAME, SITE_URL, breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Custom Web Development Services & Web Apps",
  description:
    "DEVTYX builds custom websites, web apps and portals with Next.js, React and Node.js. Senior-led team, clear packages, you own the code. Get a quote.",
  path: "/custom-web-development-services",
  image: "/images/services/web.jpg",
  keywords: [
    "custom web development services",
    "custom website development services",
    "custom web application development",
    "custom web development company",
    "bespoke web development",
    "SaaS platform development",
    "customer portal development",
    "Next.js web development",
  ],
});

export default function CustomWebDevelopmentServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Custom Web Development Services", path: "/custom-web-development-services" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Custom Web Development Services",
          description:
            "Custom websites, web applications, portals and SaaS platforms built with Next.js, React and Node.js — senior-led delivery, clear packages, full code ownership.",
          url: `${SITE_URL}/custom-web-development-services`,
          image: `${SITE_URL}/images/services/web.jpg`,
          provider: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
        }}
      />
      <JsonLd data={faqJsonLd(faqItems)} />
      <CustomWebDevelopmentContent />
    </>
  );
}

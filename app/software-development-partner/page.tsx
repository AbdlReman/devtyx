import type { Metadata } from "next";
import SoftwareDevelopmentPartnerContent from "@/components/software-development-partner/SoftwareDevelopmentPartnerContent";
import { faqItems } from "@/components/software-development-partner/data/software-development-partner-data";
import { SITE_NAME, SITE_URL, breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Software Development Partner Company",
  description:
    "DEVTYX is a software development partner that plans, builds and scales your web, mobile, cloud and AI products. Senior-led team, NDA, you own the IP.",
  path: "/software-development-partner",
  image: "/images/software-development-partners/professional-hero-image-2.jpg",
  keywords: [
    "software development partner",
    "software development partner company",
    "outsourced software development partner",
    "technology partner for software development",
    "custom software development company",
    "dedicated development team",
    "team augmentation",
    "MVP development",
    "long-term technology partner",
  ],
});

export default function SoftwareDevelopmentPartnerPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Software Development Partner", path: "/software-development-partner" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Software Development Partner",
          description:
            "Long-term software development partnership for web, mobile, cloud and AI products — discovery through delivery, support and growth.",
          url: `${SITE_URL}/software-development-partner`,
          image: `${SITE_URL}/images/software-development-partners/professional-hero-image-2.jpg`,
          provider: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
        }}
      />
      <JsonLd data={faqJsonLd(faqItems)} />
      <SoftwareDevelopmentPartnerContent />
    </>
  );
}

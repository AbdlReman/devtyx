import type { Metadata } from "next";
import NativeAppDevelopmentContent from "@/components/native-app-development/NativeAppDevelopmentContent";
import { faqCategories } from "@/components/native-app-development/data/native-app-development-data";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Native Mobile App Development Services USA",
  description:
    "DEVTYX offers native mobile app development services for US businesses. iOS, Android & React Native apps built to scale. Book a free discovery call.",
  path: "/native-app-development",
  keywords: [
    "native mobile app development services",
    "native mobile app development services usa",
    "react native mobile app development services",
    "react native app development services",
    "native app development services",
    "native app development company",
    "native mobile app development company",
    "native app development company usa",
    "outsource react native app development services",
    "cross platform mobile development services",
    "native vs cross platform app development",
    "what are native app development services",
    "ios app development",
    "android app development",
  ],
});

export default function NativeAppDevelopmentPage() {
  const allFaqs = faqCategories.flatMap((cat) => cat.items);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Native App Development", path: "/native-app-development" }])} />
      <JsonLd data={faqJsonLd(allFaqs)} />
      <NativeAppDevelopmentContent />
    </>
  );
}

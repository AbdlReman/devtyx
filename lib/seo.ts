import type { Metadata } from "next";

export const SITE_NAME = "DEVTYX";
export const SITE_URL = "https://www.devtyx.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image`;
export const BUSINESS_EMAIL = "support@devtyx.com";
export const BUSINESS_PHONE = "+92-302-005-8237";
export const BUSINESS_PHONE_E164 = "+923020058237";
export const BUSINESS_ADDRESS = {
  streetAddress: "3217 Blackstone Run",
  addressLocality: "Lawrenceville",
  addressRegion: "GA",
  postalCode: "30043",
  addressCountry: "US",
  /** Single-line NAP string used in footer / contact UI */
  formatted: "3217 Blackstone Run, Lawrenceville, GA 30043",
} as const;

export const SOCIAL_PROFILES = [
  "https://www.facebook.com/devtyx/",
  "https://www.instagram.com/thedevtyx/",
  "https://www.linkedin.com/company/devtyx",
  "https://clutch.co/profile/devtyx",
  "https://www.goodfirms.co/company/devtyx",
  "https://techbehemoths.com/company/devtyx",
] as const;

export const DEFAULT_KEYWORDS = [
  "DEVTYX",
  "IT services",
  "web development",
  "mobile app development",
  "cloud solutions",
  "AI solutions",
  "digital transformation",
  "software development company",
];

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

/** Prefer absolute titles so the root template does not double-append "| DEVTYX". */
function absoluteTitle(title: string): string {
  if (title.includes(SITE_NAME)) return title;
  return `${title} | ${SITE_NAME}`;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image,
  type = "website",
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : DEFAULT_OG_IMAGE;
  const fullTitle = absoluteTitle(title);

  return {
    title: { absolute: fullTitle },
    description,
    keywords: keywords && keywords.length ? [...keywords, ...DEFAULT_KEYWORDS] : DEFAULT_KEYWORDS,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_NAME }],
      type,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: "DEVTYX LLC",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    email: BUSINESS_EMAIL,
    telephone: BUSINESS_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_ADDRESS.streetAddress,
      addressLocality: BUSINESS_ADDRESS.addressLocality,
      addressRegion: BUSINESS_ADDRESS.addressRegion,
      postalCode: BUSINESS_ADDRESS.postalCode,
      addressCountry: BUSINESS_ADDRESS.addressCountry,
    },
    sameAs: [...SOCIAL_PROFILES],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function serviceJsonLd(service: { title: string; description: string; slug: string; image: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    image: service.image,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function blogPostingJsonLd(post: {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  date: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: DEFAULT_OG_IMAGE,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function creativeWorkJsonLd(project: {
  title: string;
  description: string;
  slug: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${SITE_URL}/portfolio/${project.slug}`,
    image: project.image,
    creator: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

import { googleReviewsUrl } from "@/components/about/data/about-data";

export { googleReviewsUrl };

export const clutchProfileUrl = "https://clutch.co/profile/devtyx";
export const goodFirmsProfileUrl = "https://www.goodfirms.co/company/devtyx";
export const techBehemothsUrl = "https://techbehemoths.com/company/devtyx";

export const reviewPlatforms = [
  {
    id: "google",
    name: "Google Reviews",
    description: "Read verified client feedback on our Google Business Profile.",
    href: googleReviewsUrl,
    cta: "See Google reviews",
    accent: "#4285F4",
  },
  {
    id: "clutch",
    name: "Clutch",
    description: "Explore our Clutch profile for ratings, project work, and client reviews.",
    href: clutchProfileUrl,
    cta: "View Clutch profile",
    accent: "#FF3D2E",
  },
  {
    id: "goodfirms",
    name: "GoodFirms",
    description: "See our GoodFirms company profile, services focus, and client ratings.",
    href: goodFirmsProfileUrl,
    cta: "View GoodFirms profile",
    accent: "#2E7D32",
  },
  {
    id: "techbehemoths",
    name: "TechBehemoths",
    description: "Visit our TechBehemoths company profile and verification page.",
    href: techBehemothsUrl,
    cta: "View TechBehemoths",
    accent: "#0EA5E9",
  },
] as const;

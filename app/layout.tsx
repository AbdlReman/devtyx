import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppChrome from "@/components/layout/AppChrome";
import AuthProvider from "@/components/providers/AuthProvider";
import { DEFAULT_KEYWORDS, SITE_NAME, SITE_URL, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const GA_MEASUREMENT_ID = "G-BKQH7SGZV8";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DEVTYX | Innovative IT & Digital Transformation Partner",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "DEVTYX is a technology partner for web, mobile, cloud, and AI solutions, helping businesses accelerate digital transformation.",
  keywords: DEFAULT_KEYWORDS,
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    other: {
      "msvalidate.01": "D91FC5C306D0252D6C51A5E94DB290BE",
      "ahrefs-site-verification": "7525b26e99bc525679ea2e2a8ee756599296f27126f2aa454d7ad7ac1207e726",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="KFFDhxFRAIbAHPx4l9ARgQ"
          strategy="afterInteractive"
        />
        <AuthProvider>
          <AppChrome>{children}</AppChrome>
        </AuthProvider>
      </body>
    </html>
  );
}

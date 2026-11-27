import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    serverActions: {
      // lib/actions/upload.ts allows images up to 8MB, but Next's default
      // Server Action body limit is 1MB — anything larger than that gets
      // rejected by the framework itself with a generic 400, before the
      // upload action's own size check ever runs.
      bodySizeLimit: "10mb",
    },
  },
  images: {
    // Keep the optimizer off. Re-enabling it caused intermittent blank
    // images site-wide (`isn't a valid image … received null`) on local
    // assets under concurrent page loads. Images still render via their
    // original /images/* (and Cloudinary) URLs; arbitrary pasted admin
    // URLs also keep working without a remotePatterns allowlist.
    unoptimized: true,
  },
  async redirects() {
    return [
      // Portfolio slugs must be lowercase; live DB still has "Matrimonial".
      {
        source: "/portfolio/Matrimonial",
        destination: "/portfolio/matrimonial",
        permanent: true,
      },
      {
        source: "/services/enterprise-app-development",
        destination: "/enterprise-app-development",
        permanent: true,
      },
    ];
  },
  async headers() {
    // Conservative, crawl-safe headers only — no CSP here, since one broad
    // enough to allow GA, the TinyMCE/Cloudinary admin uploads, and
    // arbitrary externally-hosted image URLs would be too permissive to be
    // worth adding, and a tight one risks silently breaking those features.
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

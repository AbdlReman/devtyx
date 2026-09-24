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
    // Local assets and Cloudinary uploads (the normal upload path) get
    // resized/reformatted (WebP/AVIF) through Next's image optimizer.
    // Admin fields also accept an arbitrary pasted URL though, and Next
    // can't optimize a host it doesn't know about — those fall back to
    // `unoptimized` on the individual <Image>, via isOptimizableImageSrc()
    // in lib/image.ts, instead of erroring at request time.
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
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

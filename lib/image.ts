// Admin-editable image fields (project/service/post) accept either a local
// upload (Cloudinary) or a manually pasted URL from anywhere. Next's image
// optimizer can only fetch/resize hosts it's explicitly told about, so any
// src outside that allowlist has to render unoptimized instead of erroring.
const OPTIMIZABLE_HOSTS = new Set(["res.cloudinary.com"]);

export function isOptimizableImageSrc(src: string): boolean {
  if (src.startsWith("/")) return true;
  try {
    return OPTIMIZABLE_HOSTS.has(new URL(src).hostname);
  } catch {
    return false;
  }
}

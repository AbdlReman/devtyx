import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/models/blog";
import { isOptimizableImageSrc } from "@/lib/image";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="lt-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div className="lt-card-img">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover object-center"
          unoptimized={!isOptimizableImageSrc(post.image)}
        />
      </div>
      <div className="lt-card-body" style={{ flex: 1 }}>
        <div className="lt-card-title">{post.title}</div>
        <div className="lt-card-excerpt" style={{ flex: 1, WebkitLineClamp: 3, display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {post.excerpt}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
          <span className="lt-card-meta">{post.author}</span>
          <span className="lt-card-read">Read article →</span>
        </div>
      </div>
    </Link>
  );
}

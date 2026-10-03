import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/models/blog";
import { isOptimizableImageSrc } from "@/lib/image";

export default function MusicRelatedBlogSection({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
          <div>
            <div className="lt-kicker">From the Blog</div>
            <h2 className="lt-h2" style={{ margin: 0 }}>Music app insights worth reading.</h2>
          </div>
          <Link href="/blog" className="lt-btn">
            Get Industry Insights →
          </Link>
        </div>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}
          className="lt-portfolio-grid">
          {posts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="lt-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
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
                <div className="lt-card-excerpt" style={{ WebkitLineClamp: 3, display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {post.excerpt}
                </div>
                <span className="lt-card-read" style={{ marginTop: "0.5rem" }}>Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

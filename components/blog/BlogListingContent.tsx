"use client";

import { useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import type { BlogPost } from "@/lib/models/blog";

const POSTS_PER_PAGE = 15;

export default function BlogListingContent({ posts }: { posts: BlogPost[] }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

  const visiblePosts = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return posts.slice(start, start + POSTS_PER_PAGE);
  }, [posts, page]);

  function goToPage(next: number) {
    const clamped = Math.min(Math.max(next, 1), totalPages);
    setPage(clamped);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="min-h-screen">
      <main>

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="hero-purple-section" style={{ paddingBottom: "5rem" }}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 75% 35%, rgba(14,165,233,0.2) 0%, transparent 45%)",
            }}
          />
          <div className="brelyx-container" style={{ position: "relative" }}>
            <div className="hero-p-badge">● Insights &amp; Ideas</div>
            <h1 className="hero-p-h1">The DEVTYX Blog</h1>
            <p className="hero-p-sub">
              Practical notes on engineering, product delivery, AI, and design — from the team building
              digital products for ambitious companies.
            </p>
          </div>
        </section>

        {/* ── Blog grid ─────────────────────────────────────── */}
        <section className="lt-section">
          <div className="brelyx-container">
            <div style={{ display: "grid", gap: "1.75rem", gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}
              className="lt-portfolio-grid">
              {visiblePosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            {totalPages > 1 && (
              <nav className="lt-pagination" aria-label="Blog pagination">
                <button
                  type="button"
                  className="lt-pagination-btn"
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 1}
                  aria-label="Previous page"
                >
                  ←
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`lt-pagination-btn${n === page ? " lt-pagination-btn--active" : ""}`}
                    onClick={() => goToPage(n)}
                    aria-current={n === page ? "page" : undefined}
                  >
                    {n}
                  </button>
                ))}

                <button
                  type="button"
                  className="lt-pagination-btn"
                  onClick={() => goToPage(page + 1)}
                  disabled={page === totalPages}
                  aria-label="Next page"
                >
                  →
                </button>
              </nav>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}

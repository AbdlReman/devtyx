"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/models/project";
import { isOptimizableImageSrc } from "@/lib/image";

const ACTORS_BY_CATEGORY: Record<string, string[]> = {
  Education: ["Student", "Teacher", "Admin"],
  "E-commerce": ["Customer / Buyer", "Seller", "Admin"],
  Healthcare: ["Patient", "Doctor", "Clinic Admin"],
  "Real Estate": ["Buyer", "Agent", "Admin"],
  Matrimonial: ["Member", "Vendor", "Admin"],
  Blog: ["Reader", "Publisher", "Admin"],
  Fintech: ["User", "Analyst", "Admin"],
  Travel: ["Traveler", "Partner", "Admin"],
};

function getActors(project: Project): string[] {
  return ACTORS_BY_CATEGORY[project.category] ?? ["User", "Admin"];
}

function getPlatformTag(project: Project): string {
  const tech = (project.tech ?? []).join(" ").toLowerCase();
  if (/react native|flutter|ios|android|swift|kotlin/.test(tech)) return "MOBILE";
  if (/tensorflow|pytorch|openai|llm|ai | ml /.test(tech)) return "AI";
  return "WEB";
}

export default function HomeCaseStudiesSection({ projects }: { projects: Project[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  );

  const [activeCategory, setActiveCategory] = useState("All");
  const [active, setActive] = useState(0);

  const filtered = useMemo(() => {
    const list =
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory);
    return list.slice(0, 8);
  }, [projects, activeCategory]);

  if (projects.length === 0) return null;

  const safeIndex = filtered.length === 0 ? 0 : active % filtered.length;
  const cs = filtered[safeIndex];

  const selectCategory = (cat: string) => {
    setActiveCategory(cat);
    setActive(0);
  };

  const prev = () => {
    if (filtered.length === 0) return;
    setActive((a) => (a - 1 + filtered.length) % filtered.length);
  };

  const next = () => {
    if (filtered.length === 0) return;
    setActive((a) => (a + 1) % filtered.length);
  };

  const features = (cs?.features ?? []).slice(0, 6);
  const actors = cs ? getActors(cs) : [];
  const platformTag = cs ? getPlatformTag(cs) : "WEB";

  return (
    <section className="lt-section home-portfolio-section">
      <div className="brelyx-container">
        <div className="home-portfolio-header">
          <div className="lt-kicker">Portfolio</div>
          <h2 className="lt-h2">
            Innovation Built. Impact{" "}
            <span className="home-portfolio-accent">Delivered.</span>
          </h2>
          <p className="lt-lead">
            Explore a selection of AI solutions, digital platforms, and technology products
            we&apos;ve engineered for clients across industries.
          </p>
        </div>

        <div className="home-portfolio-filters" role="tablist" aria-label="Portfolio categories">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`lt-filter-tab${activeCategory === cat ? " active" : ""}`}
              onClick={() => selectCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {cs ? (
          <div className="home-portfolio-showcase" key={cs.id}>
            <div className="home-portfolio-media">
              <div className="home-portfolio-image-wrap">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover object-top"
                  unoptimized={!isOptimizableImageSrc(cs.image)}
                  sizes="(max-width: 900px) 100vw, 55vw"
                />
              </div>
            </div>

            <div className="home-portfolio-details">
              <div className="home-portfolio-category">{cs.category}</div>
              <h3 className="home-portfolio-title">{cs.title}</h3>
              <p className="home-portfolio-desc">{cs.description || cs.tagline}</p>

              {features.length > 0 && (
                <div className="home-portfolio-block">
                  <div className="home-portfolio-block-label">Functionalities</div>
                  <ul className="home-portfolio-features">
                    {features.map((feature) => (
                      <li key={feature}>
                        <span className="home-portfolio-check" aria-hidden="true">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M5 13l4 4L19 7"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {actors.length > 0 && (
                <div className="home-portfolio-block">
                  <div className="home-portfolio-block-label">Actors</div>
                  <div className="home-portfolio-pills">
                    {actors.map((actor) => (
                      <span key={actor} className="home-portfolio-pill">
                        {actor}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="home-portfolio-block">
                <div className="home-portfolio-block-label">Tags</div>
                <div className="home-portfolio-pills">
                  <span className="home-portfolio-tag">{platformTag}</span>
                  {(cs.tech ?? []).slice(0, 2).map((t) => (
                    <span key={t} className="home-portfolio-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="home-portfolio-cta">
                <Link href={`/portfolio/${cs.slug}`} className="lt-btn home-portfolio-view-btn">
                  View Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M7 17L17 7M17 7H9M17 7v8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link href="/portfolio" className="home-portfolio-full-link">
                  Full portfolio
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="home-portfolio-empty">No projects found in this category.</div>
        )}

        {filtered.length > 1 && (
          <div className="home-portfolio-nav">
            <button type="button" className="lt-proj-arrow" onClick={prev} aria-label="Previous project">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="home-portfolio-bars" role="tablist" aria-label="Project slides">
              {filtered.map((project, i) => (
                <button
                  key={project.id}
                  type="button"
                  aria-label={`Show ${project.title}`}
                  aria-current={i === safeIndex ? "true" : undefined}
                  className={`home-portfolio-bar${i === safeIndex ? " active" : ""}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>

            <button type="button" className="lt-proj-arrow" onClick={next} aria-label="Next project">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

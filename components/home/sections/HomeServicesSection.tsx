"use client";

import Link from "next/link";
import { specializedServices } from "@/lib/data/specialized-services";
import { services } from "../data/home-data";

export default function HomeServicesSection() {
  const featured = services.slice(0, 3);

  return (
    <section id="services" className="lt-section-alt">
      <div className="brelyx-container">
        {/* Centered header */}
        <div className="lt-svc-header">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">What We Build</div>
          </div>
          <h2 className="lt-h2 lt-center" style={{ marginBottom: "1rem" }}>
            End-to-End Digital Products{" "}
            <br />
            That Drive Growth
          </h2>
          <p className="lt-lead lt-center" style={{ maxWidth: "500px", margin: "0 auto" }}>
            From strategy to deployment, we deliver web, mobile, cloud, and AI solutions that
            help ambitious teams ship faster and scale with confidence.
          </p>
        </div>

        {/* 3-column service cards */}
        <div className="lt-svc-grid">
          {featured.map((svc, i) => (
            <Link
              key={svc.title}
              href="/services"
              className={`lt-svc-card ${i === 1 ? "lt-svc-card-active" : ""}`}
            >
              <div className="lt-svc-icon">{svc.icon}</div>
              <h3 className="lt-svc-title">{svc.title}</h3>
              <p className="lt-svc-desc">{svc.description}</p>
              <span className="lt-svc-link">Get Started <span>→</span></span>
            </Link>
          ))}
        </div>

        {/* Specialized mobile landing pages */}
        <div style={{ marginTop: "3.5rem" }}>
          <p
            className="lt-lead lt-center"
            style={{ maxWidth: "520px", margin: "0 auto 1.5rem", fontSize: "0.95rem" }}
          >
            Explore our specialized offerings:
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.65rem",
            }}
          >
            {specializedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="lt-tech-tag"
                style={{
                  textDecoration: "none",
                  padding: "0.55rem 1rem",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                }}
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* All services link */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link href="/services" className="lt-btn">View All Services →</Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { trustStats } from "../data/custom-web-development-data";

const HERO_BG = "/images/services/web.jpg";

export default function WebHeroSection() {
  return (
    <section
      className="hero-purple-section"
      style={{
        textAlign: "left",
        paddingTop: "10rem",
        paddingBottom: "5rem",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `linear-gradient(105deg, rgba(8,6,28,0.78) 0%, rgba(15,10,45,0.58) 50%, rgba(8,6,28,0.4) 100%), url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="brelyx-container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "740px" }}>
          <div className="hero-p-badge" style={{ margin: "0 0 2rem" }}>
            ● Custom Web Development Services
          </div>
          <h1
            className="hero-p-h1"
            style={{ margin: "0 0 1.5rem", maxWidth: "none", fontSize: "clamp(1.75rem, 3.6vw, 2.95rem)" }}
          >
            Custom Web Development Services: Websites and Web Apps Built to Fit Your Business
          </h1>
          <p className="hero-p-sub" style={{ margin: "0 0 2.25rem", maxWidth: "600px" }}>
            DEVTYX designs, engineers, launches and supports custom websites, web applications,
            customer portals and SaaS platforms — built around your workflows, customers and growth
            plans, not the limits of a plugin.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.25rem" }}>
            <QuickInquiryButton
              className="hero-p-btn"
              source="Custom Web Development Services"
              defaultMessage="I'd like a free quote for custom web development services. "
            >
              Get a Free Project Quote →
            </QuickInquiryButton>
            <Link href="/portfolio" className="hero-p-ghost">
              See Our Web Projects
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            {trustStats.map(({ num, label }, i) => (
              <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem" }}>
                <span>
                  <span style={{ color: "#93E2F9" }}>{num}</span> {label}
                </span>
                {i < trustStats.length - 1 && <span style={{ opacity: 0.4 }}>·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

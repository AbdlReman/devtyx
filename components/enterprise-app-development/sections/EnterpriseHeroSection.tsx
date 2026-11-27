import Image from "next/image";
import Link from "next/link";
import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { trustStats } from "../data/enterprise-app-development-data";

export default function EnterpriseHeroSection() {
  return (
    <section
      className="hero-purple-section"
      style={{
        textAlign: "left",
        paddingBottom: "5rem",
        position: "relative",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      {/* Full-bleed background image */}
      <Image
        src="/images/enterprise-app/professional-enterprise-software-development-3.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />

      {/* Dark overlay for readable text */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(105deg, rgba(15,10,40,0.92) 0%, rgba(26,12,70,0.82) 48%, rgba(15,10,40,0.55) 100%)",
        }}
      />

      <div className="brelyx-container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "700px" }}>
          <div className="hero-p-badge" style={{ margin: "0 0 2rem" }}>
            ● Enterprise App Development
          </div>
          <h1
            className="hero-p-h1"
            style={{ margin: "0 0 1.5rem", maxWidth: "none", fontSize: "clamp(1.85rem, 3.8vw, 3.1rem)" }}
          >
            Enterprise App Development Services Built{" "}
            <br />
            to Scale, Integrate and Stay Secure
          </h1>
          <p className="hero-p-sub" style={{ margin: "0 0 2.25rem", maxWidth: "560px" }}>
            DEVTYX provides enterprise app development services for organizations that have outgrown
            spreadsheets, disconnected tools and off-the-shelf software. We design, build, integrate and
            modernize business-critical web, mobile, cloud and AI applications — with one senior-led team
            from discovery to production support.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.25rem" }}>
            <QuickInquiryButton
              className="hero-p-btn"
              source="Enterprise App Development"
              defaultMessage="I'm interested in enterprise app development services. "
            >
              Book a Free Enterprise Consultation →
            </QuickInquiryButton>
            <Link href="/portfolio" className="hero-p-ghost">
              See Our Work
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

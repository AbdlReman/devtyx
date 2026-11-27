import Link from "next/link";
import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { trustStats } from "../data/enterprise-app-development-data";

const HERO_BG = "/images/enterprise-app/professional-enterprise-software-development-3.jpg";

export default function EnterpriseHeroSection() {
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

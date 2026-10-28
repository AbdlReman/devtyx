import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { googleReviewsUrl } from "@/components/about/data/about-data";

const outcomeCards = [
  { label: "Same-day bookings", value: "+38%", hint: "after app launch" },
  { label: "No-show rate", value: "−42%", hint: "with deposits + reminders" },
  { label: "Admin time saved", value: "12 hrs", hint: "per week on scheduling" },
];

const proofChips = [
  { num: "70+", label: "Products" },
  { num: "23+", label: "Countries" },
  { num: "98%", label: "Satisfaction" },
];

export default function SalonHeroSection() {
  return (
    <section
      className="hero-purple-section"
      style={{ textAlign: "left", paddingBottom: "4.5rem", paddingTop: "8.5rem" }}
    >
      <div className="pointer-events-none" aria-hidden="true">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 55% at 12% 35%, rgba(192,132,252,0.18) 0%, transparent 55%), radial-gradient(ellipse 55% 50% at 88% 20%, rgba(63,224,208,0.12) 0%, transparent 50%), radial-gradient(ellipse 40% 40% at 70% 80%, rgba(108,76,255,0.16) 0%, transparent 60%)",
          }}
        />
        <div className="hero-grid-bg" style={{ opacity: 0.35 }} />
        <div className="hero-bottom-fade" />
      </div>

      <div className="brelyx-container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gap: "2.75rem",
            gridTemplateColumns: "1.15fr 0.85fr",
            alignItems: "center",
          }}
          className="lt-split-heading"
        >
          <div>
            <div
              className="hero-p-badge"
              style={{ margin: "0 0 1.35rem", fontSize: "0.72rem", padding: "0.35rem 0.9rem" }}
            >
              <span className="hero-p-badge-dot" />
              Salon App Development Company
            </div>

            <h1
              className="hero-p-h1"
              style={{
                margin: "0 0 1rem",
                maxWidth: "34rem",
                fontSize: "clamp(1.65rem, 3.2vw, 2.55rem)",
                lineHeight: 1.18,
                letterSpacing: "-0.03em",
                fontWeight: 800,
              }}
            >
              Salon App Development Company That{" "}
              <span className="hero-p-h1-gradient">Fills Chairs and Reduces No-Shows</span>
            </h1>

            <p
              className="hero-p-sub"
              style={{
                margin: "0 0 0.85rem",
                maxWidth: "32rem",
                fontSize: "0.92rem",
                lineHeight: 1.7,
              }}
            >
              Clients book hair, spa, and beauty services at 11 p.m. from their phones. Salons that still
              rely on phone calls and paper books lose those bookings to competitors with smooth apps.
            </p>

            <p
              className="hero-p-sub"
              style={{
                margin: "0 0 1.75rem",
                maxWidth: "32rem",
                fontSize: "0.88rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.52)",
              }}
            >
              Devtyx is a salon app development company that builds custom booking and management platforms
              for single-location salons, multi-branch chains, and beauty marketplaces — with real-time
              scheduling, secure payments, staff tools, and AI recommendations.
            </p>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
              <QuickInquiryButton
                className="hero-p-btn"
                source="Salon App Development"
                defaultMessage="I'd like to schedule a free 30-minute strategy call about a salon booking app. "
                style={{ fontSize: "0.88rem", padding: "0.85rem 1.35rem" }}
              >
                Schedule a Free Strategy Call →
              </QuickInquiryButton>
              <QuickInquiryButton
                className="hero-p-ghost"
                source="Salon App Development"
                defaultMessage="I'd like a custom quote for a salon app. "
                style={{ fontSize: "0.88rem", padding: "0.85rem 1.25rem" }}
              >
                Get a Custom Quote
              </QuickInquiryButton>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                flexWrap: "wrap",
                marginBottom: "1.25rem",
              }}
            >
              {proofChips.map((chip, i) => (
                <span key={chip.label} style={{ display: "inline-flex", alignItems: "center", gap: "0.65rem" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>
                    <span style={{ color: "#C4B5FD" }}>{chip.num}</span> {chip.label}
                  </span>
                  {i < proofChips.length - 1 && (
                    <span style={{ opacity: 0.35, color: "#fff", fontSize: "0.75rem" }}>·</span>
                  )}
                </span>
              ))}
            </div>

            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
              }}
            >
              <span style={{ color: "#FBBF24" }}>★★★★★</span>
              Rated by real clients — Google reviews
            </a>
          </div>

          <div style={{ position: "relative" }}>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "-12% -8%",
                background: "radial-gradient(circle at 50% 40%, rgba(192,132,252,0.28) 0%, transparent 65%)",
                filter: "blur(8px)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "relative",
                borderRadius: "1.35rem",
                border: "1px solid rgba(255,255,255,0.14)",
                background: "linear-gradient(165deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)",
                backdropFilter: "blur(18px)",
                boxShadow: "0 28px 70px rgba(2,14,36,0.45)",
                padding: "1.35rem",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.15rem",
                  gap: "0.75rem",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "rgba(196,181,253,0.9)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    Booking outcomes
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff" }}>
                    What a custom salon app unlocks
                  </div>
                </div>
                <div
                  style={{
                    width: "2.4rem",
                    height: "2.4rem",
                    borderRadius: "0.75rem",
                    background: "rgba(108,76,255,0.35)",
                    border: "1px solid rgba(196,181,253,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    flexShrink: 0,
                  }}
                >
                  💇
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {outcomeCards.map((card) => (
                  <div
                    key={card.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      padding: "0.9rem 1rem",
                      borderRadius: "0.9rem",
                      background: "rgba(2,14,36,0.35)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.92)" }}>
                        {card.label}
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", marginTop: "0.15rem" }}>
                        {card.hint}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 800,
                        color: "#C4B5FD",
                        letterSpacing: "-0.02em",
                        flexShrink: 0,
                      }}
                    >
                      {card.value}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "1rem",
                  paddingTop: "0.95rem",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.45rem",
                }}
              >
                {["Live slots", "Deposits", "SMS + push", "Loyalty"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.7)",
                      padding: "0.28rem 0.65rem",
                      borderRadius: "999px",
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(255,255,255,0.05)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

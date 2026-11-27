import Link from "next/link";

export default function ReviewsCtaSection() {
  return (
    <div className="dark-cta-band">
      <div className="brelyx-container">
        <h2 className="dark-cta-h2">
          Ready to become our{" "}
          <br />
          next success story?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "0.97rem",
            lineHeight: 1.8,
            maxWidth: "480px",
            margin: "0 auto 2rem",
          }}
        >
          Tell us about your project — we&apos;ll reply within one business day.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/contact" className="dark-cta-btn">
            Start a Conversation →
          </Link>
          <Link href="/portfolio" className="reviews-cta-ghost">
            See Our Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

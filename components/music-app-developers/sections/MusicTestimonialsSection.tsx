import { testimonials, googleReviewsUrl } from "@/components/about/data/about-data";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export default function MusicTestimonialsSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Client Stories</div>
          </div>
          <h2 className="lt-h2">Trusted by 120+ clients across 23+ countries.</h2>
          <p className="lt-lead">
            We let our work speak for itself — read genuine, unedited reviews from the clients we&apos;ve built for.
          </p>
        </div>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}
          className="lt-testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="lt-testimonial-card" style={{ justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", gap: "0.15rem", marginBottom: "1rem" }}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <span key={s} style={{ color: "#F59E0B", fontSize: "1rem" }}>★</span>
                  ))}
                </div>
                <blockquote style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "#374151", marginBottom: "1.5rem" }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.875rem",
                paddingTop: "1.25rem",
                borderTop: "1px solid #F3F4F6",
              }}>
                <div style={{
                  position: "relative",
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  overflow: "hidden",
                  flexShrink: 0,
                  border: "2px solid #E0F4FD",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#E0F4FD",
                  color: "#6C4CFF",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                }}>
                  {getInitials(t.author)}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#111827" }}>{t.author}</div>
                  <div style={{ fontSize: "0.72rem", color: "#9CA3AF" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "999px",
              border: "1px solid #E5E7EB",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#111827",
              textDecoration: "none",
              background: "#FFFFFF",
            }}
          >
            <span style={{ color: "#F59E0B" }}>★★★★★</span>
            See all our reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}

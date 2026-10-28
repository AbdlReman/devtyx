import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { costGuide } from "../data/salon-app-development-data";

export default function SalonCostGuideSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Pricing</div>
          </div>
          <h2 className="lt-h2">Salon app development cost guide (2026)</h2>
          <p className="lt-lead" style={{ margin: "1rem auto 0" }}>
            Typical custom ranges (senior-led team). Exact pricing depends on platforms, integrations, and
            design complexity.
          </p>
        </div>

        <div
          style={{
            overflowX: "auto",
            border: "1px solid #E5E7EB",
            borderRadius: "1.25rem",
            background: "#FFFFFF",
            marginBottom: "2rem",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "680px" }}>
            <thead>
              <tr style={{ background: "#F0FBFF" }}>
                {["Scope", "Key Features", "Timeline", "Estimated Cost"].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: "left",
                      padding: "1rem 1.25rem",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "#6C4CFF",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {costGuide.map((row, i) => (
                <tr key={row.scope} style={{ borderTop: i === 0 ? "none" : "1px solid #F3F4F6" }}>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.85rem", fontWeight: 700, color: "#111827" }}>
                    {row.scope}
                  </td>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.82rem", color: "#6B7280" }}>{row.features}</td>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.82rem", color: "#6B7280" }}>{row.timeline}</td>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.9rem", fontWeight: 700, color: "#6C4CFF" }}>
                    {row.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "0.88rem",
            color: "#6B7280",
            lineHeight: 1.7,
            maxWidth: "640px",
            margin: "0 auto 2rem",
          }}
        >
          We provide a detailed fixed-price or milestone quote after a short discovery call — no surprise
          invoices. Whether you need a salon management app or a full beauty salon app development build,
          we scope only what drives results.
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <QuickInquiryButton
            className="lt-btn"
            source="Salon App Development"
            defaultMessage="I'd like a free cost estimate for a salon booking app. "
          >
            Request a Free Cost Estimate →
          </QuickInquiryButton>
        </div>
      </div>
    </section>
  );
}

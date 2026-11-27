import Link from "next/link";
import { engagementModels } from "../data/software-development-partner-data";

export default function PartnerEngagementSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Engagement</div>
          </div>
          <h2 className="lt-h2">Engagement Models: Choose How We Partner</h2>
          <p className="lt-lead">
            Start with discovery or a fixed-scope MVP, then move to a dedicated team as the product
            grows — or plug senior specialists into your in-house squad.
          </p>
        </div>

        <div
          style={{
            borderRadius: "1.5rem",
            overflow: "hidden",
            border: "1px solid #E5E7EB",
            boxShadow: "0 20px 50px rgba(108,76,255,0.12)",
            marginBottom: "2.75rem",
            background: "#0B1220",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/software-development-partners/professional-engagement-models-3.jpg"
            alt="Engagement models: fixed scope, dedicated team, team augmentation, retainer"
            width={1600}
            height={900}
            loading="lazy"
            style={{ width: "100%", height: "auto", maxWidth: "100%", display: "block" }}
          />
        </div>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "640px",
              background: "#fff",
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid #E5E7EB",
            }}
          >
            <thead>
              <tr style={{ background: "#F9FAFB", textAlign: "left" }}>
                {["Model", "How it works", "Best for"].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "1rem 1.25rem",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#6B7280",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      borderBottom: "1px solid #E5E7EB",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {engagementModels.map((row) => (
                <tr key={row.model}>
                  <td
                    style={{
                      padding: "1.1rem 1.25rem",
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      color: "#111827",
                      borderBottom: "1px solid #F3F4F6",
                      verticalAlign: "top",
                      width: "24%",
                    }}
                  >
                    {row.model}
                  </td>
                  <td
                    style={{
                      padding: "1.1rem 1.25rem",
                      fontSize: "0.88rem",
                      color: "#4B5563",
                      lineHeight: 1.65,
                      borderBottom: "1px solid #F3F4F6",
                      verticalAlign: "top",
                    }}
                  >
                    {row.how}
                  </td>
                  <td
                    style={{
                      padding: "1.1rem 1.25rem",
                      fontSize: "0.88rem",
                      color: "#4B5563",
                      lineHeight: 1.65,
                      borderBottom: "1px solid #F3F4F6",
                      verticalAlign: "top",
                      width: "28%",
                    }}
                  >
                    {row.bestFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          className="lt-lead"
          style={{
            textAlign: "center",
            marginTop: "2rem",
            maxWidth: "560px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          For typical budgets, see our guide to{" "}
          <Link href="/blog" style={{ color: "#6C4CFF", fontWeight: 600 }}>
            enterprise app development cost
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

import { engagementModels } from "../data/enterprise-app-development-data";

export default function EnterpriseEngagementSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Engagement</div>
          </div>
          <h2 className="lt-h2">Engagement Models</h2>
          <p className="lt-lead">
            Choose the model that fits your roadmap — fixed-price, dedicated team, augmentation or
            ongoing support.
          </p>
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
                      width: "22%",
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
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { approachTable } from "../data/app-development-for-startups-data";

export default function StartupApproachSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Choosing an Approach</div>
          </div>
          <h2 className="lt-h2">What Type of App Development Is Right for You?</h2>
          <p className="lt-lead">
            There is no single best approach. The right choice depends on your users, budget, timeline and
            what your product needs to do.
          </p>
        </div>

        <div style={{ position: "relative", aspectRatio: "16/8", borderRadius: "1.5rem", overflow: "hidden", border: "1px solid #E5E7EB", boxShadow: "0 20px 50px rgba(108,76,255,0.12)", marginBottom: "3rem" }}>
          <Image
            src="/images/startup-app-images/02-which-app-development-approach.webp"
            alt="Which app development approach is right for your startup: MVP, cross-platform, native, or progressive web app"
            fill
            className="object-cover object-center"
          />
        </div>

        <div style={{ overflowX: "auto", border: "1px solid #E5E7EB", borderRadius: "1.25rem", background: "#FFFFFF", marginBottom: "2rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "720px" }}>
            <thead>
              <tr style={{ background: "#F0FBFF" }}>
                {["Approach", "What It Means", "Best For Startups That…"].map((h) => (
                  <th key={h} style={{ textAlign: "left", padding: "1rem 1.25rem", fontSize: "0.72rem", fontWeight: 700, color: "#6C4CFF", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {approachTable.map((row, i) => (
                <tr key={row.approach} style={{ borderTop: i === 0 ? "none" : "1px solid #F3F4F6" }}>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.85rem", fontWeight: 700, color: "#111827" }}>{row.approach}</td>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.82rem", color: "#6B7280" }}>{row.means}</td>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.82rem", color: "#6B7280" }}>{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="lt-lead" style={{ maxWidth: "720px", margin: "0 auto 1.5rem", textAlign: "center" }}>
          <strong style={{ color: "#111827" }}>Our advice for most startups:</strong> start with an MVP,
          usually cross-platform, to reach both iOS and Android users quickly. Then invest in native features
          once you know what your users love. We will recommend the right approach on your strategy call,
          based on your goals rather than our preferences.
        </p>

        <div style={{ textAlign: "center" }}>
          <Link href="/native-app-development" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.65rem 1.4rem",
            borderRadius: "999px",
            border: "1px solid #E5E7EB",
            fontSize: "0.82rem",
            fontWeight: 600,
            color: "#111827",
            textDecoration: "none",
            background: "#FFFFFF",
          }}>
            Related: Native vs Cross-Platform App Development →
          </Link>
        </div>
      </div>
    </section>
  );
}

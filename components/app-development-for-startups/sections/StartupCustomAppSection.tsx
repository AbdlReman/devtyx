import Image from "next/image";

export default function StartupCustomAppSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ display: "grid", gap: "3rem", alignItems: "center" }}
          className="lt-split-heading">
          <div>
            <div className="lt-kicker">Built Around Your Business</div>
            <h2 className="lt-h2">Creating a Custom Mobile App That Matches Your Business and Audience Needs</h2>
            <p className="lt-lead" style={{ margin: "0 0 1rem" }}>
              Templates and app builders can get you started, but they rarely set you apart. Startup business
              mobile app development works best when the app is designed around your users, your business
              model and your growth plans.
            </p>
            <p className="lt-lead" style={{ margin: "0 0 1rem" }}>
              We start by understanding who your users are, what problem you solve for them and how your
              startup makes money. Every screen and feature is then designed to support those goals, whether
              that means a frictionless onboarding flow, a checkout that converts or a dashboard your
              customers check every day.
            </p>
            <p className="lt-lead" style={{ margin: 0 }}>
              The result is an app that feels like your brand, solves real problems and is built on a
              foundation that can grow from your first 100 users to your first million.
            </p>
          </div>
          <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: "1.5rem", overflow: "hidden", border: "1px solid #E5E7EB", boxShadow: "0 20px 50px rgba(108,76,255,0.12)" }}>
            <Image
              src="/images/startup-app-images/04-custom-app-for-your-business.webp"
              alt="A custom mobile app built around your startup's business model and audience by DEVTYX"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

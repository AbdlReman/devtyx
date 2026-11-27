export default function ReviewsHeroSection() {
  return (
    <section className="hero-purple-section">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(14,165,233,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(3,105,161,0.2) 0%, transparent 40%)",
        }}
      />
      <div className="brelyx-container" style={{ position: "relative" }}>
        <div className="hero-p-badge">● Client Reviews</div>
        <h1 className="hero-p-h1">
          Trusted by clients{" "}
          <br />
          worldwide
        </h1>
        <p className="hero-p-sub">
          Real feedback from teams we&apos;ve shipped with — on Google, Clutch, GoodFirms, and TechBehemoths.
        </p>
      </div>
    </section>
  );
}

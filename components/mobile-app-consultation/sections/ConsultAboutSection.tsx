import QuickInquiryButton from "@/components/contact/QuickInquiryButton";

export default function ConsultAboutSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">About Our Consultants</div>
          </div>
          <h2 className="lt-h2">Experienced Mobile App Development Consultants</h2>
          <p className="lt-lead" style={{ textAlign: "left" }}>
            Since 2019, DEVTYX has helped startups and growing businesses turn ideas into digital
            products that scale. Our team has delivered 70+ web, mobile, cloud and AI products for
            120+ clients across 23+ countries, from fintech and healthcare to e-commerce, travel and media.
          </p>
          <p className="lt-lead" style={{ textAlign: "left" }}>
            That hands-on experience is what makes our mobile app consulting different. Our consultants
            are the same strategists, designers and engineers who build apps every day, so our advice is
            practical, not theoretical. We help you validate your idea, choose features that matter, pick
            the right technology and plan a budget you can trust. You don&apos;t need a technical
            background to start. Bring the idea; we&apos;ll help you shape it into a product people want
            to use.
          </p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}>
            <QuickInquiryButton
              className="lt-btn"
              source="Mobile App Consultation"
              defaultMessage="I'd like a free consultation about my app idea. "
            >
              Get a Free Consultation →
            </QuickInquiryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

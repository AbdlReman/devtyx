import Image from "next/image";
import QuickInquiryButton from "@/components/contact/QuickInquiryButton";

export default function GroceryCtaSection() {
  return (
    <div
      className="dark-cta-band"
      style={{ textAlign: "left", background: "linear-gradient(135deg, #050C2E 0%, #071952 50%, #050C2E 100%)" }}
    >
      <div className="brelyx-container">
        <div style={{ display: "grid", gap: "2.5rem", alignItems: "center" }} className="lt-split-heading">
          <div>
            <h2 className="dark-cta-h2" style={{ margin: "0 0 1.25rem" }}>Ready to Launch Your Grocery App?</h2>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.97rem", lineHeight: 1.8, maxWidth: "440px", margin: "0 0 2rem" }}>
              Tell us your idea. We&apos;ll help you shape it into a platform shoppers trust and ops teams can run at scale.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              <QuickInquiryButton
                className="dark-cta-btn"
                source="Grocery App Development"
                defaultMessage="I'm interested in building a grocery app. "
              >
                Book Your Free Discovery Call →
              </QuickInquiryButton>
            </div>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem" }}>
              <a href="mailto:support@devtyx.com" style={{ color: "inherit" }}>support@devtyx.com</a>
              {" · "}
              <a href="tel:+923020058237" style={{ color: "inherit" }}>+92-302-005-8237</a>
              {" · WhatsApp available"}
            </p>
          </div>

          <div style={{
            position: "relative",
            aspectRatio: "16/10",
            borderRadius: "1.25rem",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.12)",
          }}>
            <Image
              src="/images/grocery-app/hero.jpg"
              alt="Launch your grocery delivery app with DEVTYX"
              fill
              className="object-cover object-center"
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(90deg, rgba(5,12,46,0.55) 0%, rgba(5,12,46,0.15) 100%)",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}

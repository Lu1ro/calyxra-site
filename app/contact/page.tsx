import type { Metadata } from "next";
import { ArrowDownRight, Mail } from "lucide-react";
import InteriorShell from "@/components/InteriorShell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Bring Calyxra one live marketing measurement question.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <InteriorShell
      eyebrow="Contact"
      title="One live question is enough to start."
      intro="Tell us which reports disagree, which decision is waiting, and who needs confidence in the answer."
    >
      <div className="site-frame contact-grid">
        <article className="contact-card">
          <p className="section-label">
            <span aria-hidden="true">◆</span>
            Measurement review
          </p>
          <h2>Use 15 minutes to frame the decision.</h2>
          <p>
            We will identify the business question, the systems involved, and
            whether a Measurement Audit is the right next step. No polished deck
            or data transfer is required for the introductory call.
          </p>
          <a
            href="https://cal.com/calyxra/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            Book a measurement review
            <ArrowDownRight aria-hidden="true" size={18} />
          </a>
        </article>

        <article className="contact-card">
          <p className="section-label">
            <span aria-hidden="true">◆</span>
            Direct contact
          </p>
          <h2>Prefer email?</h2>
          <p>
            Send a short note with the decision you are considering, the main
            channels involved, and the reporting systems already in use.
          </p>
          <a href="mailto:admin@calyxra.com" className="button button-dark">
            admin@calyxra.com
            <Mail aria-hidden="true" size={18} />
          </a>

          <div className="operator-details">
            <p>Operator: FOP Kononchuk Oleksandr Yaroslavovych</p>
            <p>Tax ID: 3078714279</p>
            <p>Zolota 12, Dubno, Rivne Oblast, Ukraine</p>
          </div>
        </article>
      </div>
    </InteriorShell>
  );
}

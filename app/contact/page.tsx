import type { Metadata } from "next";
import { ArrowDownRight, Mail } from "lucide-react";
import InteriorShell from "@/components/InteriorShell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Bring Calyxra one live DTC measurement incident.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <InteriorShell
      eyebrow="Contact"
      title="Tell us what changed."
      intro="Which number stopped making sense, when did it change, and which operating or budget decision is now blocked?"
    >
      <div className="site-frame contact-grid">
        <article className="contact-card">
          <p className="section-label">
            <span aria-hidden="true">◆</span>
            Problem review
          </p>
          <h2>Use 15 minutes to frame the incident.</h2>
          <p>
            We will identify the symptom, the systems involved, the decision at
            risk, and whether a Measurement Recovery Sprint is the right next
            step. No polished deck or data transfer is required for the call.
          </p>
          <a
            href="https://cal.com/calyxra/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            Book a problem review
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
            Send a short note with what changed, when it changed, the reports or
            systems that disagree, and the decision your team is waiting to make.
          </p>
          <a href="mailto:admin@calyxra.com" className="button button-dark">
            admin@calyxra.com
            <Mail aria-hidden="true" size={18} />
          </a>

          <p className="contact-social">
            Founder-led measurement: connect with{" "}
            <a
              href="https://www.linkedin.com/in/lukian-kononchuk-b66128364/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lukian Kononchuk
            </a>{" "}
            or follow{" "}
            <a
              href="https://www.linkedin.com/company/calyxra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Calyxra on LinkedIn
            </a>.
          </p>

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

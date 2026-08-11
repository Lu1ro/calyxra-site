import type { Metadata } from "next";
import InteriorShell from "@/components/InteriorShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Calyxra handles website and engagement information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <InteriorShell
      eyebrow="Legal / Privacy"
      title="Privacy policy"
      intro="This policy explains what information Calyxra may receive through this website and during a measurement engagement, and how we use it."
    >
      <div className="site-frame legal-layout">
        <aside className="legal-aside">
          <p>Effective: 11 August 2026</p>
          <a href="#website-data">Website data</a>
          <a href="#engagement-data">Engagement data</a>
          <a href="#handling">Handling &amp; retention</a>
          <a href="#your-rights">Your choices</a>
          <a href="#contact">Contact</a>
        </aside>

        <article className="legal-content">
          <section id="scope">
            <h2>1. Scope and operator</h2>
            <p>
              Calyxra is operated by FOP Kononchuk Oleksandr Yaroslavovych,
              Tax ID 3078714279, Zolota 12, Dubno, Rivne Oblast, Ukraine
              (“Calyxra”, “we”, or “us”). This policy applies to calyxra.com and
              information handled in connection with our analytical and advisory
              services.
            </p>
          </section>

          <section id="website-data">
            <h2>2. Information from the website</h2>
            <p>
              If you email us or book a call, we may receive your name, work
              email, company, role, scheduling details, and the information you
              choose to include in your message. The booking service may process
              technical and scheduling information under its own privacy terms.
            </p>
            <p>
              Our hosting provider may process basic request, device, security,
              and diagnostic data needed to deliver and protect the website. We
              do not use this website to offer self-service accounts, subscription
              billing, or automated marketing analysis.
            </p>
          </section>

          <section id="engagement-data">
            <h2>3. Information used in an engagement</h2>
            <p>
              The exact data is agreed in the scope of work. Depending on the
              question, it may include commerce exports, refunds, payment and cost
              data, media-spend and campaign exports, analytics configurations,
              attribution settings, and previous experiment results.
            </p>
            <p>
              We ask clients not to provide data that is unnecessary for the
              agreed analysis. Where practical, we prefer exports, aggregated
              data, or read-only access, and we avoid direct customer identifiers
              unless they are genuinely required for the agreed method.
            </p>
          </section>

          <section>
            <h2>4. Why we use information</h2>
            <ul>
              <li>To respond to enquiries and arrange introductory calls.</li>
              <li>To scope, contract, and deliver requested measurement work.</li>
              <li>To communicate findings, invoices, and engagement updates.</li>
              <li>To maintain security, diagnose service issues, and meet legal obligations.</li>
            </ul>
            <p>
              We do not sell client or contact information. We do not use a
              client’s engagement data to train public artificial-intelligence
              models.
            </p>
          </section>

          <section id="handling">
            <h2>5. Service providers, access, and retention</h2>
            <p>
              We may use reputable providers for website hosting, email,
              scheduling, file transfer, storage, and other functions necessary
              to run the engagement. Access is limited to the people and providers
              who need it for that purpose.
            </p>
            <p>
              The storage location, access method, retention period, and return or
              deletion of client-provided data are agreed before transfer or in
              the scope of work. Business records may be retained where required
              for accounting, dispute resolution, or legal compliance.
            </p>
          </section>

          <section id="your-rights">
            <h2>6. Your choices and requests</h2>
            <p>
              You may ask us to correct or delete contact information, or request
              information about how it is handled. Client-data requests are also
              subject to the applicable contract and legal retention requirements.
              We may need to verify the requester’s identity and authority.
            </p>
          </section>

          <section id="contact">
            <h2>7. Contact and updates</h2>
            <p>
              Questions or privacy requests can be sent to{" "}
              <a href="mailto:admin@calyxra.com">admin@calyxra.com</a>. We may
              update this policy as our services or legal obligations change. The
              effective date above identifies the current version.
            </p>
          </section>
        </article>
      </div>
    </InteriorShell>
  );
}

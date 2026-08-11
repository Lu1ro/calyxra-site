import type { Metadata } from "next";
import InteriorShell from "@/components/InteriorShell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for the Calyxra website and measurement engagements.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <InteriorShell
      eyebrow="Legal / Terms"
      title="Terms of service"
      intro="These terms cover use of the Calyxra website. Paid analytical work is also governed by the written scope of work agreed with each client."
    >
      <div className="site-frame legal-layout">
        <aside className="legal-aside">
          <p>Effective: 11 August 2026</p>
          <a href="#services">Services</a>
          <a href="#client">Client responsibilities</a>
          <a href="#fees">Fees &amp; cancellation</a>
          <a href="#outputs">Outputs &amp; decisions</a>
          <a href="#liability">Liability</a>
          <a href="#contact">Contact</a>
        </aside>

        <article className="legal-content">
          <section>
            <h2>1. Operator and acceptance</h2>
            <p>
              Calyxra is operated by FOP Kononchuk Oleksandr Yaroslavovych,
              Tax ID 3078714279, Zolota 12, Dubno, Rivne Oblast, Ukraine. By using
              this website, you agree to these terms. If you enter into a paid
              engagement, the signed proposal, statement of work, or other written
              agreement (“Scope of Work”) also applies and controls if it conflicts
              with these website terms.
            </p>
          </section>

          <section id="services">
            <h2>2. Analytical and advisory services</h2>
            <p>
              Calyxra provides independent marketing-measurement, reconciliation,
              attribution review, experiment design, and related advisory work.
              The exact question, sources, period, deliverables, dependencies,
              timeline, and fees are defined in the Scope of Work.
            </p>
            <p>
              A published example, description, starting price, or typical
              timeline is illustrative and does not replace the agreed scope.
              Timing begins only after the prerequisites listed in the Scope of
              Work are complete.
            </p>
          </section>

          <section id="client">
            <h2>3. Client responsibilities</h2>
            <p>The client agrees to:</p>
            <ul>
              <li>Provide accurate, complete, and timely information and access.</li>
              <li>Have the authority and lawful basis to share the supplied data.</li>
              <li>Identify relevant definitions, accounting choices, known gaps, and prior changes.</li>
              <li>Review interim questions and deliverables within the agreed timeframe.</li>
              <li>Maintain independent control of operational, financial, and media decisions.</li>
            </ul>
            <p>
              Delayed or incomplete prerequisites may change the delivery date or
              make some conclusions unavailable. We will identify material
              limitations rather than present unsupported precision.
            </p>
          </section>

          <section id="fees">
            <h2>4. Fees, rescheduling, and cancellation</h2>
            <p>
              Fees, currency, taxes, invoice dates, payment schedule, and any
              reimbursable costs are stated in the Scope of Work. Unless it says
              otherwise, invoices are due before work begins and fees for work
              already performed or reserved are non-refundable.
            </p>
            <p>
              Either party may ask to reschedule or cancel an engagement. The
              consequences—including any refund, cancellation fee, wind-down work,
              and return or deletion of materials—follow the Scope of Work. There
              is no website-wide performance or percentage-gap refund guarantee.
            </p>
          </section>

          <section id="outputs">
            <h2>5. Findings, experiments, and business decisions</h2>
            <p>
              Measurement outputs depend on the supplied data, agreed definitions,
              available evidence, and stated assumptions. Attribution estimates do
              not by themselves prove incrementality. Experimental results are
              subject to their design, statistical uncertainty, observation period,
              and implementation quality.
            </p>
            <p>
              Our deliverables are analytical and advisory, not legal, tax,
              accounting, investment, or guaranteed financial advice. The client
              remains responsible for reviewing and acting on recommendations. We
              do not guarantee a revenue, profit, advertising, or experiment result.
            </p>
          </section>

          <section>
            <h2>6. Confidentiality and intellectual property</h2>
            <p>
              Each party will use the other party’s confidential information only
              for the engagement and protect it with reasonable care. Client data
              and pre-existing client materials remain the client’s property.
              Calyxra retains its pre-existing methods, templates, general know-how,
              and tools. Ownership and permitted use of bespoke deliverables are
              defined in the Scope of Work.
            </p>
            <p>
              We will not publish a client’s name, data, results, testimonial, or
              case study without permission.
            </p>
          </section>

          <section id="liability">
            <h2>7. Warranties and limitation of liability</h2>
            <p>
              We will perform agreed services with reasonable professional care.
              To the extent permitted by law, the website and any materials outside
              a paid Scope of Work are provided as available, without additional
              warranties.
            </p>
            <p>
              To the extent permitted by law, neither party is liable for indirect,
              incidental, special, punitive, or consequential loss. Calyxra’s total
              liability connected with an engagement will not exceed the fees paid
              for the specific engagement giving rise to the claim, except where a
              limitation is prohibited by law or the Scope of Work says otherwise.
            </p>
          </section>

          <section>
            <h2>8. Governing law and changes</h2>
            <p>
              These terms are governed by the laws of Ukraine, without prejudice to
              mandatory protections that apply to you. The parties will first try
              in good faith to resolve a dispute directly. We may update these
              website terms; the effective date identifies the current version.
            </p>
          </section>

          <section id="contact">
            <h2>9. Contact</h2>
            <p>
              Questions can be sent to{" "}
              <a href="mailto:admin@calyxra.com">admin@calyxra.com</a>.
            </p>
          </section>
        </article>
      </div>
    </InteriorShell>
  );
}

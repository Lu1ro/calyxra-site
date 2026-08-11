import type { Metadata } from "next";
import InteriorShell from "@/components/InteriorShell";

export const metadata: Metadata = {
  title: "Data & Security",
  description: "Calyxra's practical approach to engagement data and access.",
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return (
    <InteriorShell
      eyebrow="Data / Security"
      title="Smallest practical access. Clearly agreed handling."
      intro="Security starts by narrowing the question, the data required to answer it, and the people who need access."
    >
      <div className="site-frame legal-layout">
        <aside className="legal-aside">
          <p>Approach: engagement-specific</p>
          <a href="#collection">Collection</a>
          <a href="#access">Access</a>
          <a href="#transfer">Transfer &amp; storage</a>
          <a href="#lifecycle">Data lifecycle</a>
          <a href="#report">Report a concern</a>
        </aside>

        <article className="legal-content">
          <section>
            <h2>Our approach</h2>
            <p>
              Calyxra is a professional-services practice, not a self-service data
              platform. Before engagement data is transferred, we agree what is
              required, how it will be provided, who will use it, and what happens
              when the work is complete.
            </p>
            <p>
              Specific client requirements can be documented in the Scope of Work
              or a separate data-processing or confidentiality agreement.
            </p>
          </section>

          <section id="collection">
            <h2>Data minimisation</h2>
            <ul>
              <li>We begin with the business question and request only relevant evidence.</li>
              <li>We prefer aggregated exports or read-only access where practical.</li>
              <li>We avoid customer-identifying fields unless the agreed method genuinely needs them.</li>
              <li>We document material source, metric, and transformation assumptions.</li>
            </ul>
          </section>

          <section id="access">
            <h2>Access and working practices</h2>
            <p>
              Access is limited to people involved in the agreed work. Clients
              should grant the narrowest practical permissions, keep ownership of
              their accounts, and revoke access when it is no longer needed. We do
              not ask clients to email passwords or share personal login accounts.
            </p>
            <p>
              Where client-owned environments are available and suitable, analysis
              can be performed there. Otherwise, the chosen transfer and workspace
              are agreed during scoping.
            </p>
          </section>

          <section id="transfer">
            <h2>Transfer, storage, and service providers</h2>
            <p>
              The appropriate method depends on the sensitivity, size, and systems
              involved. We agree the transfer channel and storage location before
              receiving engagement data. We may use providers for hosting, email,
              scheduling, secure transfer, or storage when necessary to deliver the
              work, subject to access restrictions and applicable contract terms.
            </p>
          </section>

          <section id="lifecycle">
            <h2>Retention, return, and deletion</h2>
            <p>
              The engagement agreement sets the working retention period and the
              return or deletion process for client-provided data. We may retain
              deliverables, contracts, invoices, and limited business records as
              required for legal, accounting, security, or dispute-resolution
              purposes. Deletion cannot remove copies a client retains in its own
              systems or records another provider must retain by law.
            </p>
          </section>

          <section id="report">
            <h2>Report a security or data concern</h2>
            <p>
              Send relevant details to{" "}
              <a href="mailto:admin@calyxra.com?subject=Security%20or%20data%20concern">
                admin@calyxra.com
              </a>. Please do not include sensitive client data in the initial
              message. We will respond with an appropriate channel if more detail
              is needed.
            </p>
          </section>
        </article>
      </div>
    </InteriorShell>
  );
}

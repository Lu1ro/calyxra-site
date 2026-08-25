import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Check } from "lucide-react";
import InteriorShell from "@/components/InteriorShell";

const reviewUrl = "https://cal.com/calyxra/15min";

export const metadata: Metadata = {
  title: "Measurement Recovery for Agencies",
  description:
    "Calyxra works alongside performance, CRO, Shopify, and growth agencies to resolve cross-system measurement incidents without taking over media buying or the client relationship.",
  alternates: { canonical: "/partners" },
  openGraph: {
    type: "website",
    siteName: "Calyxra",
    title: "Measurement Recovery for Agencies — Calyxra",
    description:
      "Bring in a measurement specialist when a client incident crosses systems and exceeds the agency remit.",
    url: "/partners",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Measurement Recovery for Agencies — Calyxra",
    description:
      "Your agency keeps the client relationship. Calyxra owns the agreed measurement incident.",
    images: ["/og.png"],
  },
};

const triggers = [
  {
    number: "01",
    tone: "layer-lime",
    title: "A release changed the numbers.",
    text: "Checkout, theme, consent, pixel, or server-side work moved reported conversions unexpectedly.",
  },
  {
    number: "02",
    tone: "layer-coral",
    title: "The client challenges the report.",
    text: "Meta, Shopify, GA4, attribution tooling, and Finance no longer support the same decision.",
  },
  {
    number: "03",
    tone: "layer-blue",
    title: "The issue exceeds the agency remit.",
    text: "The likely cause spans systems your team does not own or should not change alone.",
  },
  {
    number: "04",
    tone: "layer-paper",
    title: "There is no closure test.",
    text: "Settings have changed, but nobody has defined the evidence required to call the incident resolved.",
  },
];

const models = [
  {
    number: "01",
    tag: "Recommended",
    title: "Co-delivery",
    text: "Your agency leads the client relationship and channel strategy. Calyxra joins the relevant working sessions and owns the agreed measurement scope.",
    note: "Best when the incident crosses agency, client, finance, and technical owners.",
  },
  {
    number: "02",
    tag: "Named specialist",
    title: "Client-facing specialist",
    text: "Calyxra is introduced as an independent measurement specialist when the client needs a neutral owner across Growth, Finance, analytics, development, and vendors.",
    note: "Best when independence and cross-team authority matter to the resolution.",
  },
  {
    number: "03",
    tag: "Agency-led",
    title: "Agency-led subcontracting",
    text: "Your agency leads communication while Calyxra works to a written scope behind the delivery team. We are disclosed wherever contracts, access rules, or client policy require it.",
    note: "White-label delivery is considered only when permissions and client obligations allow it.",
  },
];

const responsibilityGroups = [
  {
    owner: "Your agency",
    caption: "Relationship + strategy",
    items: [
      "Keeps the client relationship and channel strategy",
      "Supplies campaign, account, and release context",
      "Coordinates the relevant client stakeholders",
      "Approves how findings are communicated",
    ],
  },
  {
    owner: "Calyxra",
    caption: "Measurement incident",
    items: [
      "Frames the incident and acceptance criteria",
      "Requests the smallest practical evidence set",
      "Reproduces the mismatch and traces the cause",
      "Completes approved in-scope corrections",
      "Retests the affected path and documents closure",
    ],
  },
  {
    owner: "Client + system owners",
    caption: "Authority + implementation",
    items: [
      "Authorize access and production changes",
      "Confirm commercial and Finance definitions",
      "Implement custom engineering unless separately agreed",
      "Retain final control of operational and budget decisions",
    ],
  },
];

const protectionRules = [
  ["Written boundary", "Work stays inside the agreed incident, systems, evidence window, and acceptance criteria."],
  ["Agency stays included", "The communication route and agency role are agreed before client access or working sessions begin."],
  ["No borrowed proof", "Client names, data, findings, and results are never published without separate written permission."],
  ["Adjacent work needs approval", "Additional incidents, custom engineering, or unrelated services require a new written scope."],
];

const partnerProcess = [
  {
    number: "01",
    title: "Frame together",
    text: "Agree on the symptom, decision at risk, systems, likely stakeholders, and what the agency already knows.",
  },
  {
    number: "02",
    title: "Set the working rules",
    text: "Confirm client authority, communication, confidentiality, scope boundaries, and acceptance criteria.",
  },
  {
    number: "03",
    title: "Resolve the incident",
    text: "Reproduce, trace, correct what is approved, and coordinate separate implementation where required.",
  },
  {
    number: "04",
    title: "Verify and hand back",
    text: "Retest, document remaining limits, and return a clear operating state to the agency and client team.",
  },
];

const partnerFaqs = [
  {
    q: "Will Calyxra blame our agency if something is wrong?",
    a: "No. We document system behaviour, ownership boundaries, and evidence. The objective is closure, not assigning embarrassment. Relevant owners review the cause and approved change before the final handoff.",
  },
  {
    q: "Will you take over media buying or pitch our client directly?",
    a: "No. Calyxra does not provide media buying or use a partner introduction to pitch unrelated services around the agency. Communication routes and any non-circumvention terms are agreed before access.",
  },
  {
    q: "Can the work be white-labelled?",
    a: "Agency-led subcontracting is possible where the client agreement, access model, and data obligations allow it. We will not hide our role where disclosure or authorisation is required.",
  },
  {
    q: "What if the discrepancy is legitimate?",
    a: "Then the resolution may be a shared metric definition and operating rule rather than a technical repair. We do not force systems to match when they measure different things.",
  },
  {
    q: "Who implements custom code?",
    a: "The client’s developer, the agency’s technical team, or a separately agreed specialist. Calyxra defines the change and acceptance criteria; implementation is included only when explicitly scoped.",
  },
  {
    q: "Do you guarantee revenue recovery or client retention?",
    a: "No. We commit to the written investigation, approved corrections, and verification checks—not a financial, media-performance, or retention outcome.",
  },
];

export default function PartnersPage() {
  return (
    <InteriorShell
      eyebrow="For agencies"
      title="Measurement problems your agency shouldn’t have to solve alone."
      intro="Calyxra works alongside performance, CRO, Shopify, and growth agencies when a client’s tracking or reporting issue crosses systems. Your agency keeps the relationship and strategy. We own the agreed measurement incident—from reproduction through verification."
      actions={
        <>
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-light"
          >
            Discuss a client incident
            <ArrowDownRight aria-hidden="true" size={18} />
          </a>
          <a href="#co-delivery" className="text-link text-link-light">
            See how co-delivery works
            <ArrowRight aria-hidden="true" size={18} />
          </a>
        </>
      }
    >
      <section className="partner-protection" aria-label="Partner working guarantees">
        <div className="site-frame partner-protection-grid">
          <p>You keep the client relationship</p>
          <p>We stay inside the measurement scope</p>
          <p>No media-spend incentive</p>
          <p>No public case study without written permission</p>
        </div>
      </section>

      <section className="partner-trigger-section section-pad">
        <div className="site-frame">
          <div className="section-heading-grid">
            <p className="section-label">
              <span aria-hidden="true">◆</span>
              When to bring us in
            </p>
            <div>
              <h2>The work starts when the problem stops belonging to one tool.</h2>
              <p className="section-lead">
                Your team may be doing its job correctly while the incident spans
                the client’s store, consent setup, ad platforms, analytics tools,
                finance definitions, or custom implementation.
              </p>
            </div>
          </div>

          <div className="evidence-layers">
            {triggers.map((trigger) => (
              <article className={`evidence-card ${trigger.tone}`} key={trigger.number}>
                <span className="card-number">{trigger.number}</span>
                <ArrowDownRight aria-hidden="true" size={24} strokeWidth={1.5} />
                <h3>{trigger.title}</h3>
                <p>{trigger.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-workflow-section section-pad">
        <div className="site-frame">
          <div className="section-heading-grid section-heading-light">
            <p className="section-label">
              <span aria-hidden="true">◆</span>
              Illustrative workflow
            </p>
            <div>
              <h2>One client problem. No silent handoff.</h2>
              <p className="section-lead">
                This is a composite workflow, not a client result. It shows how
                the work is divided before anyone receives access.
              </p>
            </div>
          </div>

          <article className="partner-incident-record">
            <div className="partner-record-topline">
              <span>Incident record / illustrative</span>
              <span>Checkout release</span>
            </div>
            <blockquote>
              “Meta improved after the checkout release, but Shopify did not.”
            </blockquote>
            <div className="partner-role-grid">
              <section>
                <span>Agency owns</span>
                <h3>Context + relationship</h3>
                <p>
                  Channel context, campaign decisions, client communication,
                  and the commercial relationship.
                </p>
              </section>
              <section>
                <span>Calyxra owns</span>
                <h3>Incident + verification</h3>
                <p>
                  Evidence reconciliation, root-cause tracing, approved bounded
                  corrections, and the acceptance test.
                </p>
              </section>
              <section>
                <span>Client or developer owns</span>
                <h3>Authority + custom code</h3>
                <p>
                  Access approval, production authority, and implementation
                  outside the agreed sprint.
                </p>
              </section>
            </div>
            <div className="partner-finish-line">
              <span>Finish line</span>
              <p>
                A documented cause, change record, verification result,
                remaining limits, and one agreed operating definition.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="partner-model-section section-pad" id="co-delivery">
        <div className="site-frame">
          <div className="section-heading-grid">
            <p className="section-label">
              <span aria-hidden="true">◆</span>
              Ways to work together
            </p>
            <div>
              <h2>Your relationship stays intact. Our role stays explicit.</h2>
              <p className="section-lead">
                The delivery model follows the client’s expectations, access
                rules, and need for an independent specialist. Co-delivery is
                the normal starting point.
              </p>
            </div>
          </div>

          <div className="partner-model-grid">
            {models.map((model) => (
              <article className="partner-model-card" key={model.number}>
                <div className="partner-model-topline">
                  <span>{model.number}</span>
                  <strong>{model.tag}</strong>
                </div>
                <h3>{model.title}</h3>
                <p>{model.text}</p>
                <small>{model.note}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-responsibility-section section-pad">
        <div className="site-frame">
          <div className="section-heading-grid section-heading-light">
            <p className="section-label">
              <span aria-hidden="true">◆</span>
              Responsibility split
            </p>
            <div>
              <h2>No duplicated ownership. No vague “we’ll look into it.”</h2>
              <p className="section-lead">
                Every engagement records who owns the relationship, the
                investigation, production authority, and the final decision.
              </p>
            </div>
          </div>

          <div className="partner-responsibility-grid">
            {responsibilityGroups.map((group) => (
              <article className="partner-responsibility-card" key={group.owner}>
                <span>{group.caption}</span>
                <h3>{group.owner}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      <Check aria-hidden="true" size={15} strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="principles-section partner-principles-section section-pad">
        <div className="site-frame principles-grid">
          <div className="principles-heading">
            <p className="section-label">
              <span aria-hidden="true">◆</span>
              Client protection
            </p>
            <h2>Your client relationship is not the opportunity. The incident is.</h2>
            <p>
              Calyxra does not manage media, earn a percentage of spend, or use
              a partner introduction to pitch unrelated services around the
              agency. Communication, contracting, confidentiality, and any
              non-circumvention terms are agreed before access.
            </p>
          </div>
          <div className="principles-list">
            {protectionRules.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-security-section section-pad">
        <div className="site-frame partner-security-grid">
          <div>
            <p className="section-label">
              <span aria-hidden="true">◆</span>
              Data + confidentiality
            </p>
            <h2>Minimum necessary access, agreed before transfer.</h2>
            <p>
              We prefer aggregated exports, walkthroughs, or read-only
              permissions. Write access is requested only for an approved
              correction and may remain with the client’s team.
            </p>
            <Link href="/security" className="text-link">
              Read our data and security approach
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <div className="partner-security-record">
            <span>Before evidence transfer</span>
            <ul>
              <li>Contracting and communication route confirmed</li>
              <li>Client authority and responsible owners identified</li>
              <li>Evidence list reduced to the smallest practical set</li>
              <li>Write access separated from read-only investigation</li>
              <li>Retention or processing requirements documented where needed</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="partner-commercial-section section-pad">
        <div className="site-frame partner-commercial-grid">
          <div className="partner-commercial-copy">
            <p className="section-label">
              <span aria-hidden="true">◆</span>
              Commercial model
            </p>
            <h2>One client incident. A fixed scope. A written finish line.</h2>
            <p>
              The agency may contract Calyxra directly or introduce the client.
              Contracting, billing, communication, and delivery responsibilities
              are confirmed before access.
            </p>
          </div>
          <article className="partner-commercial-card">
            <div className="partner-commercial-topline">
              <span>First engagement</span>
              <span>No automatic retainer</span>
            </div>
            <h3>Measurement Recovery Sprint</h3>
            <p>
              One Shopify-led business, one live incident, one agreed analysis
              window, and one acceptance test.
            </p>
            <div className="partner-commercial-meta">
              <div>
                <span>Starting at</span>
                <strong>$2,500</strong>
              </div>
              <div>
                <span>Target</span>
                <strong>10 business days</strong>
              </div>
            </div>
            <ul>
              <li>No subscription required</li>
              <li>Additional incidents quoted separately</li>
              <li>Custom engineering separated before work begins</li>
              <li>Timing starts after scope, payment, access, owners, and definitions are complete</li>
            </ul>
            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-light"
            >
              Discuss a client incident
              <ArrowDownRight aria-hidden="true" size={18} />
            </a>
          </article>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="site-frame">
          <div className="section-heading-grid">
            <p className="section-label">
              <span aria-hidden="true">◆</span>
              Partner workflow
            </p>
            <div>
              <h2>The working rules are set before the investigation starts.</h2>
            </div>
          </div>
          <div className="process-track">
            {partnerProcess.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="process-cta">
            <p>Start with the client symptom—not a polished deck.</p>
            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-dark"
            >
              Frame the incident
              <ArrowDownRight aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="faq-section section-pad">
        <div className="site-frame faq-grid">
          <div className="faq-heading">
            <p className="section-label">
              <span aria-hidden="true">◆</span>
              Partner FAQ
            </p>
            <h2>Questions to settle before the client is involved.</h2>
            <p>
              Have a different operating constraint? Email{" "}
              <a href="mailto:admin@calyxra.com">admin@calyxra.com</a>.
            </p>
          </div>
          <div className="faq-list">
            {partnerFaqs.map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <span className="faq-toggle" aria-hidden="true">+</span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta partner-final-cta">
        <div className="site-frame final-cta-inner">
          <p className="final-index">Partner / 01</p>
          <div>
            <p className="section-label">
              <span aria-hidden="true">◆</span>
              Bring the incident
            </p>
            <h2>Keep the client relationship.</h2>
            <p>
              Tell us what changed, which systems disagree, and what decision
              the client cannot make. No sensitive client data or polished deck
              is required for the first conversation.
            </p>
          </div>
          <div className="final-actions">
            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-light"
            >
              Discuss a client incident
              <ArrowDownRight aria-hidden="true" size={18} />
            </a>
            <a href="mailto:admin@calyxra.com" className="text-link text-link-light">
              Email Calyxra
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <small>No credentials or client exports in the first message.</small>
          </div>
        </div>
      </section>
    </InteriorShell>
  );
}

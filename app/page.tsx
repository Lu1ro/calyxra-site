import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  CircleDot,
  MoveRight,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseFiles } from "@/data/cases";

const reviewUrl = "https://cal.com/calyxra/15min";

const incidents = [
  {
    number: "01",
    title: "Tracking changed after a release",
    question:
      "A checkout, theme, consent, pixel, or platform change moved reported conversions while orders told a different story.",
    tone: "layer-lime",
  },
  {
    number: "02",
    title: "Growth and Finance disagree",
    question:
      "Platform ROAS says scale. Contribution economics, refunds, or settlement data says wait.",
    tone: "layer-coral",
  },
  {
    number: "03",
    title: "The tools disagree",
    question:
      "Shopify, GA4, Meta, Google, and the attribution platform assign different revenue, customers, or channel credit.",
    tone: "layer-blue",
  },
  {
    number: "04",
    title: "A budget decision is blocked",
    question:
      "The team knows something is off, but no one owns the cross-system cause, fix, and final verification.",
    tone: "layer-paper",
  },
];

const resolutionWork = [
  {
    number: "01",
    title: "Reproduce the incident",
    text: "Define what changed, when it changed, which reports moved, and which business decision is exposed.",
  },
  {
    number: "02",
    title: "Trace the root cause",
    text: "Follow definitions, events, consent, attribution rules, currencies, timezones, customer logic, and data transformations across the relevant systems.",
  },
  {
    number: "03",
    title: "Fix bounded issues",
    text: "Make approved configuration and reporting corrections that fit the agreed scope, with a change log your team can inspect.",
  },
  {
    number: "04",
    title: "Coordinate custom changes",
    text: "When code or infrastructure work is required, produce the implementation specification, work with the responsible developer, and keep the acceptance criteria intact.",
  },
  {
    number: "05",
    title: "Verify and close",
    text: "Retest the affected paths, compare the agreed evidence, document what is now trustworthy, and hand back the next budget action.",
  },
];

const sprintDeliverables = [
  "Incident brief + acceptance criteria",
  "Reconciled source table",
  "Root-cause and ownership map",
  "In-scope configuration fixes",
  "Post-fix verification log",
  "Metric contract + decision handoff",
];

const scopeBoundaries = [
  "One Shopify-led business",
  "One live measurement incident",
  "One agreed analysis period",
  "Only the systems required for that incident",
  "One factual correction round",
  "14-day post-delivery verification window",
];

const process = [
  {
    number: "01",
    title: "Frame the incident",
    text: "We agree on the symptom, decision at risk, systems involved, scope, and the evidence that would count as resolved.",
  },
  {
    number: "02",
    title: "Reproduce and trace",
    text: "We request the smallest practical exports or read-only access, reproduce the mismatch, and isolate the likely cause.",
  },
  {
    number: "03",
    title: "Fix or coordinate",
    text: "We complete approved standard corrections. Custom engineering is quoted before work and can be executed by your team or an agreed specialist.",
  },
  {
    number: "04",
    title: "Verify and hand back",
    text: "We retest against the acceptance criteria, document remaining limits, and give Growth, Finance, and your agency one operating definition.",
  },
];

const principles = [
  [
    "Fix the system, not blame the people",
    "We treat the incident as a shared operating problem and work constructively with internal teams, agencies, and vendors.",
  ],
  [
    "Acceptance criteria before changes",
    "A fix is not complete because a setting changed. It is complete when the agreed evidence passes the agreed test.",
  ],
  [
    "Standard and custom work stay separate",
    "Configuration corrections can fit the sprint. Theme, checkout, warehouse, or connector engineering is approved and priced separately.",
  ],
  [
    "Uncertainty remains visible",
    "We distinguish confirmed defects, expected discrepancies, directional signals, and questions that require a proper experiment.",
  ],
  [
    "No incentive to defend media spend",
    "Calyxra does not manage media or earn a percentage of advertising spend.",
  ],
];

const faqs = [
  {
    q: "What counts as a measurement incident?",
    a: "A measurement incident is a specific reporting, tracking, definition, or attribution problem that is affecting a live commercial decision. Examples include a sudden conversion shift after a release, disagreement between Growth and Finance, duplicate or missing events, inconsistent customer classification, or a channel result the team can no longer trust.",
  },
  {
    q: "We already use Triple Whale, Northbeam, GA4, or another platform. Is Calyxra redundant?",
    a: "No. We do not replace the platform. We investigate the conflict across its output, Shopify, ad platforms, and the commercial definitions used by Finance. The objective is to identify the cause, correct what is in scope, and define which metric should control the specific decision.",
  },
  {
    q: "Do you actually implement fixes?",
    a: "Yes, when the fix is an approved configuration, definition, taxonomy, or reporting change inside the agreed systems and scope. If the incident requires custom theme, checkout, warehouse, connector, or server-side engineering, we define the work and acceptance criteria, then quote it separately or coordinate with your developer.",
  },
  {
    q: "What if the numbers differ for a legitimate reason?",
    a: "Then the resolution is a documented metric contract rather than a technical repair. We explain why the systems differ, which definition is appropriate for the decision, who owns it, and how it should be monitored going forward.",
  },
  {
    q: "Can you prove which channel is incremental?",
    a: "Only when suitable experimental evidence already exists. A tracking or attribution fix does not create causal proof. If incrementality remains the material question, we define the test required instead of inventing a causal ROAS number.",
  },
  {
    q: "What access do you need?",
    a: "The exact list depends on the incident. We prefer the smallest practical set of exports, walkthroughs, or read-only permissions. Any write access needed for an approved change is agreed explicitly and can remain with your team if preferred.",
  },
  {
    q: "How long does a Recovery Sprint take?",
    a: "Most sprints are planned for 10 business days after scope, payment, required access, and definitions are complete. Complex engineering or observation periods can extend the final verification date; that dependency is identified before the work begins.",
  },
  {
    q: "Do you guarantee savings or revenue growth?",
    a: "No. We commit to the investigative work, documentation, and acceptance checks defined in the written scope. We do not guarantee a revenue, profit, media-performance, or percentage-gap outcome.",
  },
  {
    q: "Can you work with our agency or analytics team?",
    a: "Yes. Calyxra is designed to resolve cross-team measurement problems without taking over media buying or undermining the people already doing the work. We involve the relevant owner in the root-cause review, approved changes, and handoff.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-label">
      <span aria-hidden="true">◆</span>
      {children}
    </p>
  );
}

function ExternalCta({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <a
      href={reviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={dark ? "button button-dark" : "button button-light"}
    >
      {children}
      <ArrowDownRight aria-hidden="true" size={18} strokeWidth={1.8} />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="hero-shell">
        <div className="hero-grid-noise" aria-hidden="true" />
        <div className="site-frame hero-inner">
          <div className="hero-copy">
            <p className="hero-kicker">
              <span>Measurement incident response</span>
              <span>Shopify + paid media</span>
            </p>
            <h1>
              Your reports disagree.
              <br />
              The decision cannot wait.
              <span>We resolve the measurement problem.</span>
            </h1>
            <p className="hero-deck">
              Calyxra helps DTC teams close one live measurement incident:
              reproduce the mismatch, find its cause, correct what fits the
              agreed scope, and document which number should govern the next
              decision. We work with your existing stack and the people already
              running it.
            </p>
            <div className="hero-actions">
              <ExternalCta>Bring us the problem</ExternalCta>
              <Link href="#resolution" className="text-link text-link-light">
                See how resolution works
                <MoveRight aria-hidden="true" size={18} />
              </Link>
            </div>
            <p className="hero-note">
              No new dashboard. No media-spend incentive. One scoped problem at
              a time.
            </p>
          </div>

          <div className="decision-board-wrap" aria-label="Illustrative incident record">
            <div className="decision-board">
              <div className="board-topline">
                <span>Incident record</span>
                <span>No. 014</span>
              </div>
              <div className="board-question">
                <span>Reported symptom</span>
                <p>Paid social revenue dropped after the checkout release.</p>
              </div>
              <div className="board-signal-grid">
                <div>
                  <span className="signal-dot signal-green" />
                  <small>Commerce record</small>
                  <strong>Reconciled</strong>
                </div>
                <div>
                  <span className="signal-dot signal-orange" />
                  <small>Tracking defect</small>
                  <strong>Found</strong>
                </div>
                <div>
                  <span className="signal-dot signal-green" />
                  <small>Fix verification</small>
                  <strong>Passed</strong>
                </div>
                <div className="board-action">
                  <small>Incident status</small>
                  <strong>FIXED + VERIFIED</strong>
                </div>
              </div>
              <div className="board-footer">
                <span>Cause → fix → proof</span>
                <span>Illustrative workflow</span>
              </div>
            </div>
            <div className="board-tab board-tab-one">Growth</div>
            <div className="board-tab board-tab-two">Finance</div>
            <div className="board-stamp">Issue closed</div>
          </div>
        </div>

        <div className="hero-rail" aria-label="Systems we work across">
          <span>We work across</span>
          <span>Shopify</span>
          <span>Meta</span>
          <span>Google</span>
          <span>GA4</span>
          <span>Klaviyo</span>
          <span>Attribution tools</span>
          <span>Finance models</span>
        </div>
      </section>

      <section className="problem-section section-pad" id="problems">
        <div className="site-frame">
          <div className="section-heading-grid">
            <SectionLabel>Where work gets stuck</SectionLabel>
            <div>
              <h2>
                A measurement problem becomes a business problem
                <em>when it delays a decision—or sends budget the wrong way.</em>
              </h2>
              <p className="section-lead">
                Most teams already have dashboards. What they often lack is one
                owner who can cross the systems, distinguish an expected
                discrepancy from a defect, get the right fix made, and prove the
                issue is closed.
              </p>
            </div>
          </div>

          <div className="evidence-layers">
            {incidents.map((incident) => (
              <article className={`evidence-card ${incident.tone}`} key={incident.title}>
                <span className="card-number">{incident.number}</span>
                <h3>{incident.title}</h3>
                <p>{incident.question}</p>
                <ArrowDownRight aria-hidden="true" size={24} strokeWidth={1.5} />
              </article>
            ))}
          </div>
          <p className="layer-conclusion">
            The business does not need another number. It needs a cause, an
            owner, an approved fix, and an acceptance test.
          </p>
        </div>
      </section>

      <section className="capabilities-section section-pad" id="resolution">
        <div className="site-frame">
          <div className="section-heading-grid section-heading-light">
            <SectionLabel>What Calyxra owns</SectionLabel>
            <div>
              <h2>Diagnosis starts the job. Verification finishes it.</h2>
              <p className="section-lead">
                We investigate the incident, complete bounded corrections,
                coordinate specialist work when needed, and retest the result.
                The finish line is agreed before access is granted.
              </p>
            </div>
          </div>

          <div className="capability-list">
            {resolutionWork.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <CircleDot aria-hidden="true" size={20} strokeWidth={1.5} />
              </article>
            ))}
          </div>

          <div className="statement-banner">
            <span>The output is not “we found a problem.”</span>
            <strong>It is a documented, verified next state.</strong>
          </div>
        </div>
      </section>

      <section className="engagements-section section-pad" id="sprint">
        <div className="site-frame">
          <div className="section-heading-grid">
            <SectionLabel>The first engagement</SectionLabel>
            <div>
              <h2>One incident. A fixed scope. A finish line.</h2>
              <p className="section-lead">
                We begin with a live problem, not a general health check. The
                scope is narrow enough to finish and important enough to change
                an operating or budget decision.
              </p>
            </div>
          </div>

          <div className="engagement-grid">
            <article className="audit-card" id="recovery-sprint">
              <div className="engagement-card-top">
                <p>01 / Fixed-scope recovery</p>
                <span>No subscription</span>
              </div>
              <h3>Measurement Recovery Sprint</h3>
              <p className="engagement-intro">
                A focused investigation and resolution of one measurement
                incident affecting a live DTC decision. A typical scope covers
                one Shopify-led business, the relevant paid channels, and one
                agreed incident window.
              </p>

              <div className="audit-meta">
                <div>
                  <span>Starting at</span>
                  <strong>$2,500</strong>
                  <small>fixed fee confirmed before access</small>
                </div>
                <div>
                  <span>Target timing</span>
                  <strong>10 business days</strong>
                  <small>after scope, payment, access, and definitions</small>
                </div>
              </div>

              <p className="scope-boundary-note">
                The base sprint covers one business, one incident, one agreed
                analysis window, diagnosis, reconciliation, in-scope
                configuration or reporting corrections, and verification.
                Additional incidents, markets, or custom engineering are quoted
                separately before data access.
              </p>

              <p className="deliverables-label">What the sprint produces</p>
              <ul className="deliverables-grid">
                {sprintDeliverables.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" size={17} strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="truth-callout">
                If the discrepancy is expected rather than defective, the fix is
                a shared metric definition and operating rule—not a cosmetic
                attempt to force every system to match.
              </div>
              <ExternalCta dark>Scope a recovery sprint</ExternalCta>
            </article>

            <div className="engagement-side-stack">
              <article className="desk-card">
                <div className="engagement-card-top">
                  <p>Included / Guardrails</p>
                  <span>Written scope</span>
                </div>
                <h3>Small enough to finish</h3>
                <p>
                  The sprint is protected from open-ended consulting by a clear
                  incident, system boundary, and acceptance test.
                </p>
                <ul>
                  {scopeBoundaries.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="side-card-price">
                  <span>Commercial model</span>
                  <strong>Fixed fee. No automatic retainer.</strong>
                </div>
              </article>

              <article className="lab-card">
                <div className="engagement-card-top">
                  <p>When code is required</p>
                  <span>Separate approval</span>
                </div>
                <h3>Complex implementation stays controlled</h3>
                <p>
                  Custom theme, checkout, server-side, warehouse, or connector
                  work is never hidden inside an unlimited promise. We define the
                  change and acceptance criteria, then quote it separately or
                  work with your developer.
                </p>
                <Link href="#how-it-works" className="text-link">
                  See the working method
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="decision-section section-pad" id="verification">
        <div className="site-frame decision-section-grid">
          <div className="decision-copy">
            <SectionLabel>What “closed” looks like</SectionLabel>
            <h2>Each in-scope change leaves an evidence trail.</h2>
            <p>
              No vague “looks better now” handoff. The incident record shows the
              symptom, evidence, cause, change, verification result, remaining
              limits, and the metric the team should use next.
            </p>
            <div className="decision-key">
              <span><i className="key-reliable" /> Confirmed</span>
              <span><i className="key-directional" /> Corrected</span>
              <span><i className="key-open" /> Monitor</span>
            </div>
          </div>

          <article className="memo-card">
            <div className="memo-header">
              <span>Calyxra / Incident record</span>
              <span>Illustrative only</span>
            </div>
            <div className="memo-question">
              <small>Incident question</small>
              <h3>Can the team trust paid social reporting after the checkout release?</h3>
            </div>
            <div className="memo-row">
              <div>
                <small>Commerce evidence</small>
                <p>Orders, refunds, and settlement totals agree under the shared definition.</p>
              </div>
              <span className="memo-status status-reliable">Confirmed</span>
            </div>
            <div className="memo-row">
              <div>
                <small>Measurement defect</small>
                <p>Browser and server purchase events use inconsistent rules.</p>
              </div>
              <span className="memo-status status-directional">Corrected</span>
            </div>
            <div className="memo-row">
              <div>
                <small>Acceptance check</small>
                <p>Coverage and deduplication remain inside the agreed tolerance.</p>
              </div>
              <span className="memo-status status-open">Monitor</span>
            </div>
            <div className="memo-decision">
              <div>
                <small>Status</small>
                <strong>CLOSED</strong>
              </div>
              <p>
                Use the agreed acquisition metric and monitor the verification
                window for 14 days.
              </p>
            </div>
            <p className="memo-caption">
              Illustrative workflow. Not client data, a case study, or a performance claim.
            </p>
          </article>
        </div>
      </section>

      <section className="case-preview-section section-pad" id="cases">
        <div className="site-frame">
          <div className="section-heading-grid">
            <SectionLabel>Illustrative incident files</SectionLabel>
            <div>
              <h2>Not polished success stories. A worked path from symptom to closure.</h2>
              <p className="section-lead">
                Three worked scenarios show the evidence we would inspect, the
                change boundary we would agree, and the test that must pass
                before a measurement incident can be called resolved.
              </p>
            </div>
          </div>

          <div className="case-preview-disclosure">
            <strong>Composite scenarios · synthetic data</strong>
            <p>
              These are not client case studies, testimonials, or realised
              performance results. They demonstrate Calyxra&apos;s working method.
            </p>
          </div>

          <div className="case-preview-grid">
            {caseFiles.map((caseFile) => (
              <article
                className={`case-preview-card case-preview-${caseFile.tone}`}
                key={caseFile.slug}
              >
                <div className="case-preview-topline">
                  <span>File / {caseFile.number}</span>
                  <span>Synthetic scenario</span>
                </div>
                <h3>{caseFile.title}</h3>
                <p>{caseFile.summary}</p>
                <div className="case-preview-state">
                  <span>Illustrative closure state</span>
                  <strong>{caseFile.status}</strong>
                </div>
                <Link href={`/cases#${caseFile.slug}`} className="text-link">
                  Read the resolution path
                  <ArrowRight aria-hidden="true" size={17} />
                </Link>
              </article>
            ))}
          </div>

          <div className="case-preview-footer">
            <p>
              No invented revenue recovery. No forced “true ROAS.” Each file
              ends with an operating decision and an explicit limit on what the
              evidence does not prove.
            </p>
            <Link href="/cases" className="button button-dark">
              Open all incident files
              <MoveRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="fit-section section-pad" id="fit">
        <div className="site-frame">
          <div className="section-heading-grid section-heading-light">
            <SectionLabel>Who this is for</SectionLabel>
            <div>
              <h2>Useful when the cost of a wrong decision exceeds the cost of the sprint.</h2>
              <p className="section-lead">
                The strongest fit is a Shopify-led DTC team with meaningful paid
                media, several reporting systems, and one active incident that
                Growth, Finance, or an agency needs resolved.
              </p>
            </div>
          </div>
          <div className="fit-grid">
            <article className="fit-yes">
              <div className="fit-heading">
                <Check aria-hidden="true" size={24} />
                <h3>A good fit when</h3>
              </div>
              <ul>
                <li>A reporting or tracking change is affecting a live decision.</li>
                <li>You typically manage at least $50k per month in paid media.</li>
                <li>Shopify, Finance, ad platforms, or attribution tools disagree.</li>
                <li>Your internal team or agency needs an independent resolution owner.</li>
                <li>You can involve the people who own the affected systems and definitions.</li>
              </ul>
            </article>
            <article className="fit-no">
              <div className="fit-heading">
                <X aria-hidden="true" size={24} />
                <h3>Probably not a fit when</h3>
              </div>
              <ul>
                <li>You want a new dashboard, media buyer, or general analytics retainer.</li>
                <li>There is no active incident or decision to resolve.</li>
                <li>You need unlimited custom engineering inside a fixed fee.</li>
                <li>You want a guaranteed savings, lift, or “true ROAS” claim.</li>
                <li>The analysis must defend a conclusion already chosen.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="founder-section section-pad">
        <div className="site-frame founder-grid">
          <SectionLabel>Founder-led delivery</SectionLabel>
          <div className="founder-copy">
            <h2>The person scoping the incident stays through verification.</h2>
            <p>
              Calyxra is a founder-led practice. Lukian Kononchuk remains
              accountable from the first problem review through the evidence
              trail, approved changes, QA, and final handoff.
            </p>
            <p>
              Specialist implementation stays explicit. Calyxra works alongside
              the client’s Growth, Finance, analytics, development, and agency
              teams—and brings in a suitable technical specialist only when the
              agreed fix requires one.
            </p>
            <div className="founder-links">
              <a
                href="https://www.linkedin.com/in/lukian-kononchuk-b66128364/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Meet Lukian on LinkedIn
                <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/calyxra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Follow Calyxra
                <ArrowRight aria-hidden="true" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section section-pad" id="how-it-works">
        <div className="site-frame">
          <div className="section-heading-grid">
            <SectionLabel>How the sprint works</SectionLabel>
            <div>
              <h2>Every incident gets an owner, a boundary, and an acceptance test.</h2>
            </div>
          </div>
          <div className="process-track">
            {process.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="process-cta">
            <p>Tell us what changed and which number you stopped trusting.</p>
            <ExternalCta dark>Book a problem review</ExternalCta>
          </div>
        </div>
      </section>

      <section className="principles-section section-pad">
        <div className="site-frame principles-grid">
          <div className="principles-heading">
            <SectionLabel>Working principles</SectionLabel>
            <h2>Resolve the issue without creating a political fight.</h2>
            <p>
              The purpose is not to catch an agency or embarrass an internal
              team. It is to give everyone one defensible operating state and a
              clear owner for what happens next.
            </p>
          </div>
          <div className="principles-list">
            {principles.map(([title, text], index) => (
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

      <section className="faq-section section-pad" id="faq">
        <div className="site-frame faq-grid">
          <div className="faq-heading">
            <SectionLabel>FAQ</SectionLabel>
            <h2>Before we touch the problem.</h2>
            <p>
              Need a detail that is not covered here? Write to{" "}
              <a href="mailto:admin@calyxra.com">admin@calyxra.com</a>.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.q} open={index === 0}>
                <summary>
                  <span>{faq.q}</span>
                  <span className="faq-toggle" aria-hidden="true">+</span>
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="site-frame final-cta-inner">
          <p className="final-index">C / 01</p>
          <div>
            <SectionLabel>Start with the symptom</SectionLabel>
            <h2>Tell us what changed—and which number you stopped trusting.</h2>
            <p>
              Bring the reports that disagree, the decision being delayed, and
              the date the problem began. In 15 minutes, we will tell you whether
              a Recovery Sprint fits and what would be required to scope it.
            </p>
          </div>
          <div className="final-actions">
            <ExternalCta>Book a problem review</ExternalCta>
            <a href="mailto:admin@calyxra.com" className="text-link text-link-light">
              Email the incident
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <small>No polished deck and no data transfer required for the first call.</small>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

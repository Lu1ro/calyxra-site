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

const reviewUrl = "https://cal.com/calyxra/15min";

const evidenceLayers = [
  {
    number: "01",
    title: "Financial performance",
    question:
      "What was sold, refunded, discounted, and retained after the agreed variable costs?",
    tone: "layer-lime",
  },
  {
    number: "02",
    title: "Attribution",
    question:
      "Which touchpoints received credit under a specific model, window, and tracking setup?",
    tone: "layer-coral",
  },
  {
    number: "03",
    title: "Incrementality",
    question:
      "What happened because of the marketing activity that would not otherwise have happened?",
    tone: "layer-blue",
  },
  {
    number: "04",
    title: "Decision",
    question:
      "Given the evidence and its limits, should the team scale, cut, hold, or test next?",
    tone: "layer-paper",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Reconcile the commercial record",
    text: "Align orders, refunds, discounts, product costs, payment fees, and media spend to one documented performance definition.",
  },
  {
    number: "02",
    title: "Audit the measurement",
    text: "Review event definitions, tracking coverage, attribution windows, timezone and currency handling, taxonomy, and known blind spots.",
  },
  {
    number: "03",
    title: "Grade the evidence",
    text: "Show where a metric is reliable, where it is directional, and where it cannot support the conclusion being drawn from it.",
  },
  {
    number: "04",
    title: "Design the next test",
    text: "Turn unresolved questions into practical experiment plans using holdouts, geo tests, lift studies, or another suitable method.",
  },
  {
    number: "05",
    title: "Write the decision",
    text: "Translate the findings into a Scale / Cut / Hold / Test recommendation, with assumptions, confidence, and the next evidence required.",
  },
];

const auditDeliverables = [
  "Measurement map",
  "Reconciled performance view",
  "Attribution risk register",
  "Channel confidence matrix",
  "Incrementality readiness plan",
  "Executive decision memo + live readout",
];

const deskItems = [
  "Recurring commercial-performance reconciliation",
  "Metric contract and change log",
  "Data-quality and tracking issue reviews",
  "Independent briefs before material budget decisions",
  "Experiment backlog, design, and readouts",
  "Cross-functional measurement sessions",
];

const process = [
  {
    number: "01",
    title: "Frame the decision",
    text: "We agree on the business question, scope, definitions, stakeholders, and what a useful answer would change.",
  },
  {
    number: "02",
    title: "Collect the evidence",
    text: "We request the smallest practical set of exports or read-only access, then review existing reports, models, and test results.",
  },
  {
    number: "03",
    title: "Reconcile and challenge",
    text: "We align the commercial record, test metric logic, identify attribution risks, and assess whether causal conclusions are justified.",
  },
  {
    number: "04",
    title: "Deliver the decision record",
    text: "You receive the method, findings, confidence levels, recommendations, and a working session with the relevant team.",
  },
];

const principles = [
  [
    "Definitions before conclusions",
    "Every important metric is tied to its source, formula, grain, window, and owner.",
  ],
  [
    "Different questions stay different",
    "Financial performance is not attribution. Attribution is not incrementality.",
  ],
  [
    "Uncertainty is reported",
    "We separate reliable findings, directional signals, assumptions, and unanswered questions.",
  ],
  [
    "Recommendations remain auditable",
    "Each recommendation includes its evidence, limits, decision threshold, and next test.",
  ],
  [
    "No incentive to defend media spend",
    "Calyxra does not manage media or earn a percentage of advertising spend.",
  ],
];

const faqs = [
  {
    q: "What is an Independent Measurement Office?",
    a: "It is an external measurement function working between Growth, Finance, analytics, and agency partners. Calyxra establishes shared definitions, reconciles source data, evaluates what attribution can and cannot support, and turns unresolved questions into a practical testing plan.",
  },
  {
    q: "Is Calyxra an attribution platform?",
    a: "No. Attribution platforms can provide useful views of journeys and channel credit. We examine those outputs alongside commerce and financial records, document where definitions differ, and decide whether the evidence is suitable for the decision being made.",
  },
  {
    q: "Do you calculate ‘true ROAS’?",
    a: "We do not use ‘true ROAS’ as a blanket claim. We can calculate reconciled media-efficiency metrics under an agreed revenue or margin definition. That is still different from incremental return, which requires appropriate causal evidence.",
  },
  {
    q: "Can you prove incrementality during an audit?",
    a: "Only if suitable experimental evidence already exists. Otherwise, the audit shows what is currently known, identifies confounding factors, and produces a feasible test plan. A valid causal result needs an appropriate design and observation period.",
  },
  {
    q: "What data do you need?",
    a: "The exact list depends on the question. It may include orders and refunds, payment data, product and variable costs, media spend and campaign exports, analytics configurations, attribution settings, and prior experiment results. We request only what is relevant to the agreed scope.",
  },
  {
    q: "Do you need direct access to our systems?",
    a: "Not always. Many audits can begin with exports and walkthroughs. When direct access materially improves reliability, we request read-only permission and document the required scope before access is granted.",
  },
  {
    q: "How long does an audit take?",
    a: "Most initial audits are planned for 10 business days after the required data, access, and definitions are complete. More complex scopes may take longer; the delivery date is agreed before work starts.",
  },
  {
    q: "Can you work with our existing agency or analytics team?",
    a: "Yes. Calyxra is designed to add an independent measurement layer, not replace the people operating your channels or systems. We involve the relevant teams in definitions, evidence review, and the final readout.",
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
              <span>Independent measurement</span>
              <span>DTC + omnichannel</span>
            </p>
            <h1>
              Marketing has a number.
              <br />
              Finance has another.
              <span>We make the next decision clearer.</span>
            </h1>
            <p className="hero-deck">
              Calyxra is an independent measurement office for DTC brands. We
              reconcile commercial performance, audit attribution, and design
              incrementality tests—so your team knows what to scale, cut, hold,
              or test next.
            </p>
            <div className="hero-actions">
              <ExternalCta>Book a measurement review</ExternalCta>
              <Link href="#engagements" className="text-link text-link-light">
                See what we deliver
                <MoveRight aria-hidden="true" size={18} />
              </Link>
            </div>
            <p className="hero-note">
              Independent from media spend. Built to work with your existing
              stack.
            </p>
          </div>

          <div className="decision-board-wrap" aria-label="Illustrative decision brief">
            <div className="decision-board">
              <div className="board-topline">
                <span>Decision brief</span>
                <span>No. 007</span>
              </div>
              <div className="board-question">
                <span>Question</span>
                <p>Should paid search receive the next budget increase?</p>
              </div>
              <div className="board-signal-grid">
                <div>
                  <span className="signal-dot signal-green" />
                  <small>Financial record</small>
                  <strong>Reconciled</strong>
                </div>
                <div>
                  <span className="signal-dot signal-orange" />
                  <small>Attribution confidence</small>
                  <strong>Mixed</strong>
                </div>
                <div>
                  <span className="signal-dot signal-orange" />
                  <small>Incrementality</small>
                  <strong>Needs testing</strong>
                </div>
                <div className="board-action">
                  <small>Recommended action</small>
                  <strong>HOLD + TEST</strong>
                </div>
              </div>
              <div className="board-footer">
                <span>Evidence ≠ certainty</span>
                <span>Illustrative output</span>
              </div>
            </div>
            <div className="board-tab board-tab-one">Growth</div>
            <div className="board-tab board-tab-two">Finance</div>
            <div className="board-stamp">Decision ready</div>
          </div>
        </div>

        <div className="hero-rail" aria-label="Systems we work across">
          <span>Evidence can live in</span>
          <span>Shopify</span>
          <span>Meta</span>
          <span>Google</span>
          <span>GA4</span>
          <span>Klaviyo</span>
          <span>Attribution tools</span>
          <span>Finance models</span>
        </div>
      </section>

      <section className="problem-section section-pad" id="what-we-measure">
        <div className="site-frame">
          <div className="section-heading-grid">
            <SectionLabel>The operating problem</SectionLabel>
            <div>
              <h2>
                Your systems are not broken because their numbers differ.
                <em>They were built to answer different questions.</em>
              </h2>
              <p className="section-lead">
                Shopify records orders. Payment processors settle transactions.
                Ad platforms assign credit. Finance calculates margin. None of
                those views, by itself, answers whether more budget should go
                into a channel.
              </p>
            </div>
          </div>

          <div className="evidence-layers">
            {evidenceLayers.map((layer) => (
              <article className={`evidence-card ${layer.tone}`} key={layer.title}>
                <span className="card-number">{layer.number}</span>
                <h3>{layer.title}</h3>
                <p>{layer.question}</p>
                <ArrowDownRight aria-hidden="true" size={24} strokeWidth={1.5} />
              </article>
            ))}
          </div>
          <p className="layer-conclusion">
            Calyxra keeps these questions separate before bringing them together
            for the decision at hand.
          </p>
        </div>
      </section>

      <section className="capabilities-section section-pad">
        <div className="site-frame">
          <div className="section-heading-grid section-heading-light">
            <SectionLabel>What we do</SectionLabel>
            <div>
              <h2>We do the work between the dashboards.</h2>
              <p className="section-lead">
                Calyxra does not replace your finance team, analytics stack, or
                media agency. We make their outputs comparable, document the
                assumptions, and translate the available evidence into decisions.
              </p>
            </div>
          </div>

          <div className="capability-list">
            {capabilities.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <CircleDot aria-hidden="true" size={20} strokeWidth={1.5} />
              </article>
            ))}
          </div>

          <div className="statement-banner">
            <span>The output is not “one perfect number.”</span>
            <strong>It is a defensible decision record.</strong>
          </div>
        </div>
      </section>

      <section className="engagements-section section-pad" id="engagements">
        <div className="site-frame">
          <div className="section-heading-grid">
            <SectionLabel>Ways to work together</SectionLabel>
            <div>
              <h2>Start with one consequential decision.</h2>
              <p className="section-lead">
                Every engagement begins with the question your team is trying to
                answer—not a software migration or a pre-selected model.
              </p>
            </div>
          </div>

          <div className="engagement-grid">
            <article className="audit-card" id="audit">
              <div className="engagement-card-top">
                <p>01 / First engagement</p>
                <span>Fixed scope</span>
              </div>
              <h3>The DTC Measurement Audit</h3>
              <p className="engagement-intro">
                A focused review of one important growth decision and the
                numbers behind it. A typical scope covers one storefront, core
                paid channels, and an agreed analysis period.
              </p>

              <div className="audit-meta">
                <div>
                  <span>From</span>
                  <strong>$3,000</strong>
                  <small>final fixed fee confirmed in scope</small>
                </div>
                <div>
                  <span>Timing</span>
                  <strong>10 business days</strong>
                  <small>after complete data, access, and definitions</small>
                </div>
              </div>

              <p className="deliverables-label">Typical deliverables</p>
              <ul className="deliverables-grid">
                {auditDeliverables.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" size={17} strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="truth-callout">
                If the available data cannot support an answer, that is a
                finding—not a gap we fill with an estimate.
              </div>
              <ExternalCta dark>Scope an audit</ExternalCta>
            </article>

            <div className="engagement-side-stack">
              <article className="desk-card">
                <div className="engagement-card-top">
                  <p>02 / Ongoing</p>
                  <span>Monthly</span>
                </div>
                <h3>Fractional Measurement Desk</h3>
                <p>
                  Your independent measurement function across Growth, Finance,
                  and agency partners—without building another full-time
                  department.
                </p>
                <ul>
                  {deskItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="side-card-price">
                  <span>Starting at</span>
                  <strong>$4,500 / month</strong>
                </div>
              </article>

              <article className="lab-card">
                <div className="engagement-card-top">
                  <p>03 / When ready</p>
                  <span>Custom scope</span>
                </div>
                <h3>Experiment &amp; Budget Lab</h3>
                <p>
                  Design and readout support for the highest-value unresolved
                  question—once the data and test conditions can support it.
                </p>
                <Link href="#how-it-works" className="text-link">
                  See our working method
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="decision-section section-pad">
        <div className="site-frame decision-section-grid">
          <div className="decision-copy">
            <SectionLabel>Anatomy of a decision</SectionLabel>
            <h2>Every recommendation shows the evidence behind it.</h2>
            <p>
              No black-box score and no decorative dashboard. The decision memo
              makes the question, supporting evidence, uncertainty, and next
              action visible to every stakeholder.
            </p>
            <div className="decision-key">
              <span><i className="key-reliable" /> Reliable</span>
              <span><i className="key-directional" /> Directional</span>
              <span><i className="key-open" /> Unresolved</span>
            </div>
          </div>

          <article className="memo-card">
            <div className="memo-header">
              <span>Calyxra / Decision brief</span>
              <span>Illustrative only</span>
            </div>
            <div className="memo-question">
              <small>Decision question</small>
              <h3>Should branded search spend increase?</h3>
            </div>
            <div className="memo-row">
              <div>
                <small>Financial performance</small>
                <p>Positive contribution margin under the agreed definition.</p>
              </div>
              <span className="memo-status status-reliable">Reliable</span>
            </div>
            <div className="memo-row">
              <div>
                <small>Attribution signal</small>
                <p>Strong platform-reported efficiency.</p>
              </div>
              <span className="memo-status status-directional">Directional</span>
            </div>
            <div className="memo-row">
              <div>
                <small>Evidence risk</small>
                <p>Meaningful overlap with direct and organic demand.</p>
              </div>
              <span className="memo-status status-open">Open</span>
            </div>
            <div className="memo-decision">
              <div>
                <small>Recommendation</small>
                <strong>HOLD</strong>
              </div>
              <p>
                Assess whether a valid holdout design is feasible before
                increasing budget.
              </p>
            </div>
            <p className="memo-caption">
              Illustrative format. Not client data or a performance claim.
            </p>
          </article>
        </div>
      </section>

      <section className="fit-section section-pad">
        <div className="site-frame">
          <div className="section-heading-grid section-heading-light">
            <SectionLabel>Who we work with</SectionLabel>
            <div>
              <h2>Built for teams with consequential measurement questions.</h2>
              <p className="section-lead">
                Calyxra is most useful when disagreement in the numbers is
                delaying or weakening a real investment decision.
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
                <li>Growth and Finance use different performance numbers.</li>
                <li>You make material budget decisions across several channels.</li>
                <li>You have reporting tools but lack agreement on what their outputs mean.</li>
                <li>You want an independent view alongside your team or agency.</li>
                <li>You are willing to test conclusions that remain uncertain.</li>
              </ul>
            </article>
            <article className="fit-no">
              <div className="fit-heading">
                <X aria-hidden="true" size={24} />
                <h3>Probably not a fit when</h3>
              </div>
              <ul>
                <li>You need day-to-day media buying or creative production.</li>
                <li>You want a guaranteed causal result without a valid test.</li>
                <li>You only want a prettier dashboard on unresolved definitions.</li>
                <li>You need the analysis to defend a predetermined conclusion.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="founder-section section-pad">
        <div className="site-frame founder-grid">
          <SectionLabel>Founder-led measurement</SectionLabel>
          <div className="founder-copy">
            <h2>The people writing the recommendation join the conversation.</h2>
            <p>
              Calyxra is a founder-led practice. Lukian Kononchuk works across
              data engineering, ecommerce analytics, measurement, and decision
              support—so the handoff from source data to executive readout stays
              accountable.
            </p>
            <p>
              For specialist questions, Calyxra works alongside the client’s
              Finance, Growth, analytics, and agency teams rather than replacing
              them.
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
            <SectionLabel>How it works</SectionLabel>
            <div>
              <h2>Start with the decision. Then inspect the numbers.</h2>
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
            <p>One live question is enough to start.</p>
            <ExternalCta dark>Book a measurement review</ExternalCta>
          </div>
        </div>
      </section>

      <section className="principles-section section-pad">
        <div className="site-frame principles-grid">
          <div className="principles-heading">
            <SectionLabel>Working principles</SectionLabel>
            <h2>Independent by design. Explicit about uncertainty.</h2>
            <p>
              Measurement is useful when teams can inspect it, challenge it, and
              still understand why a decision was made.
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
            <h2>Questions before the first question.</h2>
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
            <SectionLabel>Start here</SectionLabel>
            <h2>Bring us the reports that disagree.</h2>
            <p>
              On a short introductory call, we will identify the decision at
              stake, the systems involved, and whether a Measurement Audit is the
              right next step.
            </p>
          </div>
          <div className="final-actions">
            <ExternalCta>Book a measurement review</ExternalCta>
            <a href="mailto:admin@calyxra.com" className="text-link text-link-light">
              Email Calyxra
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <small>No polished deck required. Bring one live question.</small>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

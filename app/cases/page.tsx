import type { Metadata } from "next";
import { ArrowDownRight, ArrowRight, Check, MoveRight } from "lucide-react";
import InteriorShell from "@/components/InteriorShell";
import { caseFiles } from "@/data/cases";

const reviewUrl = "https://cal.com/calyxra/15min";

export const metadata: Metadata = {
  title: "Illustrative Measurement Resolution Cases",
  description:
    "Three worked DTC measurement failures showing the signal, bounded correction, and acceptance test that closes each incident.",
  alternates: { canonical: "/cases" },
  openGraph: {
    type: "website",
    siteName: "Calyxra",
    title: "Illustrative Measurement Resolution Cases — Calyxra",
    description:
      "Three measurement failures. Three bounded fixes you can verify.",
    url: "/cases",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Illustrative Measurement Resolution Cases — Calyxra",
    description:
      "Follow each measurement incident from signal to correction and proof.",
    images: ["/og.png"],
  },
};

function DedupArtifact() {
  return (
    <div className="case-artifact artifact-dedup" aria-label="Illustrative purchase-event deduplication trace">
      <div className="artifact-header">
        <span>Illustrative event trace / test order A-117</span>
        <span>Event identity</span>
      </div>
      <div className="artifact-compare">
        <section>
          <p className="artifact-stage-label">Before / mismatch</p>
          <div className="event-pair">
            <div className="artifact-node">
              <small>Browser purchase</small>
              <strong>ID A-117</strong>
            </div>
            <div className="artifact-node">
              <small>Server purchase</small>
              <strong>ID B-204</strong>
            </div>
          </div>
          <MoveRight aria-hidden="true" size={24} />
          <div className="artifact-result artifact-result-fail">
            <small>Destination reads</small>
            <strong>2 purchase records</strong>
            <span>Mismatch</span>
          </div>
        </section>
        <section>
          <p className="artifact-stage-label">After / corrected</p>
          <div className="event-pair">
            <div className="artifact-node">
              <small>Browser purchase</small>
              <strong>ID A-117</strong>
            </div>
            <div className="artifact-node">
              <small>Server purchase</small>
              <strong>ID A-117</strong>
            </div>
          </div>
          <MoveRight aria-hidden="true" size={24} />
          <div className="artifact-result artifact-result-pass">
            <small>Destination reads</small>
            <strong>1 logical purchase</strong>
            <span>Pass</span>
          </div>
        </section>
      </div>
      <p className="artifact-caption">
        A test-order trace illustrates collection integrity only. It is not a revenue or attribution result.
      </p>
    </div>
  );
}

function MetricContractArtifact() {
  const sources = [
    ["Paid platforms", "Pacing signal", "Attributed conversion value"],
    ["Attribution model", "Diagnostic", "Channel credit under model rules"],
    ["Finance contribution", "Budget guardrail", "Realised commercial economics"],
  ];

  return (
    <div className="case-artifact artifact-metrics" aria-label="Illustrative metric-role contract">
      <div className="artifact-header">
        <span>Illustrative metric-role map</span>
        <span>Defined roles ≠ forced equality</span>
      </div>
      <div className="metric-source-grid">
        {sources.map(([source, role, definition]) => (
          <div className="metric-source" key={source}>
            <small>{source}</small>
            <strong>{role}</strong>
            <p>{definition}</p>
          </div>
        ))}
      </div>
      <div className="metric-connectors" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="metric-contract">
        <div>
          <small>Shared operating layer</small>
          <strong>Metric contract</strong>
        </div>
        <p>Source · formula · timing · refund lag · purpose · owner</p>
        <span>Approved</span>
      </div>
      <p className="artifact-caption">
        The resolution assigns each metric a job. It does not make attributed revenue equal company revenue.
      </p>
    </div>
  );
}

function HistoryArtifact() {
  return (
    <div className="case-artifact artifact-history" aria-label="Illustrative customer-history classification timeline">
      <div className="artifact-header">
        <span>Illustrative customer-history trace</span>
        <span>First eligible order</span>
      </div>
      <div className="history-rows">
        <section>
          <p className="artifact-stage-label">Before / recent extract only</p>
          <div className="history-line">
            <div className="history-event history-event-muted">
              <small>Older order</small>
              <strong>Not loaded</strong>
            </div>
            <div className="history-boundary"><span>Extract starts</span></div>
            <div className="history-event">
              <small>Current order</small>
              <strong>Observed</strong>
            </div>
            <div className="history-verdict history-verdict-wrong">
              <small>Classified</small>
              <strong>NEW</strong>
            </div>
          </div>
        </section>
        <section>
          <p className="artifact-stage-label">After / complete available history</p>
          <div className="history-line">
            <div className="history-event">
              <small>Earlier eligible order</small>
              <strong>Observed</strong>
            </div>
            <div className="history-path" aria-hidden="true"><MoveRight size={23} /></div>
            <div className="history-event">
              <small>Current order</small>
              <strong>Observed</strong>
            </div>
            <div className="history-verdict history-verdict-pass">
              <small>Classified</small>
              <strong>RETURNING</strong>
            </div>
          </div>
        </section>
      </div>
      <p className="artifact-caption">
        The correction repairs the reporting definition; it does not build a household identity graph.
      </p>
    </div>
  );
}

function CaseArtifact({ slug }: { slug: string }) {
  if (slug === "checkout-release") return <DedupArtifact />;
  if (slug === "growth-finance") return <MetricContractArtifact />;
  return <HistoryArtifact />;
}

export default function CasesPage() {
  return (
    <InteriorShell
      eyebrow="Illustrative resolution files"
      title="Three measurement failures. Three fixes you can verify."
      intro="Each file follows the signal to the broken layer, the bounded correction, and the acceptance test that closes it."
    >
      <section className="case-disclosure-wrap">
        <div className="site-frame case-disclosure">
          <strong>Constructed from recurring incident patterns</strong>
          <p>No client names, data, testimonials, realised results, or benchmarks.</p>
        </div>
      </section>

      <section className="site-frame case-overview-section" aria-labelledby="case-overview-title">
        <div className="case-overview-heading">
          <p className="section-label">
            <span aria-hidden="true">◆</span>
            File index
          </p>
          <h2 id="case-overview-title">Start with the contradiction your team can see.</h2>
        </div>
        <div className="case-overview-grid">
          {caseFiles.map((caseFile) => (
            <a
              className={`case-overview-card case-overview-${caseFile.tone}`}
              href={`#${caseFile.slug}`}
              key={caseFile.slug}
            >
              <div className="case-overview-topline">
                <span>File / {caseFile.number}</span>
                <ArrowDownRight aria-hidden="true" size={20} />
              </div>
              <p>{caseFile.summary}</p>
              <h3>{caseFile.incidentQuestion}</h3>
              <div className="case-overview-state">
                <span>Acceptance state</span>
                <strong>{caseFile.acceptanceState}</strong>
              </div>
              <span className="case-overview-open">Open file {caseFile.number}</span>
            </a>
          ))}
        </div>
      </section>

      <div className="case-story-stack">
        {caseFiles.map((caseFile) => (
          <article
            className={`case-story case-story-${caseFile.tone}`}
            id={caseFile.slug}
            key={caseFile.slug}
          >
            <div className="site-frame">
              <header className="case-story-head">
                <div className="case-story-id">
                  <span>Incident file / {caseFile.number}</span>
                  <strong>Illustrative pattern</strong>
                </div>
                <div className="case-story-title">
                  <p>{caseFile.summary}</p>
                  <h2>{caseFile.title}</h2>
                </div>
                <div className="case-story-state">
                  <span>Acceptance state</span>
                  <strong>{caseFile.acceptanceState}</strong>
                </div>
              </header>

              <div className="case-story-question">
                <span>Decision blocked</span>
                <p>{caseFile.incidentQuestion}</p>
              </div>

              <CaseArtifact slug={caseFile.slug} />

              <div className="case-verdict-grid">
                <section>
                  <span>Cause isolated</span>
                  <h3>{caseFile.causeSummary}</h3>
                </section>
                <section>
                  <span>Bounded change</span>
                  <h3>{caseFile.fixSummary}</h3>
                </section>
                <section>
                  <span>Acceptance check</span>
                  <h3>{caseFile.proofSummary}</h3>
                </section>
              </div>

              <div className="case-decision-unlocked">
                <div>
                  <span>Decision reopened</span>
                  <p>{caseFile.decisionUnlocked}</p>
                </div>
                <div>
                  <span>What this does not prove</span>
                  <p>{caseFile.boundary}</p>
                </div>
              </div>

              <details className="case-technical-details">
                <summary>
                  <span>Technical evidence &amp; acceptance criteria</span>
                  <strong>Open working file +</strong>
                </summary>
                <div className="case-technical-grid">
                  <section>
                    <h3>Systems in view</h3>
                    <ul>
                      {caseFile.systems.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </section>
                  <section>
                    <h3>Evidence reproduced</h3>
                    <ul>
                      {caseFile.evidence.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </section>
                  <section>
                    <h3>Acceptance criteria</h3>
                    <ul>
                      {caseFile.acceptance.map((item) => (
                        <li key={item}>
                          <Check aria-hidden="true" size={14} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </details>

              <footer className="case-story-footer">
                <span>Worked scenario · not a benchmark or expected outcome</span>
                <a
                  href={reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Bring us the live version
                  <ArrowRight aria-hidden="true" size={17} />
                </a>
              </footer>
            </div>
          </article>
        ))}
      </div>

      <section className="case-page-cta">
        <div className="site-frame case-page-cta-inner">
          <div>
            <p className="section-label">
              <span aria-hidden="true">◆</span>
              Your incident
            </p>
            <h2>The useful file is the one happening inside your business now.</h2>
            <p>
              We will assess fit, required evidence, change boundaries, and the
              acceptance criteria that would make the issue closable. No
              performance outcome is promised.
            </p>
          </div>
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-light"
          >
            Scope your incident
            <ArrowDownRight aria-hidden="true" size={18} />
          </a>
        </div>
      </section>
    </InteriorShell>
  );
}

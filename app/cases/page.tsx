import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Check } from "lucide-react";
import InteriorShell from "@/components/InteriorShell";
import { caseFiles } from "@/data/cases";

const reviewUrl = "https://cal.com/calyxra/15min";

export const metadata: Metadata = {
  title: "Illustrative Measurement Resolution Cases",
  description:
    "Worked DTC measurement scenarios showing how Calyxra reproduces an incident, finds the cause, completes bounded corrections, and verifies the next state.",
  alternates: { canonical: "/cases" },
  openGraph: {
    type: "website",
    siteName: "Calyxra",
    title: "Illustrative Measurement Resolution Cases — Calyxra",
    description:
      "Three worked incident files: checkout tracking, Growth-versus-Finance reconciliation, and customer classification.",
    url: "/cases",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Illustrative Measurement Resolution Cases — Calyxra",
    description:
      "See how a live measurement problem moves from symptom to correction and acceptance test.",
    images: ["/og.png"],
  },
};

export default function CasesPage() {
  return (
    <InteriorShell
      eyebrow="Illustrative incident files"
      title="See the work between “the numbers disagree” and “the issue is closed.”"
      intro="These worked scenarios show how Calyxra frames, investigates, corrects, and verifies a scoped measurement incident."
    >
      <section className="case-disclosure-wrap">
        <div className="site-frame case-disclosure">
          <strong>Composite scenarios · synthetic data</strong>
          <p>
            These are not client case studies. They contain no client data,
            testimonials, or realised performance results. Systems, evidence,
            and acceptance tests are constructed to explain the working method;
            every paid engagement is scoped against the client&apos;s actual incident.
          </p>
        </div>
      </section>

      <nav className="site-frame case-index" aria-label="Incident file index">
        <span>File index</span>
        {caseFiles.map((caseFile) => (
          <Link href={`#${caseFile.slug}`} key={caseFile.slug}>
            <b>{caseFile.number}</b>
            {caseFile.title}
            <ArrowDownRight aria-hidden="true" size={16} />
          </Link>
        ))}
      </nav>

      <div className="case-file-stack">
        {caseFiles.map((caseFile) => (
          <article
            className={`case-file case-file-${caseFile.tone}`}
            id={caseFile.slug}
            key={caseFile.slug}
          >
            <div className="site-frame">
              <header className="case-file-header">
                <div className="case-file-id">
                  <span>Incident file / {caseFile.number}</span>
                  <strong>Synthetic scenario · not a client result</strong>
                </div>
                <div className="case-file-title">
                  <p>{caseFile.summary}</p>
                  <h2>{caseFile.title}</h2>
                  <div className="case-file-status">
                    <span>Illustrative closure state</span>
                    <strong>{caseFile.status}</strong>
                  </div>
                </div>
              </header>

              <div className="case-question-strip">
                <span>Incident question</span>
                <p>{caseFile.incidentQuestion}</p>
              </div>

              <div className="case-file-grid">
                <section className="case-panel case-panel-decision">
                  <p className="case-panel-label">01 / Decision at risk</p>
                  <h3>{caseFile.decisionAtRisk}</h3>
                </section>

                <section className="case-panel">
                  <p className="case-panel-label">02 / Systems in view</p>
                  <ul className="case-system-list">
                    {caseFile.systems.map((system) => (
                      <li key={system}>{system}</li>
                    ))}
                  </ul>
                </section>

                <section className="case-panel">
                  <p className="case-panel-label">03 / Evidence reproduced</p>
                  <ul className="case-check-list">
                    {caseFile.evidence.map((item) => (
                      <li key={item}>
                        <Check aria-hidden="true" size={15} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="case-panel case-panel-cause">
                  <p className="case-panel-label">04 / Root cause</p>
                  <p>{caseFile.rootCause}</p>
                </section>

                <section className="case-panel case-panel-wide">
                  <p className="case-panel-label">05 / Approved bounded correction</p>
                  <ol className="case-step-list">
                    {caseFile.correction.map((item, index) => (
                      <li key={item}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </section>

                <section className="case-panel case-panel-wide case-panel-acceptance">
                  <p className="case-panel-label">06 / Acceptance test</p>
                  <div className="case-acceptance-grid">
                    {caseFile.acceptance.map((item) => (
                      <p key={item}>
                        <span aria-hidden="true">✓</span>
                        {item}
                      </p>
                    ))}
                  </div>
                </section>
              </div>

              <div className="case-handoff">
                <div>
                  <span>Decision handoff</span>
                  <p>{caseFile.handoff}</p>
                </div>
                <div>
                  <span>What this does not prove</span>
                  <p>{caseFile.boundary}</p>
                </div>
              </div>

              <footer className="case-file-footer">
                <span>Synthetic figures and conditions · not a benchmark or expected outcome</span>
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
            <h2>The useful case is the one happening inside your business now.</h2>
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

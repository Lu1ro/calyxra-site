export type CaseTone = "sage" | "coral" | "blue";

export type CaseFile = {
  slug: string;
  number: string;
  tone: CaseTone;
  status: string;
  title: string;
  summary: string;
  acceptanceState: string;
  causeSummary: string;
  fixSummary: string;
  proofSummary: string;
  decisionUnlocked: string;
  incidentQuestion: string;
  decisionAtRisk: string;
  systems: string[];
  evidence: string[];
  rootCause: string;
  correction: string[];
  acceptance: string[];
  handoff: string;
  boundary: string;
};

export const caseFiles: CaseFile[] = [
  {
    slug: "checkout-release",
    number: "01",
    tone: "sage",
    status: "Fixed + verified",
    title: "A checkout release made paid social look stronger overnight.",
    summary:
      "Reported Meta purchases moved immediately after a release. Shopify completed orders did not.",
    acceptanceState: "One logical purchase",
    causeSummary:
      "Browser and server purchase paths used different event IDs, so one order could become two reported purchases.",
    fixSummary:
      "Give both eligible event paths one deterministic order key and retire the obsolete duplicate trigger.",
    proofSummary:
      "A test order now produces one logical purchase with matching value, currency, and order reference.",
    decisionUnlocked:
      "Observe a clean post-fix window before deciding whether paid-social spend should change.",
    incidentQuestion:
      "Did campaign performance improve, or did the new implementation count the same purchase twice?",
    decisionAtRisk:
      "Whether the team should scale paid social after an apparent conversion improvement.",
    systems: [
      "Shopify Orders and Customer Events",
      "Meta Pixel and Conversions API",
      "Installed pixel app or tag manager",
      "Consent platform",
    ],
    evidence: [
      "Release timeline and affected reports",
      "Consent-eligible test orders",
      "Browser and server event payloads",
      "Event IDs, order references, value, currency, and timestamps",
    ],
    rootCause:
      "In this scenario, a new server-side purchase path ran beside the legacy browser trigger. The paths generated different event IDs, so the destination could not recognise them as the same logical purchase.",
    correction: [
      "Select one accountable purchase-event architecture.",
      "Map a shared deterministic event ID from the approved Shopify order key.",
      "Retire the obsolete duplicate trigger.",
      "Confirm value, currency, order-reference, and consent mappings.",
      "Record each in-scope setting changed and its rollback path.",
    ],
    acceptance: [
      "Each consent-eligible test order produces one logical purchase per destination.",
      "Browser and server copies, where both remain, share the same event ID.",
      "Value, currency, and order reference match the corresponding Shopify order.",
      "Refreshing the confirmation page does not produce another purchase event.",
      "Every exception in the agreed observation window is identified and explained.",
    ],
    handoff:
      "The collection defect is closed. The team can separate a tracking change from a commercial change and evaluate the clean post-fix window before changing spend.",
    boundary:
      "Meta-attributed conversions are not required to equal Shopify orders. Correct event collection improves reporting reliability; it does not create incremental revenue or causal proof.",
  },
  {
    slug: "growth-finance",
    number: "02",
    tone: "coral",
    status: "Metric contract agreed",
    title: "Growth said “scale.” Finance said “hold.” Both reports were consistent.",
    summary:
      "Platform ROAS, an attribution tool, and Finance were using different definitions of revenue.",
    acceptanceState: "Metric roles agreed",
    causeSummary:
      "Three internally consistent reports answered three different questions, but no metric had a documented decision right.",
    fixSummary:
      "Reconcile the eligible orders, label each metric’s role, and assign one Finance-grade budget guardrail.",
    proofSummary:
      "Sources, formulas, timing, refund lag, purpose, and owner are approved in one metric contract.",
    decisionUnlocked:
      "Growth can pace channels without reopening the Finance definition at every budget meeting.",
    incidentQuestion: "Which number should control next week’s media budget?",
    decisionAtRisk:
      "Whether contribution economics support more spend while channel dashboards report efficient growth.",
    systems: [
      "Shopify orders, discounts, cancellations, and refunds",
      "Payment settlement or payout exports",
      "Meta and Google Ads",
      "Attribution platform and Finance model",
    ],
    evidence: [
      "Eligible-order populations by report",
      "Gross-to-net revenue bridge",
      "Refund, cancellation, tax, fee, and currency treatment",
      "Attribution windows, timezones, and metric formulas",
    ],
    rootCause:
      "There is no broken pixel in this scenario. Platforms report attributed conversion value, the attribution tool redistributes channel credit, and Finance uses realised commercial economics. The operating defect is that no metric has a documented purpose, owner, or decision right.",
    correction: [
      "Build an order-level bridge from Shopify gross sales to the agreed commercial definition.",
      "Align order eligibility, timezone, currency, and refund lag.",
      "Label each metric as observed, attributed, modelled, or financial.",
      "Define which metric controls budget guardrails and which remains directional.",
      "Assign an owner, refresh cadence, and exception process.",
    ],
    acceptance: [
      "Growth and Finance use the same documented eligible-order population.",
      "Remaining reconciliation variance is inside the agreed tolerance or tied to named timing and currency items.",
      "No report presents overlapping channel-attributed revenue as additive company revenue.",
      "Each controlling metric has a source, formula, timezone, refund lag, purpose, and owner.",
      "The decision owners approve the metric contract in writing.",
    ],
    handoff:
      "Finance-grade contribution becomes the scale-or-hold guardrail. Platform and attribution metrics remain clearly defined diagnostic signals for pacing and channel operations.",
    boundary:
      "Reconciliation does not prove channel incrementality. If the remaining question is causal, the handoff specifies the experiment required instead of inventing a causal ROAS number.",
  },
  {
    slug: "customer-definition",
    number: "03",
    tone: "blue",
    status: "Corrected + monitor",
    title: "New-customer CAC improved because customer history had been cut short.",
    summary:
      "A reporting migration made returning buyers look new. Acquisition performance improved only in the dashboard.",
    acceptanceState: "Classification corrected",
    causeSummary:
      "The migrated model searched only the recent extract, so buyers with older orders were incorrectly marked as new.",
    fixSummary:
      "Rebuild first-order classification from the complete available history and version the customer definition.",
    proofSummary:
      "No sampled customer remains ‘new’ when an earlier eligible order exists, and each order is classified once.",
    decisionUnlocked:
      "Reset the new-customer CAC guardrail before allocating more prospecting budget.",
    incidentQuestion:
      "Can the team trust new-customer CAC before moving more budget into prospecting?",
    decisionAtRisk:
      "Whether prospecting deserves more budget after the reported new-customer share rises abruptly.",
    systems: [
      "Shopify Orders and Customers",
      "Warehouse or exported order model",
      "Customer-classification transformation",
      "Acquisition dashboard and attribution output",
    ],
    evidence: [
      "Extract boundaries and migration timeline",
      "Complete available paid-order history",
      "Current new-versus-returning logic",
      "Boundary cases, guest checkouts, and a stratified order sample",
    ],
    rootCause:
      "In this scenario, the migrated model searched for an earlier order only inside a recent extract. Customers whose first eligible purchase predated that extract were therefore classified as new.",
    correction: [
      "Define the first eligible order, excluding tests and other agreed non-commercial records.",
      "Rebuild first-order classification from the complete available Shopify history.",
      "Use Shopify customer ID as the primary identity key and document the guest-checkout fallback.",
      "Correct the affected transformation and its downstream dashboard.",
      "Version the definition in the metric contract.",
    ],
    acceptance: [
      "No current-period customer is marked new when an earlier eligible order exists.",
      "Every current-period eligible order is classified exactly once.",
      "A stratified manual sample matches the agreed definition with no unexplained exceptions.",
      "Dashboard totals reconcile to the corrected classification table.",
      "Old and corrected logic run in parallel through the agreed verification window without regression.",
    ],
    handoff:
      "The team can reset its new-customer CAC guardrail and judge prospecting against one durable customer definition rather than a migration artifact.",
    boundary:
      "This bounded correction does not build a household identity graph or prove the causal value of advertising. Broader identity engineering remains a separate scope.",
  },
];

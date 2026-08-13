import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://www.calyxra.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Calyxra — Independent Measurement for DTC Brands",
    template: "%s — Calyxra",
  },
  description:
    "Calyxra reconciles commercial performance, audits attribution, and designs incrementality tests so DTC leaders can make clearer marketing investment decisions.",
  keywords: [
    "DTC measurement",
    "marketing measurement audit",
    "attribution audit",
    "incrementality testing",
    "contribution margin analysis",
    "independent measurement office",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Calyxra",
    title: "Calyxra — Independent Measurement for DTC Brands",
    description:
      "Marketing has a number. Finance has another. We make the next decision clearer.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Calyxra — independent measurement for DTC brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calyxra — Independent Measurement for DTC Brands",
    description:
      "Reconcile performance. Audit attribution. Design the next test.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  applicationName: "Calyxra",
};

export const viewport: Viewport = {
  themeColor: "#151713",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Calyxra",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Independent measurement for DTC brands across commercial performance, attribution, and incrementality decisions.",
    email: "admin@calyxra.com",
    sameAs: [
      "https://www.linkedin.com/company/calyxra/",
      "https://www.linkedin.com/in/lukian-kononchuk-b66128364/",
    ],
    areaServed: "Worldwide",
    serviceType: [
      "DTC measurement audit",
      "Marketing attribution audit",
      "Incrementality test design",
    ],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./site.css";

const siteUrl = "https://www.calyxra.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Calyxra — Measurement Recovery for DTC Brands",
    template: "%s — Calyxra",
  },
  description:
    "Calyxra resolves live measurement incidents for Shopify-led DTC teams: find the cause, fix bounded issues, verify the result, and unblock the next decision.",
  keywords: [
    "DTC measurement recovery",
    "Shopify tracking audit",
    "marketing data reconciliation",
    "attribution troubleshooting",
    "conversion tracking repair",
    "measurement incident response",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Calyxra",
    title: "Calyxra — Measurement Recovery for DTC Brands",
    description:
      "Find the cause. Fix the measurement problem. Verify the result.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Calyxra — measurement recovery for DTC brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calyxra — Measurement Recovery for DTC Brands",
    description:
      "Find the cause. Fix the measurement problem. Verify the result.",
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
      "Measurement incident response for Shopify-led DTC teams, from root cause through bounded fixes and post-fix verification.",
    email: "admin@calyxra.com",
    sameAs: [
      "https://www.linkedin.com/company/calyxra/",
      "https://www.linkedin.com/in/lukian-kononchuk-b66128364/",
    ],
    areaServed: "Worldwide",
    serviceType: [
      "DTC measurement recovery",
      "Shopify tracking troubleshooting",
      "Marketing data reconciliation",
      "Attribution issue resolution",
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

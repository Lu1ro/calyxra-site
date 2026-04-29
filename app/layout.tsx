// app/layout.tsx | Root layout with SessionProvider

import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Calyxra — Revenue Reconciliation for Shopify Brands",
  description:
    "Meta says $100K. Shopify collected $78K. Calyxra finds the missing $22K — campaign by campaign — in 48 hours. Concierge audits from $249. Full refund if your gap is below 5%.",
  keywords: [
    "revenue reconciliation",
    "Shopify audit",
    "phantom revenue",
    "true ROAS",
    "Meta ads reconciliation",
    "Google ads reconciliation",
    "DTC attribution audit",
  ],
  openGraph: {
    title: "Calyxra — Revenue Reconciliation for Shopify Brands",
    description:
      "Your ad platforms are inflating your revenue. We find the gap — campaign by campaign — in 48 hours. Audits from $249.",
    url: "https://www.calyxra.com",
    siteName: "Calyxra",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Calyxra — Revenue Reconciliation for Shopify Brands",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calyxra — Revenue Reconciliation for Shopify Brands",
    description:
      "Meta says $100K. Shopify collected $78K. We find the missing $22K — in 48 hours. From $249.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FAFAF9] text-[#1C1917] font-sans selection:bg-[#064E3B]/20 overflow-x-hidden antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

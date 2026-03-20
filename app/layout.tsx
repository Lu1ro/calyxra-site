// app/layout.tsx | Root layout with SessionProvider

import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Calyxra | Revenue Reconciliation for Shopify Brands",
  description:
    "Your ad platforms report phantom revenue. Calyxra shows you the gap between what Meta/Google claim and what Shopify actually collected. Free scan available.",
  openGraph: {
    title: "Calyxra | Revenue Reconciliation for Shopify Brands",
    description: "Your ad platforms report phantom revenue. Calyxra shows you the gap between what Meta/Google claim and what Shopify actually collected. Free scan available.",
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
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FAFAF9] text-stone-900 font-sans selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
// app/layout.tsx | Root layout with SessionProvider

import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Calyxra | Revenue Reconciliation for Shopify Brands",
  description:
    "Calyxra reconciles ad platform revenue against Shopify net revenue so you can see true ROAS, phantom revenue, and real profit per campaign.",
  openGraph: {
    title: "Calyxra | Agency Reporting Infrastructure",
    description: "Premium White-Label Analytics. We turn messy Shopify data into reliable financial assets.",
    url: "https://www.calyxra.com",
    siteName: "Calyxra",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Calyxra | Executive Reporting",
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
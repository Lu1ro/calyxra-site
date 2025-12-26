import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Основне SEO
  title: "Calyxra | Power BI Dashboards & Data Analytics for Shopify",
  description: "Stop guessing. Start deciding. We turn messy Shopify data into reliable Power BI dashboards. 1–3 weeks delivery.",
  
  // Налаштування іконок для Google та пристроїв
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" }, // Рекомендовано Google
    ],
    shortcut: "/logo.png",
    apple: "/logo.png", // Для іконок на iPhone/iPad
  },

  // Налаштування для відображення в соцмережах (Telegram/LinkedIn)
  openGraph: {
    title: "Calyxra | Power BI Dashboards for Shopify",
    description: "Premium Shopify Analytics Solutions. Know your real margin.",
    images: ["/logo.png"], 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Додатковий лінк для пошукових роботів */}
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
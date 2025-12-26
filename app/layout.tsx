import type { Metadata } from "next";
import "./globals.css";

// Налаштування метаданих для Google та браузера
export const metadata: Metadata = {
  title: "Calyxra | Power BI Dashboards for Shopify",
  description: "Premium Shopify Analytics Solutions. Know your real margin after ads, logistics, and returns.",
  icons: {
    // Шлях до файлу logo.png, який лежить у вашій папці public
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
    <html lang="en">
      <head>
        {/* Пряме посилання на іконку для надійності */}
        <link rel="icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
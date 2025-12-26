import type { Metadata } from "next";
import "./globals.css"; // Переконайтеся, що цей імпорт у вас є, якщо використовуєте стилі

export const metadata: Metadata = {
  title: "Calyxra | Power BI Dashboards for Shopify",
  description: "Premium Shopify Analytics Solutions. Know your real margin after ads, logistics, and returns.",
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
    <html lang="en">
      <head>
        {/* Додатковий лінк для кращої підтримки браузерами */}
        <link rel="icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
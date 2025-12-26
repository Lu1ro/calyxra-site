import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Те, що відображається в пошуку та на вкладці
  title: "Calyxra | Power BI Dashboards & Data Analytics",
  description: "Stop guessing. Start deciding. We turn messy Shopify data into reliable Power BI dashboards.",
  
  // Налаштування для месенджерів (Telegram, WhatsApp, Facebook)
  openGraph: {
    title: "Calyxra | Power BI Dashboards for Founders",
    description: "Premium Shopify Analytics Solutions. Know your real margin after ads and logistics.",
    url: "https://www.calyxra.com",
    siteName: "Calyxra",
    images: [
      {
        url: "/logo.png", // Шлях до вашого логотипу в папці public
        width: 800,
        height: 600,
        alt: "Calyxra Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Іконки для браузера
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
      <body>{children}</body>
    </html>
  );
}
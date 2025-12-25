import "./globals.css"; // ЦЕЙ РЯДОК ПОВЕРНЕ ДИЗАЙН

export const metadata = {
  title: "Calyxra | Power BI Dashboards & Data Analytics for Founders",
  description: "Stop guessing. Start deciding. We turn messy data into reliable Power BI dashboards. 1–3 weeks delivery by Lukian & Oleh.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
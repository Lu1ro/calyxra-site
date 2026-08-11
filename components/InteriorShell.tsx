import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InteriorShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="interior-page">
      <Navbar />
      <header className="interior-hero">
        <div className="site-frame">
          <p className="section-label">
            <span aria-hidden="true">◆</span>
            {eyebrow}
          </p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </header>
      {children}
      <Footer />
    </main>
  );
}

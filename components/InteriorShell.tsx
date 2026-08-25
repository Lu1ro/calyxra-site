import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InteriorShell({
  eyebrow,
  title,
  intro,
  actions,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  actions?: ReactNode;
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
          {actions ? <div className="interior-hero-actions">{actions}</div> : null}
        </div>
      </header>
      {children}
      <Footer />
    </main>
  );
}

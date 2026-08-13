import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="interior-page">
      <Navbar />
      <header className="interior-hero">
        <div className="site-frame">
          <p className="section-label">
            <span aria-hidden="true">◆</span>
            Error / 404
          </p>
          <h1>This report is no longer in the stack.</h1>
          <p>The page may have moved or no longer exists.</p>
        </div>
      </header>
      <div className="site-frame" style={{ paddingBlock: "70px 100px" }}>
        <Link href="/" className="button button-dark" style={{ width: "fit-content" }}>
          <ArrowLeft aria-hidden="true" size={18} />
          Return to Calyxra
        </Link>
      </div>
      <Footer />
    </main>
  );
}

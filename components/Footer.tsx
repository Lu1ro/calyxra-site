import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-frame footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand-mark" aria-label="Calyxra home">
            <Image
              src="/calyxra-mark-reversed.svg"
              alt=""
              width={30}
              height={30}
              className="brand-mark-image"
              aria-hidden="true"
            />
            <strong>Calyxra<i>.</i></strong>
          </Link>
          <p>
            Measurement incident response for Shopify-led DTC teams. We find
            the cause, fix bounded issues, and verify the result.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/#problems">Problems we resolve</Link>
          <Link href="/#resolution">How resolution works</Link>
          <Link href="/#sprint">Recovery Sprint</Link>
          <Link href="/cases">Illustrative incident files</Link>
          <Link href="/#how-it-works">How it works</Link>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <a href="https://cal.com/calyxra/15min" target="_blank" rel="noopener noreferrer">
            Book a problem review
          </a>
          <a href="mailto:admin@calyxra.com">Email Calyxra</a>
          <a
            href="https://www.linkedin.com/company/calyxra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <Link href="/contact">Contact details</Link>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/security">Data &amp; security</Link>
        </div>
      </div>

      <div className="site-frame footer-bottom">
        <span>© {new Date().getFullYear()} Calyxra</span>
        <span>Cause → fix → verification</span>
      </div>
    </footer>
  );
}

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
            An independent measurement office for DTC brands. We reconcile
            commercial performance, audit attribution, and design the next test.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/#what-we-measure">What we do</Link>
          <Link href="/#engagements">Engagements</Link>
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#faq">FAQ</Link>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <a href="https://cal.com/calyxra/15min" target="_blank" rel="noopener noreferrer">
            Book a review
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
        <span>Independent from media-spend incentives</span>
      </div>
    </footer>
  );
}

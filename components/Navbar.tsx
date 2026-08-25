"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/#problems", label: "Problems" },
  { href: "/#resolution", label: "Resolution" },
  { href: "/#sprint", label: "Sprint" },
  { href: "/cases", label: "Case files" },
  { href: "/partners", label: "For agencies" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell">
      <div className="site-frame nav-inner">
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

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <a
            href="https://cal.com/calyxra/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Bring an incident
            <ArrowUpRight aria-hidden="true" size={14} strokeWidth={2} />
          </a>
        </nav>

        <button
          type="button"
          className="mobile-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a
            href="https://cal.com/calyxra/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Bring an incident
            <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </nav>
      )}
    </header>
  );
}

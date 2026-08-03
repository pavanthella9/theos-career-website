"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe2, Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "../lib/site";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Training", "/training"],
  ["Placements", "/placements"],
  ["Jobs", "/jobs"],
  ["Employers", "/employers"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span><Globe2 size={15} /> Global training and career support</span>
          <span className="markets">India <i /> Singapore <i /> Malaysia</span>
        </div>
      </div>

      <div className="container brand-row-clean">
        <Link className="brand-clean" href="/" aria-label={site.name}>
          <Image className="brand-mark" src="/tcc-mark.png" alt="TCC logo" width={180} height={90} priority />
          <span className="brand-divider" />
          <span className="brand-copy-clean">
            <strong>{site.name}</strong>
            <small><b /> {site.tagline} <b /></small>
          </span>
        </Link>
        <Link className="button button-small desktop-cta" href="/contact">Free Consultation</Link>
      </div>

      <div className="nav-shell">
        <div className="container nav-row">
          <nav className="nav" aria-label="Primary navigation">
            {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
          <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
            <Link className="button" href="/contact" onClick={() => setOpen(false)}>Free Consultation</Link>
          </nav>
        )}
      </div>
    </header>
  );
}

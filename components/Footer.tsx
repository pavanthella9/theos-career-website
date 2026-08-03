import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "../lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{site.name}</h3>
          <p>{site.tagline}</p>
          <p>Industry-focused training, career guidance and ethical placement assistance for IT and non-IT professionals.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link href="/training">Training Programs</Link>
          <Link href="/placements">Placement Assistance</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/employers">For Employers</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={`tel:${site.phoneLink}`}><Phone size={17} /> {site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}><Mail size={17} /> {site.email}</a>
          <span><MapPin size={17} /> {site.address}</span>
        </div>
        <div>
          <h4>Service Locations</h4>
          <span>India</span>
          <span>Singapore</span>
          <span>Malaysia</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span><Link href="/privacy">Privacy Policy</Link> · <Link href="/terms">Terms</Link></span>
      </div>
    </footer>
  );
}

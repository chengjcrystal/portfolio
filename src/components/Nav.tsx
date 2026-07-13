"use client";

import Link from "next/link";

export default function Nav() {
  // a Link to "/" won't re-scroll when we're already on the home route, so
  // nudge the page to the top ourselves on every click of the logo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav>
      <Link href="/" className="nav-logo" onClick={scrollToTop}>
        Crystal Cheng
      </Link>
      <ul className="nav-links">
        <li className="nav-section-link"><Link href="/#about">About</Link></li>
        <li className="nav-section-link"><Link href="/#experience">Experience</Link></li>
        <li className="nav-section-link"><Link href="/#projects">Projects</Link></li>
        <li className="nav-section-link"><Link href="/#skills">Skills</Link></li>
        <li>
          <Link href="/#contact" className="nav-contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
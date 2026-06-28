import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        Crystal Cheng
      </Link>
      <ul className="nav-links">
        <li className="nav-section-link"><Link href="/#experience">Experience</Link></li>
        <li className="nav-section-link"><Link href="/#projects">Projects</Link></li>
        <li className="nav-section-link"><Link href="/#skills">Skills</Link></li>
        <li>
          <Link href="/contact" className="nav-contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
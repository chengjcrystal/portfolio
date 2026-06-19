import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        Crystal Cheng
      </Link>
      <ul className="nav-links">
        <li><a href="/#experience">Experience</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#skills">Skills</a></li>
        <li>
          <Link href="/contact" className="nav-contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
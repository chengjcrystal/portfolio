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
          <a
            href="mailto:cjcheng@berkeley.edu"
            className="nav-contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
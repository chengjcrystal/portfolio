import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        Crystal Cheng
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/#experience">Work</Link>
        </li>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact" className="nav-contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  // smooth scroll for same-page hash links, normal nav otherwise
  const handleHash = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (pathname === "/") {
      e.preventDefault();
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <Link href="/" className="nav-logo">
        Crystal Cheng
      </Link>
      <ul className="nav-links">
        <li>
          <a href="/#experience" onClick={(e) => handleHash(e, "#experience")}>
            Experience
          </a>
        </li>
        <li>
          <a href="/#projects" onClick={(e) => handleHash(e, "#projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="/#skills" onClick={(e) => handleHash(e, "#skills")}>
            Skills
          </a>
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
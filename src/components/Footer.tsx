"use client";

export default function Footer() {
  return (
    <footer>
      {/* left: quick links as little labeled icons */}
      <div className="footer-links">
        <a
          className="footer-icon-link"
          href="/assets/crystal-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ti ti-file-text" />
          <span>resume</span>
        </a>
        <a
          className="footer-icon-link"
          href="https://linkedin.com/in/chengjcrystal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ti ti-brand-linkedin" />
          <span>linkedin</span>
        </a>
        <a
          className="footer-icon-link"
          href="https://github.com/chengjcrystal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ti ti-brand-github" />
          <span>github</span>
        </a>
        <div className="footer-divider" />
        <a
          className="footer-icon-link"
          href="mailto:chengjcrystal@berkeley.edu"
        >
          <i className="ti ti-mail" />
          <span>email</span>
        </a>
      </div>

      {/* right: updated note + little made-with line */}
      <div className="footer-right">
        <p className="footer-note">last updated june 2026 ᨳଓ</p>
        <p className="footer-made">made with next.js + lots of french vanilla ☕</p>
      </div>
    </footer>
  );
}
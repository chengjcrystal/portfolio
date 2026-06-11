import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact · Crystal Cheng",
  description: "How to reach Crystal Cheng.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="contact-wrap">
        <h1 className="contact-title">
          Let&apos;s
          <br />
          <span>talk.</span>
        </h1>
        <p className="contact-sub">
          Open to software engineering internships and full-time roles. Email me,
          or ask about Berkeley food spots.
        </p>

        <div className="contact-links">
          <a className="contact-link" href="mailto:cjcheng@berkeley.edu">
            <i className="ti ti-mail" />
            cjcheng@berkeley.edu
            <span className="contact-link-label">Email ↗</span>
          </a>
          <a
            className="contact-link"
            href="https://linkedin.com/in/chengjcrystal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ti ti-brand-linkedin" />
            linkedin.com/in/chengjcrystal
            <span className="contact-link-label">LinkedIn ↗</span>
          </a>
          <a
            className="contact-link"
            href="https://github.com/chengjcrystal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ti ti-brand-github" />
            github.com/chengjcrystal
            <span className="contact-link-label">GitHub ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

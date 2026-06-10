import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Crystal",
  description:
    "Get in touch with Crystal Cheng for AI/ML engineering roles and research collaborations.",
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
          I&apos;m currently open to AI/ML engineering roles and research
          collaborations. Feel free to reach out — I&apos;m always happy to chat
          about ML, systems, or Berkeley recommendations.
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

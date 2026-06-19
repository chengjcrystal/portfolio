import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact · Crystal Cheng",
  description: "How to reach Crystal Cheng.",
};

const links = [
  {
    href: "mailto:cjcheng@berkeley.edu",
    icon: "ti-mail",
    value: "cjcheng@berkeley.edu",
    label: "Email ↗",
  },
  {
    href: "https://linkedin.com/in/chengjcrystal",
    icon: "ti-brand-linkedin",
    value: "linkedin.com/in/chengjcrystal",
    label: "LinkedIn ↗",
    external: true,
  },
  {
    href: "https://github.com/chengjcrystal",
    icon: "ti-brand-github",
    value: "github.com/chengjcrystal",
    label: "GitHub ↗",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <section className="section contact-section">
      <div className="contact-wrap">
        <div className="contact-stamp">
          open to
          <br />
          offers
        </div>

        <p className="eyebrow">Reach me in any way!</p>

        <h1 className="contact-title">
          Let&apos;s
          <br />
          <span className="contact-title-accent">talk.</span>
        </h1>

        <p className="contact-sub">
          Looking for an AI Analyst who cares about privacy and data ethics?
          I'm ready to help scale Machine Learning systems that make a daily impact
          without compromising user trust.
        </p>
        <p className="contact-sub">
          Always open to connecting or chatting!
        </p>

        <div className="contact-links">
          {links.map((link) => (
            <a
              key={link.href}
              className="contact-link"
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <i className={`ti ${link.icon}`} />
              <span className="contact-link-value">{link.value}</span>
              <span className="contact-link-label">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
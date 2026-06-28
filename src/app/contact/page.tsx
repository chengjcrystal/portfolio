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
          work
        </div>

        <p className="eyebrow">I&rsquo;d love to hear from you</p>

        <h1 className="contact-title">
          Let&apos;s <span className="contact-title-accent">talk.</span>
        </h1>

        <p className="contact-sub">
          I&rsquo;m finishing my CS and Applied Math degree at Berkeley this December and looking
          for a full-time software or machine learning role starting January 2027. If your team is
          building AI thoughtfully, with real care for privacy and data ethics, I&rsquo;d love to
          talk.
        </p>
        <p className="contact-sub">
          Email is the quickest way to reach me, but any of these work. I read every message and
          always write back.
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
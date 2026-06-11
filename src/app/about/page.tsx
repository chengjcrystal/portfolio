import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · Crystal Cheng",
  description: "CS + Applied Math at UC Berkeley. Expected Dec 2026.",
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">About</h2>
      </div>

      <div className="about-grid">
        <div>
          <h2 className="about-title">
            CS and Applied Math
            <br />
            at Berkeley.
          </h2>

          <p className="about-body">
            I&apos;m graduating in Dec 2026 with a BA in Computer Science and
            Applied Mathematics. Outside class I&apos;m Treasurer for Society of
            Women Engineers and build for Web Development at Berkeley and Berkeley
            Project.
          </p>

          <p className="about-body">
            Most of my internships have been full-stack or backend work: Next.js
            and React on the frontend, AWS and Terraform on the infra side, plus
            some ML for matching and retrieval when the product needs it.
          </p>

          <div className="two-col">
            <div>
              <p className="list-label">Interests</p>
              <ul className="interest-list">
                <li>
                  <span className="idot" />
                  Full-stack web development
                </li>
                <li>
                  <span className="idot" />
                  Machine learning
                </li>
                <li>
                  <span className="idot" />
                  Cloud infrastructure
                </li>
                <li>
                  <span className="idot" />
                  Retrieval and NLP
                </li>
              </ul>
            </div>
            <div>
              <p className="list-label">Tools I use</p>
              <div className="tag-row">
                <span className="tag">Python</span>
                <span className="tag">React</span>
                <span className="tag">Next.js</span>
                <span className="tag">TypeScript</span>
                <span className="tag">PyTorch</span>
                <span className="tag">AWS</span>
                <span className="tag">Terraform</span>
                <span className="tag">Docker</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-illus">
          <i
            className="ti ti-pencil"
            style={{ fontSize: 20, color: "var(--brown4)" }}
          />
          <span className="about-illus-text">
            Your drawing
            <br />
            goes here
          </span>
        </div>
      </div>
    </section>
  );
}

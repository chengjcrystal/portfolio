import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Crystal Cheng",
  description:
    "About Crystal Cheng — CS and Applied Math student at UC Berkeley.",
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
            I care about building
            <br />
            intelligent systems that are
            <br />
            <em>rigorous</em> and genuinely useful.
          </h2>

          <p className="about-body">
            I&apos;m studying Computer Science and Applied Mathematics at UC
            Berkeley, where I split my time between research questions and the
            engineering work that turns them into something real. I&apos;m drawn
            to problems where good math and good systems design meet.
          </p>

          <p className="about-body">
            Outside of models and pipelines, I think a lot about how
            research-grade work can be made approachable — clear evaluation,
            honest results, and interfaces people actually want to use.
          </p>

          <div className="two-col">
            <div>
              <p className="list-label">Research interests</p>
              <ul className="interest-list">
                <li>
                  <span className="idot" />
                  Machine Learning
                </li>
                <li>
                  <span className="idot" />
                  NLP &amp; Language Models
                </li>
                <li>
                  <span className="idot" />
                  Retrieval Systems
                </li>
                <li>
                  <span className="idot" />
                  Intelligent Systems
                </li>
                <li>
                  <span className="idot" />
                  Cloud Infrastructure
                </li>
              </ul>
            </div>
            <div>
              <p className="list-label">Favorite tools</p>
              <div className="tag-row">
                <span className="tag">PyTorch</span>
                <span className="tag">HuggingFace</span>
                <span className="tag">Python</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Vector DBs</span>
                <span className="tag">Kubernetes</span>
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

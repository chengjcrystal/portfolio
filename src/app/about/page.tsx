import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Crystal Cheng",
  description: "A bit about Crystal Cheng — CS + Applied Math at Berkeley.",
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
            I like ML work that&apos;s
            <br />
            careful and
            <br />
            <em>actually</em> useful.
          </h2>

          <p className="about-body">
            I&apos;m in CS and Applied Math at Berkeley. I spend a lot of time on
            research ideas and the engineering to make them run. I&apos;m most
            interested in problems where the math and the systems side both
            matter.
          </p>

          <p className="about-body">
            I also care about making research legible — good evals, honest
            numbers, and UIs people don&apos;t hate.
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
                  ML Systems
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

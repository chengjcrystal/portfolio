export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <p className="eyebrow">UC Berkeley &nbsp;·&nbsp; CS + Applied Math</p>
          <h1 className="hero-name">
            Crystal
            <br />
            <span>Cheng</span>
          </h1>
          <p className="hero-desc">
            I work on ML — mostly NLP, retrieval, and the infra to run models in
            production.
          </p>
          <div className="btn-row">
            <a
              className="btn btn-solid"
              href="/assets/crystal-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ti ti-download" /> Resume
            </a>
            <a
              className="btn"
              href="https://linkedin.com/in/chengjcrystal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ti ti-brand-linkedin" /> LinkedIn
            </a>
            <a
              className="btn"
              href="https://github.com/chengjcrystal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ti ti-brand-github" /> GitHub
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="illus-box">
            <span className="illus-tag">{"{ ml, nlp, infra }"}</span>
            <i
              className="ti ti-pencil"
              style={{ fontSize: 22, color: "var(--brown4)" }}
            />
            <span className="illus-placeholder-text">
              Your drawing
              <br />
              goes here
            </span>
          </div>
        </div>
      </div>

      <section className="section" id="experience">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <span className="section-aside">Selected Work</span>
        </div>

        <div className="exp-list">
          <div className="exp-row">
            <div className="exp-year">2025</div>
            <div>
              <div className="exp-top">
                <span className="exp-company">Hyve Solutions</span>
                <span className="exp-role">ML Infrastructure Engineer Intern</span>
              </div>
              <p className="exp-desc">
                Built data pipelines and model-serving infra for
                hardware-configuration workloads. Cut inference latency and gave
                teams a shared way to eval models.
              </p>
              <div className="chip-row">
                <span className="chip">Python</span>
                <span className="chip">Distributed Systems</span>
                <span className="chip">Model Serving</span>
              </div>
            </div>
          </div>

          <div className="exp-row">
            <div className="exp-year">2024</div>
            <div>
              <div className="exp-top">
                <span className="exp-company">Newrium Foundation</span>
                <span className="exp-role">Software Engineer</span>
              </div>
              <p className="exp-desc">
                Worked on NLP for document parsing and a retrieval stack for
                semantic search over a large internal doc set.
              </p>
              <div className="chip-row">
                <span className="chip">NLP</span>
                <span className="chip">Embeddings</span>
                <span className="chip">Retrieval</span>
              </div>
            </div>
          </div>

          <div className="exp-row">
            <div className="exp-year">2023</div>
            <div>
              <div className="exp-top">
                <span className="exp-company">Barobo</span>
                <span className="exp-role">Software Engineer</span>
              </div>
              <p className="exp-desc">
                Shipped backend services and classroom tools for robotics
                education. Spent a lot of time on APIs that had to stay up
                during live demos.
              </p>
              <div className="chip-row">
                <span className="chip">APIs</span>
                <span className="chip">Backend</span>
                <span className="chip">Real-time</span>
              </div>
            </div>
          </div>

          <div className="exp-row">
            <div className="exp-year">2022</div>
            <div>
              <div className="exp-top">
                <span className="exp-company">Opal</span>
                <span className="exp-role">Machine Learning Intern</span>
              </div>
              <p className="exp-desc">
                Built product features and internal tools. Learned how to ship
                fast without letting the codebase fall apart.
              </p>
              <div className="chip-row">
                <span className="chip">Full-stack</span>
                <span className="chip">Tooling</span>
                <span className="chip">Testing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <span className="section-aside">A few things I&apos;ve built</span>
        </div>

        <div className="proj-grid">
          <div className="proj-card">
            <div className="proj-card-top">
              <div className="proj-name">MBTI Guesser</div>
              <a href="#" aria-label="View project">
                <i className="ti ti-arrow-up-right proj-link" />
              </a>
            </div>
            <p className="proj-sub">
              Guess MBTI from text using a fine-tuned transformer.
            </p>
            <div className="pao">
              <div className="pao-row">
                <span className="pao-key">Problem</span>
                <span>
                  Short text is a noisy signal for personality — easy to overfit
                  on word choice.
                </span>
              </div>
              <div className="pao-row">
                <span className="pao-key">Approach</span>
                <span>
                  Fine-tuned a HuggingFace model with balanced training data and
                  calibrated outputs.
                </span>
              </div>
              <div className="pao-row">
                <span className="pao-key">Outcome</span>
                <span>
                  16-type predictions with confidence scores, wrapped in a small
                  inference API.
                </span>
              </div>
            </div>
            <div className="chip-row">
              <span className="chip">Transformers</span>
              <span className="chip">HuggingFace</span>
              <span className="chip">Text Classification</span>
            </div>
          </div>

          <div className="proj-card">
            <div className="proj-card-top">
              <div className="proj-name">Semantic Retrieval Engine</div>
              <a href="#" aria-label="View project">
                <i className="ti ti-arrow-up-right proj-link" />
              </a>
            </div>
            <p className="proj-sub">
              Embedding search with an eval harness to measure if it actually
              worked.
            </p>
            <div className="pao">
              <div className="pao-row">
                <span className="pao-key">Problem</span>
                <span>
                  Keyword search fell apart on a big domain-specific corpus —
                  people rarely used the exact terms in the docs.
                </span>
              </div>
              <div className="pao-row">
                <span className="pao-key">Approach</span>
                <span>
                  Embeddings + vector index + reranking, with automated evals on
                  recall and relevance.
                </span>
              </div>
              <div className="pao-row">
                <span className="pao-key">Outcome</span>
                <span>
                  Better top-k results, and a setup that still works as the corpus
                  keeps growing.
                </span>
              </div>
            </div>
            <div className="chip-row">
              <span className="chip">Embeddings</span>
              <span className="chip">Retrieval</span>
              <span className="chip">Evaluation</span>
              <span className="chip">Infra</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

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
            I build machine learning systems at the intersection of research and
            engineering — from transformer-based NLP and retrieval pipelines to
            the cloud infrastructure that makes intelligent systems scale.
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
            <span className="illus-tag">{"{ building intelligent systems }"}</span>
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
                Built data pipelines and model-serving infrastructure for
                hardware-configuration workloads, cutting inference latency and
                standardizing evaluation across teams.
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
                <span className="exp-role">Software Engineer Engineer</span>
              </div>
              <p className="exp-desc">
                Designed NLP models for document understanding and developed
                retrieval pipelines that powered semantic search across a large
                knowledge corpus.
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
                Shipped backend services and learning tools used in classrooms,
                focusing on reliability and clean APIs for real-time robotics
                education.
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
                Contributed to product features and internal tooling, learning to
                balance fast iteration with maintainable, well-tested code.
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
          <h2 className="section-title">Selected AI Work</h2>
          <span className="section-aside">
            Problem &nbsp;→&nbsp; Approach &nbsp;→&nbsp; Outcome
          </span>
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
              Transformer-based personality prediction from free-form text.
            </p>
            <div className="pao">
              <div className="pao-row">
                <span className="pao-key">Problem</span>
                <span>
                  Personality inference from short text is noisy and easy to
                  overfit on surface patterns.
                </span>
              </div>
              <div className="pao-row">
                <span className="pao-key">Approach</span>
                <span>
                  Fine-tuned a HuggingFace transformer for multi-label text
                  classification with careful data balancing and calibration.
                </span>
              </div>
              <div className="pao-row">
                <span className="pao-key">Outcome</span>
                <span>
                  Robust 16-type predictions with confidence scores, deployed
                  behind a lightweight inference API.
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
              Embedding-based retrieval with a rigorous evaluation pipeline.
            </p>
            <div className="pao">
              <div className="pao-row">
                <span className="pao-key">Problem</span>
                <span>
                  Keyword search broke down on a large, domain-specific corpus
                  where intent rarely matched exact terms.
                </span>
              </div>
              <div className="pao-row">
                <span className="pao-key">Approach</span>
                <span>
                  Built an embeddings + vector-index retrieval system with
                  reranking, plus an automated eval harness measuring recall and
                  relevance.
                </span>
              </div>
              <div className="pao-row">
                <span className="pao-key">Outcome</span>
                <span>
                  Materially higher top-k relevance and a scalable architecture
                  that holds up as the corpus grows.
                </span>
              </div>
            </div>
            <div className="chip-row">
              <span className="chip">Embeddings</span>
              <span className="chip">Retrieval</span>
              <span className="chip">Evaluation</span>
              <span className="chip">Scalable Infra</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Home() {
  return (
    <>
      {/* hero */}
      <div className="hero">
        <div className="hero-inner">

          <div className="hero-left">
            <p className="eyebrow">UC Berkeley &nbsp;·&nbsp; CS + Applied Math</p>
            <h1 className="hero-name" style={{ fontFamily: "var(--font-fredoka), sans-serif" }}>
              <span className="hero-name-animated">
                {"Crystal Cheng".split("").map((ch, i) =>
                  ch === " "
                    ? <span key={i} style={{ display: "inline-block", width: "0.3em" }} />
                    : <span key={i} className="hero-name-letter">{ch}</span>
                )}
              </span>
            </h1>
            <p className="hero-desc">
              Software engineer intern. I&apos;ve shipped Next.js features, AWS
              backends, and ML pipelines for mentor matching and lecture Q&amp;A.
            </p>
            <div className="btn-row">
              <a
                className="btn btn-solid"
                href="/assets/crystal-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ti ti-file-text" /> Resume
              </a>
              <a
                className="btn btn-solid"
                href="https://linkedin.com/in/chengjcrystal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ti ti-brand-linkedin" /> LinkedIn
              </a>
              <a
                className="btn btn-solid"
                href="https://github.com/chengjcrystal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ti ti-brand-github" /> GitHub
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="moodboard">

              <div className="mb-tape mb-tape--top" />

              {/* yellow sticky */}
              <div className="mb-sticky mb-sticky--yellow">
                <span className="mb-sticky-label">who</span>
                <p className="mb-sticky-text">
                  cs + math<br />@ berkeley
                  <svg
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: "inline-block", width: 22, height: 22, verticalAlign: "middle", marginLeft: 4 }}
                  >
                    <circle cx="7" cy="7" r="4" fill="#C8A882" />
                    <circle cx="21" cy="7" r="4" fill="#C8A882" />
                    <circle cx="7" cy="7" r="2" fill="#B8967A" />
                    <circle cx="21" cy="7" r="2" fill="#B8967A" />
                    <circle cx="14" cy="14" r="8" fill="#C8A882" />
                    <ellipse cx="14" cy="16.5" rx="3.5" ry="2.5" fill="#B8967A" />
                    <circle cx="11" cy="12.5" r="1.2" fill="#5C3D26" />
                    <circle cx="17" cy="12.5" r="1.2" fill="#5C3D26" />
                    <ellipse cx="14" cy="15.8" rx="1.2" ry="0.8" fill="#5C3D26" />
                  </svg>
                </p>
              </div>

              {/* polaroid */}
              <div className="mb-polaroid">
                <div className="mb-polaroid-screen">
                  <span className="mb-code-line"><em>const</em> stack = [</span>
                  <span className="mb-code-line">&nbsp;&nbsp;<em className="mb-str">&quot;react&quot;</em>,</span>
                  <span className="mb-code-line">&nbsp;&nbsp;<em className="mb-str">&quot;aws&quot;</em>,</span>
                  <span className="mb-code-line">&nbsp;&nbsp;<em className="mb-str">&quot;pytorch&quot;</em>,</span>
                  <span className="mb-code-line">]</span>
                  <span className="mb-code-line" style={{ marginTop: "4px" }}>
                    <em className="mb-comment">// fuel: french vanilla ☕</em>
                  </span>
                </div>
                <p className="mb-polaroid-caption">my stack ♡</p>
              </div>

              {/* pink sticky */}
              <div className="mb-sticky mb-sticky--pink">
                <span className="mb-sticky-label">currently</span>
                <p className="mb-sticky-text">interning @<br />hyve solutions</p>
              </div>

              <div className="mb-tape mb-tape--corner" />
            </div>
          </div>

        </div>

        <div className="hero-scroll-hint">
          <i className="ti ti-arrow-down" />
        </div>
      </div>

      {/* experience */}
      <section className="section" id="experience">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <span className="section-aside">the journey so far ✦</span>
        </div>

        <div className="exp-list">

          <div className="exp-row">
            <div className="exp-meta">
              <div className="exp-date-full">Jun 2026 – Present</div>
            </div>
            <div>
              <div className="exp-top">
                <span className="exp-company">Hyve Solutions</span>
                <span className="exp-role">Software Engineer Intern</span>
              </div>
              <p className="exp-desc">
                Software Engineer Team in Manufacturing &amp; Integration.
              </p>
              <div className="chip-row">
                <span className="chip">Software Engineering</span>
                <span className="chip">Manufacturing</span>
              </div>
            </div>
          </div>

          <div className="exp-row">
            <div className="exp-meta">
              <div className="exp-date-full">Sep 2025 – Dec 2025</div>
            </div>
            <div>
              <div className="exp-top">
                <span className="exp-company">Newrium Foundation</span>
                <span className="exp-role">Software Engineer Intern</span>
              </div>
              <p className="exp-desc">
                Owned development of customer-facing support and FAQ workflows,
                translating Figma designs into production-ready Next.js features
                and coordinating frontend integration across a 15-person
                cross-functional team on a 10-week timeline. Shipped 15+ reusable
                React/TypeScript components and architected MySQL schemas storing
                100+ records with a Node.js email automation pipeline.
              </p>
              <div className="chip-row">
                <span className="chip">Next.js</span>
                <span className="chip">React</span>
                <span className="chip">TypeScript</span>
                <span className="chip">MySQL</span>
                <span className="chip">Node.js</span>
              </div>
            </div>
          </div>

          <div className="exp-row">
            <div className="exp-meta">
              <div className="exp-date-full">May 2025 – Aug 2025</div>
            </div>
            <div>
              <div className="exp-top">
                <span className="exp-company">Barobo</span>
                <span className="exp-role">Software Engineer Intern</span>
              </div>
              <p className="exp-desc">
                Blocked unauthorized video sharing across 100% of user traffic
                with AWS CloudFront signed URLs and per-user DynamoDB access
                tracking, scaling to 10,000+ monthly requests. Reduced video load
                time by 5% via CloudFront edge caching, and rewrote deployment as
                Terraform + AWS CLI scripts, cutting provisioning from 2 hours to
                15 minutes.
              </p>
              <div className="chip-row">
                <span className="chip">AWS</span>
                <span className="chip">CloudFront</span>
                <span className="chip">DynamoDB</span>
                <span className="chip">Terraform</span>
              </div>
            </div>
          </div>

          <div className="exp-row">
            <div className="exp-meta">
              <div className="exp-date-full">May 2024 – May 2025</div>
            </div>
            <div>
              <div className="exp-top">
                <span className="exp-company">Opal Mentorship App</span>
                <span className="exp-role">Machine Learning Intern</span>
              </div>
              <p className="exp-desc">
                Raised mentor-mentee match accuracy by 12% across cohorts by
                tuning 6 algorithmic scoring weights over two rounds of iteration.
                Built a repeatable AWS Lambda + DynamoDB evaluation pipeline
                scoring compatibility across 4 behavioral dimensions, and a
                JavaScript dashboard visualizing distributions that drove 2 rounds
                of weight calibration.
              </p>
              <div className="chip-row">
                <span className="chip">AWS Lambda</span>
                <span className="chip">DynamoDB</span>
                <span className="chip">JavaScript</span>
              </div>
            </div>
          </div>

          <div className="exp-row">
            <div className="exp-meta">
              <div className="exp-date-full">Jan 2024 – May 2024</div>
            </div>
            <div>
              <div className="exp-top">
                <span className="exp-company">Swingbeats Research Lab</span>
                <span className="exp-role">Frontend Web Developer</span>
              </div>
              <p className="exp-desc">
                Redesigned the haptic feedback research lab website in Figma and
                rebuilt it with React, HTML, and CSS — responsive across desktop,
                tablet, and mobile. Refactored the homepage into reusable
                components, cutting redundant render logic across 3 page sections.
              </p>
              <div className="chip-row">
                <span className="chip">React</span>
                <span className="chip">Figma</span>
                <span className="chip">HTML/CSS</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* projects */}
      <section className="section" id="projects">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <span className="section-aside">stuff i actually built 🛠</span>
        </div>

        <div className="proj-grid">

          <div className="proj-card proj-card--tilt-left">
            <div className="proj-tape" />
            <div className="proj-card-inner">
              <div className="proj-card-top">
                <div className="proj-name">
                  Multimodal Lecture Summarizer with Retrieval-Augmented Q&amp;A
                </div>
                <a href="https://github.com/chengjcrystal" target="_blank" rel="noopener noreferrer" aria-label="View project">
                  <i className="ti ti-arrow-up-right proj-link" />
                </a>
              </div>
              <p className="proj-sub">
                Lecture Q&amp;A in Python: Whisper for transcription,
                sentence-transformers over FAISS for retrieval, FastAPI for the
                API. Evaluated on 20 held-out questions with ROUGE-L — 300-token
                chunks beat 100-token by 14% ROUGE.
              </p>
              <div className="chip-row">
                <span className="chip">PyTorch</span>
                <span className="chip">Whisper</span>
                <span className="chip">LangChain</span>
                <span className="chip">FastAPI</span>
              </div>
            </div>
          </div>

          <div className="proj-card proj-card--tilt-right">
            <div className="proj-tape" />
            <div className="proj-card-inner">
              <div className="proj-card-top">
                <div className="proj-name">Opal Mentorship App</div>
                <a href="https://github.com/chengjcrystal" target="_blank" rel="noopener noreferrer" aria-label="View project">
                  <i className="ti ti-arrow-up-right proj-link" />
                </a>
              </div>
              <p className="proj-sub">
                Mentor-mentee matching with tunable scoring weights and an AWS
                Lambda evaluation pipeline across four behavioral dimensions.
              </p>
              <div className="chip-row">
                <span className="chip">MongoDB</span>
                <span className="chip">Express</span>
                <span className="chip">Node.js</span>
                <span className="chip">JavaScript</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* skills — corkboard */}
      <section className="section" id="skills">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <span className="section-aside">my toolkit 🗂</span>
        </div>

        <div className="skills-board">
          <div className="skills-board-tape skills-board-tape--tl" />
          <div className="skills-board-tape skills-board-tape--tr" />

          <div className="skills-columns">

            <div className="skill-col skill-group">
              <div className="skill-col-header">
                <span className="skill-col-label">what i write in</span>
                <div className="skill-col-title">Languages</div>
              </div>
              <div className="skill-cards-wrap">
                <span className="skill-hang-tag">Python</span>
                <span className="skill-hang-tag">C/C++</span>
                <span className="skill-hang-tag">JavaScript</span>
                <span className="skill-hang-tag">SQL</span>
                <span className="skill-hang-tag">Bash</span>
                <span className="skill-hang-tag">HTML/CSS</span>
                <span className="skill-hang-tag">Tailwind</span>
                <span className="skill-hang-tag">MATLAB</span>
              </div>
            </div>

            <div className="skill-col skill-group">
              <div className="skill-col-header">
                <span className="skill-col-label">what i build with</span>
                <div className="skill-col-title">ML &amp; Frameworks</div>
              </div>
              <div className="skill-cards-wrap">
                <span className="skill-hang-tag">PyTorch</span>
                <span className="skill-hang-tag">Sklearn</span>
                <span className="skill-hang-tag">NumPy</span>
                <span className="skill-hang-tag">Pandas</span>
                <span className="skill-hang-tag">React</span>
                <span className="skill-hang-tag">Next.js</span>
                <span className="skill-hang-tag">Bootstrap</span>
                <span className="skill-hang-tag">REST APIs</span>
              </div>
            </div>

            <div className="skill-col skill-group">
              <div className="skill-col-header">
                <span className="skill-col-label">where it runs</span>
                <div className="skill-col-title">Cloud &amp; DevOps</div>
              </div>
              <div className="skill-cards-wrap">
                <span className="skill-hang-tag">AWS S3</span>
                <span className="skill-hang-tag">CloudFront</span>
                <span className="skill-hang-tag">DynamoDB</span>
                <span className="skill-hang-tag">Lambda</span>
                <span className="skill-hang-tag">Git</span>
                <span className="skill-hang-tag">Linux</span>
                <span className="skill-hang-tag">Docker</span>
                <span className="skill-hang-tag">Jenkins</span>
                <span className="skill-hang-tag">Terraform</span>
                <span className="skill-hang-tag">Postman</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
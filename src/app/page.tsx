import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* experience */}
      <section className="section" id="experience">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <span className="section-aside">ᯓ ✈︎ my journey so far</span>
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
              Implementing an LLM-powered document processing platform in Python 
              that combines prompt engineering, RAG, REST APIs, and automated output 
              validation to automate technical document analysis for AI infrastructure 
              validation and integration testing.
              </p>
              <div className="chip-row">
                <span className="chip">Flask</span>
                <span className="chip">Bootstrap</span>
                <span className="chip">Retrieval-Augmented Generation</span>
                <span className="chip">Python</span>
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
                <span className="exp-role">Software Engineer</span>
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
          <span className="section-aside">-ˋˏ✄ stuff i built</span>
        </div>

        <div className="proj-grid">

          <div className="proj-card proj-card--tilt-left">
            <div className="proj-tape" />
            <div className="proj-card-inner">
              <div className="proj-card-top">
                <div className="proj-name">
                  MBTI Guesser
                </div>
                <a href="https://huggingface.co/spaces/chengjcrystal/mbti-guesser" target="_blank" rel="noopener noreferrer" aria-label="View project">
                  <i className="ti ti-arrow-up-right proj-link" />
                </a>
              </div>
              <p className="proj-sub">
                Developed a free-form MBTI classifier using BART-MNLI zero-shot inference, 
                replacing traditional surveys with a 13-feature multimodal pipeline. Mitigated short-input ENTJ bias by 
                redesigning NLI templates and adding confidence thresholds. Fused text, image, and 
                numeric signals (65%/25%/10%) using DeepFace and OpenCV with dynamic reweighting for missing inputs.
              </p>
              <div className="chip-row">
                <span className="chip">Hugging Face Transformers</span>
                <span className="chip">BART-MNLI</span>
                <span className="chip">DeepFace</span>
                <span className="chip">OpenCV</span>
              </div>
            </div>
          </div>

          <div className="proj-card proj-card--tilt-right">
            <div className="proj-tape" />
            <div className="proj-card-inner">
              <div className="proj-card-top">
                <div className="proj-name">GreenWays</div>
                <a href="https://github.com/chengjcrystal" target="_blank" rel="noopener noreferrer" aria-label="View project">
                  <i className="ti ti-arrow-up-right proj-link" />
                </a>
              </div>
              <p className="proj-sub">
                Built a full-stack web application during a 24-hour hackathon, processing INRIX Traffic API data across 500+ 
                roadway segments to identify congestion-driven emission hotspots. Engineered interactive geospatial visualizations 
                displaying 10,000+ real-time traffic data points with filtering and analytics capabilities, fully deployed on 
                AWS cloud-hosted services.
              </p>
              <div className="chip-row">
                <span className="chip">React</span>
                <span className="chip">REST APIs</span>
                <span className="chip">AWS</span>
                <span className="chip">JavaScript</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* skills */}
      <section className="section" id="skills">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <span className="section-aside">🗂 my toolkit</span>
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
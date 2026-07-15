import Image from "next/image";
import Hero from "@/components/Hero";
import FreshCheckCard from "@/components/FreshCheckCard";

// Skills as a stack of category rows, each a grid of logo tiles. `icon` is a
// devicon font class for real brand marks; a few tools have no brand logo, so
// they fall back to a single-tone Tabler glyph (fallback) or an emoji.
const SKILL_GROUPS = [
  {
    label: "what i build with",
    title: "ML & Frameworks",
    items: [
      { name: "PyTorch", icon: "devicon-pytorch-original colored" },
      { name: "Sklearn", icon: "devicon-scikitlearn-plain colored" },
      { name: "NumPy", icon: "devicon-numpy-plain colored" },
      { name: "Pandas", icon: "devicon-pandas-plain colored" },
      { name: "ONNX", icon: "ti ti-affiliate", fallback: true },
      { name: "HuggingFace", icon: "🤗", emoji: true },
      { name: "OpenCV", icon: "devicon-opencv-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
      { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
      { name: "REST APIs", icon: "ti ti-api", fallback: true },
    ],
  },
  {
    label: "where it runs",
    title: "Cloud & DevOps",
    items: [
      { name: "AWS S3", icon: "ti ti-bucket", fallback: true },
      { name: "CloudFront", icon: "ti ti-world", fallback: true },
      { name: "DynamoDB", icon: "devicon-dynamodb-plain colored" },
      { name: "Lambda", icon: "ti ti-lambda", fallback: true },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Linux", icon: "devicon-linux-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Jenkins", icon: "devicon-jenkins-plain colored" },
      { name: "Terraform", icon: "devicon-terraform-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
    ],
  },
  {
    label: "what i write in",
    title: "Languages",
    items: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "C/C++", icon: "devicon-cplusplus-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "SQL", icon: "ti ti-database", fallback: true },
      { name: "Bash", icon: "devicon-bash-plain colored" },
      { name: "HTML/CSS", icon: "devicon-html5-plain colored" },
      { name: "MATLAB", icon: "devicon-matlab-plain colored" },
    ],
  },
];

const SOCIALS = [
  { href: "https://linkedin.com/in/chengjcrystal", label: "LinkedIn" },
  { href: "https://github.com/chengjcrystal", label: "GitHub" },
  { href: "/assets/crystal-resume.pdf", label: "Resume" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* about + education */}
      <section className="section" id="about">
        <div className="section-header">
          <h2 className="section-title">About</h2>
          <span className="section-aside">♡ a little about me</span>
        </div>

        <div className="about-body">
          <div className="about-bio">
            <p>
              Hi! I&rsquo;m Crystal{" "}<span className="sticker sticker--gold">✩₊˚</span>, a Computer
              Science and Applied Math student at UC Berkeley, graduating December 2026.
              After a self-driving car failure seriously injured someone close to me,
              I&rsquo;ve cared about one thing above the rest: building technology people
              can genuinely trust.
            </p>
            <p>
              My favorite work happens with other people. Whether I&rsquo;m managing the
              budget as <strong>Treasurer of Society of Women Engineers</strong>{" "}
              <span className="sticker sticker--gear">⚙︎</span>{" "}or building a semester-long
              leaderboard competition to keep our officers showing up and bonding,
              I&rsquo;m usually
              the one keeping a project moving so nobody feels stuck. I&rsquo;m curious, a
              little stubborn about getting things right, and most myself when I&rsquo;m
              making something.
            </p>
            <p>
              Off the clock, you&rsquo;ll catch me{" "}
              <strong>crocheting, journaling, on the tennis court, or in the dance
              studio</strong>. I&rsquo;m also a little obsessed with{" "}
              <strong>scrapbooking</strong>{" "}<span className="sticker sticker--rose">⋆୨୧˚</span>{" "}
              which is exactly where this portfolio site takes inspiration from.
            </p>
          </div>

          <aside className="edu-card">
            <span className="edu-pin" aria-hidden="true" />
            <div className="edu-head">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="edu-logo" src="/logos/berkeley.svg" alt="UC Berkeley crest" />
              <h3 className="edu-school">UC Berkeley</h3>
            </div>
            <p className="edu-degree">B.A. Computer Science &amp; Applied Mathematics</p>
            <ul className="edu-involve">
              <li>
                <a href="https://swe.berkeley.edu/" target="_blank" rel="noopener noreferrer">
                  <b>Society of Women Engineers</b>
                </a> · Treasurer
              </li>
              <li>
                <a href="https://webatberkeley.org/" target="_blank" rel="noopener noreferrer">
                  <b>Web Development at Berkeley</b>
                </a> · Developer
              </li>
              <li>
                <a href="https://berkeleyproject.org/" target="_blank" rel="noopener noreferrer">
                  <b>Berkeley Project</b>
                </a> · Web Committee
              </li>
              <li>
                <a href="https://www.youtube.com/@KOSMOSUCB" target="_blank" rel="noopener noreferrer">
                  <b>KOSMOS Dance Team</b>
                </a> · Solstice Project Team
              </li>
            </ul>
            <p className="edu-course-label edu-course-label--spaced">Relevant coursework</p>
            <p className="edu-course">
              Machine Learning · Artificial Intelligence · Data Structures ·
              Probability Theory · Linear Algebra
            </p>
            <p className="edu-meta">Expected Dec 2026 · Berkeley, CA</p>
          </aside>
        </div>
      </section>

      {/* experience */}
      <section className="section" id="experience">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <span className="section-aside">ᯓ ✈︎ my journey so far</span>
        </div>

        <div className="exp-list">

          <div className="exp-row">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <span className="exp-logo"><img src="/logos/hyve.png" alt="" /></span>
            <div>
              <div className="exp-top">
                <span className="exp-company">Hyve Solutions</span>
                <span className="exp-role">Software Engineer Intern</span>
                <span className="exp-date-full">Jun 2026 – Present</span>
              </div>
              <p className="exp-desc">
                Building an LLM document-processing platform in Python with prompt
                engineering, RAG, REST APIs, and automated output validation.
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <span className="exp-logo"><img src="/logos/trackfly.png" alt="" /></span>
            <div>
              <div className="exp-top">
                <span className="exp-company">TrackFly</span>
                <span className="exp-role">Software Engineer Intern</span>
                <span className="exp-date-full">Sep 2025 – Dec 2025</span>
              </div>
              <p className="exp-desc">
                Shipped 15+ reusable React/TypeScript components from Figma in
                Next.js, with MySQL schemas and a Node.js email automation pipeline.
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <span className="exp-logo"><img src="/logos/barobo.png" alt="" /></span>
            <div>
              <div className="exp-top">
                <span className="exp-company">Barobo</span>
                <span className="exp-role">Software Engineer Intern</span>
                <span className="exp-date-full">May 2025 – Aug 2025</span>
              </div>
              <p className="exp-desc">
                Secured 100% of video traffic with AWS CloudFront signed URLs and
                DynamoDB access tracking at 10,000+ requests/mo.
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <span className="exp-logo"><img src="/logos/opal.png" alt="" /></span>
            <div>
              <div className="exp-top">
                <span className="exp-company">Opal Mentorship App</span>
                <span className="exp-role">Machine Learning Intern</span>
                <span className="exp-date-full">May 2024 – May 2025</span>
              </div>
              <p className="exp-desc">
                Raised mentor-match accuracy 12% with a repeatable AWS Lambda +
                DynamoDB pipeline scoring compatibility across 4 dimensions.
              </p>
              <div className="chip-row">
                <span className="chip">AWS Lambda</span>
                <span className="chip">DynamoDB</span>
                <span className="chip">JavaScript</span>
              </div>
            </div>
          </div>

          <div className="exp-row">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <span className="exp-logo"><img src="/logos/swingbeats.png" alt="" /></span>
            <div>
              <div className="exp-top">
                <span className="exp-company">Swingbeats Research Lab</span>
                <span className="exp-role">Frontend Web Developer</span>
                <span className="exp-date-full">Jan 2024 – May 2024</span>
              </div>
              <p className="exp-desc">
                Rebuilt a haptics research lab site in React from Figma, responsive
                across desktop, tablet, and mobile.
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

          <article className="proj-card proj-card--preview proj-card--tilt-right">
            <a
              className="proj-preview"
              href="https://github.com/chengjcrystal/reporank"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View RepoRank on GitHub"
            >
              <Image
                className="proj-preview-img"
                src="/previews/reporank.png"
                alt="RepoRank search UI with ranked GitHub repository results"
                fill
                sizes="(max-width: 768px) 100vw, 520px"
              />
              <span className="proj-preview-badge">View code <i className="ti ti-arrow-up-right" /></span>
            </a>
            <div className="proj-tape" />
            <div className="proj-card-inner">
              <div className="proj-card-top">
                <div className="proj-name">RepoRank</div>
                <div className="proj-links">
                  <a
                    className="proj-actionlink"
                    href="https://github.com/chengjcrystal/reporank"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="RepoRank source code on GitHub"
                  >
                    <i className="ti ti-brand-github" /> Code
                  </a>
                </div>
              </div>
              <p className="proj-sub">
                Search over 157k real GitHub repos: a from-scratch inverted index and
                BM25/BM25F ranking, a quality-aware re-ranker, and an nDCG eval gate that
                fails CI on relevance regressions.
              </p>
              <div className="chip-row">
                <span className="chip">Python</span>
                <span className="chip">FastAPI</span>
                <span className="chip">BM25F</span>
                <span className="chip">Information Retrieval</span>
              </div>
            </div>
          </article>

          <FreshCheckCard />

          <article className="proj-card proj-card--preview proj-card--tilt-right">
            <a
              className="proj-preview"
              href="https://huggingface.co/spaces/chengjcrystal/mbti-guesser"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View MBTI Guesser live"
            >
              <Image
                className="proj-preview-img"
                src="/previews/mbti.png"
                alt="MBTI Guesser app interface"
                fill
                sizes="(max-width: 768px) 100vw, 520px"
              />
              <span className="proj-preview-badge">View live <i className="ti ti-arrow-up-right" /></span>
            </a>
            <div className="proj-tape" />
            <div className="proj-card-inner">
              <div className="proj-card-top">
                <div className="proj-name">MBTI Guesser</div>
                <div className="proj-links">
                  <a
                    className="proj-actionlink"
                    href="https://github.com/chengjcrystal/mbti-guesser"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="MBTI Guesser source code on GitHub"
                  >
                    <i className="ti ti-brand-github" /> Code
                  </a>
                </div>
              </div>
              <p className="proj-sub">
                Free-form MBTI via BART-MNLI zero-shot, fusing text, image, and numeric
                signals with DeepFace + OpenCV.
              </p>
              <div className="chip-row">
                <span className="chip">Hugging Face Transformers</span>
                <span className="chip">BART-MNLI</span>
                <span className="chip">DeepFace</span>
                <span className="chip">OpenCV</span>
              </div>
            </div>
          </article>

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

          <div className="skill-groups">
            {SKILL_GROUPS.map((group) => (
              <div className="skill-cat skill-group" key={group.title}>
                <div className="skill-cat-head">
                  <span className="skill-cat-label">{group.label}</span>
                  <h3 className="skill-cat-title">{group.title}</h3>
                </div>
                <div className="skill-tiles">
                  {group.items.map((item) => (
                    <div className="skill-tile" key={item.name}>
                      <span className="skill-tile-ico">
                        {item.emoji ? (
                          <span className="skill-tile-emoji">{item.icon}</span>
                        ) : (
                          <i className={item.icon} aria-hidden="true" />
                        )}
                      </span>
                      <span className="skill-tile-name">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* beyond the code: the out-of-code leadership work. sits after the
          technical block (experience/projects/skills) as the closing "extra".
          image-led like a scrapbook photo page, printed-photo frames + a big
          bold title + one line of caption each, so the pictures carry it */}
      <section className="section" id="leadership">
        <div className="section-header">
          <h2 className="section-title">Beyond the Code</h2>
          <span className="section-aside"><span className="aside-ico">♛</span> where i lead</span>
        </div>

        <div className="lead-grid">
          <article className="lead-card lead-card--feature">
            <div className="lead-photo lead-photo--wide">
              <Image
                src="/leadership/showdown.jpg"
                alt="SWE Sector Showdown officers"
                fill
                sizes="(max-width: 860px) 100vw, 520px"
              />
            </div>
            <div className="lead-feature-body">
              <span className="lead-org">Society of Women Engineers</span>
              <h3 className="lead-title">Sector Showdown</h3>
              <p className="lead-cap">
                A brand-new officer engagement program I designed, ran, and managed
                solo across a full semester, voted our top initiative of the term in
                a vote by every officer.
              </p>
              <div className="lead-metrics">
                <span className="lead-metric"><b>50</b> officers engaged</span>
                <span className="lead-metric"><b>~100</b> challenge entries</span>
                <span className="lead-metric"><b>#1</b> voted top initiative</span>
              </div>
              <blockquote className="lead-quote">
                &ldquo;Sector Showdown has been a huge success. Crystal puts in
                so much effort, going well beyond her role as Treasurer.&rdquo;
                <cite>Negar Morshedian &middot; SWE President, 2025&ndash;26</cite>
              </blockquote>
            </div>
          </article>

          <article className="lead-card">
            <div className="lead-photo lead-photo--up">
              <Image
                src="/leadership/treasurer.jpg"
                alt="Crystal Cheng with the Society of Women Engineers officer team"
                fill
                sizes="(max-width: 720px) 100vw, 340px"
              />
            </div>
            <span className="lead-org">Society of Women Engineers</span>
            <h3 className="lead-title">Treasurer</h3>
            <p className="lead-cap">
              Budget and finance for Berkeley&rsquo;s largest engineering org,
              funding corporate collaborations and K-12 STEM outreach.
            </p>
            <div className="lead-metrics">
              <span className="lead-metric"><b>$60K+</b> managed</span>
              <span className="lead-metric"><b>100+</b> members funded</span>
            </div>
          </article>

          <article className="lead-card">
            <div className="lead-photo lead-photo--bright">
              <Image
                src="/leadership/kosmos.jpg"
                alt="KOSMOS dance performance"
                fill
                sizes="(max-width: 720px) 100vw, 340px"
              />
            </div>
            <span className="lead-org">
              <a href="https://www.youtube.com/@KOSMOSUCB" target="_blank" rel="noopener noreferrer">
                KOSMOS Dance Team
              </a>
            </span>
            <h3 className="lead-title">Dance Lead</h3>
            <p className="lead-cap">
              Practice lead and performer for three of our most popular performances
              within Solstice, KOSMOS&rsquo;s project team.
            </p>
            <div className="lead-metrics">
              <span className="lead-metric"><b>15+</b> performances</span>
              <span className="lead-metric"><b>32</b> dancers</span>
            </div>
          </article>

          <article className="lead-card">
            <div className="lead-photo">
              <Image
                src="/leadership/race2021.jpg"
                alt="Race to 2021 fundraiser"
                fill
                sizes="(max-width: 720px) 100vw, 340px"
              />
            </div>
            <span className="lead-org">Race to 2021</span>
            <h3 className="lead-title">Founder</h3>
            <p className="lead-cap">
              A fitness fundraiser built from scratch, turning daily workouts into
              PPE donations for the Valley Medical Center Foundation.
            </p>
            <div className="lead-metrics">
              <span className="lead-metric"><b>$3,000</b> raised</span>
              <span className="lead-metric"><b>110</b> participants</span>
            </div>
          </article>
        </div>
      </section>

      {/* contact: closing CTA. ultra-minimal, a single hand-sewn running-stitch
          seam as the only scrapbook nod (horizontal, decorative, needs no
          border to hold), lots of whitespace */}
      <section className="section contact-section" id="contact">
        <div className="contact-min">
          {/* a little envelope: this section's job is to reach out, so it wears
              the motif that says 'message me', the way skills wears a clipboard */}
          <svg className="contact-envelope" viewBox="0 -12 72 62" aria-hidden="true" focusable="false">
            <g stroke="var(--brown2)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
              <rect x="13" y="14" width="46" height="28" rx="3.5" fill="#EFE3D2" />
              <polygon className="env-flap" points="13,14 59,14 36,33" fill="#E3D2B9" />
            </g>
          </svg>

          <h2 className="contact-title">Let&rsquo;s talk.</h2>

          <p className="contact-sub">
            Graduating from UC Berkeley in December 2026, open to full-time
            software &amp; ML roles starting January 2027.
          </p>

          <a className="contact-email" href="mailto:chengjcrystal@gmail.com">
            chengjcrystal@gmail.com
          </a>

          <div className="contact-social">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
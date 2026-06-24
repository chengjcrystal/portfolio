"use client";

import { useEffect, useRef, useCallback } from "react";

// fly-in animation config for moodboard pieces
const MB_ITEMS = [
  { key: "tape-top",    from: { x: 0,     y: -500 }, delay: 0   },
  { key: "sticky-who",  from: { x: -600,  y: -200 }, delay: 120 },
  { key: "polaroid",    from: { x: 500,   y: -400 }, delay: 260 },
  { key: "sticky-now",  from: { x: 600,   y: 300  }, delay: 400 },
  { key: "tape-corner", from: { x: 400,   y: 500  }, delay: 520 },
];

const NAME = "Crystal Cheng";

// each letter's bounce personality: how high and which way it tilts
const PERSONALITIES = [
  { dy: -14, rot: -4  },
  { dy: -20, rot:  2  },
  { dy: -11, rot: -2  },
  { dy: -18, rot:  3  },
  { dy: -9,  rot: -3  },
  { dy: -16, rot:  1  },
  { dy: 0,   rot:  0  }, // space
  { dy: -13, rot: -2  },
  { dy: -19, rot:  3  },
  { dy: -10, rot: -1  },
  { dy: -17, rot:  4  },
  { dy: -12, rot: -3  },
  { dy: -15, rot:  2  },
];

// ripple falloff by distance from hovered letter
const FALLOFF = [1, 0.6, 0.3];

export default function Hero() {
  const mbRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const letRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const timers  = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  // moodboard fly-in on mount
  useEffect(() => {
    const els = mbRefs.current;

    els.forEach((el, i) => {
      if (!el) return;
      el.style.transition = "none";
      el.style.transform  = `translate(${MB_ITEMS[i].from.x}px, ${MB_ITEMS[i].from.y}px)`;
      el.style.opacity    = "0";
    });

    const ts: ReturnType<typeof setTimeout>[] = [];
    els.forEach((el, i) => {
      const t = setTimeout(() => {
        if (!el) return;
        el.style.transition = `transform 1.1s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease`;
        el.style.transform  = "translate(0px, 0px)";
        el.style.opacity    = "1";
      }, MB_ITEMS[i].delay);
      ts.push(t);
    });

    return () => ts.forEach(clearTimeout);
  }, []);

  const mbRef = (i: number) => (el: HTMLDivElement | null) => { mbRefs.current[i] = el; };

  // animate one letter at a given intensity + delay
  const animateLetter = useCallback((idx: number, scale: number, delay: number) => {
    const el = letRefs.current[idx];
    if (!el || NAME[idx] === " ") return;

    clearTimeout(timers.current.get(idx));

    const p   = PERSONALITIES[idx];
    const dy  = Math.round(p.dy * scale);
    const rot = (p.rot * scale).toFixed(1);

    const t = setTimeout(() => {
      el.style.transition = `transform 0.35s cubic-bezier(0.34, 1.6, 0.64, 1), color 0.2s ease`;
      el.style.transform  = `translateY(${dy}px) rotate(${rot}deg)`;
      el.style.color      = "var(--brown3)";

      const reset = setTimeout(() => {
        el.style.transition = `transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), color 0.3s ease`;
        el.style.transform  = "";
        el.style.color      = "";
      }, 420);

      timers.current.set(idx, reset);
    }, delay);

    timers.current.set(idx, t);
  }, []);

  // ripple outward from hovered letter index
  const handleLetterEnter = useCallback((idx: number) => {
    for (let dist = 0; dist < FALLOFF.length; dist++) {
      const scale     = FALLOFF[dist];
      const baseDelay = dist * 55;
      animateLetter(idx - dist, scale, baseDelay);
      if (dist > 0) animateLetter(idx + dist, scale, baseDelay);
    }
  }, [animateLetter]);

  return (
    <div className="hero">
      <div className="hero-inner">

        {/* left: name + desc + buttons */}
        <div className="hero-left">
          <p className="eyebrow">UC Berkeley &nbsp;·&nbsp; CS + Applied Math</p>

          <h1 className="hero-name" style={{ fontFamily: "var(--font-fredoka), sans-serif" }}>
            <span className="hero-name-animated">
              {NAME.split("").map((ch, i) =>
                ch === " " ? (
                  <span key={i} style={{ display: "inline-block", width: "0.28em" }} />
                ) : (
                  <span
                    key={i}
                    ref={el => { letRefs.current[i] = el; }}
                    className="hero-name-letter"
                    onMouseEnter={() => handleLetterEnter(i)}
                  >
                    {ch}
                  </span>
                )
              )}
            </span>
          </h1>

          <p className="hero-desc">
          Software Engineer Intern at Hyve Solutions, building AI-enabled 
          workflow solutions while sipping a cup of vanilla espresso ⋆.˚☕︎
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

        {/* right: moodboard */}
        <div className="hero-right">
          <div className="moodboard">

            <div ref={mbRef(0)} className="mb-tape mb-tape--top" />

            <div ref={mbRef(1)} className="mb-sticky mb-sticky--yellow mb-hoverable">
              <span className="mb-sticky-label">who</span>
              <p className="mb-sticky-text">
                cs + math<br />@ berkeley
                <svg
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "inline-block", width: 22, height: 22, verticalAlign: "middle", marginLeft: 4 }}
                >
                  <circle cx="7"  cy="7"  r="4" fill="#C8A882" />
                  <circle cx="21" cy="7"  r="4" fill="#C8A882" />
                  <circle cx="7"  cy="7"  r="2" fill="#B8967A" />
                  <circle cx="21" cy="7"  r="2" fill="#B8967A" />
                  <circle cx="14" cy="14" r="8" fill="#C8A882" />
                  <ellipse cx="14" cy="16.5" rx="3.5" ry="2.5" fill="#B8967A" />
                  <circle cx="11" cy="12.5" r="1.2" fill="#5C3D26" />
                  <circle cx="17" cy="12.5" r="1.2" fill="#5C3D26" />
                  <ellipse cx="14" cy="15.8" rx="1.2" ry="0.8" fill="#5C3D26" />
                </svg>
              </p>
            </div>

            <div ref={mbRef(2)} className="mb-polaroid mb-hoverable">
              <div className="mb-polaroid-screen">
                <span className="mb-code-line"><em>const</em> stack = [</span>
                <span className="mb-code-line">&nbsp;&nbsp;<em className="mb-str">&quot;react&quot;</em>,</span>
                <span className="mb-code-line">&nbsp;&nbsp;<em className="mb-str">&quot;aws&quot;</em>,</span>
                <span className="mb-code-line">&nbsp;&nbsp;<em className="mb-str">&quot;pytorch&quot;</em>,</span>
                <span className="mb-code-line">]</span>
                <span className="mb-code-line" style={{ marginTop: "4px" }}>
                  <em className="mb-comment">// fuel: light caffeine</em>
                </span>
              </div>
              <p className="mb-polaroid-caption">my stack ♡</p>
            </div>

            <div ref={mbRef(3)} className="mb-sticky mb-sticky--pink mb-hoverable">
              <span className="mb-sticky-label">currently</span>
              <p className="mb-sticky-text">interning @<br />hyve solutions</p>
            </div>

            <div ref={mbRef(4)} className="mb-tape mb-tape--corner" />

          </div>
        </div>

      </div>

      <div className="hero-scroll-hint">
        <i className="ti ti-arrow-down" />
      </div>
    </div>
  );
}
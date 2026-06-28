"use client";

import Image from "next/image";
import { Fragment, useEffect, useRef } from "react";

// fly-in animation config for hero visual pieces (index order = ref order below)
const HV_ITEMS = [
  { key: "tape",     from: { x: 0,    y: -420 }, delay: 0   },
  { key: "polaroid", from: { x: 480,  y: -260 }, delay: 140 },
];

const NAME = "Crystal Cheng";

// group letters into words so the name only ever breaks at the space,
// never mid-word; each entry tracks its starting global letter index
const NAME_WORDS = (() => {
  const out: { text: string; start: number }[] = [];
  let gi = 0;
  NAME.split(" ").forEach((w) => {
    out.push({ text: w, start: gi });
    gi += w.length + 1;
  });
  return out;
})();

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
  const hvRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const letRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const timers  = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  // hero visual fly-in on mount
  useEffect(() => {
    const els = hvRefs.current;

    els.forEach((el, i) => {
      if (!el) return;
      el.style.transition = "none";
      el.style.transform  = `translate(${HV_ITEMS[i].from.x}px, ${HV_ITEMS[i].from.y}px)`;
      el.style.opacity    = "0";
    });

    const ts: ReturnType<typeof setTimeout>[] = [];
    els.forEach((el, i) => {
      const t = setTimeout(() => {
        if (!el) return;
        el.style.transition = `transform 1.1s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease`;
        el.style.transform  = "";
        el.style.opacity    = "1";
      }, HV_ITEMS[i].delay);
      ts.push(t);
    });

    return () => ts.forEach(clearTimeout);
  }, []);

  // animate one letter at a given intensity + delay
  const animateLetter = (idx: number, scale: number, delay: number) => {
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
  };

  // ripple outward from hovered letter index
  const handleLetterEnter = (idx: number) => {
    for (let dist = 0; dist < FALLOFF.length; dist++) {
      const scale     = FALLOFF[dist];
      const baseDelay = dist * 55;
      animateLetter(idx - dist, scale, baseDelay);
      if (dist > 0) animateLetter(idx + dist, scale, baseDelay);
    }
  };

  return (
    <div className="hero">
      <div className="hero-inner">

        {/* left: name + desc + buttons */}
        <div className="hero-left">
          <p className="eyebrow">UC Berkeley &nbsp;·&nbsp; CS + Applied Math</p>

          <p className="hero-greeting">Hi! I&rsquo;m</p>

          <h1 className="hero-name" style={{ fontFamily: "var(--font-fredoka), sans-serif" }}>
            <span className="hero-name-animated">
              {NAME_WORDS.map((word, wi) => (
                <Fragment key={wi}>
                  {wi > 0 ? <span className="hero-name-space"> </span> : null}
                  <span className="hero-name-word">
                    {word.text.split("").map((ch, j) => {
                      const i = word.start + j;
                      return (
                        <span
                          key={i}
                          ref={el => { letRefs.current[i] = el; }}
                          className="hero-name-letter"
                          onMouseEnter={() => handleLetterEnter(i)}
                        >
                          {ch}
                        </span>
                      );
                    })}
                  </span>
                </Fragment>
              ))}
            </span>
          </h1>

          <p className="hero-desc">
          I'm a Software Engineer Intern at Hyve Solutions, building AI-enabled
          workflow solutions while sipping a{" "}
          <span className="hero-desc-nowrap">cup of vanilla espresso&nbsp;⋆.˚☕︎</span>
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

        {/* right: big polaroid headshot */}
        <div className="hero-right">
          <div className="hero-visual">

            <div ref={el => { hvRefs.current[0] = el; }} className="hero-tape" />

            <div ref={el => { hvRefs.current[1] = el; }} className="polaroid-lg">
              <Image
                className="polaroid-lg-photo"
                src="/sfsmile.jpg"
                alt="Crystal Cheng"
                width={3023}
                height={3023}
                priority
                unoptimized
              />
              <p className="polaroid-lg-caption">grad dec &rsquo;26 · open jan &rsquo;27 ⋆˚</p>
            </div>

          </div>
        </div>

      </div>

      <div className="hero-scroll-hint">
        <i className="ti ti-arrow-down" />
      </div>
    </div>
  );
}

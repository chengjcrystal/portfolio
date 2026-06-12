"use client";

import { useEffect, useRef } from "react";

const ITEMS = [
  { key: "tape-top",    from: { x: 0,     y: -500 }, delay: 0   },
  { key: "sticky-who",  from: { x: -600,  y: -200 }, delay: 120 },
  { key: "polaroid",    from: { x: 500,   y: -400 }, delay: 260 },
  { key: "sticky-now",  from: { x: 600,   y: 300  }, delay: 400 },
  { key: "tape-corner", from: { x: 400,   y: 500  }, delay: 520 },
];

export default function Moodboard() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = refs.current;

    els.forEach((el, i) => {
      if (!el) return;
      el.style.transition = "none";
      el.style.transform  = `translate(${ITEMS[i].from.x}px, ${ITEMS[i].from.y}px)`;
      el.style.opacity    = "0";
    });

    const timers: ReturnType<typeof setTimeout>[] = [];
    els.forEach((el, i) => {
      const t = setTimeout(() => {
        if (!el) return;
        el.style.transition = `transform 1.1s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease`;
        el.style.transform  = "translate(0px, 0px)";
        el.style.opacity    = "1";
      }, ITEMS[i].delay);
      timers.push(t);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  const ref = (i: number) => (el: HTMLDivElement | null) => { refs.current[i] = el; };

  return (
    <div className="moodboard">

      <div ref={ref(0)} className="mb-tape mb-tape--top" />

      <div ref={ref(1)} className="mb-sticky mb-sticky--yellow mb-hoverable">
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

      <div ref={ref(2)} className="mb-polaroid mb-hoverable">
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

      <div ref={ref(3)} className="mb-sticky mb-sticky--pink mb-hoverable">
        <span className="mb-sticky-label">currently</span>
        <p className="mb-sticky-text">interning @<br />hyve solutions</p>
      </div>

      <div ref={ref(4)} className="mb-tape mb-tape--corner" />

    </div>
  );
}
"use client";

import { useEffect, useRef } from "react";

// Light trail: moving over the polaroid trails a soft warm glow and dainty
// white/silver sparkles. The canvas uses mix-blend-mode: screen (set in CSS),
// so everything drawn can only *lighten* the photo, never cover or darken it.
// The effect reads as illuminating the photo, not drawing on it. Marks fade
// fast like a passing shimmer.

const GLOW = "255, 240, 210"; // warm light
const GLOW_R = 36; // glow radius, css px
const GLOW_A = 0.34; // glow strength
const GLOW_LIFE = 950;
const GLOW_HOLD = 180;
const SPARK_LIFE = 850;

type Glow = { x: number; y: number; t: number };
type Spark = { x: number; y: number; t: number; s: number; rot: number; c: string };

const SPARK_COLORS = ["255, 255, 255", "255, 255, 255", "223, 232, 244", "247, 240, 255"];

function drawSpark(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  alpha: number,
  rot: number,
  color: string,
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  // soft halo
  const g = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 1.6);
  g.addColorStop(0, `rgba(${color}, ${alpha * 0.5})`);
  g.addColorStop(1, `rgba(${color}, 0)`);
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(0, 0, r * 1.6, 0, Math.PI * 2);
  ctx.fill();
  // four-point star
  ctx.fillStyle = `rgba(${color}, ${alpha})`;
  ctx.beginPath();
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2;
    const ax = Math.cos(a);
    const ay = Math.sin(a);
    const px = -Math.sin(a);
    const py = Math.cos(a);
    const w = r * 0.16;
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(ax * r * 0.5 + px * w, ay * r * 0.5 + py * w, ax * r, ay * r);
    ctx.quadraticCurveTo(ax * r * 0.5 - px * w, ay * r * 0.5 - py * w, 0, 0);
  }
  ctx.fill();
  ctx.restore();
}

export default function PhotoDoodle() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return; // touch: skip

    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    let dpr = 1;
    const resize = () => {
      const r = parent.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(r.width * dpr);
      canvas.height = Math.round(r.height * dpr);
      canvas.style.width = `${r.width}px`;
      canvas.style.height = `${r.height}px`;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const glows: Glow[] = [];
    const sparks: Spark[] = [];
    let last: { x: number; y: number } | null = null;

    const onMove = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      const x = (e.clientX - r.left) * dpr;
      const y = (e.clientY - r.top) * dpr;
      const now = performance.now();

      if (last) {
        const d = Math.hypot(x - last.x, y - last.y);
        if (d < 4 * dpr) return; // throttle by distance
        if (Math.random() < 0.45) {
          const c = SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)];
          sparks.push({
            x: x + (Math.random() - 0.5) * 30 * dpr,
            y: y + (Math.random() - 0.5) * 30 * dpr,
            t: now,
            s: (4 + Math.random() * 5) * dpr, // dainty
            rot: Math.random() * Math.PI,
            c,
          });
        }
      }
      glows.push({ x, y, t: now });
      last = { x, y };
    };
    const onLeave = () => {
      last = null;
    };

    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);

    let raf = 0;
    const draw = () => {
      const now = performance.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      while (glows.length && now - glows[0].t > GLOW_LIFE) glows.shift();

      const R = GLOW_R * dpr;
      for (let i = 0; i < glows.length; i++) {
        const p = glows[i];
        const age = now - p.t;
        const fade = age <= GLOW_HOLD ? 1 : Math.max(0, 1 - (age - GLOW_HOLD) / (GLOW_LIFE - GLOW_HOLD));
        if (fade <= 0) continue;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, R);
        g.addColorStop(0, `rgba(${GLOW}, ${GLOW_A * fade})`);
        g.addColorStop(1, `rgba(${GLOW}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, R, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        const age = now - s.t;
        if (age > SPARK_LIFE) {
          sparks.splice(i, 1);
          continue;
        }
        const k = age / SPARK_LIFE;
        const grow = Math.min(1, k * 5); // quick pop in
        const fade = 1 - Math.max(0, (k - 0.25) / 0.75); // then twinkle out
        drawSpark(ctx, s.x, s.y, s.s * grow, fade, s.rot + k * 0.6, s.c);
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="polaroid-canvas" aria-hidden="true" />;
}

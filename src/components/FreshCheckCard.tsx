"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
// portal only renders while the modal is open, which can only happen after a
// client click, so there's no SSR/hydration path to guard against
import { createPortal } from "react-dom";

// FreshCheck's card. The preview image is a button: clicking it opens the live
// app in a big centered modal (portalled to <body> so the card's tilt doesn't
// trap the fixed overlay), instead of an inline frame that just repeated the
// screenshot above it.
export default function FreshCheckCard() {
  const [open, setOpen] = useState(false);

  // while the demo is open, lock body scroll and close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <article className="proj-card proj-card--preview proj-card--tilt-left">
      <button
        type="button"
        className="proj-preview proj-preview--btn"
        onClick={() => setOpen(true)}
        aria-label="Run FreshCheck live demo"
      >
        <Image
          className="proj-preview-img"
          src="/previews/freshcheck.png"
          alt="FreshCheck app interface"
          fill
          sizes="(max-width: 768px) 100vw, 520px"
        />
        <span className="proj-preview-badge">
          Try it live <i className="ti ti-player-play" />
        </span>
      </button>

      <div className="proj-tape" />

      <div className="proj-card-inner">
        <div className="proj-card-top">
          <div className="proj-name">FreshCheck</div>
          <div className="proj-links">
            <a
              className="proj-actionlink"
              href="https://github.com/chengjcrystal/freshcheck"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FreshCheck source code on GitHub"
            >
              <i className="ti ti-brand-github" /> Code
            </a>
          </div>
        </div>
        <p className="proj-sub">
          In-browser fruit-freshness classifier: a 24K-parameter CNN runs fully
          on-device (ONNX/WASM), no backend or uploads, at 97.7% held-out accuracy
          on a leak-free split.
        </p>
        <div className="chip-row">
          <span className="chip">PyTorch</span>
          <span className="chip">ONNX</span>
          <span className="chip">WebAssembly</span>
          <span className="chip">Vercel</span>
        </div>
      </div>

      {open &&
        createPortal(
          <div
            className="demo-modal"
            role="dialog"
            aria-modal="true"
            aria-label="FreshCheck live demo"
            onClick={() => setOpen(false)}
          >
            <div className="demo-modal-panel" onClick={(e) => e.stopPropagation()}>
              <div className="demo-modal-bar">
                <span>FreshCheck &middot; running live, entirely in your browser</span>
                <div className="demo-modal-actions">
                  <a
                    href="https://freshcheckfruit.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open FreshCheck in a new tab"
                  >
                    <i className="ti ti-arrow-up-right" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close demo"
                  >
                    <i className="ti ti-x" />
                  </button>
                </div>
              </div>
              <iframe
                src="https://freshcheckfruit.vercel.app/"
                title="FreshCheck live demo"
                loading="lazy"
              />
            </div>
          </div>,
          document.body,
        )}
    </article>
  );
}

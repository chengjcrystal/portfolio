"use client";

export default function Footer() {
  return (
    <footer>
      {/* contact (incl. resume) lives in the closing section above, so the
          footer is just one quiet centered line */}
      <p className="footer-line">
        © 2026 Crystal Cheng · built with next.js + lots of vanilla espresso ☕
      </p>
    </footer>
  );
}
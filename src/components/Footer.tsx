export default function Footer({ logo = "Crystal" }: { logo?: string }) {
  return (
    <footer>
      <span className="footer-logo">{logo}</span>
      <span className="footer-note">
        Built in Berkeley &nbsp;·&nbsp; 2026
      </span>
    </footer>
  );
}

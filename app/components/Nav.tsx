import CornIcon from "./CornIcon";

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">
        <CornIcon width={32} height={32} />
        <span className="nav-wordmark">Yumi</span>
      </a>
      <a href="#waitlist" className="nav-cta">
        Join waitlist
      </a>
    </nav>
  );
}

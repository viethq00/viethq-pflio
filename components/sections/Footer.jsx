import { profile } from "@/lib/data";
import { IconUp } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <a className="brand" href="#top">
          <span className="mark"><span>{profile.mark}</span></span>
          <b>{profile.brandPre}<i>{profile.brandPost}</i></b>
        </a>
        <div className="meta">
          © 2026 {profile.name} · Built with <span style={{ color: "var(--accent)" }}>♥</span> &amp; clean code ·{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <a className="up" href="#top" aria-label="Back to top">
          <IconUp />
        </a>
      </div>
    </footer>
  );
}

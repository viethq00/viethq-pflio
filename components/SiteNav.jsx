"use client";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";
import { useActiveSection } from "@/lib/useActiveSection";
import { IconArrow } from "@/components/icons";

const ids = navLinks.map((l) => l.id);

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (st / h) * 100 : 0);
      setScrolled(st > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} />
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <a className="brand" href="#top" aria-label="VietHQ home">
            <span className="mark"><span>{profile.mark}</span></span>
            <b>{profile.brandPre}<i>{profile.brandPost}</i></b>
          </a>

          <div className={`nav-links${open ? " open" : ""}`}>
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={active === l.id ? "active" : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="n">{l.n}</span>
                {l.label}
              </a>
            ))}
          </div>

          <div className="nav-cta">
            <span className="avail"><span className="dot" />{profile.availability}</span>
            <a className="btn btn-primary" href="#contact">
              Let&apos;s talk
              <IconArrow className="ico" />
            </a>
            <button className="burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

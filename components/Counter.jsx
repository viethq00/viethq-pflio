"use client";
import { useEffect, useRef, useState } from "react";

// Count-up numeral: animates 0 → target over ~1.4s (cubic ease-out) on first scroll into view.
// SSR / no-JS / reduced-motion / missed-trigger rest on the real target (never 0).
export default function Counter({ to, suffix = "", duration = 1400 }) {
  const ref = useRef(null);
  const done = useRef(false);
  const [val, setVal] = useState(to);
  const [landed, setLanded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(to);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || done.current) return;
          done.current = true;
          io.disconnect();
          let start = null;
          const step = (ts) => {
            if (start === null) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(step);
            else { setVal(to); setLanded(true); }
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={landed ? "counted" : undefined}>
      {val}
      {suffix}
    </span>
  );
}

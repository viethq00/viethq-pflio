"use client";
import { useState, useRef, useEffect } from "react";

// Custom dropdown — replaces the native <select> so the closed trigger and the
// open option list both match the design (no browser-native UI). Keyboard-accessible.
export default function Select({ id, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const choose = (o) => {
    onChange(o);
    setOpen(false);
  };

  const onKey = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    } else if (!open && (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setHi(Math.max(0, options.indexOf(value)));
      setOpen(true);
    } else if (open && e.key === "ArrowDown") {
      e.preventDefault();
      setHi((i) => (i + 1) % options.length);
    } else if (open && e.key === "ArrowUp") {
      e.preventDefault();
      setHi((i) => (i - 1 + options.length) % options.length);
    } else if (open && e.key === "Enter") {
      e.preventDefault();
      choose(options[hi]);
    }
  };

  return (
    <div className={`select${open ? " open" : ""}`} ref={ref}>
      <button
        type="button"
        id={id}
        className="select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => {
          setHi(Math.max(0, options.indexOf(value)));
          setOpen((o) => !o);
        }}
        onKeyDown={onKey}
      >
        <span>{value}</span>
        <svg className="select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <ul className="select-list" role="listbox">
          {options.map((o, i) => (
            <li
              key={o}
              role="option"
              aria-selected={o === value}
              className={`${o === value ? "is-sel " : ""}${i === hi ? "is-hi" : ""}`.trim() || undefined}
              onMouseEnter={() => setHi(i)}
              onClick={() => choose(o)}
            >
              {o}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

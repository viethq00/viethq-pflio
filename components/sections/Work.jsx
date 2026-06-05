"use client";
import { Fragment, useState } from "react";
import { featured, projects, workFilters } from "@/lib/data";
import { IconExternal, IconCode } from "@/components/icons";

export default function Work() {
  const [active, setActive] = useState("all");

  return (
    <section className="wrap" id="work">
      <div className="sec-head reveal">
        <span className="eyebrow">Selected Work</span>
        <h2>My Work <span className="star">★</span></h2>
        <p>
          A curated set of projects across fintech, trading, retail computer-vision and
          e-commerce — spanning lead, full-stack and back-end roles.
        </p>
      </div>

      <div className="work-filter reveal d1">
        {workFilters.map((w) => (
          <button
            key={w.f}
            className={active === w.f ? "chip on" : "chip"}
            onClick={() => setActive(w.f)}
          >
            {w.label}
          </button>
        ))}
      </div>

      {/* Featured */}
      <div className="featured reveal d1">
        <div className="visual">
          <span className="tag-feat">{featured.tagline}</span>
          <div className="window">
            <div className="bar"><i /><i /><i /></div>
            <div className="body">
              {featured.terminal.map((line, i) => (
                <Fragment key={i}>
                  {line.map((tok, j) =>
                    tok[0] ? (
                      <span key={j} className={tok[0]}>{tok[1]}</span>
                    ) : (
                      <span key={j}>{tok[1]}</span>
                    )
                  )}
                  {i < featured.terminal.length - 1 && <br />}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="info">
          <span className="role">{featured.role}</span>
          <h3>{featured.name}</h3>
          <p>{featured.desc}</p>
          <div className="feat-stats">
            {featured.stats.map((s) => (
              <div className="fs" key={s.l}>
                <div className="v">{s.v}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="tags">
            {featured.tags.map((t) => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="work-grid">
        {projects.map((p) => {
          const show = active === "all" || active === p.cat;
          return (
            <article className={show ? "proj" : "proj hide"} data-cat={p.cat} key={p.n}>
              <div className="proj-top">
                <span className="pn">{p.n}</span>
                <div className="badges">
                  {p.badges.map((b) => (
                    <span className={`badge ${b.cls}`} key={b.t}>{b.t}</span>
                  ))}
                </div>
              </div>
              <div className="role">{p.role}</div>
              <h3>
                {p.name} <span className="co">{p.company}</span>
              </h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
              {(p.live || p.code) && (
                <div className="links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label="Live">
                      <IconExternal />
                    </a>
                  )}
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noopener noreferrer" aria-label="Code">
                      <IconCode />
                    </a>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section className="wrap" id="experience">
      <div className="sec-head reveal">
        <span className="eyebrow">Career</span>
        <h2>Experience <span className="star">★</span></h2>
        <p>
          Six years across product teams and freelance engagements — a quick tour of the roles
          that shaped how I build.
        </p>
      </div>
      <div className="timeline">
        <div className="tl-line" />
        {experience.map((e) => (
          <div className={e.current ? "tl-item cur reveal d1" : "tl-item reveal d1"} key={`${e.company}-${e.date}`}>
            <span className="tl-node" />
            <div className="tl-card">
              <div className="tl-top">
                <div className="tl-role">
                  {e.role} <span className="co">· {e.company}</span>
                </div>
                <span className="tl-date">{e.date}</span>
              </div>
              <div className="tl-meta">{e.meta}</div>
              <p className="tl-desc">{e.desc}</p>
              <div className="tl-tags">
                {e.tags.map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

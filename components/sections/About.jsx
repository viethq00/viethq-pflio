import { aboutFacts, education } from "@/lib/data";

export default function About() {
  return (
    <section className="wrap" id="about">
      <div className="sec-head reveal">
        <span className="eyebrow">Who Am I</span>
        <h2>
          Engineer at heart, <span className="star">★</span> pragmatist by habit
        </h2>
      </div>
      <div className="about-grid">
        <div className="reveal d1">
          <p className="about-lede">
            I&apos;m a full-stack developer who likes turning{" "}
            <b>vague ideas into dependable software</b> — and then making it faster.
          </p>
          <div className="about-body">
            <p>
              Over six years I&apos;ve worked across fintech, trading platforms, retail
              computer-vision and e-commerce — usually owning a feature from database schema
              to deployed UI. I care about readable code, sensible abstractions and shipping
              things people actually use.
            </p>
            <p>
              Lately I&apos;ve been leading a cross-functional squad, balancing hands-on
              engineering with architecture decisions and mentoring. I&apos;m also an expert
              user of <b style={{ color: "var(--accent)" }}>Claude</b> and{" "}
              <b style={{ color: "var(--accent)" }}>Claude Code</b> — building AI-assisted
              workflows into how I design, build and review software. When I&apos;m not coding,
              I&apos;m probably reading about distributed systems or refactoring something that
              didn&apos;t need it.
            </p>
          </div>
        </div>
        <div className="reveal d2">
          <div className="about-facts">
            {aboutFacts.map((f) => (
              <div className="fact" key={f.k}>
                <div className="k">{f.k}</div>
                <div className={f.acc ? "val acc" : "val"}>{f.v}</div>
              </div>
            ))}
          </div>
          <div className="edu">
            <span className="yr">{education.year}</span>
            <div>
              <h4>{education.degree}</h4>
              <p>{education.school}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

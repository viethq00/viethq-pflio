import { services } from "@/lib/data";
import { serviceIcons } from "@/components/icons";

export default function Services() {
  return (
    <section className="wrap" id="services">
      <div className="sec-head reveal">
        <span className="eyebrow">What I Do</span>
        <h2>
          Build the whole stack, <span className="star">★</span> ship the whole product
        </h2>
        <p>
          From the first API contract to the last pixel — I take features from idea to
          production, then keep them fast and observable.
        </p>
      </div>
      <div className="svc-grid">
        {services.map((s, i) => (
          <article className={`svc reveal d${i + 1}`} key={s.title}>
            <span className="num">{s.num}</span>
            <div className="ico-wrap">{serviceIcons[i]}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="tags">
              {s.chips.map((c) => (
                <span className="chip" key={c}>{c}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

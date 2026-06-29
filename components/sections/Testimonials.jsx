import { testimonials } from "@/lib/data";

// Renders only when real, attributed quotes exist — no fabricated endorsements.
// TODO(viet): populate `testimonials` in lib/data.js (role-attributed quotes,
// e.g. { quote, name, role }). The section stays hidden until then.
export default function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <section className="wrap" id="testimonials">
      <div className="sec-head reveal">
        <span className="eyebrow">Kind words</span>
        <h2>What people say <span className="star">★</span></h2>
      </div>
      <div className="quotes">
        {testimonials.map((t, i) => (
          <figure className={`quote reveal d${(i % 3) + 1}`} key={t.name || i}>
            <div className="qm">&ldquo;</div>
            <blockquote><p>{t.quote}</p></blockquote>
            <figcaption className="by">
              <span className="av">{(t.name || "?").slice(0, 1)}</span>
              <div>
                <div className="nm">{t.name}</div>
                <div className="rl">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

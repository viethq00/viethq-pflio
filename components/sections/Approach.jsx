import { principles } from "@/lib/data";

export default function Approach() {
  return (
    <section className="wrap" id="approach">
      <div className="sec-head reveal">
        <span className="eyebrow">How I work</span>
        <h2>Principles I build by</h2>
        <p>The habits behind shipping software that holds up — across fintech, trading and retail.</p>
      </div>
      <div className="approach-grid">
        {principles.map((p, i) => (
          <div className={`appr reveal d${(i % 4) + 1}`} key={p.title}>
            <span className="appr-n">{String(i + 1).padStart(2, "0")}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

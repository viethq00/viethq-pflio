import Counter from "@/components/Counter";
import { metrics } from "@/lib/data";
import { metricIcons } from "@/components/icons";

export default function Metrics() {
  return (
    <section className="wrap" style={{ paddingBlock: "clamp(8px, 2vw, 24px)" }}>
      <div className="metrics reveal">
        {metrics.map((m) => (
          <div className="metric" key={m.label}>
            <div className="v"><i><Counter to={m.count} suffix={m.suffix} /></i></div>
            <div className="l">{m.label}</div>
            <span className="ic">{metricIcons[m.icon]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

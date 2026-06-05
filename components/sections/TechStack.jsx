import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript, SiJavascript, SiNextdotjs, SiNestjs, SiExpress,
  SiPostgresql, SiMongodb, SiRedis, SiMysql, SiDocker, SiAmazonaws,
  SiTailwindcss, SiGit,
} from "react-icons/si";
import { techStack, techTags } from "@/lib/data";

const icons = {
  typescript: <SiTypescript />,
  javascript: <SiJavascript />,
  react: <FaReact />,
  reactnative: <FaReact />,
  nextjs: <SiNextdotjs />,
  nodejs: <FaNodeJs />,
  nestjs: <SiNestjs />,
  express: <SiExpress />,
  postgresql: <SiPostgresql />,
  mongodb: <SiMongodb />,
  redis: <SiRedis />,
  mysql: <SiMysql />,
  docker: <SiDocker />,
  aws: <SiAmazonaws />,
  tailwind: <SiTailwindcss />,
  git: <SiGit />,
};

export default function TechStack() {
  return (
    <section className="wrap" id="stack">
      <div className="sec-head reveal">
        <span className="eyebrow">Toolbox</span>
        <h2>Tech Stack <span className="star">★</span></h2>
        <p>The tools I reach for most — chosen for reliability, not novelty.</p>
      </div>
      <div className="stack-grid reveal d1">
        {techStack.map((t) => (
          <div className="tech" key={t.key}>
            <span className="tip">{t.name}</span>
            {icons[t.key]}
          </div>
        ))}
      </div>
      <div className="stack-tags reveal d2">
        {techTags.map((t) => (
          <span className="chip" key={t}>{t}</span>
        ))}
      </div>
    </section>
  );
}

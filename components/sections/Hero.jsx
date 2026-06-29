import Image from "next/image";
import Counter from "@/components/Counter";
import { profile, socials, heroTicker } from "@/lib/data";
import { IconArrow, IconDownload, socialIcons } from "@/components/icons";

export default function Hero() {
  return (
    <section className="hero wrap" id="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-tags reveal">
            {profile.roles.map((r) => (
              <span className="tag-pill" key={r}>{r}</span>
            ))}
          </div>
          <h1 className="reveal d1">
            Hi, I&apos;m
            <span className="line2">{profile.name}</span>
          </h1>
          <p className="hero-lede reveal d2">
            I build <b>fast, reliable web platforms</b> end-to-end — from scalable{" "}
            <b>Node &amp; NestJS</b> back-ends to clean <b>React &amp; Next.js</b>{" "}
            front-ends. <span className="u-mark">Six years</span> shipping across fintech,
            trading and retail.
          </p>
          <p className="hero-fit reveal d2">
            <span className="dot" />
            Open to senior &amp; lead roles · remote-friendly, overlaps EU/AU hours
          </p>
          {/* TODO(viet): confirm availability / timezone wording */}
          <div className="hero-actions reveal d3">
            <a className="btn btn-primary" href="#work">
              View my work
              <IconArrow className="ico" />
            </a>
            <a
              className="btn btn-ghost"
              href={profile.cvHref}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download CV
              <IconDownload className="ico" />
            </a>
          </div>
          <div className="hero-social reveal d3">
            {socials.map((s) => (
              <a
                key={s.label}
                className="soc"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                {socialIcons[s.label]}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-photo reveal d2">
          <div className="blob">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              sizes="(max-width: 620px) 78vw, 380px"
              style={{ objectFit: "cover", objectPosition: "center 18%" }}
              priority
            />
          </div>
          <div className="photo-badge">
            <span className="big">{profile.yearsBadge}</span> years shipping
          </div>
        </div>
      </div>

      <div className="hero-ticker reveal">
        {heroTicker.map((t) => (
          <div className="qs" key={t.label}>
            <div className="v"><i><Counter to={t.count} suffix={t.suffix} /></i></div>
            <div className="l">{t.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

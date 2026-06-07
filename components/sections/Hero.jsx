import { Fragment } from "react";
import Image from "next/image";
import Counter from "@/components/Counter";
import { profile, socials, heroTicker } from "@/lib/data";
import { IconArrow, IconDownload, socialIcons } from "@/components/icons";

export default function Hero() {
  return (
    <section className="hero wrap" id="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="hero-kick reveal">{profile.kicker}</span>
          <h1 className="reveal d1">
            Hello, I&apos;m
            <span className="line2 grad-txt">
              {profile.name}
              <span className="cursor" />
            </span>
          </h1>
          <div className="hero-role reveal d2">
            {profile.roles.map((r, i) => (
              <Fragment key={r}>
                {i > 0 && <span className="sep">/</span>}
                <span>{r}</span>
              </Fragment>
            ))}
          </div>
          <p className="hero-lede reveal d2">
            I build <b>fast, reliable web platforms</b> end-to-end — from clean{" "}
            <b>React &amp; Next.js</b> front-ends to scalable <b>Node &amp; NestJS</b>{" "}
            back-ends. Six years shipping products across fintech, trading and retail teams.
          </p>
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
          <div className="ring"><span className="tick" /></div>
          <div className="ring r2" />
          <div className="photo-core">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              sizes="(max-width: 620px) 78vw, 360px"
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

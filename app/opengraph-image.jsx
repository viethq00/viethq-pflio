import { ImageResponse } from "next/og";

// Social share card — branded 1200×630 preview generated with next/og (Satori).
// Mirrors the site's dark + emerald "terminal" aesthetic (see tailwind.config.js
// + app/globals.css + components/sections/Hero.jsx). Everything is inline colours
// and layout — NO external image/font/network fetches — so the route renders
// self-contained at build time. Uses next/og's built-in font.
// TODO(viet): confirm OG copy (name / eyebrow / tagline) if you want it tweaked.

export const alt = "Ha Quoc Viet — Full-Stack Developer & Tech Lead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens lifted from tailwind.config.js + app/globals.css
const BG = "#070b0a";
const ACCENT = "#3ddc97";
const ACCENT_DEEP = "#15c27e";
const TXT = "#e9f2ee";
const TXT_2 = "#a7b8b1";
const TXT_3 = "#6c7e77";
const LINE = "rgba(120, 230, 180, 0.22)";
const LINE_SOFT = "rgba(255, 255, 255, 0.06)";
const WASH = "rgba(61, 220, 151, 0.08)";
const INK = "#04110b";

const EYEBROW = "FULL-STACK ENGINEER · HANOI, VN";
const TAGLINE =
  "Building fast, reliable web platforms end-to-end — React & Next.js front-ends to Node & NestJS back-ends.";
const ROLES = ["Full-Stack Developer", "Tech Lead", "API Architect"];
const CHIPS = ["React", "Next.js", "Node", "NestJS", "AWS"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 76px",
          background: BG,
          color: TXT,
          overflow: "hidden",
        }}
      >
        {/* ambient emerald glows (echo body::before in globals.css) */}
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -150,
            width: 780,
            height: 640,
            background:
              "radial-gradient(circle at 50% 50%, rgba(61,220,151,0.22), transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -320,
            left: -220,
            width: 760,
            height: 640,
            background:
              "radial-gradient(circle at 50% 50%, rgba(61,220,151,0.10), transparent 70%)",
            display: "flex",
          }}
        />
        {/* inset card frame (echoes .card / line tokens) */}
        <div
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            bottom: 24,
            left: 24,
            border: `1px solid ${LINE_SOFT}`,
            borderRadius: 28,
            display: "flex",
          }}
        />

        {/* TOP: brand lockup + availability */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 66,
                height: 66,
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `linear-gradient(150deg, ${ACCENT}, ${ACCENT_DEEP})`,
                color: INK,
                fontSize: 36,
                fontWeight: 700,
                boxShadow: "0 12px 30px -10px rgba(61,220,151,0.45)",
              }}
            >
              V
            </div>
            <div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>
              <span style={{ color: TXT }}>Viet</span>
              <span style={{ color: ACCENT }}>HQ</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 20px",
              border: `1px solid ${LINE}`,
              borderRadius: 999,
              background: WASH,
            }}
          >
            <div
              style={{
                width: 11,
                height: 11,
                borderRadius: 999,
                background: ACCENT,
                display: "flex",
              }}
            />
            <span style={{ fontSize: 21, color: TXT_2 }}>Available for work</span>
          </div>
        </div>

        {/* CENTER: eyebrow / name / roles / tagline */}
        <div
          style={{ position: "relative", display: "flex", flexDirection: "column" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 22,
            }}
          >
            <div style={{ width: 34, height: 2, background: ACCENT, display: "flex" }} />
            <span style={{ fontSize: 21, letterSpacing: 4, color: ACCENT }}>
              {EYEBROW}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 106,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
              color: TXT,
            }}
          >
            Ha Quoc Viet
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 14,
              marginTop: 26,
              fontSize: 32,
              color: TXT_2,
            }}
          >
            {ROLES.map((r, i) => (
              <div
                key={r}
                style={{ display: "flex", alignItems: "center", gap: 14 }}
              >
                {i > 0 && <span style={{ color: ACCENT }}>/</span>}
                <span>{r}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 27,
              lineHeight: 1.4,
              color: TXT_3,
              maxWidth: 900,
            }}
          >
            {TAGLINE}
          </div>
        </div>

        {/* BOTTOM: tech chips + years badge + url */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {CHIPS.map((c) => (
              <div
                key={c}
                style={{
                  display: "flex",
                  fontSize: 20,
                  color: TXT_2,
                  padding: "8px 14px",
                  border: `1px solid ${LINE_SOFT}`,
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.015)",
                }}
              >
                {c}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <span style={{ fontSize: 46, fontWeight: 800, color: ACCENT }}>6+</span>
              <span style={{ fontSize: 24, color: TXT_2 }}>years shipping</span>
            </div>
            <span style={{ fontSize: 19, color: TXT_3 }}>
              viethq-pflio.vercel.app
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

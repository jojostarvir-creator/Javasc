import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#020817",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Glow blobs */}
        <div style={{
          position: "absolute", top: -120, left: -120,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(123,104,238,0.35) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: -100, right: -100,
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
        }} />

        {/* Grid lines */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(rgba(123,104,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(123,104,238,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Available badge */}
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: "10px 24px", borderRadius: 40,
          border: "1.5px solid rgba(123,104,238,0.4)",
          background: "rgba(123,104,238,0.1)",
          marginBottom: 36,
        }}>
          <div style={{
            width: 10, height: 10, borderRadius: "50%", background: "#10b981",
          }} />
          <span style={{ color: "#7b68ee", fontSize: 18, fontWeight: 700, letterSpacing: "0.12em" }}>
            DISPONIBLE · FREELANCE
          </span>
        </div>

        {/* Name */}
        <div style={{
          fontSize: 88, fontWeight: 900, color: "white",
          letterSpacing: "-0.03em", marginBottom: 14,
        }}>
          Donald Fambo
        </div>

        {/* Title with gradient simulation */}
        <div style={{
          fontSize: 38, fontWeight: 700, color: "#7b68ee",
          marginBottom: 28, letterSpacing: "-0.01em",
        }}>
          Développeur Web &amp; Mobile Full Stack
        </div>

        {/* Tech stack pills */}
        <div style={{ display: "flex", gap: 14, marginBottom: 40 }}>
          {["React", "Next.js", "Node.js", "Flutter", "TypeScript"].map((t) => (
            <div key={t} style={{
              padding: "8px 20px", borderRadius: 30,
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              color: "#94a3b8", fontSize: 18, fontWeight: 500,
            }}>
              {t}
            </div>
          ))}
        </div>

        {/* Location */}
        <div style={{ fontSize: 22, color: "#475569" }}>
          Bénin, Afrique de l&apos;Ouest · donald-fambo.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}

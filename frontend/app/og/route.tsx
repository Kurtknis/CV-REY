import { ImageResponse } from "next/og";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px",
          background: "linear-gradient(135deg, #050509 0%, #111827 54%, #062936 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 5, color: "#00d4ff", textTransform: "uppercase" }}>
          Fullstack Engineer
        </div>
        <div style={{ marginTop: 38, fontSize: 96, lineHeight: 0.95, fontWeight: 800 }}>
          Muhammad Raihan Akbar
        </div>
        <div style={{ marginTop: 34, maxWidth: 900, fontSize: 34, lineHeight: 1.35, color: "#d8deea" }}>
          React, Next.js, databases, Flask API integration, technical SEO, and mobile-first web systems.
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

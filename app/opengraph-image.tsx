import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#070707",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px 96px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            width: 48,
            height: 3,
            background: "#3b82f6",
            borderRadius: 2,
            marginBottom: 64,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 84,
            fontWeight: 500,
            color: "#fafafa",
            letterSpacing: "-3px",
            lineHeight: 1,
            marginBottom: 28,
          }}
        >
          James Valentine
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 30,
            color: "#999999",
            fontWeight: 400,
            letterSpacing: "-0.5px",
          }}
        >
          Software Engineer · Educator · Dog Trainer
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 20, color: "#555555", letterSpacing: "-0.3px" }}>
            james-valentine.com
          </div>
          <div
            style={{
              background: "#3b82f6",
              color: "#ffffff",
              padding: "10px 24px",
              borderRadius: 8,
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: "-0.3px",
            }}
          >
            Portfolio
          </div>
        </div>
      </div>
    ),
    size
  );
}

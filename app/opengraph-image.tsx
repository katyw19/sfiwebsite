import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social share card, on-brand with the SFI palette. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F1EEE8",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 8, height: 56, borderRadius: 4, backgroundColor: "#B9C1AE" }} />
            <div style={{ width: 8, height: 56, borderRadius: 4, backgroundColor: "#8F9E8A" }} />
            <div style={{ width: 8, height: 56, borderRadius: 4, backgroundColor: "#5F6F60" }} />
          </div>
          <div style={{ fontSize: 30, letterSpacing: 4, color: "#8F9E8A", fontWeight: 700 }}>
            SFI · SUSTAINABLE FASHION INITIATIVE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 68, lineHeight: 1.1, color: "#3A3F3B", fontWeight: 700, maxWidth: 900 }}>
            Making sustainable fashion the first choice, not an alternative.
          </div>
          <div style={{ fontSize: 30, color: "#5E6462", maxWidth: 820 }}>
            A nonprofit building a more thoughtful relationship with what we wear.
          </div>
        </div>

        <div style={{ display: "flex", height: 10, gap: 0 }}>
          <div style={{ flex: 3, backgroundColor: "#B9C1AE" }} />
          <div style={{ flex: 2, backgroundColor: "#8F9E8A" }} />
          <div style={{ flex: 1, backgroundColor: "#E7ADA2" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}

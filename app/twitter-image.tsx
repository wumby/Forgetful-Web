import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default async function TwitterImage() {
  const iconPath = path.join(
    process.cwd(),
    "public",
    "screenshots",
    "Forgetful-App-Icon.png",
  );
  const iconBuffer = await readFile(iconPath);
  const iconSrc = `data:image/png;base64,${iconBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "#020202",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "780px",
            height: "780px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.26) 0%, rgba(255,255,255,0.1) 22%, rgba(255,255,255,0.04) 42%, rgba(255,255,255,0) 72%)",
            filter: "blur(8px)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "34px",
          }}
        >
          <img
            src={iconSrc}
            alt={`${siteConfig.name} app icon`}
            width={200}
            height={200}
            style={{
              borderRadius: "44px",
              boxShadow: "0 28px 80px rgba(0, 0, 0, 0.45)",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 82,
              fontWeight: 700,
              letterSpacing: "-0.06em",
              lineHeight: 1,
            }}
          >
            Forgetful
          </div>
        </div>
      </div>
    ),
    size,
  );
}

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
          background:
            "radial-gradient(circle at 50% 34%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 14%, rgba(255,255,255,0.03) 28%, rgba(255,255,255,0) 50%), #020202",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "920px",
            height: "920px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.14) 17%, rgba(255,255,255,0.05) 34%, rgba(255,255,255,0) 64%)",
            filter: "blur(34px)",
            transform: "translate(270px, -24px)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            padding: "0 120px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              fontSize: 86,
              fontWeight: 700,
              letterSpacing: "-0.06em",
              lineHeight: 1,
              color: "rgba(255,255,255,0.97)",
            }}
          >
            Forgetful
          </div>
          <img
            src={iconSrc}
            alt={`${siteConfig.name} app icon`}
            width={220}
            height={220}
            style={{
              borderRadius: "48px",
              boxShadow: "0 30px 90px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}

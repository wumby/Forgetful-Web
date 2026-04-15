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
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "linear-gradient(135deg, #0b1a2f 0%, #14284a 48%, #1f4c77 100%)",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "690px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              fontSize: 34,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              opacity: 0.92,
            }}
          >
            <div
              style={{
                display: "flex",
                height: "18px",
                width: "18px",
                borderRadius: "999px",
                background: "#8fd3ff",
              }}
            />
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "28px",
              fontSize: 74,
              lineHeight: 1.03,
              fontWeight: 700,
              letterSpacing: "-0.06em",
            }}
          >
            {siteConfig.socialTitle}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "24px",
              fontSize: 34,
              lineHeight: 1.25,
              color: "#d8e5f3",
              maxWidth: "660px",
            }}
          >
            {siteConfig.socialDescription}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "312px",
            height: "312px",
            padding: "20px",
            borderRadius: "72px",
            background: "rgba(255, 255, 255, 0.12)",
            boxShadow: "0 28px 80px rgba(0, 0, 0, 0.28)",
          }}
        >
          <img
            src={iconSrc}
            alt={`${siteConfig.name} app icon`}
            width={272}
            height={272}
            style={{
              borderRadius: "60px",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}

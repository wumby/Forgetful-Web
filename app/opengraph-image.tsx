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

export default async function OpenGraphImage() {
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
          background: "linear-gradient(180deg, #050505 0%, #010101 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 52% 34%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 18%, rgba(255,255,255,0) 42%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            padding: "0 70px 0 62px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "560px",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "500px",
                height: "240px",
                borderRadius: "999px",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.08) 24%, rgba(255,255,255,0.03) 46%, rgba(255,255,255,0) 70%)",
                filter: "blur(20px)",
                left: "-36px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <div
              style={{
                position: "relative",
                fontSize: 110,
                fontWeight: 700,
                letterSpacing: "-0.055em",
                lineHeight: 0.94,
                color: "#ffffff",
              }}
            >
              Forgetful
            </div>
          </div>
          <div
            style={{
              position: "relative",
              width: "320px",
              height: "360px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "-30px",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "430px",
                height: "430px",
                borderRadius: "999px",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.17) 0%, rgba(255,255,255,0.09) 26%, rgba(255,255,255,0.035) 52%, rgba(255,255,255,0) 76%)",
                filter: "blur(28px)",
                left: "50%",
                top: "50%",
                transform: "translate(-46%, -52%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "340px",
                height: "340px",
                borderRadius: "999px",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.08) 28%, rgba(255,255,255,0.03) 48%, rgba(255,255,255,0) 70%)",
                filter: "blur(18px)",
                left: "50%",
                top: "50%",
                transform: "translate(-46%, -52%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "250px",
                height: "250px",
                borderRadius: "999px",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 42%, rgba(255,255,255,0) 72%)",
                filter: "blur(10px)",
                left: "50%",
                top: "50%",
                transform: "translate(-46%, -52%)",
              }}
            />
            <img
              src={iconSrc}
              alt={`${siteConfig.name} app icon`}
              width={220}
              height={220}
              style={{
                borderRadius: "48px",
                position: "relative",
                boxShadow: "0 30px 90px rgba(0, 0, 0, 0.5)",
              }}
            />
          </div>
        </div>
      </div>
    ),
    size,
  );
}

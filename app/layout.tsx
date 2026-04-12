import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Forgetful • Temporary Photo Mementos",
  description:
    "Forgetful is the temporary photo memento app. Capture, expire, and relive small moments on purpose.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Forgetful • Temporary Photo Mementos",
    description:
      "Forgetful is the temporary photo memento app. Capture, expire, and relive small moments on purpose.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const socialImagePath = "/opengraph-image";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.socialTitle,
  description: siteConfig.socialDescription,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/screenshots/Forgetful-App-Icon.png",
    apple: "/screenshots/Forgetful-App-Icon.png",
  },
  openGraph: {
    title: siteConfig.socialTitle,
    description: siteConfig.socialDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: socialImagePath,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} social preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.socialTitle,
    description: siteConfig.socialDescription,
    images: [socialImagePath],
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

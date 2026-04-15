import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";

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
  },
  twitter: {
    card: "summary",
    title: siteConfig.socialTitle,
    description: siteConfig.socialDescription,
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

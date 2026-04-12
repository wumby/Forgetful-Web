import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy | Forgetful",
  description:
    "Privacy information for Forgetful, including how app content, permissions, and support requests are handled.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Forgetful Privacy",
    description:
      "Learn how Forgetful handles your photos, notes, permissions, and support requests.",
    url: `${siteConfig.siteUrl}/privacy`,
  },
};

const privacyBlocks = [
  {
    title: "What Forgetful keeps",
    items: [
      "Forgetful does not collect, sell, or share personal data beyond the mementos, notes, and photos you choose to create in the app.",
      "Mementos, notes, and photos are stored locally on your device unless you choose to export them or save them somewhere else.",
      "You keep ownership and control of the content you create.",
    ],
  },
  {
    title: "How permissions are used",
    items: [
      "Camera access is only used when you choose to capture a memento.",
      "Photo library access is only used when you choose to import or save an image.",
      "Notifications are only used for reminder or app behavior features you enable.",
    ],
  },
  {
    title: "Support and contact",
    items: [
      "If you contact support, any information you choose to send is used only to respond to your request or help investigate an issue.",
      "Screenshots, device details, and app version information are only reviewed for troubleshooting when you decide to provide them.",
      "This page may be updated if privacy practices change.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="support-page">
      <section className="support-shell">
        <span className="support-eyebrow">Privacy</span>
        <h1 className="support-title">Privacy for Forgetful</h1>
        <p className="support-intro">
          Forgetful is built for short-term mementos. This page explains what
          the app stores, how permissions are used, and how support information
          is handled.
        </p>

        <div className="support-grid">
          {privacyBlocks.map((block) => (
            <article key={block.title} className="support-card">
              <h2 className="support-card-title">{block.title}</h2>
              <ul className="support-list">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="support-actions">
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="support-button"
          >
            Contact support
          </a>
          <Link href="/" className="support-button support-button-secondary">
            Back to site
          </Link>
        </div>
      </section>
    </main>
  );
}

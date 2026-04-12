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
      "Forgetful stores the mementos, notes, and photos you choose to add.",
      "Your content is meant to stay lightweight and personal to your use of the app.",
      "You keep ownership of the content you create.",
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
      "If you contact support, we only use the information you send to help answer your question or investigate an issue.",
      "Sharing screenshots, device details, and app version information can help resolve problems faster.",
      "If privacy practices change over time, this page can be updated to reflect those changes.",
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
          Forgetful is built for short-term mementos. This page explains, at a
          high level, what the app stores, how permissions are used, and how
          support requests are handled.
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

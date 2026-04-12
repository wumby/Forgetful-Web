import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support | Forgetful",
  description:
    "Support for Forgetful. Get help with bugs, feature questions, and app behavior.",
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "Forgetful Support",
    description:
      "Get help with Forgetful, including bug reports, feature requests, and general app support.",
    url: `${siteConfig.siteUrl}/support`,
  },
};

const supportTopics = [
  "Bug reports and app crashes",
  "Questions about mementos, reminders, and app behavior",
  "Feature requests and general feedback",
];

const supportChecklist = [
  "Your device model and iOS version",
  "What you expected to happen",
  "What happened instead",
  "Screenshots if they help explain the issue",
];

export default function SupportPage() {
  return (
    <main className="support-page">
      <section className="support-shell">
        <span className="support-eyebrow">Support</span>
        <h1 className="support-title">Help for Forgetful</h1>
        <p className="support-intro">
          Reach out with questions, bug reports, or feedback.
        </p>

        <div className="support-grid">
          <article className="support-card">
            <h2 className="support-card-title">Contact</h2>
            <p className="support-card-copy">
              Contact us at{" "}
              <a href={`mailto:${siteConfig.supportEmail}`} className="support-link">
                {siteConfig.supportEmail}
              </a>{" "}
              for questions, bug reports, or feedback.
            </p>
            <p className="support-card-copy">
              We only use the information you provide to respond to your
              request.
            </p>
          </article>

          <article className="support-card">
            <h2 className="support-card-title">What we can help with</h2>
            <ul className="support-list">
              {supportTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </article>

          <article className="support-card">
            <h2 className="support-card-title">Include this in your email</h2>
            <ul className="support-list">
              {supportChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="support-actions">
          <Link href="/" className="support-button">
            Back to site
          </Link>
        </div>
      </section>
    </main>
  );
}

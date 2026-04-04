"use client";

import { motion } from "framer-motion";

const panels = [
  {
    title: "Privacy",
    items: [
      "Forgetful stores the memories, notes, and photos you create.",
      "Content is intended to stay on-device unless a future sync feature is explicitly enabled.",
      "Camera, photo library, and notifications are only used for features you choose to use.",
    ],
  },
  {
    title: "Support",
    items: [
      "Use support for bug reports, feature requests, and help with the app.",
      "Include your device, iOS version, and what happened so issues can be reproduced faster.",
      "Questions about your data or app behavior are welcome there too.",
    ],
  },
  {
    title: "Terms",
    items: [
      "Use Forgetful lawfully and without disrupting the app or its services.",
      "You keep ownership of the memories and photos you create in the app.",
      "Features may evolve over time, and availability or liability is limited to the extent allowed by law.",
    ],
  },
];

const sectionReveal = {
  hidden: { opacity: 0.72, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const itemReveal = {
  hidden: { opacity: 0.78, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: "easeOut",
    },
  },
};

export default function InfoSection() {
  return (
    <motion.section
      className="info-section"
      aria-labelledby="info-heading"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="info-shell">
        <motion.div className="info-copy" variants={itemReveal}>
          <span className="info-eyebrow">Info</span>
          <h2 id="info-heading" className="info-heading">
            Privacy, support, and terms. Kept readable.
          </h2>
          <p className="info-intro">
            Everything you need to trust Forgetful, get help, and understand how
            the app works, gathered into one clean final section.
          </p>
        </motion.div>

        <motion.div className="info-grid" variants={itemReveal}>
          {panels.map((panel) => (
            <motion.article key={panel.title} className="info-card" variants={itemReveal}>
              <h3 className="info-card-title">{panel.title}</h3>
              <ul className="info-list">
                {panel.items.map((item) => (
                  <li key={item} className="info-list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <motion.div className="info-section-contact" variants={itemReveal}>
          <span className="info-contact-label">Questions, support, or privacy requests</span>
          <a href="mailto:hello@forgetful.app" className="info-contact-value">
            hello@forgetful.app
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

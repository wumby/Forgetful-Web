"use client";

import { motion } from "framer-motion";

const panels = [
  {
    title: "Privacy",
    items: [
      "Forgetful stores the mementos, notes, and photos you add.",
      "Your content stays on-device unless a future sync feature is turned on.",
      "Camera, photo library, and notifications are only used when you choose those features.",
    ],
  },
  {
    title: "Support",
    items: [
      "Use support for bug reports, questions, and feature requests.",
      "Include your device, iOS version, and what happened to help us troubleshoot faster.",
      "We can also help with data or app behavior questions.",
    ],
  },
  {
    title: "Terms",
    items: [
      "Use Forgetful respectfully and within the law.",
      "You keep ownership of the memories and photos you create.",
      "Features may change over time, and availability is not guaranteed.",
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
          <h2 id="info-heading" className="info-heading">
            Everything you need, kept simple.
          </h2>
          <p className="info-intro">
            Privacy, support, and terms — all in one place.
          </p>
        </motion.div>

        <motion.div className="info-grid" variants={itemReveal}>
          {panels.map((panel) => (
            <motion.article
              key={panel.title}
              className={`info-card${panel.title === "Terms" ? " is-terms" : ""}`}
              variants={itemReveal}
            >
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
          <span className="info-contact-label">Questions or support</span>
          <a href="mailto:hello@forgetful.app" className="info-contact-value">
            hello@forgetful.app
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
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

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.45,
  });

  return (
    <section
      ref={sectionRef}
      className="mission-section"
      aria-labelledby="mission-heading"
    >
      <motion.div
        className="mission-shell"
        variants={sectionReveal}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="mission-copy" variants={itemReveal}>
          <span className="mission-eyebrow">The idea</span>
          <h2 id="mission-heading" className="mission-heading">
            Short-term mementos deserve their own place.
          </h2>
          <p className="mission-intro">
            Forgetful is for the small moments you want to keep nearby for a
            while, without crowding the camera roll you use for everything
            else, and you can still add the ones that matter to your camera
            roll at the end.
          </p>
        </motion.div>

        <motion.div className="mission-grid" variants={itemReveal}>
          <article className="mission-card">
            <h3 className="mission-card-title">
              Remember what you forget
            </h3>
            <p className="mission-card-copy">
              Save the reminders, details, and quick moments you want close
              without keeping them forever.
            </p>
          </article>

          <article className="mission-card">
            <h3 className="mission-card-title">Let it pass</h3>
            <p className="mission-card-copy">
              Hold onto the moment, then let it expire when it has done its job.
            </p>
          </article>

          <article className="mission-card">
            <h3 className="mission-card-title">Protect your camera roll</h3>
            <p className="mission-card-copy">
              Keep everyday clutter out of the photo library you want to keep
              permanent, then save the keepers to your camera roll when you
              want to.
            </p>
          </article>
        </motion.div>
      </motion.div>
    </section>
  );
}

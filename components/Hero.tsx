"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const previewClusterVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08,
    },
  },
};

const previewCards = [
  { className: "hero-preview-card-one", baseY: 3, baseRotate: -5, drift: 2.5 },
  { className: "hero-preview-card-two", baseY: -6, baseRotate: 4, drift: 2.25 },
  { className: "hero-preview-card-three", baseY: -7, baseRotate: 3, drift: 2.75 },
  { className: "hero-preview-card-four", baseY: 2, baseRotate: -4, drift: 2.25 },
];

const previewCardVariants = {
  hidden: ({ baseY, baseRotate }: (typeof previewCards)[number]) => ({
    opacity: 0,
    y: baseY + 28,
    rotate: baseRotate,
    scale: 0.94,
  }),
  visible: ({ baseY, baseRotate }: (typeof previewCards)[number]) => ({
    opacity: 1,
    y: baseY,
    rotate: baseRotate,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  const appStoreUrl = "#";
  const qrCodeUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://www.yourwebsite.com";

  const handleScrollToScreenshots = () => {
    const section = document.getElementById("screenshots");
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  };

  return (
    <div className="hero-shell h-screen w-screen bg-background flex items-center justify-center">
      <div className="hero-layout grid grid-cols-1 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] max-w-7xl mx-auto px-4 lg:px-8">
        {/* Left Column */}
        <motion.div
          className="hero-left-column"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-copy-column flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-headline text-5xl lg:text-7xl font-bold text-text max-w-lg mx-auto lg:mx-0 hero-brand"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/screenshots/Forgetful-App-Icon.png"
                alt="Forgetful App Icon"
                className="w-14 h-14 lg:w-[4.9rem] lg:h-[4.9rem] rounded-[1.1rem]"
              />
              <span className="hero-wordmark">Forgetful</span>
            </motion.h1>
            <motion.p
              className="hero-supporting-copy text-lg lg:text-[1.35rem] text-muted max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Mementos for short term memory
            </motion.p>
          </motion.div>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="hero-qr-helper">
              <img
                src={qrCodeUrl}
                alt="QR code for the Forgetful app"
                className="hero-qr-image"
              />
            </div>
            <Link href={appStoreUrl} className="hero-button primary hero-desktop-store-button">
              <span className="hero-download-copy">
                <span className="hero-download-kicker">Available on</span>
                <span className="hero-download-label">the App Store</span>
              </span>
            </Link>
            <div className="hero-button-group">
              <Link href={appStoreUrl} className="hero-button primary hero-download-button">
                <span className="hero-download-copy">
                  <span className="hero-download-kicker">Download on</span>
                  <span className="hero-download-label">the App Store</span>
                </span>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Polaroids */}
        <motion.div
          className="hero-visual-wrap flex items-center justify-center mt-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="hero-visual-cluster"
            variants={previewClusterVariants}
            initial="hidden"
            animate="visible"
          >
            {previewCards.map((card) => (
              <motion.div
                key={card.className}
                className={card.className}
                custom={card}
                variants={previewCardVariants}
              >
                <motion.div
                  className="hero-preview-card"
                  animate={{
                    y: [0, -card.drift, card.drift * 0.65, 0],
                    rotate: [0, 0.9, -0.65, 0],
                    scale: [1, 1.01, 0.996, 1],
                  }}
                  transition={{
                    duration: 4.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1.6,
                    delay: 1.1 + previewCards.indexOf(card) * 0.18,
                  }}
                >
                  <img
                    src="/screenshots/curtains.jpeg"
                    alt="Curtains"
                    className="hero-preview-image"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="hero-scroll-wrap"
        initial={{ opacity: 0, x: "-50%", y: 12 }}
        animate={{ opacity: 1, x: "-50%", y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <button
          type="button"
          className="hero-scroll-link"
          aria-label="Scroll to screenshots"
          onClick={handleScrollToScreenshots}
        >
          <span className="hero-scroll-arrow" aria-hidden="true">↓</span>
        </button>
      </motion.div>
    </div>
  );
}

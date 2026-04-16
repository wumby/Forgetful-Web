"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Iphone } from "./IphoneMockup";

type Screenshot = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const screenshots: Screenshot[] = [
  {
    src: "/screenshots/mementos-feed.png",
    alt: "Forgetful screenshot showing the main mementos feed",
    title: "Browse",
    description:
      "Scan recent mementos in a clean grid and sort by expiring soonest.",
  },
  {
    src: "/screenshots/folders-list-view.png",
    alt: "Forgetful screenshot showing the folders list view",
    title: "Organize",
    description: "Create folders, add mementos to them, and keep everything easy to sort through.",
  },
  {
    src: "/screenshots/dunkin-memento-detail.png",
    alt: "Forgetful screenshot showing a memento detail page",
    title: "Detail",
    description: "Open any memento to view it, share it, or export it when you want to keep it.",
  },
  {
    src: "/screenshots/garage-memento-settings.png",
    alt: "Forgetful screenshot showing memento settings and expiration controls",
    title: "Capture",
    description: "Take a photo, add the details that matter, and save it as a memento in a few quick steps.",
  },
];

const sectionReveal = {
  hidden: {},
  visible: {
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

export default function ScreenshotsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.35,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
        setActiveIndex((prev) =>
          prev === 0 ? 1 : Math.min(prev, screenshots.length - 1),
        );
        return;
      }

      if (window.innerWidth >= 640) {
        setSlidesPerView(2);
        setActiveIndex((prev) => Math.min(prev, screenshots.length - 2));
        return;
      }

      setSlidesPerView(1);
      setActiveIndex((prev) => Math.min(prev, screenshots.length - 1));
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const isDesktopGallery = slidesPerView >= 3;
  const totalPages = useMemo(
    () =>
      isDesktopGallery
        ? screenshots.length
        : Math.max(1, screenshots.length - slidesPerView + 1),
    [isDesktopGallery, slidesPerView],
  );
  const featuredIndex = activeIndex;

  const goToPage = (index: number) => {
    if (isDesktopGallery) {
      const nextIndex = (index + screenshots.length) % screenshots.length;
      setActiveIndex(nextIndex);
      return;
    }

    const scroller = scrollerRef.current;
    if (!scroller) return;

    const clamped = Math.max(0, Math.min(index, totalPages - 1));
    const slide = scroller.children[clamped] as HTMLElement | undefined;

    if (!slide) return;

    scroller.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const firstSlide = scroller.children[0] as HTMLElement | undefined;
    if (!firstSlide) return;

    const nextIndex = Math.round(scroller.scrollLeft / firstSlide.offsetWidth);
    setActiveIndex(Math.max(0, Math.min(nextIndex, totalPages - 1)));
  };

  const getDesktopRole = (index: number) => {
    const leftIndex =
      (featuredIndex - 1 + screenshots.length) % screenshots.length;
    const rightIndex = (featuredIndex + 1) % screenshots.length;

    if (index === featuredIndex) return "center";
    if (index === leftIndex) return "left";
    if (index === rightIndex) return "right";
    return "hidden";
  };

  const getDesktopAnimation = (role: string) => {
    switch (role) {
      case "left":
        return { x: -220, y: 18, scale: 0.9, opacity: 0.82, zIndex: 1 };
      case "center":
        return { x: 0, y: -8, scale: 1.03, opacity: 1, zIndex: 3 };
      case "right":
        return { x: 220, y: 26, scale: 0.92, opacity: 0.82, zIndex: 1 };
      default:
        return { x: 0, y: 44, scale: 0.85, opacity: 0, zIndex: 0 };
    }
  };

  return (
    <section
      ref={sectionRef}
      id="screenshots"
      className="screenshots-section"
      aria-labelledby="screenshots-heading"
    >
      <motion.div
        className="screenshots-shell"
        variants={sectionReveal}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="screenshots-copy" variants={itemReveal}>
          <h2 id="screenshots-heading" className="screenshots-heading">
            See Forgetful in Motion.
          </h2>
        </motion.div>

        <motion.div className="screenshots-carousel-wrap" variants={itemReveal}>
          <div className="screenshots-gallery-stage">
            <div
              className="screenshots-carousel-controls"
              aria-label="Screenshot navigation"
            >
              <button
                type="button"
                className="screenshots-arrow"
                onClick={() => goToPage(activeIndex - 1)}
                aria-label="Previous screenshots"
              >
                <span aria-hidden="true">‹</span>
              </button>
              <div className="screenshots-dots">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`screenshots-dot${index === activeIndex ? " is-active" : ""}`}
                    aria-label={`Go to screenshot group ${index + 1}`}
                    onClick={() => goToPage(index)}
                  />
                ))}
              </div>
              <button
                type="button"
                className="screenshots-arrow"
                onClick={() => goToPage(activeIndex + 1)}
                aria-label="Next screenshots"
              >
                <span aria-hidden="true">›</span>
              </button>
            </div>
            <div className="screenshots-swipe-hint" aria-hidden="true">
              <span className="screenshots-swipe-line" />
              <span className="screenshots-swipe-copy">Swipe to explore</span>
              <span className="screenshots-swipe-line" />
            </div>
            {isDesktopGallery ? (
              <div className="screenshots-desktop-stage">
                {screenshots.map((shot, index) => {
                  const role = getDesktopRole(index);

                  return (
                    <motion.article
                      key={shot.src}
                      className={`screenshots-slide screenshots-slot-${role}`}
                      initial={getDesktopAnimation("hidden")}
                      animate={
                        isInView
                          ? getDesktopAnimation(role)
                          : getDesktopAnimation("hidden")
                      }
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 18,
                        mass: 0.9,
                      }}
                    >
                      <Iphone
                        src={shot.src}
                        className="screenshots-phone"
                        aria-label={shot.alt}
                      />
                      <div className="screenshots-slide-copy">
                        <h3 className="screenshots-slide-title">
                          {shot.title}
                        </h3>
                        <p className="screenshots-slide-description">
                          {shot.description}
                        </p>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            ) : (
              <motion.div
                ref={scrollerRef}
                className="screenshots-scroller"
                onScroll={handleScroll}
              >
                {screenshots.map((shot, index) => {
                  const stateClass =
                    index === featuredIndex
                      ? " is-featured"
                      : Math.abs(index - featuredIndex) === 1
                        ? " is-secondary"
                        : "";

                  return (
                    <motion.article
                      key={shot.src}
                      className={`screenshots-slide${stateClass}`}
                      variants={itemReveal}
                    >
                      <Iphone
                        src={shot.src}
                        className="screenshots-phone"
                        aria-label={shot.alt}
                      />
                      <div className="screenshots-slide-copy">
                        <h3 className="screenshots-slide-title">
                          {shot.title}
                        </h3>
                        <p className="screenshots-slide-description">
                          {shot.description}
                        </p>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

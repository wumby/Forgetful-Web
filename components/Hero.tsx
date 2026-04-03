"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-screen w-screen bg-background flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Left Column: Text */}
        <motion.div
          className="flex flex-col justify-center space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl lg:text-7xl font-bold text-text leading-relaxed max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/screenshots/Forgetful-App-Icon.png"
              alt="Forgetful App Icon"
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl inline mr-4"
            />
            Forgetful
          </motion.h1>
          <motion.p
            className="text-lg lg:text-2xl text-muted leading-relaxed max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The memento app with short memory<br />
            For those of us with short memory
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="#"
              className="hero-button primary"
            >
              Download on App Store
            </Link>
            <Link
              href="#"
              className="hero-button secondary"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column: Polaroids */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="bg-surface p-1 rounded-lg shadow-soft transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/screenshots/curtains.jpeg"
                alt="Curtains"
                className="w-full h-28 lg:h-32 object-cover rounded"
              />
            </motion.div>
            <motion.div
              className="bg-surface p-1 rounded-lg shadow-soft transform rotate-[2deg] hover:rotate-0 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/screenshots/curtains.jpeg"
                alt="Curtains"
                className="w-full h-28 lg:h-32 object-cover rounded"
              />
            </motion.div>
            <motion.div
              className="bg-surface p-1 rounded-lg shadow-soft transform rotate-[3deg] hover:rotate-0 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/screenshots/curtains.jpeg"
                alt="Curtains"
                className="w-full h-28 lg:h-32 object-cover rounded"
              />
            </motion.div>
            <motion.div
              className="bg-surface p-1 rounded-lg shadow-soft transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/screenshots/curtains.jpeg"
                alt="Curtains"
                className="w-full h-28 lg:h-32 object-cover rounded"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-serif leading-tight ">
          Swarnima Sen — <span className="text-brand-500">Content Writer</span>
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-lg">
          I craft clear, persuasive narratives that turn ideas into impact.
          Blogs, landing pages, whitepapers, newsletters — words that work.
        </p>

        <div className="mt-6 flex gap-3">
          <a
            href="#portfolio"
            className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-md"
          >
            View Work
          </a>
          <a href="#contact" className="px-4 py-2 border rounded-md">
            Contact
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="/assets/images/swarnima.jpg"
          alt="Swarnima Sen"
          className="rounded-lg shadow-xl w-full max-w-sm mx-auto object-cover"
        />
      </motion.div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center"
    >
      <motion.img
        src="/profile.jpg"
        alt="Profile"
        className="rounded-full w-40 h-40 object-cover border-4 border-blue-500"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className="text-4xl md:text-5xl font-bold mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Vadde Sreshta
      </motion.h1>

      <motion.p
        className="text-lg text-gray-400 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Aspiring Software Developer | Cloud & Python Enthusiast
      </motion.p>

      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}

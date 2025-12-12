"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#0d1117] px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Education
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto p-6 bg-black/40 rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-semibold text-xl">SR University, Warangal</h3>
        <p className="text-gray-300">
          B.Tech in Computer Science (CGPA: 8.0) | Oct 2022 – May 2026
        </p>
      </motion.div>
    </section>
  );
}

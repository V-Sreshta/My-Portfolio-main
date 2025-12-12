"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Experience
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-6">
        <motion.div
          className="p-6 bg-black/30 rounded-xl"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="font-semibold text-xl">Bharat Intern — Web Developer</h3>
          <p className="text-gray-300">Sep 2023 – Oct 2023</p>
        </motion.div>

        <motion.div
          className="p-6 bg-black/30 rounded-xl"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="font-semibold text-xl">
            AWS Cloud Virtual Internship — Cloud Engineer
          </h3>
          <p className="text-gray-300">May 2023 – Jul 2023</p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="max-w-xl mx-auto text-center text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <p>Email: <span className="text-blue-400">sreshtavadde@gmail.com</span></p>
        <p className="mt-2">GitHub: github.com/sreshtavadde</p>
        <p className="mt-2">LinkedIn: linkedin.com/in/sreshta</p>
      </motion.div>
    </section>
  );
}

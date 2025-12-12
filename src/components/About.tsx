"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 max-w-4xl mx-auto px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-gray-300 leading-7"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I am a Computer Science student at SR University with hands-on experience
        in cloud engineering, Python development, automation, and full-stack
        projects. I enjoy building efficient systems and improving my technical
        skills. My strong areas include AWS cloud infrastructure, backend
        development, and scalable solutions.
      </motion.p>
    </section>
  );
}

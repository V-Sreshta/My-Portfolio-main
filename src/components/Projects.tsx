"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "CKD Detection", desc: "ML project detecting kidney disease" },
  { title: "Portfolio Website", desc: "React + TS + Tailwind website" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0d1117] px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="p-6 bg-black/40 rounded-lg"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-300 mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

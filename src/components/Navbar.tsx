"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navItems = ["Home", "About", "Education", "Projects", "Contact"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full backdrop-blur-lg bg-black/20 text-white z-50 shadow-md"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="font-bold text-xl">VS</h1>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}

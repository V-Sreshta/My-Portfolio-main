"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
    >
      {dark ? "🌙" : "☀️"}
    </motion.button>
  );
}

import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const updatedTheme = !darkMode;
    setDarkMode(updatedTheme);

    if (updatedTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Apply saved theme on load
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <section
      id="home"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center relative">

        {/* DARK MODE TOGGLE */}
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-6 px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-black dark:text-white shadow transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* PROFILE PHOTO */}
        <img
          src="/profile.jpg"
          alt="Vadde Sreshta"
          className="w-40 h-40 rounded-full shadow-lg mb-6 object-cover border-4 border-white dark:border-gray-700"
        />

        {/* HERO SECTION TEXT */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Vadde Sreshta
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Aspiring Software Developer | Cloud & Python Enthusiast
        </p>

        <div className="flex gap-4">
          <a href="#projects">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
              View Projects
            </button>
          </a>

          <a href="#contact">
            <button className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-black">
              Contact Me
            </button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;

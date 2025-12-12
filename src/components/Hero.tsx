import { useState, useEffect } from "react";

const Hero = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Update the body class whenever theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center transition-colors duration-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="w-full flex justify-end p-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      <div className="flex flex-col items-center mt-10">
        <img
          src="/profile.jpg"
          alt="Vadde Sreshta"
          className="w-32 h-32 rounded-full border-4 border-gray-700 dark:border-gray-300"
        />
        <h1 className="text-4xl font-bold mt-4">Vadde Sreshta</h1>
        <p className="mt-2 text-lg">
          Aspiring Software Developer | Cloud & Python Enthusiast
        </p>
        <div className="mt-4 flex gap-4">
          <button className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
            View Projects
          </button>
          <button className="px-6 py-2 rounded bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-800 hover:bg-gray-900 dark:hover:bg-gray-400 transition">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

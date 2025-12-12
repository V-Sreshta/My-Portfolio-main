import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">

        <img
          src="/profile.jpg"
          alt="Vadde Sreshta"
          className="w-40 h-40 rounded-full shadow-lg mb-6 object-cover border-4 border-white dark:border-gray-700"
        />

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

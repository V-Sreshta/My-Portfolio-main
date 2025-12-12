import React from "react";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 dark:text-gray-200 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">Education</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p><strong>SR University, Warangal</strong> — B.Tech Computer Science (CGPA: 8.0) | Oct 2022 – May 2026</p>
          {/* Add more education items here */}
        </div>
      </div>
    </section>
  );
};

export default Education;

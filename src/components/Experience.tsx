import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 dark:text-gray-200 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">Experience</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p><strong>Bharat Intern</strong> — Web Developer | Sep 2023 – Oct 2023</p>
          <p><strong>AWS Cloud Virtual Internship</strong> — Cloud Engineer | May 2023 – Jul 2023</p>
          {/* Add more experiences here */}
        </div>
      </div>
    </section>
  );
};

export default Experience;

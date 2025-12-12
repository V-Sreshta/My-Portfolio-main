import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 dark:text-gray-200 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">Projects</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p><strong>Chronic Kidney Disease Detection</strong>Designed a CKD detection model using Random Forest Classifier in Python, identifying CKD from blood sample
data</></p>
          <p><strong>Bank Loan System</strong> — HTML, CSS, JS | Oct 2023 - Nov 2023</p>
          <p><strong>Netflix Clone</strong> — HTML, CSS, JS | Aug 2023 - Sep 2023</p>
          {/* Add more projects */}
        </div>
      </div>
    </section>
  );
};

export default Projects;

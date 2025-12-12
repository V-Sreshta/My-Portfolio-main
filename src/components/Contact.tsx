import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 dark:text-gray-200 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">Contact</h2>
        <div className="text-gray-700 dark:text-gray-300 text-center">
          <p>Email: vaddesreshta133@gmail.com</p>
          <p>Phone: +91 7095429683</p>
          <p>Location: Warangal, Telangana, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

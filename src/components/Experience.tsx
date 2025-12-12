import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 dark:text-gray-200 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">Experience</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p><strong>Zaalima Virtual Internship</strong> — The Zaalima Virtual Internship is an online learning and industry-exposure program designed to help students gain hands-on experience in various technical domains through practical, real-world projects. During the internship, participants work on guided tasks, develop problem-solving skills, and apply theoretical knowledge to industry-relevant scenarios. The program focuses on building confidence, improving technical proficiency, and preparing students for professional roles by offering mentorship, project evaluations, and flexible remote learning. Through this virtual internship, students strengthen their portfolios and gain valuable experience that contributes to their overall career development.</p>
          <p><strong>AWS Cloud Virtual Internship</strong> — The AWS Cloud Virtual Internship is a remote, industry-oriented training program designed to provide hands-on experience with Amazon Web Services and cloud computing fundamentals. During the internship, participants work on cloud-based projects involving services such as EC2, S3, IAM, Lambda, and VPC, gaining practical knowledge of deploying, managing, and securing applications on the cloud. The program emphasizes real-world scenarios like building scalable architectures, automating workflows, and understanding best practices in cloud infrastructure. By the end of the internship, students develop strong foundational skills in cloud computing, improve their technical confidence, and become better prepared for cloud-related career opportunities.</p>
          {/* Add more experiences here */}
        </div>
      </div>
    </section>
  );
};

export default Experience;

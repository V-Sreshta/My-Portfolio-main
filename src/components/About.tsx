import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 dark:text-gray-200 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">About Me</h2>

        <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
          <p>
            I am a Computer Science student at SR University with hands-on experience in cloud engineering, Python development, automation, and full-stack projects. I enjoy building efficient systems, solving problems, and continuously improving my technical skills.
          </p>
          <p>
            I have strong foundations in AWS cloud services, Python programming, and full-stack web development. My focus areas include cloud infrastructure, backend development, and building scalable solutions.
          </p>
          <p>
            Currently, I’m exploring advanced cloud architectures while contributing to open-source projects and pursuing academic goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

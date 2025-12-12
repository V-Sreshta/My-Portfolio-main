import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* TEXT CONTENT */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-6">
              I am a Computer Science student at SR University with hands-on experience
              in cloud engineering, Python development, automation, and full-stack projects.
              I enjoy building efficient systems, solving problems, and continuously improving
              my technical skills.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              I have strong foundations in AWS cloud services, Python programming, and
              full-stack web development. My focus areas include cloud infrastructure,
              backend development, and building scalable solutions.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Currently, I’m exploring advanced cloud architectures while contributing to
              open-source tech projects and pursuing academic excellence.
            </p>

            {/* DOWNLOAD RESUME BUTTON */}
            <a
              href="/Sreshta_s_CV.pdf"
              download="Vadde_Sreshta_Resume.pdf"
            >
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
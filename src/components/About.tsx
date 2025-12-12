import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          About Me
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-2">📸</div>
                <p className="text-slate-600 font-semibold">Photo Placeholder</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I am a Computer Science student at SR University with hands-on experience in cloud engineering, Python development, automation, and full-stack projects. I enjoy building efficient systems, solving problems, and continuously improving my technical skillset.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              With a strong foundation in AWS cloud services, Python programming, and full-stack development, I'm passionate about leveraging technology to solve real-world problems. My focus areas include cloud infrastructure, backend development, and creating scalable solutions.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Currently exploring advanced cloud architectures and contributing to open-source projects while pursuing my academic goals.
            </p>

            <button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

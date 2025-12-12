import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Education
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                <GraduationCap size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">B.Tech Computer Science</h3>
                <p className="text-lg text-blue-600 font-semibold mb-2">SR University, Warangal, Telangana</p>
                <p className="text-slate-600 mb-3 text-lg">October 2022 – May 2026</p>
                <div className="space-y-2">
                  <p className="text-slate-700"><span className="font-semibold">CGPA:</span> 8.0</p>
                  <p className="text-slate-600 leading-relaxed">
                    Pursuing comprehensive computer science education with focus on software development, cloud computing, and emerging technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

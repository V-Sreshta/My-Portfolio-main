import { Code, Users } from 'lucide-react';

const skillsData = {
  programming: [
    'C',
    'Python',
    'Java',
    'SQL',
    'HTML/CSS',
    'JavaScript',
    'ReactJS',
    'Git/GitHub',
  ],
  soft: [
    'Commitment',
    'Adaptability',
    'Teamwork',
    'Problem Solving',
    'Communication',
    'Leadership',
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Skills
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-blue-600" size={32} />
              <h3 className="text-2xl font-bold text-slate-900">Programming</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skillsData.programming.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-semibold text-sm hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-blue-600" size={32} />
              <h3 className="text-2xl font-bold text-slate-900">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skillsData.soft.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-semibold text-sm hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

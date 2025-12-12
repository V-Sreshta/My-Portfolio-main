import { Award } from 'lucide-react';

const certifications = [
  {
    name: 'Theory Of Computation',
    issuer: 'NPTEL',
    description: 'Comprehensive certification in theoretical computer science and computational theory.',
  },
  {
    name: 'Network & Wiring Essentials',
    issuer: 'CISCO',
    description: 'Professional certification covering network infrastructure and wiring standards.',
  },
  {
    name: 'Foundations of Project Management',
    issuer: 'GOOGLE',
    description: 'Google Career Certificate in project management fundamentals and best practices.',
  },
  {
    name: 'Cloud Computing & Data Engineering',
    issuer: 'AWS',
    description: 'Advanced certification in cloud infrastructure, services, and data engineering.',
  },
  {
    name: 'Introduction to Software Engineering',
    issuer: 'IBM',
    description: 'Professional certification in software engineering principles and methodologies.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Certifications
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-blue-600"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <Award size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900">{cert.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

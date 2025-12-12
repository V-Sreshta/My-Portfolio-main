import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'AWS Cloud Virtual Internship',
    company: 'Amazon Web Services',
    period: 'May 2023 – July 2023',
    role: 'AWS Cloud Engineer',
    description: 'Gained comprehensive experience with AWS cloud services and infrastructure management.',
    achievements: [
      'Worked with EC2, S3, Lambda, and RDS services',
      'Deployed 5 cloud applications with improved response time by 30%',
      'Designed and implemented scalable cloud architectures',
      'Optimized database queries and cloud resources',
    ],
  },
  {
    title: 'Zaalima Virtual Internship',
    company: 'Zaalima',
    period: 'May 2025 – August 2025',
    role: 'Python Development Intern',
    description: 'Developed Python automation scripts and backend modules for robust applications.',
    achievements: [
      'Built and optimized Python automation scripts',
      'Developed backend modules integrating MongoDB & MySQL databases',
      'Implemented API integration and performed debugging',
      'Created efficient data processing pipelines',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Experience
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-blue-600"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                  <Briefcase size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                  <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
                  <p className="text-slate-500 text-sm">{exp.period}</p>
                </div>
              </div>

              <p className="text-slate-700 font-semibold mb-3">Role: {exp.role}</p>
              <p className="text-slate-600 mb-4 leading-relaxed">{exp.description}</p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

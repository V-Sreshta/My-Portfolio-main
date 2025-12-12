import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Sensor-based Parking Assistant System',
    period: 'June 2025 – November 2025',
    description:
      'Intelligent parking assistance system utilizing sensors and Arduino technology for real-time parking availability detection.',
    tech: ['Arduino', 'Sensors', 'IoT', 'Python'],
    highlights: [
      'Built with modular architecture for scalability',
      'Enabled future autonomous navigation capabilities',
      'Clean, maintainable code structure',
      'Real-time sensor data processing',
    ],
    image: 'https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Chronic Kidney Disease Detection',
    period: 'March 2024 – April 2024',
    description:
      'Machine learning model leveraging Random Forest Classifier to detect chronic kidney disease using blood sample analysis data.',
    tech: ['Python', 'Machine Learning', 'Random Forest', 'Data Analysis'],
    highlights: [
      'Random Forest Classifier implementation',
      'Medical data analysis and preprocessing',
      'Predictive modeling for healthcare',
      'High accuracy disease detection',
    ],
    image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Bank Loan System',
    period: 'October 2023 – November 2023',
    description:
      'Responsive frontend system that simulates comprehensive bank loan processes with intuitive user interface and real-time calculations.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    highlights: [
      'Fully responsive UI/UX design',
      'Interactive loan calculation system',
      'Professional banking interface',
      'Cross-browser compatibility',
    ],
    image: 'https://images.pexels.com/photos/3965619/pexels-photo-3965619.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Netflix Clone',
    period: 'August 2023 – September 2023',
    description:
      'Full-featured Netflix clone built with vanilla HTML, CSS, and JavaScript featuring accessible UI and responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    highlights: [
      'Pixel-perfect Netflix interface replication',
      'Accessible and semantic HTML',
      'Smooth animations and transitions',
      'Fully responsive design',
    ],
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Projects
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Showcasing my technical expertise through diverse projects spanning cloud, backend, and frontend technologies
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-200"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 pb-4">
                  <button className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    <Code size={20} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-blue-600 mb-2">{project.period}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-700 mb-3">Highlights:</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

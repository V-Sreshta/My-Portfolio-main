import { Trophy, Star } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'SIH Internal Hackathon Winner',
    description: 'Built automated tourism website handling 150+ queries efficiently for Smart India Hackathon.',
  },
  {
    icon: Star,
    title: 'Event Organization',
    description: 'Successfully organized farewell event for 2000+ attendees with seamless coordination.',
  },
  {
    icon: Trophy,
    title: '3rd Place Inter-College Hackathon',
    description: 'Led 5-member team in developing blockchain supply chain system for secure logistics management.',
  },
  {
    icon: Star,
    title: 'Semester Topper',
    description: 'Awarded Semester Topper in 5th semester for exceptional academic performance.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Achievements
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-blue-600"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{achievement.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

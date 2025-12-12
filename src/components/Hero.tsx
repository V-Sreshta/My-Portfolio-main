import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 relative">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center animate-fade-in">
        <div className="mb-8 flex justify-center">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl animate-slide-down">
            VS
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 animate-slide-up">
          Vadde Sreshta
        </h1>

        <p className="text-2xl md:text-3xl text-slate-600 mb-6 animate-slide-up animation-delay-200">
          Aspiring Software Developer | Cloud & Python Enthusiast
        </p>

        <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-400">
          Crafting clean code, cloud solutions, and powerful applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up animation-delay-600">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Contact Me
          </button>
        </div>

        <div className="flex gap-6 justify-center animate-slide-up animation-delay-800">
          <a href="https://github.com/V-Sreshta" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/vadde-sreshta-9b5a0528b" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110">
            <Linkedin size={28} />
          </a>
          <a href="mailto:vaddesreshta133@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110">
            <Mail size={28} />
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-blue-600 transition-colors duration-300 animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}

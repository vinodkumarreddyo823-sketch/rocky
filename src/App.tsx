import { Mail, Phone, MapPin, Download, Github, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { ResumeData } from './types';

const resumeData: ResumeData = {
  name: "Ooduru Vinod Kumar Reddy",
  phone: "+91 9032230204",
  email: "vinodkumarreddyo823@gmail.com",
  summary: "Highly motivated B.Tech Electronics and Communication Engineering student with a strong foundation in core engineering principles and a passion for software development. Proficient in C, Python, and web technologies, with a track record of academic excellence (CGPA 3.98). Seeking to leverage technical skills in a challenging role.",
  education: [
    {
      degree: "B.Tech in Electronics and Communication Engineering (Year 3)",
      institution: "Annamacharya Institute of Technology and Sciences",
      year: "2023 - Present",
      score: "CGPA: 3.98"
    }
  ],
  skills: [
    "C Programming",
    "Python",
    "Web Development (HTML, CSS, JavaScript)",
    "React.js",
    "Tailwind CSS",
    "Embedded Systems",
    "Circuit Design"
  ],
  projects: [
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built using React and Tailwind CSS to showcase projects and skills.",
      technologies: ["React", "Tailwind CSS", "Lucide React"]
    },
    {
      title: "Basic IoT Monitoring System",
      description: "Developed a prototype for monitoring environmental parameters using sensors and microcontrollers.",
      technologies: ["Arduino", "Sensors", "C++"]
    }
  ],
  experience: [] // Can be filled later
};

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-zinc-900 print:bg-white print:p-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none"
      >
        {/* Header */}
        <header className="bg-zinc-900 text-white p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">{resumeData.name}</h1>
              <p className="text-zinc-400 text-lg font-medium">Electronics & Communication Engineer</p>
            </div>
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 bg-white text-zinc-900 px-6 py-3 rounded-full font-semibold hover:bg-zinc-200 transition-colors print:hidden"
            >
              <Download size={20} />
              Download PDF
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-300">
            <a href={`mailto:${resumeData.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={16} />
              {resumeData.email}
            </a>
            <a href={`tel:${resumeData.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={16} />
              {resumeData.phone}
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              Andhra Pradesh, India
            </div>
          </div>
        </header>

        <div className="p-8 sm:p-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-12">
            {/* Summary */}
            <section>
              <h2 className="text-2xl font-bold border-b-2 border-zinc-100 pb-2 mb-4">Professional Summary</h2>
              <p className="text-zinc-600 leading-relaxed">
                {resumeData.summary}
              </p>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold border-b-2 border-zinc-100 pb-2 mb-4">Key Projects</h2>
              <div className="space-y-6">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-zinc-700 transition-colors">{project.title}</h3>
                    </div>
                    <p className="text-zinc-600 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs font-mono bg-zinc-100 text-zinc-600 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold border-b-2 border-zinc-100 pb-2 mb-4">Education</h2>
              <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <span className="text-sm font-medium text-zinc-500">{edu.year}</span>
                    </div>
                    <p className="text-zinc-700 font-medium">{edu.institution}</p>
                    <p className="text-zinc-500 text-sm mt-1">{edu.score}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold border-b-2 border-zinc-100 pb-2 mb-4">Technical Skills</h2>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-zinc-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Contact Info (Sidebar version for print/desktop) */}
            <section className="bg-zinc-50 p-6 rounded-xl border border-zinc-100">
              <h2 className="text-lg font-bold mb-4">Connect</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-zinc-600">
                  <Linkedin size={18} className="text-zinc-400" />
                  <span>linkedin.com/in/vinod-kumar</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-600">
                  <Github size={18} className="text-zinc-400" />
                  <span>github.com/vinodreddy</span>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-2xl font-bold border-b-2 border-zinc-100 pb-2 mb-4">Languages</h2>
              <ul className="space-y-2 text-zinc-600 font-medium">
                <li>English (Professional)</li>
                <li>Telugu (Native)</li>
                <li>Hindi (Conversational)</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-zinc-50 p-8 border-t border-zinc-100 text-center text-zinc-400 text-sm">
          <p>© 2026 {resumeData.name}. Built with React & Tailwind CSS.</p>
        </footer>
      </motion.div>
    </div>
  );
}

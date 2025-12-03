import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Mail, Sparkles, Code2, BrainCircuit } from 'lucide-react';

// ТВОИТЕ ПРОЕКТИ
const projects = [
  {
    title: "AI RAG Chatbot",
    desc: "Чатбот с Retrieval-Augmented Generation архитектура, изграден с Gemini Custom Gems за под 6 часа.",
    tags: ["Gemini", "AI", "RAG"],
    link: "#", // Тук сложи линк, ако имаш
    type: "AI Project"
  },
  {
    title: "YoannaFLP & Iglika.me",
    desc: "Портфолио сайтове с фокусиран UX и къстъм дизайн.",
    tags: ["HTML/CSS", "Design", "UX"],
    link: "https://yoannaflp.com",
    type: "Web Dev"
  },
  {
    title: "Miglena Avramova",
    desc: "Корпоративен уебсайт с модерен интерфейс.",
    tags: ["UI/UX", "Frontend"],
    link: "https://miglenaavramova.com",
    type: "Web Dev"
  },
  {
    title: "Rumen Aloe",
    desc: "Продуктов уебсайт с фокус върху представянето на бранда.",
    tags: ["Design", "Content"],
    link: "https://rumen-aloe.com",
    type: "Web Dev"
  }
];

const App = () => {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-white">
      
      {/* HERO SECTION */}
      <header className="container mx-auto px-6 py-20 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-4 text-primary font-semibold tracking-wider uppercase">
            <Sparkles size={18} />
            <span>AI Front-end Candidate</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Designing Interfaces that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Feel Alive.</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
            Не съм просто разработчик. Аз съм Creator, който използва AI, за да превръща идеи в работещи продукти за часове, не за седмици.
            Комбинирам дизайн усет (Adobe/Canva) с RAG архитектури и модерен код.
          </p>

          <div className="flex gap-4">
            <a href="mailto:tvoya_email@gmail.com" className="px-8 py-3 bg-primary hover:bg-violet-700 transition rounded-full font-medium flex items-center gap-2">
              <Mail size={18} /> Свържи се с мен
            </a>
            <a href="https://github.com" target="_blank" className="px-8 py-3 border border-gray-700 hover:border-gray-500 rounded-full font-medium transition flex items-center gap-2">
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>
      </header>

      {/* SKILLS SECTION */}
      <section className="bg-slate-900/50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <SkillCard 
              icon={<BrainCircuit size={32} className="text-blue-400" />}
              title="AI Native Workflow"
              desc="Използвам Gemini, ChatGPT и Custom Gems ежедневно, за да пиша код по-бързо и да решавам backend проблеми."
            />
            <SkillCard 
              icon={<Code2 size={32} className="text-pink-400" />}
              title="Rapid Prototyping"
              desc="От Figma и Canva директно към код. Строя бързо, тествам и подобрявам в движение."
            />
            <SkillCard 
              icon={<Sparkles size={32} className="text-amber-400" />}
              title="Design & Motion"
              desc="Владея Adobe пакет & CapCut. Създавам визуални истории и анимации, които ангажират потребителя."
            />
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="w-2 h-8 bg-primary rounded-full"></span>
          Selected Work
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </section>

      <footer className="py-10 text-center text-gray-500 border-t border-gray-800">
        <p>© 2025 Изградено с React, Tailwind & AI.</p>
      </footer>
    </div>
  );
};

// ПОМОЩНИ КОМПОНЕНТИ (за да е чист кода горе)
const SkillCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 bg-slate-800 rounded-2xl border border-slate-700"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{desc}</p>
  </motion.div>
);

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative bg-slate-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-primary transition-all duration-300"
  >
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
          {project.type}
        </span>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <ExternalLink size={20} />
        </a>
      </div>
      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
      <p className="text-gray-400 mb-6">{project.desc}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-sm text-gray-300 bg-slate-700 px-3 py-1 rounded-md">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default App;
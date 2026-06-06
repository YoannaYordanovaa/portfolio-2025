import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Mail, Sparkles, Code2, BrainCircuit, Terminal, Cpu, Layers, PenTool, Linkedin, MapPin, ArrowRight, Phone, Menu, X } from 'lucide-react';

const projects = [
    {
    title: "miglenaavramova.com",
    desc: "Personal website with a modern, responsive interface.",
    tags: ["Frontend", "Backend", "AI", "Design"],
    link: "https://miglenaavramova.com/",
    type: "Web Dev",
    image: "miglena.png"
  },
    {
    title: "yoannaflp.com",
    desc: "Personal website featuring custom design and smooth UX.",
    tags: ["Wordpress", "Design", "AI"],
    link: "https://yoannaflp.com",
    type: "Web Dev",
    image: "yoanna.jpg"
  },
  {
    title: "ForeverBuddy",
    desc: "Retrieval-Augmented Generation chatbot built with Gemini Custom Gems in under 6 hours.",
    tags: ["AI", "Gemini", "Frontend"],
    link: "https://foreverbuddy.netlify.app/", 
    type: "AI Project",
    image: "foreverbuddy.jpg"
  },
  {
    title: "Figma Prototypes",
    desc: "A collection of high-fidelity designs and wireframes in Figma.",
    tags: ["Figma", "Prototyping", "Design System"],
    link: "https://www.figma.com/design/hHEZ9jouv9CgMMaIDdVr1q/Figma_Projects?node-id=0-1&m=dev&t=s5JPU69yBjrevlAv-1",
    type: "Design",
    image: "Figma.jpg"
  }
];

const hardSkills = [
  { name: "React & Vite", icon: <Code2 size={18} /> },
  { name: "Tailwind CSS", icon: <Layers size={18} /> },
  { name: "JavaScript (ES6+)", icon: <Terminal size={18} /> },
  { name: "AI/LLM Integration", icon: <BrainCircuit size={18} /> },
  { name: "Figma & UI Design", icon: <PenTool size={18} /> },
  { name: "WordPress", icon: <Cpu size={18} /> },
  { name: "Adobe Suite", icon: <Sparkles size={18} /> },
  { name: "Responsive Layouts", icon: <Layers size={18} /> },
];

const techStack = [
  { name: "Gemini", url: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
  { name: "Figma", url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "Illustrator", url: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" },
  { name: "Photoshop", url: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
  { name: "WordPress", url: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" },
  { name: "Canva", url: "https://upload.wikimedia.org/wikipedia/en/b/bb/Canva_Logo.svg" },
];

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-body selection:bg-primary selection:text-dark bg-dark text-txt-main">
      
      <header className="bg-paper text-txt-dark relative overflow-hidden min-h-screen flex flex-col">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 py-8 relative z-50 flex-grow flex flex-col">
          
          <nav className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-20 md:w-24 z-50"
            >
              <img src="/logo.svg" alt="Yoanna Logo" className="w-full h-auto" />
            </motion.div>

            <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase text-secondary">
              <a href="#resume" className="hover:text-dark transition">Resume</a>
              <a href="#about" className="hover:text-dark transition">Skills</a>
              <a href="#work" className="hover:text-dark transition">Portfolio</a>
              <a href="#contact" className="hover:text-dark transition">Contact</a>
            </div>

            <button 
              className="md:hidden text-secondary z-50 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </nav>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 bg-paper z-40 flex flex-col items-center justify-center text-center md:hidden"
              >
                <div className="flex flex-col gap-8 text-xl font-bold tracking-widest uppercase text-secondary">
                  <a href="#resume" onClick={() => setIsMobileMenuOpen(false)}>Resume</a>
                  <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
                  <a href="#work" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex-grow flex items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl w-full"
            >
              <div className="flex items-center gap-2 mb-6 text-secondary font-bold tracking-widest uppercase text-xs md:text-sm font-sans">
                <Sparkles size={16} className="text-secondary" />
                <span>Yoanna Yordanova</span>
              </div>
              
              <h1 className="font-sans text-4xl md:text-7xl font-extrabold mb-8 leading-tight text-txt-dark">
                Building interfaces that feel <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-orange-400 to-primary">Organic & Alive</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed font-medium">
                Hello, my name is Yoanna and I combine design aesthetics with the power of AI to turn ideas into production-ready products!
              </p>

              <div className="flex flex-wrap gap-4 font-sans font-bold text-sm md:text-base">
                <a href="#contact" className="px-8 py-4 bg-dark text-white hover:bg-secondary hover:text-white transition rounded-full flex items-center gap-2 shadow-xl shadow-dark/10">
                  <Mail size={18} /> Contact Me
                </a>
                <a href="https://github.com/YoannaYordanovaa" target="_blank" className="px-8 py-4 border border-dark/20 text-txt-dark hover:border-dark rounded-full transition flex items-center gap-2">
                  <Github size={18} /> GitHub
                </a>
              </div>
            </motion.div>
          </div>

        </div>

      </header>

        <div className="absolute bottom-[-50px] left-0 w-full overflow-hidden pointer-events-none opacity-5 select-none z-0">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ 
              repeat: Infinity, 
              duration: 40, 
              ease: "linear" 
            }}
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-[6rem] md:text-[10rem] font-black uppercase tracking-tighter text-[#725c52] mr-16 leading-none">
                Yoanna • Yordanova •
              </span>
            ))}
          </motion.div>
        </div>

      <div className="bg-dark text-txt-main">      

        <section id="resume" className="py-24 bg-paper text-txt-dark">
          <div className="container mx-auto px-8 md:px-16 lg:px-24">
            
            <div className="grid md:grid-cols-2 gap-16">
              
              <div>
                <h2 className="font-sans text-3xl font-bold mb-12 flex items-center gap-4 text-txt-dark">
                  <span className="w-8 h-1 bg-secondary rounded-full"></span>
                  Experience
                </h2>
                
                <div className="space-y-2">
                  <TimelineItem 
                    year="2022 — Present"
                    title="Freelance Web Creator"
                    company="Self-employed"
                    descriptionPoints={[
                      "Creating custom websites from concept to deployment.",
                      "Implementing responsive designs using HTML, CSS, and WordPress.",
                      "Direct communication with clients to ensure vision alignment."
                    ]}
                  />

                  <TimelineItem 
                    year="2018 — 2022"
                    title="Software Support Consultant"
                    company="Micro Vision Ltd."
                    descriptionPoints={[
                      "Provided remote assistance for retail software and hardware issues.",
                      "Created marketing materials (business cards, brochures) and ads for Facebook/Google.",
                      "Designed visual components for the company website.",
                      "Managed invoice postings and order fulfillment."
                    ]}
                  />
                </div>
              </div>

              <div className="space-y-16">
                
                <div>
                  <h2 className="font-sans text-3xl font-bold mb-12 flex items-center gap-4 text-txt-dark">
                    <span className="w-8 h-1 bg-primary/80 rounded-full"></span>
                    Education
                  </h2>
                  
                  <div className="space-y-8">
                    
                    <div className="flex gap-6">

                       <div className="flex flex-col items-center relative">

                          <div className="w-4 h-4 rounded-full bg-secondary border-4 border-paper z-10 flex-shrink-0 mt-1.5"></div>
                
                          <div className="w-[1px] bg-secondary/30 absolute top-2 bottom-[-32px]"></div>
                       </div>
                    
                       <div>
                          <span className="text-xs text-secondary font-bold tracking-widest uppercase block mb-1">2022 — 2026</span>
                          <h3 className="text-xl font-bold text-txt-dark">Bachelor's in Computer Science</h3>
                          <p className="text-gray-600">University of Library Studies and Information Technologies</p>
                       </div>
                    </div>

                    <div className="flex gap-6">

                       <div className="flex flex-col items-center relative">
 
                          <div className="w-4 h-4 rounded-full bg-secondary border-4 border-paper z-10 flex-shrink-0 mt-1.5"></div>
                       </div>
                       
                       <div>
                          <span className="text-xs text-secondary font-bold tracking-widest uppercase block mb-1">Certificate</span>
                          <h3 className="text-xl font-bold text-txt-dark">Business English B1.2</h3>
                          <p className="text-gray-600">AVO Language and Examination Center</p>
                       </div>
                    </div>

                  </div>
                </div>

                <div>
                  <h2 className="font-sans text-2xl font-bold mb-8 text-txt-dark">Personal Skills</h2>
                  <div className="flex flex-wrap gap-3">
                    {["Responsibility", "Attention to Detail", "Teamwork", "Adaptability", "Fast Learner"].map(skill => (
                      <span key={skill} className="px-4 py-2 border border-secondary/30 rounded-lg text-sm text-[#5a3a2a] hover:border-secondary hover:text-secondary transition cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          
          <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="font-sans text-3xl font-bold mb-12 flex items-center gap-4 text-txt-light">
               <span className="w-8 h-1 bg-secondary rounded-full"></span>
               Skills
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <SkillCard 
                icon={<BrainCircuit size={32} className="text-primary" />}
                title="AI Native Workflow"
                desc="Leveraging Gemini, ChatGPT, and Custom Gems daily to accelerate coding and solve backend challenges."
              />
              <SkillCard 
                icon={<Code2 size={32} className="text-orange-300" />}
                title="Rapid Prototyping"
                desc="From Figma and Canva directly to code. I build fast, test often, and iterate on the fly."
              />
              <SkillCard 
                icon={<Sparkles size={32} className="text-secondary" />}
                title="Design & Aesthetic"
                desc="Proficient in Adobe Suite & CapCut. Creating visual stories with a focus on typography and motion."
              />
            </div>

            <div className="border-t border-white/5 pt-10">
              
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {techStack.map((tech) => (
                  <motion.div 
                    key={tech.name}
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    className="transition-all duration-300 cursor-help relative group"
                    title={tech.name}
                  >
                    {tech.icon ? (
                      <div className="text-primary transition-colors">
                        {tech.icon}
                      </div>
                    ) : (
                      <img 
                        src={tech.url} 
                        alt={tech.name} 
                        className="h-8 md:h-10 w-auto object-contain opacity-100 transition-all duration-300"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <section id="work" className="py-24 bg-[#f7f4f2]">
          <div className="container mx-auto px-8 md:px-16 lg:px-24"> 
            
            <h2 className="font-sans text-3xl font-bold mb-16 flex items-center gap-4 text-txt-dark">
              <span className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
              Selected Work
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>

          </div>
        </section>

        <section id="contact" className="py-24 bg-dark border-t border-white/5">
          <div className="container mx-auto px-8 md:px-16 lg:px-24">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12"
            >
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-4 text-primary font-bold tracking-widest uppercase text-sm font-sans">
                  <Sparkles size={16} />
                  <span>Let's talk</span>
                </div>
                
                <h2 className="font-sans text-4xl md:text-6xl font-extrabold mb-6 text-txt-main leading-tight">
                  Ready to turn ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">reality?</span>
                </h2>
                
                <p className="text-txt-muted text-lg leading-relaxed">
                  I'm currently open for new opportunities and collaborations. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-6 sm:gap-10 text-txt-muted">
                   <div className="flex items-center gap-2">
                      <MapPin size={20} className="text-secondary" />
                      <span>Sofia, Bulgaria</span>
                   </div>
                   
                   <a href="tel:+359896678206" className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Phone size={20} className="text-secondary" />
                      <span>+359 896 678 206</span>
                   </a>
                </div>
              </div>

              <div className="flex flex-col gap-6 w-full md:w-auto">
                <a 
                  href="mailto:ioannaiordanova99@gmail.com" 
                  className="group flex items-center justify-between gap-6 px-6 py-6 bg-[#1F1614] border border-[#2c1a16] rounded-2xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 min-w-0"> 
                    <div className="p-3 bg-[#2c1a16] rounded-full text-primary flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div className="min-w-0"> 
                      <span className="block text-xs font-bold text-secondary uppercase tracking-widest">Email Me</span>
                      <span className="text-sm sm:text-lg md:text-xl font-bold text-txt-main break-all">
                        ioannaiordanova99@gmail.com
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="text-txt-muted group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </a>

                <div className="flex gap-4">
                  <a 
                    href="https://github.com/YoannaYordanovaa" 
                    target="_blank" 
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#1F1614] border border-[#2c1a16] rounded-xl hover:bg-[#2c1a16] hover:text-white transition-all text-txt-muted"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/yoanna-yordanova-42y42y/" 
                    target="_blank" 
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#1F1614] border border-[#2c1a16] rounded-xl hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all text-txt-muted"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </motion.div>

          </div>
        </section>

        <footer className="py-8 text-center text-txt-muted border-t border-white/5 font-sans text-sm bg-dark">
          <p>© 2025 Yoanna. Built with React, Tailwind & AI.</p>
        </footer>
      </div>
    </div>
  );
};

const SkillCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 bg-[#1F1614] rounded-2xl border border-[#2c1a16] hover:border-primary/40 transition-colors shadow-lg"
  >
    <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit">{icon}</div>
    <h3 className="font-sans text-xl font-bold mb-3 text-txt-main">{title}</h3>
    <p className="text-txt-muted leading-relaxed">{desc}</p>
  </motion.div>
);

const TimelineItem = ({ year, title, company, descriptionPoints }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex gap-6 md:gap-8 pb-12 last:pb-0 relative"
  >
    <div className="flex flex-col items-center">
      <div className="w-4 h-4 rounded-full bg-secondary border-4 border-paper z-10 flex-shrink-0 mt-1.5"></div>
      <div className="w-0.5 h-full bg-secondary/20 absolute top-2 left-[7px] -z-0"></div> 
    </div>

    <div className="flex-1">
      <span className="text-sm font-bold text-secondary tracking-widest uppercase mb-1 block font-sans">{year}</span>
      <h3 className="text-xl md:text-2xl font-bold text-txt-dark mb-1 font-sans">{title}</h3>
      <div className="text-[#5a3a2a] font-semibold mb-4">{company}</div>
      
      <ul className="list-disc list-outside ml-4 text-gray-700 space-y-2 leading-relaxed text-sm md:text-base font-medium">
        {descriptionPoints.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ProjectCard = ({ project, index }) => (
  <motion.a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(44,26,22,0.15)] transition-all duration-500 border border-[#2c1a16]/10 block h-full cursor-pointer flex flex-col"
  >
    <div className="h-48 md:h-64 overflow-hidden relative bg-[#f0ebe8]">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
      />
      
      <div className="absolute top-4 left-4">
        <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-white bg-[#120C0A]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
          {project.type}
        </span>
      </div>
      
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 p-2 rounded-full text-[#2c1a16]">
        <ExternalLink size={18} />
      </div>
    </div>

    <div className="p-6 md:p-8 flex flex-col flex-grow border-t border-[#2c1a16]/5">
      <h3 className="font-sans text-2xl font-bold mb-3 group-hover:text-secondary transition-colors text-txt-dark">
        {project.title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">
        {project.desc}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] font-bold text-[#5a3a2a] bg-[#f7f4f2] border border-[#2c1a16]/10 px-2 py-1 rounded-md font-sans tracking-wide uppercase">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.a>
);

export default App;
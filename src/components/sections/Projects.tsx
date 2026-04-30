import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../data';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { GitBranch, Play, ChevronDown, ChevronUp, Globe, Maximize2 } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useInView } from 'react-intersection-observer';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const sectionRef = useRef<HTMLElement>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const activeProject = PROJECTS.find(p => p.id === selectedProject);
  const visibleProjects = PROJECTS.slice(0, visibleCount);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, PROJECTS.length));
  };

  const showLess = () => {
    if (sectionRef.current) {
      const top = sectionRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    
    setTimeout(() => {
      setVisibleCount(3);
    }, 100);
  };

  return (
    <section id="projects" ref={sectionRef} className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white text-glow">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-white rounded-full" />
        </motion.div>

        <motion.div 
          ref={ref} 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
                exit={{ opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.4 } }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Card
                  className="group cursor-pointer transition-all duration-500 ease-out h-full flex flex-col overflow-hidden relative border-white/5 hover:border-primary/30 p-0"
                  onClick={() => setSelectedProject(project.id)}
                >
                  {/* Image Section - Takes full width, no card padding around it */}
                  <div className="relative w-full h-64 overflow-hidden bg-black/20">
                    {/* View Details Overlay (Centered) */}
                    <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-primary/10 backdrop-blur-[2px]">
                      <div className="flex flex-col items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.5)]">
                          <Maximize2 className="w-6 h-6 text-dark" />
                        </div>
                        <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] text-glow">
                          View Details
                        </span>
                      </div>
                    </div>
                    
                    {/* Tag Badge overlay on image */}
                    {project.tag && (
                      <div className="absolute top-4 left-4 z-20 bg-dark/80 backdrop-blur-md border border-white/10 text-white/90 text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                        {project.tag}
                      </div>
                    )}

                    <LazyLoadImage
                      src={project.image}
                      alt={project.title}
                      effect="blur"
                      className="object-cover w-full h-full transform group-hover:scale-105 group-hover:blur-[2px] transition-all duration-1000 ease-out"
                      wrapperClassName="w-full h-full"
                    />
                  </div>

                  {/* Content Area - Minimized padding to maximize use of space */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/50 mb-4 flex-grow text-xs leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map(tech => (
                        <span key={tech} className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-primary/70 border border-primary/10">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-white/30 border border-white/5">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subtle bottom glow line on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination Buttons */}
        <div className="mt-12 flex justify-center items-center gap-4">
          {visibleCount < PROJECTS.length && (
            <Button 
              size="lg" 
              onClick={showMore}
              className="gap-2 group shadow-neon"
            >
              See More <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          )}
          
          {visibleCount > 3 && (
            <Button 
              size="lg" 
              variant="outline"
              onClick={showLess}
              className="gap-2 group"
            >
              Show Less <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </Button>
          )}
        </div>

        <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
          {activeProject && (
            <div className="text-left">
              <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-8 border border-white/10 shadow-2xl bg-black/40">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="object-cover w-full h-full"
                />
                {activeProject.tag && (
                  <div className="absolute top-4 right-4 z-20 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-xl">
                    {activeProject.tag}
                  </div>
                )}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-glow">{activeProject.title}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.technologies.map(tech => (
                  <span key={tech} className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-white/70 leading-relaxed mb-8">{activeProject.description}</p>

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-3">
                  {activeProject.link && (
                    <a href={activeProject.link} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px]">
                      <Button className="w-full gap-2 shadow-neon">
                        <Globe className="w-4 h-4" /> Live Site
                      </Button>
                    </a>
                  )}
                  {activeProject.demo && (
                    <a href={activeProject.demo} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px]">
                      <Button className="w-full gap-2 bg-secondary hover:bg-secondary/80 text-white">
                        <Play className="w-4 h-4" /> Video Demo
                      </Button>
                    </a>
                  )}
                </div>
                
                <a href={activeProject.repo} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full gap-2 border-white/10 hover:border-white/30 text-white/70 hover:text-white">
                    <GitBranch className="w-4 h-4" /> View Source on GitHub
                  </Button>
                </a>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../data';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { ExternalLink, GitBranch } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useInView } from 'react-intersection-observer';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const activeProject = PROJECTS.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-right"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white text-glow">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-white rounded-full ml-auto" />
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Card
                className="group cursor-pointer p-4 hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10 duration-300" />
                  <LazyLoadImage
                    src={project.image}
                    alt={project.title}
                    effect="blur"
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                    wrapperClassName="w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-white/60 mb-4 flex-grow text-sm line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-white/5 text-primary border border-primary/20">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded bg-white/5 text-white/50 border border-white/10">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
          {activeProject && (
            <div className="text-left">
              <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-8 border border-white/10">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4">{activeProject.title}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.technologies.map(tech => (
                  <span key={tech} className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-white/70 leading-relaxed mb-8">{activeProject.description}</p>

              <div className="flex gap-4">
                <a href={activeProject.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full gap-2">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </Button>
                </a>
                <a href={activeProject.repo} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full gap-2">
                    <GitBranch className="w-4 h-4" /> Source
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

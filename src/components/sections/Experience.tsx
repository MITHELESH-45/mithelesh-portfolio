import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EDUCATION, CERTIFICATIONS, ACHIEVEMENTS } from '../../data';
import { useInView } from 'react-intersection-observer';
import { Card } from '../ui/Card';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { ExternalLink } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Experience: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const activeAchievement = ACHIEVEMENTS.find(a => a.id === selectedAchievement);

  return (
    <section id="experience" className="py-24 relative bg-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary text-glow">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto" />
        </motion.div>

        <div ref={ref} className="space-y-24">
          
          {/* Achievements Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center text-primary text-xl">🌟</span>
              Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ACHIEVEMENTS.map((achievement, idx) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <Card
                    className="group cursor-pointer p-4 hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col"
                    onClick={() => setSelectedAchievement(achievement.id)}
                  >
                    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 border border-white/5">
                      <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10 duration-300" />
                      <LazyLoadImage
                        src={achievement.image}
                        alt={achievement.title}
                        effect="blur"
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                        wrapperClassName="w-full h-full"
                      />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{achievement.title}</h3>
                      <span className="text-primary/70 font-mono text-xs bg-primary/10 px-2 py-1 rounded">{achievement.date}</span>
                    </div>
                    <p className="text-white/60 text-sm line-clamp-3">{achievement.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center text-primary text-xl">🎓</span>
              Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <Card className="p-4 hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col group">
                    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 border border-white/5">
                      <LazyLoadImage
                        src={edu.image}
                        alt={edu.title}
                        effect="blur"
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                        wrapperClassName="w-full h-full"
                      />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{edu.title}</h4>
                      <span className="text-primary/70 font-mono text-xs bg-primary/10 px-2 py-1 rounded whitespace-nowrap ml-2">{edu.year}</span>
                    </div>
                    <p className="text-white/60 text-sm">{edu.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded bg-secondary/20 flex items-center justify-center text-secondary text-xl">🏆</span>
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <Card className="p-4 hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col group">
                    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 border border-white/5">
                      <LazyLoadImage
                        src={cert.image}
                        alt={cert.title}
                        effect="blur"
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                        wrapperClassName="w-full h-full"
                      />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-white group-hover:text-secondary transition-colors">{cert.title}</h4>
                      <span className="text-secondary/70 font-mono text-xs bg-secondary/10 px-2 py-1 rounded whitespace-nowrap ml-2">{cert.date}</span>
                    </div>
                    <p className="text-white/60 text-sm">{cert.issuer}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Achievement Modal */}
        <Modal isOpen={!!selectedAchievement} onClose={() => setSelectedAchievement(null)}>
          {activeAchievement && (
            <div className="text-left">
              <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-8 border border-white/10">
                <img
                  src={activeAchievement.image}
                  alt={activeAchievement.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-bold">{activeAchievement.title}</h3>
                <span className="text-primary font-mono text-sm bg-primary/10 px-3 py-1 rounded-full">{activeAchievement.date}</span>
              </div>
              <p className="text-white/70 leading-relaxed mb-8">{activeAchievement.description}</p>

              <div className="flex gap-4">
                {activeAchievement.link && (
                  <a href={activeAchievement.link} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full gap-2">
                      <ExternalLink className="w-4 h-4" /> View Post
                    </Button>
                  </a>
                )}
              </div>
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
};

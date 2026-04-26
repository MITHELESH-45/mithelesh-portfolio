import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../../data';
import { useInView } from 'react-intersection-observer';

export const TechStack: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative bg-dark/50 border-y border-white/5 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary text-glow">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto" />
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {TECH_STACK.map((tech, idx) => (
            <div key={idx} className="relative">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-lg tracking-wide">{tech.name}</span>
                <span className="text-primary font-mono">{tech.level}%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                  transition={{ duration: 1.5, delay: idx * 0.1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-secondary to-primary"
                  style={{
                    boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

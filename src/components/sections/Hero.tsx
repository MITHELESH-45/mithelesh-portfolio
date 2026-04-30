import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { HERO_DATA } from '../../data';
import { Link } from 'react-scroll';

export const Hero: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 w-full">
        
        {/* Photo column - Order 1 on mobile, Order 2 on desktop */}
        <div className="relative flex justify-center items-center mt-8 lg:mt-0 order-1 lg:order-2">
          {/* Ambient glow behind photo */}
          <div className="absolute w-72 h-72 rounded-full bg-primary/15 blur-[80px] animate-pulse" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Hover ring animations */}
            <AnimatePresence>
              {hovered && (
                <>
                  <motion.div
                    key="ring1"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1.12 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="absolute inset-0 rounded-full border border-primary/50"
                    style={{ boxShadow: '0 0 20px rgba(0,240,255,0.3)' }}
                  />
                  <motion.div
                    key="ring2"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 0.5, scale: 1.25 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
                    className="absolute inset-0 rounded-full border border-primary/25"
                  />
                  <motion.div
                    key="ring3"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 0.25, scale: 1.4 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
                    className="absolute inset-0 rounded-full border border-primary/15"
                  />
                </>
              )}
            </AnimatePresence>

            {/* Circular photo blended into background */}
            <div
              className="w-56 h-56 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/30 transition-all duration-500"
              style={{
                boxShadow: hovered
                  ? '0 0 80px rgba(0,240,255,0.5), 0 0 30px rgba(0,240,255,0.3)'
                  : '0 0 30px rgba(0,240,255,0.2)',
              }}
            >
              <img
                src="/mithulportfolio%20image.png"
                alt="MITHELESH K"
                className="w-full h-full object-cover object-top transition-transform duration-700 photo-blend"
                style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Text column - Order 2 on mobile, Order 1 on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-2 lg:order-1"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white text-glow">
              {HERO_DATA.name}
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-white/80 font-mono mb-6">
            {HERO_DATA.role}
          </h2>

          <p className="text-white/60 max-w-lg mb-10 text-lg leading-relaxed">
            {HERO_DATA.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="projects" smooth={true} offset={-100}>
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                <ArrowRight className="w-5 h-5" /> View Projects
              </Button>
            </Link>
            <a href="/MITHELESH%20K%20RESUME.pdf" download="MITHELESH_K_RESUME.pdf" className="w-full sm:w-auto mt-4 sm:mt-0">
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                <Download className="w-5 h-5" /> Resume
              </Button>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

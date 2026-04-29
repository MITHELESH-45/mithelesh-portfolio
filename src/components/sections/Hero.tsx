import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { HERO_DATA } from '../../data';
import { Link } from 'react-scroll';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full glass mb-6 border-primary/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          >
            <span className="text-primary text-sm font-mono tracking-wider font-semibold">AVAILABLE FOR HIRE</span>
          </motion.div>
          
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
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 50 }}
          className="relative hidden lg:flex justify-center items-center h-full"
        >
          <div className="relative w-[400px] h-[400px]">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-[100px] animate-pulse" />
            <div className="absolute inset-8 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-16 rounded-full border border-secondary/20 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-24 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]" />
            
            {/* Center glowing orb */}
            <div className="absolute inset-0 m-auto w-32 h-32 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl animate-pulse" />
            <div className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full blur-md shadow-[0_0_50px_#00f0ff]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Float } from '@react-three/drei';
import { TECH_STACK_CATEGORIES } from '../../data';

const Cloud = () => {
  const techs = useMemo(() => TECH_STACK_CATEGORIES.flatMap(cat => cat.techs), []);
  const radius = 6;

  // Distribute items evenly on a sphere using Fibonacci sphere algorithm
  const positions = useMemo(() => {
    const N = techs.length;
    return techs.map((_, i) => {
      const phi = Math.acos(1 - 2 * (i + 0.5) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      return [
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      ] as [number, number, number];
    });
  }, [techs]);

  return (
    <group>
      {techs.map((tech, i) => (
        <Float key={tech.name} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <group position={positions[i]}>
            <Html transform sprite center>
              <div 
                className="group relative flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-125 hover:z-50"
              >
                <div className="w-16 h-16 bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.8)] backdrop-blur-sm rounded-2xl flex items-center justify-center p-3 transition-shadow duration-300">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                    loading="lazy"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      t.style.display = 'none';
                      const span = document.createElement('span');
                      span.textContent = tech.name.slice(0, 2).toUpperCase();
                      span.className = 'text-dark font-bold text-sm';
                      t.parentElement?.appendChild(span);
                    }}
                  />
                </div>
                
                {/* Tooltip */}
                <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-dark border border-white/20 shadow-xl text-white text-sm font-bold px-3 py-1.5 rounded whitespace-nowrap pointer-events-none">
                  {tech.name}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-dark border-t border-l border-white/20 rotate-45" />
                </div>
              </div>
            </Html>
          </group>
        </Float>
      ))}
    </group>
  );
};

export const TechStack: React.FC = () => {
  return (
    <section className="py-16 relative z-10">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Globe</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto lg:mx-0 mt-6 mb-8 shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              A 3D interactive overview of the ecosystem I use to architect robust, scalable solutions.
            </p>
            <p className="inline-flex items-center gap-2 text-sm text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Drag the globe to explore
            </p>
          </motion.div>
        </div>

        {/* Right Side: 3D Canvas */}
        <div className="lg:w-2/3 h-[500px] md:h-[700px] lg:h-[850px] w-full relative cursor-grab active:cursor-grabbing lg:-mt-20">
          <Canvas camera={{ position: [0, 2, 20], fov: 60 }}>
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate 
              autoRotateSpeed={1.5}
            />
            
            <Cloud />
          </Canvas>
        </div>

      </div>
    </section>
  );
};

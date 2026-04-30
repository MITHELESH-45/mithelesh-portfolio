import React, { Suspense } from 'react';
import { Navbar } from './components/layout/Navbar';
import { BackgroundParticles } from './components/3d/BackgroundParticles';
import { AudioPlayer } from './components/layout/AudioPlayer';
import { Spinner } from './components/ui/Spinner';

// Lazy loading heavy sections to optimize initial bundle size & performance
const Hero = React.lazy(() => import('./components/sections/Hero').then(module => ({ default: module.Hero })));
const Services = React.lazy(() => import('./components/sections/Services').then(m => ({ default: m.Services })));
const TechStack = React.lazy(() => import('./components/sections/TechStack').then(m => ({ default: m.TechStack })));
const Projects = React.lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })));
const Experience = React.lazy(() => import('./components/sections/Experience').then(m => ({ default: m.Experience })));
const Contact = React.lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })));

function App() {
  return (
    <div className="relative w-full h-full text-white">
      <Navbar />
      <BackgroundParticles />

      <main className="w-full flex-grow">
        <Suspense fallback={<Spinner />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<Spinner />}>
          <Services />
        </Suspense>

        <Suspense fallback={<Spinner />}>
          <TechStack />
        </Suspense>

        <Suspense fallback={<Spinner />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<Spinner />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<Spinner />}>
          <Contact />
        </Suspense>
      </main>

      <AudioPlayer />

      <footer className="py-8 text-center text-white/50 border-t border-white/5 mt-auto bg-dark z-10 relative">
        <p className="font-mono text-sm tracking-widest">© {new Date().getFullYear()} MITHELESH K. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Card } from '../ui/Card';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Brain, Database, Bot, Calendar, Mail, Shield } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const FEATURES = [
  {
    title: "Understands My Portfolio",
    description: "Answers questions about my experience, projects, and skills.",
    icon: Brain,
  },
  {
    title: "Advanced RAG",
    description: "Grounded responses using Retrieval-Augmented Generation.",
    icon: Database,
  },
  {
    title: "Agentic AI",
    description: "Intelligently routes requests and performs actions.",
    icon: Bot,
  },
  {
    title: "Meeting Scheduler",
    description: "Check availability and schedule meetings with me directly.",
    icon: Calendar,
  },
  {
    title: "Email Integration",
    description: "Can send emails through secure automation.",
    icon: Mail,
  },
  {
    title: "Secure & Role-Based",
    description: "Protected using authentication and RBAC.",
    icon: Shield,
  },
];

const SUGGESTED_QUESTIONS = [
  "Tell me about Mithelesh",
  "Explain your AI projects",
  "What technologies do you know?",
  "Schedule a meeting",
  "Show your achievements",
  "What are your research interests?",
];

const TECH_STACK = [
  "OpenAI", "Gemini", "LangChain", "Pinecone", "MCP", "RAG", "Agentic AI", "PostgreSQL", "Node.js", "React"
];

export const Jarvis: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="jarvis" className="py-20 relative overflow-hidden z-10">
      {/* Background glow for Jarvis section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-secondary/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-16"
        >
          {/* Top Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="lg:w-1/2 flex flex-col gap-6">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-3 bg-dark/50 border border-green-500/30 text-green-400 px-4 py-2 rounded-full w-max backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-semibold tracking-wide uppercase">Live AI Assistant</span>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3">
                  🤖 Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary text-glow animate-gradient-x">Jarvis</span>
                </h2>
                <h3 className="text-xl md:text-2xl text-white/80 font-medium mb-6">
                  My AI-Powered Personal Executive Agent
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mb-6" />
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  Instead of browsing through my portfolio, ask Jarvis anything about me. It understands my projects, experience, technical skills, achievements, research interests, and can even perform real-world tasks such as scheduling meetings.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://jarvis-beta-umber.vercel.app"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-secondary to-primary text-dark font-bold rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-white/20 group-hover:translate-x-full -translate-x-full transition-transform duration-500 ease-out skew-x-12" />
                  <span className="relative text-lg">Talk to Jarvis</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
                </a>
                
                <a
                  href="https://github.com/MITHELESH-45/Jarvis-AI-Powered-Personal-Executive-Agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-dark/40 border border-white/10 hover:bg-white/5 hover:border-white/20 text-white font-semibold rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
                >
                  <GithubIcon className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>GitHub Repository</span>
                </a>
              </motion.div>
            </div>

            {/* Right Hero Illustration */}
            <div className="lg:w-1/2 relative flex items-center justify-center h-[400px]">
              {/* Glowing Orb Animation */}
              <div className="relative w-64 h-64 flex items-center justify-center">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 90, 180, 270, 360] 
                  }}
                  transition={{ 
                    duration: 10, 
                    ease: "linear", 
                    repeat: Infinity 
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-transparent opacity-60 blur-xl"
                />
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 4, 
                    ease: "easeInOut", 
                    repeat: Infinity 
                  }}
                  className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-secondary opacity-80 blur-md"
                />
                
                {/* Center Core */}
                <div className="absolute inset-8 rounded-full bg-dark flex items-center justify-center border border-white/20 shadow-[inset_0_0_30px_rgba(0,240,255,0.5)] z-10">
                  <Bot className="w-16 h-16 text-white animate-pulse" />
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute inset-0 pointer-events-none">
                {TECH_STACK.slice(0, 5).map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ y: 0 }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                    className="absolute glass px-3 py-1.5 rounded-lg text-sm font-medium border border-white/10 text-white/90 shadow-lg backdrop-blur-md"
                    style={{
                      top: `${15 + Math.random() * 70}%`,
                      left: `${10 + Math.random() * 80}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Callout Card */}
          <motion.div variants={itemVariants}>
            <div className="glass bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 flex items-start gap-4 shadow-[0_0_30px_rgba(0,240,255,0.05)]">
              <div className="text-3xl">🚀</div>
              <div>
                <p className="text-white/90 text-lg leading-relaxed font-medium">
                  Built using a production-grade Agentic AI architecture with independent Router, Retrieval, and Action pipelines.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Suggested Questions */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h4 className="text-white/60 font-semibold uppercase tracking-wider text-sm pl-2">Try asking Jarvis:</h4>
            <div className="flex flex-wrap gap-3">
              {SUGGESTED_QUESTIONS.map((q) => (
                <a
                  key={q}
                  href={`https://jarvis-beta-umber.vercel.app?q=${encodeURIComponent(q)}`}
                  className="px-5 py-2.5 glass bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-full text-white/80 hover:text-white transition-all duration-300 text-sm whitespace-nowrap cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                >
                  {q}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Feature Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} variants={itemVariants} className="group cursor-default relative overflow-hidden bg-dark/40 border-white/5 hover:border-primary/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex flex-col items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300">
                      <Icon className="w-6 h-6 text-white/80 group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

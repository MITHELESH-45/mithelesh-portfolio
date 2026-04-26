import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, XCircle, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    
    // Simulate EmailJS execution for the mockup
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      reset();
      
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white text-glow">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-white rounded-full mx-auto mb-8" />
          <p className="text-white/60 max-w-lg mx-auto">
            Currently available for freelance opportunities. Let's build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
              <Card className="p-6 flex items-center gap-4 hover:border-primary/50 transition-colors group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">Email</h4>
                  <p className="text-white/60 text-sm">your.email@example.com</p>
                </div>
              </Card>
            </a>

            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Card className="p-6 flex items-center gap-4 hover:border-white/50 transition-colors group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-white transition-colors">GitHub</h4>
                  <p className="text-white/60 text-sm">github.com/yourusername</p>
                </div>
              </Card>
            </a>

            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <Card className="p-6 flex items-center gap-4 hover:border-[#0A66C2]/50 transition-colors group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#0A66C2] transition-colors">LinkedIn</h4>
                  <p className="text-white/60 text-sm">linkedin.com/in/yourprofile</p>
                </div>
              </Card>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 uppercase tracking-wider">Name</label>
                    <input
                      {...register("name", { required: true })}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors hover:border-white/20"
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-red-400 text-xs shadow-none">This field is required</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 uppercase tracking-wider">Email</label>
                    <input
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors hover:border-white/20"
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-red-400 text-xs">Valid email is required</span>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 uppercase tracking-wider">Message</label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={5}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none hover:border-white/20"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <span className="text-red-400 text-xs">This field is required</span>}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gap-2 relative overflow-hidden group"
                  disabled={status === 'loading'}
                >
                  {status === 'idle' && <><Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Message</>}
                  {status === 'loading' && <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />}
                  {status === 'success' && <><CheckCircle className="w-5 h-5" /> Message Sent</>}
                  {status === 'error' && <><XCircle className="w-5 h-5 text-red-500" /> Error Sending</>}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

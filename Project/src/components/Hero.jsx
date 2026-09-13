import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-slate-300">Welcome to the future of technology</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="text-white">IT IN </span>
            <span className="text-gradient">2030 & BEYOND</span>
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto">
            Technology will not simply change our jobs. <br className="hidden md:block" />
            <span className="text-cyan-400">It will change what a job means.</span>
          </p>
          
          <p className="mt-6 text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Explore how Artificial Intelligence, automation, robotics, cloud computing, cybersecurity, quantum computing and emerging technologies could transform the IT industry, careers and education.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#it2030" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
              Explore the Future
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#skills" className="inline-flex items-center justify-center px-8 py-3 rounded-full glass-card text-white hover:text-cyan-400 transition-all font-semibold border border-white/20">
              Discover Future Skills
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

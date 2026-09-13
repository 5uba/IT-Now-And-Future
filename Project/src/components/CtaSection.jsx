import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-blue-950/20 z-0"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            The Future Doesn't Need People Who <span className="text-gradient">Know Everything.</span>
          </h2>
          
          <p className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-8">
            It needs people who are willing to keep learning.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-slate-300 text-lg font-medium mb-12">
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Learn.</span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Adapt.</span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Build.</span>
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-full border border-cyan-500/30 text-cyan-400">Collaborate with AI.</span>
          </div>

          <a href="#explore" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-lg transition-all shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.7)] hover:-translate-y-1">
            Start My Future Roadmap
            <ArrowRight className="ml-2 w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

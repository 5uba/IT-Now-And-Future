import { motion } from 'framer-motion';
import { ArrowRight, Settings } from 'lucide-react';

const transformations = [
  { old: 'Manual Tester', mid: 'AI Testing Tools', new: 'AI Quality Engineer' },
  { old: 'Basic IT Support', mid: 'AI Helpdesk', new: 'IT Automation / AI Support Specialist' },
  { old: 'Traditional Developer', mid: 'AI Coding Assistants', new: 'AI-Augmented Software Engineer' },
  { old: 'Manual Data Processing', mid: 'Automation', new: 'Data/AI Operations' },
  { old: 'Traditional System Administrator', mid: 'Intelligent Infrastructure', new: 'Cloud / DevOps / SRE' }
];

export default function JobTransformation() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            What If Some IT Jobs <span className="text-gradient">Disappear?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Automation may reduce demand for some repetitive tasks and traditional roles. However, it also creates new, higher-level opportunities.
          </p>
        </div>

        <div className="space-y-8">
          {transformations.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col md:flex-row items-center justify-between gap-4"
            >
              <div className="flex-1 w-full text-center md:text-left bg-white/5 p-4 rounded-lg border border-white/5">
                <p className="text-sm text-slate-500 uppercase tracking-wider mb-1 font-semibold">Old Role</p>
                <p className="text-lg font-medium text-slate-300">{t.old}</p>
              </div>
              
              <div className="flex flex-col items-center justify-center px-4">
                <Settings className="w-5 h-5 text-purple-400 mb-2 animate-[spin_4s_linear_infinite]" />
                <p className="text-xs text-purple-400 uppercase tracking-widest text-center whitespace-nowrap mb-2">{t.mid}</p>
                <div className="flex gap-1">
                  <ArrowRight className="w-5 h-5 text-slate-500 rotate-90 md:rotate-0" />
                </div>
              </div>

              <div className="flex-1 w-full text-center md:text-right bg-gradient-to-r from-purple-900/20 to-cyan-900/20 p-4 rounded-lg border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                <p className="text-sm text-cyan-400 uppercase tracking-wider mb-1 font-semibold">New Role</p>
                <p className="text-lg font-bold text-white">{t.new}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/20 text-center backdrop-blur-sm"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            The future may not be about humans competing against AI.
          </h3>
          <p className="text-xl text-cyan-300 font-medium">
            It may be about humans learning to work with AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

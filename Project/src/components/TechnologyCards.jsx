import { motion } from 'framer-motion';
import { technologies } from '../data/technologies';

export default function TechnologyCards() {
  return (
    <section id="it2030" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            IT in 2030: <span className="text-gradient">A Different Digital World</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            IT may become more AI-driven, automated, intelligent and integrated into every industry. Here are the core technologies driving the change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 flex flex-col h-full relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 border border-white/5">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-slate-400 mb-4 flex-grow">{tech.explanation}</p>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <p className="text-xs font-medium text-purple-400 uppercase tracking-wider mb-1">How it may change IT</p>
                    <p className="text-sm text-slate-300">{tech.impact}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

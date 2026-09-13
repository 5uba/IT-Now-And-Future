import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const comparisons = [
  { today: 'Manual coding', future: 'AI-assisted development' },
  { today: 'Traditional software development', future: 'AI agents' },
  { today: 'Human-driven testing', future: 'Autonomous testing' },
  { today: 'Manual IT support', future: 'AI-powered IT support' },
  { today: 'Traditional cloud management', future: 'Intelligent cloud systems' },
  { today: 'Fixed job roles', future: 'Flexible hybrid roles' },
  { today: 'Basic automation', future: 'High-level automation' }
];

export default function TodayVs2030() {
  return (
    <section className="py-24 bg-slate-900/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            IT <span className="text-gradient">Today vs IT 2030</span>
          </h2>
        </div>

        <div className="glass-card p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-10 font-bold text-lg md:text-xl text-center border-b border-white/10 pb-6">
            <div className="text-slate-300">IT TODAY</div>
            <div className="hidden md:block"></div>
            <div className="text-cyan-400">IT 2030</div>
          </div>

          <div className="space-y-6">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center group"
              >
                <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-center md:text-right text-slate-400 group-hover:text-slate-300 transition-colors">
                  {item.today}
                </div>
                <div className="flex justify-center text-slate-600 group-hover:text-cyan-400 transition-colors">
                  <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
                </div>
                <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 p-4 rounded-lg border border-cyan-500/30 text-center md:text-left text-cyan-300 font-medium group-hover:border-cyan-400/60 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                  {item.future}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-blue-950/40 border border-blue-500/20 rounded-xl text-center">
            <p className="text-lg text-slate-300">
              <span className="font-bold text-white">Note:</span> AI may automate many tasks, but <span className="text-cyan-400 font-semibold">human judgment, creativity, communication, leadership, ethics and problem-solving</span> can remain important.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

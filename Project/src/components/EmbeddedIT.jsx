import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const industries = [
  { name: 'Healthcare', tech: 'AI' },
  { name: 'Finance', tech: 'AI' },
  { name: 'Agriculture', tech: 'IoT' },
  { name: 'Manufacturing', tech: 'Robotics' },
  { name: 'Education', tech: 'AI' },
  { name: 'Transportation', tech: 'Autonomous Systems' },
  { name: 'Retail', tech: 'Intelligent Automation' },
  { name: 'Cybersecurity', tech: 'AI' }
];

export default function EmbeddedIT() {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What If IT Doesn't Look Like <span className="text-gradient">IT Anymore?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
            IT may become embedded into almost every industry.
          </p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-6 rounded-2xl bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
          >
            <p className="text-2xl font-bold text-white">
              "IT may not disappear. It may become <span className="text-cyan-400">invisible</span> because technology becomes part of everything."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col items-center justify-center text-center group"
            >
              <span className="text-lg font-semibold text-slate-300 group-hover:text-white transition-colors">{item.name}</span>
              <Plus className="w-5 h-5 text-slate-500 my-2 group-hover:text-cyan-400 transition-colors" />
              <span className="text-cyan-400 font-bold group-hover:text-cyan-300 transition-colors">{item.tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

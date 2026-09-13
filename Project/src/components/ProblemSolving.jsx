import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const steps = [
  'Coding',
  'Problem Solving',
  'System Thinking',
  'AI Collaboration',
  'Innovation'
];

export default function ProblemSolving() {
  return (
    <section className="py-24 relative bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Coding is a Skill. <br />
            <span className="text-gradient">Problem Solving is the Superpower.</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            AI may generate more code in the future. Therefore, understanding requirements, architecture, debugging, security, business problems and user needs can become even more valuable.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className={`px-8 py-4 rounded-xl font-bold text-lg md:text-xl transition-all ${
                index === steps.length - 1 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-[0_0_30px_rgba(34,211,238,0.4)] scale-110' 
                  : 'bg-white/5 border border-white/10 text-slate-300'
              }`}>
                {step}
              </div>
              
              {index < steps.length - 1 && (
                <div className="h-10 flex items-center justify-center my-2">
                  <ArrowDown className="w-6 h-6 text-cyan-500/50 animate-bounce" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

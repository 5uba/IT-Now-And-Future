import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { ArrowRight } from 'lucide-react';

const flow = [
  'LEARN', 'BUILD', 'USE AI', 'SOLVE PROBLEMS', 'CREATE PROJECTS', 'BUILD PORTFOLIO', 'GET EXPERIENCE'
];

export default function StudentRoadmap() {
  return (
    <section id="students" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Starting IT in the <span className="text-gradient">Future?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Students should not only memorize programming languages. Here is what to focus on instead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 border-t-4 border-t-blue-500"
          >
            <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
            <ul className="space-y-2">
              {skillCategories.technical.map((skill, i) => (
                <li key={i} className="flex items-center text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 border-t-4 border-t-purple-500"
          >
            <h3 className="text-xl font-bold text-white mb-4">AI Skills</h3>
            <ul className="space-y-2">
              {skillCategories.ai.map((skill, i) => (
                <li key={i} className="flex items-center text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 border-t-4 border-t-cyan-500"
          >
            <h3 className="text-xl font-bold text-white mb-4">Human Skills</h3>
            <ul className="space-y-2">
              {skillCategories.human.map((skill, i) => (
                <li key={i} className="flex items-center text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 overflow-x-auto">
          <div className="flex items-center gap-4 min-w-max pb-2">
            {flow.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 text-cyan-300 font-bold text-sm tracking-wider shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                  {item}
                </div>
                {index < flow.length - 1 && (
                  <ArrowRight className="w-5 h-5 mx-4 text-slate-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const paths = {
  Student: ['Programming', 'Web Development', 'AI Tools', 'Cloud', 'Projects', 'Internship', 'Job'],
  Fresher: ['Fundamentals', 'AI Assisted Coding', 'Cloud Basics', 'Portfolio', 'Networking', 'Entry-Level Role'],
  'IT Employee': ['Current Skill', 'AI Integration', 'Automation', 'Cloud', 'Advanced Role', 'Leadership'],
  'Non-IT Professional': ['Digital Literacy', 'No-Code Tools', 'AI Prompting', 'Industry specific AI', 'Hybrid Role'],
  'Career Changer': ['Fundamentals', 'Practical Skills', 'Projects', 'AI Tools', 'Portfolio', 'Entry-Level Role']
};

export default function CareerBuilder() {
  const [selectedRole, setSelectedRole] = useState('Student');

  return (
    <section id="explore" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Build Your <span className="text-gradient">2030 Career Path</span>
          </h2>
          <p className="text-lg text-slate-400">
            Select your current status to see a suggested learning path.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(paths).map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedRole === role 
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.5)]' 
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/10 min-h-[150px] flex items-center overflow-x-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRole}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4 min-w-max w-full"
              >
                {paths[selectedRole].map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30 text-white font-medium whitespace-nowrap shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                      {step}
                    </div>
                    {index < paths[selectedRole].length - 1 && (
                      <ArrowRight className="w-6 h-6 mx-4 text-cyan-500/50" />
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

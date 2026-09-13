import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scenarios } from '../data/scenarios';
import { Eye, ShieldAlert, Users } from 'lucide-react';

const icons = {
  assisted: Eye,
  automated: ShieldAlert,
  collaborative: Users
};

export default function FutureScenarios() {
  const [activeScenario, setActiveScenario] = useState(scenarios[0].id);

  const currentScenario = scenarios.find(s => s.id === activeScenario);

  return (
    <section id="scenarios" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Possible <span className="text-gradient">Future Scenarios</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            These are potential directions based on current trends, not guaranteed facts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {scenarios.map((scenario) => {
              const Icon = icons[scenario.id];
              const isActive = activeScenario === scenario.id;
              
              return (
                <button
                  key={scenario.id}
                  onClick={() => setActiveScenario(scenario.id)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 border ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.2)]' 
                      : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className={`w-6 h-6 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <h3 className={`font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {scenario.title}
                    </h3>
                  </div>
                  <p className={`text-sm ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
                    {scenario.description}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScenario}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 h-full"
              >
                <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                  {currentScenario.title}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm text-cyan-400 uppercase font-bold tracking-wider mb-2">What changes?</h4>
                    <p className="text-slate-300 leading-relaxed">{currentScenario.changes}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-purple-400 uppercase font-bold tracking-wider mb-2">What happens to jobs?</h4>
                    <p className="text-slate-300 leading-relaxed">{currentScenario.jobs}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-blue-400 uppercase font-bold tracking-wider mb-2">What skills become important?</h4>
                    <p className="text-slate-300 leading-relaxed">{currentScenario.skills}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-emerald-400 uppercase font-bold tracking-wider mb-2">What should students learn?</h4>
                    <p className="text-slate-300 leading-relaxed">{currentScenario.students}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

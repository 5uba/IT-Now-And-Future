import { motion } from 'framer-motion';
import { skillMeterData } from '../data/skills';

export default function SkillMeter() {
  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Future <span className="text-gradient">Skill Readiness</span>
          </h2>
          <p className="text-lg text-slate-400">
            Illustrative future-readiness indicators.
          </p>
        </div>

        <div className="glass-card p-8">
          <div className="space-y-6">
            {skillMeterData.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-white uppercase tracking-wider">{skill.name}</span>
                  <span className="text-sm text-cyan-400">{skill.value}%</span>
                </div>
                <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-300 relative"
                  >
                    <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}

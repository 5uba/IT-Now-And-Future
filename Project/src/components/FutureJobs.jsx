import { motion } from 'framer-motion';
import { futureJobs } from '../data/jobs';
import { Briefcase, Code, Cpu, Network, Shield, Settings } from 'lucide-react';

const icons = [Cpu, Code, Network, Shield, Briefcase, Settings];

export default function FutureJobs() {
  return (
    <section id="futurejobs" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Future IT <span className="text-gradient">Careers</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Explore the roles that are likely to dominate the IT landscape in the 2030s.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {futureJobs.map((job, index) => {
            const Icon = icons[index % icons.length] || Briefcase;
            return (
              <motion.div
                key={job.role}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 flex flex-col hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/20 text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                </div>
                
                <p className="text-slate-300 mb-6 flex-grow">{job.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs text-slate-500 uppercase font-semibold mb-2">Important Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs text-cyan-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xs text-slate-500 uppercase font-semibold mb-1">Why it's important</h4>
                    <p className="text-sm text-slate-400">{job.whyImportant}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-xs text-purple-400 uppercase font-semibold mb-1">Beginner Learning Path</h4>
                    <p className="text-xs text-slate-300 font-mono bg-black/30 p-2 rounded">{job.path}</p>
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

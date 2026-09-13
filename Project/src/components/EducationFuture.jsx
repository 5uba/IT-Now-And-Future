import { motion } from 'framer-motion';
import { BookOpen, Laptop } from 'lucide-react';

const today = ['Classroom lectures', 'Fixed syllabus', 'Exams', 'Memorization', 'Basic projects'];
const future = ['AI tutors', 'Personalized learning', 'Project-based learning', 'AI-assisted coding', 'Real-world simulations', 'Continuous learning', 'Skill-based evaluation', 'Virtual labs'];

export default function EducationFuture() {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How Will IT <span className="text-gradient">Education Change?</span>
          </h2>
          <p className="text-lg text-slate-400">
            The way we learn is evolving just as fast as what we learn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-t-4 border-slate-600"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <BookOpen className="w-8 h-8 text-slate-400" />
              <h3 className="text-2xl font-bold text-slate-300">TODAY</h3>
            </div>
            <ul className="space-y-4">
              {today.map((item, i) => (
                <li key={i} className="flex items-center text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-slate-600 mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-t-4 border-cyan-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full blur-2xl"></div>
            
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10 relative z-10">
              <Laptop className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">FUTURE</h3>
            </div>
            <ul className="space-y-4 relative z-10">
              {future.map((item, i) => (
                <li key={i} className="flex items-center text-slate-200">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

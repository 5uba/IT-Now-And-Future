import { motion } from 'framer-motion';

const steps = [
  { step: 1, title: 'Understand AI', desc: 'Grasp the fundamentals of how AI and ML models work.' },
  { step: 2, title: 'Learn AI tools used in your job', desc: 'Integrate Copilots, ChatGPT, and domain-specific AI into your daily workflow.' },
  { step: 3, title: 'Automate repetitive tasks', desc: 'Use scripting and AI agents to handle boring work.' },
  { step: 4, title: 'Improve problem-solving skills', desc: 'Focus on complex logic that AI struggles with.' },
  { step: 5, title: 'Learn cloud and modern technologies', desc: 'Understand the infrastructure where AI lives.' },
  { step: 6, title: 'Develop communication and leadership', desc: 'Enhance the human skills that machines cannot replicate.' },
  { step: 7, title: 'Become adaptable', desc: 'Prepare to learn continuously as the tech landscape shifts.' }
];

export default function EmployeeRoadmap() {
  return (
    <section id="employees" className="py-24 bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Already Working in IT? <span className="text-gradient">Prepare for the Shift.</span>
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            "Do not focus only on protecting your current job. Focus on becoming valuable in the next version of your industry."
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 -translate-x-1/2 rounded-full opacity-30"></div>
          
          <div className="space-y-8 md:space-y-0">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center justify-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 md:px-8 mb-4 md:mb-0 flex justify-center md:justify-start">
                  <div className={`glass-card p-6 max-w-sm w-full ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="text-cyan-400 font-bold mb-1">STEP {item.step}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
                
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-500 items-center justify-center text-white font-bold z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                  {item.step}
                </div>
                
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

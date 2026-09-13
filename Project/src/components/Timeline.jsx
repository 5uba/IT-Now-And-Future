import { motion } from 'framer-motion';

const events = [
  { year: '2026', text: 'AI becomes deeply integrated into software workflows' },
  { year: '2027', text: 'AI agents and automation become more common' },
  { year: '2028', text: 'More organizations redesign workflows around AI' },
  { year: '2029', text: 'Human + AI collaboration becomes increasingly normal' },
  { year: '2030', text: 'IT roles become more specialized and technology-driven' },
  { year: '2030+', text: 'Continuous transformation' },
];

export default function Timeline() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Transformation <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-lg text-slate-400">
            Illustrative scenario — not a guaranteed prediction.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-purple-500/50 md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 pl-12 md:pl-0 md:px-8 w-full flex md:justify-center">
                  <div className={`glass-card p-6 w-full ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">{event.year}</h3>
                    <p className="text-slate-300">{event.text}</p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-10 border-4 border-slate-900"></div>
                
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

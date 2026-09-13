import { Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gradient tracking-wider mb-4">IT 2030+</h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          Exploring the future of technology, careers and skills.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a href="#home" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Home</a>
          <a href="#futurejobs" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Future Jobs</a>
          <a href="#skills" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#students" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Students</a>
          <a href="#employees" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Employees</a>
          <a href="#scenarios" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Scenarios</a>
        </div>

        <div className="flex items-center justify-center text-slate-500 text-sm gap-2">
          <span>Built with React.js</span>
          <Code className="w-4 h-4" />
        </div>
      </div>
    </footer>
  );
}

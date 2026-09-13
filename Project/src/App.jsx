import React, { useState, useEffect } from 'react';
import { Network, Database, Shield, Zap, Briefcase, GraduationCap, Brain, Activity, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Overview', id: 'overview' },
    { name: 'Jobs in 2030', id: 'jobs' },
    { name: 'Action Plan', id: 'employees' },
    { name: 'Study Guide', id: 'students' }
  ];

  const FadeIn = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-200">
      
      {/* Sticky Interactive Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-slate-900 py-5 border-b border-slate-800'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div 
            className={`flex items-center gap-2 font-bold text-xl cursor-pointer transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Activity className={`w-6 h-6 ${isScrolled ? 'text-blue-600' : 'text-blue-400'}`} />
            IT Now and Future
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${isScrolled ? 'text-slate-600' : 'text-slate-300'}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-6 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-blue-600 font-medium"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Professional Hero Section */}
      <header className="bg-slate-900 text-white pt-32 pb-20 px-6 border-b-4 border-blue-600">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              IT 2030 & Beyond: <br />
              <span className="text-blue-400">The Future of Technology, Jobs, and Skills</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
              A clear and simple guide to how the IT industry is changing. Learn about the new technologies, how everyday jobs will change, and the exact steps students and employees must take to succeed in the future.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => scrollToSection('overview')}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-blue-900/50"
              >
                Start Reading
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-16 px-6 space-y-24">
        
        {/* Section 1: Definition & Overview */}
        <section id="overview" className="scroll-mt-24">
          <FadeIn>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-slate-200 inline-block">
                The Big Change: What is IT in 2030?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mt-4">
                By the year 2030, the IT industry will change from <strong>doing everything by hand</strong> to <strong>managing smart AI tools</strong>. In the past, IT was about typing exact instructions for dumb computers. In the future, IT will be about guiding and checking the work of highly capable AI systems.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mt-4">
                Technology will not just be a separate department anymore; it will be the hidden engine powering every business—like farming, banking, and hospitals. A "software engineer" will change from "someone who just writes code" to "someone who solves business problems using AI tools."
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
                <Brain className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">AI Assistants & Smart Tools</h3>
                <p className="text-slate-600 leading-relaxed">
                  AI tools will write a lot of the basic code, test software, and fix common computer problems on their own. Instead of typing everything from scratch, developers will act like editors—reading, checking, and approving the AI's work.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
                <Network className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Advanced Cloud Computing</h3>
                <p className="text-slate-600 leading-relaxed">
                  Most companies will store all their data and run their apps on the internet (the cloud). These cloud networks will become so smart that they can fix their own errors and handle billions of connected devices without crashing.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
                <Shield className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Stronger Cybersecurity</h3>
                <p className="text-slate-600 leading-relaxed">
                  Because hackers will use AI to create faster and trickier viruses, companies will need defensive AI to spot and stop attacks instantly. Keeping data safe will become one of the most important jobs in the world.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
                <Database className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Super Fast Data Processing</h3>
                <p className="text-slate-600 leading-relaxed">
                  We will have so much data that regular computers won't be able to handle it. New types of computers (like Quantum computers) and smarter databases will be needed to organize all this information quickly.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 2: Evolution of Roles */}
        <section id="jobs" className="bg-slate-100 -mx-6 px-6 py-16 border-y border-slate-200 scroll-mt-16">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-2 border-b-2 border-slate-300 inline-block">
                How IT Jobs Will Change
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Many people fear that AI will completely replace humans. In reality, AI mostly replaces <i>boring, repetitive tasks</i>, not whole jobs. Traditional IT jobs will not disappear; they will just change. The need for humans who can think creatively, manage AI safely, and talk to clients will actually go up.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="p-4 font-semibold text-lg w-1/3">Job Today</th>
                      <th className="p-4 font-semibold text-lg w-2/3">New Job in 2030</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium text-slate-900">Manual Software Tester</td>
                      <td className="p-4 text-slate-600">
                        <strong>AI Quality Reviewer:</strong> Instead of clicking buttons all day to find bugs, they will manage AI tools that test the software automatically, making sure the AI did a good job.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium text-slate-900">Junior Coder / Programmer</td>
                      <td className="p-4 text-slate-600">
                        <strong>AI-Assisted Developer:</strong> They will use AI to write the basic code for them. Their actual job will be reviewing that code, fixing logic errors, and making sure it fits the client's needs.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium text-slate-900">Basic IT Support (Helpdesk)</td>
                      <td className="p-4 text-slate-600">
                        <strong>Automation Specialist:</strong> Since AI chatbots will answer most basic customer questions, human workers will handle only the hardest, most complex problems that robots can't understand.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium text-slate-900">System Administrator</td>
                      <td className="p-4 text-slate-600">
                        <strong>Cloud Security Manager:</strong> They will spend less time plugging in servers and more time making sure the company's cloud network is safe from hackers and running smoothly.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 3: Strategic Imperatives for Employees */}
        <section id="employees" className="scroll-mt-24">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <Briefcase className="w-10 h-10 text-emerald-600" />
              <h2 className="text-3xl font-bold text-slate-900">Action Plan for Current IT Employees</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              If you already have a job in IT, your goal is to learn how to manage AI before it manages you. Trying to do things the old-fashioned way will leave you behind. Here is exactly what you should do:
            </p>
          </FadeIn>

          <div className="space-y-6">
            {[
              {
                title: "Automate Your Own Work",
                text: "Don't wait for your boss to give you AI tools. Start using tools like ChatGPT or GitHub Copilot today. If your job involves writing boring code, making reports, or answering the same emails, use AI to do it faster."
              },
              {
                title: "Move from 'Memorizing Code' to 'Understanding the Big Picture'",
                text: "Memorizing exactly how to type in Java or Python won't be as important because AI will type it for you. What is important is understanding how the whole system connects—how the database talks to the website and how to keep it all secure."
              },
              {
                title: "Learn About the Business You Work For",
                text: "Technology is just a tool to help a business make money or serve customers. A programmer who truly understands how hospitals, banks, or stores work will be much more valuable than someone who only knows how to write code."
              },
              {
                title: "Grow Your 'Human' Skills",
                text: "AI does not have feelings, it cannot lead a team, and it cannot negotiate with an angry client. Being a good communicator, a friendly teammate, and a smart problem-solver will make you irreplaceable."
              }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex gap-6 p-6 rounded-xl border border-transparent hover:border-emerald-200 hover:bg-emerald-50/50 transition-all cursor-default">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">{index + 1}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Section 4: Blueprint for Students */}
        <section id="students" className="scroll-mt-24">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="w-10 h-10 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900">Study Guide for IT Students</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              For students in college or bootcamps today, just getting a degree is not enough. The future belongs to those who know how to use technology to solve real problems. Here is what you must focus on:
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "1. Learn the Basics Deeply",
                text: "Do not skip the basics just because AI can write code for you. If you do not understand how databases or computer networks work, you will not be able to fix the mistakes that AI makes. You must know what good code looks like."
              },
              {
                title: "2. Treat AI as a Tutor, Not a Cheat Code",
                text: "Use AI to help you learn faster. Ask it to explain hard topics like you are 5 years old, or ask it to find the missing comma in your code. But never copy and paste homework answers that you do not understand."
              },
              {
                title: "3. Focus on Cloud and Security",
                text: "Most modern apps live on the internet, not on a local computer. Taking extra classes or getting certificates in Cloud Computing (like AWS or Google Cloud) and Cybersecurity will make it much easier to get a job."
              },
              {
                title: "4. Build Real Projects",
                text: "Companies in 2030 will not care about your grades as much as your portfolio. They want to see what you can actually build. Make a real website, build a simple AI tool, and put it online to show employers what you can do."
              }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white p-8 border-l-4 border-blue-600 shadow-sm hover:shadow-md hover:translate-x-2 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

      </main>

      {/* Personalized Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white font-bold text-xl cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Activity className="w-6 h-6 text-blue-500" />
            IT Now and Future
          </div>
          <div className="text-sm text-center md:text-right">
            <p className="mb-1">
              Developed by <span className="text-white font-semibold tracking-wide">V Subashini</span>
            </p>
            <p>
              Contact: <a href="mailto:v.subashini.2004@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">v.subashini.2004@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

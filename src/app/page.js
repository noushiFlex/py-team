"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Loading screen */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: loading ? 0 : "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 bg-slate-950 z-50 flex flex-col items-center justify-center"
      >
        <div className="text-center px-6 relative">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8"
          >
            .py
          </motion.h1>
          <div className="w-72 h-2 bg-slate-800 rounded-full mx-auto overflow-hidden">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            />
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-slate-400 text-sm tracking-widest uppercase"
          >
            Launching Developer Experience
          </motion.p>
        </div>
      </motion.div>

      {/* Floating team badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: loading ? 0 : 1, 
            scale: loading ? 0.8 : 1 
          }}
          transition={{ 
            delay: 0.3, 
            duration: 0.8, 
            ease: "easeOut" 
          }}
          className="relative"
        >
          <div className="glassmorphic-card rounded-full p-6 sm:p-8 backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
              .py
            </h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: loading ? 0 : 1 }}
            transition={{ delay: 0.9 }}
            className="text-center text-base sm:text-xl text-white/70 tracking-widest mt-4"
          >
            Paul × Yohann
          </motion.p>
        </motion.div>
      </div>

      {/* Main content */}
      <main className="relative z-10 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Yohann's section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ 
              opacity: loading ? 0 : 1, 
              x: loading ? -50 : 0 
            }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col items-center justify-center p-6 sm:p-10 lg:p-16"
          >
            <div className="profile-card w-full max-w-lg backdrop-blur-md bg-gradient-to-br from-indigo-900/40 to-indigo-700/30 rounded-2xl p-8 border border-indigo-500/30 shadow-lg">
              <div className="profile-header flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <div className="profile-image-container relative">
                  <div className="hexagon-outer animate-spin-slow absolute inset-0 border-2 border-indigo-400/50 rounded-full"></div>
                  <div className="hexagon relative w-28 h-28 sm:w-32 sm:h-32 overflow-hidden rounded-full border-2 border-indigo-500/40">
                    <Image
                      src="/yohannpp.jpg"
                      alt="Yohann"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="profile-info text-center sm:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">Yohann</h2>
                  <p className="text-indigo-200 font-medium text-lg">Étudiant L2 • Développeur Fullstack</p>
                </div>
              </div>
              
              <div className="profile-skills mb-6">
                <p className="text-sm text-indigo-100/80 mb-3">Spécialisé en React, Next.js et Django, SQLite, Tailwind, PostreSQL.</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Django', 'SQLite', 'Tailwind', 'PostgreSQL'].map(skill => (
                    <span key={skill} className="px-3 py-1 text-xs bg-indigo-500/20 text-indigo-200 rounded-full border border-indigo-400/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="profile-links flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://portfolio-yohann.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-ripple flex-1 flex items-center justify-center gap-2 bg-indigo-500/20 backdrop-blur-sm text-center text-white border border-indigo-400/30 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-indigo-500/40 hover:shadow-lg hover:-translate-y-1 hover:scale-105 group"
                >
                  <span>Portfolio</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a 
                  href="https://github.com/noushiFlex" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-ripple flex-1 flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-center text-white border border-white/20 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Paul's section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: loading ? 0 : 1, 
              x: loading ? 50 : 0 
            }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col items-center justify-center p-6 sm:p-10 lg:p-16"
          >
            <div className="profile-card w-full max-w-lg backdrop-blur-md bg-gradient-to-bl from-purple-900/40 to-purple-700/30 rounded-2xl p-8 border border-purple-500/30 shadow-lg">
              <div className="profile-header flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <div className="profile-image-container relative">
                  <div className="hexagon-outer animate-spin-slow-reverse absolute inset-0 border-2 border-purple-400/50 rounded-full"></div>
                  <div className="hexagon relative w-28 h-28 sm:w-32 sm:h-32 overflow-hidden rounded-full border-2 border-purple-500/40">
                    <Image
                      src="/file.svg"
                      alt="Paul"
                      fill
                      className="object-cover bg-white p-4"
                      priority
                    />
                  </div>
                </div>
                <div className="profile-info text-center sm:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">Paul</h2>
                  <p className="text-purple-200 font-medium text-lg">Étudiant L2 • Développeur Fullstack</p>
                </div>
              </div>
              
              <div className="profile-skills mb-6">
                <p className="text-sm text-purple-100/80 mb-3">Spécialisé en Django, SQLite, MongoDB, PostgreSQL, HTML, CSS et JavaScript.</p>
                <div className="flex flex-wrap gap-2">
                  {['Django', 'SQLite', 'MongoDB', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'].map(skill => (
                    <span key={skill} className="px-3 py-1 text-xs bg-purple-500/20 text-purple-200 rounded-full border border-purple-400/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="profile-links flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://paul-em-portfolio.onrender.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-ripple flex-1 flex items-center justify-center gap-2 bg-purple-500/20 backdrop-blur-sm text-center text-white border border-purple-400/30 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-purple-500/40 hover:shadow-lg hover:-translate-y-1 hover:scale-105 group"
                >
                  <span>Portfolio</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a 
                  href="https://github.com/ZieTech-dev" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-ripple flex-1 flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-center text-white border border-white/20 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      {/* Background effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 0.7 }}
        transition={{ delay: 1, duration: 1 }}
        className="background-effects absolute inset-0 z-0 overflow-hidden"
      >
        {/* Animated gradient orbs */}
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        
        {/* Particles */}
        <div className="particles-container">
          {[...Array(30)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: loading ? 0 : 0.7 }}
              transition={{ delay: 1 + (i * 0.05), duration: 1 }}
              className={`particle particle-${i % 5}`}
            ></motion.div>
          ))}
        </div>
        
        {/* Grid lines */}
        <div className="grid-lines"></div>
      </motion.div>
      
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-0 left-0 w-full py-4 px-6 text-center text-white/40 text-xs z-10"
      >
        © {new Date().getFullYear()} Paul & Yohann • Développeur Fullstack
      </motion.footer>
    </div>
  );
}

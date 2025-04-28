"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Reduced loading time for better UX
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
      {/* Loading overlay */}
      <div 
        className={`fixed inset-0 bg-black z-50 flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${
          loading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="text-center px-4">
          <div className="mb-6 relative">
            <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">.py</h1>
          </div>
          <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 animate-pulse"></div>
          </div>
          <p className="mt-4 text-gray-400 text-sm tracking-widest uppercase">Initializing Code Excellence</p>
        </div>
      </div>

      {/* Central team name */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
        <div className={`transition-all duration-1000 delay-500 ${loading ? "opacity-0 scale-50" : "opacity-90 scale-100"}`}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg animate-pulse">
            .py
          </h1>
          <p className="text-center text-base sm:text-xl text-white/70 tracking-widest mt-2">Paul × Yohann</p>
        </div>
      </div>

      {/* Main content */}
      <main className="min-h-screen pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
          {/* First team member section */}
          <div className={`bg-gradient-to-br from-blue-900/80 to-blue-700/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center transition-all duration-1000 ${loading ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}`}>
            <div className="max-w-md w-full relative z-10">
              <div className="relative mx-auto mb-6 sm:mb-8 w-48 h-48">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 animate-pulse"></div>
                <div className="absolute inset-1 rounded-full overflow-hidden">
                  <Image
                    src="/yohannpp.jpg"
                    alt="Yohann"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -inset-2 border-2 rounded-full border-blue-300/30 animate-spin-slow"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Yohann</h2>
              <p className="text-blue-200 mb-2 sm:mb-3 text-center text-base sm:text-lg">Étudiant L2 • Développeur Fullstack</p>
              <p className="text-xs sm:text-sm text-blue-100/80 text-center mb-4 sm:mb-6">Spécialisé en React, Next.js et Django, SQLite, Tailwind, PostreSQL.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:space-x-4">
                <a 
                  href="https://portfolio-yohann.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-sm text-center text-white border border-white/20 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-blue-900 hover:shadow-lg hover:-translate-y-1"
                >
                  Portfolio
                  <span className="inline-block ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
                <a 
                  href="https://github.com/noushiFlex" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500/20 backdrop-blur-sm text-center border border-blue-400/30 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:bg-blue-500 hover:border-blue-400 hover:shadow-lg hover:-translate-y-1"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Second team member section */}
          <div className={`bg-gradient-to-bl from-purple-900/80 to-purple-700/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center transition-all duration-1000 delay-300 ${loading ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}`}>
            <div className="max-w-md w-full relative z-10">
              <div className="relative mx-auto mb-6 sm:mb-8 w-48 h-48">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-300 animate-pulse"></div>
                <div className="absolute inset-1 rounded-full overflow-hidden bg-white">
                  <Image
                    src="/next.svg"
                    alt="Paul"
                    fill
                    className="object-cover p-4"
                  />
                </div>
                <div className="absolute -inset-2 border-2 rounded-full border-purple-300/30 animate-spin-slow-reverse"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Paul</h2>
              <p className="text-purple-200 mb-2 sm:mb-3 text-center text-base sm:text-lg">Étudiant L2 • Développeur Fullstack</p>
              <p className="text-xs sm:text-sm text-purple-100/80 text-center mb-4 sm:mb-6">Spécialisé en Django, SQLite, MongoDB, PostreSQL, HTML, CSS et JavaScript.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:space-x-4">
                <a 
                  href="https://paul-em-portfolio.onrender.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-sm text-center text-white border border-white/20 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-purple-900 hover:shadow-lg hover:-translate-y-1"
                >
                  Portfolio
                  <span className="inline-block ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
                <a 
                  href="https://github.com/ZieTech-dev" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500/20 backdrop-blur-sm text-center border border-purple-400/30 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:bg-purple-500 hover:border-purple-400 hover:shadow-lg hover:-translate-y-1"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Hackathon Project Description Section */}
        <div className={`px-6 py-16 sm:py-24 max-w-6xl mx-auto transition-all duration-1000 delay-500 ${loading ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}`}>
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="bg-gradient-to-br from-sky-500/20 to-indigo-500/20 backdrop-blur-md rounded-xl p-6 flex items-center justify-center w-full md:w-1/3">
                <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Locatrust</h2>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-3 text-white">Notre projet pour le Hackathon</h3>
                <p className="text-gray-300 mb-4">
                  Nous avons choisi le projet <span className="font-semibold text-blue-300">Locatrust</span> car il répond à un besoin réel dans la gestion des biens immobiliers. Nous voyons une opportunité d&apos;apporter des solutions innovantes pour simplifier la gestion locative, améliorer la productivité des professionnels du secteur et offrir une meilleure expérience utilisateur.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <h4 className="font-medium text-blue-300 mb-2">Problématique</h4>
                    <p className="text-gray-300">La gestion immobilière traditionnelle est souvent fragmentée, inefficace et manque de transparence pour toutes les parties.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <h4 className="font-medium text-purple-300 mb-2">Notre solution</h4>
                    <p className="text-gray-300">Une plateforme centralisée utilisant les technologies modernes pour automatiser et sécuriser la gestion locative de bout en bout.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Technologie blockchain</h4>
                <p className="text-gray-300 text-sm">Sécurisation des contrats et des transactions entre propriétaires et locataires avec une traçabilité totale.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Automatisation intelligente</h4>
                <p className="text-gray-300 text-sm">Gestion des paiements, des contrats et des incidents automatisée pour plus d&apos;efficacité et moins d&apos;erreurs.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Expérience utilisateur</h4>
                <p className="text-gray-300 text-sm">Interface intuitive et accessible pour les propriétaires, gestionnaires et locataires avec vision en temps réel.</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a 
                href="#" 
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Découvrir notre projet
              </a>
            </div>
          </div>
        </div>
      </main>
      
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className={`absolute rounded-full bg-gradient-to-r ${
              i % 3 === 0 ? 'from-blue-400 to-blue-300' : 
              i % 3 === 1 ? 'from-purple-400 to-pink-300' : 
              'from-cyan-400 to-teal-300'
            } opacity-${10 + (i % 3) * 10} blur-sm animate-float-${(i % 5) + 1}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              animationDuration: `${15 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-30px) translateX(15px); }
          50% { transform: translateY(-15px) translateX(30px); }
          75% { transform: translateY(-25px) translateX(-15px); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(20px) translateX(-20px); }
          50% { transform: translateY(40px) translateX(10px); }
          75% { transform: translateY(15px) translateX(30px); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(-30px); }
          50% { transform: translateY(30px) translateX(-10px); }
          75% { transform: translateY(-10px) translateX(20px); }
        }
        
        @keyframes float-4 {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(30px) translateX(20px); }
          50% { transform: translateY(-20px) translateX(-20px); }
          75% { transform: translateY(25px) translateX(-25px); }
        }
        
        @keyframes float-5 {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-15px) translateX(25px); }
          50% { transform: translateY(25px) translateX(15px); }
          75% { transform: translateY(10px) translateX(-30px); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
        
        .animate-float-1 { animation: float-1 15s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 18s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 20s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 22s ease-in-out infinite; }
        .animate-float-5 { animation: float-5 25s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
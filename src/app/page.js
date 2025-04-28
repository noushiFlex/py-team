"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Add slight delay before showing content with animation
      setTimeout(() => setShowContent(true), 100);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
      {/* Simple loading screen */}
      {loading && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">.py</h1>
            <div className="w-48 h-2 bg-gray-800 rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {/* Main content with slide-up animation */}
      <div className={`transition-all duration-700 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header */}
        <header className="py-12 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-700 delay-100">.py</h1>
          <p className="text-xl text-white/70 mt-2 transition-all duration-700 delay-200">Paul × Yohann</p>
        </header>

        {/* Main content */}
        <main className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Yohann */}
            <div className={`bg-blue-900/30 rounded-xl p-8 flex flex-col items-center transition-all duration-700 transform ${showContent ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'}`}>
              {/* Content remains the same */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-blue-400/30">
                <Image
                  src="/yohannpp.jpg"
                  alt="Yohann"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold mb-2">Yohann</h2>
              <p className="text-blue-200 mb-3 text-center">Étudiant L2 • Développeur Fullstack</p>
              <p className="text-sm text-blue-100/80 text-center mb-6">Spécialisé en React, Next.js et Django, SQLite, Tailwind, PostreSQL.</p>
              <div className="flex gap-4">
                <a 
                  href="https://portfolio-yohann.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  Portfolio →
                </a>
                <a 
                  href="https://github.com/noushiFlex" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500/20 border border-blue-400/30 px-6 py-2 rounded-full hover:bg-blue-500 transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
            
            {/* Paul */}
            <div className={`bg-purple-900/30 rounded-xl p-8 flex flex-col items-center transition-all duration-700 transform ${showContent ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-10'}`}>
              {/* Content remains the same */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-purple-400/30 bg-white">
                <Image
                  src="/next.svg"
                  alt="Paul"
                  width={128}
                  height={128}
                  className="object-cover p-3"
                />
              </div>
              <h2 className="text-3xl font-bold mb-2">Paul</h2>
              <p className="text-purple-200 mb-3 text-center">Étudiant L2 • Développeur Fullstack</p>
              <p className="text-sm text-purple-100/80 text-center mb-6">Spécialisé en Django, SQLite, MongoDB, PostreSQL, HTML, CSS et JavaScript.</p>
              <div className="flex gap-4">
                <a 
                  href="https://paul-em-portfolio.onrender.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Portfolio →
                </a>
                <a 
                  href="https://github.com/ZieTech-dev" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500/20 border border-purple-400/30 px-6 py-2 rounded-full hover:bg-purple-500 transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Hackathon Project Description */}
          <div className={`bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-white/10 rounded-xl p-8 mb-16 transition-all duration-700 transform ${showContent ? 'opacity-100 translate-y-0 delay-700' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <div className="bg-sky-500/10 rounded-xl p-6 flex items-center justify-center w-full md:w-1/3">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Locatrust</h2>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Notre projet pour le Hackathon</h3>
                <p className="text-gray-300 mb-4">
                  Nous avons choisi le projet <span className="font-semibold text-blue-300">Locatrust</span> car il répond à un besoin réel dans la gestion des biens immobiliers. Notre solution apporte des innovations pour simplifier la gestion locative, améliorer la productivité des professionnels et offrir une meilleure expérience utilisateur.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="font-medium text-blue-300 mb-2">Problématique</h4>
                    <p className="text-gray-300">La gestion immobilière traditionnelle est souvent fragmentée, inefficace et manque de transparence pour toutes les parties.</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="font-medium text-purple-300 mb-2">Notre solution</h4>
                    <p className="text-gray-300">Une plateforme centralisée utilisant les technologies modernes pour automatiser et sécuriser la gestion locative de bout en bout.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature cards with staggered animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`bg-white/5 rounded-lg p-5 border border-white/10 hover:bg-white/10 transition-all duration-700 transform ${showContent ? 'opacity-100 translate-y-0 delay-800' : 'opacity-0 translate-y-10'}`}>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Technologie blockchain</h4>
                <p className="text-gray-300 text-sm">Sécurisation des contrats et des transactions entre propriétaires et locataires avec une traçabilité totale.</p>
              </div>
              <div className={`bg-white/5 rounded-lg p-5 border border-white/10 hover:bg-white/10 transition-all duration-700 transform ${showContent ? 'opacity-100 translate-y-0 delay-900' : 'opacity-0 translate-y-10'}`}>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Automatisation intelligente</h4>
                <p className="text-gray-300 text-sm">Gestion des paiements, des contrats et des incidents automatisée pour plus d&apos;efficacité et moins d&apos;erreurs.</p>
              </div>
              <div className={`bg-white/5 rounded-lg p-5 border border-white/10 hover:bg-white/10 transition-all duration-700 transform ${showContent ? 'opacity-100 translate-y-0 delay-1000' : 'opacity-0 translate-y-10'}`}>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Expérience utilisateur</h4>
                <p className="text-gray-300 text-sm">Interface intuitive et accessible pour les propriétaires, gestionnaires et locataires avec vision en temps réel.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
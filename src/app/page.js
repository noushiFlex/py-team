"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
      {/* Loading overlay */}
      <div 
        className={`fixed inset-0 bg-black z-50 flex flex-col items-center justify-center transition-transform duration-1500 ease-in-out ${
          loading ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="text-center">
          <div className="mb-6 glitch-container">
            <h1 className="text-6xl font-bold glitch-text" data-text=".py">.py</h1>
          </div>
          <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 animate-[loading_2.5s_ease-in-out_infinite]"></div>
          </div>
          <p className="mt-4 text-gray-400 text-sm tracking-widest uppercase">Initializing Code Excellence</p>
        </div>
      </div>

      {/* Central team name */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
        <div className={`transition-all duration-1000 delay-500 ${loading ? "opacity-0 scale-50" : "opacity-90 scale-100"}`}>
          <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 py-text-shadow animate-float">
            .py
          </h1>
          <p className="text-center text-xl text-white/70 tracking-widest mt-2">Paul × Yohann</p>
        </div>
      </div>

      {/* Main content */}
      <main className="min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
          {/* First team member section */}
          <div className={`bg-gradient-to-br from-blue-900/80 to-blue-700/80 backdrop-blur-sm p-10 flex flex-col items-center justify-center transition-all duration-1000 ${loading ? "opacity-0 translate-x-[-100px]" : "opacity-100 translate-x-0"}`}>
            <div className="max-w-md w-full relative z-10">
              <div className="hexagon-container mx-auto mb-8">
                <div className="hexagon">
                  <Image
                    src="/yohannpp.jpg"
                    alt="Yohann"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="hexagon-outer animate-spin-slow"></div>
              </div>
              <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Yohann</h2>
              <p className="text-blue-200 mb-3 text-center text-lg">Full-stack Developer & Designer</p>
              <p className="text-sm text-blue-100/80 text-center mb-6">Crafting beautiful interfaces with pixel-perfect precision and performance-driven code.</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="#" 
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-2 rounded-full font-medium hover:bg-white hover:text-blue-900 transition-all hover:shadow-glow-blue transform hover:-translate-y-1"
                >
                  Portfolio
                </a>
                <a 
                  href="#" 
                  className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-6 py-2 rounded-full font-medium hover:bg-blue-500 hover:border-blue-500 transition-all hover:shadow-glow-blue transform hover:-translate-y-1"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Second team member section */}
          <div className={`bg-gradient-to-bl from-purple-900/80 to-purple-700/80 backdrop-blur-sm p-10 flex flex-col items-center justify-center transition-all duration-1000 delay-300 ${loading ? "opacity-0 translate-x-[100px]" : "opacity-100 translate-x-0"}`}>
            <div className="max-w-md w-full relative z-10">
              <div className="hexagon-container mx-auto mb-8">
                <div className="hexagon">
                  <Image
                    src="/next.svg"
                    alt="Paul"
                    fill
                    className="object-cover bg-white p-4"
                  />
                </div>
                <div className="hexagon-outer animate-spin-slow-reverse"></div>
              </div>
              <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Paul</h2>
              <p className="text-purple-200 mb-3 text-center text-lg">Backend Developer & AI Specialist</p>
              <p className="text-sm text-purple-100/80 text-center mb-6">Developing intelligent solutions and rock-solid backend systems that scale without compromise.</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="#" 
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-2 rounded-full font-medium hover:bg-white hover:text-purple-900 transition-all hover:shadow-glow-purple transform hover:-translate-y-1"
                >
                  Portfolio
                </a>
                <a 
                  href="#" 
                  className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 px-6 py-2 rounded-full font-medium hover:bg-purple-500 hover:border-purple-500 transition-all hover:shadow-glow-purple transform hover:-translate-y-1"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </main>
      
      {/* Animated background particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i % 5}`}></div>
        ))}
      </div>
    </div>
  );
}

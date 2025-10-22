'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AIAgentPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#071520] flex items-center justify-center">
        <div className="text-[#F6A316] text-xl">Chargement de l'agent IA...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#071520]">
      <div className="container mx-auto p-4">
        <div className="mb-6">
          <Link 
            href="/" 
            className="text-[#F6A316] hover:text-[#F6A316]/80 transition-colors"
          >
            ← Retour à l'accueil
          </Link>
        </div>
        
        <iframe
          src="/SimulationKeyUsers_test UI.html"
          className="w-full h-screen border-0"
          title="Agent IA - Simulation Key Users"
        />
      </div>
    </div>
  );
} 
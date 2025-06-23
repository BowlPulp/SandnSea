import { useState, useEffect } from "react";
import { Home, Search, ArrowLeft, Zap } from "lucide-react";
import {Link} from 'react-router-dom';

export default function NotFoundPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className={`absolute w-4 h-4 bg-amber-500/20 rounded-full animate-pulse`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${i * 0.5}s`,
        animationDuration: `${2 + Math.random() * 2}s`
      }}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {floatingElements}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-slate-900/30 to-white/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className={`text-center max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Animated 404 */}
          <div className="relative mb-8">
            <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              404
            </h1>
          </div>

          {/* Glitch effect text */}
          <div className="mb-6 relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Oops! Lost in search for properties
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed animate-pulse">
              The page you're looking for has vanished into the digital void. 
              <br className="hidden md:block" />
              But don't worry, we'll help you find your way back.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Link to='/' className="group flex items-center gap-3 bg-[#d2ab67] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <Home className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Go Home
            </Link>
          </div>

          {/* Helpful suggestions */}
          <div className="mt-12 text-gray-800 text-sm">
            <p>Try checking the URL or use the navigation above to explore our site.</p>
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent" />
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-ping" />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-blue-400/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
    </div>
  );
}
import React, { useRef } from "react";
import { 
  FaArrowDown, 
  FaCode, 
  FaRocket, 
  FaStar,
  FaHeart,
  FaLightbulb
} from 'react-icons/fa';
import Threads from './ui/Threads';

const TransitionSection = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative md:py-16 py-8 px-4 md:px-8 lg:px-16 overflow-hidden bg-slate-950 z-20"
      style={{
        // minHeight: '40vh',
        background: `
          radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.08) 0%, transparent 60%),
          radial-gradient(circle at 70% 70%, rgba(244, 114, 182, 0.08) 0%, transparent 60%),
          linear-gradient(180deg, 
            #000000 0%, 
            #0a0a1a 25%, 
            #0d1421 50%, 
            #1a1a2e 75%, 
            #0a0a1a 100%
          )
        `,
      }}
    >
      {/* Threads Background - Top Layer */}
      <div 
        className="absolute inset-0 w-full h-full z-10 pointer-events-auto"
        style={{ minHeight: '40vh' }}
      >
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      {/* Floating Decorative Elements - Above Threads */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        <FaCode className="absolute top-16 left-16 text-purple-400/20 w-6 h-6" />
        <FaRocket className="absolute top-20 right-20 text-pink-400/20 w-5 h-5" />
        <FaStar className="absolute bottom-20 left-20 text-purple-400/25 w-4 h-4" />
        <FaHeart className="absolute bottom-16 right-16 text-pink-400/25 w-5 h-5" />
        <FaLightbulb className="absolute top-1/2 left-1/4 text-purple-300/20 w-6 h-6" />
        <div className="absolute top-24 left-1/3 w-3 h-3 bg-purple-400/20 rounded-full"></div>
        <div className="absolute bottom-24 right-1/3 w-2 h-2 bg-pink-400/25 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-purple-300/15 rounded-full"></div>
      </div>

      {/* Gradient Lines - Above Threads */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent"></div>
      </div>

      {/* Main Content - Highest Layer */}
      <div className="relative z-30 text-center max-w-4xl mx-auto">
        <div ref={textRef} className="space-y-6">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400/50"></div>
            <div className="w-2 h-2 bg-purple-400/60 rounded-full"></div>
            <div className="h-px w-32 bg-gradient-to-r from-purple-400/50 via-pink-400/50 to-purple-400/50"></div>
            <div className="w-2 h-2 bg-pink-400/60 rounded-full"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-400/50"></div>
          </div>

          {/* Main Text */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to bring your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ideas to life?
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Let's collaborate and create something amazing together
          </p>

          {/* Arrow */}
          <div ref={arrowRef} className="mt-8 flex justify-center">
            <div className="p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30">
              <FaArrowDown className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect - Above Threads but below text */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-purple-500/10 to-transparent blur-3xl z-20"></div>
    </section>
  );
};

export default TransitionSection;

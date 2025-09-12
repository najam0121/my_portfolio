import React from "react";
import {
  FaHeart,
  FaArrowUp,
  FaCode,
  FaRocket,
  FaStar
} from "react-icons/fa";

const Footer = ({ sticky = true }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG Icons Components with colors matching the reference image
  const GitHubIcon = () => (
    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="#ffffff" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="#0A66C2" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const TwitterIcon = () => (
    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="#1DA1F2" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: "#FF8A00"}} />
          <stop offset="50%" style={{stopColor: "#E91E63"}} />
          <stop offset="100%" style={{stopColor: "#5B51D8"}} />
        </linearGradient>
      </defs>
      <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  return (
    <footer
      className={
        sticky
          ? "fixed bottom-0 left-0 w-full"
          : "w-full"
      }
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(244, 114, 182, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 50% 100%, rgba(168, 85, 247, 0.15) 0%, transparent 60%),
          linear-gradient(135deg, 
            #0a0a1a 0%, 
            #0d1421 25%, 
            #1a1a2e 50%, 
            #16213e 75%, 
            #000000 100%
          )
        `,
      }}
    >
      {/* Responsive Decorative Elements - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        <FaCode className="absolute top-12 sm:top-16 md:top-20 left-8 sm:left-12 md:left-20 text-purple-400/20 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        <FaRocket className="absolute top-16 sm:top-24 md:top-32 right-12 sm:right-20 md:right-32 text-pink-400/20 w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        <FaStar className="absolute bottom-20 sm:bottom-32 md:bottom-40 left-6 sm:left-10 md:left-16 text-purple-400/25 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        <FaHeart className="absolute bottom-16 sm:bottom-24 md:bottom-32 right-8 sm:right-12 md:right-20 text-pink-400/25 w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        <div className="absolute top-20 sm:top-32 md:top-40 left-1/4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-purple-400/20 rounded-full"></div>
        <div className="absolute bottom-32 sm:bottom-48 md:bottom-60 right-1/4 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-pink-400/25 rounded-full"></div>
        <div className="absolute top-32 sm:top-48 md:top-60 right-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-300/30 rounded-full"></div>
      </div>

      <div className="relative z-10 pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-5 px-3 sm:px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Social Links Section - Mobile Optimized */}
          <div className="text-center mb-2 sm:mb-3">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-4 md:mb-6 relative">
              Connect With Me
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 md:w-20 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            </h3>

            {/* Mobile-First Social Icons Grid */}
            <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
              {[
                { icon: GitHubIcon, href: "https://github.com/najam0121", label: "GitHub" },
                { icon: LinkedInIcon, href: "https://www.linkedin.com/in/mdnajam9", label: "LinkedIn" },
                { icon: TwitterIcon, href: "https://x.com/Mohamma58698838", label: "Twitter" },
                { icon: InstagramIcon, href: "https://www.instagram.com/najam_k041", label: "Instagram" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 md:p-3 rounded-xl sm:rounded-2xl opacity-100 
                           transition-all duration-300 hover:scale-105 active:scale-95
                           hover:shadow-lg hover:bg-white/10 touch-manipulation
                           min-w-[44px] min-h-[44px] flex items-center justify-center"
                  style={{
                    background: "rgba(17, 24, 39, 0.6)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  title={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Section - Mobile Responsive */}
          <div className="border-t border-gray-700/50 pt-3 sm:pt-4">
            <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
              <div className="text-gray-400 text-center px-2">
                <p className="mb-1 sm:mb-2 text-sm sm:text-base">
                  © {new Date().getFullYear()} . All rights reserved.
                </p>
                <p className="text-xs sm:text-sm flex items-center justify-center flex-wrap gap-1">
                  <span>Developed By Md. Najam</span>
                  <FaHeart className="inline w-3 h-3 sm:w-4 sm:h-4 text-pink-400 mx-1" />
                  <span>and lots of coffee</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button - Mobile Optimized */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 
                 p-3 sm:p-4 rounded-full z-50 transition-all duration-300 
                 hover:scale-105 active:scale-95 touch-manipulation
                 min-w-[48px] min-h-[48px] sm:min-w-[52px] sm:min-h-[52px]
                 shadow-lg hover:shadow-xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(168, 85, 247, 0.9) 0%, rgba(244, 114, 182, 0.9) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 25px rgba(168, 85, 247, 0.3)",
        }}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </button>
    </footer>
  );
};

export default Footer;

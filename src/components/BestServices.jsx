import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const BestServices = () => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  // Card data with responsive positioning
  const cardData = [
    {
      id: 1,
      title: "Full Stack Development",
      description: "Responsive web apps using MERN stack with smooth performance.",
      icon: "🌐",
      gradient: "from-gray-800 to-black",
      position: "left-center",
      mobilePosition: "mobile-1",
      noteImage: "/stack.jpg"
    },
    {
      id: 2,
      title: "UI/UX Integration",
      description: "Modern interfaces with Tailwind CSS and Framer Motion.",
      icon: "✨",
      gradient: "from-red-500/20 to-pink-500/20",
      position: "center-top",
      mobilePosition: "mobile-2",
      noteImage: "/ux.jpg"
    },
    {
      id: 3,
      title: "API Development",
      description: "Secure RESTful APIs with Razorpay and NextAuth integration.",
      icon: "🔗",
      gradient: "from-gray-800 to-black",
      position: "center-bottom",
      mobilePosition: "mobile-3",
      noteImage: "/api.jpg"
    },
    {
      id: 4,
      title: "Database Optimization",
      description: "Structured MongoDB databases for scalable performance.",
      icon: "💾",
      gradient: "from-red-500/20 to-pink-500/20",
      position: "right-lower",
      mobilePosition: "mobile-4",
      noteImage: "/database.jpg"
    }
  ];

  // Function to get card position styles with responsive handling
  const getCardPosition = (position, mobilePosition) => {
    // Mobile positions (simplified stacking)
    const mobilePositions = {
      "mobile-1": { 
        left: "12%", 
        top: "20%",
        transform: "translate(0, 0)"
      },
      "mobile-2": { 
        left: "12%", 
        top: "39%",
        transform: "translate(0, 0)"
      },
      "mobile-3": { 
        left: "12%", 
        top: "58%",
        transform: "translate(0, 0)"
      },
      "mobile-4": { 
        left: "12%", 
        top: "78%",
        transform: "translate(0, 0)"
      }
    };

    // Desktop positions (original)
    const desktopPositions = {
      "left-center": { 
        left: "6%", 
        top: "55%",
        transform: "translate(0, -50%)"
      },
      "center-top": { 
        left: "25%", 
        top: "25%",
        transform: "translate(0, 0)"
      },
      "center-bottom": { 
        right: "25%", 
        top: "60%",
        transform: "translate(0, -50%)"
      },
      "right-lower": { 
        right: "6%", 
        top: "30%",
        transform: "translate(0, 0)"
      }
    };

    // Return mobile position for screens < 768px, desktop otherwise
    if (window.innerWidth < 768) {
      return mobilePositions[mobilePosition] || {};
    }
    return desktopPositions[position] || {};
  };

  // Get responsive card dimensions
  const getCardDimensions = () => {
    if (window.innerWidth < 480) {
      return { width: "320px", height: "160px" }; // Small mobile
    } else if (window.innerWidth < 768) {
      return { width: "320px", height: "180px" }; // Large mobile
    } else if (window.innerWidth < 1024) {
      return { width: "380px", height: "320px" }; // Tablet
    }
    return { width: "450px", height: "420px" }; // Desktop
  };

  useGSAP(() => {
    // Set initial state: Image starts at normal size
    gsap.set(imageRef.current, {
      transformOrigin: "center center",
    });

    // Set initial state for heading (hidden)
    gsap.set(headingRef.current, {
      opacity: 0,
      y: -50,
      scale: 0.8,
    });

    // Set initial state for cards with responsive positioning
    gsap.set(cardsRef.current, {
      x: window.innerWidth < 768 ? "100vw" : "120vw", // Less distance for mobile
      opacity: 0,
      scale: 0.8,
      rotationX: window.innerWidth < 768 ? 0 : 15, // No rotation on mobile
      rotationY: window.innerWidth < 768 ? 0 : 25,
      rotationZ: window.innerWidth < 768 ? 0 : 10,
    });

    // Main scroll-triggered animation with responsive settings
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: window.innerWidth < 768 ? "+=2000 center" : "+=4000 center", // Shorter for mobile
        scrub: window.innerWidth < 768 ? 0.8 : 1.2, // Faster scrub for mobile
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          setIsImageExpanded(progress > 0.25);
        },
      },
    });

    // Phase 1: Image height expansion
    scrollTimeline.to(imageRef.current, {
      height: "100vh",
      borderRadius: "10px",
      ease: "power1.inOut",
      duration: 0.2,
    });

    // Phase 2: Image width expansion
    scrollTimeline.to(imageRef.current, {
      width: "100vw",
      borderRadius: 0,
      x: 0,
      y: 0,
      borderColor: "rgba(255,255,255,0)",
      borderWidth: 0,
      boxShadow: "none",
      ease: "power1.inOut",
      duration: 0.2,
    }, "+=0");

    // Phase 3: Animate heading
    scrollTimeline.to(headingRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      ease: "back.out(1.7)",
      duration: 0.15,
    }, "-=0.1");

    // Phase 4: Animate cards with responsive settings
    cardsRef.current.forEach((card, index) => {
      scrollTimeline.to(card, {
        x: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        rotationY: 0,
        rotationZ: window.innerWidth < 768 ? 0 : (index % 2 === 0 ? -5 : 5), // No rotation on mobile
        duration: window.innerWidth < 768 ? 0.3 : 0.4, // Faster on mobile
        ease: "power2.out",
      }, `-=${index === 0 ? 0.1 : 0.05}`);
    });

    // Cleanup function for responsive changes
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      id="services"
      ref={containerRef}
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed relative overflow-hidden bg-slate-950 z-20"
      style={{
        backgroundImage: "url('/land1.avif')",
        height: '100vh',
        width: '100vw',
      }}
    >
      {/* Responsive Animated Heading */}
      <h1
        ref={headingRef}
        className="fixed top-25 md:top-20 left-1/2 transform -translate-x-1/2 text-4xl md:text-6xl font-extrabold text-white text-center z-50 px-4"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          willChange: "transform, opacity",
        }}
      >
        Services
      </h1>

      {/* Main Image Container */}
      <div className="h-dvh w-screen relative flex items-center justify-center">
        <img
          ref={imageRef}
          src="/ancient.png"
          alt="Ancient transformation"
          className="relative object-cover"
          style={{
            width: window.innerWidth < 480 ? "280px" : "320px",
            height: window.innerWidth < 480 ? "380px" : "440px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 12px 60px 0 rgba(129,39,214,0.22)",
            border: "1.5px solid white",
            willChange: "transform, width, height, border-radius",
            transformOrigin: "center center",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 30,
          }}
        />
        
        {/* Image Expansion Glow Effect */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 z-35 transition-opacity duration-500 pointer-events-none"
          style={{
            opacity: isImageExpanded ? 1 : 0,
            borderRadius: isImageExpanded ? 0 : "20px",
          }}
        />

        {/* Responsive Animated Cards */}
        {cardData.map((card, index) => {
          const dimensions = getCardDimensions();
          return (
            <div
              key={card.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="fixed z-40 pointer-events-none rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden"
              style={{
                ...getCardPosition(card.position, card.mobilePosition),
                width: dimensions.width,
                height: dimensions.height,
                perspective: window.innerWidth < 768 ? 'none' : '1000px',
                transformStyle: window.innerWidth < 768 ? 'flat' : 'preserve-3d',
                boxShadow: window.innerWidth < 768 
                  ? '0 8px 20px -6px rgba(0, 0, 0, 0.4)' 
                  : '0 20px 40px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                border: window.innerWidth < 768 
                  ? '2px solid rgba(255, 255, 255, 0.15)' 
                  : '4px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              {/* Full Card Background Image */}
              <img 
                src={card.noteImage}
                alt="Card background"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  borderRadius: window.innerWidth < 768 ? "12px" : "16px",
                }}
              />

              {/* Dark Overlay for Text Readability */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                style={{
                  borderRadius: window.innerWidth < 768 ? "12px" : "16px",
                }}
              />

              {/* Card Content Overlay - Responsive */}
              <div className="relative z-10 p-3 md:p-5 h-full flex flex-col justify-between">
                {/* Top Section with Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center w-10 h-10 md:w-15 md:h-15 rounded-full bg-white/20 backdrop-blur-sm">
                    <span className="text-lg md:text-3xl text-white">{card.icon}</span>
                  </div>
                </div>

                {/* Bottom Section with Text - Responsive */}
                <div className="mb-2 md:mb-5">
                  <h3 className="text-lg md:text-3xl font-bold text-white mb-2 md:mb-4 leading-tight drop-shadow-lg">
                    {card.title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-lg leading-relaxed drop-shadow-md line-clamp-3 md:line-clamp-none">
                    {card.description}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="mt-2 md:mt-3 h-0.5 w-8 md:w-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-80"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestServices;

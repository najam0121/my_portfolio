import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Briefcase, FolderOpen, BrainCircuit, Mail, Heart, Home, Sparkles } from 'lucide-react';
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false); // Add this to prevent conflicts
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // Only update active section if not programmatically scrolling
      if (!isScrolling) {
        const sections = ['home', 'services', 'skills', 'projects', 'contact'];
        sections.forEach(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
            }
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  // Update active section based on URL params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");
    if (section) {
      setActiveSection(section);
    } else if (location.pathname === "/") {
      setActiveSection('home');
    }
  }, [location.search, location.pathname]);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home, id: 'home' },
    { name: 'Services', href: '#services', icon: Briefcase, id: 'services' },
    { name: 'Skills', href: '#skills', icon: BrainCircuit, id: 'skills' },
    { name: 'Projects', href: '#projects', icon: FolderOpen, id: 'projects' },
    { name: 'Contact', href: '#contact', icon: Mail, id: 'contact' },
  ];

  // Fixed scrollToSection function
  const scrollToSection = (href, id) => {
    setIsScrolling(true); // Prevent scroll listener conflicts
    
    if (location.pathname !== "/") {
      // If not on homepage, navigate to homepage with section param
      navigate(`/?section=${id}`);
    } else {
      // Already on homepage, scroll smoothly
      const element = document.querySelector(href);
      if (element) {
        // Use scrollIntoView with better options for smoother scrolling
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
        
        // Update URL immediately
        if (id === 'home') {
          navigate("/", { replace: true });
        } else {
          navigate(`/?section=${id}`, { replace: true });
        }
        
        setActiveSection(id);
        
        // Re-enable scroll detection after scroll completes
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    }
    setIsOpen(false);
    setHoveredItem(null);
  };

  // Alternative smooth scroll function for better performance
  const smoothScrollToSection = (href, id) => {
    setIsScrolling(true);
    
    if (location.pathname !== "/") {
      navigate(`/?section=${id}`);
    } else {
      const element = document.querySelector(href);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 80; // 80px offset for navbar
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update URL
        if (id === 'home') {
          navigate("/", { replace: true });
        } else {
          navigate(`/?section=${id}`, { replace: true });
        }
        
        setActiveSection(id);
        
        setTimeout(() => {
          setIsScrolling(false);
        }, 800);
      }
    }
    setIsOpen(false);
    setHoveredItem(null);
  };

  const navbarMotion = {
    initial: { scale: 1, y: 0 },
    animate: scrolled
      ? { scale: 0.98, y: 1, transition: { type: "spring", stiffness: 120, damping: 22 } }
      : { scale: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 22 } }
  };

  const navbarBg = "linear-gradient(135deg,rgba(22,12,36,0.98) 0%,rgba(45,15,52,0.96) 100%)";
  
  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 24px 2px rgba(168,85,247,0.40)",
      ],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <motion.nav
      {...navbarMotion}
      className={`
        fixed top-0 left-1/2 transform -translate-x-1/2 z-40
        transition-all duration-700
        w-11/12 max-w-6xl
        ${scrolled ? 'mt-1' : 'mt-6'}
      `}
      style={{
        background: navbarBg,
        borderRadius: scrolled ? 40 : 30,
        border: "1.5px solid rgba(168,85,247,0.10)",
        backdropFilter: "blur(18px)",
      }}
    >
      <motion.div
        animate={glowVariants.animate}
        className={`
          relative w-full
          ${scrolled ? 'rounded-full' : 'rounded-3xl'}
          transition-all duration-700
        `}
        style={{
          background: 'transparent'
        }}
      >
        <div className={`px-6 ${scrolled ? 'py-2.5' : 'py-4'} transition-all duration-700`}>
          <div className="flex items-center justify-between">
            {/* Navbar Title with hover glow */}
            <motion.div
              whileHover={{
                scale: 1.06,
                textShadow: scrolled
                  ? "0 0 6px rgba(168,85,247,0.6)"
                  : "0 0 15px rgba(236,72,153,0.75)",
                transition: { duration: 0.3 },
              }}
              className="flex-shrink-0 relative text-white font-semibold cursor-pointer"
              onClick={() => smoothScrollToSection('#home', 'home')}
              style={{
                fontSize: scrolled ? 26 : 32,
                letterSpacing: "0.01em",
                transition: "font-size 0.45s",
              }}
            >
              <Sparkles className={`inline -mt-1 mr-2 ${scrolled ? 'w-5 h-5' : 'w-7 h-7'} text-purple-400`} />
              Md. Najam
            </motion.div>

            {/* Desktop Navigation Items */}
            <div className="hidden md:block">
              <div className={`flex items-center transition-all duration-500 ${scrolled ? 'space-x-0' : 'space-x-1'}`}>
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.id;
                  const isHovered = hoveredItem === item.id;
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => smoothScrollToSection(item.href, item.id)}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      whileHover={
                        !isActive ?
                          scrolled
                            ? {
                                scale: 1.05,
                                y: -1,
                                transition: { type: "spring", stiffness: 300, damping: 20 },
                              }
                            : {
                                scale: 1.1,
                                y: -3,
                                transition: { type: "spring", stiffness: 300, damping: 20 },
                              }
                          : {}
                      }
                      whileTap={{ scale: 0.96 }}
                      className={`group relative flex items-center transition-all duration-300
                        ${scrolled ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-sm'}
                        rounded-full font-medium overflow-hidden
                        ${
                          isActive
                            ? 'text-white'
                            : 'text-zinc-200 hover:text-white'
                        }
                      `}
                      style={{
                        minWidth: scrolled ? 68 : 92,
                        fontWeight: isActive ? 600 : 500,
                        background: isActive 
                          ? 'linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153))' 
                          : (isHovered ? 'rgba(255,255,255,0.1)' : 'transparent')
                      }}
                    >
                      <IconComponent
                        className={`relative z-10 transition-colors ${scrolled ? 'w-3 h-3 mr-1' : 'w-4 h-4 mr-2'} ${
                          isActive ? 'text-white' : 'group-hover:text-purple-300'
                        }`}
                      />
                      <span className={`relative z-20 ${isActive ? 'text-white' : 'text-zinc-200 group-hover:text-white'}`}>
                        {item.name}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`relative inline-flex items-center justify-center rounded-full text-zinc-400 hover:text-white hover:bg-white/10 focus:outline-none transition-all duration-300
                  ${scrolled ? 'p-2' : 'p-3'}`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isOpen ? 'close2' : 'menu2'}
                    initial={{ rotate: -84, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 120, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                  >
                    {isOpen
                      ? <X className={scrolled ? 'w-5 h-5' : 'w-6 h-6'} />
                      : <Menu className={scrolled ? 'w-5 h-5' : 'w-6 h-6'} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            transition={{ duration: 0.28, type: "spring" }}
            className="md:hidden mt-3 rounded-2xl bg-black/93 backdrop-blur-xl border border-purple-500/30 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    onClick={() => smoothScrollToSection(item.href, item.id)}
                    whileHover={{ x: 4, scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    className={`group flex items-center w-full px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-300
                      ${isActive
                        ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg'
                        : 'text-zinc-200 hover:text-white hover:bg-white/10'}
                    `}
                  >
                    <IconComponent className="w-5 h-5 mr-3 group-hover:text-purple-300 transition-colors" />
                    <span className="relative z-20 text-white">{item.name}</span>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-2 h-2 bg-white rounded-full"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Floating Contact Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.54, type: "spring" }}
        className="hidden lg:block absolute -right-20 top-1/2 transform -translate-y-1/2"
      >
        <motion.button
          whileHover={{ scale: 1.11, rotate: 360, transition: { duration: 0.7 } }}
          whileTap={{ scale: 0.9 }}
          onClick={() => smoothScrollToSection('#contact', 'contact')}
          className="group relative p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
        >
          <Heart className="w-5 h-5 group-hover:text-red-300 transition-colors" />
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 0.33, scale: 1.2 }}
            transition={{ duration: 0.37 }}
          />
        </motion.button>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

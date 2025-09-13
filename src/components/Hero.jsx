import { useRef } from "react";
import { motion } from "framer-motion";
import { Code, FileUser, ArrowRight, Coffee } from "lucide-react";
// import CarViewer from "./CarViewer";
import { Typewriter } from 'react-simple-typewriter'
import { useNavigate } from "react-router-dom";
import TiltedCard from './ui/TiltedCard';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const heroRef = useRef(null);
  const rightContentRef = useRef(null);
  const navigate = useNavigate();
 
  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-slate-950 z-20 "
    >
      {/* Grid Background */}
      <div className="absolute inset-0 -z-20 ">
        <div className="relative h-full w-full ">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
            style={{
              maskImage:
                "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)",
            }}
          />
        </div>
      </div>

      {/* Radial Pink Orbs */}
      <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[600px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] -z-10" />
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[600px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] -z-10" />

      {/* Main Layout */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 ">
        
        {/* Mobile/Tablet Image Section (Shows first on small screens) */}
        <motion.div
          ref={rightContentRef}
          className="flex lg:hidden w-full max-w-xs sm:max-w-sm md:max-w-md justify-center items-center z-30 mt-8 sm:mt-12 relative order-1"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
        >
          {/* Wrapper for image + icons */}
          <div className="relative">
            {/* Image Card - Profile view for mobile */}
            <TiltedCard
              imageSrc="/self1.png"
              altText="Developer Portfolio"
              captionText="Creative Developer"
              containerHeight="280px"
              containerWidth="280px"
              imageHeight="280px"
              imageWidth="280px"
              rotateAmplitude={10}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
            
            {/* Mobile Icons - Positioned around profile image */}
            <div className="absolute right-[-15px] top-1/4 rotate-15">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-center">
                <img src="/javascript.png" alt="JavaScript" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
              </div>
            </div>
            
            <div className="absolute left-[-15px] top-1/4 -rotate-10">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-center">
                <img src="/nextjs.webp" alt="Next.js" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
              </div>
            </div>
            
            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 rotate-6">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-center">
                <img src="/tailwind.png" alt="TailwindCSS" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* LEFT: Hero Content */}
        <motion.div
          className="z-10 w-full lg:w-3/5 text-white text-center lg:text-left overflow-hidden order-2 lg:order-1 mt-10 md:mt-30"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-4 sm:mb-6 hidden md:block">
  <span className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs sm:text-sm font-medium">
    <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
    Web Developer
  </span>
</motion.div>


          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Md. Najam
            </span>
            <br />
            <span className="text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              a passionate{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                <Typewriter
                  words={['Web Developer', 'MERN Stack Developer', 'Full Stack Developer', 'UI/UX Designer']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  cursorColor="#ffffff"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0"
          >
            I build modern and responsive web applications using MERN stack.
            Crafting digital experiences with clean code and innovative solutions.
          </motion.p>

          {/* Buttons - Always in one line */}
          <motion.div
            variants={itemVariants}
            className="flex gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/resume")}
              className="group flex items-center justify-center px-4 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 text-sm sm:text-base"
            >
              <FileUser className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
              <span className="hidden sm:inline">View Resume</span>
              <span className="sm:hidden">Resume</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                window.location.href = "mailto:mohammadnnajam5459@gmail.com?subject=Job Opportunity&body=Hello Najam, I am interested in hiring you.";
              }}
              className="group flex items-center justify-center px-4 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 font-semibold rounded-full transition-all duration-300 text-sm sm:text-base"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div
  variants={itemVariants}
  className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8 text-gray-400 text-sm sm:text-base"
>
  <div className="flex items-center">
    <Coffee className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-400" />
    <span>B.Tech CSE Student</span>
  </div>
  <div className="flex items-center">
    <div className="w-2 h-2 mr-2 bg-purple-500 rounded-full" />
    <span>Full Stack Developer</span>
  </div>
</motion.div>

        </motion.div>

        {/* Desktop Image Section (Hidden on mobile/tablet) */}
        <motion.div
          className="hidden lg:flex w-full lg:w-2/5 justify-center items-center z-30 mt-20 relative order-2"
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <div className="relative">
            <TiltedCard
              imageSrc="/self1.png"
              altText="Developer Portfolio"
              captionText="Creative Developer"
              containerHeight="500px"
              containerWidth="450px"
              imageHeight="500px"
              imageWidth="450px"
              rotateAmplitude={15}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
            
            {/* Desktop Icons */}
            <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 rotate-15">
              <div className="w-11 h-11 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-center">
                <img src="/javascript.png" alt="JavaScript" className="w-8 h-8 object-contain" />
              </div>
            </div>
            
            <div className="absolute left-[-30px] top-1/4 -translate-y-1/2 -rotate-10">
              <div className="w-11 h-11 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-center">
                <img src="/nextjs.webp" alt="Next.js" className="w-7 h-7 object-contain" />
              </div>
            </div>
            
            <div className="absolute bottom-[-20px] left-1/4 -translate-x-1/2 rotate-6">
              <div className="w-11 h-11 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-center">
                <img src="/tailwind.png" alt="TailwindCSS" className="w-7 h-7 object-contain" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

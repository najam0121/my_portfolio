// Project.jsx
import React, { useState } from "react";

const Project = () => {
  const projects = [
    {
      title: "Buy Me Chai",
      description:
        "Crowdfunding platform where fans support creators by ‘buying chai’ with secure payments, user authentication, and creator profiles",
      link: "https://github.com/najam0121/Buy_me_Chai.git",
      tech: [
        "Next.js",
        "React",
        "TailwindCSS",
        "MongoDB",
        "NextAuth",
        "Razorpay",
        "Framer Motion",
      ],
      image: "/b1.png",
    },
    {
      title: "AI-Studio UI",
      description:
        "Interactive frontend playground with chat interface, model picker, settings panel, and theme toggle. Showcasing modern AI UX design patterns",
      link: "https://ai-studio-ui-nu.vercel.app",
      tech: [
        "React",
        "TailwindCSS",
        "Radix UI",
        "Storybook",
        "Zod",
        "TypeScript",
      ],
      image: "/a1.png",
    },
    {
      title: "Company Dashboard",
      description:
        "Dashboard for student analytics and hiring process management with real-time insights",
      link: "https://github.com/najam0121/Uptoskill_Dashboard1.git",
      tech: [
        "React",
        "Tailwind CSS",
        "ShadCN/UI",
        "Framer Motion",
        "Three.js",
        "Clsx",
      ],
      image: "/d1.png",
    },
    {
      title: "PERN Todo",
      description:
        "Task manager with features CRUD operations, REST API, and responsive UI for a smooth user experience",
      link: "https://github.com/najam0121/Uptoskill_Dashboard1.git",
      tech: [
        "React",
        "Express.js",
        "PostgreSQL",
        "Framer Motion",
        "React Toastify",
      ],
      image: "/todo.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle card on mobile
  const handleCardClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div
      id="projects"
      className="relative z-20 bg-slate-950 flex flex-col items-center justify-center py-2 md:pb-20 text-white"
    >
      {/* Divider Line */}
      <div className="absolute top-0 md:w-300 md:h-[3px] w-100 h-[3px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      {/* Glow BELOW the line */}
      <div
        className="absolute left-1/2 top-[3px] -translate-x-1/2
                   w-[400px] sm:w-[500px] md:w-[700px] lg:w-[1000px] 
                  h-[200px] sm:h-[200px] md:h-[200px] lg:h-[220px]
                  bg-gradient-to-b from-purple-500/30 via-pink-500/10 to-transparent
                  blur-3xl pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Section Title */}
      <h1 className="mt-8 sm:mt-12 md:mt-16 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-white">Projects</h1>

      {/* Project Grid */}
      <div className="mt-2 sm:mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-7xl md:p-5 p-10">
        {projects.map((project, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className="polygon-card w-full border-purple-900/10 hover:border-purple-600/90 
                       transition-all duration-500 border-3 group overflow-hidden relative
                       min-h-[230px] sm:min-h-[320px] md:min-h-[330px] lg:min-h-[380px] bg-gray-900/20 backdrop-blur-sm cursor-pointer"
              onClick={() => handleCardClick(index)} // Mobile toggle
            >
              {/* Project Background Image */}
              {project.image && (
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-fill transition-opacity duration-300
                      ${isActive ? "opacity-70 scale-110" : "opacity-100"}
                      md:group-hover:opacity-70 md:group-hover:scale-110`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t" />
                </div>
              )}

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-purple-500/20 
                  transition-all duration-300
                  ${isActive ? "opacity-100" : "opacity-0"}
                  md:opacity-0 md:group-hover:opacity-100`}
              />

              {/* Title (desktop hover → slides, mobile → click toggle) */}
              <h2
                className={`absolute bottom-0 p-1 rounded-r-lg text-xl font-semibold text-white 
                  bg-purple-500 z-30 transition-transform duration-300
                  ${isActive ? "translate-y-full" : "translate-y-0"}
                  md:translate-y-0 md:group-hover:translate-y-full`}
              >
                {project.title}
              </h2>

              {/* Content */}
              <div
                className={`absolute bottom-0 w-full bg-black/60 backdrop-blur-lg p-2 z-20 
                  transition-all duration-300
                  ${isActive ? "translate-y-0" : "translate-y-full"}
                  md:translate-y-full md:group-hover:translate-y-0`}
              >
                {/* Project Title */}
                <h2 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-3 opacity-90">
                  {project.description}
                </p>

                {/* Tech Stack */}
                {project.tech && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-500/20 text-purple-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Visit Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-12 inline-flex items-center justify-center px-4 py-2
                             bg-purple-500/50 hover:bg-purple-500/90 border hover:border-purple-400
                             text-white text-sm font-medium rounded-3xl
                             transition-all duration-300 active:scale-95
                             transform hover:scale-105"
                  onClick={(e) => e.stopPropagation()} // Prevent toggle on button click
                >
                  Visit
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;

import React from "react";
import Logo from "./Logo";

const Skills = () => {
  const pageTitle = Logo.getPageTitle();
  const skillCategories = Logo.getSkillCategories();

  return (
    <div
      id="skills"
      className="min-h-screen relative overflow-hidden flex items-center justify-center bg-slate-950 z-20"
    >
      {/* Floating animated orbs with existing colors */}

      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full opacity-30 animate-bounce animation-delay-300"></div>

      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full opacity-30 animate-bounce animation-delay-700"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full opacity-25 animate-bounce animation-delay-1000"></div>

      {/* Main content with enhanced container */}
      <div className="relative pt-10 pb-40 text-white w-330">
        <div className="relative border border-purple-500/30 backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] px-8 py-12 md:px-18 md:py-10 rounded-3xl shadow-2xl shadow-purple-500/20 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-purple-500/10 before:via-pink-500/10 before:to-purple-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-1000 before:blur-xl md:mx-8 lg:mx-16 mx-auto">
          {/* Enhanced animated stripe background with existing colors */}

          <div
            className="absolute inset-0 z-0 top-1/5 blur-2xl block"
            style={{
              maskImage: "linear-gradient(transparent, white, transparent)",
              background: `repeating-linear-gradient(45deg, 
                rgba(168, 85, 247, 0.4), 
                rgba(236, 72, 153, 0.5) 12px, 
                rgba(168, 85, 247, 0.2) 20px, 
                transparent 200px)`,
            }}
          ></div>

          {/* Content with enhanced z-index */}
          <div className="relative z-30 w-full ">
            {/* Simplified main heading without glow effects */}
            <div className="text-center mb-5 relative">
              {/* Crazy animated orb positioned BEHIND the page title */}
              <div className="absolute z-0 top-1/2 left-1/2 translate-x-15 -translate-y-1/2 w-20 h-20 animate-bounce animation-delay-300">
  {/* Central star */}
  <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-400/80 to-pink-400/80 animate-pulse shadow-xl shadow-purple-500/50"></div>

  {/* Orbit rings */}
  <div
    className="absolute inset-3 rounded-full border border-purple-300/30 animate-spin"
    style={{ animationDuration: "8s" }}
  ></div>
  <div
    className="absolute inset-1.5 rounded-full border border-pink-300/30 animate-spin"
    style={{ animationDuration: "12s" }}
  ></div>
  <div
    className="absolute inset-0 rounded-full border border-purple-200/20 animate-spin"
    style={{ animationDuration: "16s" }}
  ></div>

  {/* Orbiting satellites */}
  <div
    className="absolute top-2 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-purple-300 animate-spin"
    style={{ animationDuration: "8s", transformOrigin: "0 32px" }}
  ></div>
  <div
    className="absolute top-1 left-1/2 w-1.5 h-1.5 -translate-x-1/2 rounded-full bg-pink-300 animate-spin animation-delay-200"
    style={{ animationDuration: "12s", transformOrigin: "0 40px" }}
  ></div>
  <div
    className="absolute top-0 left-1/2 w-1.5 h-1.5 -translate-x-1/2 rounded-full bg-purple-200 animate-spin animation-delay-400"
    style={{ animationDuration: "16s", transformOrigin: "0 44px" }}
  ></div>

  {/* Trailing particles */}
  <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-purple-400/60 animate-ping animation-delay-100"></div>
  <div className="absolute bottom-5 left-5 w-0.5 h-0.5 rounded-full bg-pink-400/60 animate-ping animation-delay-300"></div>
</div>


              {/* Title with higher z-index to appear above the orb */}
              <h1 className="text-4xl md:text-7xl font-extrabold mb-1 relative z-10">
                <span className="text-white bg-clip-text">{pageTitle}</span>
              </h1>

              {/* Simple static underline */}
              {/* <div className="w-22 h-1  bg-gradient-to-r from-purple-500 to-pink-500 mx-125 rounded-full relative z-10"></div> */}
            </div>

            {/* Enhanced Skills sections */}
            <div className="space-y-10">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="w-full">
                  {/* Simplified category heading without glow */}
                  <div className="flex items-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-semibold mr-4">
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {category.title.split(" ")[0]}
                      </span>
                      {category.title.split(" ").length > 1 && (
                        <span className="text-white ml-1">
                          {category.title.split(" ").slice(1).join(" ")}
                        </span>
                      )}
                    </h2>

                    {/* Static line without animation */}
                    <div className="flex-1 h-px bg-gradient-to-r from-pink-400/50 to-transparent"></div>

                    {/* Static arrow without animation */}
                    <svg
                      className="w-6 h-6 text-pink-400 ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>

                  {/* Enhanced Skills grid with insane hover effects using existing colors */}
                  <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2  ">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group/card w-30 h-32 relative bg-gradient-to-br from-white/[0.12] to-white/[0.04] hover:from-purple-500/[0.25] hover:to-pink-500/[0.15] transition-all duration-500 rounded-3xl p-3 border border-white/[0.15] hover:border-purple-400/60 cursor-pointer transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/40 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-purple-500/20 before:to-pink-500/20 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-br after:from-purple-400/10 after:to-pink-500/10 after:opacity-0 after:blur-xl hover:after:opacity-100 after:transition-all after:duration-700"
                      >
                        {/* Skill icon with enhanced effects */}
                        <div className="flex flex-col items-center space-y-1 relative z-10">
                          <div className="w-18 h-18 rounded-2xl flex items-center justify-center text-4xl group-hover/card:bg-gradient-to-r group-hover/card:from-purple-500/30 group-hover/card:to-pink-500/30 transition-all duration-500 relative overflow-hidden group-hover/card:rotate-6 group-hover/card:scale-110">
                            {/* Icon glow effect with existing colors */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover/card:opacity-20 blur-xl transition-opacity duration-500"></div>
                            <div className="relative z-10 group-hover/card:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)] transition-all duration-500">
                              {skill.icon}
                            </div>

                            {/* Rotating border effect with existing colors */}
                            <div
                              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 opacity-0 group-hover/card:opacity-30 group-hover/card:animate-spin transition-opacity duration-500"
                              style={{ animationDuration: "3s" }}
                            ></div>
                            <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                          </div>

                          {/* Enhanced skill name */}
                          <span className="text-sm md:text-base font-medium text-gray-200/90 group-hover/card:text-white  group-hover/card:bg-gradient-to-r group-hover/card:from-purple-400 group-hover/card:to-pink-400 group-hover/card:bg-clip-text transition-all duration-500 text-center leading-tight">
                            {skill.name}
                          </span>
                        </div>

                        {/* Multiple hover glow effects with existing colors */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/[0.15] to-pink-500/[0.15] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl"></div>
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/[0.1] to-pink-500/[0.1] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        {/* Particle effect simulation with existing colors */}

                        <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover/card:opacity-100 group-hover/card:animate-ping transition-opacity duration-500"></div>
                        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover/card:opacity-100 group-hover/card:animate-ping animation-delay-200 transition-opacity duration-500"></div>
                        <div className="absolute top-1/2 left-2 w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover/card:opacity-100 group-hover/card:animate-ping animation-delay-400 transition-opacity duration-500"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced floating decorative elements with existing colors */}

          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-700 {
          animation-delay: 700ms;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default Skills;

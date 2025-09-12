import React from "react";
import Navbar from "./Navbar"; // adjust path as needed
import Footer from "./Footer";

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content Section */}
      <div className="relative w-full flex-1 flex items-center justify-center p-8 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 z-[-2] h-full w-full bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        {/* Background Grid */}
        <div className="absolute inset-0 z-[-1]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>

        {/* Resume Container */}
        <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden mt-20 flex items-center justify-center">
          <img
            src="/resume.jpeg" // put resume.jpeg in public/ folder
            alt="Resume"
            className="w-full h-auto max-w-full"
          />
        </div>
      </div>

      {/* Footer - Now scrollable with content */}
      <Footer sticky={false} /> 
    </div>
  );
};

export default Resume;

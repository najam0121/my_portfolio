import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import GetInTouch from "./components/GetInTouch.jsx";
import Footer from "./components/Footer.jsx";
import BestServices from "./components/BestServices.jsx";
import TransitionSection from "./components/TransitionSection.jsx";
import Skills from "./components/Skills.jsx";
import Project from "./components/Project.jsx";

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");
    
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        // Scroll to the section
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
          
          // Keep the section in URL instead of cleaning it
          // This allows users to see which section they're viewing
          
        }, 100);
      } else {
        // If section doesn't exist, redirect to home
        navigate("/", { replace: true });
      }
    }
  }, [location.search, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 bg-slate-950">
        <Navbar />
        <Hero id="home" />
        <BestServices id="services" />
        <Skills id="skills" />
        <Project id="projects" />
        <TransitionSection />
        <GetInTouch id="contact" />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

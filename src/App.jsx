import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import Resume from "./../src/components/Resume.jsx";
import ServicesPage from "./components/BestServices.jsx"; // Create this file
import ProjectsPage from "./components/Project.jsx"; // Create this file
import ContactPage from "./components/GetinTouch.jsx" // Create this file
import Navbar from "./components/Navbar.jsx"; // Your navbar component
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Bounce } from "react-toastify";

function App() {
  return (
     <>
      

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;

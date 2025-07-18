import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    emailjs.init("jZuxH4QHg61K5Q2uq");
  }, []);

  return (
    <div className="font-sans bg-gradient-to-b from-gray-900 to-gray-800  text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

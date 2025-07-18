import { motion } from "framer-motion";
import { useState, useEffect } from "react";
console.log(motion);

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Umar Khan";
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Typing forward
      if (!isDeleting && index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        setIndex(index + 1);
        setTypingSpeed(150);
      }
      // Pause at the end before deleting
      else if (!isDeleting && index === fullText.length) {
        setIsDeleting(true);
        setTypingSpeed(2000); // Pause before deleting
      }
      // Deleting
      else if (isDeleting && index > 0) {
        setDisplayText(fullText.substring(0, index - 1));
        setIndex(index - 1);
        setTypingSpeed(75); // Delete faster than typing
      }
      // Pause at empty before retyping
      else if (isDeleting && index === 0) {
        setIsDeleting(false);
        setTypingSpeed(500); // Pause before retyping
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText, typingSpeed]);

  // Cursor blink effect
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 1000);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="pt-36 pb-10 px-4 md:px-8 w-full ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side content */}
        <motion.div
          className="w-full md:w-1/2 text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-xl md:text-2xl font-light mb-2 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hi, I'm Frontend Developer
          </motion.h2>
          <h1 className="text-4xl md:text-[55px] font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent h-[70px] md:h-[80px]">
            {displayText}
            <span
              className={`${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity duration-100`}
            >
              |
            </span>
          </h1>
          <motion.p
            className="text-gray-300 mb-8 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Crafting responsive and intuitive web experiences with modern
            technologies and clean code.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex gap-4"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-all duration-300 inline-block"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-blue-400 hover:bg-blue-400/10 rounded-full text-white font-medium transition-all duration-300 inline-block"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Right side image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-md overflow-hidden">
            <div className="h-[400px] overflow-hidden rounded-4xl shadow-xl">
              <img
                src="/images/hero-image.jpg"
                alt="Muhammad Umar - Frontend Developer"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent rounded-lg"></div>

            {/* Floating tech badges */}
            {/* <motion.div
              className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <span className="text-white text-xs font-medium">
                React Developer
              </span>
            </motion.div> */}

            {/* <motion.div
              className="absolute top-16 left-4 bg-purple-600/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <span className="text-white text-xs font-medium">
                UI/UX Enthusiast
              </span>
            </motion.div>

            <motion.div
              className="absolute bottom-16 right-4 bg-cyan-600/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <span className="text-white text-xs font-medium">
                Tailwind Expert
              </span>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

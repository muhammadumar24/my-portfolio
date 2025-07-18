import { useState } from "react";
import { motion } from "framer-motion";
console.log(motion);

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setEmail("");

        // Reset success message after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      }, 1000);
    }
  };

  // Social media links with animations
  const socialLinks = [
    { icon: <FaGithub size={20} />, href: "#", color: "#333" },
    { icon: <FaTwitter size={20} />, href: "#", color: "#1DA1F2" },
    { icon: <FaLinkedin size={20} />, href: "#", color: "#0077B5" },
    { icon: <FaInstagram size={20} />, href: "#", color: "#E1306C" },
  ];

  // Navigation links
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.footer
      className="bg-gray-900 text-white py-12 mt-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-5"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 10,
              ease: "easeInOut",
            }}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              filter: "blur(50px)",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl font-bold text-white mb-6 md:mb-0 relative"
            whileHover={{ scale: 1.02 }}
          >
            Let's Work Together
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>

          <motion.a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition flex items-center group relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Hire me</span>
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-blue-700 -z-0"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="ml-2 relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
              }}
            >
              <FaArrowRight />
            </motion.div>
          </motion.a>
        </motion.div>

        <motion.hr
          className="border-gray-800 mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-white">
                <span className="text-blue-500">M</span>Umar
              </h3>
            </motion.div>

            <motion.p
              className="text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Frontend developer specializing in building exceptional digital
              experiences. Focused on creating responsive, user-friendly
              interfaces with modern JavaScript frameworks and clean, efficient
              code.
            </motion.p>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition relative group"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.span
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-25 transition-opacity duration-300"
                    style={{ backgroundColor: social.color }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h3
              className="text-xl font-semibold mb-4 relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Navigation
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-blue-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </motion.h3>

            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span className="w-0 h-0.5 bg-blue-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <motion.h3
                className="text-xl font-semibold mb-4 relative inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Contact
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
              </motion.h3>

              <motion.div
                className="flex items-center text-gray-400 mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ x: 5 }}
              >
                <FaPhone className="mr-2 text-blue-400" />
                <p>+92 300 1234567</p>
              </motion.div>

              <motion.div
                className="flex items-center text-gray-400 mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ x: 5 }}
              >
                <FaEnvelope className="mr-2 text-blue-400" />
                <p>muhammadumartanveer45@gmail.com</p>
              </motion.div>

              <motion.div
                className="flex items-center text-gray-400 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ x: 5 }}
              >
                <FaMapMarkerAlt className="mr-2 text-blue-400" />
                <p>Peshawar, Pakistan</p>
              </motion.div>
            </div>

            <div>
              <motion.h3
                className="text-xl font-semibold mb-4 relative inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Newsletter
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
              </motion.h3>

              <form onSubmit={handleSubmit} className="relative">
                {isSubmitted ? (
                  <motion.div
                    className="bg-green-800 text-white px-4 py-3 rounded-md flex items-center justify-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Thanks for subscribing!
                  </motion.div>
                ) : (
                  <motion.div
                    className="flex"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="px-4 py-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-gray-200 w-full"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    <motion.button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000                           xmlns="
                          http:fill="none" //www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          ></path>
                        </svg>
                      ) : (
                        "Subscribe"
                      )}
                    </motion.button>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        <motion.hr
          className="border-gray-800 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className="text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          © {new Date().getFullYear()} MUmar. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

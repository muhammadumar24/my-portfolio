import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
console.log(motion);

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    image: "/images/project1.png",
    description: "React-based admin dashboard with real-time analytics and inventory management",
    tech: ["React", "Redux", "Tailwind CSS"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 2,
    title: "Crypto Portfolio Tracker",
    image: "/images/project2.png",
    description: "Track cryptocurrency investments with price alerts and performance analytics",
    tech: ["Next.js", "Chart.js", "API Integration"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 3,
    title: "Social Media Platform",
    image: "/images/project3.png",
    description: "Full-stack social platform with real-time messaging and content sharing",
    tech: ["React", "Node.js", "Socket.io"],
    link: "#",
    github: "#",
    featured: false
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    image: "/images/project4.png",
    description: "Mobile-responsive workout tracker with progress visualization",
    tech: ["React Native", "Firebase", "Redux"],
    link: "#",
    github: "#",
    featured: false
  },
  {
    id: 5,
    title: "Weather Forecast App",
    image: "/images/project5.png",
    description: "Location-based weather forecasting with interactive maps and alerts",
    tech: ["JavaScript", "Weather API", "Leaflet"],
    link: "#",
    github: "#",
    featured: false
  },
  {
    id: 6,
    title: "Task Management System",
    image: "/images/project6.png",
    description: "Collaborative project management tool with drag-and-drop interface",
    tech: ["React", "TypeScript", "Firebase"],
    link: "#",
    github: "#",
    featured: false
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const Projects = () => {
  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 px-4 md:px-10 bg-gradient-to-b from-gray-900 to-gray-800 font-['Outfit']">
      <div className="max-w-7xl mx-auto">
        {/* Header with animated background */}
        <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm p-8 border border-blue-500/20 shadow-xl">
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-blue-500/10"
                initial={{
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
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
                  filter: "blur(40px)",
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
            </motion.h2>
            
            <motion.p
              className="text-gray-300 text-lg max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              A showcase of my recent work, featuring web applications built with modern technologies.
            </motion.p>
          </div>
        </div>

        {/* Featured Projects - Larger display */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <motion.h3 
              className="text-2xl font-semibold text-white mb-8 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <FaCode />
              </span>
              Featured Projects
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl shadow-xl cursor-pointer bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2, y: -10 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    {/* Overlay that appears on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Project links that appear on hover */}
                    <motion.div
                      className="absolute bottom-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <a 
                        href={project.github} 
                        className="w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300"
                        aria-label="View GitHub Repository"
                      >
                        <FaGithub className="text-lg" />
                      </a>
                      <a 
                        href={project.link} 
                        className="w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300"
                        aria-label="View Live Project"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                    <p className="text-gray-300 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 border border-blue-700/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects - Grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl font-semibold text-white mb-8 flex items-center gap-2"
            variants={itemVariants}
          >
            <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
              <FaCode />
            </span>
            All Projects
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, ) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 h-full flex flex-col"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Overlay with tech stack */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-2 py-1 rounded-full bg-blue-600/80 text-white backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <a 
                        href={project.github} 
                        className="w-8 h-8 rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300"
                        aria-label="View GitHub Repository"
                      >
                        <FaGithub className="text-sm" />
                      </a>
                      <a 
                        href={project.link} 
                        className="w-8 h-8 rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300"
                        aria-label="View Live Project"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <motion.a
                    href={project.link}
                    className="inline-flex items-center bg-blue-600/80 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition overflow-hidden text-sm self-start"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Project</span>
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </motion.a>
                                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

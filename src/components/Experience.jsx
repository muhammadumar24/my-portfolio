import { motion } from "framer-motion";
import { useRef } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaChartBar,
  FaSmile,
  FaEye,
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaChevronDown,
  FaCode,
  FaLaptopCode,
  FaServer,
} from "react-icons/fa";

const Experience = () => {
  const scrollRef = useRef(null);

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechSolutions Inc.",
      period: "2022 - Present",
      icon: <FaReact />,
      color: "#61DAFB",
      skills: ["React", "Next.js", "TypeScript", "GraphQL"],
      description:
        "Leading frontend development for enterprise web applications using React, Next.js, and TypeScript. Implemented responsive designs and optimized performance across multiple client projects. Collaborated with UX designers to transform wireframes into functional interfaces.",
      achievements: [
        "Reduced load time by 40% through code optimization",
        "Implemented CI/CD pipeline for frontend deployments",
        "Mentored junior developers and established coding standards",
      ],
    },
    {
      title: "Web Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      icon: <FaLaptopCode />,
      color: "#A855F7",
      skills: ["JavaScript", "HTML5", "CSS3", "WordPress"],
      description:
        "Developed and maintained client websites using JavaScript, HTML5, and CSS3. Built custom WordPress themes and plugins to meet specific client requirements. Implemented responsive designs ensuring cross-browser compatibility.",
      achievements: [
        "Delivered 15+ client projects with 100% satisfaction rate",
        "Improved site performance scores by an average of 35%",
        "Created reusable component library for faster development",
      ],
    },
    {
      title: "Junior Developer",
      company: "WebCraft Studios",
      period: "2019 - 2020",
      icon: <FaServer />,
      color: "#22C55E",
      skills: ["Node.js", "Express", "MongoDB", "JavaScript"],
      description:
        "Started as a junior developer working on both frontend and backend technologies. Assisted in developing web applications using JavaScript frameworks. Gained experience with Node.js and Express for backend development.",
      achievements: [
        "Contributed to 5 major application releases",
        "Developed RESTful API endpoints for mobile applications",
        "Implemented automated testing for critical application features",
      ],
    },
  ];

  const stats = [
    {
      value: "30+",
      label: "Projects Completed",
      icon: <FaChartBar />,
      color: "#3B82F6",
    },
    {
      value: "25+",
      label: "Happy Clients",
      icon: <FaSmile />,
      color: "#F59E0B",
    },
    {
      value: "5K+",
      label: "GitHub Stars",
      icon: <FaGithub />,
      color: "#EC4899",
    },
  ];

  const skills = [
    { name: "REACT", icon: <FaReact />, color: "#61DAFB" },
    { name: "JAVASCRIPT", icon: <FaJs />, color: "#F7DF1E" },
    { name: "NEXT.JS", icon: <FaReact />, color: "#000000" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "NODE.JS", icon: <FaNodeJs />, color: "#339933" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 md:px-10 bg-gradient-to-b from-gray-900 to-gray-800 font-['Outfit']"
      ref={scrollRef}
    >
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
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Experience
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-300 text-lg max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              My journey as a developer has equipped me with a diverse skill set
              and experience across various technologies and industries.
            </motion.p>
          </div>
        </div>

        {/* Timeline Experience - Redesigned */}
        <div className="mb-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-16 last:mb-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left side - Timeline indicator */}
                <div className="md:w-1/3">
                  <div className="sticky top-24 bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-lg overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="absolute inset-0 bg-gradient-to-br rounded-2xl"
                        style={{
                          background: `radial-gradient(circle at 30% 30%, ${exp.color}30, transparent 70%)`,
                        }}
                      ></div>
                    </div>

                    <div className="relative">
                      <div
                        className="w-16 h-16 rounded-2xl bg-gray-700/50 flex items-center justify-center text-3xl mb-4"
                        style={{ color: exp.color }}
                      >
                        {exp.icon}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>

                      <div className="flex items-center mb-3 gap-2">
                        <FaBriefcase className="text-gray-400" />
                        <p className="text-gray-300">{exp.company}</p>
                      </div>

                      <div className="flex items-center mb-4 gap-2">
                        <FaCalendarAlt className="text-gray-400" />
                        <p className="text-gray-400">{exp.period}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-full text-white"
                            style={{
                              backgroundColor: `${exp.color}40`,
                              color: exp.color,
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="md:w-2/3">
                  <motion.div
                    className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-700/50 h-full"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                      {exp.description}
                    </p>

                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${exp.color}30` }}
                      >
                        <FaChartBar style={{ color: exp.color }} />
                      </span>
                      Key Achievements
                    </h4>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <span className="text-green-400 mt-1">•</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section - Redesigned */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-2xl font-bold text-white mb-10 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              By the Numbers
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-700/50 overflow-hidden group"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${stat.color}, transparent 70%)`,
                  }}
                ></div>

                <motion.div
                  className="relative z-10 flex justify-center mb-6 text-5xl"
                  style={{ color: stat.color }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    delay: index * 0.1,
                  }}
                >
                  {stat.icon}
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <p
                    className="text-6xl font-bold mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-gray-300 font-medium text-lg">
                    {stat.label}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section - Redesigned */}
        <motion.div
          className="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-10 border border-gray-700/50 shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 rounded-2xl"></div>
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full opacity-5"
                style={{
                  backgroundColor: skill.color,
                  width: "150px",
                  height: "150px",
                  left: `${(i * 20) % 80}%`,
                  top: `${(i * 15) % 70}%`,
                  filter: "blur(40px)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.05, 0.1, 0.05],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8 + i,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-10 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Technical Skills
              </span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center gap-2 group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className="text-4xl p-4 rounded-xl bg-gray-700/30 backdrop-blur-sm border border-gray-600/40 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <p className="text-white text-sm font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

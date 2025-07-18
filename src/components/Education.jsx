import { motion } from "framer-motion";
console.log(motion);

import { 
  FaGraduationCap, 
  FaSchool, 
  FaCalendarAlt, 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs 
} from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Software",
      institution: "Virtual University of Pakistan",
      period: "2024 to 2028",
      description:
        "Completed my Bachelor's degree with a focus on web development and software engineering. Gained comprehensive knowledge in algorithms, data structures, and modern programming paradigms. Developed multiple full-stack applications as part of coursework and personal projects. Participated in coding competitions and hackathons, enhancing my problem-solving abilities. This education provided me with a strong theoretical foundation while allowing me to build practical skills through hands-on projects.",
    },
    {
      degree: "FSC In pre-Engr",
      institution: "Science College Kohat",
      period: "2022 - 2024",
      description:
        "Completed my FSC in pre-Engr with distinction. During this time, I developed a solid foundation in programming concepts and logical thinking. Gained hands-on experience with basic coding algorithms and computational problem-solving. This education helped me build a strong technical base early in my journey and sparked my interest in web development. The curriculum's focus on mathematics and logic helped me develop structured approaches to solving complex problems.",
    },
  ];

  const skills = [
    { name: "Frontend Development", percentage: 95, color: "#3B82F6" },
    { name: "React.js", percentage: 90, color: "#61DAFB" },
    { name: "JavaScript", percentage: 92, color: "#F7DF1E" },
    { name: "Responsive Design", percentage: 97, color: "#38B2AC" },
    { name: "Next.js", percentage: 85, color: "#000000" },
    { name: "Node.js", percentage: 80, color: "#339933" },
  ];

  const techStack = [
    "REACT",
    "JAVASCRIPT",
    "NEXT.JS",
    "TAILWIND CSS",
    "NODE.JS",
  ];

  return (
    <section id="education" className="py-16 px-4 md:px-10 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-blue-400 text-2xl font-bold uppercase mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="h-[5px] bg-gradient-to-r from-blue-500 to-purple-500 w-full mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        ></motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>

              {/* Content */}
              <div className="pl-8 border-l-2 border-blue-400/30">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {edu.degree}
                </h3>
                <div className="flex items-center mb-3">
                  <FaGraduationCap className="text-blue-400 mr-2" />
                  <p className="text-gray-300">{edu.institution}</p>
                </div>
                <div className="flex items-center mb-4">
                  <FaCalendarAlt className="text-blue-400 mr-2" />
                  <p className="text-gray-400">{edu.period}</p>
                </div>
                <p className="text-gray-300 leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h4 className="text-white font-medium mb-3">{skill.name}</h4>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="h-2.5 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                ></motion.div>
              </div>
              <p className="text-right mt-2 text-2xl font-bold" style={{ color: skill.color }}>
                {skill.percentage}%
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          <motion.div
            className="p-6 bg-gray-800/30 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-4">
              <FaReact className="text-blue-400 text-5xl" />
            </div>
            <p className="text-gray-300 font-medium">Frontend Specialist</p>
          </motion.div>

          <motion.div
            className="p-6 bg-gray-800/30 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-center mb-4">
              <FaJs className="text-yellow-400 text-5xl" />
            </div>
            <p className="text-gray-300 font-medium">JavaScript Expert</p>
          </motion.div>

          <motion.div
            className="p-6 bg-gray-800/30 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex justify-center mb-4">
              <FaNodeJs className="text-green-400 text-5xl" />
            </div>
            <p className="text-gray-300 font-medium">Full Stack Developer</p>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-wrap gap-3 justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {techStack.map((skill, index) => (
            <motion.span
              key={index}
              className="bg-gray-800/70 border border-blue-500/50 px-4 py-2 rounded-full text-blue-400 text-sm font-medium"
              whileHover={{
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                scale: 1.05,
              }}
              transition={{ duration: 0.2 }}
            >
              {skill}
              {index < techStack.length - 1 && <span className="ml-3 mr-0 text-gray-500">•</span>}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
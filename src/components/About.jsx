import { motion } from "framer-motion";

const skills = [
  {
    name: "React.js",
    description: "Frontend development with modern React",
    percentage: 95,
    color: "#61DAFB"
  },
  {
    name: "Next.js",
    description: "Server-side rendering & static generation",
    percentage: 90,
    color: "#4F46E5"
  },
  {
    name: "Tailwind CSS",
    description: "Responsive UI with utility-first approach",
    percentage: 98,
    color: "#38B2AC"
  }
];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  })
};

const About = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-10 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-blue-400 text-2xl font-bold uppercase mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="h-[5px] bg-gradient-to-r from-blue-500 to-purple-500 w-full mb-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          style={{ transformOrigin: "left" }}
          viewport={{ once: true }}
        />

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10">
          {/* Left content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.p
              className="text-gray-300 mb-6 text-lg leading-relaxed"
              variants={fadeUp}
              custom={0}
            >
              As a <span className="text-blue-400 font-semibold">Frontend Developer</span> with a passion for creating seamless user experiences, I specialize in building responsive and interactive web applications using modern JavaScript frameworks. My journey in web development began with a curiosity about how digital interfaces shape our daily interactions.
            </motion.p>

            <motion.p
              className="text-gray-300 mb-6 text-lg leading-relaxed"
              variants={fadeUp}
              custom={1}
            >
              I excel in translating design concepts into clean, efficient code that performs flawlessly across devices. My approach combines <span className="text-blue-400 font-semibold">technical expertise with creative problem-solving</span>, allowing me to build solutions that are both functional and visually appealing.
            </motion.p>

            <motion.p
              className="text-gray-300 text-lg leading-relaxed"
              variants={fadeUp}
              custom={2}
            >
              Beyond coding, I'm committed to staying at the forefront of web technologies and best practices. I believe in writing maintainable code that scales with project needs and collaborating effectively with cross-functional teams to deliver exceptional digital experiences.
            </motion.p>
          </motion.div>

          {/* Skill cards */}
          <div className="space-y-5">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-md shadow-lg border border-gray-700"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="font-bold text-xl text-white">{skill.name}</h3>
                <p className="text-sm text-gray-400">{skill.description}</p>

                <div className="mt-3">
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(to right, ${skill.color}, #8B5CF6)`
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <p
                    className="text-right mt-1 text-sm font-bold"
                    style={{ color: skill.color }}
                  >
                    {skill.percentage}%
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
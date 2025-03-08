import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  FaPython,
  FaReact,
  FaJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiKubernetes } from "react-icons/si";

export default function About() {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Slide-in variants for left and right
  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-black opacity-80"></div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center text-white mb-8"
        >
          About Me
        </motion.h2>

        {/* Content Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInLeft}
          viewport={{ once: true }}
          className="bg-black/50 backdrop-blur-lg rounded-lg shadow-xl p-8 max-w-3xl mx-auto border border-purple-500/30"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a software developer with over three years of experience
            specializing in backend development using Django. I have designed
            and optimized RESTful APIs, managed databases, and implemented
            secure authentication and authorization mechanisms. My expertise in
            Django REST Framework has contributed to building scalable and
            efficient web applications. In addition to backend development, I
            have a foundational understanding of React.js for frontend
            integration and have worked closely with frontend teams to enhance
            user experiences. My experience also includes deploying applications
            using Docker, Kubernetes, and AWS, as well as automating workflows
            through CI/CD pipelines with GitHub Actions.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12"
        >
          <motion.h3
            initial="hidden"
            whileInView="visible"
            variants={slideInRight}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-center text-white mb-6"
          >
            Skills & Expertise
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Python", icon: <FaPython className="w-6 h-6" /> },
              { name: "React", icon: <FaReact className="w-6 h-6" /> },
              { name: "JavaScript", icon: <FaJs className="w-6 h-6" /> },
              { name: "Django/DRF", icon: <SiDjango className="w-6 h-6" /> },
              {
                name: "TailwindCSS",
                icon: <SiTailwindcss className="w-6 h-6" />,
              },
              { name: "Linux", icon: <FaLinux className="w-6 h-6" /> },
              {
                name: "Git",
                icon: <FaGitAlt className="w-6 h-6" />,
              },
              {
                name: "Docker | Kubernetes | AWS",
                icon: <FaDocker className="w-6 h-6" />,
              },
              { name: "CI/CD", icon: <SiKubernetes className="w-6 h-6" /> },
              { name: "API Testing", icon: <FaAws className="w-6 h-6" /> },
              { name: "AI/ML", icon: <FaPython className="w-6 h-6" /> },
            ].map((skill, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm sm:text-base flex items-center gap-2 hover:shadow-glow transition-all"
              >
                {skill.icon}
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}

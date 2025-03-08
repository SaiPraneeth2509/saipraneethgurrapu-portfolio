import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "ShopNow",
      description:
        "ShopNow is an e-commerce platform built with React for the frontend. It provides a user-friendly interface for browsing products, managing a shopping cart, and completing purchases.",
      technologies: ["React", "TailwindCSS", "Django REST Framework"],
      demoLink: "https://saipraneeth2509.github.io/shopnow-app-frontend/",
      githubLink: "https://github.com/SaiPraneeth2509/shopnow-app-frontend",
      image: "/assets/ShopNow.jpg",
    },
    {
      title: "TA Management System",
      description:
        "This is a web-based application designed to manage Teaching Assistant (TA) applications and assignments for Florida Atlantic University's Computer Science Department. The system features role-based dashboards and functionalities tailored for TA Applicants, Department Staff, TA Committee Members, and Instructors.",
      technologies: ["Django", "SQLite", "Bootstrap"],
      demoLink: "#",
      githubLink: "https://github.com/SaiPraneeth2509/TA-Management-System",
      image: "/assets/TA.png",
    },
    {
      title: "Food Recipe App",
      description:
        "A simple application that allows users to search for different types of food and view details like ingredients, recipes. The app fetches data from an API and displays it in a clean, user-friendly interface.",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      demoLink: "#",
      githubLink: "https://github.com/SaiPraneeth2509/FoodRecipeApp",
      image: "/assets/foodrecipe.jpg",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-black opacity-80"></div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
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

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-center text-white mb-8"
        >
          Projects
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-white/20"
              onClick={() => openModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-300 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-500/20 text-purple-500 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg max-w-2xl w-full border border-white/20"
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <p className="mt-2 text-gray-300">
                {selectedProject.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-500/20 text-purple-500 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex space-x-4">
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:underline"
                >
                  GitHub
                </a>
              </div>
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

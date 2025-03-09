import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = [
    {
      name: "Google Cybersecurity Certificate",
      organization: "Coursera",
      date: "Dec 2024",
      image: "/saipraneethgurrapu-portfolio/assets/GoogleCybersecurity.jpg",
    },
    {
      name: "Python Basic",
      organization: "HackerRank",
      date: "Oct 2024",
      image: "/saipraneethgurrapu-portfolio/assets/python_basic.jpg",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (cert) => {
    setSelectedCertificate(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <section
      id="certifications"
      className="py-20 bg-black relative overflow-hidden"
    >
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
          Certifications
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow border border-white/20"
              onClick={() => openModal(cert)}
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                <p className="mt-2 text-gray-300">{cert.organization}</p>
                <p className="mt-2 text-gray-400">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg max-w-2xl w-full border border-white/20"
          >
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.name}
              className="w-full h-auto rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">
                {selectedCertificate.name}
              </h3>
              <p className="mt-2 text-gray-300">
                {selectedCertificate.organization}
              </p>
              <p className="mt-2 text-gray-400">{selectedCertificate.date}</p>
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

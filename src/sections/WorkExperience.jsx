import { motion } from "framer-motion";

export default function WorkExperience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Marolix Technology Solutions Pvt Ltd",
      duration: "Aug 2020 - Dec 2023, 3 yrs 5 mos",
      responsibilities: [
        "Developed and launched 8 customer-facing web applications using Django and DRF, reducing average page load time by 45% and increasing user engagement by 30%.",
        "Engineered a microservices architecture that scaled to handle 50,000 daily active users, resulting in 99.9% system availability.",
        "Implemented automated testing pipeline that increased code coverage from 65% to 92%, reducing production bugs by 40%.",
        "Optimized database queries and implemented caching strategies that reduced API response time.",
        "Automated CI/CD pipelines with GitHub Actions for efficient deployments.",
        "Deployed applications on AWS, Docker, Kubernetes, and handled CI/CD pipeline configurations for automated deployments.",
      ],
      logo: "https://media.licdn.com/dms/image/v2/C510BAQFDnUyVJwVuuQ/company-logo_200_200/company-logo_200_200/0/1631405316542/marolix_technology_logo?e=2147483647&v=beta&t=7-1MmVmh7rDltcKEg3c9z2elRZ50aJywUnZFS1RiFtI", // Replace with actual logo URL
    },
  ];

  return (
    <section
      id="work-experience"
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
          Work Experience
        </motion.h2>

        <div className="mt-8 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-6 border border-white/20"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.duration}</p>
                </div>
              </div>
              <ul className="mt-4 list-disc list-inside">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i} className="text-gray-300">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

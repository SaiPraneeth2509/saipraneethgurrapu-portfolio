import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import Typewriter from "typewriter-effect";

export default function Hero() {
  useEffect(() => {
    const heroText = document.querySelector(".hero-text");
    if (heroText) {
      heroText.innerHTML = heroText.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    }

    tippy("[data-tippy-content]", {
      theme: "light",
      placement: "bottom",
    });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-black opacity-80"></div>

      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

      <div className="text-center text-white relative z-10">
        <div className="relative w-40 h-40 mx-auto mb-6">
          <img
            src="/saipraneethgurrapu-portfolio/assets/digital-passport.jpg"
            alt="Profile"
            className="w-full h-full rounded-full border-4 border-purple-500 shadow-lg"
          />
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-purple-500 blur-lg opacity-30 animate-pulse"></div>
        </div>

        {/* Animated Text */}
        <h1 className="text-5xl font-bold hero-text">
          Hi, I'm <span className="text-purple-500">Sai Praneeth Gurrapu</span>
        </h1>

        <div className="mt-4 text-xl text-gray-300">
          A passionate developer skilled in{" "}
          <span className="text-purple-500">
            <Typewriter
              options={{
                strings: ["Web Development"],
                autoStart: true,
                loop: true,
                loopCount: Infinity,
                deleteSpeed: "natural",
                pauseFor: 1000,
              }}
            />
          </span>
        </div>

        {/* Social Icons with Tooltips and Animations */}
        <div className="mt-8 flex justify-center space-x-6">
          <motion.a
            href="https://github.com/SaiPraneeth2509"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-400 transition-colors"
            data-tippy-content="GitHub"
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="w-10 h-10" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/saipraneethgurrapu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-400 transition-colors"
            data-tippy-content="LinkedIn"
            whileHover={{ scale: 1.2, rotate: -15 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="w-10 h-10" />
          </motion.a>
        </div>
      </div>

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

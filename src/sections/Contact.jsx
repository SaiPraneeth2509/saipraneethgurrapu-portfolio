import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, "success", or "error"
  const controls = useAnimation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log("Form Data being sent:", formData); // Debug form data

      const response = await emailjs.send(
        serviceId,
        templateId,
        formData,
        publicKey
      );

      console.log("EmailJS Response:", response); // Debug EmailJS response

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      controls.start({ opacity: 1, y: 0 }); // Show feedback message
      setTimeout(() => {
        setSubmitStatus(null); // Hide feedback message after 3 seconds
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
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
          Contact Me
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 max-w-2xl mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mt-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 mt-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {/* Feedback Message */}
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            className={`mt-4 text-center ${
              submitStatus === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {submitStatus === "success"
              ? "Message sent successfully!"
              : "Failed to send message. Please try again."}
          </motion.div>
        )}
      </div>
    </section>
  );
}

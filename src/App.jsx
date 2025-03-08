import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import WorkExperience from "./sections/WorkExperience";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Sai Praneeth Gurrapu</div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="work-experience"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
            >
              Work Experience
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="certifications"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
            >
              Certifications
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

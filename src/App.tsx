import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";
import { portfolioData } from "./context/portfolioData";
import {FallingLetters} from "./components/Background";

function App() {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Falling Letters Background */}
      <FallingLetters />

      {/* Main Content (Ensuring it's on top) */}
      <div className="relative z-9 min-h-screen text-white p-6">
        <header className="text-center my-12">
          <h1 className="text-4xl font-bold">{portfolioData.name}</h1>
          <p className="text-xl text-gray-400">{portfolioData.role}</p>
        </header>

        <section className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-300">{portfolioData.about}</p>
        </section>

        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 bg-opacity-70 p-4 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-400 hover:underline mt-2 block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800 px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="flex justify-center gap-6 text-2xl">
            <a href={portfolioData.contact.github} target="_blank">
              <FaGithub className="hover:text-blue-400" />
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank">
              <FaLinkedin className="hover:text-blue-400" />
            </a>
            <a href={`mailto:${portfolioData.contact.email}`}>
              <FaEnvelope className="hover:text-blue-400" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

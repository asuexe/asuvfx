import { motion, useAnimation, useMotionValue } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";
import { portfolioData } from "./context/portfolioData";
import { FallingLetters } from "./components/Background";
import profilePic from "./assets/1706681387021.jpeg";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { loop } from "three/tsl";

function App() {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0); // Tracks the scroll position
  const [expanded, setExpanded] = useState<number | null>(null); // Tracks which project is expanded

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: [x.get(), "-100%"], // Continue from the last position
        transition: {
          ease: "linear",
          duration: 60, // Adjust scrolling speed
          repeat: Infinity,
          repeatType : "loop"
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  return (
    <div className="relative w-screen min-h-screen bg-black overflow-x-hidden">
      <FallingLetters />

      <div className="relative z-9 min-h-screen text-white p-6">
        {/* Profile Section */}
        <header className="flex items-center justify-center my-12 text-center gap-6">
          <img 
            src={profilePic} 
            alt="Profile" 
            className="w-24 h-24 rounded-full border-2 border-gray-500 shadow-lg"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">{portfolioData.name}</h1>
            <p className="text-xl text-gray-400">{portfolioData.role}</p>
          </div>
        </header>

        {/* About Section */}
        <section className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-300">{portfolioData.about}</p>
        </section>

        {/* Infinite Scrolling Projects */}
        <section className="w-full py-10 overflow-hidden">
          <h2 className="text-2xl font-semibold text-center mb-4">Projects</h2>
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-6 w-max"
              animate={controls}
              style={{ x }} // Connect motion value to the animation
              onMouseEnter={() => setIsPaused(true)} // Pause scrolling on hover
              onMouseLeave={() => {
                setIsPaused(false);
                const lastX = parseFloat(document.documentElement.style.getPropertyValue("--last-x") || "0");
                x.set(lastX); // Resume from last position
              }}
              onUpdate={(latest) => {
                document.documentElement.style.setProperty("--last-x", latest.x.toString()); // Store last X position
              }}
            >
              {/* Creates a seamless looping effect */}
              {portfolioData.projects.concat(portfolioData.projects).map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 bg-opacity-70 p-4 rounded-lg shadow-lg min-w-[300px]"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  
                  {/* Truncated description with "Read More" */}
                  <p className="text-gray-400">
                    {expanded === index
                      ? project.description
                      : `${project.description.substring(0, 50)}...`} {/* Show only first 100 chars */}
                  </p>
                  
                  <button
                    onClick={() => setExpanded(expanded === index ? null : index)}
                    className="text-blue-400 hover:underline text-sm"
                  >
                    {expanded === index ? "Read Less" : "Read More"}
                  </button>

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
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
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

        {/* Contact Section */}
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
      <Footer />
    </div>
  );
}

export default App;

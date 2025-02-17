import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../context/portfolioData";
import profilePic from "./../assets/1706681387021.jpeg";
import { FallingLetters } from "../components/Background";
import InfiniteProjectScroll from "../components/projects";

export const Home =() => {

  return (

    <div className="relative w-screen min-h-screen bg-black overflow-x-hidden scrollbar-hide">
      
      <FallingLetters />
      
      <div className="relative z-9 min-h-screen text-white p-6 w-s">
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
          <InfiniteProjectScroll/>
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
    </div>
  );
}
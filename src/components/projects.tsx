import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../context/portfolioData";

const InfiniteProjectScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const scroll = () => {
      if (!isPaused && scrollRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollLeft = 0; // Loop back to start
        } else {
          scrollRef.current.scrollLeft += 1; // Smooth scrolling
        }
      }
    };

    const interval = setInterval(scroll, 20); // Adjust scrolling speed

    return () => clearInterval(interval);
  }, [isPaused]);

  // Toggle expansion for a specific project
  const toggleExpansion = (index: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle only the clicked project
    }));
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex w-full overflow-x-auto scrollbar-hide gap-4 px-4 py-6"
        onMouseEnter={() => setIsPaused(true)} // Pause scrolling on hover
        onMouseLeave={() => setIsPaused(false)} // Resume scrolling on leave
      >
        {[...Array(2)].map((_, loopIndex) => (
          <motion.div key={loopIndex} className="flex gap-4">
            {portfolioData.projects.map((project, index) => {
              const isExpanded = expandedProjects[index]; // Check if this project is expanded

              return (
                <div
                  key={index}
                  className={`w-96 bg-gray-800 text-white flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transition-all duration-300 ${
                    isExpanded ? "h-auto" : "h-32"
                  }`}
                >
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-400 text-sm text-center">
                    {isExpanded
                      ? project.description
                      : `${project.description.substring(0, 50)}...`}
                  </p>
                  <button
                    onClick={() => toggleExpansion(index)}
                    className="text-blue-400 hover:underline text-sm mt-1"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 mt-2 hover:underline"
                  >
                    View Project
                  </a>
                </div>
              );
            })}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteProjectScroll;

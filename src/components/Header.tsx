import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profilePic from "./../assets/1706681387021.jpeg";
import { Link } from "react-router-dom";
import { portfolioData } from "../context/portfolioData";
import { scrollToTop } from "../functions/portfolio";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 160);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-[rgb(17,24,39)] text-white p-4 shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isScrolled ? { opacity: 1, x: "-30px", scale: 0.7 } : { opacity: 0 }}
          transition={{ duration: 0.65 }}
          className="flex items-center gap-3"
        >
          <motion.img
            src={profilePic}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-500 shadow-lg"
            animate={isScrolled ? { opacity: 1 } : { opacity: 0 }}
          />
          <button onClick={scrollToTop}>
            <motion.h1
              className="text-2xl font-bold cursor-pointer"
              animate={isScrolled ? { opacity: 1 } : { opacity: 0 }}
            >
              {portfolioData.name}
            </motion.h1>
          </button>
        </motion.div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/projects" className="hover:underline">Projects</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

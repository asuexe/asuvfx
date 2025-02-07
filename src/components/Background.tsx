
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { generateRandomLetter } from "../functions/fallingletters";

export const FallingLetters = () => {
  const [letters, setLetters] = useState<{ id: number; letter: string; x: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate multiple letters at once (e.g., 3 letters)
      const newLetters = Array.from({ length: 3 }, () => ({
        id: Date.now() + Math.random(),
        letter: generateRandomLetter(),
        x: Math.random() * 100, // Random X position (0 to 100vw)
      }));
      setLetters((prev) => [...prev, ...newLetters]);

      // Remove old letters after animation ends
      setTimeout(() => {
        setLetters((prev) => prev.slice(-50)); // Keep only the last 50 letters (adjust as needed)
      }, 10000); // Increased timeout to match longer animation duration
    }, 500); // Reduced frequency of letter generation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden">
      {letters.map(({ id, letter, x }) => (
        <motion.span
          key={id}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: "120vh", opacity: 1 }}
          transition={{ duration: 7, ease: "easeInOut", repeat:Infinity }} // Increased duration for slower falling
          className="absolute text-green-400 text-2xl font-mono"
          style={{ left: `${x}vw` }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};
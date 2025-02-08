import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { generateRandomLetter } from "../functions/fallingletters";

export const FallingLetters = () => {
  const [letters, setLetters] = useState<{ id: number; letter: string; x: number; delay: number }[]>([]);

  // Function to generate a non-overlapping X position
  const getNonOverlappingX = (existingX: number[], minSpacing = 5) => {
    let x: number;
    let attempts = 0;
    do {
      x = Math.random() * 100; // Random X position (0 to 100vw)
      attempts++;
    } while (existingX.some((pos) => Math.abs(pos - x) < minSpacing) && attempts < 10); // Ensure spacing

    return x;
  };

  useEffect(() => {
    let count = 0; // To introduce staggered delays

    const interval = setInterval(() => {
      setLetters((prev) => {
        const existingX = prev.map((l) => l.x); // Get all active X positions

        // Generate one letter at a time with increasing delay
        const newLetter = {
          id: Date.now() + Math.random(),
          letter: generateRandomLetter(),
          x: getNonOverlappingX(existingX, 6),
          delay: count * 0.000000001, // Staggered delay (adjustable)
        };

        count++;
        return [...prev, newLetter];
      });

      // Remove old letters when they reach 100vh
      setTimeout(() => {
        setLetters((prev) => prev.filter((letter) => letter.id !== prev[0]?.id)); 
      }, 7000); // Matches animation duration
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden">
      <AnimatePresence>
        {letters.map(({ id, letter, x, delay }) => (
          <motion.span
            key={id}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: "120vh", opacity: 1 }}
            exit={{ opacity: 0 }} // Disappear on exit
            transition={{
              duration: 6,
              ease: "easeInOut",
              delay: delay, // Staggered falling delay
            }}
            className="absolute text-green-400 text-2xl font-mono"
            style={{ left: `${x}vw` }}
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

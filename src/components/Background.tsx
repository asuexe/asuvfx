import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { generateRandomLetter } from "../functions/fallingletters";

export const FallingLetters = () => {
  const [letters, setLetters] = useState<{ id: number; letter: string; x: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLetters((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          letter: generateRandomLetter(),
          x: Math.random() * 100, // Random X position (0 to 100vw)
        },
      ]);

      // Remove old letters after animation ends
      setTimeout(() => {
        setLetters((prev) => prev.slice(5));
      }, 3000);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 bg-black overflow-hidden -z-10">
      {letters.map(({ id, letter, x }) => (
        <motion.span
          key={id}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: "100vh", opacity: 1 }}
          transition={{ duration: 3, ease: "linear" }}
          className="absolute text-green-400 text-2xl font-mono"
          style={{ left: `${x}vw` }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};


export const generateRandomLetter = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters[Math.floor(Math.random() * letters.length)];
};

export const getNonOverlappingX = (existingX: number[], minSpacing = 5) => {
    let x: number;
    let attempts = 0;
    do {
      x = Math.random() * 100; // Random X position (0 to 100vw)
      attempts++;
    } while (existingX.some((pos) => Math.abs(pos - x) < minSpacing) && attempts < 10); // Ensure spacing

    return x;
  };
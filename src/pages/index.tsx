import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

// Define types for firework particles
type Firework = {
  x: number;
  y: number;
  id: number;
};
const particlesArray = Array.from({ length: 15 }); // For fireworks and hearts

export default function Home() {
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event;
      setCursorPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newFirework = { x, y, id: Date.now() };

    setFireworks((prev) => [...prev, newFirework]);

    // Remove the firework after animation
    setTimeout(() => {
      setFireworks((prev) => prev.filter((fw) => fw.id !== newFirework.id));
    }, 1000); // Match animation duration
  };

  return (
    <div
      onClick={handleClick}
      className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Gradient Stripes */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-300 via-pink-500 to-yellow-300" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-300 via-purple-500 to-yellow-300" />

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative flex flex-col items-center text-center"
      >
       <motion.h1
  className="text-4xl font-bold relative"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2 }}
>
  <span
    className="relative"
    style={{
      display: "inline-block",
    }}
  >
    {/* Base Text */}
    {[..."We are working on something..."].map((letter, index) => (
      <motion.span
        key={index}
        className="relative"
        style={{
          display: "inline-block",
          textShadow: "0 0 10px #ff00ff, 0 0 20px #ff00ff", // Glowing text effect
        }}
        animate={{
          textShadow: [
            "0 0 10px #ff00ff, 0 0 20px #ff00ff", // Initial glow
            "0 0 20px #00ffff, 0 0 40px #00ffff", // Transition glow
            "0 0 10px #ff00ff, 0 0 20px #ff00ff", // Back to initial
          ],
          color: ["#FFFFFF", "#FFD700", "#FFFFFF"], // Text color transitions
          scale: [1, 1.05, 1], // Subtle zoom effect
        }}
        transition={{
          duration: 1.5, // Length of one pulse
          repeat: Infinity, // Infinite pulsing
          ease: "easeInOut", // Smooth easing
          delay: index * 0.05, // Stagger for each letter
        }}
      >
        {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
      </motion.span>
    ))}
  </span>
</motion.h1>

        <p className="text-lg mt-2">Give us some time</p>
      </motion.div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm">
        <Link href="https://dejny.eu" className="cursor-pointer">
          <p>Dejny.eu</p>
        </Link>
      </footer>

      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 bg-purple-500 rounded-full pointer-events-none z-50"
        style={{
          top: cursorPosition.y - 12,
          left: cursorPosition.x - 12,
        }}
      />

      {/* Render Fireworks */}
      {fireworks.map((fw) => (
        <motion.div
          key={fw.id}
          className="absolute"
          style={{
            top: fw.y - 3,
            left: fw.x - 3,
          }}
        >
          {particlesArray.map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-2 h-2 rounded-full"
              initial={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                backgroundColor: "#ff00ff", // Start with purple
              }}
              animate={{
                opacity: [1, 1],
                scale: [1, 0.5],
                x:
                  Math.cos((index / particlesArray.length) * 2 * Math.PI) * 100,
                y:
                  Math.sin((index / particlesArray.length) * 2 * Math.PI) * 100,
                backgroundColor: ["#ff00ff", "#FFC0CB", "#ffff00"], // Purple to cyan to yellow
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
}

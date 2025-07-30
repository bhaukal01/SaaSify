import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button"; // Make sure your Button component is as before!

const blobVariants = {
  initial: { scale: 0, opacity: 0, y: 80 },
  animate: {
    scale: 1,
    opacity: 0.3,
    y: 0,
    transition: { type: "spring", stiffness: 40, duration: 1 },
  },
  float: (direction = 1) => ({
    y: [0, 30 * direction, 0],
    transition: { repeat: Infinity, repeatType: "mirror", duration: 6 },
  }),
};

export default function Hero() {
  const sectionRef = useRef(null);
  const [spotPos, setSpotPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotPos({ x, y });
  };

  const handleMouseLeave = () => setSpotPos({ x: 50, y: 50 });

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 py-20 
        bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
        dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors"
    >
      {/* Mouse-following spotlight overlays, different alpha for light/dark */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        {/* Dark theme spotlight */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            background: `
              radial-gradient(
                250px circle at ${spotPos.x}% ${spotPos.y}%,
                rgba(142, 61, 137, 0.32),
                transparent 60%
              )
            `,
            transition: "background 0.2s",
          }}
          className="hidden dark:block w-full h-full"
        />
        {/* Light theme spotlight */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            background: `
              radial-gradient(
                250px circle at ${spotPos.x}% ${spotPos.y}%,
                rgba(255,255,255,0.21),
                transparent 60%
              )
            `,
            transition: "background 0.2s",
          }}
          className="block dark:hidden w-full h-full"
        />
      </div>

      {/* Animated floating blobs */}
      <motion.div
        variants={blobVariants}
        initial="initial"
        animate={["animate", "float"]}
        custom={1}
        className="absolute w-80 h-80 bg-pink-400 rounded-full pointer-events-none opacity-30 blur-3xl -top-24 -left-24 z-1"
      />
      <motion.div
        variants={blobVariants}
        initial="initial"
        animate={["animate", "float"]}
        custom={-1}
        className="absolute w-80 h-80 bg-indigo-400 rounded-full pointer-events-none opacity-30 blur-3xl -bottom-24 -right-24 z-1"
      />

      {/* Hero Content */}
      <div className="relative max-w-5xl mx-auto text-center text-white z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, type: "spring" }}
          className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-purple-300">
            Build Modern SaaS Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, type: "spring" }}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
        >
          A clean and elegant template for startups and SaaS companies to
          showcase products with style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.5,
            type: "spring",
            stiffness: 120,
            damping: 9,
          }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Live Demo</Button>
        </motion.div>
      </div>
    </section>
  );
}

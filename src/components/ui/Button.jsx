import { motion, useAnimation } from "framer-motion";

const Button = ({ variant = "primary", children, ...props }) => {
  const controls = useAnimation();

  const handleClick = async (e) => {
    if (props.onClick) props.onClick(e); // Call user handler first
    // Animate on click
    await controls.start({
      scale: 0.92,
      rotate: -6,
      boxShadow: "0 4px 35px 4px rgba(236,72,153,0.7)",
      transition: { duration: 0.12 },
    });
    await controls.start({
      scale: 1,
      rotate: 0,
      boxShadow: "0 4px 15px 2px rgba(59,130,246,0.3)",
      transition: { duration: 0.2 },
    });
  };

  const base =
    "px-8 py-4 rounded-2xl font-semibold transition-all duration-300 focus:outline-none";
  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:from-purple-700 hover:via-pink-700 hover:to-pink-800 shadow-lg",
    secondary:
      "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-800 hover:from-gray-300 hover:via-gray-400 hover:to-gray-500 border border-gray-300 shadow-md",
  };

  return (
    <motion.button
      animate={controls}
      whileHover={{ scale: 1.1, rotate: 3, transition: { duration: 0.16 } }}
      className={`${base} ${variants[variant]}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

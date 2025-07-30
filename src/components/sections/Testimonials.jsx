import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Johnson",
    title: "CTO, AlphaTech",
    text: "SaaSify helped us scale faster than ever. The UI and performance are top-notch!",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Maya Kapoor",
    title: "Founder, InnovateX",
    text: "Simple, elegant, and powerful. We cut our dev time in half using this platform.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Daniel Kim",
    title: "Product Lead, Quantum Apps",
    text: "This SaaS tool completely changed the way we operate. Game changer!",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 100 },
  },
  whileHover: {
    scale: 1.05,
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.2 },
  },
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-50 dark:bg-zinc-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Trusted by teams around the world
        </p>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map(({ name, title, text, avatar }, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-md cursor-pointer"
              variants={cardVariants}
              whileHover="whileHover"
              tabIndex={0}
              role="group"
              aria-label={`Testimonial from ${name}, ${title}`}
            >
              <img
                src={avatar}
                alt={`Avatar of ${name}`}
                className="w-16 h-16 rounded-full mx-auto mb-6 shadow-sm"
              />
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic text-lg">
                &quot;{text}&quot;
              </p>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg">
                {name}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

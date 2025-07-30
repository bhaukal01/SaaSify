import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
  Lock,
  Layers,
  Users,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />,
    title: "Blazing Fast Performance",
    description:
      "Our platform is optimized for speed, delivering instantaneous responses with minimal latency to keep your users engaged.",
  },
  {
    icon: (
      <ShieldCheck className="w-8 h-8 text-green-500 dark:text-green-400" />
    ),
    title: "Enterprise-Grade Security",
    description:
      "Built with rigorous security protocols including end-to-end encryption, regular audits, and compliance certifications.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />,
    title: "Intuitive & Beautiful UI",
    description:
      "Our clean and modern interface ensures ease of use, reducing the learning curve and boosting productivity.",
  },
  {
    icon: <Zap className="w-8 h-8 text-pink-500 dark:text-pink-400" />,
    title: "Seamless Integrations",
    description:
      "Connect effortlessly with popular tools and APIs to streamline your workflow and maximize productivity.",
  },
  {
    icon: <Lock className="w-8 h-8 text-red-500 dark:text-red-400" />,
    title: "Robust Access Control",
    description:
      "Fine-grained permissions and role management keep your data secure and users properly authorized.",
  },
  {
    icon: <Layers className="w-8 h-8 text-purple-500 dark:text-purple-400" />,
    title: "Scalable Architecture",
    description:
      "Built to scale with your business, handling increasing user loads without compromising performance.",
  },
  {
    icon: <Users className="w-8 h-8 text-teal-500 dark:text-teal-400" />,
    title: "Collaboration Tools",
    description:
      "Enable real-time teamwork with shared workspaces, comments, and notifications to keep everyone aligned.",
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    title: "Global Availability",
    description:
      "Our infrastructure spans worldwide to deliver fast, reliable service no matter where your users are.",
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12, // Stagger delay between cards only on initial load
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, type: "spring", stiffness: 300 },
  },
};

export default function Features() {
  return (
    <section className="px-6 py-24 bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Everything You Need in One Platform
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Our all-in-one toolkit delivers everything required to build, deploy,
          and scale your SaaS product — with confidence.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // HOVER has *no delay* and responds instantly
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 6px 24px 0 rgba(91,33,182,0.09),0 1.5px 5px 0 rgba(236,72,153,0.10)",
                transition: { duration: 0.16 }, // INSTANT, no delay
              }}
              className="rounded-3xl p-8 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-sm hover:shadow-xl cursor-pointer transition-shadow duration-300"
              role="button"
              tabIndex={0}
              aria-label={`${feature.title} feature`}
            >
              <motion.div
                className="flex items-center justify-center mb-6"
                whileHover={{ rotate: 15, transition: { duration: 0.27 } }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

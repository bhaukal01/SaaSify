import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";

const mobileMenuVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 340, damping: 33 },
  },
  exit: {
    x: "100%",
    transition: { type: "spring", stiffness: 250, damping: 25 },
  },
};

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const linkClass = (active) =>
    `block px-4 py-2 rounded-lg text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-pink-400 ${
      active
        ? "text-pink-600 dark:text-pink-400 underline underline-offset-4"
        : "text-gray-900 dark:text-gray-200 hover:text-indigo-700 dark:hover:text-pink-400"
    }`;

  return (
    <header className="w-full sticky top-0 z-40 bg-white/60 dark:bg-black/60 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between px-4 py-4 w-full max-w-[1600px] mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span
            className="inline-block w-8 h-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-md group-hover:scale-110 transition-transform"
            aria-hidden="true"
          />
          <span className="ml-2 text-2xl font-extrabold text-indigo-700 dark:text-pink-400 tracking-tight group-hover:text-indigo-900 dark:group-hover:text-pink-500 transition-colors">
            SaaSy
          </span>
        </Link>

        {/* Desktop nav and theme toggle - hidden on small screens */}
        <nav
          className="hidden sm:flex items-center gap-6"
          aria-label="Primary Navigation"
        >
          <Link
            to="/"
            className={linkClass(isActive("/"))}
            aria-current={isActive("/") ? "page" : undefined}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className={linkClass(isActive("/contact"))}
            aria-current={isActive("/contact") ? "page" : undefined}
          >
            Contact
          </Link>
          <Link
            to="/faq"
            className={linkClass(isActive("/faq"))}
            aria-current={isActive("/faq") ? "page" : undefined}
          >
            FAQ
          </Link>
          <ThemeToggle />
        </nav>

        {/* Hamburger menu button - shown only on mobile */}
        <button
          onClick={() => setOpen(true)}
          className="sm:hidden flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
          aria-label="Open menu"
          type="button"
        >
          <Menu className="w-7 h-7 text-indigo-700 dark:text-pink-400" />
        </button>
      </div>

      {/* Mobile nav overlay with glassmorphism */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex sm:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              key="mobile-nav"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              // Glassmorphic bg! (see bg opacity and blur)
              className="ml-auto w-4/5 max-w-xs h-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-l border-gray-200 dark:border-zinc-800 p-6 flex flex-col gap-4 shadow-2xl"
              aria-label="Mobile menu"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button
                onClick={() => setOpen(false)}
                className="self-end mb-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                aria-label="Close menu"
                type="button"
              >
                <X className="w-7 h-7 text-indigo-700 dark:text-pink-400" />
              </button>
              <Link
                to="/"
                className={linkClass(isActive("/"))}
                aria-current={isActive("/") ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/contact"
                className={linkClass(isActive("/contact"))}
                aria-current={isActive("/contact") ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className={linkClass(isActive("/faq"))}
                aria-current={isActive("/faq") ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                FAQ
              </Link>
              <div className="mt-4">
                <ThemeToggle />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

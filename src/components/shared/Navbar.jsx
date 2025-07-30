import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = ["Home", "Features", "Pricing", "Testimonials"];

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-black/70 border-b border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          SaaSify
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? (
              <X className="h-6 w-6 text-gray-700 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-black px-4 py-4 border-t border-gray-200 dark:border-zinc-700">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 py-6 border-t border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 md:mb-0">
          © {new Date().getFullYear()} SaaSify. All rights reserved.
        </p>
        <div className="flex space-x-4 text-sm text-gray-600 dark:text-gray-400">
          <a href="#" className="hover:text-indigo-600">
            Privacy
          </a>
          <a href="#" className="hover:text-indigo-600">
            Terms
          </a>
          <a href="/contact" className="hover:text-indigo-600">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

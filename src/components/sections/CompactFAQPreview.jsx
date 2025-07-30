import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqsPreview = [
  { 
    q: "Is this SaaS free?", 
    a: "We offer a free trial, then you choose a plan." 
  },
  { 
    q: "Is support available?", 
    a: "Yes, 24/7 email and chat support." 
  },
];

export default function CompactFAQPreview() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (i) => {
    setOpenIndex(i === openIndex ? null : i);
  };

  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqsPreview.map((faq, i) => {
          const isOpen = i === openIndex;
          return (
            <div key={i} className="bg-gray-100 dark:bg-zinc-800 rounded-lg overflow-hidden transition-all">
              <button
                onClick={() => toggleIndex(i)}
                className="w-full flex justify-between items-center px-4 py-3 font-semibold text-indigo-700 dark:text-pink-400 hover:bg-indigo-200 dark:hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-pink-400"
                aria-expanded={isOpen}
                aria-controls={`faq-preview-answer-${i}`}
                id={`faq-preview-question-${i}`}
                type="button"
              >
                {faq.q}
                <span
                  className={`transform transition-transform duration-200 text-xl select-none ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              <div
                id={`faq-preview-answer-${i}`}
                role="region"
                aria-labelledby={`faq-preview-question-${i}`}
                className={`px-4 pt-0 pb-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{ overflow: "hidden" }}
              >
                {isOpen && <p>{faq.a}</p>}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/faq"
          className="inline-block px-6 py-3 rounded-xl bg-indigo-600 text-white dark:bg-pink-500 dark:hover:bg-pink-600 hover:bg-indigo-700 transition-colors font-semibold"
        >
          More FAQs
        </Link>
      </div>
    </section>
  );
}

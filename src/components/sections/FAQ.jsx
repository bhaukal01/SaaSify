import React, { useState } from "react";

const faqs = [
  {
    q: "Is this SaaS free?",
    a: "We offer a free trial, then you choose a plan.",
  },
  { q: "Is support available?", a: "Yes, 24/7 email and chat support." },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely! You can upgrade or downgrade anytime from your dashboard.",
  },
  {
    q: "Do you offer a money-back guarantee?",
    a: "Yes, we offer a 30-day money-back guarantee on annual plans.",
  },
  {
    q: "Is my data secure?",
    a: "We use industry-standard encryption and security protocols to keep your data safe.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, you can cancel anytime directly from your account settings.",
  },
  {
    q: "Are there any setup fees?",
    a: "No setup fees—just straightforward monthly or annual billing.",
  },
  {
    q: "Is there an API available?",
    a: "Yes, we provide a documented REST API for integrations.",
  },
  {
    q: "Do you offer custom plans?",
    a: "For enterprise solutions, get in touch with our sales team to discuss custom plans.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept major credit cards, PayPal, and bank transfers for enterprise plans.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (i) => {
    setOpenIndex(i === openIndex ? null : i);
  };

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-12 text-gray-900 dark:text-white text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, i) => {
          const isOpen = i === openIndex;
          return (
            <div
              key={i}
              className="border-b border-gray-200 dark:border-gray-700 pb-6"
            >
              <button
                onClick={() => toggleIndex(i)}
                className="w-full flex justify-between items-center text-left text-xl font-semibold text-indigo-700 dark:text-pink-400 hover:text-indigo-900 dark:hover:text-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-pink-400"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                {faq.q}
                <span
                  className={`ml-4 transition-transform duration-300 transform text-2xl font-bold ${
                    isOpen
                      ? "rotate-45 text-pink-500 dark:text-pink-300"
                      : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={`mt-3 text-gray-700 dark:text-gray-300 text-base leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {isOpen && <p>{faq.a}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import React from "react";
import { Check } from "lucide-react"; // npm install lucide-react if not already

const plans = [
  {
    title: "Starter",
    price: "Free",
    description: "Perfect for solo founders and hobby projects.",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Email support",
      "Community access",
      "100MB storage",
    ],
    button: "Start for Free",
  },
  {
    title: "Pro",
    price: "$39/mo",
    description: "For growing teams who need more power and flexibility.",
    features: [
      "Unlimited projects",
      "Advanced analytics & reports",
      "Priority chat & email support",
      "Role-based access control",
      "1TB storage",
      "Custom domains",
    ],
    highlighted: true,
    button: "Start Pro Trial",
  },
  {
    title: "Enterprise",
    price: "Custom",
    description:
      "Best for organizations with advanced security & support needs.",
    features: [
      "All Pro features, plus:",
      "Tailored usage quotas",
      "Single sign-on (SSO)",
      "Dedicated account manager",
      "24/7 phone support",
      "Audit logs & SLA",
    ],
    button: "Contact Sales",
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-20 bg-white dark:bg-black transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          Pricing Plans
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto">
          Choose the plan that fits your team. Upgrade or cancel anytime.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map(
            (
              { title, price, description, features, highlighted, button },
              idx
            ) => (
              <div
                key={idx}
                className={`rounded-3xl border p-8 shadow-sm transition-transform transition-shadow duration-300
                ${
                  highlighted
                    ? "border-indigo-600 bg-indigo-50 dark:bg-zinc-800 shadow-lg scale-[1.04]"
                    : "border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:shadow-lg"
                }
              `}
                aria-label={`${title} pricing plan`}
                tabIndex={0}
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {title}
                </h3>
                <p
                  className={`mb-2 text-4xl font-extrabold ${
                    highlighted
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {price}
                </p>
                <p className="mb-6 text-gray-700 dark:text-gray-300 text-base">
                  {description}
                </p>

                <ul className="mb-8 space-y-4 text-left">
                  {features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <Check className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`w-full py-3 rounded-xl font-semibold transition-colors focus:outline-none focus:ring-4
                  ${
                    highlighted
                      ? "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-300 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-600 dark:focus:ring-indigo-700"
                      : "bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-zinc-700 focus:ring-gray-300 dark:focus:ring-zinc-700"
                  }
                `}
                  aria-label={button}
                >
                  {button}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

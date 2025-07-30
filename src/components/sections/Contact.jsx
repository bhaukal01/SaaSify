import React, { useState } from "react";
import { Mail, Phone, MessageCircle, ThumbsUp, Send } from "lucide-react";

// Topic options with accent color for each
const topics = [
  { label: "Product Demo", icon: <ThumbsUp /> },
  { label: "Sales Inquiry", icon: <Mail /> },
  { label: "Support", icon: <MessageCircle /> },
  { label: "Other", icon: <Phone /> },
];

export default function ContactInnovative() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    topic: topics[0].label,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleTopicChange = (label) =>
    setForm((form) => ({ ...form, topic: label }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 min-h-[70vh] px-4 flex items-center justify-center bg-gradient-to-br from-indigo-200/30 via-pink-100/20 to-purple-200/30 dark:from-black dark:via-zinc-900 dark:to-zinc-950 transition-colors relative overflow-hidden">
      {/* Background Floating Blobs (SVG or divs) */}
      <div className="absolute z-0 w-full h-full pointer-events-none">
        <div className="absolute w-56 h-56 bg-indigo-300 blur-3xl opacity-20 left-[-6rem] top-20 dark:bg-indigo-900"></div>
        <div className="absolute w-56 h-56 bg-pink-300 blur-3xl opacity-20 right-[-6rem] bottom-10 dark:bg-pink-900"></div>
      </div>

      <div className="relative max-w-4xl w-full mx-auto flex flex-col md:flex-row gap-10 z-10">
        {/* Left: Friendly Welcome */}
        <div className="flex-1 flex flex-col items-center justify-center md:items-start md:justify-center p-0 md:p-8">
          <div className="relative inline-block mb-4">
            <span className="block w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 via-pink-400 to-purple-400 dark:from-indigo-800 dark:via-pink-800 dark:to-purple-900 text-white flex items-center justify-center text-4xl shadow-lg select-none">
              👋
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-3">
            Say Hello!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-5">
            We’d love to hear from you. Whether you need advice, a custom demo,
            or just want to say hi, drop us a line!
          </p>
        </div>

        {/* Right: Glassmorphic Contact Form */}
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white/70 dark:bg-zinc-800/60 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md p-8 transition-colors border border-white/30 dark:border-zinc-700/50">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <label
                    className="block text-gray-800 dark:text-gray-200 font-bold mb-1"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-400 dark:focus:ring-pink-400 transition"
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-800 dark:text-gray-200 font-bold mb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-400 dark:focus:ring-pink-400 transition"
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-800 dark:text-gray-200 font-bold mb-2">
                    Topic
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {topics.map((topic) => (
                      <button
                        key={topic.label}
                        type="button"
                        className={`inline-flex items-center gap-1 px-4 py-2 rounded-xl font-semibold border transition-colors focus:outline-none
                          ${
                            form.topic === topic.label
                              ? "bg-indigo-600 text-white dark:bg-pink-600 dark:text-white border-indigo-600 dark:border-pink-500"
                              : "bg-gray-100 dark:bg-zinc-700 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-zinc-600 hover:bg-indigo-100 dark:hover:bg-pink-900"
                          }
                        `}
                        onClick={() => handleTopicChange(topic.label)}
                        aria-pressed={form.topic === topic.label}
                      >
                        {topic.icon} {topic.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label
                    className="block text-gray-800 dark:text-gray-200 font-bold mb-1"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-400 dark:focus:ring-pink-400 transition"
                    required
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold bg-indigo-600 text-white dark:bg-pink-600 dark:text-white hover:bg-pink-500 dark:hover:bg-indigo-600 transition focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-pink-400"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-green-600 dark:text-green-400 text-lg text-center py-16">
                Thank you, {form.name}!
                <br />
                We’ve received your message about <b>{form.topic}</b>.
                <br />
                Our team will get back to you soon.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

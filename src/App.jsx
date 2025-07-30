import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import Header from "./components/shared/Header.jsx";
import Footer from "./components/shared/Footer";
import Contact from "./components/sections/Contact.jsx";
import CompactFAQPreview from "./components/sections/CompactFAQPreview.jsx";
import ThemeToggle from "./components/ui/ThemeToggle";

// Layout to wrap common UI like ThemeToggle and Footer
const Layout = ({ children }) => (
  <div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen flex flex-col relative">
    <Header />
    {/* Fixed position ThemeToggle */}

    {/* Page content */}
    <main className="flex-1">{children}</main>

    {/* Footer always at bottom */}
    <Footer />
  </div>
);

const HomePage = () => (
  <Layout>
    <Hero />
    <Features />
    <Testimonials />
    <Pricing />
    <CompactFAQPreview />
  </Layout>
);

const FAQPage = () => (
  <Layout>
    <FAQ />
  </Layout>
);

const ContactPage = () => (
  <Layout>
    <Contact />
  </Layout>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;

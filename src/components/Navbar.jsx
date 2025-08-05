import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, ArrowUp } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Contact", href: "#contact" },
  { name: "About", href: "/about" },
];

const aboutDropdownItems = [
  { name: "Our Story", href: "#about" },
  { name: "Our Team", href: "/about#team" },
];

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: "-10%",
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const mobileMenuItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('/')) {
      window.location.href = href;
    }
    setIsOpen(false);
    setAboutDropdownOpen(false);
  };

  return (
    <>
      <header className={`w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg border-b border-gray-100" : "bg-white"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.a 
              href="/" 
              className="flex-shrink-0 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <img
                  className="h-20 w-auto transition-all duration-300 group-hover:brightness-110"
                  src="/logoof.svg"
                  alt="Optamyze - Systems Optimization Experts"
                />
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative group px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-300 font-medium"
                >
                  {item.name}
                  <span className="absolute inset-0 -z-10 bg-gray-100 rounded-lg scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
                </button>
              ))}
              
              {/* About Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className="relative group px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-300 font-medium flex items-center gap-1"
                >
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    aboutDropdownOpen ? 'rotate-180' : ''
                  }`} />
                  <span className="absolute inset-0 -z-10 bg-gray-100 rounded-lg scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
                </button>
                
                <AnimatePresence>
                  {aboutDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                    >
                      {aboutDropdownItems.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => scrollToSection(item.href)}
                          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          {item.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* CTA and Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <div className="md:hidden">
                <button 
                  onClick={() => setIsOpen(!isOpen)} 
                  className="text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={isOpen ? "x" : "menu"}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.div>
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden fixed top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg z-40"
          >
            <div className="px-6 py-4">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    variants={mobileMenuItemVariants}
                    className="text-gray-700 hover:bg-gray-100 p-4 rounded-xl text-lg font-medium text-left transition-colors"
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                {/* Mobile About Section */}
                <motion.div variants={mobileMenuItemVariants} className="space-y-2">
                  <div className="text-gray-700 p-4 text-lg font-medium">About</div>
                  {aboutDropdownItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="w-full text-left text-gray-600 hover:bg-gray-100 p-4 pl-8 rounded-xl transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </motion.div>
                
                <motion.button
                  variants={mobileMenuItemVariants}
                  onClick={() => scrollToSection('#contact')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold shadow-lg mt-4 flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

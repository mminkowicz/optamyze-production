import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "About", href: "/About" },
  { name: "Contact", href: "#contact" },
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
        <motion.div
          className={`flex justify-between items-center h-20 px-8 rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "bg-white/80 backdrop-blur-lg border-gray-200 shadow-lg shadow-gray-900/5"
              : "bg-white/50 backdrop-blur-md border-white/30"
          }`}
        >
          {/* Enhanced Logo */}
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
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-300 font-medium"
              >
                {item.name}
                <span className="absolute inset-0 -z-10 bg-gray-100 rounded-md scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
              </a>
            ))}
          </nav>

          {/* CTA and Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300"
            >
              Get Started
            </motion.button>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 p-2">
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
        </motion.div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden fixed top-28 left-0 w-full p-4 z-40"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-200">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    variants={mobileMenuItemVariants}
                    className="text-gray-700 hover:bg-gray-100 p-3 rounded-lg text-lg font-medium text-center"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  variants={mobileMenuItemVariants}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
                >
                  Get Started
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

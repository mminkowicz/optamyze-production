"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";           // ← keep GSAP

export default function Navbar() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* slide-down on mount */
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -70, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  /* add blur + border when scrolled */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const headerClasses = [
    "fixed top-0 left-0 w-full z-50 transition-all duration-300",
    scrolled
      ? "backdrop-blur-md bg-white/85 dark:bg-neutral-900/70 border-b border-black/10 dark:border-white/10 shadow-sm"
      : "bg-transparent",
  ].join(" ");

  const navLinks = [
    { label: "Home", href: "/", internal: true },
    { label: "Services", href: "#services" },
    { label: "About", href: "/about", internal: true },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header ref={navRef} className={headerClasses}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo — now served straight from /public */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.svg"            /* ⬅️ just reference the public file */
            alt="Simplora logo"
            className="h-20 md:h-28 lg:h-32 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map(({ label, href, internal }) =>
            internal ? (
              <Link
                key={label}
                to={href}
                className="text-neutral-800 dark:text-neutral-200 hover:text-blue-600 transition"
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                className="text-neutral-800 dark:text-neutral-200 hover:text-blue-600 transition"
              >
                {label}
              </a>
            )
          )}
          <a
            href="https://calendar.app.google/7JhbHhJhNG9fHj849"
            className="inline-flex items-center px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:brightness-110 transition"
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-neutral-800 dark:text-neutral-100"
          aria-label="Open menu"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] flex flex-col bg-white dark:bg-black text-neutral-800 dark:text-neutral-100">
          <div className="flex items-center justify-between px-6 py-5">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <img src="/logo.svg" alt="Simplora logo" className="h-16 w-auto" />
            </Link>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X className="w-8 h-8" />
            </button>
          </div>

          <nav className="mt-10 flex flex-col items-center gap-8 text-lg font-semibold">
            {navLinks.map(({ label, href, internal }) =>
              internal ? (
                <Link
                  key={label}
                  to={href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-600 transition"
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-600 transition"
                >
                  {label}
                </a>
              )
            )}
            <a
              href="https://calendar.app.google/7JhbHhJhNG9fHj849"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:brightness-110 transition"
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

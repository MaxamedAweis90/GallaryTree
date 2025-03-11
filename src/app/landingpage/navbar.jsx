"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${
          scrolled
            ? "bg-black bg-opacity-60 border-b border-b-slate-100 border-opacity-30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4 backdrop-blur-md">
          {/* Logo / App Name */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-100 to-yellow-100 bg-clip-text text-transparent">
              SheekoChat
            </span>
          </Link>

          {/* Hamburger Icon (mobile) */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-white text-10 focus:outline-none md:hidden"
          >
            ☰
          </button>

          {/* Desktop Navigation (optional) */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Contact
            </Link>
            
            
          </div>

          <Link href="https://app-sheekochat.netlify.app/login" className="hidden md:flex">
              <button className="bg-white text-gray-900 py-2 px-4 rounded-full hover:bg-gray-200 hover:scale-105 transition duration-300">
              🚀 Get Started
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </Link>
        </div>
      </nav>

      {/* Sidebar for Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-white text-10 focus:outline-none"
            >
              ✕
            </button>
            <div className="flex flex-col items-center space-y-6">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl hover:text-gray-300 transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl hover:text-gray-300 transition duration-300"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl hover:text-gray-300 transition duration-300"
              >
                Contact
              </Link>
              <Link href="https://app-sheekochat.netlify.app/login" onClick={() => setIsOpen(false)}>
                <button className="bg-white text-gray-900 py-2 px-6 rounded-full hover:bg-gray-200 hover:scale-105 transition duration-300">
                🚀 Get Started
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

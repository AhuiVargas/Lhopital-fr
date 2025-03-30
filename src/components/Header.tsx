'use client'

import { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsDark(scrollY < window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hamburgerColor = isOpen ? '#FFFFFF' : isDark ? '#FFFFFF' : '#000000';

  return (
    <>
      {/* Desktop Header */}
      <header className="absolute top-0 left-0 w-full z-30 hidden md:flex justify-between items-center px-6 py-4 text-white">
        <div className="text-lg font-bold tracking-wide">Lhopital-FR</div>
        <nav className="space-x-6 text-2xl">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Mobile Hamburger Button (animated & sticky) */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color={hamburgerColor}
          size={28}
          direction="right"
          duration={0.4}
          rounded
          label="Show menu"
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-[#172E6E] flex flex-col items-center justify-center space-y-8 text-3xl z-40 text-white"
          >
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
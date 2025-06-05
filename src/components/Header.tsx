"use client";

import { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const handleClick = () => {
    window.location.href = "mailto:contacto@lhopital-fr.mx";
  };

  const pathname = usePathname();

  useEffect(() => {
  const updateSticky = () => {
    const scrollY = window.scrollY;

    if (pathname !== "/") {
      setIsSticky(true);
    } else {
      const logoElement = document.querySelector(".logo-trigger");
      if (logoElement) {
        const logoPosition = logoElement.getBoundingClientRect().bottom;
        setIsSticky(logoPosition < 0);
      }
    }

    setIsDark(scrollY < window.innerHeight - 100);
  };

  window.addEventListener("scroll", updateSticky);
  updateSticky(); // run once on mount or route change

  return () => window.removeEventListener("scroll", updateSticky);
}, [pathname]); // this is critical


  const hamburgerColor = isOpen ? "#FFFFFF" : isDark ? "#FFFFFF" : "#000000";
  const headerClasses = `${
    isSticky ? "fixed top-0 bg-black shadow-lg" : "absolute"
  } left-0 w-full z-30 transition-all duration-300`;

  return (
    <>
      {/* Mobile Top Sticky Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full h-[41.5px] bg-[#e5e3dc] z-40 shadow-lg flex items-center justify-center">
        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-[#172E6E] via-50% to-[#B2202C] text-transparent bg-clip-text min-h-full font-thin text-xl"
        >
          CONTACTANOS
        </button>
      </div>

      {/* Desktop Header */}
      <header
        className={`${headerClasses} min-h-20 hidden md:flex items-center justify-between px-6 py-2 mb-10 text-white`}
      >
        <div className="flex items-center flex-1">
          {isSticky && (
            <Link href="/" scroll={true} as="image">
              <Image
                src="/LP-escudos/escudo_bw.png"
                alt="Logo"
                width={50}
                height={50}
              />
            </Link>
          )}
        </div>

        <nav className="flex-1 flex justify-center space-x-6 text-2xl">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#services" className="hover:underline">
            Services
          </a>
        </nav>

        <div className="flex-1 flex justify-end">
          {isSticky && (
            <button
              onClick={handleClick}
              className="bg-[#B2202C] text-white px-6 py-2 rounded font-semibold hover:scale-110 transition-transform duration-200 ease-in-out text-xl"
            >
              Contacto
            </button>
          )}
        </div>
      </header>

      {/* Mobile Hamburger Button (animated & sticky) */}
      <div className="md:hidden fixed top-[45px] right-8 z-50">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color={hamburgerColor}
          size={40}
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
            className="fixed top-[41.5px] left-0 w-full h-[calc(100vh-41.5px)] bg-[#172E6E] flex flex-col items-center justify-center space-y-8 text-3xl z-40 text-white"
          >
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

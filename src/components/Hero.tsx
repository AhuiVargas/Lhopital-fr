'use client'

import Image from "next/image";

export default function Hero() {
  const handleClick = () => {
    window.location.href = 'mailto:contacto@lhopital-fr.mx';
  };

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat text-center text-white"
      style={{
        backgroundImage: `url('HeroTst.jpeg')`,
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-[#172E6E]/60 z-0" />

      {/* Top-left image (desktop only) */}
      <div className="hidden md:block absolute top-28 left-8 z-20">
        <Image
          src="/letters.png"
          alt="Desktop Floating Image"
          width={300}
          height={300}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-24">
        {/* Logo */}
        <div className="mb-4 logo-trigger">
          <Image
            src="/LP-escudos/escudo_color.png"
            alt="Lhopital-FR logo"
            width={250}
            height={250}

          />
        </div>

        {/* Mobile-only image (centered under logo) */}
        <div className="block md:hidden -mt-20 -mb-16 z-20">
          <Image
            src="/lettersMobile.png"
            alt="Mobile Centered Image"
            width={620}
            height={620}
          />
        </div>

        {/* CTA Button */}
        <button
          onClick={handleClick}
          className="bg-[#B2202C] text-white text-2xl mt-16 px-6 py-3 rounded font-semibold hover:scale-110 focus:outline-none transition-transform duration-200 ease-in-out"
        >
          Contact us
        </button>
      </div>
    </section>
  );
}

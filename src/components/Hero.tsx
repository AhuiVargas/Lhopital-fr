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
        backgroundImage: `url('hero.png')`,
      }}
    >
      {/* Light overlay for contrast */}
      <div className="absolute inset-0 bg-[#172E6E]/40 z-0" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 font-[ObviaNarrowBold]">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/escudo_color.png"
            alt="Lhopital-FR logo"
            width={220}
            height={220}
            priority
          />
        </div>

        <h2 className="text-5xl md:text-5xl font-bold mb-4 font-outline-2" >
          Fire and Rescue Gear
        </h2>
        {/* <p className="text-lg md:text-xl mb-6 max-w-xl">
          Dedicated to protecting citizens with professional emergency response.
        </p> */}
        <button
          onClick={handleClick}
          className="bg-[#B2202C] text-white px-6 py-3 rounded font-semibold hover:scale-110 focus:outline-none transition-transform duration-200 ease-in-out"
          >
          Contact us
        </button>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';

const Placeholder: React.FC = () => {
  const handleClick = () => {
    window.location.href = 'mailto:contact@lhopital-fr.mx';
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/placeholderWide.png"
        alt="Placeholder"
        fill
        sizes="100vw, 100vh"
        className="object-cover md:object-center"
        priority
      />
      <button
        onClick={handleClick}
        className="absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 py-4 px-10 text-black bg-white font-[ObviaNarrowBold] text-2xl hover:scale-110 focus:outline-none transition-transform duration-200 ease-in-out rounded-xl border-4 border-solid border-[#B01E29]"
        >
        CONTACTO
      </button>
    </div>
  );
};

export default Placeholder;

'use client';

import Image from 'next/image';

const Placeholder: React.FC = () => {
  const handleClick = () => {
    window.location.href = 'mailto:contact@lhopital-fr.mx';
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src="/placeholderWide.png"
        alt="Placeholder"
        fill
        sizes="100vw, 100vh"
        className="object-cover md:object-center"
        priority
      />
    </div>
  );
};

export default Placeholder;

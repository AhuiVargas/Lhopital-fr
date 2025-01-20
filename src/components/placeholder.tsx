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
        src="/placeholder.webp"
        alt="Placeholder"
        fill
        sizes="(max-width: 768px) 100vw, 100vh"
        className="object-cover md:object-center"
        priority
      />
    </div>
  );
};

export default Placeholder;

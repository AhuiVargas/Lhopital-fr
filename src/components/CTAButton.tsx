import React from "react";

interface CTAButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  hovered?: boolean;
}

export default function CTAButton({
  onClick,
  children,
  hovered = false,
}: CTAButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 text-white font-light text-xl overflow-hidden z-0
        before:absolute before:inset-0
        before:bg-gradient-to-r before:from-[#172E6E] before:to-[#B2202C]
        before:opacity-0
        before:transition-opacity before:duration-500 before:z-[-1]
        ${hovered ? "before:opacity-100" : "hover:before:opacity-100"}
      `}
      style={{
        background: "transparent",
        border: "1px solid transparent",
        borderImage: "linear-gradient(263deg, #B2202C 50%, #172E6E 100%)",
        borderImageSlice: 1,
      }}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}

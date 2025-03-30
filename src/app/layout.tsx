import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Lhopital-FR | Fire & Rescue",
  description: "Professional emergency response gear",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#172E6E] font-[ObviaNarrowBold] text-white">
        {children}
      </body>
    </html>
  );
}

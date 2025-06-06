import "../styles/globals.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Lhopital-FR | Fire & Rescue",
  description: "Professional emergency response gear",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white font-[rider] text-white">
        <Header />
        <main className="flex-1 mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col text-white bg-[#172E6E]">
      <header className="flex justify-between items-center px-6 py-4 bg-[#172E6E]">
        <h1 className="text-xl font-bold">Lhopital-FR</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="text-center py-4 border-t border-red-600 text-sm">
        © 2025 Lhopital-FR. All rights reserved.
      </footer>
    </div>
  );
}

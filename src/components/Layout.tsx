import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col text-white bg-[#172E6E]">
      <main className="flex-grow">{children}</main>
      <footer className="text-center py-4 border-t border-red-600 text-sm">
        © 2025 Lhopital-FR. All rights reserved.
      </footer>
    </div>
  );
}

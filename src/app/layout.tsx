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
			<body className="flex flex-col bg-white font-[almaq] text-white text-justify">
				<Header />
				<main className="min-h-screen flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}

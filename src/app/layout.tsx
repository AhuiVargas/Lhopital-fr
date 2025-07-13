import "../styles/globals.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Script from "next/script";

export const metadata = {
	title: "Lhopital-FR | Fire & Rescue",
	description: "Professional emergency response gear",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				{/* Google Analytics */}
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-5E4DH68V8F"
					strategy="afterInteractive"
				/>
				<Script id="gtag-init" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-5E4DH68V8F');
					`}
				</Script>

				{/* Microsoft Clarity */}
				<Script id="clarity-init" strategy="afterInteractive">
					{`
						(function(c,l,a,r,i,t,y){
							c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
							t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
							y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
						})(window, document, "clarity", "script", "sef1eizc17");
					`}
				</Script>
			</head>
			<body className="flex flex-col bg-white font-[almaq] text-white text-justify">
				<Header />
				<main className="min-h-screen flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}

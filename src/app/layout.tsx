import "../styles/globals.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Script from "next/script";
import { LocalBusinessSchema } from "@/components/SEO";
import { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.lhopital-fr.mx"),
	title: "Lhopital-FR - Equipos de Rescate y Emergencias en México",
	description: "Empresa líder en equipos de rescate, protección civil y servicios de emergencia en México. Especialistas en rescate técnico, HAZMAT y protección personal para bomberos.",
	keywords: "bomberos México, rescate técnico, equipos emergencia, protección civil, HAZMAT, rescate vehicular, bomberos profesionales, equipos rescate México",
	authors: [{ name: "Lhopital-FR" }],
	creator: "Lhopital-FR",
	publisher: "Lhopital-FR",
	robots: "index,follow",
	openGraph: {
		title: "Lhopital-FR - Equipos de Rescate y Emergencias en México",
		description: "Empresa líder en equipos de rescate, protección civil y servicios de emergencia en México. Especialistas en rescate técnico, HAZMAT y protección personal para bomberos.",
		url: "https://www.lhopital-fr.mx",
		siteName: "Lhopital-FR",
		images: [
			{
				url: "/favicon.ico",
				width: 1200,
				height: 630,
				alt: "Lhopital-FR - Equipos de Rescate y Emergencias",
			},
		],
		locale: "es_ES",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Lhopital-FR - Equipos de Rescate y Emergencias en México",
		description: "Empresa líder en equipos de rescate, protección civil y servicios de emergencia en México.",
		images: ["/favicon.ico"],
	},
	verification: {
		google: "your-google-verification-code",
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="es" suppressHydrationWarning>
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
				<LocalBusinessSchema />
				<Header />
				<main className="min-h-screen flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}

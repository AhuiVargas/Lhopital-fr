"use client";

import Image from "next/image";
import CTAButton from "./CTAButton";

export default function Hero() {
	const handleClick = () => {
		window.location.href = "mailto:contacto@lhopital-fr.mx";
	};

	const heroWordClass =
		"font-[almaq] leading-none stroke-heavy text-transparent bg-clip-text drop-shadow-[4px_4px_0_#111]";
	const heroWordStyle = {
		backgroundImage: `url('/beige-texture.jpg')`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};

	return (
		<section className="relative w-full h-screen overflow-hidden text-center text-white">
			<video
				src="/HeroVid.webm"
				autoPlay
				muted
				loop
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover z-0"
			/>

			{/* Overlay for contrast */}
			<div className="absolute inset-0 bg-[#172E6E]/60 z-0" />

			{/* Top-left image (desktop only) */}
			<div className="hidden md:block absolute top-40 left-20 z-20">
				<div className="hidden md:flex flex-col gap-0 items-center">
					<p className={`${heroWordClass} text-[60px]`} style={heroWordStyle}>
						RESCATE
					</p>
					<p className={`${heroWordClass} text-[3vw]`} style={heroWordStyle}>
						PROTECCIÓN PERSONAL
					</p>
					<p className={`${heroWordClass} text-[60px]`} style={heroWordStyle}>
						HAZMAT
					</p>
				</div>
			</div>

			{/* Hero content */}
			<div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-24">
				{/* Logo */}
				<div className="mb-4">
					<Image
						src="/LP-escudos/escudo_color.png"
						alt="Lhopital-FR logo"
						width={250}
						height={250}
					/>
				</div>

				{/* 398x224 */}

				{/* Mobile-only image (centered under logo) */}
				<div className="md:hidden -mt-20 -mb-16 z-20 w-96 h-56 flex items-center justify-center">
					<div className="flex items-center justify-center gap-1 text-center">
						<p className={`${heroWordClass} text-[8vw]`} style={heroWordStyle}>
							RESCATE
						</p>
						<p className={`${heroWordClass} text-[6vw]`} style={heroWordStyle}>
							PROTECCIÓN PERSONAL 
						</p>
						<p className={`${heroWordClass} text-[8vw]`} style={heroWordStyle}>
							HAZMAT
						</p>
					</div>
				</div>

				{/* CTA Button */}
				<CTAButton onClick={handleClick} hovered>
					CONTÁCTANOS
				</CTAButton>
			</div>
		</section>
	);
}

"use client";

import Image from "next/image";
import CTAButton from "./CTAButton";
import Modal from "./Modal";
import ContactForm from "./ContactForm";
import { useState } from "react";
import NavLink from "./NavLink";

export default function Hero() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleClick = () => {
		setIsModalOpen(true);
	};

	const heroWordClass =
		"font-[almaq] leading-none stroke-heavy text-transparent bg-clip-text drop-shadow-[4px_4px_0_#111]";
	const heroWordStyle = {
		backgroundImage: `url('/beige-texture.webp')`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};

	return (
		<section className="relative w-full h-screen overflow-hidden text-white">
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

			{/* Top-left desktop nav links */}
			<div className="hidden md:block absolute top-40 left-20 z-20">
				<div className="hidden md:flex flex-col gap-0 items-center">
					<NavLink href="/rescate">
						<p className={`${heroWordClass} text-[60px]`} style={heroWordStyle}>
							RESCATE
						</p>
					</NavLink>

					<NavLink href="/proteccion-personal">
						<p className={`${heroWordClass} text-[3vw]`} style={heroWordStyle}>
							PROTECCIÓN PERSONAL
						</p>
					</NavLink>

					<NavLink href="/hazmat">
						<p className={`${heroWordClass} text-[60px]`} style={heroWordStyle}>
							HAZMAT
						</p>
					</NavLink>
				</div>
			</div>

			{/* Hero content */}
			<div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-24">
				{/* Logo */}
				<div className="mb-4">
					<Image
						src="/LP-escudos/escudo_color.webp"
						alt="Lhopital-FR logo"
						width={250}
						height={250}
					/>
				</div>

				{/* Mobile nav links */}
				<div className="md:hidden -mt-20 -mb-16 w-96 h-56 flex items-center justify-center">
					<div className="flex items-center justify-center gap-1 text-center">
						<NavLink href="/rescate">
							<p
								className={`${heroWordClass} text-[8vw]`}
								style={heroWordStyle}
							>
								RESCATE
							</p>
						</NavLink>
						<NavLink href="/proteccion-personal">
							<p
								className={`${heroWordClass} text-[6vw]`}
								style={heroWordStyle}
							>
								PROTECCIÓN PERSONAL
							</p>
						</NavLink>
						<NavLink href="/hazmat">
							<p
								className={`${heroWordClass} text-[8vw]`}
								style={heroWordStyle}
							>
								HAZMAT
							</p>
						</NavLink>
					</div>
				</div>

				{/* CTA Button */}
				<CTAButton onClick={handleClick} hovered>
					CONTÁCTANOS
				</CTAButton>
			</div>

			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<ContactForm />
			</Modal>
		</section>
	);
}

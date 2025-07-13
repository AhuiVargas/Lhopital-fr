"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect, JSX } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type ShowcaseItem = {
	title: string;
	description: string;
	image: string;
	url: string;
};

const items: ShowcaseItem[] = [
	{
		title: "EPP",
		description:
			"Equipos de protección personal para bomberos y rescatistas profesionales.",
		image: "/showcase/pp.webp",
		url: "/proteccion-personal",
	},
	{
		title: "RESCATE",
		description:
			"Equipo para rescate vehicular, rescate pesado, rescate en estructuras colapsadas y estabilización primaria y secundaría.",
		image: "/showcase/rescate.webp",
		url: "/rescate",
	},
	{
		title: "HAZMAT",
		description:
			"Equipos para contención de materiales peligrosos y control de derrames.",
		image: "/showcase/hazmat.webp",
		url: "/hazmat",
	},
];

export default function EquipmentShowcase(): JSX.Element {
	const sectionRef = useRef(null);
	const inView = useInView(sectionRef, { once: true });
	const controls = useAnimation();

	useEffect(() => {
		if (inView) controls.start("visible");
	}, [inView, controls]);

	return (
		<section className="relative text-white py-20 px-6">
			{/* Background */}
			<div className="absolute inset-0 -z-10">
				<Image
					src="https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/showcase/burntBrickWall.webp"
					alt="Fondo equipos"
					fill
					className="object-cover"
				/>
				<div className="absolute inset-0 bg-[#b01f29]/70" />
			</div>

			{/* Section Title */}
			<motion.div
				ref={sectionRef}
				initial="hidden"
				animate={controls}
				variants={{
					hidden: { opacity: 0, y: 30 },
					visible: {
						opacity: 1,
						y: 0,
						transition: { duration: 0.6, ease: "easeOut" },
					},
				}}
				className="max-w-7xl mx-auto relative z-10"
			>
				<h2 className="text-4xl font-bold mb-2 text-center">
					Nuestros equipos
				</h2>
				<p className="text-center mb-12 text-xl">
					Contamos con las mejores marcas en el mercado
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{items.map((item, i) => (
						<Card key={i} item={item} delay={i * 0.2} />
					))}
				</div>
			</motion.div>
		</section>
	);
}

function Card({ item, delay }: { item: ShowcaseItem; delay: number }) {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });
	const controls = useAnimation();
	const [hovered, setHovered] = useState(false);

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [inView, controls]);

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={{
				hidden: { opacity: 0, y: 40 },
				visible: {
					opacity: 1,
					y: 0,
					transition: { duration: 0.7, delay, ease: "easeOut" },
				},
			}}
		>
			<Link
				href={item.url}
				className="block w-full h-full"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<div className="flex flex-col shadow-lg overflow-hidden">
					{/* Image */}
					<div className="relative w-full h-[500px]">
						<Image
							src={item.image}
							alt={item.title}
							fill
							className="object-cover object-center"
						/>

						{/* Overlay (desktop only) */}
						<div className="hidden md:block absolute inset-4 z-10 overflow-hidden">
							<div
								className="absolute inset-0 bg-black/50 transition-all duration-500 ease-in-out"
								style={{
									clipPath: hovered
										? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
										: "polygon(0 50%, 100% 100%, 100% 100%, 0 100%)",
								}}
							></div>
						</div>

						{/* Mobile overlay */}
						<div className="block md:hidden absolute inset-4 bg-black/50 z-10" />

						{/* Text */}
						<div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
							<h3 className="text-white text-2xl font-bold">{item.title}</h3>
							<p className="text-white text-lg mt-2">{item.description}</p>
						</div>
					</div>

					{/* CTA Button */}
					<div className="bg-[#b01f29] text-white text-center py-4 text-lg font-bold tracking-wide">
						<span className="flex items-center justify-center gap-2">
							<span className="text-2xl">+</span> VER MÁS
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
}

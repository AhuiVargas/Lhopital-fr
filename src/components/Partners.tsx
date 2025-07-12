"use client";

import Image from "next/image";
import Link from "next/link";

const partners = [
	{ name: "Trelleborg", src: "/partners/trelleborg-logo.svg", href: "/hazmat" },
	{ name: "Sava", src: "/partners/Sava.png", href: "/rescate" },
	{ name: "PGI", src: "/partners/PGI-logo.svg", href: "/proteccion-personal" },
	{
		name: "Fireline",
		src: "/partners/fireline-logo.svg",
		href: "/proteccion-personal",
	},
	{
		name: "BarriAire",
		src: "/partners/barriaire-logo.svg",
		href: "/proteccion-personal",
	},
	{
		name: "Cobra",
		src: "/partners/cobra-logo.svg",
		href: "/proteccion-personal",
	},
];

export default function Partners() {
	return (
		<section className="py-12 px-4 bg-[#FAF9F6] text-[#172E6E]">
			<h2 className="text-3xl font-semibold text-center mb-8">
				Nuestros Socios
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
				{partners.map((partner, index) => (
					<Link key={index} href={partner.href} passHref>
						<div key={index} className="relative w-32 h-16">
							<Image
								src={partner.src}
								alt={partner.name}
								fill
								className="object-contain"
								sizes="(max-width: 768px) 50vw, 150px"
							/>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}

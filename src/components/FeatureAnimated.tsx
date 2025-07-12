"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface FeatureAnimatedProps {
	direction: "left" | "right";
	title: string;
	description: string;
	imageSrc: string;
	alt?: string;
}

export default function FeatureAnimated({
	direction,
	title,
	description,
	imageSrc,
	alt = "",
}: FeatureAnimatedProps) {
	const isLeft = direction === "left";

	return (
		<section className="w-full py-10 px-4 md:px-20 bg-white text-left overflow-hidden">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative">
				{/* Image */}
				<motion.div
					initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, amount: 0.3, margin: "-150px" }}
					className={`relative z-0 order-1 ${
						isLeft ? "md:order-1" : "md:order-2"
					}`}
				>
					<Image
						src={imageSrc}
						alt={alt || title}
						width={800}
						height={600}
						className="w-full h-auto object-cover max-w-full"
					/>
				</motion.div>

				{/* Text Card */}
				<motion.div
					initial={{ opacity: 0, x: isLeft ? 100 : -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, amount: 0.3, margin: "-150px" }}
					className={`relative z-10 order-2 bg-[#F9FAFB] shadow-lg p-8 ${
						isLeft ? "md:-ml-20 md:order-2" : "md:-mr-20 md:order-1"
					}`}
				>
					<h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
						{title}
					</h3>
					<p className="text-base md:text-lg text-[#333] font-light leading-relaxed">
						{description}
					</p>
				</motion.div>
			</div>
		</section>
	);
}

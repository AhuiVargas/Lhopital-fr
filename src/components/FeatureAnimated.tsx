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
		<section className="w-full py-10 md:px-20 bg-white">
			<div
				className={`max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative`}
			>
				<motion.div
					initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className={`relative z-0 order-1 ${
						isLeft ? "md:order-1" : "md:order-2"
					}`}
				>
					<Image
						src={imageSrc}
						alt={alt || title}
						width={800}
						height={600}
						className="w-full h-auto object-cover shadow-md"
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: isLeft ? 100 : -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className={`relative z-10 order-2 ${
						isLeft ? "md:-ml-20 md:order-2" : "md:-mr-20 md:order-1"
					} bg-[#F9FAFB] shadow-lg p-8`}
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

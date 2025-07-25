"use client";

import Image from "next/image";
import CTAButton, { CatalogOption } from "./CTAButton";
import Modal from "./Modal";
import ContactForm from "./ContactForm";
import { useState } from "react";

interface FeatureIntroProps {
	title: string;
	subtitle: string;
	imageSrc: string;
	alt?: string;
	catalogOption?: CatalogOption[];
}

export default function FeatureIntro({
	title,
	subtitle,
	imageSrc,
	alt = "",
	catalogOption = [],
}: FeatureIntroProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleClick = () => {
		setIsModalOpen(true);
	};

	return (
		<section className="w-full bg-[#FAF9F6] py-16 px-6 md:px-20">
			<div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 items-center">
				{/* Left: Text + Desktop Buttons */}
				<div className="flex flex-col items-start text-left max-w-xl w-full">
					<h2 className="text-3xl md:text-5xl font-bold text-[#172E6E] mb-4">
						{title}
					</h2>
					<p className="text-lg md:text-xl text-[#333] font-light leading-relaxed mb-6">
						{subtitle}
					</p>

					{/* Desktop Buttons */}
					<div className="hidden md:flex w-full justify-start gap-4">
						<CTAButton onClick={handleClick} hovered>
							CONTÁCTANOS
						</CTAButton>
						<CTAButton catalogOptions={catalogOption} hovered>
							DESCARGAR CATÁLOGO
						</CTAButton>
					</div>
				</div>

				{/* Right: Image */}
				<div className="w-full">
					<Image
						src={imageSrc}
						alt={alt}
						width={600}
						height={400}
						className="w-full h-auto object-cover"
					/>
				</div>

				{/* Mobile Buttons */}
				<div className="flex md:hidden w-full justify-center mt-4 gap-4 flex-wrap">
					<CTAButton onClick={handleClick} hovered>
						CONTÁCTANOS
					</CTAButton>
					<CTAButton catalogOptions={catalogOption} hovered>
						DESCARGAR CATÁLOGO
					</CTAButton>
				</div>
			</div>

			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<ContactForm />
			</Modal>
		</section>
	);
}

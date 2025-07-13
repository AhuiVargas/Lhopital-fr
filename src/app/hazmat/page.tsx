'use client'

import FeatureIntro from "@/components/FeatureIntro";
import FeatureAnimated from "@/components/FeatureAnimated";
import HeroContainer from "@/components/HeroContainer";
import CTAButton from "@/components/CTAButton";
import Modal from "@/components/Modal";
import { useState } from "react";
import ContactoForm from "@/components/ContactForm";

export default function Hazmat() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const catalogOption = [
		{ label: "Catálogo Hazmat PGI", file: "/catalogues/rescue-catalog.pdf" },
	];

	return (
		<>
			<HeroContainer title="HazMat" imageSrc="/banners/hazmat.webp">
				<p className="text-lg md:text-2xl font-light max-w-xl">
					Diseñados específicamente para contención, recuperación y control de
					materiales peligrosos, descontaminación, derrames químicos y
					protección del medio ambiente.
				</p>
			</HeroContainer>
			<FeatureIntro
				title="La prioridad de nuestros equipos es proteger a los usuarios y prevenir situaciones de riesgo."
				subtitle=""
				imageSrc="https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/items/hazmat.webp"
				alt="Sava-bags"
				catalogOption={catalogOption}
			/>
			<section className="w-full bg-white py-20 px-6 md:px-20 ">
				<h1 className="text-3xl md:text-5xl text-red-600 font-bold text-center mb-10">
					EQUIPOS ESPECIALIZADOS EN:
				</h1>
				<FeatureAnimated
					direction="left"
					title="Equipos y soluciones"
					description="para la protección del medio ambiente personal de rescate y sociedad civil"
					imageSrc="https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/features/hazmat1.webp"
				/>

				<FeatureAnimated
					direction="right"
					title="Equipo destinado a la fuga de sustancias"
					description="en vías y espacios públicos, así como en la industria del petróleo, química y gas líquido. Tiene aplicaciones para uso en establecimientos de procesamientos químicos, refinerías, establecimientos para el proceso de gas líquido, terminales de gas, plataformas de investigación, perforación, transporte intercontinental, ferroviario y tuberías. "
					imageSrc="https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/features/hazmat2.webp"
				/>

				<FeatureAnimated
					direction="left"
					title="Sellado de tanques perforados"
					description="kits para sellados de tuberías y bolsas de drenaje con vacío que se adosan al lugar de uso mediante la aplicación de vacío, creado por una fuente de aire comprimido."
					imageSrc="https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/features/hazmat3.webp"
				/>
			</section>
			<section className="bg-[#FAF9F6] px-6 py-10 text-center text-black">
				<div className="max-w-xl mx-auto">
					<p className="text-lg md:text-xl leading-relaxed mb-8 text-justify">
						Le invitamos a conocer más sobre nuestros servicios y soluciones
						contactando a nuestros especialistas que con gusto atenderán su
						petición.
					</p>
					<CTAButton onClick={() => setIsModalOpen(true)} hovered>
						CONTÁCTANOS
					</CTAButton>
				</div>
			</section>

			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<ContactoForm />
			</Modal>
		</>
	);
}

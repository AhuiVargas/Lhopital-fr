'use client'

import ContactoForm from "@/components/ContactForm";
import CTAButton from "@/components/CTAButton";
import FeatureAnimated from "@/components/FeatureAnimated";
import FeatureIntro from "@/components/FeatureIntro";
import HeroContainer from "@/components/HeroContainer";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Rescue() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const catalogOptions = [
		{ label: "Catálogo Rescate", file: "https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/catalogues/rescue-catalog.pdf" },
	];

	return (
		<>
			<HeroContainer title="Rescate Técnico" imageSrc="https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/banners/rescate.webp">
				<p>
					Contamos con equipos para las diferentes especialidades que atienden
					los profesionales. Equipos para rescate vehicular liviano y pesado,
					rescate en estructuras colapsadas (USAR) y recuperación de vehículos
					pesados y comerciales.
				</p>
			</HeroContainer>
			<FeatureIntro
				title="Todos nuestros equipos cuentan con las certificaciones más importantes a nivel mundial"
				subtitle="como NFPA y EN que garantizan el buen funcionamiento y rendimiento de los equipos aún en los escenarios más complejos."
				imageSrc="https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/items/rescate.webp"
				alt="Rescate Item"
				catalogOption={catalogOptions}
			/>
			<section className="w-full bg-white text-red-600 py-20 px-6 md:px-20 ">
				<h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
					EQUIPOS ESPECIALIZADOS EN:
				</h1>
				<FeatureAnimated
					direction="left"
					title="Equipo diseñado con enfoque especializado"
					description="de acuerdo con las necesidades de los usuarios y de las operaciones de rescate, 
						fabricados con alta tecnología bajo los requerimientos de NFPA 1936, EN 13731 y EN 13204."
					imageSrc="https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/features/rescate1.webp"
				/>

				<FeatureAnimated
					direction="right"
					title="Equipos para recuperación"
					description="de vehículos comerciales, vehículos de transporte y todo lo referente a rescate vehicular"
					imageSrc="https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/features/rescate2.webp"
				/>

				<FeatureAnimated
					direction="left"
					title="Sistemas de estabilización"
					description="primaria y secundaria para rescate en estructuras colapsadas, trincheras y espacios confinados"
					imageSrc="https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/features/rescate3.webp"
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

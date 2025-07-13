"use client";

import ContactoForm from "@/components/ContactForm";
import CTAButton from "@/components/CTAButton";
import FeatureAnimated from "@/components/FeatureAnimated";
import FeatureIntro from "@/components/FeatureIntro";
import HeroContainer from "@/components/HeroContainer";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function PersonalProtection() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const catalogOptions = [
		{
			label: "Catálogo BarriAire-Carbon",
			file: "https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/catalogues/pgi-hood-carbon.pdf",
		},
		{ label: "Catálogo BarriAire-Gold", file: "https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/catalogues/pgi-hood-gold.pdf" },
		{ label: "Catálogo PGI-Fireline-Suits", file: "https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/catalogues/pgi-suits.pdf" },
	];

	return (
		<>
			<HeroContainer
				title="Protección Personal"
				imageSrc="https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/banners/proteccion-personal.webp"
			>
				<p className="text-lg md:text-2xl font-light max-w-xl">
					El equipo de protección personal es la parte más importante para
					salvaguardar la integridad de bomberos y rescatistas, por eso contamos
					con los equipos de protección personal más ergonómicos y seguros para
					los profesionales.
				</p>
			</HeroContainer>
			<FeatureIntro
				title="Todos nuestros equipos cuentan con certificación NFPA "
				subtitle="(National Fire Protection Association), garantizando la seguridad y calidad de los equipos."
				imageSrc="https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/items/pp.webp"
				alt="Protección Personal item"
				catalogOption={catalogOptions}
			/>
			<section className="w-full bg-white text-red-600 py-20 px-6 md:px-20 ">
				<h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
					EQUIPOS ESPECIALIZADOS EN:
				</h1>
				<FeatureAnimated
					direction="left"
					title="Protección para bomberos y rescatistas"
					description="que garanticen su seguridad con base en su especialidad bajo los requerimientos de la NFPA 1971, 1977, 1975, 1951, 1999."
					imageSrc="https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/features/proteccion1.webp"
				/>

				<FeatureAnimated
					direction="right"
					title="Equipo multipropósito con doble certificación"
					description="para actividades de rescate técnico e incendios forestales, ergonómicos y seguros para los usuarios que atienden más de una especialidad."
					imageSrc="https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/features/proteccion2.webp"
				/>

				<FeatureAnimated
					direction="left"
					title="Equipos personalizados"
					description="desarrollados y fabricados de acuerdo a las necesidades específicas de los cuerpos de rescate y emergencias"
					imageSrc="https://nqtkjfgimpbdtfwigbpq.supabase.co/storage/v1/object/public/site-assets-bucket/features/proteccion3.webp"
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

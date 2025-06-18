import FeatureAnimated from "@/components/FeatureAnimated";
import FeatureIntro from "@/components/FeatureIntro";
import HeroContainer from "@/components/HeroContainer";

export default function PersonalProtection() {
	const catalogOptions = [
		{
			label: "Catálogo BarriAire-Carbon",
			file: "/catalogues/pgi-hood-carbon.pdf",
		},
		{ label: "Catálogo BarriAire-Gold", file: "/catalogues/pgi-hood-gold.pdf" },
		{ label: "Catálogo PGI-Fireline-Suits", file: "/catalogues/pgi-suits.pdf" },
	];

	return (
		<>
			<HeroContainer
				title="Protección Personal"
				imageSrc="/banners/proteccion-personal.jpg"
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
				imageSrc="/items/pp.png"
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
					imageSrc="/features/proteccion1.jpg"
				/>

				<FeatureAnimated
					direction="right"
					title="Equipo multipropósito con doble certificación"
					description="para actividades de rescate técnico e incendios forestales, ergonómicos y seguros para los usuarios que atienden más de una especialidad."
					imageSrc="/features/proteccion2.jpg"
				/>

				<FeatureAnimated
					direction="left"
					title="Equipos personalizados"
					description="desarrollados y fabricados de acuerdo a las necesidades específicas de los cuerpos de rescate y emergencias"
					imageSrc="/features/proteccion3.jpeg"
				/>
			</section>
		</>
	);
}

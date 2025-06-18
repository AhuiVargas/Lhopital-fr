//   <p>Trelleborg</p>
//   <p>Salva</p>

import FeatureIntro from "@/components/FeatureIntro";
import FeatureAnimated from "@/components/FeatureAnimated";
import HeroContainer from "@/components/HeroContainer";

export default function Hazmat() {
	const catalogOption = [
		{ label: "Catálogo Hazmat PGI", file: "/catalogues/rescue-catalog.pdf" },
	];

	return (
		<>
			<HeroContainer title="HazMat" imageSrc="/banners/hazmat.jpg">
				<p className="text-lg md:text-2xl font-light max-w-xl">
					Diseñados específicamente para contención, recuperación y control de
					materiales peligrosos, descontaminación, derrames químicos y
					protección del medio ambiente.
				</p>
			</HeroContainer>
			<FeatureIntro
				title="La prioridad de nuestros equipos es proteger a los usuarios y prevenir situaciones de riesgo."
				subtitle=""
				imageSrc="/items/hazmat.png"
				alt="Sava-bags"
				catalogOption={catalogOption}
			/>
			<section className="w-full bg-white text-red-600 py-20 px-6 md:px-20 ">
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">EQUIPOS ESPECIALIZADOS EN:</h1>
				<FeatureAnimated
					direction="left"
					title="Equipo destinado a la fuga de sustancias en vías y espacios públicos"
					description="así como en la industria del petróleo, química y gas líquido. 
                        Tiene aplicaciones para uso en establecimientos de procesamientos químicos, refinerías, 
                        establecimientos para el proceso de gas líquido, terminales de gas, plataformas de investigación, 
                        perforación, transporte intercontinental, ferroviario y tuberías."
					imageSrc="/features/hazmat-sealing.jpg"
				/>

				<FeatureAnimated
					direction="right"
					title="Protección del usuario"
					description="Equipos especializados para garantizar la seguridad en todo momento."
					imageSrc="/banners/rescate.jpg"
				/>

				<FeatureAnimated
					direction="left"
					title="Certificación internacional"
					description="Cumplimos con los más altos estándares globales en calidad y rendimiento."
					imageSrc="/banners/rescate.jpg"
				/>
			</section>
		</>
	);
}

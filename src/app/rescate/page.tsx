//   <p>Trelleborg</p>
//   <p>Salva</p>

import FeatureIntro from "@/components/FeatureIntro";
import HeroContainer from "@/components/HeroContainer";

export default function Rescue() {
	const catalogOptions = [
		{ label: "Catálogo Rescate", file: "/catalogues/rescue-catalog.pdf" },
	];

	return (
		<>
			<HeroContainer title="Rescate Técnico" imageSrc="/banners/rescate.jpg">
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
				imageSrc="/items/rescate.png"
				alt="Rescate Item"
				catalogOption={catalogOptions}
			/>
		</>
	);
}

//   <p>Trelleborg</p>
//   <p>Salva</p>

import HeroContainer from "@/components/HeroContainer";

export default function Hazmat() {
	return (
		<HeroContainer title="HazMat" imageSrc="/banners/hazmat.jpg">
			<p className="text-lg md:text-2xl font-light max-w-xl">
				Diseñados específicamente para contención, recuperación y control de
				materiales peligrosos, descontaminación, derrames químicos y protección
				del medio ambiente.
			</p>
			<br />
			<p className="text-lg md:text-2xl font-light max-w-xl">
				La prioridad de nuestros equipos es proteger a los usuarios y prevenir
				situaciones de riesgo.
			</p>
		</HeroContainer>
	);
}

import FeatureIntro from "@/components/FeatureIntro";
import HeroContainer from "@/components/HeroContainer";

export default function PersonalProtection() {

    const catalogOptions = [
        { label: "Catálogo BarriAire-Carbon", file: "/catalogues/pgi-hood-carbon.pdf" },
        { label: "Catálogo BarriAire-Gold", file: "/catalogues/pgi-hood-gold.pdf" },
        { label: "Catálogo PGI-Fireline-Suits", file: "/catalogues/pgi-suits.pdf" },
    ]

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
		</>
	);
}

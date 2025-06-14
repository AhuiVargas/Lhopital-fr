//   <p>PGI</p>
//   <p>Fireline</p>
//   <p>BarriAire</p>
//   <p>Cobra</p

import Image from "next/image";

export default function PersonalProtection() {
	return (
		<section className="relative w-full h-screen bg-[#272828] overflow-hidden flex items-center justify-center px-8 md:px-20">
			{/* Background image */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/banners/proteccion-personal.jpg"
					alt="Proteccion Personal"
					fill
					className="object-cover w-full h-full"
				/>
			</div>

			{/* Overlay (optional) */}
			<div className="absolute inset-0 bg-[#172E6E]/60 z-0" />

			<div className="relative z-20 w-full flex flex-col md:flex-row items-center justify-between h-full">
				<div className="w-full md:w-1/2 h-full flex items-center justify-start"></div>

				{/* Right-side text */}
				<div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start text-white">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">
						Equipo de Protección Personal
					</h1>
					<p className="text-lg md:text-2xl font-light max-w-xl">
						El equipo de protección personal es la parte más importante para
						salvaguardar la integridad de bomberos y rescatistas, por eso
						contamos con los equipos de protección personal más ergonómicos y
						seguros para los profesionales.
					</p>
					<br />
					<p className="text-lg md:text-2xl font-light max-w-xl">
						Todos nuestros equipos cuentan con certificación NFPA (National Fire
						Protection Associtation) por sus siglas en inglés, garantizando la
						seguridad y calidad de los equipos.{" "}
					</p>
				</div>
			</div>
		</section>
	);
}

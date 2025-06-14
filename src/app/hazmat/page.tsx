//   <p>Trelleborg</p>
//   <p>Salva</p>

import Image from "next/image";

export default function Hazmat() {
	return (
		<section className="relative w-full h-screen bg-[#272828] overflow-hidden flex items-center justify-center px-8 md:px-20">
			{/* Background image */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/banners/hazmat.jpg"
					alt="hazmat"
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
					<h1 className="text-4xl md:text-6xl font-bold mb-4">Equipo Hazmat</h1>
					<p className="text-lg md:text-2xl font-light max-w-xl">
						Diseñados específicamente para contención, recuperación y control de
						materiales peligrosos, descontaminación, derrames químicos y
						protección del medio ambiente.
					</p>
					<br />
					<p className="text-lg md:text-2xl font-light max-w-xl">
						La prioridad de nuestros equipos es proteger a los usuarios y
						prevenir situaciones de riesgo.
					</p>
				</div>
			</div>
		</section>
	);
}

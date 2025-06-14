//   <p>Trelleborg</p>
//   <p>Salva</p>

import Image from "next/image";

export default function Rescue() {
	return (
		<section className="relative w-full h-screen bg-[#272828] overflow-hidden flex items-center justify-center px-8 md:px-20">
			{/* Background image */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/banners/rescate.jpg"
					alt="Rescate"
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
						Rescate Vehicular
					</h1>
					<p className="text-lg md:text-2xl font-light max-w-xl">
						Contamos con equipos para las diferentes especialidades que atienden
						los profesionales. Equipos para rescate vehicular liviano y pesado,
						rescate en estructuras colapsadas (USAR) y recuperación de vehículos
						pesados y comerciales.
					</p>
                    <br />
					<p className="text-lg md:text-2xl font-light max-w-xl">
						Todos nuestros equipos con las certificaciones más importantes a
						nivel mundial como NFPA y EN que garantizan el buen funcionamiento y
						rendimiento de los equipos aún en los escenarios más complejos.
					</p>
				</div>
			</div>
		</section>
	);
}

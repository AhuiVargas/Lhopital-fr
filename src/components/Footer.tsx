"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-black border-t border-[#b01f29] text-white text-sm py-8 px-4">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
				{/* Column 1: Logo */}
				<div className="flex flex-col items-center md:items-start">
					<Image
						src="/LP-logos/horiz_oscuro_bw.png"
						alt="Lhopital Logo"
						width={200}
						height={40}
						className="h-auto"
						priority
					/>
				</div>

				{/* Column 2: Contact info */}
				<div className="flex flex-col gap-1 items-center md:items-center">
					<p>CDMX, MX</p>
					<a href="tel:+525594705028" className="hover:underline">
						+52 (55) 9470 5028
					</a>
					<a href="mailto:contacto@lhopital-fr.mx" className="hover:underline">
						contacto@lhopital-fr.mx
					</a>
				</div>

				{/* Column 3: Legal */}
				<div className="flex flex-col gap-1 items-center md:items-end">
					<Link href="/aviso-de-privacidad" className="hover:underline">
						Aviso de privacidad
					</Link>
					<Link href="/terminos-y-condiciones" className="hover:underline">
						Términos y condiciones
					</Link>
					<p>Lhopital © Todos los derechos reservados</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

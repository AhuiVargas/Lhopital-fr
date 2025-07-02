"use client";

import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-black border-t border-[#b01f29] text-white text-sm py-8 px-4">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
				<div>
					<p>CDMX, MX</p>
					<a href="tel:+525594705028" className="hover:underline">
						+52 (55) 9470 5028
					</a>{" "}
				</div>

				<div>
					<p>Lhopital © Todos los derechos reservados</p>
				</div>

				<div className="flex gap-4">
					<Link href="/aviso-de-privacidad" className="hover:underline">
						Aviso de privacidad
					</Link>
					<Link href="/terminos-y-condiciones" className="hover:underline">
						Términos y condiciones
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

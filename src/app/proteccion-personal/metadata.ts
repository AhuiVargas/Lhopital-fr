import { Metadata } from 'next';
import { generateSEOMetadata } from '@/components/SEO';

export const metadata: Metadata = generateSEOMetadata({
	title: "Protección Personal para Bomberos",
	description: "Equipos de protección personal certificados NFPA para bomberos y rescatistas. Trajes ergonómicos y seguros con certificación NFPA 1971, 1977, 1975, 1951, 1999.",
	keywords: "protección personal bomberos, equipos NFPA, trajes bomberos, protección rescatistas, equipos certificados bomberos",
	canonical: "/proteccion-personal",
});

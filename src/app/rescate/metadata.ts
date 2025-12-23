import { Metadata } from 'next';
import { generateSEOMetadata } from '@/components/SEO';

export const metadata: Metadata = generateSEOMetadata({
	title: "Rescate Técnico",
	description: "Equipos especializados para rescate técnico: rescate vehicular, estructuras colapsadas (USAR), espacios confinados. Certificaciones NFPA 1936, EN 13731 y EN 13204.",
	keywords: "rescate técnico, rescate vehicular, USAR, espacios confinados, equipos rescate, NFPA 1936, EN 13731, bomberos rescate",
	canonical: "/rescate",
});

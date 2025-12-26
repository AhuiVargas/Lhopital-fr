import { Metadata } from 'next';
import { generateSEOMetadata } from '@/components/SEO';

export const metadata: Metadata = generateSEOMetadata({
	title: "HAZMAT - Materiales Peligrosos",
	description: "Equipos especializados para contención, recuperación y control de materiales peligrosos. Soluciones para descontaminación, derrames químicos y protección ambiental.",
	keywords: "HAZMAT, materiales peligrosos, descontaminación, derrames químicos, protección ambiental, equipos químicos",
	canonical: "/hazmat",
});

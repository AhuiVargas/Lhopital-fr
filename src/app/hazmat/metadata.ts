import { Metadata } from 'next';
import { generateSEOMetadata } from '@/components/SEO';

export const metadata: Metadata = generateSEOMetadata({
	title: "Equipo HAZMAT — Distribuidor Exclusivo Trelleborg y SAVA en México",
	description: "Kits Trelleborg y SAVA para sellado de tuberías y tanques perforados, contención de fugas y manejo de materiales peligrosos. Distribuidores exclusivos en México para bomberos y protección civil.",
	keywords: "equipo HAZMAT México, Trelleborg México, SAVA México, sellado de fugas, materiales peligrosos, kit hazmat bomberos, contención químicos",
	canonical: "/hazmat",
});
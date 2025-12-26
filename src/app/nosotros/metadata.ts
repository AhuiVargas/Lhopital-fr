import { Metadata } from 'next';
import { generateSEOMetadata } from '@/components/SEO';

export const metadata: Metadata = generateSEOMetadata({
	title: "Nosotros - Empresa de Rescate",
	description: "Lhopital FR es una empresa mexicana especializada en soluciones integrales para Protección Civil, Bomberos y Rescate. Trabajamos con gobiernos municipales, estatales y federales.",
	keywords: "empresa rescate, protección civil, bomberos profesionales, rescate México, equipos emergencia, servicios rescate",
	canonical: "/nosotros",
});

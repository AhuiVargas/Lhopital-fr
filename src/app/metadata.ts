import { Metadata } from 'next';
import { generateSEOMetadata } from '@/components/SEO';

export const metadata: Metadata = generateSEOMetadata({
	title: "Inicio",
	description: "Lhopital-FR es líder en equipos de rescate y emergencias en México. Ofrecemos soluciones integrales para bomberos, protección civil y servicios de rescate técnico con certificaciones NFPA y EN.",
	keywords: "bomberos México, equipos rescate, emergencias México, protección civil, rescate técnico, HAZMAT, equipos bomberos profesionales",
	canonical: "/",
});

import { Metadata } from 'next';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function generateSEOMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/og-image.jpg',
  noindex = false,
}: SEOProps): Metadata {
  const baseUrl = 'https://www.lhopital-fr.mx';
  const fullTitle = `${title} | Lhopital-FR - Equipos de Rescate y Emergencias`;
  
  return {
    title: fullTitle,
    description,
    keywords: keywords || 'bomberos, rescate, emergencias, protección civil, equipos de rescate, México, servicios de emergencia',
    robots: noindex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      title: fullTitle,
      description,
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      siteName: 'Lhopital-FR',
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'es_ES',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`],
    },
    alternates: {
      canonical: canonical ? `${baseUrl}${canonical}` : baseUrl,
    },
  };
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Lhopital-FR',
    description: 'Empresa especializada en equipos de rescate, protección civil y servicios de emergencia en México',
    url: 'https://www.lhopital-fr.mx/',
    telephone: '+52-55-9470-5028',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CDMX',
      addressLocality: 'México',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.320772,
      longitude: -99.180272,
    },
    openingHours: 'Mo-Fr 08:00-18:00',
    sameAs: [
      'https://www.instagram.com/lhopitalfr/',
      'https://www.linkedin.com/company/lhopital-fr',
      'https://www.facebook.com/profile.php?id=61584152751638&ref=pl_edit_xav_ig_profile_page_web#',
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'México',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Rescate y Emergencias',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'ProductGroup',
            name: 'Equipos de Rescate Técnico',
            description: 'Equipos especializados para rescate vehicular, estructuras colapsadas y espacios confinados',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'ProductGroup',
            name: 'Protección Personal',
            description: 'Equipos de protección individual para bomberos y personal de emergencias',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'ProductGroup',
            name: 'Materiales Peligrosos (HAZMAT)',
            description: 'Equipos especializados para manejo de materiales peligrosos',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
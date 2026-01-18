import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'BreadcrumbList' | 'Service' | 'LocalBusiness';
  data?: Record<string, any>;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'fr';
  const baseUrl = 'https://www.drcpioneers.com';

  useEffect(() => {
    const generateStructuredData = () => {
      let structuredData: Record<string, any> = {};

      if (type === 'Organization') {
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'DRC Pioneer Partners',
          alternateName: 'DRC Pioneers',
          url: baseUrl,
          logo: `${baseUrl}/logo.png`,
          description: currentLang === 'fr' 
            ? 'Partenaire exclusif ICXI en RDC. Cabinet de conseil et de formation spécialisé en expérience client.'
            : 'Exclusive ICXI partner in DRC. Consulting and training firm specialized in customer experience.',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'CD',
            addressLocality: 'Kinshasa',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: 'contact@drcpioneers.com',
            availableLanguage: ['French', 'English'],
          },
          sameAs: [
            // Add social media links if available
          ],
          ...data,
        };
      } else if (type === 'WebSite') {
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'DRC Pioneers',
          url: baseUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
          ...data,
        };
      } else if (type === 'BreadcrumbList') {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const breadcrumbs = [
          {
            '@type': 'ListItem',
            position: 1,
            name: currentLang === 'fr' ? 'Accueil' : 'Home',
            item: baseUrl,
          },
        ];

        let currentPath = '';
        pathSegments.forEach((segment, index) => {
          currentPath += `/${segment}`;
          const segmentName = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          
          breadcrumbs.push({
            '@type': 'ListItem',
            position: index + 2,
            name: segmentName,
            item: `${baseUrl}${currentPath}`,
          });
        });

        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs,
          ...data,
        };
      } else if (type === 'Service') {
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Customer Experience Consulting',
          provider: {
            '@type': 'Organization',
            name: 'DRC Pioneer Partners',
          },
          areaServed: {
            '@type': 'Country',
            name: 'Democratic Republic of the Congo',
          },
          ...data,
        };
      } else if (type === 'LocalBusiness') {
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'DRC Pioneer Partners',
          image: `${baseUrl}/logo.png`,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kinshasa',
            addressCountry: 'CD',
          },
          ...data,
        };
      } else {
        structuredData = data || {};
      }

      return structuredData;
    };

    const structuredData = generateStructuredData();
    const scriptId = `structured-data-${type || 'custom'}`;

    // Remove existing script if any
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Create and append new script
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [location.pathname, currentLang, type, data]);

  return null;
};

export default StructuredData;

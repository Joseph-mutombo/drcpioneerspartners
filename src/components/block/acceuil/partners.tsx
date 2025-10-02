import React from 'react';
import icxiLogo from '@/assets/images/partners/ICXI.png';
import bsiLogo from '@/assets/images/partners/bsi-logo.avif';

interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
  description: string;
  category: 'primary' | 'certification' | 'academic';
}

const Partners = () => {
  const partners: Partner[] = [
    {
      id: 'icxi',
      name: 'International Customer Experience Institute',
      logo: icxiLogo,
      website: 'https://www.icxi.com',
      description: 'Organisation mondiale basée à Dubaï, leader en standards CX/EX',
      category: 'primary'
    },
    {
      id: 'bsi',
      name: 'British Standards Institution',
      logo: bsiLogo,
      website: 'https://www.bsigroup.com',
      description: 'Corps de certification indépendant international',
      category: 'certification'
    },
    {
      id: 'almaktoum',
      name: 'Al-Maktoum College',
      logo: icxiLogo,
      website: 'https://www.almcollege.ac.ae',
      description: 'Partenaire académique pour le MSc en Customer Experience',
      category: 'academic'
    },
    {
      id: 'abertay',
      name: 'Abertay University',
      logo: icxiLogo,
      website: 'https://www.abertay.ac.uk',
      description: 'Partenaire académique pour les programmes CX & Service Management',
      category: 'academic'
    },
    {
      id: 'pretoria',
      name: 'University of Pretoria',
      logo: icxiLogo,
      website: 'https://www.up.ac.za',
      description: 'Partenaire pour la Chaire d\'Expérience Client et formations',
      category: 'academic'
    }
  ];

  const handlePartnerClick = (website: string, name: string) => {
    window.open(website, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-brand-gray border-t border-brand-gray-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl font-bold text-brand-blue mb-4"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            Nos Partenaires Principaux
          </h2>
          <p 
            className="text-lg text-brand-blue/80 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            DRC Pioneer Partners s'appuie sur un réseau de partenaires internationaux reconnus 
            pour garantir l'excellence et la crédibilité de nos services en RDC.
          </p>
        </div>

        {/* Primary Partners (ICXI & BSI) */}
        <div className="mb-16">
          {/* <h3 
            className="text-center text-xl font-semibold text-brand-blue mb-8"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            Partenaires Principaux
          </h3> */}
          <div 
            className="flex flex-wrap justify-center items-center gap-12 lg:gap-16"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            {partners.filter(partner => partner.category === 'primary' || partner.category === 'certification').map((partner) => (
              <div
                key={partner.id}
                className="group cursor-pointer transition-all duration-300 transform hover:scale-105"
                onClick={() => handlePartnerClick(partner.website, partner.name)}
                role="button"
                tabIndex={0}
                aria-label={`Visiter le site de ${partner.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handlePartnerClick(partner.website, partner.name);
                  }
                }}
              >
                <div className="bg-white rounded-lg shadow-sm border border-brand-gray-dark p-2 hover:shadow-lg hover:border-yellow-500 transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={`Logo de ${partner.name}`}
                    className="w-auto mx-auto  transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium text-brand-blue">{partner.name}</p>
                    <p className="text-xs text-brand-blue/70 mt-1">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Partners */}
        {/* <div>
          <h3 
            className="text-center text-xl font-semibold text-brand-blue mb-8"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="500"
          >
            Partenaires Académiques
          </h3>
          <div 
            className="flex flex-wrap justify-center items-center gap-8 lg:gap-12"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="600"
          >
            {partners.filter(partner => partner.category === 'academic').map((partner) => (
              <div
                key={partner.id}
                className="group cursor-pointer transition-all duration-300 transform hover:scale-105"
                onClick={() => handlePartnerClick(partner.website, partner.name)}
                role="button"
                tabIndex={0}
                aria-label={`Visiter le site de ${partner.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handlePartnerClick(partner.website, partner.name);
                  }
                }}
              >
                <div className="bg-white rounded-lg shadow-sm border border-brand-gray-dark p-6 hover:shadow-lg hover:border-yellow-500 transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={`Logo de ${partner.name}`}
                    className="h-12 w-auto mx-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="mt-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium text-brand-blue">{partner.name}</p>
                    <p className="text-xs text-brand-blue/70 mt-1">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Trust Indicators */}
        {/* <div 
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="700"
        >
          <div className="inline-flex items-center space-x-4 bg-yellow-50 rounded-full px-6 py-3 border border-yellow-200">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-brand-blue">
                Certifications Internationalement Reconnues
              </span>
            </div>
            <div className="w-px h-6 bg-yellow-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-500"></div>
              <span className="text-sm font-medium text-brand-blue">
                Standards Mondiaux Validés
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Partners;

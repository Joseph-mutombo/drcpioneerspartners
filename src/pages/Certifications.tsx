import CertificationHero from '@/components/block/certification/CertificationHero';
import CertificationPrograms from '@/components/block/certification/CertificationPrograms';
import CertificationTypes from '@/components/block/certification/CertificationTypes';
import CertificationProcess from '@/components/block/certification/CertificationProcess';
import CertificationComingSoon from '@/components/block/certification/CertificationComingSoon';
import CertificationRequestForm from '@/components/block/certification/CertificationRequestForm';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Certifications() {
  const location = useLocation();

  useEffect(() => {
    // Scroll vers l'élément si un hash est présent dans l'URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100); // Petit délai pour s'assurer que l'élément est rendu
      }
    } else {
      // Si aucun hash, scroll vers le haut de la page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);
  
  return (
    <div>
      <CertificationHero />
      <CertificationPrograms />
      <CertificationTypes />
      {/* <CertificationProcess /> */}
      {/* <CertificationComingSoon /> */}
      <CertificationRequestForm />
    </div>
  );
}

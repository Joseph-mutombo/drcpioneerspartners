import ICXSHero from '@/components/block/certification/icxs/ICXSHero';
import ICXSOverview from '@/components/block/certification/icxs/ICXSOverview';
import ICXSElements from '@/components/block/certification/icxs/ICXSElements';
import ICXSScoring from '@/components/block/certification/icxs/ICXSScoring';
import ICXSBenefits from '@/components/block/certification/icxs/ICXSBenefits';
import CertificationRequestForm from '@/components/block/certification/CertificationRequestForm';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function ICXS() {
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
        }, 100);
      }
    } else {
      // Si aucun hash, scroll vers le haut de la page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);
  
  return (
    <div>
      <ICXSHero />
      <ICXSOverview />
      <ICXSElements />
      <ICXSScoring />
      <ICXSBenefits />
      <CertificationRequestForm />
    </div>
  );
}


import IEHWSHero from '@/components/block/certification/iehws/IEHWSHero';
import IEHWSOverview from '@/components/block/certification/iehws/IEHWSOverview';
import IEHWSElements from '@/components/block/certification/iehws/IEHWSElements';
import IEHWSScoring from '@/components/block/certification/iehws/IEHWSScoring';
import IEHWSPledge from '@/components/block/certification/iehws/IEHWSPledge';
import IEHWSPathfinder from '@/components/block/certification/iehws/IEHWSPathfinder';
import IEHWSBenefits from '@/components/block/certification/iehws/IEHWSBenefits';
import CertificationRequestForm from '@/components/block/certification/CertificationRequestForm';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function IEHWS() {
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
      <IEHWSHero />
      <IEHWSOverview />
      <IEHWSElements />
      <IEHWSScoring />
      <IEHWSPledge />
      <IEHWSPathfinder />
      <IEHWSBenefits />
      <CertificationRequestForm />
    </div>
  );
}


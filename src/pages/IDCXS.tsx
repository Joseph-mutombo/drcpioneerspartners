import IDCXSHero from '@/components/block/certification/idcxs/IDCXSHero';
import IDCXSOverview from '@/components/block/certification/idcxs/IDCXSOverview';
import IDCXSElements from '@/components/block/certification/idcxs/IDCXSElements';
import IDCXSScoring from '@/components/block/certification/idcxs/IDCXSScoring';
import IDCXSBenefits from '@/components/block/certification/idcxs/IDCXSBenefits';
import CertificationRequestForm from '@/components/block/certification/CertificationRequestForm';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function IDCXS() {
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
      <IDCXSHero />
      <IDCXSOverview />
      <IDCXSElements />
      <IDCXSScoring />
      <IDCXSBenefits />
      <CertificationRequestForm />
    </div>
  );
}


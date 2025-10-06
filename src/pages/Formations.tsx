import FormationHero from '@/components/block/formation/FormationHero';
import FormationPrograms from '@/components/block/formation/FormationPrograms';
import FormationTypes from '@/components/block/formation/FormationTypes';
import FormationProcess from '@/components/block/formation/FormationProcess';
import FormationComingSoon from '@/components/block/formation/FormationComingSoon';
import FormationRequestForm from '@/components/block/formation/FormationRequestForm';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Formations() {
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
      <FormationHero />
      <FormationPrograms />
      <FormationTypes />
      <FormationProcess />
      {/* <FormationComingSoon /> */}
      <FormationRequestForm />
    </div>
  );
}

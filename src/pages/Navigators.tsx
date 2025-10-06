import React from 'react';
import NavigatorHero from '@/components/block/navigators/NavigatorHero';
import NavigatorFeatures from '@/components/block/navigators/NavigatorFeatures';
import NavigatorTypes from '@/components/block/navigators/NavigatorTypes';
import NavigatorIndustries from '@/components/block/navigators/NavigatorIndustries';
import NavigatorImplementation from '@/components/block/navigators/NavigatorImplementation';
import NavigatorBenefits from '@/components/block/navigators/NavigatorBenefits';
import NavigatorCTA from '@/components/block/navigators/NavigatorCTA';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navigators = () => {
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
    <div className="min-h-screen bg-gray-50">
      <NavigatorHero />
      <NavigatorFeatures />
      <NavigatorTypes />
      <NavigatorIndustries />
      <NavigatorImplementation />
      <NavigatorBenefits />
      <NavigatorCTA />
    </div>
  );
};

export default Navigators;

import AuditHero from '@/components/block/audit/AuditHero';
import AuditServices from '@/components/block/audit/AuditServices';
import AuditProcess from '@/components/block/audit/AuditProcess';
import AuditBenefits from '@/components/block/audit/AuditBenefits';
import AuditRequestForm from '@/components/block/audit/AuditRequestForm';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Audit() {
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
      <AuditHero />
      <AuditServices />
      <AuditProcess />
      <AuditBenefits />
      <AuditRequestForm />
    </div>
  );
}

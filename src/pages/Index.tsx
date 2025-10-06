
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '@/components/block/acceuil/hero';
import Partners from '@/components/block/acceuil/partners';
import CertificationCall from '@/components/block/acceuil/certification-call';
import FormationCall from '@/components/block/acceuil/formation-call';
import PMECall from '@/components/block/acceuil/pme-call';
import Services from '@/components/block/acceuil/services';
import { WhyTiss } from '@/components/block/acceuil/why-tiss';
import { CtaAudit } from '@/components/block/acceuil/cta-audit';
//import Normes from '@/components/block/acceuil/normes';
import { CtaCertCompany } from '@/components/block/acceuil/cta-cert-company';

const Index = () => {
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
    <div className="text-brand-blue">
      <Hero />
      <WhyTiss />
      <CertificationCall />
      <Services />
      {/* <Normes /> */}
      <CtaCertCompany />
      <FormationCall />
      <CtaAudit />
      <PMECall />
      <CtaAudit />
      <Partners />
    </div>
  );
};

export default Index;

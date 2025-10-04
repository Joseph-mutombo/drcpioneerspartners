
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

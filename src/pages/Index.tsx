
import { useTranslation } from 'react-i18next';
import Hero from '@/components/block/hero';
import Partners from '@/components/block/partners';
import CertificationCall from '@/components/block/certification-call';
import FormationCall from '@/components/block/formation-call';
import PMECall from '@/components/block/pme-call';
import Services from '@/components/block/services';
import { WhyTiss } from '@/components/block/why-tiss';
import { CtaAudit } from '@/components/block/cta-audit';
import Normes from '@/components/block/normes';
import { CtaCertCompany } from '@/components/block/cta-cert-company';

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

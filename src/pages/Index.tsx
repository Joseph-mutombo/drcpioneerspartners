
import { useTranslation } from 'react-i18next';
import Hero from '@/components/block/hero';
import Partners from '@/components/block/partners';
import CertificationCall from '@/components/block/certification-call';
import FormationCall from '@/components/block/formation-call';
import PMECall from '@/components/block/pme-call';
import Services from '@/components/block/services';

const Index = () => {

  return (
    <div className="text-brand-blue">
      <Hero />
      <Services />
      <Partners />
      <CertificationCall />
      <FormationCall />
      <PMECall />
    </div>
  );
};

export default Index;

import CertificationHero from '@/components/block/certification/CertificationHero';
import CertificationPrograms from '@/components/block/certification/CertificationPrograms';
import CertificationTypes from '@/components/block/certification/CertificationTypes';
import CertificationProcess from '@/components/block/certification/CertificationProcess';
import CertificationComingSoon from '@/components/block/certification/CertificationComingSoon';
import CertificationRequestForm from '@/components/block/certification/CertificationRequestForm';

export default function Certifications() {
  return (
    <div>
      <CertificationHero />
      <CertificationPrograms />
      <CertificationTypes />
      {/* <CertificationProcess /> */}
      {/* <CertificationComingSoon /> */}
      <CertificationRequestForm />
    </div>
  );
}

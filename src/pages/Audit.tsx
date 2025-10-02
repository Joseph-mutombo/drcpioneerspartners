import AuditHero from '@/components/block/audit/AuditHero';
import AuditServices from '@/components/block/audit/AuditServices';
import AuditProcess from '@/components/block/audit/AuditProcess';
import AuditBenefits from '@/components/block/audit/AuditBenefits';
import AuditRequestForm from '@/components/block/audit/AuditRequestForm';

export default function Audit() {
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

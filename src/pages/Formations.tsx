import FormationHero from '@/components/block/formation/FormationHero';
import FormationPrograms from '@/components/block/formation/FormationPrograms';
import FormationTypes from '@/components/block/formation/FormationTypes';
import FormationProcess from '@/components/block/formation/FormationProcess';
import FormationComingSoon from '@/components/block/formation/FormationComingSoon';
import FormationRequestForm from '@/components/block/formation/FormationRequestForm';

export default function Formations() {
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
